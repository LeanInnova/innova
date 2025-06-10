import React from 'react';

const Services = () => {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Nuestros Servicios <span className="text-blue-600">Profesionales</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Ofrecemos soluciones informáticas completas y personalizadas para satisfacer todas sus necesidades tecnológicas.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Service 1 - Venta de Computadoras */}
          <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">Venta de Computadoras</h3>
              <p className="text-gray-600 mb-6">Ofrecemos una amplia gama de equipos informáticos para todas sus necesidades:</p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-blue-600">✓</span>
                  <span>Computadoras de escritorio y laptops de última generación</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-blue-600">✓</span>
                  <span>Servidores y equipos para empresas</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-blue-600">✓</span>
                  <span>PCs para gaming y estaciones de trabajo profesionales</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-blue-600">✓</span>
                  <span>Accesorios, periféricos y componentes</span>
                </li>
              </ul>
              <a href="#contacto" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800">
                Consultar disponibilidad
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Service 2 - Soporte Técnico */}
          <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">Soporte Técnico Integral</h3>
              <p className="text-gray-600 mb-6">Brindamos asistencia especializada para resolver cualquier problema informático:</p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-blue-600">✓</span>
                  <span>Soporte remoto y presencial</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-blue-600">✓</span>
                  <span>Solución de problemas de hardware y software</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-blue-600">✓</span>
                  <span>Configuración de sistemas y aplicaciones</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-blue-600">✓</span>
                  <span>Asesoramiento técnico personalizado</span>
                </li>
              </ul>
              <a href="#contacto" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800">
                Solicitar soporte
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Service 3 - Mantenimiento y Reparación */}
          <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">Mantenimiento y Reparación</h3>
              <p className="text-gray-600 mb-6">Servicios profesionales para mantener sus equipos en óptimas condiciones:</p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-blue-600">✓</span>
                  <span>Mantenimiento preventivo y correctivo</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-blue-600">✓</span>
                  <span>Reparación de computadoras y laptops</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-blue-600">✓</span>
                  <span>Diagnóstico y solución de fallos</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-blue-600">✓</span>
                  <span>Actualización de componentes y sistemas</span>
                </li>
              </ul>
              <a href="#contacto" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800">
                Agendar servicio
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Service 4 - Instalación y Armado de Redes */}
          <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">Instalación y Armado de Redes</h3>
              <p className="text-gray-600 mb-6">Diseñamos e implementamos redes seguras y eficientes para su organización:</p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-blue-600">✓</span>
                  <span>Diseño e instalación de redes LAN y WiFi</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-blue-600">✓</span>
                  <span>Configuración de equipos de red (routers, switches)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-blue-600">✓</span>
                  <span>Implementación de seguridad y control de acceso</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-blue-600">✓</span>
                  <span>Soluciones de conectividad empresarial</span>
                </li>
              </ul>
              <a href="#contacto" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800">
                Cotizar servicio
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <div className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all">
            <a href="#contacto" className="flex items-center">
              <span>Consulta por nuestros servicios personalizados</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;