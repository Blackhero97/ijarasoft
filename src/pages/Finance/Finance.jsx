import React, { useState } from 'react';
import { 
  DollarSign, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Wallet, 
  TrendingUp, 
  PieChart as PieIcon,
  Plus,
  Minus,
  Download,
  Calendar,
  Search,
  Filter,
  MoreVertical,
  Activity,
  AlertCircle,
  Clock,
  ArrowRight
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import Modal from '../../components/Common/Modal';

const Finance = () => {
  const [isIncomeModalOpen, setIsIncomeModalOpen] = useState(false);
  const [isExpenseModalOpen, setIsExpenseModalOpen] = useState(false);

  // Mock data
  const trendData = [
    { name: '10 Apr', income: 12000000, expense: 4500000 },
    { name: '11 Apr', income: 8500000, expense: 3000000 },
    { name: '12 Apr', income: 15000000, expense: 5000000 },
    { name: '13 Apr', income: 9000000, expense: 2500000 },
    { name: '14 Apr', income: 18000000, expense: 6000000 },
    { name: '15 Apr', income: 14000000, expense: 4000000 },
    { name: '16 Apr', income: 22000000, expense: 7000000 },
  ];

  const expenseDist = [
    { name: 'Ofis ijarasi', value: 12000000 },
    { name: 'Ish haqi', value: 25000000 },
    { name: 'Marketing', value: 8000000 },
    { name: 'Servis', value: 5000000 },
    { name: 'Boshqa', value: 3000000 },
  ];

  const transactions = [
    { id: 1, date: '16.04.2026', type: 'Kirim', category: 'Ijara (Gentra)', method: 'Naqd', amount: 1200000, note: 'Sarvarbek Ortiqov', status: 'success' },
    { id: 2, date: '15.04.2026', type: 'Chiqim', category: 'Ofis ijarasi', method: 'Bank', amount: 8000000, note: 'Aprel oyi uchun', status: 'danger' },
    { id: 3, date: '15.04.2026', type: 'Kirim', category: 'Ijara (Cobalt)', method: 'Karta', amount: 950000, note: 'Aziz Sobirov', status: 'success' },
    { id: 4, date: '14.04.2026', type: 'Chiqim', category: 'Marketing', method: 'Naqd', amount: 2500000, note: 'Instagram reklama', status: 'danger' },
    { id: 5, date: '14.04.2026', type: 'Kirim', category: 'Oldindan to\'lov', method: 'Bank', amount: 5000000, note: 'Malibu 2 ijara', status: 'success' },
  ];

  const COLORS = ['#2563eb', '#10b981', '#f59e0b', '#7c3aed', '#ef4444'];

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('uz-UZ').format(val) + " so'm";
  };

  const FinanceCard = ({ title, value, icon: Icon, color, subText }) => (
    <div className={`finance-card-premium ${color}`}>
      <div className="card-inner">
        <div className="card-left">
          <p className="card-title">{title}</p>
          <h3 className="card-value">{value}</h3>
          {subText && <p className="card-subtext">{subText}</p>}
        </div>
        <div className="card-right">
          <div className="icon-box">
            <Icon size={24} />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="finance-page fade-in">
      <div className="page-header-premium">
        <div className="header-left">
          <h1>Moliya</h1>
          <p>Kirim-chiqimlar, kassa holati va moliyaviy hisobotlar</p>
        </div>
        <div className="header-right">
          <button className="btn-action green" onClick={() => setIsIncomeModalOpen(true)}>
            <Plus size={18} /> Kassaga qo'shish
          </button>
          <button className="btn-action orange" onClick={() => setIsExpenseModalOpen(true)}>
            <Minus size={18} /> Kassadan olish
          </button>
          <button className="btn-action dark">
            <Download size={18} /> PDF Export
          </button>
        </div>
      </div>

      {/* Main KPI Grid */}
      <div className="finance-grid-top">
        <FinanceCard 
          title="Umumiy Kirim" 
          value="154,200,000 so'm" 
          icon={ArrowDownLeft} 
          color="green" 
          subText="+12% o'tgan oyga nisbatan"
        />
        <FinanceCard 
          title="Umumiy Chiqim" 
          value="48,500,000 so'm" 
          icon={ArrowUpRight} 
          color="red" 
          subText="24 ta operatsiya"
        />
        <FinanceCard 
          title="Sof Foyda" 
          value="105,700,000 so'm" 
          icon={DollarSign} 
          color="blue" 
          subText="Rentabellik: 68%"
        />
        <FinanceCard 
          title="Kassa holati" 
          value="42,350,000 so'm" 
          icon={Wallet} 
          color="purple" 
          subText="Naqd: 12.4M | Karta: 29.9M"
        />
      </div>

      {/* Secondary Metrics */}
      <div className="finance-grid-secondary">
        <div className="mini-card-glass yellow">
          <div className="mini-icon"><AlertCircle size={20} /></div>
          <div className="mini-content">
            <span>Umumiy Qarz</span>
            <h4>68,777,000 so'm</h4>
          </div>
          <ArrowRight size={16} className="arrow" />
        </div>
        <div className="mini-card-glass blue">
          <div className="mini-icon"><Clock size={20} /></div>
          <div className="mini-content">
            <span>Kutilayotgan to'lovlar</span>
            <h4>12,400,000 so'm</h4>
          </div>
          <ArrowRight size={16} className="arrow" />
        </div>
        <div className="mini-card-glass teal">
          <div className="mini-icon"><Activity size={20} /></div>
          <div className="mini-content">
            <span>Bugungi tranzaksiyalar</span>
            <h4>8 ta</h4>
          </div>
          <ArrowRight size={16} className="arrow" />
        </div>
      </div>

      {/* Charts Section */}
      <div className="finance-charts-grid">
        <div className="premium-card chart-main">
          <div className="chart-header">
            <h3>Moliyaviy oqim dinamikasi</h3>
            <div className="chart-legend">
              <span className="legend-item"><span className="dot green"></span> Kirim</span>
              <span className="legend-item"><span className="dot red"></span> Chiqim</span>
            </div>
          </div>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={320}>
              <AreaChart data={trendData}>
                <defs>
                  <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} tickFormatter={(val) => `${val/1000000}M`} />
                <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
                <Area type="monotone" dataKey="income" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorIncome)" />
                <Area type="monotone" dataKey="expense" stroke="#ef4444" strokeWidth={3} fillOpacity={1} fill="url(#colorExpense)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="premium-card chart-side">
          <div className="chart-header">
            <h3>Xarajatlar taqsimoti</h3>
          </div>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={expenseDist}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {expenseDist.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(val) => formatCurrency(val)} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="pie-legend-custom">
            {expenseDist.slice(0, 3).map((item, i) => (
              <div key={i} className="legend-row">
                <span className="dot" style={{ background: COLORS[i] }}></span>
                <span className="name">{item.name}</span>
                <span className="val">{((item.value / 53000000) * 100).toFixed(0)}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Transactions Journal */}
      <div className="premium-card transaction-journal">
        <div className="journal-header">
          <div className="header-title">
            <h3>Tranzaksiyalar jurnali</h3>
            <span className="badge-count">{transactions.length} ta operatsiya</span>
          </div>
          <div className="header-filters">
            <div className="search-minimal">
              <Search size={16} />
              <input type="text" placeholder="Qidirish..." />
            </div>
            <button className="btn-filter">
              <Filter size={16} /> Filtr
            </button>
            <div className="date-picker-minimal">
              <Calendar size={16} />
              <span>Aprel, 2026</span>
            </div>
          </div>
        </div>

        <div className="pro-table-container">
          <table className="pro-table">
            <thead>
              <tr>
                <th>Sana</th>
                <th>Turi</th>
                <th>Kategoriya</th>
                <th>To'lov usuli</th>
                <th>Summa</th>
                <th>Izoh</th>
                <th style={{ textAlign: 'right' }}>Amallar</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((t) => (
                <tr key={t.id}>
                  <td><span className="text-muted">{t.date}</span></td>
                  <td>
                    <span className={`type-badge ${t.type.toLowerCase()}`}>
                      {t.type === 'Kirim' ? <ArrowDownLeft size={14} /> : <ArrowUpRight size={14} />}
                      {t.type}
                    </span>
                  </td>
                  <td><span className="font-semibold">{t.category}</span></td>
                  <td><span className="badge-outline">{t.method}</span></td>
                  <td><span className={`amount-text ${t.status}`}>{t.type === 'Kirim' ? '+' : '-'}{formatCurrency(t.amount)}</span></td>
                  <td><span className="text-muted text-sm">{t.note}</span></td>
                  <td style={{ textAlign: 'right' }}>
                    <button className="icon-btn"><MoreVertical size={16} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modals */}
      <Modal 
        isOpen={isIncomeModalOpen} 
        onClose={() => setIsIncomeModalOpen(false)}
        title="Kassaga mablag' qo'shish"
      >
        <div className="modal-form">
          <div className="form-group">
            <label>Summa</label>
            <input type="text" className="pro-input" placeholder="Summani kiriting" />
          </div>
          <div className="form-group">
            <label>Kategoriya</label>
            <select className="pro-select">
              <option>Ijara to'lovi</option>
              <option>Qarz qaytarish</option>
              <option>Investitsiya</option>
              <option>Boshqa</option>
            </select>
          </div>
          <div className="form-group">
            <label>To'lov usuli</label>
            <div className="method-grid">
              <button className="method-btn active">Naqd</button>
              <button className="method-btn">Humo/Uzcard</button>
              <button className="method-btn">Bank o'tkazmasi</button>
            </div>
          </div>
          <div className="form-group">
            <label>Izoh</label>
            <textarea className="pro-textarea" placeholder="Qo'shimcha ma'lumot..."></textarea>
          </div>
          <div className="modal-actions">
            <button className="btn-secondary" onClick={() => setIsIncomeModalOpen(false)}>Bekor qilish</button>
            <button className="btn-primary green">Saqlash</button>
          </div>
        </div>
      </Modal>

      <style dangerouslySetInnerHTML={{ __html: `
        .finance-page { padding-bottom: 3rem; }

        .page-header-premium {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .header-left h1 { font-size: 1.75rem; margin-bottom: 4px; color: #0f172a; }
        .header-left p { color: #64748b; font-size: 0.95rem; }

        .header-right { display: flex; gap: 0.75rem; }

        .btn-action {
          padding: 10px 16px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.2s;
        }

        .btn-action.green { background: #10b981; color: white; }
        .btn-action.orange { background: #f59e0b; color: white; }
        .btn-action.dark { background: #0f172a; color: white; }
        .btn-action:hover { opacity: 0.9; transform: translateY(-1px); }

        /* KPI Cards */
        .finance-grid-top {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .finance-card-premium {
          padding: 1.5rem;
          border-radius: 20px;
          border: 1px solid transparent;
          position: relative;
          overflow: hidden;
        }

        .finance-card-premium.green { background: #ecfdf5; border-color: #d1fae5; }
        .finance-card-premium.red { background: #fef2f2; border-color: #fee2e2; }
        .finance-card-premium.blue { background: #eff6ff; border-color: #dbeafe; }
        .finance-card-premium.purple { background: #f5f3ff; border-color: #ede9fe; }

        .card-inner { display: flex; justify-content: space-between; align-items: flex-start; }
        .card-title { font-size: 0.85rem; color: #64748b; margin-bottom: 8px; font-weight: 500; }
        .card-value { font-size: 1.4rem; font-weight: 700; color: #0f172a; margin: 0; }
        .card-subtext { font-size: 0.75rem; color: #64748b; margin-top: 8px; }

        .icon-box {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
        }

        .green .icon-box { color: #10b981; }
        .red .icon-box { color: #ef4444; }
        .blue .icon-box { color: #2563eb; }
        .purple .icon-box { color: #7c3aed; }

        /* Secondary Metrics */
        .finance-grid-secondary {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .mini-card-glass {
          background: white;
          border: 1px solid #f1f5f9;
          border-radius: 16px;
          padding: 1rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          position: relative;
          transition: all 0.2s;
          cursor: pointer;
        }

        .mini-card-glass:hover { border-color: var(--primary); }

        .mini-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mini-card-glass.yellow .mini-icon { background: #fffbeb; color: #d97706; }
        .mini-card-glass.blue .mini-icon { background: #eff6ff; color: #2563eb; }
        .mini-card-glass.teal .mini-icon { background: #f0fdfa; color: #0d9488; }

        .mini-content span { font-size: 0.75rem; color: #64748b; display: block; }
        .mini-content h4 { font-size: 1rem; margin: 2px 0 0; color: #0f172a; font-weight: 700; }

        .arrow { position: absolute; right: 1rem; color: #cbd5e1; transition: transform 0.2s; }
        .mini-card-glass:hover .arrow { transform: translateX(4px); color: var(--primary); }

        /* Charts */
        .finance-charts-grid {
          display: grid;
          grid-template-columns: 1.8fr 1fr;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .chart-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; }
        .chart-header h3 { font-size: 1.1rem; font-weight: 600; color: #0f172a; }

        .chart-legend { display: flex; gap: 1rem; font-size: 0.85rem; }
        .legend-item { display: flex; align-items: center; gap: 6px; color: #64748b; }
        .dot { width: 8px; height: 8px; border-radius: 50%; }
        .dot.green { background: #10b981; }
        .dot.red { background: #ef4444; }

        .pie-legend-custom {
          margin-top: 1rem;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .legend-row { display: flex; align-items: center; gap: 8px; font-size: 0.85rem; }
        .legend-row .name { flex: 1; color: #64748b; }
        .legend-row .val { font-weight: 700; color: #0f172a; }

        /* Transaction Journal */
        .journal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .header-title h3 { font-size: 1.1rem; margin-bottom: 4px; }
        .badge-count { font-size: 0.75rem; color: var(--primary); background: var(--primary-glow); padding: 2px 8px; border-radius: 6px; font-weight: 600; }

        .header-filters { display: flex; gap: 0.75rem; align-items: center; }

        .search-minimal {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #f8fafc;
          padding: 6px 12px;
          border-radius: 10px;
          border: 1px solid #e2e8f0;
          color: #64748b;
        }

        .search-minimal input { border: none; background: transparent; outline: none; font-size: 0.85rem; width: 150px; }

        .btn-filter {
          background: white;
          border: 1px solid #e2e8f0;
          padding: 6px 12px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          color: #0f172a;
          font-weight: 500;
        }

        .date-picker-minimal {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          color: #64748b;
          font-weight: 600;
          padding: 6px 12px;
          background: #f1f5f9;
          border-radius: 10px;
        }

        /* Table Badges */
        .type-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 4px 8px;
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 700;
        }

        .type-badge.kirim { background: #ecfdf5; color: #10b981; }
        .type-badge.chiqim { background: #fef2f2; color: #ef4444; }

        .badge-outline {
          border: 1px solid #e2e8f0;
          padding: 2px 8px;
          border-radius: 6px;
          font-size: 0.75rem;
          color: #64748b;
        }

        .amount-text { font-weight: 700; }
        .amount-text.success { color: #10b981; }
        .amount-text.danger { color: #ef4444; }

        /* Modal Styles */
        .modal-form { display: flex; flex-direction: column; gap: 1.25rem; margin-top: 1rem; }
        .method-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.5rem; }
        .method-btn { padding: 8px; border: 1px solid #e2e8f0; border-radius: 8px; background: white; font-size: 0.8rem; font-weight: 600; transition: all 0.2s; }
        .method-btn.active { border-color: var(--primary); background: var(--primary-glow); color: var(--primary); }

        .modal-actions { display: flex; justify-content: flex-end; gap: 0.75rem; margin-top: 1rem; }

        @media (max-width: 1200px) {
          .finance-charts-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 768px) {
          .page-header-premium { flex-direction: column; align-items: flex-start; gap: 1rem; }
          .header-right { width: 100%; overflow-x: auto; padding-bottom: 4px; }
          .header-filters { flex-wrap: wrap; }
          .search-minimal input { width: 100%; }
        }
      `}} />
    </div>
  );
};

export default Finance;
