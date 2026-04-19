import React, { useState } from 'react';
import { 
  UserPlus, 
  Search, 
  MoreVertical, 
  Shield, 
  User, 
  Settings as SettingsIcon,
  Trash2,
  CheckCircle2,
  Clock,
  Save
} from 'lucide-react';
import Modal from '../../components/Common/Modal';

const UserRow = ({ name, role, status, phone, lastActive, avatar }) => (
  <tr className="user-row">
    <td>
      <div className="user-profile-cell">
        <div className="user-avatar-circle">
          {avatar ? <img src={avatar} alt={name} /> : <User size={18} />}
        </div>
        <div className="user-name-info">
          <span className="user-full-name">{name}</span>
          <span className="user-role-label">{role}</span>
        </div>
      </div>
    </td>
    <td>
      <span className={`role-badge ${role.toLowerCase()}`}>
        <Shield size={12} /> {role}
      </span>
    </td>
    <td>
      <span className={`status-pill ${status.toLowerCase()}`}>
        <CheckCircle2 size={12} /> {status === 'Active' ? 'Aktiv' : status}
      </span>
    </td>
    <td>
      <span className="user-phone-cell">{phone}</span>
    </td>
    <td>
      <div className="last-active-cell">
        <Clock size={12} />
        <span>{lastActive}</span>
      </div>
    </td>
    <td>
      <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
        <button className="icon-btn-row"><SettingsIcon size={16} /></button>
        <button className="icon-btn-row text-danger"><Trash2 size={16} /></button>
      </div>
    </td>
    <style dangerouslySetInnerHTML={{ __html: `
      .user-profile-cell { display: flex; align-items: center; gap: 0.75rem; }
      .user-avatar-circle { width: 36px; height: 36px; background: var(--bg-main); border: 1px solid var(--border-soft); border-radius: 50%; display: flex; align-items: center; justify-content: center; overflow: hidden; color: var(--text-muted); }
      .user-avatar-circle img { width: 100%; height: 100%; object-fit: cover; }
      .user-name-info { display: flex; flex-direction: column; }
      .user-full-name { font-weight: 600; color: var(--text-main); font-size: 0.95rem; }
      .user-role-label { font-size: 0.75rem; color: var(--text-muted); }
      
      .role-badge { display: inline-flex; align-items: center; gap: 4px; padding: 4px 10px; border-radius: 6px; font-size: 0.75rem; font-weight: 600; text-transform: capitalize; }
      .role-badge.owner { background: #fef2f2; color: #ef4444; border: 1px solid #fee2e2; }
      .role-badge.admin { background: #eff6ff; color: #3b82f6; border: 1px solid #dbeafe; }
      .role-badge.manager { background: #f0fdf4; color: #10b981; border: 1px solid #dcfce7; }
      
      .status-pill { display: inline-flex; align-items: center; gap: 4px; padding: 2px 8px; border-radius: 20px; font-size: 0.75rem; font-weight: 600; background: #ecfdf5; color: #10b981; }
      .user-phone-cell { font-family: var(--font-heading); font-size: 0.9rem; color: var(--text-main); }
      .last-active-cell { display: flex; align-items: center; gap: 6px; color: var(--text-muted); font-size: 0.8rem; }
      .text-danger { color: #ef4444; }
    `}} />
  </tr>
);

const UsersPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const usersData = [
    { name: 'Sarvarbek Ortiqov', role: 'Owner', status: 'Active', phone: '+998 94 395 21 20', lastActive: 'Hozir aktiv' },
    { name: 'Aziz Sobirov', role: 'Admin', status: 'Active', phone: '+998 91 436 58 10', lastActive: '2 soat oldin' },
    { name: 'Javohir Elmurodov', role: 'Manager', status: 'Active', phone: '+998 90 123 45 67', lastActive: 'Kecha, 18:45' },
    { name: 'Dilshod Karimov', role: 'Manager', status: 'Active', phone: '+998 93 555 44 33', lastActive: '12-aprel' },
  ];

  return (
    <div className="users-page fade-in">
      <div className="page-header">
        <div>
          <h1>Jamoa</h1>
          <p>Tizim foydalanuvchilarini boshqarish va huquqlarini sozlash.</p>
        </div>
        <button className="btn-primary" onClick={() => setIsModalOpen(true)}>
          <UserPlus size={18} /> Yangi foydalanuvchi
        </button>
      </div>

      <div className="premium-card">
        <div className="toolbar">
          <div className="search-box">
            <Search size={18} />
            <input type="text" placeholder="Foydalanuvchi nomi yoki telefon bo'yicha..." />
          </div>
          <div className="role-stats" style={{ display: 'flex', gap: '1rem' }}>
            <span className="badge info">Egalar: 1</span>
            <span className="badge info" style={{ background: '#eff6ff', color: '#3b82f6' }}>Adminlar: 1</span>
            <span className="badge info" style={{ background: '#f0fdf4', color: '#10b981' }}>Menejerlar: 7</span>
          </div>
        </div>

        <div className="pro-table-container">
          <table className="pro-table">
            <thead>
              <tr>
                <th>Foydalanuvchi</th>
                <th>Rol</th>
                <th>Holat</th>
                <th>Telefon</th>
                <th>Oxirgi faollik</th>
                <th style={{ textAlign: 'right' }}>Amallar</th>
              </tr>
            </thead>
            <tbody>
              {usersData.map((user, i) => (
                <UserRow key={i} {...user} />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title="Yangi Foydalanuvchi Qo'shish"
        footer={
          <>
            <button className="btn-secondary" onClick={() => setIsModalOpen(false)}>Bekor qilish</button>
            <button className="btn-primary"><Save size={18} /> Saqlash</button>
          </>
        }
      >
        <div className="form-group">
          <label>To'liq ism</label>
          <input type="text" className="pro-input" placeholder="Foydalanuvchi ismini kiriting" />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Login (Username)</label>
            <input type="text" className="pro-input" placeholder="sarvar_94" />
          </div>
          <div className="form-group">
            <label>Telefon raqami</label>
            <input type="text" className="pro-input" placeholder="+998" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Rolini tanlang</label>
            <select className="pro-select">
              <option>Admin</option>
              <option>Manager</option>
              <option>Curer</option>
            </select>
          </div>
          <div className="form-group">
            <label>Parol</label>
            <input type="password" className="pro-input" placeholder="********" />
          </div>
        </div>
      </Modal>

      <style dangerouslySetInnerHTML={{ __html: `
        .role-stats { display: flex; align-items: center; }
        .toolbar { justify-content: space-between; margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid var(--border-light); }
      `}} />
    </div>
  );
};

export default UsersPage;
