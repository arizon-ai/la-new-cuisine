import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Brochure from './Brochure'
import OfertaAcademica from './OfertaAcademica'
import FlyerPasteleria from './FlyerPasteleria'
import FlyerPanaderia from './FlyerPanaderia'
import FlyerGerencia from './FlyerGerencia'
import FlyerCocina from './FlyerCocina'
import FlyerAsistenteChef from './FlyerAsistenteChef'
import FlyerCocinaNinos from './FlyerCocinaNinos'
import PresentacionBrochure from './PresentacionBrochure'
import QuienesSomos from './QuienesSomos'
import Talleres from './Talleres'

// Glassmorphism Navigation
function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/quienes-somos', label: 'Quiénes Somos', icon: '🏢' },
    { path: '/oferta', label: 'Oferta Académica', icon: '📚' },
    { path: '/talleres', label: 'Talleres', icon: '👨‍🍳' },
    { path: '/flyer-cocina', label: 'Cocina Internacional', icon: '🍳' },
    { path: '/flyer-pasteleria', label: 'Chef Pastelero', icon: '🍰' },
    { path: '/flyer-panaderia', label: 'Chef Panadero', icon: '🥖' },
    { path: '/flyer-gerencia', label: 'Gerencia Gastronómica', icon: '💼' },
    { path: '/flyer-asistente-chef', label: 'Asistente de Chef', icon: '👨‍🍳' },
    { path: '/flyer-cocina-ninos', label: 'Cocina Niños', icon: '🧑‍🍳' },
    { path: '/presentacion', label: 'Presentación', icon: '📄' },
  ];

  return (
    <>
      {/* Desktop Glassmorphism Nav */}
      <nav
        className="hide-mobile"
        style={{
          position: 'fixed',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1000,
          background: scrolled
            ? 'rgba(255, 255, 255, 0.75)'
            : 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderRadius: '0',
          padding: '8px 12px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          boxShadow: scrolled
            ? '0 8px 32px rgba(0, 0, 0, 0.15), inset 0 0 0 1px rgba(255,255,255,0.5)'
            : '0 4px 24px rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(255,255,255,0.5)',
          border: '1px solid rgba(0, 0, 0, 0.08)',
          fontFamily: "'Inter', sans-serif",
          transition: 'all 0.3s ease',
        }}
      >
        {/* Logo pequeño */}
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            marginRight: '8px',
            padding: '4px 8px',
          }}
        >
          <img
            src="/logo.png"
            alt="La New Cuisine"
            style={{
              height: '32px',
              width: 'auto',
            }}
          />
        </Link>

        {/* Separador */}
        <div style={{
          width: '1px',
          height: '24px',
          background: 'rgba(0,0,0,0.15)',
          marginRight: '6px',
        }} />

        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            style={{
              padding: '10px 16px',
              backgroundColor: location.pathname === item.path
                ? 'rgba(0, 0, 0, 0.9)'
                : 'transparent',
              color: location.pathname === item.path ? '#fff' : '#333',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '12px',
              letterSpacing: '0.01em',
              transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
              borderRadius: '0',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              if (location.pathname !== item.path) {
                e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.08)';
              }
            }}
            onMouseLeave={(e) => {
              if (location.pathname !== item.path) {
                e.currentTarget.style.backgroundColor = 'transparent';
              }
            }}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Mobile Glassmorphism Nav */}
      <div className="hide-desktop">
        {/* Floating Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            zIndex: 1100,
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            border: 'none',
            background: mobileMenuOpen
              ? 'rgba(0, 0, 0, 0.9)'
              : 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            color: mobileMenuOpen ? '#fff' : '#000',
            fontSize: '20px',
            cursor: 'pointer',
            boxShadow: '0 4px 24px rgba(0, 0, 0, 0.15)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1050,
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(25px)',
            WebkitBackdropFilter: 'blur(25px)',
            opacity: mobileMenuOpen ? 1 : 0,
            visibility: mobileMenuOpen ? 'visible' : 'hidden',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
        >
          {/* Logo en overlay */}
          <img
            src="/logo.png"
            alt="La New Cuisine"
            style={{
              height: '60px',
              width: 'auto',
              marginBottom: '40px',
              opacity: mobileMenuOpen ? 1 : 0,
              transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(-20px)',
              transition: 'all 0.4s ease',
              transitionDelay: '0.1s',
            }}
          />

          <nav
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '12px',
              width: '100%',
              maxWidth: '300px',
            }}
          >
            {menuItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  width: '100%',
                  padding: '18px 24px',
                  backgroundColor: location.pathname === item.path
                    ? 'rgba(0, 0, 0, 0.9)'
                    : 'rgba(255, 255, 255, 0.6)',
                  color: location.pathname === item.path ? '#fff' : '#333',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '15px',
                  fontFamily: "'Inter', sans-serif",
                  borderRadius: '16px',
                  textAlign: 'center',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                  border: '1px solid rgba(0,0,0,0.05)',
                  opacity: mobileMenuOpen ? 1 : 0,
                  transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.4s ease',
                  transitionDelay: mobileMenuOpen ? `${0.15 + index * 0.05}s` : '0s',
                }}
              >
                <span style={{ marginRight: '10px' }}>{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      {/* Spacer for fixed header */}
      <div style={{ height: '90px' }} className="hide-mobile" />
      <Navigation />
      <Routes>
        <Route path="/" element={<Brochure />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/oferta" element={<OfertaAcademica />} />
        <Route path="/talleres" element={<Talleres />} />
        <Route path="/flyer-cocina" element={<FlyerCocina />} />
        <Route path="/flyer-pasteleria" element={<FlyerPasteleria />} />
        <Route path="/flyer-panaderia" element={<FlyerPanaderia />} />
        <Route path="/flyer-gerencia" element={<FlyerGerencia />} />
        <Route path="/flyer-asistente-chef" element={<FlyerAsistenteChef />} />
        <Route path="/flyer-cocina-ninos" element={<FlyerCocinaNinos />} />
        <Route path="/presentacion" element={<PresentacionBrochure />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
