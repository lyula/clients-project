import React, { useEffect, useState } from 'react';
import { FaUserShield, FaUsers, FaWallet, FaIdCard, FaBars } from 'react-icons/fa';

const AdminDashboard = () => {
  const [activePanel, setActivePanel] = useState('admin');
  const [admins, setAdmins] = useState([]);
  const [error, setError] = useState('');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false); // for mobile

  useEffect(() => {
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
  }, [activePanel]);

  // Sidebar width classes
  const sidebarWidth = sidebarCollapsed ? 'md:w-20 w-64' : 'w-64';

  return (
    <div className="min-h-screen flex bg-gray-100 overflow-hidden">
      {/* Sidebar */}
      <aside className={`fixed md:sticky top-0 left-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ${sidebarWidth} bg-gradient-to-b from-blue-700 to-blue-600 text-white flex flex-col z-50 shadow-lg md:h-screen md:w-72`} style={{ height: '100vh', marginTop: '0' }}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-blue-500">
            <span className="text-2xl font-bold flex items-center gap-2">
              <FaUserShield /> Admin Panel
              {/* Mobile close X button */}
              <button
                className="md:hidden ml-2 text-white text-xl focus:outline-none"
                onClick={() => setSidebarOpen(false)}
                aria-label="Close sidebar"
              >
                <span className="text-2xl">&times;</span>
              </button>
            </span>
            <button
              className="hidden md:block text-white text-2xl focus:outline-none"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              aria-label={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            >
              <FaBars />
            </button>
          </div>
          <nav className="flex-1 mt-2">
            <ul className="space-y-1 px-4">
              <li>
                <button onClick={() => setActivePanel('admin')} className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors font-medium ${activePanel === 'admin' ? 'bg-blue-100 text-blue-700' : 'hover:bg-blue-800'}`}>
                  <FaUsers className="text-lg" /> <span>Admin</span>
                </button>
              </li>
              <li>
                <button onClick={() => setActivePanel('customers')} className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors font-medium ${activePanel === 'customers' ? 'bg-blue-100 text-blue-700' : 'hover:bg-blue-800'}`}>
                  <FaUsers className="text-lg" /> <span>Customers</span>
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
          <div className="mt-auto p-4 text-xs text-blue-200 border-t border-blue-500">Legal Terms and Policies</div>
        </div>
      </aside>
      {/* Mobile Header */}
      <header className="md:hidden fixed top-0 left-0 right-0 bg-blue-700 text-white flex items-center justify-start px-4 py-3 z-40 shadow">
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
      </header>
      {/* Main Content */}
      <main className="flex-1 p-0 md:p-0 transition-all duration-300">
        <div className="w-full h-full">
          {activePanel === 'admin' && (
            <div className="w-full h-full bg-white rounded-lg shadow-lg flex flex-col items-center justify-center" style={{ minHeight: '100vh', maxWidth: '100%', margin: 0, padding: '2rem' }}>
              <h2 className="text-4xl font-bold mb-4 text-center">Admins</h2>
              {error && <div className="mb-4 text-red-500 text-center">{error}</div>}
              <div className="w-full overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-3 px-4 border">Username</th>
                      <th className="py-3 px-4 border">Status</th>
                      <th className="py-3 px-4 border">Created At</th>
                    </tr>
                  </thead>
                  <tbody>
                    {admins.map(admin => (
                      <tr key={admin._id} className="hover:bg-gray-50">
                        <td className="py-3 px-4 border text-center">{admin.username}</td>
                        <td className="py-3 px-4 border text-center capitalize">{admin.status}</td>
                        <td className="py-3 px-4 border text-center">{new Date(admin.createdAt).toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {activePanel === 'customers' && (
            <div className="w-full h-full bg-white rounded-lg shadow-lg flex flex-col items-center justify-center" style={{ minHeight: '100vh', maxWidth: '100%', margin: 0, padding: '2rem' }}>
              <h2 className="text-4xl font-bold mb-4 text-center">Customers</h2>
              <div className="text-gray-500 text-center">No customer data available.</div>
            </div>
          )}
          {activePanel === 'kyc' && (
            <div className="w-full h-full bg-white rounded-lg shadow-lg flex flex-col items-center justify-center" style={{ minHeight: '100vh', maxWidth: '100%', margin: 0, padding: '2rem' }}>
              <h2 className="text-4xl font-bold mb-4 text-center">KYC</h2>
              <div className="text-gray-500 text-center">No KYC data available.</div>
            </div>
          )}
          {activePanel === 'wallets' && (
            <div className="w-full h-full bg-white rounded-lg shadow-lg flex flex-col items-center justify-center" style={{ minHeight: '100vh', maxWidth: '100%', margin: 0, padding: '2rem' }}>
              <h2 className="text-4xl font-bold mb-4 text-center">Wallets</h2>
              <div className="text-gray-500 text-center">No wallet data available.</div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
