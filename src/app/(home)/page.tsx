import Image from "next/image"
import Link from "next/link"
import { CalendarIcon, LeafIcon, HeartPulseIcon, UtensilsIcon, PhoneIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <LeafIcon className="h-6 w-6 text-green-500" />
            <span className="text-xl font-semibold">Mariela Morazzo</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:text-green-500 transition-colors">
              Inicio
            </Link>
            <Link href="/" className="text-sm font-medium hover:text-green-500 transition-colors">
              Sobre Mí
            </Link>
            <Link href="/" className="text-sm font-medium hover:text-green-500 transition-colors">
              Servicios
            </Link>
            <Link href="/" className="text-sm font-medium hover:text-green-500 transition-colors">
              Testimonios
            </Link>
            <Link href="/" className="text-sm font-medium hover:text-green-500 transition-colors">
              Contacto
            </Link>
          </nav>
          <Link href="/agendar-cita" className="text-sm font-medium hover:text-green-500 transition-colors">
            <Button className="bg-green-500 hover:bg-green-600">Agendar Cita</Button>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="inicio" className="w-full py-20 md:py-28 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="flex-1 space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  Transforma tu salud con nutrición personalizada
                </h1>
                <p className="text-lg text-gray-600 max-w-xl">
                  Planes nutricionales adaptados a tus necesidades, objetivos y estilo de vida para que logres resultados duraderos.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-green-500 hover:bg-green-600 text-white">
                    Consulta Gratuita
                  </Button>
                  <Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-50">
                    Conoce Más
                  </Button>
                </div>
              </div>
              <div className="flex-1 relative h-[400px] w-full rounded-lg overflow-hidden">
                <Image 
                  src="/profile.webp" 
                  alt="Nutricionista profesional" 
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre-mi" className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 relative h-[400px] w-full rounded-lg overflow-hidden">
                <Image 
                  src="/comida.webp" 
                  alt="Nutricionista en consulta" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 space-y-6">
                <div className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm text-green-600">
                  Sobre Mí
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">Nutrición basada en evidencia científica</h2>
                <p className="text-gray-600">
                  Soy una nutricionista certificada con más de 8 años de experiencia ayudando a personas a mejorar su salud a través de la alimentación. Mi enfoque combina la ciencia nutricional más actualizada con un plan personalizado que se adapta a tu vida cotidiana.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="rounded-full bg-green-100 p-1">
                      <LeafIcon className="h-5 w-5 text-green-600" />
                    </div>
                    <span>Licenciada en Nutrición y Dietética</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="rounded-full bg-green-100 p-1">
                      <HeartPulseIcon className="h-5 w-5 text-green-600" />
                    </div>
                    <span>Especialista en Nutrición Clínica</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="rounded-full bg-green-100 p-1">
                      <UtensilsIcon className="h-5 w-5 text-green-600" />
                    </div>
                    <span>Experta en Alimentación Saludable</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicios" className="w-full py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <div className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm text-green-600">
                Servicios
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Soluciones nutricionales a tu medida</h2>
              <p className="text-gray-600">
                Ofrezco diferentes servicios adaptados a tus necesidades específicas para ayudarte a alcanzar tus objetivos de salud.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="rounded-full bg-green-100 p-3 w-fit mb-6">
                  <UtensilsIcon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Consulta Nutricional</h3>
                <p className="text-gray-600 mb-6">
                  Evaluación completa de tu estado nutricional y creación de un plan alimentario personalizado.
                </p>
                <Link href="#contacto" className="text-green-500 font-medium hover:text-green-600 flex items-center gap-2">
                  Saber más <span aria-hidden="true">→</span>
                </Link>
              </div>

              {/* Service 2 */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="rounded-full bg-green-100 p-3 w-fit mb-6">
                  <HeartPulseIcon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Nutrición Deportiva</h3>
                <p className="text-gray-600 mb-6">
                  Planes nutricionales específicos para optimizar tu rendimiento deportivo y recuperación.
                </p>
                <Link href="#contacto" className="text-green-500 font-medium hover:text-green-600 flex items-center gap-2">
                  Saber más <span aria-hidden="true">→</span>
                </Link>
              </div>

              {/* Service 3 */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="rounded-full bg-green-100 p-3 w-fit mb-6">
                  <CalendarIcon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Seguimiento Mensual</h3>
                <p className="text-gray-600 mb-6">
                  Acompañamiento continuo para ajustar tu plan y asegurar que alcances tus objetivos.
                </p>
                <Link href="#contacto" className="text-green-500 font-medium hover:text-green-600 flex items-center gap-2">
                  Saber más <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonios" className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <div className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm text-green-600">
                Testimonios
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Lo que dicen mis clientes</h2>
              <p className="text-gray-600">
                Historias reales de personas que han transformado su salud con mis servicios.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-gray-50 p-8 rounded-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative h-14 w-14 rounded-full overflow-hidden">
                    <Image 
                      src="/profile-1.webp" 
                      alt="Cliente" 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">María García</h4>
                    <p className="text-sm text-gray-500">Perdió 15kg en 6 meses</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "El plan nutricional que me diseñó cambió mi vida. No solo perdí peso, sino que aprendí a comer de forma saludable sin sentirme restringida."
                </p>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-gray-50 p-8 rounded-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative h-14 w-14 rounded-full overflow-hidden">
                    <Image 
                      src="/profile-2.webp" 
                      alt="Cliente" 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Carlos Rodríguez</h4>
                    <p className="text-sm text-gray-500">Atleta amateur</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "Gracias a su asesoramiento nutricional, he mejorado mi rendimiento deportivo y mi recuperación. Ahora tengo más energía durante mis entrenamientos."
                </p>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-gray-50 p-8 rounded-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative h-14 w-14 rounded-full overflow-hidden">
                    <Image 
                      src="/profile-3.webp" 
                      alt="Cliente" 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Laura Martínez</h4>
                    <p className="text-sm text-gray-500">Problemas digestivos</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "Después de años sufriendo problemas digestivos, finalmente encontré alivio con el plan personalizado. Su enfoque holístico hizo toda la diferencia."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="w-full py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm text-green-600">
                  Contacto
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">¿Listo para transformar tu salud?</h2>
                <p className="text-gray-600">
                  Agenda una consulta gratuita de 15 minutos para conocer cómo puedo ayudarte a alcanzar tus objetivos de salud.
                </p>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-green-100 p-2">
                    <PhoneIcon className="h-5 w-5 text-green-600" />
                  </div>
                  <span>+34 123 456 789</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-green-100 p-2">
                    <svg className="h-5 w-5 text-green-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                      <rect height="16" rx="2" width="20" x="2" y="4" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <span>info@nutrivida.com</span>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="nombre" className="text-sm font-medium">
                        Nombre
                      </label>
                      <input
                        id="nombre"
                        className="w-full rounded-md border border-gray-300 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full rounded-md border border-gray-300 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="telefono" className="text-sm font-medium">
                      Teléfono
                      </label>
                    <input
                      id="telefono"
                      className="w-full rounded-md border border-gray-300 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Tu teléfono"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="mensaje" className="text-sm font-medium">
                      Mensaje
                    </label>
                    <textarea
                      id="mensaje"
                      className="h-32 w-full rounded-md border border-gray-300 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="¿En qué puedo ayudarte?"
                    />
                  </div>
                  <Button className="w-full bg-green-500 hover:bg-green-600">
                    Enviar Mensaje
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <LeafIcon className="h-6 w-6 text-green-500" />
              <span className="text-xl font-semibold">NutriVida</span>
            </div>
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} NutriVida. Todos los derechos reservados.
            </div>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-500 hover:text-green-500">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-green-500">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-green-500">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
