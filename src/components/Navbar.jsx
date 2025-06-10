import { useState } from 'react';

const Navbar = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center">
                <span className="text-2xl font-bold text-blue-600">INNOVACIONES</span>
                <span className="text-2xl font-bold text-gray-800">INFORMATICAS</span>
              </a>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#inicio" className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Inicio</a>
              <a href="#servicios" className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Servicios</a>
              <a href="#clientes" className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Soluciones</a>
              <a href="#testimonios" className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Testimonios</a>
              <a href="#contacto" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">Contacto</a>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-blue-600 focus:outline-none"
            >
              <span className="sr-only">Abrir menú</span>
              {/* Hamburger Icon */}
              {!mobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white rounded-md shadow-lg mt-2">
              <a href="#inicio" onClick={toggleMobileMenu} className="text-gray-800 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Inicio</a>
              <a href="#servicios" onClick={toggleMobileMenu} className="text-gray-800 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Servicios</a>
              <a href="#clientes" onClick={toggleMobileMenu} className="text-gray-800 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Soluciones</a>
              <a href="#testimonios" onClick={toggleMobileMenu} className="text-gray-800 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Testimonios</a>
              <a href="#contacto" onClick={toggleMobileMenu} className="bg-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">Contacto</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;