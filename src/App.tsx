import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ProductDetails } from './pages/ProductDetails';
import { RealEstateProduct } from './pages/RealEstateProduct';
import { DentalClinicProduct } from './pages/DentalClinicProduct';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/producto/infraestructura" element={<ProductDetails />} />
        <Route path="/productos/sistema-conversion-inmobiliarias" element={<RealEstateProduct />} />
        <Route path="/productos/sistema-conversion-clinicas-dentales" element={<DentalClinicProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
