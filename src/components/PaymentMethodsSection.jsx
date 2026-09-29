import React from 'react';
import { DollarSign, Smartphone, Cpu, Wallet, CreditCard, ShieldCheck } from 'lucide-react';
import { paymentMethods, agencyInfo } from '../data/kankoData';
import './PaymentMethodsSection.css';

const iconMap = {
  DollarSign: DollarSign,
  Smartphone: Smartphone,
  Cpu: Cpu,
  Wallet: Wallet,
  CreditCard: CreditCard
};

const PaymentMethodsSection = ({ onOpenContact }) => {
  return (
    <section className="payments-section" id="metodos-pago">
      <div className="container">
        
        <div className="payments-header">
          <div className="payments-badge">
            <ShieldCheck size={14} />
            <span>FACILIDADES DE PAGO & CUOTAS</span>
          </div>
          <h2 className="payments-title">Métodos de Pago Transparentes</h2>
          <p className="payments-desc">
            Paga con comodidad y confianza. Ofrecemos opciones en moneda nacional, divisas y criptoactivos, además de nuestro plan de pago en cuotas.
          </p>
        </div>

        <div className="payments-grid">
          {paymentMethods.map((method, idx) => {
            const IconComp = iconMap[method.icon] || CreditCard;
            return (
              <div key={idx} className="payment-card">
                <div className="pm-top-row">
                  <div className="pm-icon-box">
                    <IconComp size={22} />
                  </div>
                  <span className="pm-badge">{method.badge}</span>
                </div>
                <h3 className="pm-name">{method.name}</h3>
                <p className="pm-desc">{method.description}</p>
              </div>
            );
          })}
        </div>

        {/* Box destacado sobre el plan de cuotas */}
        <div className="cuotas-highlight-card">
          <div className="cuotas-content">
            <span className="cuotas-tag">🎌 PLAN VIAJA AHORA, PAGA EN CUOTAS</span>
            <h3 className="cuotas-title">Reserva tu Paquete Internacional desde el 30%</h3>
            <p className="cuotas-desc">
              Congela tu tarifa aérea y hotelera con un abono inicial del 30%. El saldo restante lo pagas en cuotas mensuales adaptadas a tu presupuesto hasta 15 días antes de la salida, sin recargos sorpresa ni intereses ocultos.
            </p>
          </div>
          <button 
            type="button" 
            className="btn-kanko-primary cuotas-cta"
            onClick={onOpenContact}
          >
            Consultar Plan de Cuotas
          </button>
        </div>

      </div>
    </section>
  );
};

export default PaymentMethodsSection;
