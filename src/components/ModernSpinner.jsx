import React from 'react';

const ModernSpinner = () => (
  <div className="flex items-center justify-center">
    <span className="relative flex h-16 w-16">
      <span className="animate-spin absolute inline-flex h-full w-full rounded-full bg-gradient-to-tr from-blue-400 to-blue-600 opacity-30"></span>
      <span className="relative inline-flex rounded-full h-12 w-12 bg-white"></span>
    </span>
  </div>
);

export default ModernSpinner;
