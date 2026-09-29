import React, { useState, useEffect } from 'react';
import { MessageCircle, PhoneCall, Menu, Compass } from 'lucide-react';
import { agencyInfo } from '../data/kankoData';
import './Header.css';

const Header = ({ onOpenContact, onOpenMenu, onScrollToSection }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;
          setScrolled((prev) => {
            // Histéresis contra parpadeos: compacta > 60px, expande < 15px
            if (!prev && currentY > 60) return true;
            if (prev && currentY < 15) return false;
            return prev;
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`kanko-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">
        
        {/* Logo oficial Kanko Travel a la izquierda */}
        <a href="#" className="kanko-logo-link" aria-label="Kanko Travel Inicio">
          <img 
            src="/kanko-logo.jpg" 
            alt="Kanko Travel Agencia de Viajes" 
            className="kanko-logo-img" 
          />
        </a>

        {/* Badge central sutil en desktop: Estado de atención */}
        <div className="header-status-badge">
          <span className="pulse-dot"></span>
          <span className="status-text">Asesoría Internacional Activa</span>
        </div>

        {/* Acciones a la derecha: Botón WhatsApp Carmesí + Menú de Opciones */}
        <div className="header-right-actions">
          <button 
            type="button" 
            onClick={onOpenContact} 
            className="btn-kanko-contact"
            aria-label="Contactar por WhatsApp"
          >
            <MessageCircle size={18} className="contact-icon" />
            <span className="contact-text">Cotizar Viaje</span>
          </button>

          <button 
            type="button" 
            onClick={onOpenMenu}
            className="btn-kanko-menu"
            aria-label="Abrir menú"
            title="Menú Kanko"
          >
            <Menu size={22} className="menu-icon" />
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;
