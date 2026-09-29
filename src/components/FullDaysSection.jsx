import React from 'react';
import { Sun, Check, ArrowRight, Clock, MapPin } from 'lucide-react';
import { fullDaysList, agencyInfo } from '../data/kankoData';
import './FullDaysSection.css';

const FullDaysSection = ({ onOpenContact }) => {
  const openWhatsApp = (msg) => {
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${agencyInfo.whatsappNumber}?text=${encoded}`, '_blank');
  };

  return (
    <section className="fulldays-section" id="full-days">
      <div className="container">
        
        <div className="fulldays-header">
          <div className="fulldays-badge">
            <Sun size={14} />
            <span>ESCAPADAS & TOURS DE 1 DÍA</span>
          </div>
          <h2 className="fulldays-title">Full Days Inolvidables</h2>
          <p className="fulldays-desc">
            Desconéctate el fin de semana con transporte ejecutivo, traslados marítimos, hidratación y guías certificados.
          </p>
        </div>

        <div className="fulldays-grid">
          {fullDaysList.map((fd) => (
            <div key={fd.id} className="fullday-card">
              
              <div className="fd-image-container">
                <img src={fd.image} alt={fd.title} className="fd-img" loading="lazy" />
                <div className="fd-overlay"></div>
                
                <div className="fd-price-pill">
                  <span className="fd-price-num">{fd.price}</span>
                  <span className="fd-price-text">{fd.perPerson}</span>
                </div>

                <div className="fd-bottom-action">
                  <button
                    type="button"
                    className="btn-kanko-action fd-more-btn"
                    onClick={() => openWhatsApp(fd.waMessage)}
                    aria-label={`Reservar ${fd.title}`}
                  >
                    <span>Reservar Cupo</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>

              <div className="fd-content">
                <div className="fd-meta">
                  <Clock size={13} />
                  <span>{fd.duration}</span>
                </div>

                <h3 className="fd-title">{fd.title}</h3>

                <ul className="fd-inclusions">
                  {fd.includes.map((inc, i) => (
                    <li key={i} className="fd-inc-item">
                      <Check size={13} className="inc-icon" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className="fd-whatsapp-btn"
                  onClick={() => openWhatsApp(fd.waMessage)}
                >
                  Consultar Fechas & Salidas
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FullDaysSection;
