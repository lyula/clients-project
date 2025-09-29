import React, { useState } from 'react';

const AdminRegister = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [status] = useState('admin');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const strongPassword = (pwd) => {
    // At least 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special char
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/.test(pwd);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (!strongPassword(password)) {
      setError('Password must be at least 8 characters and include uppercase, lowercase, number, and special character.');
      return;
    }
    try {
      const token = localStorage.getItem('adminToken');
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/admins/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ username, password, status })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Registration failed');
      setSuccess('Admin registered successfully');
      setUsername('');
      setPassword('');
      setTimeout(() => {
        window.location.href = '/admin-login';
      }, 2000); // Redirect to login page after 2 seconds
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-white to-green-200 px-2">
      <form className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md flex flex-col gap-4" onSubmit={handleSubmit}>
        <h2 className="text-3xl font-extrabold mb-2 text-center text-green-700">Admin Register</h2>
        <p className="text-center text-gray-500 mb-2">Create a new admin account</p>
        {error && <div className="mb-2 text-red-500 text-center text-sm">{error}</div>}
        {success && <div className="mb-2 text-green-500 text-center text-sm">{success}</div>}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-700">Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
            autoComplete="username"
          />
        </div>
        <div className="flex flex-col gap-2 relative">
          <label className="text-sm font-semibold text-gray-700">Password</label>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter your password"
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 pr-10 ${password && !strongPassword(password) ? 'border-red-400' : 'border-gray-300'}`}
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            autoComplete="new-password"
          />
          <button
            type="button"
            className="absolute right-3 top-9 text-gray-500 hover:text-green-600"
            tabIndex={-1}
            onClick={() => setShowPassword((show) => !show)}
          >
            {showPassword ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-.37 1.21-1.01 2.317-1.858 3.236M15.362 17.362A9.958 9.958 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.956 9.956 0 012.638-4.362" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.956 9.956 0 012.638-4.362m3.634-2.362A9.956 9.956 0 0112 5c4.477 0 8.268 2.943 9.542 7a9.96 9.96 0 01-4.205 5.442M3 3l18 18" /></svg>
            )}
          </button>
          {password && !strongPassword(password) && (
            <span className="text-xs text-red-500 mt-1">Password must be at least 8 characters and include uppercase, lowercase, number, and special character.</span>
          )}
        </div>
        {/* Role is always admin, cannot be changed by user */}
        <input type="hidden" value={status} name="status" />
        <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-green-700 transition shadow">Register</button>
        <div className="mt-2 text-center">
          <span className="text-gray-600">Already have an account? </span>
          <a href="/admin-login" className="text-blue-600 hover:underline font-semibold">Login</a>
        </div>
      </form>
    </div>
  );
};

export default AdminRegister;
