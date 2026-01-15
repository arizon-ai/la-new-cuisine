import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import Brochure from './Brochure'
import OfertaAcademica from './OfertaAcademica'
import FlyerPasteleria from './FlyerPasteleria'
import FlyerPanaderia from './FlyerPanaderia'
import FlyerGerencia from './FlyerGerencia'
import FlyerCocina from './FlyerCocina'

// Navegación flotante
function Navigation() {
  const location = useLocation();

  const navStyle = (path) => ({
    padding: '6px 10px',
    backgroundColor: location.pathname === path ? '#000' : '#fff',
    color: location.pathname === path ? '#fff' : '#000',
    textDecoration: 'none',
    border: '2px solid #000',
    fontWeight: 600,
    fontSize: '10px',
    transition: 'all 0.2s ease',
    boxShadow: '2px 2px 0px rgba(0,0,0,0.2)'
  });

  return (
    <nav style={{
      position: 'fixed',
      top: '20px',
      right: '20px',
      zIndex: 1000,
      display: 'flex',
      gap: '4px',
      fontFamily: "'Inter', sans-serif",
    }}>
      <Link to="/" style={navStyle('/')}>📄 Brochure</Link>
      <Link to="/oferta" style={navStyle('/oferta')}>📊 Oferta Académica</Link>
      <Link to="/flyer-cocina" style={navStyle('/flyer-cocina')}>🍳 Cocina Internacional</Link>
      <Link to="/flyer-pasteleria" style={navStyle('/flyer-pasteleria')}>🍰 Chef Pastelero</Link>
      <Link to="/flyer-panaderia" style={navStyle('/flyer-panaderia')}>🥖 Chef Panadero</Link>
      <Link to="/flyer-gerencia" style={navStyle('/flyer-gerencia')}>💼 Gerencia Gastronómica</Link>
    </nav>
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



