import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles, Calendar } from 'lucide-react';
import { heroSlides, agencyInfo } from '../data/kankoData';
import './HeroSlider.css';

const HeroSlider = ({ onOpenContact }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Swipe táctil en móviles
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 45) {
      handleNext();
    } else if (distance < -45) {
      handlePrev();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const currentSlide = heroSlides[currentIndex];

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 1.04
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 280, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.7 }
      }
    },
    exit: (dir) => ({
      x: dir > 0 ? '-100%' : '100%',
      opacity: 0,
      scale: 0.96,
      transition: {
        x: { type: 'spring', stiffness: 280, damping: 30 },
        opacity: { duration: 0.3 }
      }
    })
  };

  const openWhatsApp = (msg) => {
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${agencyInfo.whatsappNumber}?text=${encoded}`, '_blank');
  };

  return (
    <section className="kanko-hero-section" id="promociones">
      <div className="container">
        
        <div 
          className="kanko-slider-wrapper"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentSlide.id}
              className="kanko-slide-item"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              {/* Imagen de fondo */}
              <img 
                src={currentSlide.image} 
                alt={currentSlide.title} 
                className="kanko-slide-img"
              />

              {/* Degradado cinematográfico para legibilidad */}
              <div className="kanko-slide-gradient"></div>

              {/* Tag superior derecho con precio y duración */}
              <div className="kanko-slide-price-tag">
                <span className="price-label">Desde</span>
                <span className="price-val">{currentSlide.price}</span>
                <span className="price-days"><Calendar size={13} /> {currentSlide.days}</span>
              </div>

              {/* Información y botón obligatorio en esquina inferior izquierda */}
              <div className="kanko-slide-content-left">
                <motion.div 
                  className="kanko-badge-row"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="kanko-slide-badge">{currentSlide.badge}</span>
                </motion.div>

                <motion.h2 
                  className="kanko-slide-title"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {currentSlide.title}
                </motion.h2>

                <motion.p 
                  className="kanko-slide-subtitle"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {currentSlide.subtitle}
                </motion.p>

                {/* BOTÓN OBLIGATORIO: Inferior Izquierda -> Más información / Cotizar WhatsApp */}
                <motion.button
                  type="button"
                  className="btn-kanko-action hero-cta-btn"
                  onClick={() => openWhatsApp(currentSlide.waMessage)}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`Cotizar paquete ${currentSlide.title}`}
                >
                  <span>Más información</span>
                  <ArrowRight size={17} className="cta-arrow" />
                </motion.button>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Flechas de navegación para desktop */}
          <button 
            type="button"
            onClick={handlePrev} 
            className="kanko-slider-nav nav-prev" 
            aria-label="Destino anterior"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            type="button"
            onClick={handleNext} 
            className="kanko-slider-nav nav-next" 
            aria-label="Siguiente destino"
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicadores de puntos (Dots) */}
          <div className="kanko-slider-dots" role="tablist">
            {heroSlides.map((slide, idx) => (
              <button
                key={slide.id}
                type="button"
                role="tab"
                aria-selected={idx === currentIndex}
                onClick={() => handleDotClick(idx)}
                className={`kanko-dot ${idx === currentIndex ? 'active' : ''}`}
                aria-label={`Ver slide ${idx + 1}: ${slide.title}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroSlider;
