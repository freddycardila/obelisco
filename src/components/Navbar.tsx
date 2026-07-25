import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/Navbar.css';
import logoAzul from "../assets/logo-removebg-preview.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  // 1. Cambiamos la ruta de Proyectos a '/proyectos' e isRoute a true
  const menuItems = [
    { name: 'Inicio', path: '/#inicio', id: 'inicio', isRoute: false },
    { name: 'Servicios', path: '/servicios', id: 'servicios', isRoute: true },
    { name: 'Proyectos', path: '/proyectos', id: 'proyectos', isRoute: true },
    { name: 'Nosotros', path: '/#nosotros', id: 'nosotros', isRoute: false },
    { name: 'Contacto', path: '/#contacto', id: 'contacto', isRoute: false },
  ];

  // 2. Manejo dinámico según la ruta
  useEffect(() => {
    // Si estamos en las rutas independientes, marcamos su respectivo ítem como activo
    if (location.pathname === '/servicios') {
      setActiveSection('servicios');
      return;
    }

    if (location.pathname === '/proyectos') {
      setActiveSection('proyectos');
      return;
    }

    // Si estamos en la raíz '/', detectamos el scroll
    if (location.pathname === '/') {
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
    }
  }, [location.pathname]);

  const handleLinkClick = (id: string) => {
    setActiveSection(id);
    setIsOpen(false);
  };

  return (
    <nav className="navbar" aria-label="Navegación principal">
      <div className="navbar-container">
        {/* Logo integrado en el Link */}
        <div className="logo-container">
          <Link to="/" className="logo" onClick={() => handleLinkClick('inicio')}>
            <img src={logoAzul} alt="Logo Obelisco" className="logo-image" />
            <span className="logo-text">Obelisco soluciones informáticas</span>
          </Link>
        </div>

        {/* Menú Desktop */}
        <div className="desktop-menu">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              onClick={() => handleLinkClick(item.id)}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              aria-current={activeSection === item.id ? 'page' : undefined}
            >
              {item.name}
            </Link>
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
            <Link
              key={item.id}
              to={item.path}
              onClick={() => handleLinkClick(item.id)}
              className={`mobile-link ${activeSection === item.id ? 'active' : ''}`}
              role="menuitem"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;