import React, { useState } from 'react';
import { 
  Users, 
  Search, 
  Plus, 
  MapPin, 
  Phone, 
  MoreVertical,
  UserPlus,
  ArrowUpRight,
  ArrowDownRight,
  Save,
  Filter,
  UserCheck,
  UserMinus,
  Wallet
} from 'lucide-react';
import Modal from '../../components/Common/Modal';

const CustomerCard = ({ name, phone, address, balance, status, date }) => (
  <div className="premium-card customer-card fade-in">
    <div className="customer-header">
      <div className="customer-avatar">
        {name.split(' ').map(n => n[0]).join('')}
      </div>
      <div className="customer-main-info">
        <h4 className="customer-name">{name}</h4>
        <span className={`status-badge ${status === 'Active' || status === 'Faol' || status === 'VIP' ? 'active' : 'inactive'}`}>
          {status}
        </span>
      </div>
      <button className="icon-btn-row"><MoreVertical size={16} /></button>
    </div>

    <div className="customer-details">
      <div className="detail-item">
        <Phone size={14} />
        <span>{phone}</span>
      </div>
      <div className="detail-item">
        <MapPin size={14} />
        <span>{address}</span>
      </div>
    </div>

    <div className="customer-footer">
      <div className="balance-info">
        <p className="label">Balans</p>
        <h4 className={typeof balance === 'number' && balance < 0 ? 'negative' : 'positive'}>
          {typeof balance === 'number' ? balance.toLocaleString() : balance} so'm
        </h4>
      </div>
      <button className="action-link">Tarix <ArrowUpRight size={14} /></button>
    </div>

    <style dangerouslySetInnerHTML={{ __html: `
      .customer-card { padding: 1.25rem; }
      .customer-header { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem; }
      .customer-avatar { width: 44px; height: 44px; border-radius: 12px; background: var(--primary-glow); color: var(--primary); display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 1.1rem; }
      .customer-main-info { flex: 1; }
      .customer-name { margin: 0; font-size: 1rem; font-weight: 600; color: var(--text-main); }
      .status-badge { font-size: 0.7rem; padding: 2px 8px; border-radius: 6px; font-weight: 600; }
      .status-badge.active { background: #ecfdf5; color: #10b981; }
      .status-badge.inactive { background: #fef2f2; color: #ef4444; }
      
      .customer-details { margin-bottom: 1.25rem; display: flex; flex-direction: column; gap: 0.5rem; }
      .detail-item { display: flex; align-items: center; gap: 0.5rem; color: var(--text-muted); font-size: 0.85rem; }
      
      .customer-footer { display: flex; justify-content: space-between; align-items: flex-end; padding-top: 1rem; border-top: 1px solid var(--border-light); }
      .balance-info .label { font-size: 0.75rem; color: var(--text-muted); margin-bottom: 2px; }
      .balance-info h4 { margin: 0; font-size: 1rem; font-weight: 700; }
      .balance-info h4.positive { color: #10b981; }
      .balance-info h4.negative { color: #ef4444; }
      
      .action-link { background: transparent; border: none; color: var(--primary); font-size: 0.85rem; font-weight: 600; display: flex; align-items: center; gap: 4px; cursor: pointer; }
    `}} />
  </div>
);

const Customers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const customersData = [
    { name: 'Sarvarbek Ortiqov', phone: '+998 94 395 21 20', address: 'Toshkent sh., Yunusobod', balance: 1250000, status: 'Active', date: '2026.04.18' },
    { name: 'Aziz Sobirov', phone: '+998 91 436 58 10', address: 'Toshkent sh., Mirzo Ulug\'bek', balance: -450000, status: 'Active', date: '2026.04.17' },
    { name: 'Javohir Elmurodov', phone: '+998 90 123 45 67', address: 'Toshkent sh., Chilonzor', balance: 0, status: 'Inactive', date: '2026.04.12' },
    { name: 'Dilshod Karimov', phone: '+998 93 555 44 33', address: 'Toshkent sh., Shayxontohur', balance: 800000, status: 'Active', date: '2026.04.10' },
  ];

  return (
    <div className="customers-page fade-in">
      <div className="page-header">
        <div>
          <h1>Mijozlar</h1>
          <p>Mijozlar bazasi va ular bilan hisob-kitoblar.</p>
        </div>
        <button className="btn-primary" onClick={() => setIsModalOpen(true)}>
          <UserPlus size={18} /> Yangi Mijoz
        </button>
      </div>

      <div className="summary-grid">
        <div className="premium-card summary-card">
          <div className="summary-icon" style={{ background: '#eff6ff', color: '#2563eb' }}><UserCheck size={20} /></div>
          <div><p className="text-muted" style={{ fontSize: '0.85rem' }}>Faol Mijozlar</p><h4>1,240 ta</h4></div>
        </div>
        <div className="premium-card summary-card">
          <div className="summary-icon" style={{ background: '#fef2f2', color: '#ef4444' }}><UserMinus size={20} /></div>
          <div><p className="text-muted" style={{ fontSize: '0.85rem' }}>Qarzdorlar</p><h4>42 ta</h4></div>
        </div>
        <div className="premium-card summary-card">
          <div className="summary-icon" style={{ background: '#ecfdf5', color: '#10b981' }}><Wallet size={20} /></div>
          <div><p className="text-muted" style={{ fontSize: '0.85rem' }}>Umumiy Balans</p><h4>48.6M so'm</h4></div>
        </div>
      </div>

      <div className="toolbar">
        <div className="search-box">
          <Search size={18} />
          <input type="text" placeholder="Mijoz ismi yoki telefon raqami bo'yicha..." />
        </div>
        <div className="toolbar-actions">
          <button className="btn-secondary"><Filter size={18} /> Filtrlar</button>
        </div>
      </div>

      <div className="customers-grid">
        {customersData.map((customer, i) => (
          <CustomerCard key={i} {...customer} />
        ))}
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title="Yangi Mijoz Qo'shish"
        footer={
          <>
            <button className="btn-secondary" onClick={() => setIsModalOpen(false)}>Bekor qilish</button>
            <button className="btn-primary"><Save size={18} /> Mijozni Saqlash</button>
          </>
        }
      >
        <div className="form-group">
          <label>F.I.SH (To'liq ism)</label>
          <input type="text" className="pro-input" placeholder="Masalan: Alisher Navoiy" />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Telefon raqami</label>
            <input type="text" className="pro-input" placeholder="+998 90 123 45 67" />
          </div>
          <div className="form-group">
            <label>Boshlang'ich balans (so'm)</label>
            <input type="text" className="pro-input" placeholder="0" />
          </div>
        </div>

        <div className="form-group">
          <label>Yashash manzili</label>
          <input type="text" className="pro-input" placeholder="Toshkent sh., ..." />
        </div>

        <div className="form-group">
          <label>Qo'shimcha ma'lumot</label>
          <textarea className="pro-textarea" placeholder="Mijoz haqida eslatmalar..."></textarea>
        </div>
      </Modal>

      <style dangerouslySetInnerHTML={{ __html: `
        .customers-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.5rem; }
      `}} />
    </div>
  );
};

export default Customers;
