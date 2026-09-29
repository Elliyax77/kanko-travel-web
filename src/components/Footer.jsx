import React from 'react';
import { Phone, Mail, MessageCircle, MapPin, Globe, Shield, Heart } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';
import { agencyInfo } from '../data/kankoData';
import './Footer.css';

const Footer = ({ onOpenContact, onSelectModal, onOpenLegal, onOpenCookieSettings }) => {
  return (
    <footer className="kanko-footer">
      <div className="container">
        
        <div className="footer-top-grid">
          
          {/* Columna 1: Marca & Filosofía */}
          <div className="footer-brand-col">
            <div className="footer-logo-row">
              <img 
                src="/kanko-isotype.jpg" 
                alt="Kanko Travel Logo" 
                className="footer-logo-img" 
              />
              <div className="footer-brand-title">
                <span className="brand-main">Kanko Travel</span>
                <span className="brand-sub">AGENCIA DE VIAJES • 観光</span>
              </div>
            </div>

            <p className="footer-motto">
              Expertos en rutas internacionales hacia Japón y Asia, Europa y el Caribe. Asesoría humana, reservas en cuotas y asistencia personalizada de principio a fin.
            </p>

            <div className="footer-social-links">
              <a href={agencyInfo.instagramUrl} target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Instagram">
                <InstagramIcon size={18} />
              </a>
              <a href={`https://wa.me/${agencyInfo.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="WhatsApp">
                <MessageCircle size={18} />
              </a>
              <a href={`tel:${agencyInfo.whatsappNumber}`} className="footer-social-icon" aria-label="Teléfono">
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Columna 2: Navegación Rápida */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Explorar</h4>
            <ul className="footer-nav-list">
              <li><a href="#paquetes">Paquetes Internacionales</a></li>
              <li><a href="#full-days">Full Days & Escapadas</a></li>
              <li><a href="#cotizador">Cotizador a la Medida</a></li>
              <li><a href="#promociones">Promociones del Mes</a></li>
              <li><a href="#metodos-pago">Planes de Cuotas al 30%</a></li>
            </ul>
          </div>

          {/* Columna 3: Información & Asistencia */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Información</h4>
            <ul className="footer-nav-list">
              <li>
                <button type="button" onClick={() => onSelectModal('seguro-viaje')}>
                  Seguros & Visa Schengen
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onSelectModal('quienes-somos')}>
                  Sobre Kanko Travel (観光)
                </button>
              </li>
              <li><a href="#metodos-pago">Métodos de Pago</a></li>
              <li>
                <button type="button" onClick={onOpenContact}>
                  Atención al Cliente
                </button>
              </li>
            </ul>
          </div>

          {/* Columna 4: Contacto Inmediato */}
          <div className="footer-contact-col">
            <h4 className="footer-col-title">Atención Directa</h4>
            
            <div className="footer-contact-item">
              <Phone size={16} className="contact-item-icon" />
              <span>{agencyInfo.displayPhone}</span>
            </div>

            <div className="footer-contact-item">
              <Mail size={16} className="contact-item-icon" />
              <span>{agencyInfo.email}</span>
            </div>

            <div className="footer-contact-item">
              <MapPin size={16} className="contact-item-icon" />
              <span>{agencyInfo.location}</span>
            </div>

            <button 
              type="button" 
              className="btn-footer-chat"
              onClick={onOpenContact}
            >
              <MessageCircle size={16} />
              <span>Contactar por WhatsApp</span>
            </button>
          </div>

        </div>

        {/* Barra accesible de enlaces legales y cumplimiento normativo */}
        <nav className="footer-legal-bar" aria-label="Enlaces Legales y Normativos">
          <ul className="legal-links-list">
            <li>
              <button type="button" className="footer-legal-link" onClick={() => onOpenLegal && onOpenLegal('avisoLegal')}>
                Aviso Legal
              </button>
            </li>
            <li className="legal-sep">•</li>
            <li>
              <button type="button" className="footer-legal-link" onClick={() => onOpenLegal && onOpenLegal('privacidad')}>
                Política de Privacidad
              </button>
            </li>
            <li className="legal-sep">•</li>
            <li>
              <button type="button" className="footer-legal-link" onClick={() => onOpenLegal && onOpenLegal('cookies')}>
                Política de Cookies
              </button>
            </li>
            <li className="legal-sep">•</li>
            <li>
              <button type="button" className="footer-legal-link" onClick={() => onOpenLegal && onOpenLegal('terminos')}>
                Términos de Contratación & Cancelación
              </button>
            </li>
            <li className="legal-sep">•</li>
            <li>
              <button type="button" className="footer-legal-link cookie-config-trigger" onClick={onOpenCookieSettings}>
                ⚙️ Configurar Cookies
              </button>
            </li>
          </ul>
        </nav>

        {/* Barra de copyright y sellos de confianza */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © {new Date().getFullYear()} Kanko Travel (観光) • Agencia de Viajes. Todos los derechos reservados.
          </p>
          <div className="security-badges">
            <span className="sec-badge"><Shield size={13} /> Pagos Seguros</span>
            <span className="sec-badge"><Globe size={13} /> Operador Certificado</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
