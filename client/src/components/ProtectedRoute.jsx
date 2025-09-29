import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // Adjust these keys as per your authentication logic
  const isAdmin = localStorage.getItem('isAdmin') === 'true';
  const isSuperAdmin = localStorage.getItem('isSuperAdmin') === 'true';

  if (!isAdmin && !isSuperAdmin) {
    return <Navigate to="/admin-login" replace />;
  }
  return children;
};

export default ProtectedRoute;
