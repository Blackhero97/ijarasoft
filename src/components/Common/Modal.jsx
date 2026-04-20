import React, { useEffect } from 'react';
import { X } from 'lucide-react';

const Modal = ({ isOpen, onClose, title, children, footer, className = '', maxWidth = '600px' }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className={`modal-container fade-in ${className}`} style={{ maxWidth: maxWidth }} onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h3>{title}</h3>
          <button className="modal-close" onClick={onClose}>
            <X size={20} />
          </button>
        </div>
        
        <div className="modal-body">
          {children}
        </div>

        {footer && (
          <div className="modal-footer">
            {footer}
          </div>
        )}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(15, 23, 42, 0.4);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          padding: 1.5rem;
        }

        .modal-container {
          background: white;
          width: 100%;
          border-radius: var(--radius-lg);
          box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
          display: flex;
          flex-direction: column;
          max-height: 90vh;
          border: 1px solid var(--border-light);
        }

        .modal-header {
          padding: 1.25rem 1.5rem;
          border-bottom: 1px solid var(--border-light);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .modal-header h3 {
          margin: 0;
          font-size: 1.25rem;
          color: var(--text-main);
        }

        .modal-close {
          background: transparent;
          border: none;
          color: var(--text-muted);
          padding: 6px;
          border-radius: 8px;
          transition: var(--tr-base);
        }

        .modal-close:hover {
          background: var(--bg-main);
          color: var(--danger);
        }

        .modal-body {
          padding: 1.5rem;
          overflow-y: auto;
          flex: 1;
        }

        .modal-footer {
          padding: 1.25rem 1.5rem;
          border-top: 1px solid var(--border-light);
          display: flex;
          justify-content: flex-end;
          gap: 0.75rem;
          background: #f8fafc;
          border-bottom-left-radius: var(--radius-lg);
          border-bottom-right-radius: var(--radius-lg);
        }

        .form-group {
          margin-bottom: 1.25rem;
        }

        .form-group label {
          display: block;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-main);
          margin-bottom: 0.5rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .pro-input, .pro-select, .pro-textarea {
          width: 100%;
          padding: 0.65rem 0.75rem;
          border: 1px solid var(--border-soft);
          border-radius: var(--radius-md);
          font-family: var(--font-body);
          font-size: 0.95rem;
          transition: var(--tr-base);
          outline: none;
        }

        .pro-input:focus, .pro-select:focus, .pro-textarea:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 3px var(--primary-glow);
        }

        .pro-textarea {
          min-height: 80px;
          resize: vertical;
        }

        @media (max-width: 640px) {
          .form-row { grid-template-columns: 1fr; }
        }
      `}} />
    </div>
  );
};

export default Modal;
