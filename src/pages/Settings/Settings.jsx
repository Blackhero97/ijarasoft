import React, { useState } from 'react';
import { 
  CreditCard, 
  Building2, 
  Receipt, 
  Save, 
  Globe, 
  Zap, 
  Info,
  ChevronRight
} from 'lucide-react';

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('profil');
  const [branchName, setBranchName] = useState('Ijarasoft Pro (Toshkent)');
  const [headerText, setHeaderText] = useState('Xaridongiz uchun rahmat!');
  const [footerText, setFooterText] = useState('Qaytish muddati: 24 soat');

  return (
    <div className="settings-page fade-in">
      <div className="page-header">
        <div>
          <h1>Sozlamalar</h1>
          <p>Tizim parametrlari va billing ma'lumotlari.</p>
        </div>
        <button className="btn-primary">
          <Save size={18} /> O'zgarishlarni saqlash
        </button>
      </div>

      <div className="settings-layout">
        <aside className="settings-sidebar">
          <div className="sidebar-group">
            <button 
              className={`tab-btn ${activeTab === 'profil' ? 'active' : ''}`}
              onClick={() => setActiveTab('profil')}
            >
              <div className="btn-label">
                <Building2 size={18} /> <span>Filial Profili</span>
              </div>
              <ChevronRight size={14} className="arrow" />
            </button>
            <button 
              className={`tab-btn ${activeTab === 'balans' ? 'active' : ''}`}
              onClick={() => setActiveTab('balans')}
            >
              <div className="btn-label">
                <CreditCard size={18} /> <span>Balans va Billing</span>
              </div>
              <ChevronRight size={14} className="arrow" />
            </button>
            <button className="tab-btn">
              <div className="btn-label">
                <Globe size={18} /> <span>Region va Shriftlar</span>
              </div>
              <ChevronRight size={14} className="arrow" />
            </button>
          </div>
        </aside>

        <main className="settings-content">
          {activeTab === 'profil' && (
            <div className="tab-content fade-in">
              <div className="content-grid">
                <div className="form-column">
                  <div className="premium-card mb-2">
                    <h3 className="section-title">Filial ma'lumotlari</h3>
                    <div className="form-group">
                      <label>Filial nomi</label>
                      <input 
                        type="text" 
                        className="pro-input" 
                        value={branchName}
                        onChange={(e) => setBranchName(e.target.value)}
                        placeholder="Filial nomini kiriting"
                      />
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label>Telefon</label>
                        <input type="text" className="pro-input" defaultValue="+998 71 200 11 22" placeholder="+998" />
                      </div>
                      <div className="form-group">
                        <label>Veb-sayt</label>
                        <input type="text" className="pro-input" defaultValue="www.ijarasoft.uz" placeholder="https://" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Manzil</label>
                      <input type="text" className="pro-input" defaultValue="Toshkent sh., Yunusobod tumani" placeholder="To'liq manzilni kiriting" />
                    </div>
                  </div>

                  <div className="premium-card">
                    <h3 className="section-title">Chek sozlamalari</h3>
                    <div className="form-group">
                      <label>Sarlavha matni (Yuqori)</label>
                      <input 
                        type="text" 
                        className="pro-input" 
                        value={headerText}
                        onChange={(e) => setHeaderText(e.target.value)}
                        placeholder="Chek tepasidagi matn"
                      />
                    </div>
                    <div className="form-group">
                      <label>Eslatma matni (Pastki)</label>
                      <textarea 
                        className="pro-textarea"
                        value={footerText}
                        onChange={(e) => setFooterText(e.target.value)}
                        placeholder="Mijoz uchun eslatma..."
                      />
                    </div>
                  </div>
                </div>

                <div className="preview-column">
                  <div className="sticky-preview">
                    <div className="premium-card preview-card">
                      <h3 className="section-title small">
                        <Receipt size={16} /> Chek namunasi
                      </h3>
                      <div className="mock-receipt">
                        <div className="receipt-header">
                          <h4 className="store-name">{branchName}</h4>
                          <p className="header-text">{headerText}</p>
                        </div>
                        <div className="receipt-items">
                          <div className="receipt-row"><span>Sana:</span><span>19.04.2026</span></div>
                          <div className="receipt-row"><span>ID:</span><span>#1042</span></div>
                          <div className="dashed-divider"></div>
                          <div className="receipt-row font-bold"><span>Betonomeshalka</span><span>120,000</span></div>
                          <div className="receipt-row sub-row"><span>- 1 kunga</span><span></span></div>
                          <div className="dashed-divider"></div>
                          <div className="receipt-total">
                            <span>JAMI:</span>
                            <span>120,000 so'm</span>
                          </div>
                        </div>
                        <div className="receipt-footer">
                          <p className="footer-text">{footerText}</p>
                          <div className="barcode-mock">|| ||| || ||| || || |||</div>
                        </div>
                      </div>
                      <p className="preview-hint">Bu chek xaridordan so'ng printerdan chiqadigan ko'rinish.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'balans' && (
            <div className="tab-content fade-in">
              <div className="premium-card mb-2 billing-card">
                <div className="billing-top">
                  <div className="balance-box">
                    <p className="balance-label">Joriy hisobingiz</p>
                    <h1 className="balance-value">24,500 <span>so'm</span></h1>
                  </div>
                  <div className="plan-badge">
                    <Zap size={14} /> PRO Plan
                  </div>
                </div>
                <div className="info-alert">
                  <Info size={18} />
                  <p>Tarif muddati: <b>24-may, 2026</b> gacha faol. Balansni istalgan vaqtda to'ldirishingiz mumkin.</p>
                </div>
                <div className="payment-gateways">
                  <button className="gateway-btn click">CLICK</button>
                  <button className="gateway-btn payme">Payme</button>
                </div>
              </div>

              <div className="premium-card">
                <h3 className="section-title">To'lovlar tarixi</h3>
                <div className="pro-table-container">
                  <table className="pro-table">
                    <thead>
                      <tr>
                        <th>Sana</th>
                        <th>Maqsad</th>
                        <th>Summa</th>
                        <th>Holati</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>12.04.2026</td>
                        <td>Hisobni to'ldirish</td>
                        <td>500,000 so'm</td>
                        <td><span className="badge success">Muvaffaqiyatli</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .settings-layout { display: grid; grid-template-columns: 300px 1fr; gap: 2rem; margin-top: 1rem; align-items: start; }
        .settings-sidebar { position: sticky; top: 100px; }
        .sidebar-group { display: flex; flex-direction: column; gap: 0.5rem; background: #fff; padding: 0.75rem; border-radius: var(--radius-lg); border: 1px solid var(--border-light); }
        
        .tab-btn { display: flex; align-items: center; justify-content: space-between; padding: 1rem 1.25rem; border: none; background: transparent; border-radius: 12px; color: var(--text-muted); font-weight: 600; font-size: 0.95rem; transition: var(--tr-base); }
        .tab-btn .btn-label { display: flex; align-items: center; gap: 12px; }
        .tab-btn .arrow { opacity: 0; transition: var(--tr-base); }
        .tab-btn:hover { background: var(--bg-main); color: var(--text-main); }
        .tab-btn.active { background: var(--primary-glow); color: var(--primary); }
        .tab-btn.active .arrow { opacity: 1; transform: translateX(2px); }
        
        .content-grid { display: grid; grid-template-columns: 1fr 360px; gap: 2rem; }
        .section-title { margin: 0 0 1.5rem 0; font-size: 1.15rem; font-weight: 700; color: var(--text-main); border-bottom: 1px solid var(--border-light); padding-bottom: 1rem; }
        .section-title.small { font-size: 1rem; border: none; padding: 0; margin-bottom: 1.25rem; }
        
        .preview-card { background: #f8fafc !important; border: 1px dashed var(--border-soft) !important; position: sticky; top: 100px; }
        .preview-hint { font-size: 0.75rem; color: var(--text-muted); text-align: center; margin-top: 1rem; line-height: 1.4; }
        
        .mock-receipt { background: white; padding: 2rem 1.5rem; border: 1px solid #e2e8f0; border-radius: 2px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); font-family: 'Courier New', Courier, monospace; color: #1e293b; line-height: 1.2; }
        .receipt-header { text-align: center; margin-bottom: 1.5rem; }
        .store-name { margin: 0; font-weight: 900; font-size: 1.1rem; text-transform: uppercase; }
        .header-text { font-size: 0.8rem; margin: 4px 0 0 0; }
        .receipt-row { display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 6px; }
        .receipt-row.sub-row { font-size: 0.75rem; color: #64748b; margin-top: -4px; }
        .dashed-divider { height: 1px; border-top: 1px dashed #cbd5e1; margin: 12px 0; }
        .receipt-total { display: flex; justify-content: space-between; font-weight: 900; margin-top: 10px; font-size: 1rem; border-top: 2px solid #1e293b; padding-top: 8px; }
        .receipt-footer { text-align: center; margin-top: 2rem; }
        .footer-text { font-size: 0.8rem; margin-bottom: 10px; font-style: italic; }
        .barcode-mock { font-size: 0.9rem; letter-spacing: 3px; font-weight: 100; color: #94a3b8; }
        
        .billing-card { background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%); }
        .billing-top { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 2rem; }
        .balance-label { font-size: 0.9rem; color: var(--text-muted); margin: 0; font-weight: 600; }
        .balance-value { margin: 4px 0 0 0; font-size: 2.5rem; font-weight: 900; color: var(--primary); letter-spacing: -0.02em; }
        .balance-value span { font-size: 1.2rem; color: var(--text-muted); font-weight: 600; margin-left: 4px; }
        .plan-badge { background: #fef9c3; color: #854d0e; padding: 6px 14px; border-radius: 30px; font-size: 0.8rem; font-weight: 700; display: flex; align-items: center; gap: 6px; border: 1px solid #fde047; }
        
        .info-alert { background: #eff6ff; color: #1e40af; padding: 1rem; border-radius: var(--radius-md); font-size: 0.9rem; display: flex; align-items: center; gap: 12px; margin-bottom: 2rem; border: 1px solid #dbeafe; }
        .info-alert b { color: #1d4ed8; }
        
        .payment-gateways { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .gateway-btn { padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-soft); font-weight: 800; font-size: 1rem; text-transform: uppercase; transition: var(--tr-base); }
        .gateway-btn.click { background: #0088cc; color: white; border-color: #0077b3; }
        .gateway-btn.payme { background: #00becc; color: white; border-color: #00aab3; }
        .gateway-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 16px rgba(0,0,0,0.1); filter: brightness(1.05); }

        @media (max-width: 1280px) {
          .content-grid { grid-template-columns: 1fr; }
          .preview-column { display: none; }
        }
        @media (max-width: 1024px) {
          .settings-layout { grid-template-columns: 1fr; }
          .settings-sidebar { position: static; }
          .sidebar-group { flex-direction: row; overflow-x: auto; padding: 0.5rem; }
          .tab-btn { white-space: nowrap; padding: 0.75rem 1rem; }
          .tab-btn .arrow { display: none; }
        }
      `}} />
    </div>
  );
};

export default SettingsPage;
