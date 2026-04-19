import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { Bell, Search, User } from 'lucide-react';

const Header = () => (
  <header className="app-header glass">
    <div className="header-search">
      <Search size={18} className="search-icon" />
      <input type="text" placeholder="Qidiruv..." />
    </div>
    
    <div className="header-actions">
      <div className="action-tools">
        <button className="icon-btn notification-btn">
          <Bell size={20} />
          <span className="notification-dot pulse"></span>
        </button>
      </div>

      <div className="user-profile">
        <div className="user-info">
          <p className="user-name">Hasan Admin</p>
          <p className="user-role">Administrator</p>
        </div>
        <div className="avatar-wrapper">
          <div className="avatar">
            <User size={20} />
          </div>
          <div className="status-indicator"></div>
        </div>
      </div>
    </div>

    <style dangerouslySetInnerHTML={{ __html: `
      .app-header {
        height: var(--header-height);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 2.5rem;
        position: sticky;
        top: 0;
        z-index: 100;
        margin-left: var(--sidebar-width);
        background: rgba(255, 255, 255, 0.8);
        backdrop-filter: blur(12px);
        border-bottom: 1px solid var(--border-light);
      }

      .header-search {
        position: relative;
        width: 100%;
        max-width: 440px;
      }

      .search-icon {
        position: absolute;
        left: 14px;
        top: 50%;
        transform: translateY(-50%);
        color: var(--text-muted);
        transition: var(--tr-base);
      }

      .header-search input {
        width: 100%;
        padding: 0.75rem 1rem 0.75rem 2.8rem;
        border-radius: var(--radius-md);
        border: 1px solid transparent;
        background: #f1f5f9;
        font-family: var(--font-body);
        font-size: 0.95rem;
        transition: var(--tr-base);
        outline: none;
      }

      .header-search input:focus {
        background: white;
        border-color: var(--primary);
        box-shadow: 0 4px 12px var(--primary-glow);
      }

      .header-search input:focus + .search-icon {
        color: var(--primary);
      }

      .header-actions {
        display: flex;
        align-items: center;
        gap: 2rem;
      }

      .action-tools {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      .icon-btn {
        background: transparent;
        border: none;
        color: var(--text-muted);
        position: relative;
        padding: 10px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: var(--tr-base);
      }

      .icon-btn:hover {
        background: #f1f5f9;
        color: var(--primary);
        transform: translateY(-1px);
      }

      .notification-dot {
        position: absolute;
        top: 10px;
        right: 10px;
        width: 8px;
        height: 8px;
        background: var(--danger);
        border: 2px solid white;
        border-radius: 50%;
      }

      .pulse {
        animation: pulse-animation 2s infinite;
      }

      @keyframes pulse-animation {
        0% { box-shadow: 0 0 0 0px rgba(239, 68, 68, 0.4); }
        70% { box-shadow: 0 0 0 6px rgba(239, 68, 68, 0); }
        100% { box-shadow: 0 0 0 0px rgba(239, 68, 68, 0); }
      }

      .user-profile {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 4px;
        padding-left: 1.5rem;
        border-left: 1px solid var(--border-light);
        cursor: pointer;
        transition: var(--tr-base);
      }

      .user-profile:hover .user-name {
        color: var(--primary);
      }

      .user-info {
        text-align: right;
      }

      .user-name {
        font-size: 0.95rem;
        font-weight: 700;
        color: var(--text-main);
        line-height: 1.2;
        transition: var(--tr-base);
      }

      .user-role {
        font-size: 0.8rem;
        color: var(--text-muted);
        font-weight: 500;
      }

      .avatar-wrapper {
        position: relative;
      }

      .avatar {
        width: 42px;
        height: 42px;
        border-radius: 50%;
        background: var(--bg-main);
        color: var(--text-muted);
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid var(--border-soft);
        transition: var(--tr-base);
      }

      .user-profile:hover .avatar {
        color: var(--primary);
        background: var(--border-light);
      }

      .status-indicator {
        position: absolute;
        bottom: -2px;
        right: -2px;
        width: 12px;
        height: 12px;
        background: var(--success);
        border: 2.5px solid white;
        border-radius: 50%;
      }

      @media (max-width: 1024px) {
        .app-header { margin-left: 0; padding: 0 1.5rem; }
        .header-search { max-width: 300px; }
      }
    `}} />
  </header>
);

const AppLayout = () => {
  return (
    <div className="layout-container">
      <Sidebar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Header />
        <main className="main-content fade-in">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
