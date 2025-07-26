import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Photography from './pages/Photography';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import ThemeToggle from './components/ThemeToggle';

function App() {
  // Initialize AOS animations
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }, []);

  return (
      <div className="min-h-screen bg-background text-text">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/photography" element={<Photography />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>

        <Footer />

        {/* Back to Top Button */}
        <BackToTop />

        {/* Theme Toggle Button */}
        <div className="fixed bottom-8 left-8 z-50">
          <ThemeToggle />
        </div>
      </div>
  );
}

export default App;
