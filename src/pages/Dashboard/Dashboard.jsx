import React from 'react';
import { 
  Key, 
  Users, 
  TrendingUp, 
  AlertCircle,
  MoreVertical,
  ChevronRight,
  Home,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const data = [
  { name: 'Mon', income: 4000, rentals: 24 },
  { name: 'Tue', income: 3000, rentals: 18 },
  { name: 'Wed', income: 5000, rentals: 32 },
  { name: 'Thu', income: 2780, rentals: 15 },
  { name: 'Fri', income: 6890, rentals: 45 },
  { name: 'Sat', income: 8390, rentals: 52 },
  { name: 'Sun', income: 7490, rentals: 48 },
];

const StatCard = ({ title, value, subValue, icon: Icon, trend, color }) => (
  <div className="premium-card fade-in">
    <div className="stat-header">
      <div className={`summary-icon icon-${color}`}>
        <Icon size={22} />
      </div>
      <div className={`trend-tag ${trend > 0 ? 'up' : 'down'}`}>
        {trend > 0 ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
        {Math.abs(trend)}%
      </div>
    </div>
    <div className="stat-content">
      <p className="text-muted" style={{ fontSize: '0.9rem', marginBottom: '4px' }}>{title}</p>
      <h2 style={{ fontSize: '1.75rem', marginBottom: '8px' }}>{value}</h2>
      <p className="text-muted" style={{ fontSize: '0.8rem' }}>{subValue}</p>
    </div>

    <style dangerouslySetInnerHTML={{ __html: `
      .stat-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1.5rem; }
      .trend-tag { display: flex; align-items: center; gap: 4px; padding: 4px 8px; border-radius: 20px; font-size: 0.75rem; font-weight: 700; }
      .trend-tag.up { background: #ecfdf5; color: #10b981; }
      .trend-tag.down { background: #fef2f2; color: #ef4444; }
      .icon-blue { background: #eff6ff; color: #2563eb; }
      .icon-purple { background: #f5f3ff; color: #7c3aed; }
      .icon-green { background: #ecfdf5; color: #10b981; }
      .icon-orange { background: #fff7ed; color: #f59e0b; }
    `}} />
  </div>
);

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <div className="page-header">
        <div>
          <h1>Dashboard</h1>
          <p>Biznesingizning bugungi holati va asosiy tahlillari.</p>
        </div>
        <div className="header-actions">
          <button className="btn-secondary">Oxirgi 7 kun</button>
        </div>
      </div>

      <div className="summary-grid">
        <StatCard title="Haftalik Daromad" value="45.2M" subValue="+12.4M o'tgan haftadan" icon={TrendingUp} trend={15} color="green" />
        <StatCard title="Faol Ijaralar" value="84 ta" subValue="12 ta bugun boshlangan" icon={Key} trend={8} color="blue" />
        <StatCard title="Yangi Mijozlar" value="124 ta" subValue="Haftalik o'sish" icon={Users} trend={12} color="purple" />
        <StatCard title="Qarzdorlik" value="3.8M" subValue="5 ta kechikkan to'lov" icon={AlertCircle} trend={-5} color="orange" />
      </div>

      <div className="grid-container main-grid">
        <div className="premium-card chart-section">
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
            <h3>Daromad Dinamikasi</h3>
            <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><span style={{width: 8, height: 8, borderRadius: '50%', background: 'var(--primary)'}}></span> Daromad</span>
            </div>
          </div>
          <div style={{ width: '100%', height: 350 }}>
            <ResponsiveContainer>
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="var(--primary)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: 'var(--sh-lg)' }} />
                <Area type="monotone" dataKey="income" stroke="var(--primary)" strokeWidth={3} fillOpacity={1} fill="url(#colorIncome)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="premium-card quick-stats">
          <h3 style={{ marginBottom: '1.5rem' }}>Oylik Maqsadlar</h3>
          <div className="goal-item">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span className="text-muted">Daromad Maqsadi</span>
              <span className="font-semibold">85%</span>
            </div>
            <div className="progress-bar"><div className="progress" style={{ width: '85%' }}></div></div>
          </div>
          <div className="goal-item" style={{ marginTop: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span className="text-muted">Mijozlarni Ko'paytirish</span>
              <span className="font-semibold">62%</span>
            </div>
            <div className="progress-bar"><div className="progress" style={{ width: '62%', background: 'var(--accent)' }}></div></div>
          </div>

          <div className="recent-notifications" style={{ marginTop: '2.5rem' }}>
            <h4 style={{ marginBottom: '1rem' }}>Xabarlar</h4>
            {[
              { text: "Muddati o'tgan ijara #4", time: "2 soat oldin", type: "alert" },
              { text: "Yangi mijoz qo'shildi", time: "4 soat oldin", type: "info" }
            ].map((n, i) => (
              <div key={i} className="notif-item">
                <div className={`dot ${n.type}`}></div>
                <div><p style={{fontSize: '0.85rem', margin: 0}}>{n.text}</p><p style={{fontSize: '0.75rem', color: 'var(--text-muted)', margin: 0}}>{n.time}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .main-grid { display: grid; grid-template-columns: 2fr 1fr; gap: 1.5rem; }
        .progress-bar { height: 8px; background: #f1f5f9; border-radius: 4px; overflow: hidden; }
        .progress { height: 100%; background: var(--primary); transition: width 1s ease-in-out; }
        .notif-item { display: flex; gap: 12px; margin-bottom: 1rem; align-items: center; }
        .dot { width: 8px; height: 8px; border-radius: 50%; }
        .dot.alert { background: var(--danger); }
        .dot.info { background: var(--primary); }
        @media (max-width: 1200px) { .main-grid { grid-template-columns: 1fr; } }
      `}} />
    </div>
  );
};

export default Dashboard;
