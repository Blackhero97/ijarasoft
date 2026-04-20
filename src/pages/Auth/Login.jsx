import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiUser, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';
import { RiBuilding2Line } from 'react-icons/ri';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login
    navigate('/dashboard');
  };

  return (
    <div className="login-page">
      <div className="login-container fade-in">
        <div className="login-info-side">
          <div className="logo-section">
            <div className="logo-icon"><RiBuilding2Line size={24} color="var(--primary)" /></div>
            <div>
              <h2>IjaraSoft</h2>
              <p className="logo-sub">MUVAFFAQIYAT SARI QADAM</p>
            </div>
          </div>
          
          <div className="info-text">
            <h1>Ijarani boshqarishda zamonaviy va qulay yechim.</h1>
          </div>
        </div>

        <div className="login-form-side">
          <div className="form-content">
            <div className="star-icon text-blue">✸</div>
            <div className="login-header">
              <h1>Tizimga kirish</h1>
              <p>Barcha ijaralar, mijozlar va hisobotlarni bir joyda boshqarish uchun tizimga kiring.</p>
            </div>

            <form onSubmit={handleLogin} className="login-form">
              <div className="form-group">
                <label htmlFor="auth-username" className="input-label">Foydalanuvchi nomi</label>
                <input 
                  id="auth-username"
                  type="text" 
                  className="login-input" 
                  placeholder="Username kiriting" 
                  required
                  autoComplete="username"
                />
              </div>

              <div className="form-group">
                <label htmlFor="auth-password" className="input-label">Parol</label>
                <div className="password-input-wrapper">
                  <input 
                    id="auth-password"
                    type={showPassword ? "text" : "password"} 
                    className="login-input" 
                    placeholder="••••••••" 
                    required
                    autoComplete="current-password"
                  />
                  <button 
                    type="button" 
                    className="btn-toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Parolni yashirish" : "Parolni ko'rsatish"}
                  >
                    {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                  </button>
                </div>
              </div>

              <button type="submit" className="btn-login">
                Kirish
              </button>
            </form>

            <div className="login-footer" style={{ marginTop: '2.5rem' }}>
              <p>Profilingiz yo'qmi? <a href="#" className="link-contact">Admin bilan bog'laning</a></p>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .login-page {
          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #f1f5f9;
          padding: 2rem;
        }

        .login-container {
          display: flex;
          width: 100%;
          max-width: 1000px;
          min-height: 650px;
          background: white;
          border-radius: 20px;
          box-shadow: 0 20px 40px -10px rgba(0,0,0,0.1);
          overflow: hidden;
        }

        /* --- LEFT SIDE --- */
        .login-info-side {
          flex: 0 0 45%;
          background: linear-gradient(135deg, rgba(37,99,235,0.05) 0%, rgba(37,99,235,0.15) 100%); /* the user wanted soft colors derived from theme */
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 3.5rem 3rem;
          position: relative;
        }

        .logo-section { display: flex; align-items: center; gap: 0.75rem; }
        .logo-icon { width: 36px; height: 36px; display: flex; justify-content: center; align-items: center; }
        .logo-section h2 { font-size: 1.2rem; font-weight: 800; margin: 0; color: #1e293b; }
        .logo-sub { font-size: 0.5rem; letter-spacing: 0.05em; font-weight: 700; color: var(--text-muted); margin: 0; }

        .info-text h1 { 
          font-size: 2.2rem; 
          font-weight: 700; 
          line-height: 1.2; 
          margin: 0; 
          color: #1e293b; 
          letter-spacing: -0.5px; 
        }

        /* --- RIGHT SIDE --- */
        .login-form-side {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 3rem;
          background-color: white;
        }
        
        .form-content {
          width: 100%;
          max-width: 380px;
          display: flex;
          flex-direction: column;
        }

        .star-icon {
          font-size: 1.8rem;
          margin-bottom: 0.5rem;
        }

        .login-header {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-bottom: 2rem;
        }

        .login-header h1 {
          font-size: 1.7rem;
          color: #0f172a;
          font-weight: 700;
          margin: 0 0 0.5rem 0;
          letter-spacing: -0.5px;
        }

        .login-header p {
          color: #64748b;
          font-size: 0.9rem;
          line-height: 1.5;
          margin: 0;
        }

        .login-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .input-label {
          font-size: 0.8rem;
          font-weight: 700;
          color: #334155;
        }

        .login-input {
          width: 100%;
          padding: 0.85rem 1rem;
          background: white;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          font-size: 0.95rem;
          outline: none;
          transition: var(--tr-base);
          color: #1e293b;
          font-family: var(--font-body);
        }

        .login-input:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 3px var(--primary-glow);
        }
        
        .login-input::placeholder {
          color: #94a3b8;
        }

        .password-input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }
        .password-input-wrapper .login-input { padding-right: 2.5rem; }

        .btn-toggle-password {
          position: absolute;
          right: 0.75rem;
          background: none;
          border: none;
          color: #94a3b8;
          cursor: pointer;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--tr-base);
        }
        
        .btn-toggle-password:hover { color: #334155; }

        .btn-login {
          margin-top: 1rem;
          width: 100%;
          padding: 0.9rem;
          border: none;
          border-radius: 8px;
          background: #034f75; /* A dark business blue matching the reference */
          color: white;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: var(--tr-base);
        }

        .btn-login:hover {
          background: #023c5a;
        }

        .login-footer {
          text-align: center;
          font-size: 0.85rem;
          color: #94a3b8;
        }
        
        .link-contact {
          color: #ea580c;
          font-weight: 600;
          text-decoration: none;
          transition: 0.2s;
        }
        .link-contact:hover { text-decoration: underline; }
        
        .text-blue { color: #ea580c; }

        @media (max-width: 900px) {
          .login-container { flex-direction: column; min-height: auto; }
          .login-info-side { flex: none; padding: 2rem; }
          .info-text h1 { font-size: 1.5rem; }
          .login-form-side { padding: 2rem; }
        }
      `}} />
    </div>
  );
};

export default Login;
