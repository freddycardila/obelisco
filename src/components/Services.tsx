import React from 'react';
import '../css/Services.css';

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const Services: React.FC = () => {
  const servicesData: ServiceItem[] = [
    {
      id: 1,
      title: "Aplicaciones Web",
      description: "Desarrollo de plataformas robustas, escalables y seguras utilizando arquitecturas modernas y tecnologías de vanguardia.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      )
    },
    {
      id: 2,
      title: "Aplicaciones Móviles",
      description: "Creación de experiencias móviles nativas y multiplataforma (iOS y Android) intuitivas, ágiles y de alto rendimiento.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      )
    },
    {
      id: 3,
      title: "Sitios Web",
      description: "Diseño y maquetación de portales web corporativos optimizados para posicionamiento SEO, velocidad de carga y adaptabilidad móvil.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      )
    },
    {
      id: 4,
      title: "Sistematización para Empresas",
      description: "Automatización e integración de procesos operativos, software a medida e interconexión de datos para optimizar recursos.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
          <path d="M6 8h12M6 12h8"></path>
        </svg>
      )
    }
  ];

  const handleServiceClick = (title: string) => {
    alert(`Más información sobre: ${title}`);
  };

  const handleViewAll = () => {
    alert("Redirigiendo a catálogo completo de servicios...");
  };

  return (
    <section id="servicios" className="services-section">
      <div className="services-container">
        
        {/* Encabezado */}
        <div className="services-header">
          <span className="services-badge">LO QUE HACEMOS</span>
          <h2 className="services-title">Nuestros Servicios</h2>
          <p className="services-subtitle">
            Ofrecemos soluciones tecnológicas integrales diseñadas para impulsar la eficiencia, visibilidad y crecimiento de su empresa.
          </p>
        </div>

        {/* Rejilla de servicios */}
        <div className="services-grid">
          {servicesData.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-description">{service.description}</p>
              
              <button 
                className="service-btn-more"
                onClick={() => handleServiceClick(service.title)}
              >
                Ver más
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* Botón inferior de acción global */}
        <div className="services-footer">
          <button className="services-btn-all" onClick={handleViewAll}>
            Ver todos los servicios
          </button>
        </div>

      </div>
    </section>
  );
};

export default Services;