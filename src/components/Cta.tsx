import React from 'react';
import '../css/Cta.css';

export const Cta: React.FC = () => {
  const handleStart = () => {
    // Scroll hacia la sección de contacto o acción deseada
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      alert("¡Gracias por tu interés! Ponte en contacto con nosotros para iniciar.");
    }
  };

  return (
    <section className="cta-section">
      <div className="cta-container">
        <span className="cta-badge">¡ES MOMENTO DE DAR EL PASO!</span>
        <h2 className="cta-title">
          ¿Listo para llevar tu empresa al siguiente nivel digital?
        </h2>
        <p className="cta-subtitle">
          Transformamos tus ideas en software real, escalable y de alto impacto. Inicia hoy mismo el desarrollo de tu sitio, app web o móvil.
        </p>
        
        <div className="cta-button-wrapper">
          <button className="cta-btn-large" onClick={handleStart}>
            Comienza ya
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cta;