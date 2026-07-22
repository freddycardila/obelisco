import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services'; 
import Testimonials from './components/Testimonials';
import Cta from './components/Cta';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-80">
      <Navbar />
      <Hero />
      <Stats />
      
      {/* Componente de Servicios */}
      <Services />

      {/* Componente de Testimonios / Redes Sociales */}
      <Testimonials />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;