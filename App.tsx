import React, { Component, ErrorInfo, ReactNode } from 'react';
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

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { 
      hasError: false, 
      error: null 
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 max-w-2xl mx-auto mt-20 bg-red-50 border border-red-200 rounded-lg shadow-lg font-sans">
          <h1 className="text-2xl font-bold text-red-800 mb-4">Something went wrong.</h1>
          <p className="text-red-600 mb-4">The application encountered an error. Please check the console for details.</p>
          <pre className="bg-white p-4 rounded border border-red-100 text-sm overflow-auto text-red-900 font-mono">
            {this.state.error?.message}
          </pre>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-6 px-4 py-2 bg-red-800 text-white rounded hover:bg-red-900 transition-colors"
          >
            Reload Application
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

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
        // Simple fallback to Home for now, or 404
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
    <ErrorBoundary>
      <Router>
        <AppContent />
      </Router>
    </ErrorBoundary>
  );
}

export default App;