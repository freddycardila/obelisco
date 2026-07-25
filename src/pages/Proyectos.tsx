import { useState } from 'react';
import '../css/Proyectos.css';
import imgPruebas from '../assets/Pruebas.png';
import imgPrevix from '../assets/Previx.png';
import imgCole from '../assets/Lausana.png';
import Moderno from '../assets/Moderno.png';  


interface Proyecto {
  id: number;
  titulo: string;
  descripcion: string;
  imagenUrl: string;
  urlProyecto: string; // URL en vivo / desplegada
  urlGithub?: string;   // Opcional: enlace al repositorio
  tecnologias: string[];
}

const Proyectos = () => {
  // Configuración de tus proyectos de software
  const [proyectos] = useState<Proyecto[]>([
    {
      id: 1,
      titulo: 'Pruebas 36 PDC',
      descripcion: 'Portal de creación de pruebas para conocer las aptitudes de los trabajadores para los cargos asignados',
      imagenUrl: imgPruebas, // Reemplaza por tu imagen o variable
      urlProyecto: 'https://businessriskonline.com.co/',
      tecnologias: ['PHP', 'HTML', 'CSS3', 'SQL'],
    },
    {
      id: 2,
      titulo: 'Previx',
      descripcion: 'Página para una empresa de administración de riesgos y seguridad industrial, con funcionalidades de contacto y presentación de servicios.',
      imagenUrl: imgPrevix,
      urlProyecto: 'https://previx.com.co',
      tecnologias: ['React', 'TypeScript', 'Tailwind CSS'],
    },
    {
      id: 3,
      titulo: 'Colegio Lausana',
      descripcion: 'Web desarrollada para el colegio Lausana, con información institucional, noticias y contacto.',
      imagenUrl: imgCole,
      urlProyecto: 'https://colegiolausana.edu.co/home.html',
      tecnologias: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    },
    {
      id: 4,
      titulo: 'Centro Moderno',
      descripcion: 'Web desarrollada para la academia impulsando el desarrollo de habilidades.',
      imagenUrl: Moderno,
      urlProyecto: 'https://centromoderno.edu.co/',
      tecnologias: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    },
  ]);

  return (
    <main className="proyectos-page">
      <header className="proyectos-header">
        <h1>Proyectos de Software</h1>
        <p>
          Explora algunos de los desarrollos, plataformas y aplicaciones web que hemos construido.
        </p>
      </header>

      <section className="proyectos-container">
        <div className="proyectos-grid">
          {proyectos.map((proyecto) => (
            <article key={proyecto.id} className="proyecto-card">
              {/* Imagen y enlace rápido */}
              <div className="proyecto-imagen-wrapper">
                <img
                  src={proyecto.imagenUrl}
                  alt={`Captura de pantalla de ${proyecto.titulo}`}
                  className="proyecto-imagen"
                  loading="lazy"
                />
                <div className="proyecto-overlay">
                  <a
                    href={proyecto.urlProyecto}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-overlay"
                  >
                    Ver Demo / Sitio
                  </a>
                </div>
              </div>

              {/* Contenido principal */}
              <div className="proyecto-contenido">
                <h2 className="proyecto-titulo">{proyecto.titulo}</h2>
                <p className="proyecto-descripcion">{proyecto.descripcion}</p>

                {/* Etiquetas de Tecnologías */}
                <div className="proyecto-tags">
                  {proyecto.tecnologias.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Enlaces y botones de acción */}
                <div className="proyecto-actions">
                  <a
                    href={proyecto.urlProyecto}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <span>Visitar Sitio</span>
                    <svg
                      className="icon"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>

                  {proyecto.urlGithub && (
                    <a
                      href={proyecto.urlGithub}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                      title="Ver Código Fuente"
                    >
                      <span>Código</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Proyectos;