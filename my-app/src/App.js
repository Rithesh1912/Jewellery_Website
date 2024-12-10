import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import EaringsPage from './pages/EarringsPage'; // Adjust path if needed
import 'bootstrap/dist/css/bootstrap.min.css';
import EarringDetailsPage from './pages/EarringDetailsPage'; 

function App() {
  return (
    <Router>
      <Header />
      <main style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/earrings" element={<EaringsPage />} />
          <Route path=":name" element={<EarringDetailsPage />} /> {/* New route */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
