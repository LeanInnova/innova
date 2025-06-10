import React from 'react';

const ClientTypes = () => {
  return (
    <section id="clientes" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Soluciones para <span className="text-blue-600">Todo Tipo de Cliente</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Contamos con soluciones tecnológicas personalizadas para cada tipo de cliente y necesidad específica.
          </p>
        </div>

        {/* Client types grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Empresas */}
          <div className="bg-white rounded-xl p-6 shadow-lg hover:-translate-y-2 transition-transform duration-300">
            <div className="h-48 mb-6 overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Soluciones empresariales" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Empresas</h3>
            <p className="text-gray-600 mb-4">
              Potenciamos su negocio con soluciones tecnológicas que optimizan procesos y aumentan la productividad.
            </p>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>Infraestructura de red empresarial</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>Servidores y almacenamiento</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>Seguridad informática</span>
              </li>
            </ul>
            <a href="#contacto" className="text-blue-600 font-medium hover:text-blue-800 flex items-center">
              Ver más detalles
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>

          {/* Hogares */}
          <div className="bg-white rounded-xl p-6 shadow-lg hover:-translate-y-2 transition-transform duration-300">
            <div className="h-48 mb-6 overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1556438064-2d7646166914?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Soluciones para el hogar" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Hogares</h3>
            <p className="text-gray-600 mb-4">
              Mejoramos su experiencia digital en casa con soluciones prácticas y accesibles.
            </p>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>Redes WiFi de alto rendimiento</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>Computadoras familiares</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>Smart Home y entretenimiento</span>
              </li>
            </ul>
            <a href="#contacto" className="text-blue-600 font-medium hover:text-blue-800 flex items-center">
              Ver más detalles
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>

          {/* Estudiantes */}
          <div className="bg-white rounded-xl p-6 shadow-lg hover:-translate-y-2 transition-transform duration-300">
            <div className="h-48 mb-6 overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Soluciones para estudiantes" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Estudiantes</h3>
            <p className="text-gray-600 mb-4">
              Impulsamos tu educación con herramientas tecnológicas diseñadas para el éxito académico.
            </p>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>Laptops de alto rendimiento</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>Software educativo especializado</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>Accesorios para estudiantes</span>
              </li>
            </ul>
            <a href="#contacto" className="text-blue-600 font-medium hover:text-blue-800 flex items-center">
              Ver más detalles
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>

          {/* Gamers */}
          <div className="bg-white rounded-xl p-6 shadow-lg hover:-translate-y-2 transition-transform duration-300">
            <div className="h-48 mb-6 overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Soluciones para gamers" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Gamers</h3>
            <p className="text-gray-600 mb-4">
              Elevamos tu experiencia de juego con equipos de alto rendimiento y configuraciones optimizadas.
            </p>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>PCs gaming personalizadas</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>Periféricos profesionales</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>Configuración para streaming</span>
              </li>
            </ul>
            <a href="#contacto" className="text-blue-600 font-medium hover:text-blue-800 flex items-center">
              Ver más detalles
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTypes;