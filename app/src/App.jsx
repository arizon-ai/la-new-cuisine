import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Brochure from './Brochure'
import OfertaAcademica from './OfertaAcademica'
import FlyerPasteleria from './FlyerPasteleria'
import FlyerPanaderia from './FlyerPanaderia'
import FlyerGerencia from './FlyerGerencia'
import FlyerCocina from './FlyerCocina'

// Sticky Header Navigation
function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/oferta', label: 'Oferta Académica' },
    { path: '/flyer-cocina', label: 'Cocina Internacional' },
    { path: '/flyer-pasteleria', label: 'Chef Pastelero' },
    { path: '/flyer-panaderia', label: 'Chef Panadero' },
    { path: '/flyer-gerencia', label: 'Gerencia Gastronómica' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled
          ? 'rgba(255, 255, 255, 0.95)'
          : 'rgba(255, 255, 255, 1)',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: '2px solid #000',
        transition: 'all 0.3s ease',
        padding: scrolled ? '8px 0' : '16px 0',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="/logo.png"
            alt="La New Cuisine"
            style={{
              height: scrolled ? '40px' : '55px',
              width: 'auto',
              transition: 'height 0.3s ease',
            }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            fontFamily: "'Inter', sans-serif",
          }}
          className="hide-mobile"
        >
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              style={{
                padding: scrolled ? '8px 14px' : '10px 16px',
                backgroundColor: location.pathname === item.path ? '#000' : 'transparent',
                color: location.pathname === item.path ? '#fff' : '#000',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: scrolled ? '11px' : '12px',
                letterSpacing: '0.02em',
                transition: 'all 0.2s ease',
                borderRadius: '0',
                border: location.pathname === item.path ? '2px solid #000' : '2px solid transparent',
                textTransform: 'uppercase',
              }}
              onMouseEnter={(e) => {
                if (location.pathname !== item.path) {
                  e.currentTarget.style.backgroundColor = '#f5f5f5';
                  e.currentTarget.style.border = '2px solid #000';
                }
              }}
              onMouseLeave={(e) => {
                if (location.pathname !== item.path) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.border = '2px solid transparent';
                }
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="hide-desktop"
          style={{
            background: mobileMenuOpen ? '#000' : 'transparent',
            color: mobileMenuOpen ? '#fff' : '#000',
            border: '2px solid #000',
            padding: '10px 14px',
            fontSize: '18px',
            cursor: 'pointer',
            fontFamily: "'Inter', sans-serif",
            transition: 'all 0.2s ease',
          }}
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className="hide-desktop"
        style={{
          maxHeight: mobileMenuOpen ? '400px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.3s ease',
          background: '#fff',
          borderTop: mobileMenuOpen ? '1px solid #eee' : 'none',
        }}
      >
        <nav
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: mobileMenuOpen ? '16px 24px' : '0 24px',
            gap: '8px',
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                padding: '14px 16px',
                backgroundColor: location.pathname === item.path ? '#000' : '#f9f9f9',
                color: location.pathname === item.path ? '#fff' : '#000',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '13px',
                letterSpacing: '0.02em',
                border: '2px solid #000',
                textTransform: 'uppercase',
                textAlign: 'center',
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

function App() {
  return (
    <BrowserRouter>
      {/* Spacer for fixed header */}
      <div style={{ height: '89px' }} />
      <Navigation />
      <Routes>
        <Route path="/" element={<Brochure />} />
        <Route path="/oferta" element={<OfertaAcademica />} />
        <Route path="/flyer-cocina" element={<FlyerCocina />} />
        <Route path="/flyer-pasteleria" element={<FlyerPasteleria />} />
        <Route path="/flyer-panaderia" element={<FlyerPanaderia />} />
        <Route path="/flyer-gerencia" element={<FlyerGerencia />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
