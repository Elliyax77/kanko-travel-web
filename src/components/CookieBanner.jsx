import React, { useState, useEffect } from 'react';
import { Cookie, Shield, Check, X, Settings2, ExternalLink } from 'lucide-react';
import './CookieBanner.css';

const COOKIE_STORAGE_KEY = 'kanko_cookie_consent_v1';

const defaultConsent = {
  necessary: true, // Siempre obligatorias
  analytics: false,
  marketing: false,
  decided: false,
  timestamp: null
};

const CookieBanner = ({ onOpenLegal, forceOpenSettings, onCloseSettings }) => {
  const [consent, setConsent] = useState(() => {
    try {
      const stored = localStorage.getItem(COOKIE_STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn('No se pudo leer localStorage para cookies', e);
    }
    return defaultConsent;
  });

  const [showBanner, setShowBanner] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);

  // Opciones temporales dentro del modal de configuración
  const [tempAnalytics, setTempAnalytics] = useState(false);
  const [tempMarketing, setTempMarketing] = useState(false);

  useEffect(() => {
    // Si el usuario aún no ha decidido, mostrar banner tras breve delay estético
    if (!consent.decided) {
      const t = setTimeout(() => setShowBanner(true), 800);
      return () => clearTimeout(t);
    }
  }, [consent.decided]);

  // Si se solicita abrir la configuración desde el Footer
  useEffect(() => {
    if (forceOpenSettings) {
      setTempAnalytics(consent.analytics);
      setTempMarketing(consent.marketing);
      setShowSettingsModal(true);
    }
  }, [forceOpenSettings, consent.analytics, consent.marketing]);

  const saveConsent = (analyticsVal, marketingVal) => {
    const newConsent = {
      necessary: true,
      analytics: analyticsVal,
      marketing: marketingVal,
      decided: true,
      timestamp: new Date().toISOString()
    };

    setConsent(newConsent);
    try {
      localStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify(newConsent));
    } catch (e) {
      console.warn('Error al guardar consentimiento', e);
    }

    // Despachar evento para inicializar o pausar scripts de analítica (ej. Google Analytics / Meta Pixel)
    window.dispatchEvent(new CustomEvent('kankoConsentChanged', { detail: newConsent }));

    setShowBanner(false);
    setShowSettingsModal(false);
    if (onCloseSettings) onCloseSettings();
  };

  const handleAcceptAll = () => {
    saveConsent(true, true);
  };

  const handleRejectNonEssential = () => {
    saveConsent(false, false);
  };

  const handleOpenSettingsModal = () => {
    setTempAnalytics(consent.analytics);
    setTempMarketing(consent.marketing);
    setShowSettingsModal(true);
  };

  const handleSaveCustomPreferences = () => {
    saveConsent(tempAnalytics, tempMarketing);
  };

  return (
    <>
      {/* 1. Banner Principal de Consentimiento Equilibrado */}
      {showBanner && !showSettingsModal && (
        <div className="cookie-banner-wrapper" role="region" aria-label="Gestor de consentimiento de cookies">
          <div className="cookie-banner-inner">
            
            <div className="cookie-icon-col">
              <div className="cookie-badge-icon">
                <Cookie size={24} />
              </div>
            </div>

            <div className="cookie-text-col">
              <h4 className="cookie-title">Respetamos su Privacidad</h4>
              <p className="cookie-desc">
                Utilizamos cookies técnicas necesarias para el funcionamiento del sitio y, con su consentimiento, cookies analíticas para medir el rendimiento de nuestros paquetes y brindarle una experiencia fluida. Puede aceptar todas, rechazar las opcionales o configurar sus preferencias.
                {' '}
                <button 
                  type="button" 
                  className="cookie-link-btn" 
                  onClick={() => onOpenLegal('cookies')}
                >
                  Leer Política de Cookies
                </button>
              </p>
            </div>

            {/* Botones Equilibrados (Aceptar, Rechazar, Configurar) */}
            <div className="cookie-actions-col">
              <button 
                type="button" 
                className="btn-cookie-accept"
                onClick={handleAcceptAll}
              >
                Aceptar Todas
              </button>

              <button 
                type="button" 
                className="btn-cookie-reject"
                onClick={handleRejectNonEssential}
              >
                Rechazar Opcionales
              </button>

              <button 
                type="button" 
                className="btn-cookie-settings"
                onClick={handleOpenSettingsModal}
                title="Configuración detallada"
              >
                <Settings2 size={16} />
                <span>Configurar</span>
              </button>
            </div>

          </div>
        </div>
      )}

      {/* 2. Modal de Configuración Granular de Cookies */}
      {showSettingsModal && (
        <div className="cookie-modal-backdrop" onClick={() => { setShowSettingsModal(false); if (onCloseSettings) onCloseSettings(); }}>
          <div className="cookie-settings-card" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
            
            <div className="cookie-modal-top">
              <div className="modal-title-group">
                <Shield size={20} className="shield-icon" />
                <h3>Centro de Preferencias de Privacidad</h3>
              </div>
              <button 
                type="button" 
                className="cookie-modal-close"
                onClick={() => { setShowSettingsModal(false); if (onCloseSettings) onCloseSettings(); }}
                aria-label="Cerrar configuración"
              >
                <X size={18} />
              </button>
            </div>

            <p className="cookie-modal-intro">
              Personalice qué tecnologías de almacenamiento consiente que utilicemos en su dispositivo. Las cookies técnicas no se pueden desactivar porque garantizan la seguridad y navegación básica.
            </p>

            <div className="cookie-toggles-list">
              
              {/* Categoría 1: Obligatorias */}
              <div className="cookie-toggle-row">
                <div className="toggle-info">
                  <div className="toggle-heading">
                    <span className="toggle-name">Cookies Técnicas y Estrictamente Necesarias</span>
                    <span className="toggle-badge-required">Siempre Activas</span>
                  </div>
                  <p className="toggle-explanation">
                    Imprescindibles para navegar por el sitio web, recordar sus preferencias de sesión y asegurar la integridad de las consultas.
                  </p>
                </div>
                <div className="toggle-switch disabled">
                  <input type="checkbox" checked={true} disabled readOnly />
                  <span className="switch-slider"></span>
                </div>
              </div>

              {/* Categoría 2: Analíticas */}
              <div className="cookie-toggle-row">
                <div className="toggle-info">
                  <div className="toggle-heading">
                    <span className="toggle-name">Cookies Analíticas y Estadísticas</span>
                  </div>
                  <p className="toggle-explanation">
                    Nos permiten cuantificar las visitas y fuentes de tráfico para medir y mejorar el rendimiento de la web de forma anonimizada.
                  </p>
                </div>
                <label className="toggle-switch">
                  <input 
                    type="checkbox" 
                    checked={tempAnalytics} 
                    onChange={(e) => setTempAnalytics(e.target.checked)} 
                  />
                  <span className="switch-slider"></span>
                </label>
              </div>

              {/* Categoría 3: Marketing */}
              <div className="cookie-toggle-row">
                <div className="toggle-info">
                  <div className="toggle-heading">
                    <span className="toggle-name">Cookies de Personalización & Marketing</span>
                  </div>
                  <p className="toggle-explanation">
                    Utilizadas para ofrecer recomendaciones contextuales de destinos acordes a sus intereses y evitar mostrar promociones irrelevantes.
                  </p>
                </div>
                <label className="toggle-switch">
                  <input 
                    type="checkbox" 
                    checked={tempMarketing} 
                    onChange={(e) => setTempMarketing(e.target.checked)} 
                  />
                  <span className="switch-slider"></span>
                </label>
              </div>

            </div>

            <div className="cookie-modal-buttons">
              <button 
                type="button" 
                className="btn-cookie-reject"
                onClick={handleRejectNonEssential}
              >
                Rechazar No Esenciales
              </button>
              
              <button 
                type="button" 
                className="btn-cookie-accept"
                onClick={handleSaveCustomPreferences}
              >
                Guardar Mis Preferencias
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default CookieBanner;
