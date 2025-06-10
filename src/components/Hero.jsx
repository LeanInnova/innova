import React from 'react';

const Hero = () => {
  return (
    <section id="inicio" className="relative bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 pt-24 pb-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between py-16">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Soluciones Informáticas <span className="text-yellow-300">Innovadoras</span> para todos
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-xl">
              Ofrecemos servicios tecnológicos integrales para empresas, 
              hogares, estudiantes y gamers con la más alta calidad y compromiso.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#servicios" 
                className="px-6 py-3 bg-white text-blue-700 font-medium rounded-full hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
              >
                Nuestros Servicios
              </a>
              <a 
                href="#contacto" 
                className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-full hover:bg-white/10 transition-all"
              >
                Contáctanos
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <div className="bg-white p-2 rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1581092921461-eab10380699b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Servicios informáticos profesionales" 
                className="w-full h-auto object-cover rounded"
              />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-8">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/20 transition">
            <div className="text-yellow-300 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-1">Venta de Computadoras</h3>
            <p className="text-white/80">Equipos de última generación para todas tus necesidades.</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/20 transition">
            <div className="text-yellow-300 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-1">Soporte Técnico</h3>
            <p className="text-white/80">Asistencia especializada para resolver cualquier problema informático.</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/20 transition">
            <div className="text-yellow-300 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-1">Mantenimiento y Reparación</h3>
            <p className="text-white/80">Servicios profesionales para mantener tus equipos en óptimas condiciones.</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/20 transition">
            <div className="text-yellow-300 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-1">Redes e Instalación</h3>
            <p className="text-white/80">Diseño e implementación de redes seguras y eficientes.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;