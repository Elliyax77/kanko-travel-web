import React from 'react';
import { Compass, CreditCard, ShieldCheck, Headphones, Award } from 'lucide-react';
import { kankoFeatures, agencyInfo } from '../data/kankoData';
import './FeaturesSection.css';

const iconMap = {
  Compass: Compass,
  CreditCard: CreditCard,
  ShieldCheck: ShieldCheck,
  Headphones: Headphones
};

const FeaturesSection = () => {
  return (
    <section className="features-section" id="por-que-kanko">
      <div className="container">
        
        <div className="features-header">
          <div className="features-badge">
            <Award size={14} />
            <span>EXCELENCIA & RESPALDO</span>
          </div>
          <h2 className="features-title">¿Por qué viajar con Kanko Travel?</h2>
          <p className="features-desc">
            Combinamos la calidez y precisión del servicio internacional para que tu única preocupación sea disfrutar cada destino.
          </p>
        </div>

        <div className="features-grid">
          {kankoFeatures.map((feat, idx) => {
            const IconComponent = iconMap[feat.icon] || Compass;
            return (
              <div key={idx} className="feature-card">
                <div className="feature-icon-wrapper">
                  <IconComponent size={24} className="feature-icon" />
                </div>
                <h3 className="feature-name">{feat.title}</h3>
                <p className="feature-explanation">{feat.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;
