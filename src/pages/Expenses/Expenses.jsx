import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  Trash2, 
  TrendingDown, 
  Wallet, 
  Calendar,
  MoreVertical,
  ArrowRight,
  Save,
  Edit2
} from 'lucide-react';
import Modal from '../../components/Common/Modal';

const ExpenseRow = ({ id, description, category, amount, date, method }) => (
  <tr>
    <td>
      <div className="expense-desc">
        <span className="font-semibold">{description}</span>
        <span className="text-muted" style={{ fontSize: '0.75rem' }}>ID: {id}</span>
      </div>
    </td>
    <td>
      <span className="badge info">{category}</span>
    </td>
    <td>
      <span className="font-bold text-red">-{amount} so'm</span>
    </td>
    <td>
      <div className="date-cell">
        <Calendar size={14} />
        <span>{date}</span>
      </div>
    </td>
    <td>
      <span className="method-label">{method}</span>
    </td>
    <td>
      <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
        <button className="icon-btn-row"><Edit2 size={16} /></button>
        <button className="icon-btn-row text-danger"><Trash2 size={16} /></button>
      </div>
    </td>
    <style dangerouslySetInnerHTML={{ __html: `
      .expense-desc { display: flex; flex-direction: column; }
      .text-red { color: #ef4444; }
      .text-danger { color: var(--danger); }
      .date-cell { display: flex; align-items: center; gap: 6px; color: var(--text-muted); font-size: 0.9rem; }
      .method-label { font-size: 0.85rem; font-weight: 600; color: var(--text-main); }
    `}} />
  </tr>
);

const Expenses = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const expensesData = [
    { id: 'EX-1042', description: 'Ofis ijara to\'lovi', category: 'Ijara', amount: '4,500,000', date: '2026.04.15', method: 'Bank o\'tkazmasi' },
    { id: 'EX-1041', description: 'Tracker 10 Y 638 PYP Moy almashtirish', category: 'Servis', amount: '650,000', date: '2026.04.12', method: 'Naqd' },
    { id: 'EX-1040', description: 'Elektr energiyasi', category: 'Kommunal', amount: '280,000', date: '2026.04.10', method: 'Humo' },
    { id: 'EX-1039', description: 'Internet (Uztelecom)', category: 'Aloqa', amount: '150,000', date: '2026.04.05', method: 'Uzcard' },
  ];

  return (
    <div className="expenses-page fade-in">
      <div className="page-header">
        <div>
          <h1>Xarajatlar</h1>
          <p>Barcha operatsion va servis xarajatlari nazorati.</p>
        </div>
        <button className="btn-primary" onClick={() => setIsModalOpen(true)}>
          <Plus size={18} /> Xarajat Qo'shish
        </button>
      </div>

      <div className="summary-grid">
        <div className="premium-card summary-card">
          <div className="summary-icon" style={{ background: '#fef2f2', color: '#ef4444' }}><TrendingDown size={20} /></div>
          <div><p className="text-muted" style={{ fontSize: '0.85rem' }}>Shu oydagi xarajat</p><h4>12,850,000 so'm</h4></div>
        </div>
        <div className="premium-card summary-card">
          <div className="summary-icon" style={{ background: '#eff6ff', color: '#2563eb' }}><Wallet size={20} /></div>
          <div><p className="text-muted" style={{ fontSize: '0.85rem' }}>Eng ko'p xarajat</p><h4>Ijara (35%)</h4></div>
        </div>
      </div>

      <div className="premium-card">
        <div className="toolbar">
          <div className="search-box">
            <Search size={18} />
            <input type="text" placeholder="Xarajat nomi yoki ID bo'yicha..." />
          </div>
          <button className="btn-secondary"><Filter size={18} /> Filtrlar</button>
        </div>

        <div className="pro-table-container">
          <table className="pro-table">
            <thead>
              <tr>
                <th>Tasnifi</th>
                <th>Kategoriya</th>
                <th>Summa</th>
                <th>Sana</th>
                <th>To'lov turi</th>
                <th style={{ textAlign: 'right' }}>Amallar</th>
              </tr>
            </thead>
            <tbody>
              {expensesData.map((exp, i) => (
                <ExpenseRow key={i} {...exp} />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title="Yangi Xarajat Qo'shish"
        footer={
          <>
            <button className="btn-secondary" onClick={() => setIsModalOpen(false)}>Bekor qilish</button>
            <button className="btn-primary"><Save size={18} /> Xarajatni Saqlash</button>
          </>
        }
      >
        <div className="form-group">
          <label>Xarajat tavsifi</label>
          <input type="text" className="pro-input" placeholder="Masalan: Ofis kantselyariya ashyolari" />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Summa (so'm)</label>
            <input type="text" className="pro-input" placeholder="0" />
          </div>
          <div className="form-group">
            <label>Kategoriya</label>
            <select className="pro-select">
              <option>Ijara</option>
              <option>Servis</option>
              <option>Kommunal</option>
              <option>Maosh</option>
              <option>Boshqa</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Sana</label>
            <input type="date" className="pro-input" defaultValue={new Date().toISOString().split('T')[0]} />
          </div>
          <div className="form-group">
            <label>To'lov usuli</label>
            <select className="pro-select">
              <option>Naqd</option>
              <option>Humo / Uzcard</option>
              <option>Bank o'tkazmasi</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>Izoh</label>
          <textarea className="pro-textarea" placeholder="Qo'shimcha ma'lumot..."></textarea>
        </div>
      </Modal>
    </div>
  );
};

export default Expenses;
