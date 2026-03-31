import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Philosophy } from './components/Philosophy';
import { Protocol } from './components/Protocol';
import { Products } from './components/Products';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen selection:bg-primary/30 selection:text-white bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <Philosophy />
        <Protocol />
        <Products />
      </main>
      <Footer />
    </div>
  );
}

export default App;
