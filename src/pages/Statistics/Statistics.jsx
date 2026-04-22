import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  AreaChart, 
  Area,
  Cell
} from 'recharts';
import { 
  TrendingUp, 
  Key, 
  Users, 
  Car, 
  Activity, 
  DollarSign, 
  AlertCircle,
  Download,
  Calendar
} from 'lucide-react';

const Statistics = () => {
  // Mock data for charts
  const monthlyData = [
    { name: 'Okt', income: 45000000, rentals: 28 },
    { name: 'Noy', income: 52000000, rentals: 35 },
    { name: 'Dek', income: 48000000, rentals: 31 },
    { name: 'Yan', income: 61000000, rentals: 42 },
    { name: 'Feb', income: 55000000, rentals: 38 },
    { name: 'Mar', income: 80962000, rentals: 48 },
  ];

  const topProperties = [
    { name: 'Gentra 1.5 AT', value: 12500000 },
    { name: 'Cobalt GX-16', value: 9800000 },
    { name: 'Nexia 3 Optima', value: 8200000 },
    { name: 'Malibu 2 Turbo', value: 7500000 },
    { name: 'Tracker 2 LT', value: 6900000 },
  ];

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('uz-UZ').format(val) + " so'm";
  };

  const StatCard = ({ title, value, icon: Icon, color, trend }) => (
    <div className={`stat-card-premium ${color}`}>
      <div className="card-top">
        <div className="icon-wrapper">
          <Icon size={24} />
        </div>
        {trend && (
          <div className="trend-badge">
            <TrendingUp size={14} />
            {trend}%
          </div>
        )}
      </div>
      <div className="card-bottom">
        <p className="stat-label">{title}</p>
        <h3 className="stat-value">{value}</h3>
      </div>
    </div>
  );

  return (
    <div className="statistics-page fade-in">
      <div className="page-header-premium">
        <div className="header-left">
          <h1>Statistika</h1>
          <p>Tizimdagi barcha moliyaviy va operatsion ko'rsatkichlar tahlili</p>
        </div>
        <div className="header-right">
          <div className="date-filter">
            <Calendar size={18} />
            <select>
              <option>Oxirgi 6 oy</option>
              <option>Oxirgi yil</option>
              <option>Barcha davr</option>
            </select>
          </div>
          <button className="btn-download">
            <Download size={18} />
            Hisobotni yuklash
          </button>
        </div>
      </div>

      {/* Top Row KPI Cards */}
      <div className="stats-grid-top">
        <StatCard 
          title="Umumiy Daromad" 
          value="80,962,000 so'm" 
          icon={DollarSign} 
          color="green" 
          trend={12} 
        />
        <StatCard 
          title="Umumiy Ijaralar" 
          value="48 ta" 
          icon={Key} 
          color="blue" 
          trend={8} 
        />
        <StatCard 
          title="Umumiy Mijozlar" 
          value="24 ta" 
          icon={Users} 
          color="purple" 
          trend={15} 
        />
        <StatCard 
          title="Umumiy Transportlar" 
          value="5 ta" 
          icon={Car} 
          color="orange" 
        />
      </div>

      {/* Middle Row Secondary Cards */}
      <div className="stats-grid-mid">
        <div className="mini-stat-card teal">
          <Activity size={20} />
          <div className="mini-info">
            <span className="label">Faol Ijaralar</span>
            <span className="value">25 ta</span>
          </div>
        </div>
        <div className="mini-stat-card blue-light">
          <TrendingUp size={20} />
          <div className="mini-info">
            <span className="label">Kunlik Daromad</span>
            <span className="value">1,250,000 so'm</span>
          </div>
        </div>
        <div className="mini-stat-card red">
          <AlertCircle size={20} />
          <div className="mini-info">
            <span className="label">Umumiy Qarz</span>
            <span className="value text-danger">68,777,000 so'm</span>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="charts-main-grid">
        <div className="premium-card chart-container">
          <div className="chart-header">
            <h3>Oylik Daromad va Ijaralar</h3>
            <div className="chart-legend">
              <span className="legend-item"><span className="dot green"></span> Daromad</span>
            </div>
          </div>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={350}>
              <AreaChart data={monthlyData}>
                <defs>
                  <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.15}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#64748b', fontSize: 12 }} 
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#64748b', fontSize: 12 }} 
                  tickFormatter={(val) => `${val/1000000}M`}
                />
                <Tooltip 
                  contentStyle={{ 
                    borderRadius: '12px', 
                    border: 'none', 
                    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                    padding: '12px'
                  }}
                  formatter={(val) => formatCurrency(val)}
                />
                <Area 
                  type="monotone" 
                  dataKey="income" 
                  stroke="#10b981" 
                  strokeWidth={3} 
                  fillOpacity={1} 
                  fill="url(#colorGreen)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="premium-card chart-container">
          <div className="chart-header">
            <h3>Top 5 Mulklar</h3>
          </div>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={topProperties} layout="vertical" margin={{ left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
                <XAxis type="number" hide />
                <YAxis 
                  dataKey="name" 
                  type="category" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#0f172a', fontSize: 13, fontWeight: 500 }}
                  width={100}
                />
                <Tooltip 
                  cursor={{ fill: '#f8fafc' }}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  formatter={(val) => formatCurrency(val)}
                />
                <Bar 
                  dataKey="value" 
                  fill="#10b981" 
                  radius={[0, 4, 4, 0]} 
                  barSize={24}
                >
                  {topProperties.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 0 ? '#10b981' : '#10b981cc'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .statistics-page {
          padding-bottom: 2rem;
        }

        .page-header-premium {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .header-left h1 { font-size: 1.75rem; margin-bottom: 4px; color: #0f172a; }
        .header-left p { color: #64748b; font-size: 0.95rem; }

        .header-right { display: flex; gap: 1rem; align-items: center; }

        .date-filter {
          display: flex;
          align-items: center;
          gap: 8px;
          background: white;
          padding: 8px 12px;
          border-radius: 10px;
          border: 1px solid #e2e8f0;
          color: #64748b;
        }

        .date-filter select {
          border: none;
          outline: none;
          font-weight: 600;
          color: #0f172a;
          background: transparent;
        }

        .btn-download {
          background: #0f172a;
          color: white;
          padding: 10px 16px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
          font-weight: 600;
        }

        /* KPI Cards Grid */
        .stats-grid-top {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .stat-card-premium {
          padding: 1.5rem;
          border-radius: 20px;
          border: 1px solid transparent;
          transition: all 0.3s ease;
        }

        .stat-card-premium:hover { transform: translateY(-4px); }

        .stat-card-premium.green { background: #ecfdf5; border-color: #d1fae5; }
        .stat-card-premium.blue { background: #eff6ff; border-color: #dbeafe; }
        .stat-card-premium.purple { background: #f5f3ff; border-color: #ede9fe; }
        .stat-card-premium.orange { background: #fff7ed; border-color: #ffedd5; }

        .card-top { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1.5rem; }
        
        .icon-wrapper {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
        }

        .green .icon-wrapper { color: #10b981; }
        .blue .icon-wrapper { color: #2563eb; }
        .purple .icon-wrapper { color: #7c3aed; }
        .orange .icon-wrapper { color: #f59e0b; }

        .trend-badge {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 4px 10px;
          background: white;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 700;
          color: #10b981;
        }

        .stat-label { font-size: 0.9rem; color: #64748b; margin-bottom: 6px; font-weight: 500; }
        .stat-value { font-size: 1.5rem; font-weight: 700; color: #0f172a; margin: 0; }

        /* Mid Row Cards */
        .stats-grid-mid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .mini-stat-card {
          padding: 1.25rem;
          border-radius: 16px;
          display: flex;
          align-items: center;
          gap: 1rem;
          border: 1px solid transparent;
        }

        .mini-stat-card.teal { background: #f0fdfa; color: #0d9488; border-color: #ccfbf1; }
        .mini-stat-card.blue-light { background: #f0f9ff; color: #0369a1; border-color: #e0f2fe; }
        .mini-stat-card.red { background: #fef2f2; color: #b91c1c; border-color: #fee2e2; }

        .mini-info { display: flex; flex-direction: column; }
        .mini-info .label { font-size: 0.8rem; opacity: 0.8; }
        .mini-info .value { font-size: 1.1rem; font-weight: 700; }

        /* Charts */
        .charts-main-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 1.5rem;
        }

        .chart-container { padding: 1.5rem; }
        .chart-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; }
        .chart-header h3 { font-size: 1.1rem; font-weight: 600; color: #0f172a; }

        .chart-legend { display: flex; gap: 1rem; font-size: 0.85rem; }
        .legend-item { display: flex; align-items: center; gap: 6px; color: #64748b; }
        .dot { width: 8px; height: 8px; border-radius: 50%; }
        .dot.green { background: #10b981; }

        @media (max-width: 1200px) {
          .charts-main-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 768px) {
          .page-header-premium { flex-direction: column; align-items: flex-start; gap: 1rem; }
          .header-right { width: 100%; flex-wrap: wrap; }
          .date-filter, .btn-download { flex: 1; justify-content: center; }
        }
      `}} />
    </div>
  );
};

export default Statistics;
