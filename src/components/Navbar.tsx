import { useState, useEffect, useRef } from 'react';
import '../css/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const menuItems = [
    { name: 'Inicio', href: '#inicio', id: 'inicio' },
    { name: 'Servicios', href: '#servicios', id: 'servicios' },
    { name: 'Proyectos', href: '#proyectos', id: 'proyectos' },
    { name: 'Nosotros', href: '#nosotros', id: 'nosotros' },
    { name: 'Contacto', href: '#contacto', id: 'contacto' },
  ];

  // Detectar sección activa al hacer scroll
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
        rootMargin: '-80px 0px -80px 0px',
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleLinkClick = (id: string) => {
    setActiveSection(id);
    setIsOpen(false);
  };

  return (
    <nav 
      className="navbar"
      aria-label="Navegación principal"
    >
      <div className="navbar-container">
        {/* Logo - Espacio para tu logo */}
        <div className="logo-container">
          <a href="#inicio" className="logo">
            {/* Aquí va tu logo */}
            <span className="logo-text">Obelisco soluciones informáticas</span>
          </a>
        </div>

        {/* Menú Desktop */}
        <div className="desktop-menu">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => handleLinkClick(item.id)}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              aria-current={activeSection === item.id ? 'page' : undefined}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Botón menú móvil */}
        <div className="mobile-button-container">
          <button
            ref={menuButtonRef}
            onClick={() => setIsOpen(!isOpen)}
            className="hamburger-button"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <span className="sr-only">{isOpen ? 'Cerrar menú' : 'Abrir menú'}</span>
            <svg
              className="hamburger-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <div 
        id="mobile-menu"
        className={`mobile-menu ${isOpen ? 'open' : ''}`}
        role="menu"
      >
        <div className="mobile-menu-content">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => handleLinkClick(item.id)}
              className={`mobile-link ${activeSection === item.id ? 'active' : ''}`}
              role="menuitem"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;