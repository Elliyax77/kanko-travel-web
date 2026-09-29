import React, { useState } from 'react';
import { X, MessageCircle, Phone, Mail, MapPin, Send, Plane } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';
import { agencyInfo } from '../data/kankoData';
import './ContactModal.css';

const ContactModal = ({ isOpen, onClose, onOpenLegal }) => {
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [showError, setShowError] = useState(false);

  if (!isOpen) return null;

  const openWhatsApp = (topic) => {
    if (!privacyAccepted) {
      setShowError(true);
      return;
    }
    setShowError(false);

    let msg = `¡Hola Kanko Travel! 🎌 Me comunico desde su página web para solicitar información sobre ${topic}.`;
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${agencyInfo.whatsappNumber}?text=${encoded}`, '_blank');
  };

  return (
    <div className="contact-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="contact-card" onClick={(e) => e.stopPropagation()}>
        
        <button 
          type="button" 
          onClick={onClose} 
          className="contact-close-btn"
          aria-label="Cerrar modal de contacto"
        >
          <X size={20} />
        </button>

        <div className="contact-card-header">
          <img 
            src="/kanko-isotype.jpg" 
            alt="Kanko Isotipo" 
            className="contact-isotype" 
          />
          <h2 className="contact-card-title">Atención Personalizada Kanko</h2>
          <p className="contact-card-desc">
            Elige el canal de tu preferencia para conversar de inmediato con nuestros especialistas en viajes.
          </p>
        </div>

        {/* Casilla obligatoria RGPD para contacto */}
        <div className="contact-consent-box">
          <label className={`contact-consent-label ${showError && !privacyAccepted ? 'error' : ''}`}>
            <input
              type="checkbox"
              checked={privacyAccepted}
              onChange={(e) => {
                setPrivacyAccepted(e.target.checked);
                if (e.target.checked) setShowError(false);
              }}
              className="contact-checkbox"
            />
            <span className="contact-consent-text">
              Acepto el tratamiento de mis datos de contacto conforme a la{' '}
              <button
                type="button"
                className="legal-inline-link"
                onClick={() => onOpenLegal && onOpenLegal('privacidad')}
              >
                Política de Privacidad
              </button>.
            </span>
          </label>
          {showError && !privacyAccepted && (
            <p className="contact-error-msg">⚠️ Debes marcar la casilla para iniciar el chat</p>
          )}
        </div>

        <div 
          className="contact-options-list"
          onClick={() => {
            if (!privacyAccepted) setShowError(true);
          }}
        >
          
          {/* Opción 1: WhatsApp Paquetes */}
          <button 
            type="button" 
            className={`contact-action-btn primary ${!privacyAccepted ? 'is-disabled' : ''}`}
            onClick={() => openWhatsApp("Paquetes Internacionales y Vacaciones")}
            disabled={!privacyAccepted}
            title={!privacyAccepted ? "Acepta la política de privacidad arriba para chatear" : "Chatear por WhatsApp"}
          >
            <div className="btn-icon-wrapper wa-icon">
              <MessageCircle size={22} />
            </div>
            <div className="btn-label-group">
              <span className="btn-main-label">WhatsApp: Paquetes & Destinos</span>
              <span className="btn-sub-label">Japón, Europa, Caribe y Cuotas</span>
            </div>
            <Send size={16} className="btn-send-icon" />
          </button>

          {/* Opción 2: WhatsApp Boletos Aéreos */}
          <button 
            type="button" 
            className={`contact-action-btn secondary ${!privacyAccepted ? 'is-disabled' : ''}`}
            onClick={() => openWhatsApp("Boletos Aéreos y Cotización de Vuelos")}
            disabled={!privacyAccepted}
            title={!privacyAccepted ? "Acepta la política de privacidad arriba para chatear" : "Chatear por WhatsApp"}
          >
            <div className="btn-icon-wrapper flight-icon">
              <Plane size={22} />
            </div>
            <div className="btn-label-group">
              <span className="btn-main-label">WhatsApp: Boletos Aéreos</span>
              <span className="btn-sub-label">Tarifas internacionales y conexiones</span>
            </div>
            <Send size={16} className="btn-send-icon" />
          </button>

          {/* Opción 3: Llamada Telefónica */}
          <a 
            href={`tel:${agencyInfo.whatsappNumber}`} 
            className="contact-action-btn neutral"
          >
            <div className="btn-icon-wrapper call-icon">
              <Phone size={22} />
            </div>
            <div className="btn-label-group">
              <span className="btn-main-label">Llamada Telefónica Directa</span>
              <span className="btn-sub-label">{agencyInfo.displayPhone}</span>
            </div>
          </a>

          {/* Opción 4: Instagram */}
          <a 
            href={agencyInfo.instagramUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-action-btn neutral"
          >
            <div className="btn-icon-wrapper ig-icon">
              <InstagramIcon size={22} />
            </div>
            <div className="btn-label-group">
              <span className="btn-main-label">Instagram Oficial</span>
              <span className="btn-sub-label">{agencyInfo.instagram} • Tips y Destinos</span>
            </div>
          </a>

        </div>

        <div className="contact-footer-note">
          <MapPin size={14} className="pin-icon" />
          <span>{agencyInfo.location} • Horario de Atención: Lunes a Sábado</span>
        </div>

      </div>
    </div>
  );
};

export default ContactModal;
