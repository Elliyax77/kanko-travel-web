import React, { useState } from 'react';
import Header from './components/Header';
import CategoryBar from './components/CategoryBar';
import HeroSlider from './components/HeroSlider';
import TripPlanner from './components/TripPlanner';
import PackagesGrid from './components/PackagesGrid';
import FullDaysSection from './components/FullDaysSection';
import FeaturesSection from './components/FeaturesSection';
import PaymentMethodsSection from './components/PaymentMethodsSection';
import Footer from './components/Footer';
import NavDrawer from './components/NavDrawer';
import DetailModals from './components/DetailModals';
import ContactModal from './components/ContactModal';
import MobileBottomBar from './components/MobileBottomBar';
import LegalModals from './components/LegalModals';
import CookieBanner from './components/CookieBanner';
import './App.css';

function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null); // 'seguro-viaje' | 'quienes-somos' | null
  const [activeCategory, setActiveCategory] = useState('todos');
  
  // Cumplimiento Legal: Modales de textos normativos y configuración de cookies
  const [activeLegalDoc, setActiveLegalDoc] = useState(null); // 'avisoLegal' | 'privacidad' | 'cookies' | 'terminos' | null
  const [cookieSettingsOpen, setCookieSettingsOpen] = useState(false);

  const handleScrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectMenuItem = (id, isScroll) => {
    if (isScroll) {
      handleScrollToSection(id);
    } else if (id === 'contacto') {
      setContactOpen(true);
    } else {
      // Modales como 'seguro-viaje', 'quienes-somos'
      setActiveModal(id);
    }
  };

  const handleSelectCategory = (catId) => {
    setActiveCategory(catId);
    if (catId === 'fulldays') {
      handleScrollToSection('full-days');
    } else if (catId === 'vuelos') {
      setContactOpen(true);
    } else {
      handleScrollToSection('paquetes');
    }
  };

  return (
    <div className="kanko-app">
      {/* 1. Header con Logo Kanko Travel a la izquierda, Cotizar y Menú */}
      <Header 
        onOpenContact={() => setContactOpen(true)}
        onOpenMenu={() => setMenuOpen(true)}
        onScrollToSection={handleScrollToSection}
      />

      {/* 2. Barra de Categorías Swipeable en Móvil */}
      <CategoryBar 
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
      />

      <main>
        {/* 3. Hero Slider Cinematográfico con soporte táctil Swipe */}
        <HeroSlider onOpenContact={() => setContactOpen(true)} />

        {/* 4. Cotizador Interactivo: Diseña tu Viaje a la Medida */}
        <TripPlanner onOpenLegal={(docKey) => setActiveLegalDoc(docKey)} />

        {/* 5. Cuadrícula de Paquetes Internacionales Curados */}
        <PackagesGrid 
          activeCategory={activeCategory}
          onOpenContact={() => setContactOpen(true)}
        />

        {/* 6. Sección de Full Days & Escapadas Cortas */}
        <FullDaysSection onOpenContact={() => setContactOpen(true)} />

        {/* 7. Por qué elegir Kanko Travel (Pilares de Excelencia) */}
        <FeaturesSection />

        {/* 8. Métodos de Pago Transparentes & Plan de Cuotas desde 30% */}
        <PaymentMethodsSection onOpenContact={() => setContactOpen(true)} />
      </main>

      {/* 9. Footer Oscuro Premium con Canales de Contacto y Enlaces Legales Accesibles */}
      <Footer 
        onOpenContact={() => setContactOpen(true)}
        onSelectModal={(modalId) => setActiveModal(modalId)}
        onOpenLegal={(docKey) => setActiveLegalDoc(docKey)}
        onOpenCookieSettings={() => setCookieSettingsOpen(true)}
      />

      {/* 10. Barra Inferior Fija para Móviles */}
      <MobileBottomBar 
        onOpenContact={() => setContactOpen(true)}
        onOpenMenu={() => setMenuOpen(true)}
        onScrollPackages={() => handleScrollToSection('paquetes')}
      />

      {/* 11. Slide-over Drawer de Navegación Lateral */}
      <NavDrawer 
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onSelectMenuItem={handleSelectMenuItem}
      />

      {/* 12. Modal de Detalle (Seguros y Quiénes Somos) */}
      <DetailModals 
        activeModal={activeModal}
        onClose={() => setActiveModal(null)}
      />

      {/* 13. Modal de Contacto Inmediato (WhatsApp / Llamada / Instagram con validación de privacidad) */}
      <ContactModal 
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        onOpenLegal={(docKey) => setActiveLegalDoc(docKey)}
      />

      {/* 14. Modales de Documentos Legales Profesionales (Aviso Legal, Privacidad, Cookies, Términos) */}
      <LegalModals 
        activeLegalDoc={activeLegalDoc}
        onClose={() => setActiveLegalDoc(null)}
        onSwitchDoc={(docKey) => setActiveLegalDoc(docKey)}
      />

      {/* 15. Banner de Consentimiento de Cookies (Aceptar, Rechazar, Configurar con bloqueo previo) */}
      <CookieBanner 
        onOpenLegal={(docKey) => setActiveLegalDoc(docKey)}
        forceOpenSettings={cookieSettingsOpen}
        onCloseSettings={() => setCookieSettingsOpen(false)}
      />
    </div>
  );
}

export default App;
