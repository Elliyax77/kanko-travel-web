import React, { useState } from 'react';
import { Send, Sparkles, Check, Users, Calendar, MapPin } from 'lucide-react';
import { agencyInfo } from '../data/kankoData';
import './TripPlanner.css';

const destinations = [
  { id: 'japon', label: '🎌 Japón & Asia' },
  { id: 'europa', label: '🏰 Europa' },
  { id: 'caribe', label: '🏝️ Caribe & Playas' },
  { id: 'fullday', label: '⚡ Full Day Aventura' },
  { id: 'vuelos', label: '✈️ Boletos & Visas' }
];

const dates = [
  { id: 'inmediato', label: 'Este mes / Próximos 30 días' },
  { id: 'vacaciones', label: 'Temporada Vacacional' },
  { id: 'fin-ano', label: 'Navidad / Fin de Año' },
  { id: 'flexible', label: 'Fechas Flexibles 2026' }
];

const partySizes = [
  { id: '1', label: '1 Viajero (Solo)' },
  { id: '2', label: '2 Personas (Pareja)' },
  { id: 'grupo', label: 'Familia o Grupo (3+)' }
];

const TripPlanner = ({ onOpenLegal }) => {
  const [selectedDest, setSelectedDest] = useState(destinations[0].id);
  const [selectedDate, setSelectedDate] = useState(dates[0].id);
  const [selectedParty, setSelectedParty] = useState(partySizes[1].id);
  
  // Cumplimiento RGPD / Normativo: Casilla sin pre-marcar obligatoria
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleGenerateQuote = () => {
    if (!privacyAccepted) {
      setShowError(true);
      return;
    }
    setShowError(false);

    const destObj = destinations.find(d => d.id === selectedDest);
    const dateObj = dates.find(d => d.id === selectedDate);
    const partyObj = partySizes.find(p => p.id === selectedParty);

    const message = `¡Hola Kanko Travel! 🎌 Quisiera una cotización personalizada para mi viaje:
📍 Destino: ${destObj?.label}
🗓️ Fecha estimada: ${dateObj?.label}
👥 Pasajeros: ${partyObj?.label}
(He aceptado la Política de Privacidad y Términos en kankotravel.com)
¿Podrían compartirme paquetes disponibles y opciones de pago en cuotas?`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${agencyInfo.whatsappNumber}?text=${encoded}`, '_blank');
  };

  return (
    <section className="trip-planner-section" id="cotizador">
      <div className="container">
        
        <div className="planner-card">
          <div className="planner-header">
            <div className="planner-badge">
              <Sparkles size={14} className="badge-sparkle" />
              <span>COTIZADOR INTERACTIVO</span>
            </div>
            <h2 className="planner-title">Diseña tu Viaje a la Medida</h2>
            <p className="planner-desc">
              Selecciona tus preferencias y un asesor experto de Kanko Travel te armará una propuesta personalizada en minutos.
            </p>
          </div>

          <div className="planner-steps-grid">
            
            {/* Paso 1: Destino */}
            <div className="step-block">
              <div className="step-label">
                <MapPin size={16} className="step-icon" />
                <span>1. ¿Hacia dónde quieres viajar?</span>
              </div>
              <div className="chip-selector-group">
                {destinations.map(dest => (
                  <button
                    key={dest.id}
                    type="button"
                    className={`planner-chip ${selectedDest === dest.id ? 'active' : ''}`}
                    onClick={() => setSelectedDest(dest.id)}
                  >
                    {selectedDest === dest.id && <Check size={14} className="chip-check" />}
                    <span>{dest.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Paso 2: Fecha aproximada */}
            <div className="step-block">
              <div className="step-label">
                <Calendar size={16} className="step-icon" />
                <span>2. ¿En qué época planeas viajar?</span>
              </div>
              <div className="chip-selector-group">
                {dates.map(date => (
                  <button
                    key={date.id}
                    type="button"
                    className={`planner-chip ${selectedDate === date.id ? 'active' : ''}`}
                    onClick={() => setSelectedDate(date.id)}
                  >
                    {selectedDate === date.id && <Check size={14} className="chip-check" />}
                    <span>{date.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Paso 3: Número de viajeros */}
            <div className="step-block">
              <div className="step-label">
                <Users size={16} className="step-icon" />
                <span>3. ¿Quiénes viajan?</span>
              </div>
              <div className="chip-selector-group">
                {partySizes.map(party => (
                  <button
                    key={party.id}
                    type="button"
                    className={`planner-chip ${selectedParty === party.id ? 'active' : ''}`}
                    onClick={() => setSelectedParty(party.id)}
                  >
                    {selectedParty === party.id && <Check size={14} className="chip-check" />}
                    <span>{party.label}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Casilla obligatoria de cumplimiento RGPD / Privacidad (No pre-marcada) */}
          <div className="planner-consent-wrapper">
            <label className={`planner-consent-label ${showError && !privacyAccepted ? 'error' : ''}`}>
              <input
                type="checkbox"
                id="kanko-privacy-check"
                checked={privacyAccepted}
                onChange={(e) => {
                  setPrivacyAccepted(e.target.checked);
                  if (e.target.checked) setShowError(false);
                }}
                className="planner-checkbox"
                required
              />
              <span className="consent-text">
                He leído y acepto la{' '}
                <button
                  type="button"
                  className="legal-inline-link"
                  onClick={() => onOpenLegal && onOpenLegal('privacidad')}
                >
                  Política de Privacidad
                </button>{' '}
                y los{' '}
                <button
                  type="button"
                  className="legal-inline-link"
                  onClick={() => onOpenLegal && onOpenLegal('terminos')}
                >
                  Términos de Contratación
                </button>.
              </span>
            </label>

            {showError && !privacyAccepted && (
              <p className="consent-error-msg" role="alert">
                ⚠️ Por favor marque la casilla para aceptar la Política de Privacidad antes de cotizar.
              </p>
            )}
          </div>

          {/* Botón de envío a WhatsApp */}
          <div className="planner-action-box">
            <button
              type="button"
              className="btn-planner-send"
              onClick={handleGenerateQuote}
            >
              <Send size={18} />
              <span>Solicitar Cotización por WhatsApp</span>
            </button>
            <p className="planner-subnote">
              🔒 Respuesta rápida sin compromiso • Asesoría 100% personalizada
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TripPlanner;
