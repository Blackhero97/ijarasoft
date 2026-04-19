import React, { useState } from 'react';
import { 
  Key, 
  Search, 
  Filter, 
  Plus, 
  MoreVertical,
  Calendar,
  Eye,
  Printer,
  Edit2,
  Trash2,
  CheckCircle2,
  Clock,
  History,
  User,
  Car,
  Save
} from 'lucide-react';
import Modal from '../../components/Common/Modal';

const RentalRow = ({ id, date, client, phone, car, driver, days, items, status }) => (
  <tr>
    <td>
      <div className="id-cell">
        <span className="rental-id">#{id}</span>
        <span className="rental-date">{date}</span>
      </div>
    </td>
    <td>
      <div className="client-cell">
        <span className="font-semibold">{client}</span>
        <span className="text-muted" style={{ fontSize: '0.8rem' }}>{phone}</span>
      </div>
    </td>
    <td>
      <div className="transport-cell">
        <span className="plate-label">{car}</span>
        <span className="text-muted" style={{ fontSize: '0.8rem' }}>{driver}</span>
      </div>
    </td>
    <td>
      <span className="badge info">{days} kun</span>
    </td>
    <td>
      <span className="font-semibold">{items} ta</span>
    </td>
    <td>
      <div className="row-actions">
        <div className="icon-group">
          <button className="icon-btn-row text-blue"><Eye size={16} /></button>
          <button className="icon-btn-row text-purple"><Printer size={16} /></button>
          <button className="icon-btn-row text-amber"><Edit2 size={16} /></button>
          <button className="icon-btn-row text-red"><Trash2 size={16} /></button>
        </div>
        <button className="btn-qaytarish">Qaytarish</button>
      </div>
    </td>
    <style dangerouslySetInnerHTML={{ __html: `
      .id-cell, .client-cell, .transport-cell { display: flex; flex-direction: column; gap: 2px; }
      .rental-id { font-weight: 700; color: var(--text-main); }
      .rental-date { font-size: 0.75rem; color: var(--text-muted); }
      .plate-label { font-weight: 800; font-family: var(--font-heading); letter-spacing: 0.02em; color: var(--text-main); }
      
      .row-actions { display: flex; align-items: center; gap: 1rem; }
      .icon-group { display: flex; gap: 2px; }
      
      .text-blue { color: #2563eb; }
      .text-purple { color: #7c3aed; }
      .text-amber { color: #f59e0b; }
      .text-red { color: #ef4444; }
      
      .btn-qaytarish {
        background: #10b981;
        color: white;
        padding: 6px 16px;
        border-radius: 8px;
        font-size: 0.85rem;
        font-weight: 600;
        transition: var(--tr-base);
      }
      .btn-qaytarish:hover { background: #059669; transform: translateY(-1px); box-shadow: 0 4px 10px rgba(16, 185, 129, 0.2); }
    `}} />
  </tr>
);

const Rentals = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const rentalsData = [
    { id: 6, date: '2026.04.18', client: 'Sarvarbek Ortiqov', phone: '+998943952120', car: '10 Y 638 PYP', driver: 'Ergashev Otabek', days: 15, items: 2 },
    { id: 5, date: '2026.04.17', client: 'Aziz Sobirov', phone: '+998914365810', car: '10 M 745 VLL', driver: 'Jurayev Bahodir', days: 12, items: 1 },
    { id: 4, date: '2026.04.15', client: 'Mansur Ortiqov', phone: '+998933838988', car: '10 Y 638 PYP', driver: 'Ergashev Otabek', days: 12, items: 1 },
    { id: 3, date: '2026.04.12', client: 'Mansur Ortiqov', phone: '+998933838988', car: '406443FFD', driver: 'Adhamjon', days: 1, items: 2 },
    { id: 2, date: '2026.04.07', client: 'Mansur Ortiqov', phone: '+998933838988', car: '406443FFD', driver: 'Adhamjon', days: 13, items: 2 },
  ];

  return (
    <div className="rentals-page fade-in">
      <div className="page-header">
        <div>
          <h1>Ijaralar</h1>
          <p>Barcha ijaralarni boshqarish va kuzatish.</p>
        </div>
        <button className="btn-primary" onClick={() => setIsModalOpen(true)}>
          <Plus size={18} /> Yangi Ijara
        </button>
      </div>

      <div className="summary-grid">
        <div className="premium-card summary-card">
          <div className="summary-icon" style={{ background: '#eff6ff', color: '#2563eb' }}><Key size={20} /></div>
          <div><p className="text-muted" style={{ fontSize: '0.85rem' }}>Jami Ijaralar</p><h4>142 ta</h4></div>
        </div>
        <div className="premium-card summary-card">
          <div className="summary-icon" style={{ background: '#ecfdf5', color: '#10b981' }}><CheckCircle2 size={20} /></div>
          <div><p className="text-muted" style={{ fontSize: '0.85rem' }}>Aktiv Ijaralar</p><h4>84 ta</h4></div>
        </div>
        <div className="premium-card summary-card">
          <div className="summary-icon" style={{ background: '#f5f3ff', color: '#7c3aed' }}><History size={20} /></div>
          <div><p className="text-muted" style={{ fontSize: '0.85rem' }}>Tamomlangan</p><h4>58 ta</h4></div>
        </div>
      </div>

      <div className="premium-card">
        <div className="toolbar">
          <div className="search-box">
            <Search size={18} />
            <input type="text" placeholder="Mijoz, telefon, ijara raqami bo'yicha qidiruv..." />
          </div>
          <div className="toolbar-actions" style={{ display: 'flex', gap: '0.75rem' }}>
            <div className="filter-group">
              <span className="text-muted" style={{ fontSize: '0.85rem' }}>Filtrlash: </span>
              <select className="premium-select">
                <option>Barchasi</option>
                <option>Aktiv</option>
                <option>Muddati o'tgan</option>
              </select>
            </div>
          </div>
        </div>

        <div className="pro-table-container">
          <table className="pro-table">
            <thead>
              <tr>
                <th>Raqami</th>
                <th>Mijoz</th>
                <th>Transport</th>
                <th>Kun</th>
                <th>Olingan Ashyolar</th>
                <th>Amallar</th>
              </tr>
            </thead>
            <tbody>
              {rentalsData.map((rental, i) => (
                <RentalRow key={i} {...rental} />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title="Yangi Ijara Yaratish"
        footer={
          <>
            <button className="btn-secondary" onClick={() => setIsModalOpen(false)}>Bekor qilish</button>
            <button className="btn-primary"><Save size={18} /> Ijarani Saqlash</button>
          </>
        }
      >
        <div className="form-row">
          <div className="form-group">
            <label>Mijozni tanlang</label>
            <select className="pro-select">
              <option>Mijozlar ro'yxati...</option>
              <option>Sarvarbek Ortiqov</option>
              <option>Aziz Sobirov</option>
            </select>
          </div>
          <div className="form-group">
            <label>Transport vositasi</label>
            <select className="pro-select">
              <option>Mashinalar ro'yxati...</option>
              <option>Chevrolet Tracker (01 A 777 AA)</option>
              <option>Chevrolet Malibu 2 (10 Z 123 ZZ)</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Boshlanish sanasi</label>
            <input type="date" className="pro-input" defaultValue={new Date().toISOString().split('T')[0]} />
          </div>
          <div className="form-group">
            <label>Oldindan to'lov (so'm)</label>
            <input type="text" className="pro-input" placeholder="0" />
          </div>
        </div>

        <div className="items-header" style={{ marginTop: '1rem', borderTop: '1px solid var(--border-light)', paddingTop: '1rem', marginBottom: '1rem' }}>
          <h4>Olinayotgan Mulklar</h4>
        </div>

        <div className="form-row">
          <div className="form-group" style={{ flex: 2 }}>
            <label>Mulk</label>
            <select className="pro-select">
              <option>Mulkni tanlang...</option>
              <option>Betonomeshalka 180L</option>
              <option>Generator 5kW</option>
            </select>
          </div>
          <div className="form-group">
            <label>Soni</label>
            <input type="number" className="pro-input" defaultValue="1" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Ijara turi</label>
            <select className="pro-select">
              <option>Kunlik</option>
              <option>Soatlik</option>
            </select>
          </div>
          <div className="form-group">
            <label>Narxi (belgilangan)</label>
            <input type="text" className="pro-input" placeholder="Avtomatik to'ldiriladi" />
          </div>
        </div>
        
        <button className="btn-secondary" style={{ width: '100%', borderStyle: 'dashed' }}>
          <Plus size={16} /> Yana mulk qo'shish
        </button>
      </Modal>

      <style dangerouslySetInnerHTML={{ __html: `
        .premium-select {
          border: 1px solid var(--border-soft);
          padding: 8px 12px;
          border-radius: 8px;
          font-family: var(--font-body);
          font-size: 0.9rem;
          color: var(--text-main);
          outline: none;
          background: white;
        }
        .filter-group { display: flex; align-items: center; gap: 8px; }
      `}} />
    </div>
  );
};

export default Rentals;
