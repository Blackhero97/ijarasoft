import React, { useState } from 'react';
import { 
  CreditCard, 
  Search, 
  Plus, 
  Filter, 
  Calendar, 
  ArrowUpRight, 
  ArrowDownLeft,
  MoreVertical,
  DollarSign,
  Save
} from 'lucide-react';
import Modal from '../../components/Common/Modal';

const TransactionRow = ({ client, amount, date, type, status }) => (
  <tr>
    <td>
      <div className="client-cell">
        <div className="client-icon">
          {status === 'Income' || status === 'Kirim' ? <ArrowDownLeft size={16} className="text-success" /> : <ArrowUpRight size={16} className="text-danger" />}
        </div>
        <span className="font-semibold">{client}</span>
      </div>
    </td>
    <td className={`amount-cell ${status === 'Income' || status === 'Kirim' ? 'text-success' : 'text-danger'}`}>
      {status === 'Income' || status === 'Kirim' ? '+' : '-'}{amount} so'm
    </td>
    <td className="text-muted">{date}</td>
    <td>
      <span className="badge info" style={{ fontWeight: 600 }}>{type}</span>
    </td>
    <td>
      <button className="icon-btn-row"><MoreVertical size={16} /></button>
    </td>
    <style dangerouslySetInnerHTML={{ __html: `
      .client-cell { display: flex; align-items: center; gap: 0.75rem; }
      .client-icon { width: 32px; height: 32px; background: var(--bg-main); border-radius: 50%; display: flex; align-items: center; justify-content: center; }
      .amount-cell { font-weight: 700; font-family: var(--font-heading); font-size: 1rem; }
      .text-success { color: #10b981; }
      .text-danger { color: #ef4444; }
    `}} />
  </tr>
);

const Payments = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const paymentsData = [
    { client: 'Sarvarbek Ortiqov (Tracker ijara)', amount: '1,200,000', date: 'Apr 19, 2026', type: 'Naqd', status: 'Income' },
    { client: 'Ofis ijarasi', amount: '12,000,000', date: 'Apr 18, 2026', type: 'Hisob-raqam', status: 'Expense' },
    { client: 'Aziz Sobirov (To\'lov)', amount: '800,000', date: 'Apr 17, 2026', type: 'Humo', status: 'Income' },
    { client: 'Mansur Ortiqov (Oldindan to\'lov)', amount: '2,500,000', date: 'Apr 15, 2026', type: 'Bank o\'tkazmasi', status: 'Income' },
  ];

  return (
    <div className="payments-page fade-in">
      <div className="page-header">
        <div>
          <h1>To'lovlar</h1>
          <p>Moliya harakati, ijarachilar to'lovlari va chiqimlar tarixi.</p>
        </div>
        <button className="btn-primary" onClick={() => setIsModalOpen(true)}>
          <Plus size={18} /> To'lov Qo'shish
        </button>
      </div>

      <div className="summary-grid">
        <div className="premium-card summary-card">
          <div className="summary-icon" style={{ background: '#ecfdf5', color: '#10b981' }}><ArrowDownLeft size={20} /></div>
          <div><p className="text-muted" style={{ fontSize: '0.85rem' }}>Kirim (Bugun)</p><h4>15.4M so'm</h4></div>
        </div>
        <div className="premium-card summary-card">
          <div className="summary-icon" style={{ background: '#fef2f2', color: '#ef4444' }}><ArrowUpRight size={20} /></div>
          <div><p className="text-muted" style={{ fontSize: '0.85rem' }}>Chiqim (Bugun)</p><h4>2.1M so'm</h4></div>
        </div>
        <div className="premium-card summary-card">
          <div className="summary-icon" style={{ background: '#eff6ff', color: '#2563eb' }}><DollarSign size={20} /></div>
          <div><p className="text-muted" style={{ fontSize: '0.85rem' }}>Sof Foyda (Oy)</p><h4>124.8M so'm</h4></div>
        </div>
      </div>

      <div className="premium-card">
        <div className="toolbar">
          <div className="search-box">
            <Search size={18} />
            <input type="text" placeholder="Tranzaksiyalarni qidirish..." />
          </div>
          <div className="toolbar-actions" style={{ display: 'flex', gap: '0.75rem' }}>
            <button className="btn-secondary">
              <Calendar size={18} /> Sana
            </button>
            <button className="btn-secondary">
              <Filter size={18} /> Filtrlar
            </button>
          </div>
        </div>

        <div className="pro-table-container">
          <table className="pro-table">
            <thead>
              <tr>
                <th>Mijoz / Maqsad</th>
                <th>Summa</th>
                <th>Sana</th>
                <th>To'lov Turi</th>
                <th style={{ textAlign: 'right' }}>Amallar</th>
              </tr>
            </thead>
            <tbody>
              {paymentsData.map((payment, i) => (
                <TransactionRow key={i} {...payment} />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title="Yangi To'lov Qo'shish"
        footer={
          <>
            <button className="btn-secondary" onClick={() => setIsModalOpen(false)}>Bekor qilish</button>
            <button className="btn-primary"><Save size={18} /> To'lovni Saqlash</button>
          </>
        }
      >
        <div className="form-group">
          <label>To'lov turi</label>
          <div className="form-row" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <button className="btn-secondary active" style={{ borderColor: '#10b981', background: '#ecfdf5', color: '#10b981' }}>Kirim (Daromad)</button>
            <button className="btn-secondary">Chiqim (Xarajat)</button>
          </div>
        </div>

        <div className="form-group">
          <label>Mijoz yoki Tavsif</label>
          <input type="text" className="pro-input" placeholder="Mijoz ismi yoki to'lov sababi" />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Summa (so'm)</label>
            <input type="text" className="pro-input" placeholder="0" />
          </div>
          <div className="form-group">
            <label>To'lov usuli</label>
            <select className="pro-select">
              <option>Naqd</option>
              <option>Humo / Uzcard</option>
              <option>Bank o'tkazmasi</option>
              <option>Boshqa</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>Sana</label>
          <input type="date" className="pro-input" defaultValue={new Date().toISOString().split('T')[0]} />
        </div>
      </Modal>
    </div>
  );
};

export default Payments;
