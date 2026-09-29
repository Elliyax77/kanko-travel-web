import React from 'react';
import { 
  X, 
  Globe, 
  Sun, 
  Sparkles, 
  ShieldCheck, 
  CreditCard, 
  Building2, 
  MessageCircle, 
  Phone, 
  ArrowRight,
  Compass
} from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';
import { agencyInfo } from '../data/kankoData';
import './NavDrawer.css';

const menuItems = [
  { id: 'paquetes', label: 'Paquetes Internacionales', subtitle: 'Japón, Europa y Caribe', icon: Globe, isScroll: true },
  { id: 'full-days', label: 'Full Days & Escapadas', subtitle: 'Morrocoy, Isla Larga y Tovar', icon: Sun, isScroll: true },
  { id: 'cotizador', label: 'Cotizador Interactivo', subtitle: 'Arma tu viaje a la medida', icon: Sparkles, isScroll: true },
  { id: 'promociones', label: 'Promociones del Mes', subtitle: 'Salidas confirmadas 2026', icon: Compass, isScroll: true },
  { id: 'seguro-viaje', label: 'Seguros & Asistencia Médica', subtitle: 'Cobertura internacional y Schengen', icon: ShieldCheck, isScroll: false },
  { id: 'metodos-pago', label: 'Métodos de Pago & Cuotas', subtitle: 'Zelle, BCV, Binance y cuotas al 30%', icon: CreditCard, isScroll: true },
  { id: 'quienes-somos', label: 'Sobre Kanko Travel (観光)', subtitle: 'Nuestra historia y valores', icon: Building2, isScroll: false },
  { id: 'contacto', label: 'Canales de Contacto', subtitle: 'WhatsApp, llamadas y oficina', icon: MessageCircle, isScroll: false, highlight: true }
];

const NavDrawer = ({ isOpen, onClose, onSelectMenuItem }) => {
  if (!isOpen) return null;

  const openWhatsAppDirect = () => {
    const msg = encodeURIComponent("¡Hola Kanko Travel! 🎌 Me gustaría comunicarme con un asesor de viajes para planificar mi próximo destino.");
    window.open(`https://wa.me/${agencyInfo.whatsappNumber}?text=${msg}`, '_blank');
  };

  return (
    <div className="drawer-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="drawer-panel" onClick={(e) => e.stopPropagation()}>
        
        {/* Cabecera del Drawer */}
        <div className="drawer-header">
          <div className="drawer-brand">
            <img 
              src="/kanko-isotype.jpg" 
              alt="Kanko Isotipo" 
              className="drawer-isotype" 
            />
            <div className="drawer-brand-text">
              <span className="brand-name">Kanko Travel</span>
              <span className="brand-kanji">観光 • Tabi Experience</span>
            </div>
          </div>

          <button 
            type="button" 
            onClick={onClose} 
            className="drawer-close-btn"
            aria-label="Cerrar menú"
          >
            <X size={20} />
          </button>
        </div>

        {/* Lista de Navegación */}
        <nav className="drawer-nav">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                type="button"
                className={`drawer-nav-item ${item.highlight ? 'highlight' : ''}`}
                onClick={() => {
                  onSelectMenuItem(item.id, item.isScroll);
                  onClose();
                }}
              >
                <div className="nav-item-icon-box">
                  <Icon size={19} />
                </div>
                <div className="nav-item-texts">
                  <span className="nav-item-title">{item.label}</span>
                  <span className="nav-item-subtitle">{item.subtitle}</span>
                </div>
                <ArrowRight size={16} className="nav-item-chevron" />
              </button>
            );
          })}
        </nav>

        {/* Pie del Drawer con Contacto Directo */}
        <div className="drawer-footer">
          <button 
            type="button" 
            className="drawer-wa-btn"
            onClick={openWhatsAppDirect}
          >
            <MessageCircle size={18} />
            <span>Chat Directo WhatsApp</span>
          </button>

          <div className="drawer-socials">
            <a href={`tel:${agencyInfo.whatsappNumber}`} className="social-pill" title="Llamar">
              <Phone size={15} />
              <span>{agencyInfo.displayPhone}</span>
            </a>
            <a href={agencyInfo.instagramUrl} target="_blank" rel="noopener noreferrer" className="social-pill" title="Instagram">
              <InstagramIcon size={15} />
              <span>{agencyInfo.instagram}</span>
            </a>
          </div>

          <p className="drawer-copy">
            © {new Date().getFullYear()} Kanko Travel • Todos los derechos reservados
          </p>
        </div>

      </div>
    </div>
  );
};

export default NavDrawer;
