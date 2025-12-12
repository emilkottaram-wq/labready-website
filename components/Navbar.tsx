import React, { useState, useEffect } from 'react';
import { Menu, X, FlaskConical, PlayCircle, ArrowRight } from 'lucide-react';
import { Link, useRouter } from './Router';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { navigate, path } = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleNavClick = (href: string) => {
    navigate(href);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 border-b ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-xl border-slate-200/60 py-3 shadow-sm' 
            : 'bg-transparent border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">
          
          {/* Logo Area */}
          <Link 
            href="/" 
            className="flex items-center gap-2.5 group cursor-pointer z-[101] relative"
          >
            <div className={`p-2 rounded-xl transition-colors duration-300 ${isScrolled ? 'bg-science-50 text-science-700' : 'bg-white text-science-700 shadow-sm'}`}>
              <FlaskConical size={20} strokeWidth={2.5} />
            </div>
            <span className={`font-bold text-xl tracking-tight transition-colors duration-300 ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}>
              LabReady
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center bg-slate-100/50 border border-slate-200/50 rounded-full p-1.5 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = path === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                    isActive 
                      ? 'bg-white text-science-700 shadow-sm' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link 
              href="/product-tour" 
              className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-science-700 transition-colors px-2 py-2 cursor-pointer"
            >
              <PlayCircle size={18} />
              <span className="hidden lg:inline">Watch Tour</span>
            </Link>
            <button 
              onClick={() => navigate('/book-demo')}
              className="group bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-science-600 transition-all duration-300 shadow-lg shadow-slate-900/10 hover:shadow-science-600/20 cursor-pointer flex items-center gap-2"
            >
              Book Demo
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={() => navigate('/book-demo')}
              className="bg-slate-900 text-white px-4 py-2 rounded-full text-xs font-bold"
            >
              Demo
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="text-slate-900 p-2 cursor-pointer relative z-[102] hover:bg-slate-100 rounded-full transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white/95 backdrop-blur-xl z-[99] transition-all duration-500 md:hidden flex flex-col pt-24 px-6 ${
          mobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-5 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-2">
          {navLinks.map((link, idx) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="text-2xl font-bold text-slate-900 text-left py-4 border-b border-slate-100 last:border-0 hover:text-science-600 transition-colors"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              {link.name}
            </button>
          ))}
          
          <div className="mt-8 flex flex-col gap-4">
             <button 
              onClick={() => handleNavClick('/product-tour')}
              className="flex items-center justify-center gap-2 w-full py-4 rounded-xl border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 transition-colors"
            >
              <PlayCircle size={20} />
              Watch Product Tour
            </button>
            <button 
              onClick={() => handleNavClick('/book-demo')}
              className="w-full py-4 bg-science-600 text-white font-bold rounded-xl shadow-xl shadow-science-500/20 active:scale-[0.98] transition-all"
            >
              Book a Demo
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;