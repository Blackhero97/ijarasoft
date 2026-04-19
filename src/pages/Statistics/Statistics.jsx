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
  PieChart, 
  Pie, 
  Cell 
} from 'recharts';
import { 
  TrendingUp, 
  TrendingDown, 
  BarChart3, 
  PieChart as PieIcon, 
  Activity 
} from 'lucide-react';

const Statistics = () => {
  const data = [
    { name: 'Yan', income: 45, expense: 32 },
    { name: 'Feb', income: 52, expense: 35 },
    { name: 'Mar', income: 48, expense: 40 },
    { name: 'Apr', income: 61, expense: 38 },
    { name: 'May', income: 55, expense: 42 },
    { name: 'Iyun', income: 70, expense: 45 },
  ];

  const pieData = [
    { name: 'Ish haqi', value: 400 },
    { name: 'Kommunal', value: 300 },
    { name: 'Ofis', value: 300 },
    { name: 'Transport', value: 200 },
  ];

  const COLORS = ['#2563eb', '#7c3aed', '#10b981', '#f59e0b'];

  return (
    <div className="statistics-page fade-in">
      <div className="page-header">
        <div>
          <h1>Statistika</h1>
          <p>Biznesingizning o'sish dinamikasi va moliyaviy tahlili.</p>
        </div>
        <div className="header-actions">
          <select className="premium-select">
            <option>Oxirgi 6 oy</option>
            <option>Oxirgi yil</option>
            <option>Barcha davr</option>
          </select>
        </div>
      </div>

      <div className="stats-grid-row">
        <div className="premium-card chart-large">
          <div className="section-header">
            <h3>Daromad va Xarajatlar</h3>
            <div className="chart-legend">
              <span className="dot income"></span> Daromad
              <span className="dot expense"></span> Xarajat
            </div>
          </div>
          <div style={{ width: '100%', height: 350 }}>
            <ResponsiveContainer>
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#7c3aed" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#64748b', fontSize: 12 }} 
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#64748b', fontSize: 12 }} 
                />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="income" 
                  stroke="#2563eb" 
                  strokeWidth={3} 
                  fillOpacity={1} 
                  fill="url(#colorIncome)" 
                />
                <Area 
                  type="monotone" 
                  dataKey="expense" 
                  stroke="#7c3aed" 
                  strokeWidth={3} 
                  fillOpacity={1} 
                  fill="url(#colorExpense)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="premium-card chart-small">
          <div className="section-header">
            <h3>Xarajatlar Taqsimoti</h3>
          </div>
          <div style={{ width: '100%', height: 250 }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="pie-legend">
            {pieData.map((item, i) => (
              <div key={i} className="legend-item">
                <span className="dot" style={{ background: COLORS[i] }}></span>
                <span className="label">{item.name}</span>
                <span className="amount">{item.value}M</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="stats-row-mini">
        <div className="premium-card kpi-card">
          <TrendingUp size={24} className="text-success" />
          <div className="kpi-info">
            <p>Konversiya</p>
            <h3>+24%</h3>
          </div>
        </div>
        <div className="premium-card kpi-card">
          <Activity size={24} className="text-primary" />
          <div className="kpi-info">
            <p>Aktiv Foydalanuvchilar</p>
            <h3>1.2k</h3>
          </div>
        </div>
        <div className="premium-card kpi-card">
          <TrendingDown size={24} className="text-danger" />
          <div className="kpi-info">
            <p>O'rtacha Chiqim</p>
            <h3>-12%</h3>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .stats-grid-row {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .chart-large { min-height: 450px; }
        .chart-small { min-height: 450px; }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .chart-legend {
          display: flex;
          gap: 1rem;
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .dot {
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          margin-right: 4px;
        }

        .dot.income { background: var(--primary); }
        .dot.expense { background: var(--accent); }

        .pie-legend {
          margin-top: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
        }

        .legend-item .label { flex: 1; color: var(--text-muted); }
        .legend-item .amount { font-weight: 700; }

        .stats-row-mini {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
        }

        .kpi-card {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .kpi-info p { font-size: 0.85rem; color: var(--text-muted); margin: 0; }
        .kpi-info h3 { font-size: 1.5rem; margin: 0; }

        .premium-select {
          padding: 8px 16px;
          border-radius: 8px;
          border: 1px solid var(--border-light);
          background: white;
          font-family: var(--font-body);
          font-weight: 600;
          color: var(--text-main);
          outline: none;
        }

        @media (max-width: 1100px) {
          .stats-grid-row { grid-template-columns: 1fr; }
        }
      `}} />
    </div>
  );
};

export default Statistics;
