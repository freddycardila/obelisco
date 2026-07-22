import React from 'react';
import '../css/Hero.css';

interface HeroProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  title = "Transforma tu negocio con soluciones digitales",
  subtitle = "Impulsamos tus proyectos con código limpio, moderno y escalable. Construye el futuro de tu empresa hoy mismo.",
  buttonText = "Empezar ahora",
  onButtonClick = () => alert("¡Acción principal del Hero!")
}) => {
  return (
    <section className="hero-container">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
        <div className="hero-actions">
          <button className="hero-button primary" onClick={onButtonClick}>
            {buttonText}
          </button>
          <button className="hero-button secondary">
            Saber más
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;