import React from 'react';
import { Compass, MessageCircle, Menu } from 'lucide-react';
import './MobileBottomBar.css';

const MobileBottomBar = ({ onOpenContact, onOpenMenu, onScrollPackages }) => {
  return (
    <div className="mobile-bottom-bar" role="navigation" aria-label="Navegación móvil">
      <button 
        type="button" 
        className="bottom-nav-item"
        onClick={onScrollPackages}
      >
        <Compass size={20} />
        <span>Destinos</span>
      </button>

      <button 
        type="button" 
        className="bottom-nav-cta"
        onClick={onOpenContact}
      >
        <MessageCircle size={20} />
        <span>Cotizar</span>
      </button>

      <button 
        type="button" 
        className="bottom-nav-item"
        onClick={onOpenMenu}
      >
        <Menu size={20} />
        <span>Menú</span>
      </button>
    </div>
  );
};

export default MobileBottomBar;
