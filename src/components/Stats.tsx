import React from 'react';
import '../css/Stats.css';

interface StatItem {
  id: number;
  value: string;
  label: string;
  description: string;
  icon: React.ReactNode;
}

export const Stats: React.FC = () => {
  const statsData: StatItem[] = [
    {
      id: 1,
      value: "+120",
      label: "Aplicativos Web",
      description: "Desarrollados a medida con arquitecturas escalables",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
    },
    {
      id: 2,
      value: "+85",
      label: "Apps Móviles",
      description: "Despliegues exitosos en Android e iOS",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      ),
    },
    {
      id: 3,
      value: "+250",
      label: "Sitios Web Optimizados",
      description: "Interfaces modernas con alta velocidad de carga y SEO",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      ),
    },
    {
      id: 4,
      value: "99.8%",
      label: "Disponibilidad de Servicio",
      description: "Garantía de uptime en infraestructuras cloud",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      ),
    },
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stats-header">
          <span className="stats-badge">NUESTRO IMPACTO</span>
          <h2 className="stats-title">Resultados reales que respaldan nuestro trabajo</h2>
          <p className="stats-subtitle">
            Construimos software de alto rendimiento para empresas que buscan transformar su presencia digital.
          </p>
        </div>

        <div className="stats-grid">
          {statsData.map((stat) => (
            <div key={stat.id} className="stat-card">
              <div className="stat-icon-wrapper">
                {stat.icon}
              </div>
              <h3 className="stat-value">{stat.value}</h3>
              <h4 className="stat-label">{stat.label}</h4>
              <p className="stat-description">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;