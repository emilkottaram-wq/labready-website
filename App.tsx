import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Router, useRouter } from './components/Router';

// Pages
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import ProductTour from './pages/ProductTour';
import BookDemo from './pages/BookDemo';
import About from './pages/About';
import Contact from './pages/Contact';

const AppContent: React.FC = () => {
  const { path } = useRouter();

  // Ensure path is defined and normalize to remove trailing slash if present (except for root)
  const safePath = path || '/';
  const normalizedPath = safePath.endsWith('/') && safePath.length > 1 ? safePath.slice(0, -1) : safePath;

  // Router switch
  const renderPage = () => {
    switch (normalizedPath) {
      case '/':
        return <Home />;
      case '/features':
        return <Features />;
      case '/pricing':
        return <Pricing />;
      case '/product-tour':
        return <ProductTour />;
      case '/book-demo':
        return <BookDemo />;
      case '/about':
        return <About />;
      case '/contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };
  
  return (
    <div className="min-h-screen bg-slate-50 w-full overflow-x-hidden flex flex-col font-sans text-slate-900">
      <Navbar />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;