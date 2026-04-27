import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Key, 
  Users, 
  Home, 
  CreditCard, 
  Receipt, 
  BarChart3, 
  Settings,
  Car,
  ChevronDown,
  Briefcase,
  PieChart, 
  ShieldAlert,
  UserCog,
  DollarSign
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  const [openGroups, setOpenGroups] = useState({
    operatsiyalar: true,
    moliya: true,
    boshqaruv: false
  });

  // Avtomatik ravishda aktiv sahifaga mos guruhni ochish
  useEffect(() => {
    const path = location.pathname;
    if (path.includes('/rentals') || path.includes('/properties') || path.includes('/cars') || path.includes('/customers')) {
      setOpenGroups(prev => ({ ...prev, operatsiyalar: true }));
    }
    if (path.includes('/payments') || path.includes('/expenses') || path.includes('/finance') || path.includes('/statistics')) {
      setOpenGroups(prev => ({ ...prev, moliya: true }));
    }
    if (path.includes('/users') || path.includes('/settings')) {
      setOpenGroups(prev => ({ ...prev, boshqaruv: true }));
    }
  }, [location.pathname]);

  const toggleGroup = (key) => {
    setOpenGroups(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const menuConfig = [
    {
      type: 'single',
      name: 'Dashboard', 
      path: '/dashboard', 
      icon: LayoutDashboard
    },
    {
      type: 'group',
      key: 'operatsiyalar',
      title: 'Operatsiyalar',
      icon: Briefcase,
      items: [
        { name: 'Ijaralar', path: '/rentals', icon: Key },
        { name: 'Mulklar', path: '/properties', icon: Home },
        { name: 'Mashinalar', path: '/cars', icon: Car },
        { name: 'Mijozlar', path: '/customers', icon: Users },
      ]
    },
    {
      type: 'group',
      key: 'moliya',
      title: 'Moliya & Analitika',
      icon: PieChart,
      items: [
        { name: 'Moliya', path: '/finance', icon: DollarSign },
        { name: 'To\'lovlar', path: '/payments', icon: CreditCard },
        { name: 'Xarajatlar', path: '/expenses', icon: Receipt },
        { name: 'Statistika', path: '/statistics', icon: BarChart3 },
      ]
    },
    {
      type: 'group',
      key: 'boshqaruv',
      title: 'Tizim Boshqaruvi',
      icon: ShieldAlert,
      items: [
        { name: 'Jamoa', path: '/users', icon: UserCog },
        { name: 'Sozlamalar', path: '/settings', icon: Settings },
      ]
    }
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <h2 className="gradient-text">IjaraSoft</h2>
        <span className="logo-badge">PRO</span>
      </div>

      <div className="sidebar-nav-container">
        <nav className="sidebar-nav">
          {menuConfig.map((item, index) => {
            if (item.type === 'single') {
              return (
                <NavLink 
                  key={index} 
                  to={item.path} 
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                >
                  <item.icon size={20} strokeWidth={1.8} />
                  <span>{item.name}</span>
                </NavLink>
              );
            }

            if (item.type === 'group') {
              const isOpen = openGroups[item.key];
              const hasActiveChild = item.items.some(subItem => location.pathname.includes(subItem.path));
              
              return (
                <div key={item.key} className="nav-group">
                  <button 
                    className={`nav-group-btn ${hasActiveChild ? 'has-active' : ''}`}
                    onClick={() => toggleGroup(item.key)}
                  >
                    <div className="btn-left">
                      <item.icon size={20} strokeWidth={1.8} />
                      <span>{item.title}</span>
                    </div>
                    <ChevronDown size={16} className={`chevron ${isOpen ? 'open' : ''}`} />
                  </button>
                  
                  <div className={`nav-group-content ${isOpen ? 'open' : ''}`}>
                    {item.items.map((subItem, idx) => (
                      <NavLink 
                        key={idx} 
                        to={subItem.path} 
                        className={({ isActive }) => `nav-sublink ${isActive ? 'active' : ''}`}
                      >
                        <subItem.icon size={18} strokeWidth={1.8} />
                        <span>{subItem.name}</span>
                      </NavLink>
                    ))}
                  </div>
                </div>
              );
            }
            return null;
          })}
        </nav>
      </div>

      <div className="sidebar-footer">
        <div className="sidebar-version">v1.2.0</div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .sidebar {
          width: var(--sidebar-width);
          height: 100vh;
          background: var(--bg-sidebar);
          border-right: 1px solid var(--border-light);
          display: flex;
          flex-direction: column;
          position: fixed;
          left: 0;
          top: 0;
          padding: 1.5rem 0;
          z-index: 1000;
        }

        .sidebar-logo {
          padding: 0 1.5rem 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          border-bottom: 1px solid var(--border-light);
          margin-bottom: 1rem;
        }

        .sidebar-logo h2 {
          font-size: 1.5rem;
          margin: 0;
          font-family: var(--font-heading);
        }

        .logo-badge {
          font-size: 0.65rem;
          font-weight: 700;
          background: var(--primary-glow);
          color: var(--primary);
          padding: 2px 6px;
          border-radius: 4px;
          letter-spacing: 0.05em;
        }

        .sidebar-nav-container {
          flex: 1;
          overflow-y: auto;
        }

        .sidebar-nav-container::-webkit-scrollbar {
          width: 4px;
        }
        .sidebar-nav-container::-webkit-scrollbar-thumb {
          background: var(--border-soft);
          border-radius: 4px;
        }

        .sidebar-nav {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          padding: 0 0.75rem;
        }

        .nav-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.8rem 1rem;
          border-radius: var(--radius-sm);
          color: var(--text-muted);
          font-weight: 600;
          transition: var(--tr-base);
          font-family: var(--font-body);
          text-decoration: none;
        }

        .nav-link:hover {
          color: var(--primary);
          background: var(--bg-main);
        }

        .nav-link.active {
          color: var(--primary);
          background: var(--primary-glow);
        }

        .nav-group {
          display: flex;
          flex-direction: column;
        }

        .nav-group-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.8rem 1rem;
          border-radius: var(--radius-sm);
          color: var(--text-main);
          font-weight: 700;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.02em;
          background: transparent;
          border: none;
          cursor: pointer;
          transition: var(--tr-base);
          font-family: var(--font-body);
        }

        .nav-group-btn:hover {
          background: var(--bg-main);
        }
        
        .nav-group-btn.has-active {
          color: var(--primary);
        }

        .nav-group-btn .btn-left {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .chevron {
          transition: transform 0.3s ease;
          color: var(--text-muted);
        }
        
        .chevron.open {
          transform: rotate(180deg);
        }

        .nav-group-content {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          margin-left: 0.5rem;
          padding-left: 1.5rem;
          border-left: 1px solid var(--border-soft);
          margin-top: 0.25rem;
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.3s ease-in-out;
        }
        
        .nav-group-content.open {
          max-height: 400px;
        }

        .nav-sublink {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.6rem 0.75rem;
          border-radius: var(--radius-sm);
          color: var(--text-muted);
          font-weight: 500;
          font-size: 0.95rem;
          transition: var(--tr-base);
          text-decoration: none;
        }

        .nav-sublink:hover {
          color: var(--primary);
          background: var(--bg-main);
        }

        .nav-sublink.active {
          color: var(--primary);
          background: #eff6ff;
          font-weight: 600;
        }

        .sidebar-footer {
          padding: 1.25rem 1.5rem;
          border-top: 1px solid var(--border-light);
          margin-top: auto;
        }

        .sidebar-version {
          font-size: 0.75rem;
          color: var(--text-muted);
          text-align: center;
          font-family: var(--font-body);
        }
      `}} />
    </div>
  );
};

export default Sidebar;
