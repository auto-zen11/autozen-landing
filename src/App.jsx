import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Header } from "./components/Header"
import { NoiseOverlay } from "./components/NoiseOverlay"
import { Footer } from "./components/Footer"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

// Componente helper para hacer scroll hacia arriba al cambiar de ruta
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <NoiseOverlay />
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      
      <Footer />
    </Router>
  )
}

export default App
