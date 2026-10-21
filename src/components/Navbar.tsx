import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

// This looks for the image file directly inside your src folder
import ArnitLogo from '../ArnitLLC.png'; 

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Why Arnit', href: '#why-arnit' },
  { label: 'Service Area', href: '#service-area' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md border-b border-arnit-gray-border'
          : 'bg-white/95 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-md bg-arnit-gray border border-arnit-gray-border flex items-center justify-center overflow-hidden">
              <img 
                src={ArnitLogo} 
                alt="Arnit Remodeling Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="leading-tight">
              <div className="text-base lg:text-lg font-extrabold text-arnit-black tracking-tight">
                ARNIT <span className="text-arnit-red">REMODELING</span>
              </div>
              <div className="text-[10px] lg:text-xs text-gray-500 font-medium -mt-0.5">
                LLC • Sheboygan County, WI
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="px-3 py-2 text-sm font-semibold text-gray-700 hover:text-arnit-red transition-colors rounded-md"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+19205550100"
              className="flex items-center gap-2 text-sm font-semibold text-arnit-black hover:text-arnit-red transition-colors"
            >
              <Phone className="w-4 h-4" />
              (920) 555-0100
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 bg-arnit-red text-white text-sm font-bold rounded-md hover:bg-arnit-red-dark transition-colors shadow-sm"
            >
              Get Free Estimate
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-arnit-black"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden bg-white border-t border-arnit-gray-border"
          >
            <ul className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="block px-3 py-3 text-base font-semibold text-gray-700 hover:text-arnit-red hover:bg-arnit-gray rounded-md transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={() => handleNavClick('#contact')}
                  className="block px-3 py-3 bg-arnit-red text-white text-center font-bold rounded-md"
                >
                  Get Free Estimate
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

