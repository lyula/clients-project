import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CLOUDINARY_CLOUD = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_UNSIGNED_PRESET = import.meta.env.VITE_CLOUDINARY_UNSIGNED_PRESET;
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const ProofOfFundPage = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const uploadToCloudinary = async (file, sessionId) => {
    const url = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD}/image/upload`;
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UNSIGNED_PRESET);
    formData.append('folder', `kyc/${sessionId}`);

    const response = await fetch(url, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to upload image to Cloudinary');
    }

    return response.json();
  };

  const handleSubmit = async () => {
    if (!file) {
      setMessage('Please select a file to upload.');
      return;
    }

    setUploading(true);
    setMessage('Uploading...');

    try {
      const sessionId = localStorage.getItem('sessionId');
      if (!sessionId) {
        throw new Error('No active session found. Please start from the KYC documents page.');
      }

      const cloudinaryResponse = await uploadToCloudinary(file, sessionId);

      const backendResponse = await fetch(`${BACKEND_URL}/api/kyc`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sessionId,
          imageUrls: [cloudinaryResponse],
        }),
      });

      if (!backendResponse.ok) {
        throw new Error('Failed to update Proof of Fund in the backend');
      }

      setMessage('Proof of Fund uploaded successfully!');
      setTimeout(() => navigate('/kyc-documents'), 2000);
    } catch (error) {
      setMessage(error.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="proof-of-fund">
      <h1>Proof of Fund</h1>
      <p>Please upload a screenshot of your wallet dashboard showing sufficient funds for the export of the Gold consignment.</p>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button
        onClick={handleSubmit}
        disabled={uploading || !file}
        style={{
          marginTop: 16,
          background: '#FFD700',
          color: '#222',
          fontWeight: 700,
          fontSize: 16,
          borderRadius: 8,
          padding: '10px 0',
          width: '100%',
          border: 'none',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          cursor: uploading || !file ? 'not-allowed' : 'pointer',
          opacity: uploading || !file ? 0.6 : 1
        }}
      >
        {uploading ? 'Uploading...' : 'Submit Proof of Fund'}
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ProofOfFundPage;