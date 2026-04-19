import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from './components/Layout/AppLayout';
import Dashboard from './pages/Dashboard/Dashboard';
import Rentals from './pages/Rentals/Rentals';
import Expenses from './pages/Expenses/Expenses';
import Customers from './pages/Customers/Customers';
import Cars from './pages/Cars/Cars';
import Properties from './pages/Properties/Properties';
import Payments from './pages/Payments/Payments';
import Statistics from './pages/Statistics/Statistics';
import Users from './pages/Users/Users';
import Settings from './pages/Settings/Settings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="rentals" element={<Rentals />} />
          <Route path="cars" element={<Cars />} />
          <Route path="customers" element={<Customers />} />
          <Route path="properties" element={<Properties />} />
          <Route path="payments" element={<Payments />} />
          <Route path="expenses" element={<Expenses />} />
          <Route path="statistics" element={<Statistics />} />
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>

      <style dangerouslySetInnerHTML={{ __html: `
        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 2rem;
        }
        
        .page-header h1 {
          font-size: 2rem;
          color: var(--text-main);
          margin-bottom: 0.5rem;
        }
        
        .page-header p {
          color: var(--text-muted);
          font-size: 1rem;
        }
      `}} />
    </BrowserRouter>
  );
}

export default App;
