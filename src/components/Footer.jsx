import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div>
            <div className="mb-4">
              <a href="#" className="flex items-center">
                <span className="text-2xl font-bold text-blue-400">INNOVACIONES</span>
                <span className="text-2xl font-bold text-white">INFORMATICAS</span>
              </a>
            </div>
            <p className="mb-4 text-gray-400">
              Brindamos soluciones tecnológicas integrales de alta calidad para empresas, 
              hogares, estudiantes y gamers, con más de 10 años de experiencia en el mercado.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12.07c0-5.52-4.48-10-10-10s-10 4.48-10 10c0 4.96 3.66 9.07 8.44 9.82v-6.95H7.9v-2.87h2.54V9.56c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.77l-.44 2.87h-2.33v6.95C18.34 21.14 22 17.03 22 12.07z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.475 2 2 6.475 2 12s4.475 10 10 10 10-4.475 10-10S17.525 2 12 2zm4.478 6.123l-1.637 7.71c-.123.563-.445.698-.903.435l-2.495-1.837-1.203 1.16c-.133.13-.244.24-.498.24-.32 0-.267-.12-.376-.425l-.84-2.77L6.5 11.561c-.555-.173-.566-.555.12-.825l9.052-3.49c.415-.176.785.101.595.877z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C1.55 3.36.15 4.674.048 8.274c-.156 4.378-.156 7.073 0 11.45.104 3.6 1.505 4.913 4.338 5.09 3.6.245 11.626.246 15.23 0 2.834-.176 4.233-1.49 4.336-5.09.157-4.377.157-7.072 0-11.45-.103-3.6-1.504-4.913-4.337-5.09zM9 16V8l8 4-8 4z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Column 2: Servicios */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Servicios</h3>
            <ul className="space-y-3">
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-blue-400 transition">Venta de Computadoras</a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-blue-400 transition">Soporte Técnico Integral</a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-blue-400 transition">Mantenimiento y Reparación</a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-blue-400 transition">Instalación y Armado de Redes</a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-blue-400 transition">Consultorías Informáticas</a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-blue-400 transition">Ciberseguridad</a>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Enlaces Rápidos */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="text-gray-400 hover:text-blue-400 transition">Inicio</a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-blue-400 transition">Servicios</a>
              </li>
              <li>
                <a href="#clientes" className="text-gray-400 hover:text-blue-400 transition">Soluciones por Cliente</a>
              </li>
              <li>
                <a href="#testimonios" className="text-gray-400 hover:text-blue-400 transition">Testimonios</a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-400 hover:text-blue-400 transition">Contacto</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition">Política de Privacidad</a>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Suscríbase para recibir las últimas novedades y ofertas especiales.
            </p>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Su correo electrónico" 
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-300"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors">
                Suscribirse
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-3">
              Al suscribirse, acepta recibir correos electrónicos de nuestra empresa. Puede darse de baja en cualquier momento.
            </p>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 text-sm text-gray-400">
              © {currentYear} INNOVACIONES INFORMATICAS. Todos los derechos reservados.
            </div>
            <div className="text-sm text-gray-400">
              <a href="#" className="hover:text-blue-400 transition">Términos y Condiciones</a>
              <span className="mx-2">|</span>
              <a href="#" className="hover:text-blue-400 transition">Política de Privacidad</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;