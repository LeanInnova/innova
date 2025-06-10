import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "María González",
      role: "Gerente de Operaciones, TechCorp SA",
      content: "INNOVACIONES INFORMATICAS transformó completamente nuestra infraestructura tecnológica. Su servicio fue rápido, profesional y los resultados superaron nuestras expectativas. Ahora nuestros sistemas funcionan más rápido y con mayor seguridad.",
      image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 2,
      name: "Carlos Méndez",
      role: "Emprendedor",
      content: "Cuando mi laptop dejó de funcionar antes de una presentación importante, el equipo de soporte técnico vino a mi rescate. No solo repararon mi equipo en tiempo récord, sino que también recuperaron todos mis archivos importantes.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 3,
      name: "Ana Rodríguez",
      role: "Estudiante universitaria",
      content: "Compré mi laptop para la universidad en INNOVACIONES INFORMATICAS y recibí asesoramiento excelente. Me recomendaron un equipo que se ajusta perfectamente a mis necesidades académicas y mi presupuesto. ¡Muy satisfecha!",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 4,
      name: "Miguel Torres",
      role: "Gamer profesional",
      content: "El PC gaming que armaron para mí es una maravilla. Cada componente fue seleccionado con precisión para maximizar el rendimiento en mis juegos favoritos. La atención personalizada y su conocimiento técnico marcan la diferencia.",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <section id="testimonios" className="py-20 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Lo Que Dicen <span className="text-yellow-300">Nuestros Clientes</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-300 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-white/90 text-lg">
            Nuestro compromiso con la excelencia y la satisfacción del cliente nos distingue en el mercado.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-all duration-300 flex flex-col"
            >
              <div className="flex-grow">
                <div className="flex mb-4 items-center">
                  <div className="mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-16 h-16 rounded-full object-cover border-2 border-white/50"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-yellow-300 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="italic text-white/90">"{testimonial.content}"</p>
              </div>
              <div className="mt-4 text-yellow-300">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;