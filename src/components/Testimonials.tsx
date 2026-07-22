import React from 'react';
import '../css/Testimonials.css';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  handle: string;
  avatar: string;
  comment: string;
  rating: number;
  socialNetwork: 'linkedin' | 'x' | 'instagram' | 'facebook';
  socialIcon: React.ReactNode;
}

export const Testimonials: React.FC = () => {
  const testimonialsData: Testimonial[] = [
    {
      id: 1,
      name: "Camila Rodríguez",
      role: "Directora de Operaciones en FinTech",
      handle: "in/camila-rdgz",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
      comment: "El equipo de Obelisco transformó completamente nuestra plataforma web. La velocidad de carga mejoró un 200% y la experiencia para nuestros usuarios es increíble. 100% recomendados.",
      rating: 5,
      socialNetwork: 'linkedin',
      socialIcon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
        </svg>
      )
    },
    {
      id: 2,
      name: "Andrés Mendoza",
      role: "CEO en Logística Express",
      handle: "@andresmendoza_dev",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
      comment: "Desarrollaron nuestra App móvil tanto para Android como iOS en tiempo récord. La atención al detalle en el UI/UX y la sistematización interna fueron claves para nuestro negocio.",
      rating: 5,
      socialNetwork: 'x',
      socialIcon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      id: 3,
      name: "Valeria Gómez",
      role: "Fundadora de EcoModa",
      handle: "@valeria_gomez",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
      comment: "Buscábamos sistematizar los pedidos e inventario de nuestras tiendas. La solución a medida que nos construyeron redujo nuestros errores operativos a cero. ¡Grandes profesionales!",
      rating: 5,
      socialNetwork: 'instagram',
      socialIcon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      id: 4,
      name: "Carlos Eduardo Silva",
      role: "Gerente de Tecnología en BPO",
      handle: "Carlos Silva Tech",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
      comment: "Excelente servicio de consultoría y desarrollo web. Cumplen rigurosamente con los tiempos de entrega y mantienen un código limpio y muy fácil de escalar.",
      rating: 5,
      socialNetwork: 'facebook',
      socialIcon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    }
  ];

  const leftColumn = testimonialsData.slice(0, 2);
  const rightColumn = testimonialsData.slice(2, 4);

  return (
    <section id="testimonios" className="testimonials-section">
      <div className="testimonials-container">
        
        {/* Encabezado */}
        <div className="testimonials-header">
          <span className="testimonials-badge">RESEÑAS Y OPINIONES</span>
          <h2 className="testimonials-title">Nuestros Clientes Dicen</h2>
          <p className="testimonials-subtitle">
            Descubre lo que líderes de diversas industrias opinan sobre nuestras soluciones tecnológicas en sus redes sociales.
          </p>
        </div>

        {/* Distribución en 2 Columnas */}
        <div className="testimonials-columns">
          
          {/* Columna Izquierda */}
          <div className="testimonials-column">
            {leftColumn.map((item) => (
              <div key={item.id} className="testimonial-card">
                <div className="testimonial-card-header">
                  <img src={item.avatar} alt={item.name} className="testimonial-avatar" />
                  <div className="testimonial-user-info">
                    <h3 className="testimonial-name">{item.name}</h3>
                    <p className="testimonial-handle">{item.handle} • <span className="testimonial-role">{item.role}</span></p>
                  </div>
                  <div className={`testimonial-social-icon ${item.socialNetwork}`}>
                    {item.socialIcon}
                  </div>
                </div>

                <div className="testimonial-stars">
                  {'★'.repeat(item.rating)}
                </div>

                <p className="testimonial-comment">"{item.comment}"</p>
              </div>
            ))}
          </div>

          {/* Columna Derecha */}
          <div className="testimonials-column">
            {rightColumn.map((item) => (
              <div key={item.id} className="testimonial-card">
                <div className="testimonial-card-header">
                  <img src={item.avatar} alt={item.name} className="testimonial-avatar" />
                  <div className="testimonial-user-info">
                    <h3 className="testimonial-name">{item.name}</h3>
                    <p className="testimonial-handle">{item.handle} • <span className="testimonial-role">{item.role}</span></p>
                  </div>
                  <div className={`testimonial-social-icon ${item.socialNetwork}`}>
                    {item.socialIcon}
                  </div>
                </div>

                <div className="testimonial-stars">
                  {'★'.repeat(item.rating)}
                </div>

                <p className="testimonial-comment">"{item.comment}"</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;