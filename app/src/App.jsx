import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import Brochure from './Brochure'
import OfertaAcademica from './OfertaAcademica'
import FlyerPasteleria from './FlyerPasteleria'
import FlyerPanaderia from './FlyerPanaderia'
import FlyerGerencia from './FlyerGerencia'
import FlyerCocina from './FlyerCocina'

// Card Grid Navigation
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { path: '/', label: 'Home', icon: '🏠', description: 'Inicio y Brochure', color: '#1a1a2e' },
    { path: '/oferta', label: 'Oferta Académica', icon: '📚', description: 'Todas nuestras carreras', color: '#16213e' },
    { path: '/flyer-cocina', label: 'Cocina Internacional', icon: '🍳', description: 'Chef en Cocina Internacional', color: '#e94560' },
    { path: '/flyer-pasteleria', label: 'Chef Pastelero', icon: '🍰', description: 'Arte en Pastelería', color: '#ff6b6b' },
    { path: '/flyer-panaderia', label: 'Chef Panadero', icon: '🥖', description: 'Maestría en Panadería', color: '#c9a227' },
    { path: '/flyer-gerencia', label: 'Gerencia Gastronómica', icon: '💼', description: 'Diplomado Gerencial', color: '#0f3460' },
  ];

  return (
    <>
      {/* Botón Hamburguesa */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 1100,
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          border: 'none',
          background: isOpen ? '#e94560' : 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
          color: '#fff',
          fontSize: '24px',
          cursor: 'pointer',
          boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: "'Inter', sans-serif",
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'scale(1.1)';
          e.target.style.boxShadow = '0 6px 25px rgba(0,0,0,0.4)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
        }}
      >
        {isOpen ? '✕' : '☰'}
      </button>

      {/* Overlay con Card Grid */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 1050,
          background: 'linear-gradient(135deg, rgba(26,26,46,0.98) 0%, rgba(22,33,62,0.98) 100%)',
          backdropFilter: 'blur(10px)',
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? 'visible' : 'hidden',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
            maxWidth: '1000px',
            width: '100%',
            transform: isOpen ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            transitionDelay: isOpen ? '0.1s' : '0s',
          }}
        >
          {menuItems.map((item, index) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '30px 20px',
                borderRadius: '20px',
                background: location.pathname === item.path
                  ? `linear-gradient(135deg, ${item.color} 0%, ${item.color}dd 100%)`
                  : 'rgba(255,255,255,0.05)',
                border: location.pathname === item.path
                  ? '2px solid rgba(255,255,255,0.3)'
                  : '1px solid rgba(255,255,255,0.1)',
                textDecoration: 'none',
                color: '#fff',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: isOpen ? 1 : 0,
                transitionDelay: isOpen ? `${0.1 + index * 0.05}s` : '0s',
              }}
              onMouseEnter={(e) => {
                if (location.pathname !== item.path) {
                  e.currentTarget.style.background = `linear-gradient(135deg, ${item.color}99 0%, ${item.color}66 100%)`;
                  e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
                  e.currentTarget.style.boxShadow = `0 10px 40px ${item.color}44`;
                }
              }}
              onMouseLeave={(e) => {
                if (location.pathname !== item.path) {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }
              }}
            >
              <span style={{ fontSize: '48px', marginBottom: '15px' }}>{item.icon}</span>
              <span style={{
                fontSize: '18px',
                fontWeight: 700,
                marginBottom: '8px',
                fontFamily: "'Inter', sans-serif",
                textAlign: 'center',
              }}>
                {item.label}
              </span>
              <span style={{
                fontSize: '13px',
                opacity: 0.7,
                fontFamily: "'Inter', sans-serif",
                textAlign: 'center',
              }}>
                {item.description}
              </span>
              {location.pathname === item.path && (
                <span style={{
                  marginTop: '12px',
                  padding: '4px 12px',
                  background: 'rgba(255,255,255,0.2)',
                  borderRadius: '20px',
                  fontSize: '11px',
                  fontWeight: 600,
                }}>
                  ACTUAL
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
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



