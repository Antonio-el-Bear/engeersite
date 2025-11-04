import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "./utils";
import { Menu, X } from "lucide-react";

const navigationItems = [
  { title: "Home", url: createPageUrl("Home") },
  { title: "Projects", url: createPageUrl("Projects") },
  { title: "Services", url: createPageUrl("Services") },
  { title: "Contact", url: createPageUrl("Contact") },
];

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <style>{`
        :root {
          --color-teal: #4FD1C5;
          --color-teal-dark: #38B2AC;
          --color-steel: #5B8FB9;
          --color-orange: #FF6B35;
          --color-gray-dark: #1A1A1A;
          --color-gray-medium: #2D3748;
        }
        
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
        
        .font-display {
          font-family: 'Cormorant Garamond', serif;
          letter-spacing: 0.05em;
        }
        
        body {
          font-family: 'Inter', sans-serif;
        }
        
        /* Blueprint grid effect */
        .blueprint-grid {
          background-image: 
            linear-gradient(rgba(79, 209, 197, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(79, 209, 197, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        /* Smooth scroll */
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 slide-in-left ${
          scrolled ? "bg-[#0A0A0A]/95 backdrop-blur-lg border-b border-teal-500/10" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center gap-3 group">
              <div className="flex items-center gap-2">
                {/* Simple geometric logo */}
                <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-teal-600 rounded-md flex items-center justify-center">
                  <div className="w-4 h-4 border-2 border-white rotate-45"></div>
                </div>
                <span className="text-xl font-bold text-white tracking-tight">ENGITECH</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.url}
                  className={`relative text-sm font-medium tracking-wide transition-colors duration-300 ${
                    location.pathname === item.url
                      ? "text-teal-400"
                      : "text-teal-300 hover:text-white"
                  }`}
                >
                  {item.title}
                  {location.pathname === item.url && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-teal-400 slide-in-left" />
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-teal-300 hover:text-white transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#1A1A1A] border-t border-teal-500/10 slide-up">
            <div className="px-6 py-4 space-y-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.url}
                  className={`block py-2 text-base font-medium transition-colors ${
                    location.pathname === item.url
                      ? "text-teal-400"
                      : "text-teal-300 hover:text-white"
                  }`}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#0A0A0A] border-t border-teal-500/10 py-12">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68f7b351183c200090d757e2/75759dd6a_e.jpg"
                alt="ENGITECH"
                className="h-10 w-auto mb-4"
              />
              <p className="text-sm text-teal-300 leading-relaxed">
                Engineering Precision. Designing Progress.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.title}
                    to={item.url}
                    className="block text-sm text-teal-300 hover:text-teal-400 transition-colors"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-teal-300">
                <p>Email: info@engitech.com</p>
                <p>Phone: +1 (555) 123-4567</p>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-teal-500/10 text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} ENGITECH. Building Tomorrow, Today.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}