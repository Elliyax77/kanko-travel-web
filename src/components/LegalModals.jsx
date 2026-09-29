import React from 'react';
import { X, Shield, FileText, Lock, Cookie, Scale, Printer } from 'lucide-react';
import { legalData } from '../data/legalContent';
import './LegalModals.css';

const tabConfig = {
  avisoLegal: { icon: Scale, label: 'Aviso Legal' },
  privacidad: { icon: Lock, label: 'Privacidad' },
  cookies: { icon: Cookie, label: 'Cookies' },
  terminos: { icon: FileText, label: 'Términos' }
};

const LegalModals = ({ activeLegalDoc, onClose, onSwitchDoc }) => {
  if (!activeLegalDoc) return null;

  const currentDoc = legalData[activeLegalDoc];
  if (!currentDoc) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="legal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="legal-modal-container" onClick={(e) => e.stopPropagation()}>
        
        {/* Encabezado del Modal Legal */}
        <div className="legal-modal-header">
          <div className="legal-header-titles">
            <div className="legal-tag">
              <Shield size={14} />
              <span>CUMPLIMIENTO NORMATIVO Y LEGAL DIGITAL</span>
            </div>
            <h2 className="legal-doc-title">{currentDoc.title}</h2>
            <span className="legal-update-date">Última actualización: {currentDoc.lastUpdated}</span>
          </div>

          <div className="legal-header-actions">
            <button 
              type="button" 
              onClick={handlePrint}
              className="legal-print-btn"
              title="Imprimir documento legal"
              aria-label="Imprimir"
            >
              <Printer size={18} />
            </button>
            <button 
              type="button" 
              onClick={onClose} 
              className="legal-close-btn"
              aria-label="Cerrar modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Pestañas de navegación rápida entre documentos */}
        <div className="legal-tabs-bar" role="tablist">
          {Object.keys(tabConfig).map((key) => {
            const Icon = tabConfig[key].icon;
            const isActive = activeLegalDoc === key;
            return (
              <button
                key={key}
                role="tab"
                aria-selected={isActive}
                type="button"
                className={`legal-tab-btn ${isActive ? 'active' : ''}`}
                onClick={() => onSwitchDoc(key)}
              >
                <Icon size={15} />
                <span>{tabConfig[key].label}</span>
              </button>
            );
          })}
        </div>

        {/* Cuerpo de Texto Legal */}
        <div className="legal-modal-body">
          {currentDoc.sections.map((sec, idx) => (
            <section key={idx} className="legal-section-block">
              <h3 className="legal-section-h3">{sec.heading}</h3>
              <div className="legal-section-text">
                {sec.content.split('\n\n').map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Pie del Modal */}
        <div className="legal-modal-footer">
          <p className="legal-footer-note">
            Para dudas sobre este documento, contáctenos en <a href="mailto:legal@kankotravel.com">legal@kankotravel.com</a>
          </p>
          <button type="button" className="btn-kanko-dark legal-ok-btn" onClick={onClose}>
            Entendido y Aceptar
          </button>
        </div>

      </div>
    </div>
  );
};

export default LegalModals;
