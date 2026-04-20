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
  Save,
  DollarSign,
  Package,
  Box,
  Trash
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
        title=""
        maxWidth="900px"
        className="create-rental-modal"
        footer={
          <div style={{ display: 'flex', gap: '1rem', width: '100%', justifyContent: 'flex-end', padding: '0.5rem' }}>
            <button className="btn-secondary modal-btn-cancel" onClick={() => setIsModalOpen(false)}>Bekor qilish</button>
            <button className="btn-primary modal-btn-save"><Save size={18} /> Ijarani saqlash</button>
          </div>
        }
      >
        <div className="create-rental-layout">
          
          <div className="layout-row grid-2">
            <div className="layout-card">
              <div className="card-header">
                <div className="icon-wrap bg-blue"><User size={16} /></div> 
                <span>Mijozni tanlang</span>
              </div>
              <div className="card-body">
                <select className="pro-select">
                  <option>Mijozlar ro'yxati...</option>
                  <option>Sarvarbek Ortiqov</option>
                  <option>Aziz Sobirov</option>
                </select>
              </div>
            </div>

            <div className="layout-card">
              <div className="card-header">
                <div className="icon-wrap bg-purple"><Car size={16} /></div> 
                <span>Transport vositasi</span>
              </div>
              <div className="card-body">
                <select className="pro-select">
                  <option>Mashinalar ro'yxati...</option>
                  <option>Chevrolet Tracker (01 A 777 AA)</option>
                  <option>Chevrolet Malibu 2 (10 Z 123 ZZ)</option>
                </select>
              </div>
            </div>
          </div>

          <div className="layout-row grid-3">
            <div className="layout-card">
              <div className="card-header">
                <div className="icon-wrap bg-purple-light"><Calendar size={16} color="#9333ea" /></div>
                <span>Ish boshlash sanasi</span>
              </div>
              <div className="card-body">
                <input type="date" className="pro-input bg-gray" defaultValue={new Date().toISOString().split('T')[0]} />
              </div>
            </div>

            <div className="layout-card">
              <div className="card-header">
                <div className="icon-wrap bg-amber"><DollarSign size={16} color="#eab308" /></div>
                <span>Oldindan to'lov</span>
              </div>
              <div className="card-body">
                <input type="text" className="pro-input bg-gray" placeholder="0" />
              </div>
            </div>

            <div className="layout-card total-card">
              <div className="card-header">
                <div className="icon-wrap bg-blue-light"><Package size={16} color="#3b82f6" /></div>
                <span>Umumiy summa:</span>
              </div>
              <div className="card-body flex-center">
                <h2 className="total-amount">0 so'm</h2>
              </div>
            </div>
          </div>

          <div className="layout-card items-card">
            <div className="items-header row-between">
              <div className="card-header border-none mb-0">
                <div className="icon-wrap bg-orange"><Box size={16} color="#ea580c"/></div>
                <span style={{ fontSize: '1.05rem' }}>Ashyolar</span>
              </div>
              <button className="btn-add-item bg-orange-light text-orange">
                <Plus size={16} /> Ashyolar qo'shish
              </button>
            </div>
            
            <div className="items-list-container">
              <div className="item-row">
                <div className="item-col select-col">
                  <label>Ashyolar</label>
                  <select className="pro-select bg-gray">
                    <option>Mulkni tanlang</option>
                    <option>Betonomeshalka 180L</option>
                  </select>
                </div>
                
                <div className="item-col qty-col">
                  <label>Miqdor</label>
                  <div className="qty-control bg-gray">
                    <button className="qty-btn">-</button>
                    <span className="qty-val">1</span>
                    <button className="qty-btn">+</button>
                  </div>
                </div>

                <div className="item-col date-col">
                  <label>Boshlanish sanasi</label>
                  <input type="date" className="pro-input bg-gray" defaultValue={new Date().toISOString().split('T')[0]} />
                </div>

                <div className="item-col type-col">
                  <label>Ijara turi</label>
                  <div className="toggle-group bg-gray">
                    <button className="toggle-btn active"><Calendar size={14}/> Kun</button>
                    <button className="toggle-btn text-muted"><Clock size={14}/> Soat</button>
                  </div>
                </div>

                <div className="item-col price-col">
                  <label>Kunlik narx</label>
                  <input type="text" className="pro-input bg-gray" placeholder="0" />
                </div>

                <div className="item-col action-col pt-label pt-3">
                  <button className="btn-delete-item text-red bg-red-light">
                    <Trash2 size={16}/>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="layout-card">
             <div className="card-header border-none mb-2">
               <span style={{ fontWeight: '600' }}>Qo'shimcha izoh</span>
             </div>
             <div className="card-body">
               <textarea className="pro-textarea bg-gray" placeholder="Ijara haqida qo'shimcha ma'lumotlar..."></textarea>
             </div>
          </div>

        </div>
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

        /* Create Rental Modal Custom Styles */
        .create-rental-modal .modal-header h3 { display: none; }
        .create-rental-modal .modal-header { padding: 1rem 1.5rem 0.5rem; border-bottom: none; }
        .create-rental-modal .modal-body { padding: 0 1.5rem 1.5rem; background: #f8fafc; }
        .create-rental-modal .modal-footer { border-top: none; background: #f8fafc; padding: 0 1.5rem 1.5rem; }
        
        .create-rental-layout { display: flex; flex-direction: column; gap: 1.25rem; }
        .layout-row { display: grid; gap: 1.25rem; }
        .grid-2 { grid-template-columns: 1fr 1fr; }
        .grid-3 { grid-template-columns: 1fr 1fr 1.5fr; }

        .layout-card {
          background: white;
          border-radius: 12px;
          padding: 1.25rem;
          box-shadow: 0 1px 3px rgba(0,0,0,0.05);
          border: 1px solid #e2e8f0;
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
          font-weight: 600;
          color: var(--text-main);
          font-size: 0.95rem;
        }
        .border-none { border: none !important; }
        .mb-0 { margin-bottom: 0 !important; }
        .mb-2 { margin-bottom: 0.5rem !important; }

        .icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 6px;
        }
        .bg-blue { background: #3b82f6; color: white; }
        .bg-purple { background: #7c3aed; color: white; }
        .bg-purple-light { background: #f3e8ff; }
        .bg-amber { background: #fef3c7; }
        .bg-blue-light { background: #eff6ff; }
        .bg-orange { background: #ffedd5; }
        .bg-orange-light { background: #ffedd5; }
        .text-orange { color: #ea580c; }
        .text-red { color: #ef4444; }
        .bg-red-light { background: #fee2e2; }

        .bg-gray {
          background-color: #f8fafc !important;
          border-color: #e2e8f0 !important;
        }

        .total-amount {
          color: #2563eb;
          font-size: 1.8rem;
          font-weight: 700;
          margin: 0;
        }

        .row-between {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .btn-add-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 6px 14px;
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: var(--tr-base);
        }
        .btn-add-item:hover { transform: translateY(-1px); filter: brightness(0.95); }

        .items-list-container {
          background: #f8fafc;
          border-radius: 12px;
          padding: 1.25rem;
        }

        .item-row {
          display: flex;
          gap: 1rem;
          align-items: flex-end;
          flex-wrap: wrap;
        }

        .item-col { display: flex; flex-direction: column; gap: 0.5rem; }
        .item-col label { font-size: 0.8rem; font-weight: 600; color: #64748b; }
        .select-col { flex: 2; min-width: 150px; }
        .qty-col { flex: 0.8; min-width: 100px; }
        .date-col { flex: 1.2; min-width: 130px; }
        .type-col { flex: 1.2; min-width: 140px; }
        .price-col { flex: 1.5; min-width: 120px; }
        .action-col { flex: 0.3; min-width: 40px; align-items: center; justify-content: flex-end; }
        .pt-la { padding-top: 1.5rem; }

        .qty-control {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border: 1px solid #e2e8f0;
          border-radius: var(--radius-md);
          overflow: hidden;
          height: 40px;
        }
        .qty-btn {
          width: 32px;
          height: 100%;
          background: transparent;
          border: none;
          font-size: 1.2rem;
          cursor: pointer;
          color: #64748b;
          transition: 0.2s;
        }
        .qty-btn:hover { background: #e2e8f0; color: #0f172a; }
        .qty-val { font-weight: 600; font-size: 0.95rem; }

        .toggle-group {
          display: flex;
          border: 1px solid #e2e8f0;
          border-radius: var(--radius-md);
          overflow: hidden;
          height: 40px;
          padding: 2px;
        }
        .toggle-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          border: none;
          background: transparent;
          border-radius: var(--radius-md);
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: 0.2s;
        }
        .toggle-btn.active { background: #3b82f6; color: white; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
        .toggle-btn:not(.active):hover { background: #e2e8f0; }

        .btn-delete-item {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-md);
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: 0.2s;
        }
        .btn-delete-item:hover { filter: brightness(0.9); }

        .modal-btn-cancel {
          background: #f1f5f9; color: #475569; padding: 10px 20px; font-weight: 600;
          border: none; border-radius: 8px; transition: 0.2s;
        }
        .modal-btn-cancel:hover { background: #e2e8f0; }
        .modal-btn-save {
          background: #8b5cf6; color: white; padding: 10px 20px; font-weight: 600;
          border: none; border-radius: 8px; transition: 0.2s; display: flex; gap: 0.5rem; align-items: center;
        }
        .modal-btn-save:hover { background: #7c3aed; }
      `}} />
    </div>
  );
};

export default Rentals;
