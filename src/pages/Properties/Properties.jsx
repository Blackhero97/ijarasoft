import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  Trash2, 
  Eye, 
  Edit2, 
  Image as ImageIcon,
  ChevronDown,
  Save,
  X
} from 'lucide-react';
import Modal from '../../components/Common/Modal';

const ProductRow = ({ name, category, categoryColor, dayPrice, hourPrice, total, warehouse, rented }) => (
  <tr className="product-row">
    <td>
      <div className="product-image-box">
        <ImageIcon size={20} className="text-muted" />
      </div>
    </td>
    <td>
      <span className="product-name">{name}</span>
    </td>
    <td>
      <div className="category-cell">
        <span className="dot" style={{ backgroundColor: categoryColor }}></span>
        <span>{category}</span>
      </div>
    </td>
    <td>
      <div className="price-stack">
        <span className="day-price">{dayPrice} so'm/kun</span>
        <span className="hour-price">{hourPrice} so'm/soat</span>
      </div>
    </td>
    <td><span className="count-value">{total}</span></td>
    <td><span className={`count-value ${warehouse < 0 ? 'text-danger' : ''}`}>{warehouse}</span></td>
    <td><span className="count-value">{rented}</span></td>
    <td>
      <div className="action-icons">
        <button className="icon-btn-row text-success"><Eye size={18} /></button>
        <button className="icon-btn-row text-primary"><Edit2 size={18} /></button>
        <button className="icon-btn-row text-danger"><Trash2 size={18} /></button>
      </div>
    </td>
    <style dangerouslySetInnerHTML={{ __html: `
      .product-image-box {
        width: 40px;
        height: 40px;
        background: #f8fafc;
        border: 1px solid var(--border-light);
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .product-name { font-weight: 600; color: var(--text-main); }
      .category-cell { display: flex; align-items: center; gap: 8px; font-size: 0.9rem; }
      .category-cell .dot { width: 8px; height: 8px; border-radius: 50%; }
      .price-stack { display: flex; flex-direction: column; gap: 2px; }
      .day-price { font-weight: 700; font-size: 0.95rem; color: var(--text-main); }
      .hour-price { font-size: 0.75rem; color: var(--text-muted); }
      .count-value { font-weight: 500; font-size: 0.95rem; }
      .action-icons { display: flex; gap: 4px; }
      .text-success { color: #10b981; }
    `}} />
  </tr>
);

const Properties = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const productsData = [
    { name: 'Betonomeshalka 180L', category: 'Qurilish asboblari', categoryColor: '#ef4444', dayPrice: '80,000', hourPrice: '15,000', total: 3, warehouse: -7, rented: 10 },
    { name: 'Generator 5kW', category: 'Qurilish asboblari', categoryColor: '#ef4444', dayPrice: '120,000', hourPrice: '20,000', total: 2, warehouse: -4, rented: 6 },
    { name: 'Yuqori bosimli yuvish', category: "Bog' va tashqi", categoryColor: '#10b981', dayPrice: '35,000', hourPrice: '7,000', total: 2, warehouse: -2, rented: 4 },
    { name: 'Sarochniy apparat', category: 'Elektr asboblar', categoryColor: '#f59e0b', dayPrice: '45,000', hourPrice: '10,000', total: 3, warehouse: 0, rented: 3 },
    { name: 'Perforator Bosch', category: 'Elektr asboblar', categoryColor: '#f59e0b', dayPrice: '35,000', hourPrice: '7,000', total: 4, warehouse: 2, rented: 2 },
    { name: 'Suv nasosi', category: "Bog' va tashqi", categoryColor: '#10b981', dayPrice: '25,000', hourPrice: '5,000', total: 4, warehouse: 4, rented: 0 },
  ];

  return (
    <div className="properties-page fade-in">
      <div className="page-header">
        <div>
          <h1>Mulklar</h1>
          <p>Barcha mulklarni boshqarish.</p>
        </div>
        <button className="btn-primary" onClick={() => setIsModalOpen(true)}>
          <Plus size={18} /> Yangi Mulk
        </button>
      </div>

      <div className="premium-card mb-2">
        <div className="toolbar" style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '1rem', marginBottom: '1rem' }}>
          <div className="search-box">
            <Search size={18} />
            <input type="text" placeholder="Mulk nomi yoki tavsifi bilan qidirish..." />
          </div>
          <button className="btn-secondary">
            <Trash2 size={18} /> O'chirilganlar
          </button>
        </div>

        <div className="filters-row mb-1">
          <div className="filter-item">
            <span className="text-muted">Filtrlash: </span>
            <div className="filter-select-group">
              <button className="btn-secondary select-btn">Barcha kategoriyalar <ChevronDown size={16} /></button>
              <button className="btn-secondary select-btn">Barcha turlar <ChevronDown size={16} /></button>
              <button className="btn-secondary select-btn">Barcha holatlar <ChevronDown size={16} /></button>
            </div>
          </div>
        </div>

        <div className="pro-table-container">
          <table className="pro-table">
            <thead>
              <tr>
                <th style={{ width: '60px' }}>Rasm</th>
                <th>Nomi</th>
                <th>Kategoriya</th>
                <th>Narxlar</th>
                <th>Soni</th>
                <th>Omborda</th>
                <th>Ijarada</th>
                <th style={{ width: '120px' }}>Amallar</th>
              </tr>
            </thead>
            <tbody>
              {productsData.map((prod, i) => (
                <ProductRow key={i} {...prod} />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title="Yangi Mulk Qo'shish"
        footer={
          <>
            <button className="btn-secondary" onClick={() => setIsModalOpen(false)}>Bekor qilish</button>
            <button className="btn-primary"><Save size={18} /> Saqlash</button>
          </>
        }
      >
        <div className="form-group">
          <label>Mulk nomi</label>
          <input type="text" className="pro-input" placeholder="Masalan: Betonomeshalka 180L" />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Kategoriya</label>
            <select className="pro-select">
              <option>Qurilish asboblari</option>
              <option>Bog' va tashqi</option>
              <option>Elektr asboblar</option>
            </select>
          </div>
          <div className="form-group">
            <label>Umumiy soni</label>
            <input type="number" className="pro-input" defaultValue="1" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Kunlik narx (so'm)</label>
            <input type="text" className="pro-input" placeholder="80,000" />
          </div>
          <div className="form-group">
            <label>Soatlik narx (so'm)</label>
            <input type="text" className="pro-input" placeholder="15,000" />
          </div>
        </div>

        <div className="form-group">
          <label>Tavsif</label>
          <textarea className="pro-textarea" placeholder="Mulk haqida qo'shimcha ma'lumot..."></textarea>
        </div>
      </Modal>

      <style dangerouslySetInnerHTML={{ __html: `
        .mb-1 { margin-bottom: 1rem; }
        .mb-2 { margin-bottom: 2rem; }
        .filter-select-group { display: flex; gap: 0.75rem; margin-top: 0.5rem; }
        .select-btn { font-weight: 500; font-size: 0.85rem; padding: 6px 12px; }
        .text-danger { color: var(--danger); }
        
        .product-row td { vertical-align: middle; }
      `}} />
    </div>
  );
};

export default Properties;
