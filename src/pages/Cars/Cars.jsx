import React, { useState } from 'react';
import { 
  Car, 
  Plus, 
  Search, 
  Filter, 
  MoreVertical,
  Phone,
  User,
  AlertCircle,
  CheckCircle2,
  Settings,
  Save,
  ShieldCheck,
  Calendar
} from 'lucide-react';
import Modal from '../../components/Common/Modal';

const CarCard = ({ plate, brand, driver, phone, status, lastService }) => (
  <div className="premium-card car-card fade-in">
    <div className="car-header">
      <div className="plate-badge">
        <span className="region">10</span>
        <span className="number">{plate}</span>
      </div>
      <button className="icon-btn-row"><MoreVertical size={16} /></button>
    </div>

    <div className="car-body">
      <h4 className="car-brand">{brand}</h4>
      <div className="driver-info">
        <User size={14} />
        <span className="driver-name">{driver}</span>
      </div>
      <div className="driver-phone">
        <Phone size={14} />
        <span>{phone}</span>
      </div>
    </div>

    <div className="car-footer">
      <span className={`status-pill ${status.toLowerCase()}`}>
        {status === 'Active' || status === 'Aktiv' ? <CheckCircle2 size={14} /> : <AlertCircle size={14} />}
        {status}
      </span>
      <div className="service-info">
        <Settings size={14} />
        <span>{lastService}</span>
      </div>
    </div>

    <style dangerouslySetInnerHTML={{ __html: `
      .car-card { padding: 1.25rem; }
      .car-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1.25rem; }
      .plate-badge { display: flex; border: 2px solid #1e293b; border-radius: 6px; overflow: hidden; font-weight: 800; font-family: 'Space Grotesk', sans-serif; }
      .plate-badge .region { background: #1e293b; color: white; padding: 2px 6px; font-size: 0.8rem; display: flex; align-items: center; border-right: 2px solid #1e293b; }
      .plate-badge .number { padding: 2px 10px; font-size: 1rem; color: #1e293b; background: white; text-transform: uppercase; }
      
      .car-brand { margin: 0 0 1rem 0; font-size: 1.1rem; font-weight: 700; color: var(--text-main); }
      .driver-info, .driver-phone { display: flex; align-items: center; gap: 8px; color: var(--text-muted); font-size: 0.85rem; margin-bottom: 0.5rem; }
      .driver-name { font-weight: 600; color: var(--text-main); }
      
      .car-footer { display: flex; justify-content: space-between; align-items: center; margin-top: 1.25rem; padding-top: 1rem; border-top: 1px solid var(--border-light); }
      .status-pill { display: flex; align-items: center; gap: 4px; padding: 4px 10px; border-radius: 20px; font-size: 0.75rem; font-weight: 700; }
      .status-pill.active { background: #ecfdf5; color: #10b981; }
      .status-pill.maintenance { background: #fffbeb; color: #f59e0b; }
      
      .service-info { display: flex; align-items: center; gap: 4px; color: var(--text-muted); font-size: 0.75rem; }
    `}} />
  </div>
);

const Cars = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const carsData = [
    { plate: 'Y 638 PYP', brand: 'Chevrolet Tracker', driver: 'Ergashev Otabek', phone: '+998 94 395 21 20', status: 'Active', lastService: '12.04.2024' },
    { plate: 'M 745 VLL', brand: 'Chevrolet Malibu 2', driver: 'Jurayev Bahodir', phone: '+998 91 436 58 10', status: 'Active', lastService: '05.04.2024' },
    { plate: 'Z 123 ZZ', brand: 'Chevrolet Captiva', driver: 'Fayzullayev Alisher', phone: '+998 90 123 45 67', status: 'Maintenance', lastService: '18.04.2024' },
    { plate: 'A 777 AA', brand: 'Chevrolet Gentra', driver: 'Karimov Doston', phone: '+998 93 555 44 33', status: 'Active', lastService: '10.03.2024' },
  ];

  return (
    <div className="cars-page fade-in">
      <div className="page-header">
        <div>
          <h1>Mashinalar</h1>
          <p>Transport vositalari va haydovchilar boshqaruvi.</p>
        </div>
        <button className="btn-primary" onClick={() => setIsModalOpen(true)}>
          <Plus size={18} /> Yangi Mashina
        </button>
      </div>

      <div className="summary-grid">
        <div className="premium-card summary-card">
          <div className="summary-icon" style={{ background: '#eff6ff', color: '#2563eb' }}><ShieldCheck size={20} /></div>
          <div><p className="text-muted" style={{ fontSize: '0.85rem' }}>Jami Mashinalar</p><h4>12 ta</h4></div>
        </div>
        <div className="premium-card summary-card">
          <div className="summary-icon" style={{ background: '#ecfdf5', color: '#10b981' }}><CheckCircle2 size={20} /></div>
          <div><p className="text-muted" style={{ fontSize: '0.85rem' }}>Aktiv</p><h4>10 ta</h4></div>
        </div>
        <div className="premium-card summary-card">
          <div className="summary-icon" style={{ background: '#fffbeb', color: '#f59e0b' }}><Settings size={20} /></div>
          <div><p className="text-muted" style={{ fontSize: '0.85rem' }}>Servisda</p><h4>2 ta</h4></div>
        </div>
      </div>

      <div className="toolbar">
        <div className="search-box">
          <Search size={18} />
          <input type="text" placeholder="Davlat raqami yoki haydovchi bo'yicha..." />
        </div>
        <button className="btn-secondary"><Filter size={18} /> Filtrlar</button>
      </div>

      <div className="cars-grid">
        {carsData.map((car, i) => (
          <CarCard key={i} {...car} />
        ))}
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title="Yangi Mashina Qo'shish"
        footer={
          <>
            <button className="btn-secondary" onClick={() => setIsModalOpen(false)}>Bekor qilish</button>
            <button className="btn-primary"><Save size={18} /> Saqlash</button>
          </>
        }
      >
        <div className="form-row">
          <div className="form-group">
            <label>Mashina rusumi</label>
            <input type="text" className="pro-input" placeholder="Masalan: Chevrolet Tracker" />
          </div>
          <div className="form-group">
            <label>Davlat raqami</label>
            <input type="text" className="pro-input" placeholder="01 A 777 AA" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Haydovchi F.I.SH</label>
            <input type="text" className="pro-input" placeholder="Haydovchi ismi" />
          </div>
          <div className="form-group">
            <label>Telefon raqami</label>
            <input type="text" className="pro-input" placeholder="+998" />
          </div>
        </div>

        <div className="form-group">
          <label>Holati</label>
          <select className="pro-select">
            <option>Aktiv</option>
            <option>Servisda</option>
            <option>Sotuvda</option>
          </select>
        </div>
      </Modal>

      <style dangerouslySetInnerHTML={{ __html: `
        .cars-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 1.5rem; }
      `}} />
    </div>
  );
};

export default Cars;
