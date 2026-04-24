import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ProductDetails } from './pages/ProductDetails';
import { RealEstateProduct } from './pages/RealEstateProduct';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/producto/infraestructura" element={<ProductDetails />} />
        <Route path="/productos/sistema-conversion-inmobiliarias" element={<RealEstateProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
