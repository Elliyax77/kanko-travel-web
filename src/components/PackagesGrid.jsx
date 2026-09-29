import React from 'react';
import { Plane, Calendar, Check, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { travelPackages, agencyInfo } from '../data/kankoData';
import './PackagesGrid.css';

const PackagesGrid = ({ activeCategory, onOpenContact }) => {
  const filteredPackages = activeCategory === 'todos' || activeCategory === 'fulldays' || activeCategory === 'vuelos'
    ? travelPackages
    : travelPackages.filter(pkg => pkg.category === activeCategory);

  const openWhatsApp = (msg) => {
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${agencyInfo.whatsappNumber}?text=${encoded}`, '_blank');
  };

  return (
    <section className="kanko-packages-section" id="paquetes">
      <div className="container">
        
        {/* Encabezado de la sección */}
        <div className="packages-section-header">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>PAQUETES INTERNACIONALES</span>
          </div>
          <h2 className="section-title">Destinos & Experiencias Exclusivas</h2>
          <p className="section-subtitle">
            Itinerarios curados para viajeros exigentes con facilidades de pago en cuotas y asesoría integral.
          </p>
        </div>

        {/* Cuadrícula de paquetes */}
        <div className="packages-grid">
          {filteredPackages.map((pkg) => (
            <article key={pkg.id} className="kanko-pkg-card">
              
              {/* Contenedor de la Imagen con Tags */}
              <div className="pkg-image-wrapper">
                <img src={pkg.image} alt={pkg.title} className="pkg-image" loading="lazy" />
                <div className="pkg-image-overlay"></div>

                {/* Badge superior izquierdo */}
                <div className="pkg-badge-top-left">
                  <span className="badge-tag">{pkg.badge}</span>
                </div>

                {/* Badge superior derecho: Vuelo incluido */}
                {pkg.flightIncluded && (
                  <div className="pkg-flight-tag">
                    <Plane size={13} />
                    <span>Vuelo incluido</span>
                  </div>
                )}

                {/* BOTÓN OBLIGATORIO: Inferior Izquierda -> Más información */}
                <div className="pkg-action-bottom-left">
                  <button
                    type="button"
                    className="btn-kanko-action pkg-btn-more"
                    onClick={() => openWhatsApp(pkg.waMessage)}
                    aria-label={`Más información sobre ${pkg.title}`}
                  >
                    <span>Más información</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>

              {/* Contenido descriptivo de la tarjeta */}
              <div className="pkg-content-body">
                <div className="pkg-meta-row">
                  <span className="pkg-country">{pkg.country}</span>
                  <span className="pkg-duration">
                    <Calendar size={13} /> {pkg.duration}
                  </span>
                </div>

                <h3 className="pkg-title">{pkg.title}</h3>
                <p className="pkg-destination">{pkg.destination}</p>

                {/* Lista de Inclusiones Clave */}
                <ul className="pkg-highlights-list">
                  {pkg.highlights.map((item, idx) => (
                    <li key={idx} className="highlight-item">
                      <Check size={14} className="item-check" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Pie de tarjeta con precio y CTA directo */}
                <div className="pkg-footer-row">
                  <div className="pkg-price-col">
                    <span className="price-from">Precio desde</span>
                    <span className="price-amount">${pkg.price} <small>USD</small></span>
                  </div>

                  <button
                    type="button"
                    className="pkg-quote-cta"
                    onClick={() => openWhatsApp(pkg.waMessage)}
                  >
                    Reservar
                  </button>
                </div>

              </div>

            </article>
          ))}
        </div>

        {/* Banner interactivo: Asesoría a la medida & Cuotas */}
        <div className="kanko-quote-banner">
          <div className="quote-banner-content">
            <span className="banner-sub">¿Tienes una ruta diferente en mente?</span>
            <h3 className="banner-title">Creamos tu itinerario personalizado</h3>
            <p className="banner-desc">
              Si deseas viajar en fechas específicas, agregar noches adicionales o volar con una aerolínea preferida, te diseñamos el paquete ideal con plan de pago en cuotas.
            </p>
          </div>
          <button 
            type="button" 
            className="btn-kanko-primary banner-cta"
            onClick={onOpenContact}
          >
            <span>Hablar con un Asesor Kanko</span>
            <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default PackagesGrid;
