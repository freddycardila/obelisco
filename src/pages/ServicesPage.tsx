import React from 'react';
import '../css/ServicesPage.css';

interface ServiceItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  tag: string;
}

export const ServicesPage: React.FC = () => {
  const servicesList: ServiceItem[] = [
    {
      id: 'web-dev',
      tag: 'DESARROLLO WEB',
      title: 'Desarrollo de Software & Aplicaciones Web',
      subtitle: 'Plataformas web rápidas, escalables y a la medida de tu negocio.',
      description: 'Construimos aplicaciones web modernas utilizando tecnologías líderes como React, Node.js y arquitecturas en la nube. Optimizadas para velocidad, SEO y máxima conversión.',
      features: [
        'Desarrollo Frontend y Backend a medida',
        'Arquitectura de APIs RESTful y GraphQL',
        'Paneles de administración personalizados',
        'Optimización de velocidad y Core Web Vitals'
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      )
    },
    {
      id: 'mobile-dev',
      tag: 'APLICACIONES MÓVILES',
      title: 'Desarrollo Móvil Multiplataforma',
      subtitle: 'Apps nativas e híbridas para iOS y Android con una experiencia fluida.',
      description: 'Creamos soluciones móviles usando React Native y Expo que permiten desplegar tu aplicación en iOS y Android con un solo código base eficiente y fácil de mantener.',
      features: [
        'Desarrollo multiplataforma (iOS & Android)',
        'Diseño de interfaz nativo e intuitivo',
        'Notificaciones push e integración con sensores',
        'Publicación en App Store y Google Play'
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      )
    },
    {
      id: 'systematization',
      tag: 'AUTOMATIZACIÓN & PROCESOS',
      title: 'Sistematización & Soluciones a Medida',
      subtitle: 'Digitaliza y automatiza los flujos operativos de tu organización.',
      description: 'Convertimos procesos manuales y hojas de cálculo complejas en sistemas automatizados que reducen costos, evitan errores humanos y aumentan la productividad.',
      features: [
        'Sistemas ERP y CRM personalizados',
        'Automatización de flujos de trabajo e inventarios',
        'Integración con bases de datos (SQL & MongoDB)',
        'Migración de datos y transformación digital'
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      )
    },
    {
      id: 'ui-ux',
      tag: 'DISEÑO DIGITAL',
      title: 'Diseño de Experiencia & Interfaz (UI/UX)',
      subtitle: 'Interfaces atractivas centradas en la usabilidad del usuario final.',
      description: 'Diseñamos productos digitales que combinan estética visual con una navegación intuitiva para ofrecer la mejor experiencia posible a tus clientes.',
      features: [
        'Prototipado interactivo y wireframes',
        'Diseño de sistemas de marca (Design Systems)',
        'Investigación de usuarios y pruebas de usabilidad',
        'Diseño 100% adaptable (Responsive Design)'
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
          <line x1="2" y1="12" x2="22" y2="12"></line>
        </svg>
      )
    },
    {
      id: 'social-media',
      tag: 'MARKETING DIGITAL',
      title: 'Gestión & Manejo de Redes Sociales',
      subtitle: 'Potenciamos la presencia e interacción de tu marca en el entorno digital.',
      description: 'Estrategias integrales de Social Media que conectan con tu audiencia objetiva, aumentan tu visibilidad de marca e impulsan las conversiones en canales digitales.',
      features: [
        'Creación y calendarización de contenido atractivo',
        'Diseño de publicaciones, reels y piezas gráficas',
        'Gestión de campañas pagadas (Meta Ads, TikTok Ads)',
        'Monitoreo, analítica y reporte mensual de métricas'
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </svg>
      )
    },
    {
      id: 'consulting',
      tag: 'CONSULTORÍA',
      title: 'Consultoría Tecnológica & Soporte',
      subtitle: 'Acompañamiento experto para tomar las mejores decisiones técnicas.',
      description: 'Te asesoramos en la selección de las herramientas informáticas adecuadas, la arquitectura de software requerida y la optimización de tu infraestructura digital.',
      features: [
        'Auditoría de código y arquitectura de software',
        'Asesoría en transformación tecnológica',
        'Seguridad informática y buenas prácticas',
        'Soporte técnico continuo y mantenimiento'
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      )
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Descubrimiento & Análisis',
      desc: 'Analizamos las necesidades de tu empresa, definimos los alcances del proyecto y seleccionamos el stack tecnológico o estrategia ideal.'
    },
    {
      step: '02',
      title: 'Diseño & Arquitectura',
      desc: 'Diseñamos los prototipos visuales y estructuramos la base de datos o plan de contenidos escalable.'
    },
    {
      step: '03',
      title: 'Desarrollo & Ejecución',
      desc: 'Programamos el software o ejecutamos las campañas digitales con entregas periódicas y control de calidad.'
    },
    {
      step: '04',
      title: 'Lanzamiento & Optimización',
      desc: 'Desplegamos la plataforma o medimos los resultados de las publicaciones, ajustando de forma continua para maximizar el impacto.'
    }
  ];

  const handleContactScroll = () => {
    const contactElement = document.getElementById('contacto');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#contacto';
    }
  };

  return (
    <div className="services-page">
      
      {/* Hero de Servicios con Imagen */}
      <section className="services-hero">
        <div className="services-hero-container">
          <div className="services-hero-text">
            <span className="services-hero-badge">SOLUCIONES INTEGRALES</span>
            <h1 className="services-hero-title">
              Servicios Tecnológicos Diseñados para Escalar tu Negocio
            </h1>
            <p className="services-hero-subtitle">
              En Obelisco soluciones informáticas combinamos innovación, código limpio, diseño UI/UX y estrategias digitales para llevar tus proyectos al siguiente nivel.
            </p>
          </div>
          <div className="services-hero-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80" 
              alt="Equipo de Obelisco trabajando en desarrollo y soluciones informáticas" 
              className="services-hero-img"
            />
          </div>
        </div>
      </section>

      {/* Listado de Servicios */}
      <section className="services-grid-section">
        <div className="services-grid-container">
          {servicesList.map((service) => (
            <div key={service.id} className="service-card-item">
              <div className="service-card-top">
                <div className="service-icon-box">
                  {service.icon}
                </div>
                <span className="service-tag">{service.tag}</span>
              </div>
              <h2 className="service-card-title">{service.title}</h2>
              <p className="service-card-subtitle">{service.subtitle}</p>
              <p className="service-card-desc">{service.description}</p>
              
              <div className="service-features-list">
                <span className="service-features-heading">Lo que incluye:</span>
                <ul>
                  {service.features.map((feat, idx) => (
                    <li key={idx}>
                      <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sección Proceso de Trabajo */}
      <section className="services-process-section">
        <div className="services-process-container">
          <div className="services-process-header">
            <span className="services-hero-badge">METODOLOGÍA</span>
            <h2 className="process-main-title">¿Cómo trabajamos en Obelisco?</h2>
            <p className="process-main-subtitle">Garantizamos transparencia, agilidad y calidad en cada etapa del proyecto.</p>
          </div>

          <div className="process-steps-grid">
            {processSteps.map((item, idx) => (
              <div key={idx} className="process-step-card">
                <span className="process-step-number">{item.step}</span>
                <h3 className="process-step-title">{item.title}</h3>
                <p className="process-step-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner de Contacto / CTA */}
      <section className="services-cta-banner">
        <div className="services-cta-container">
          <h2>¿Tienes un proyecto en mente?</h2>
          <p>Permítenos evaluar tus requerimientos y proponerte la mejor solución tecnológica y digital.</p>
          <button className="services-cta-btn" onClick={handleContactScroll}>
            Solicitar una Asesoría Gratuita
          </button>
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;