import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WalletsPage from './pages/WalletsPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/wallets" element={<WalletsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
