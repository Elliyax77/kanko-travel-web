import React from 'react';
import { X, ShieldCheck, CheckCircle2, Award, HeartHandshake, HelpCircle, MessageCircle } from 'lucide-react';
import { travelInsuranceInfo, aboutKanko, agencyInfo } from '../data/kankoData';
import './DetailModals.css';

const DetailModals = ({ activeModal, onClose }) => {
  if (!activeModal) return null;

  const openWhatsApp = (msg) => {
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${agencyInfo.whatsappNumber}?text=${encoded}`, '_blank');
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        
        {/* Botón cerrar modal */}
        <button 
          type="button" 
          onClick={onClose} 
          className="modal-close-icon"
          aria-label="Cerrar ventana"
        >
          <X size={20} />
        </button>

        {/* CONTENIDO 1: Seguro de Viaje y Asistencia Internacional */}
        {activeModal === 'seguro-viaje' && (
          <div className="modal-body-content">
            <div className="modal-header-icon-box">
              <ShieldCheck size={32} className="modal-top-icon" />
            </div>
            
            <h2 className="modal-title">{travelInsuranceInfo.title}</h2>
            <p className="modal-subtitle">{travelInsuranceInfo.subtitle}</p>

            <div className="modal-info-card">
              <span className="card-kicker">🎌 REQUISITO CONSULAR & PROTECCIÓN TOTAL</span>
              <p className="card-text">
                Viaja protegido ante cualquier imprevisto de salud o logística en el extranjero. Nuestras pólizas cumplen al 100% con los requisitos de la Unión Europea (Visa Schengen) y consulados internacionales.
              </p>
            </div>

            <h3 className="modal-section-h3">Beneficios y Coberturas Incluidas</h3>
            <ul className="modal-checklist">
              {travelInsuranceInfo.coverage.map((item, idx) => (
                <li key={idx} className="modal-check-item">
                  <CheckCircle2 size={16} className="check-green" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="btn-modal-action"
              onClick={() => openWhatsApp(travelInsuranceInfo.waMessage)}
            >
              <MessageCircle size={18} />
              <span>Cotizar Seguro de Viaje por WhatsApp</span>
            </button>
          </div>
        )}

        {/* CONTENIDO 2: Quiénes Somos & Filosofía Kanko */}
        {activeModal === 'quienes-somos' && (
          <div className="modal-body-content">
            <div className="modal-header-icon-box">
              <Award size={32} className="modal-top-icon" />
            </div>

            <h2 className="modal-title">{aboutKanko.title}</h2>
            <p className="modal-subtitle">Especialistas en crear travesías memorables</p>

            <div className="modal-quote-box">
              <p className="quote-kanji">「観光」 — Kankō</p>
              <p className="quote-meaning">El arte milenario de viajar y contemplar la belleza del mundo con serenidad y asombro.</p>
            </div>

            <p className="modal-paragraph">{aboutKanko.mission}</p>

            <h3 className="modal-section-h3">Nuestros Pilares</h3>
            <div className="pillars-grid">
              {aboutKanko.pillars.map((pil, idx) => (
                <div key={idx} className="pillar-item">
                  <HeartHandshake size={18} className="pillar-icon" />
                  <div>
                    <h4 className="pillar-title">{pil.title}</h4>
                    <p className="pillar-desc">{pil.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="stats-row">
              <div className="stat-box">
                <span className="stat-number">{agencyInfo.yearsOfExperience}</span>
                <span className="stat-label">De Trayectoria</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">{agencyInfo.satisfiedTravelers}</span>
                <span className="stat-label">En Todo el Mundo</span>
              </div>
            </div>

            <button
              type="button"
              className="btn-modal-action"
              onClick={() => openWhatsApp("¡Hola Kanko Travel! 🎌 Me gustaría saber más sobre la agencia y cómo pueden asesorarme para mi viaje.")}
            >
              <MessageCircle size={18} />
              <span>Conoce a un Asesor Personalizado</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default DetailModals;
