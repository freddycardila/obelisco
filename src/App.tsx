import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services'; 
import Testimonials from './components/Testimonials';
import Cta from './components/Cta';
import Footer from './components/Footer';
import Proyectos from './pages/Proyectos'; 

// Importamos la vista completa de Servicios que creamos
import ServicesPage from '../src/pages/ServicesPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-80">
        {/* El Navbar se mantiene arriba en todas las vistas */}
        <Navbar />

        <Routes>
          {/* Ruta Principal / Landing Page */}
          <Route 
            path="/" 
            element={
              <>
                <Hero />
                <Stats />
                <Services />
                <Testimonials />
                <Cta />
              </>
            } 
          />

          {/* Ruta exclusiva para la página de Servicios */}
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/proyectos" element={<Proyectos />} />
        </Routes>

        {/* El Footer se mantiene abajo en todas las vistas */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;