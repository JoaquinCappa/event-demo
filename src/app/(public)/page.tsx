import Image from "next/image";
import Link from "next/link";
import { businessInfo, services, eventTypes, galleryImages } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, ChevronRight, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2000&auto=format&fit=crop"
            alt="Hero Background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-center text-center">
          <span className="px-4 py-1.5 rounded-full bg-white/10 text-white backdrop-blur-md text-sm font-semibold mb-6 border border-white/20">
            {businessInfo.name}
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl mb-6 drop-shadow-sm">
            Tu evento empieza acá.
          </h1>
          <p className="text-lg md:text-xl text-zinc-100 max-w-2xl mb-10 drop-shadow-sm font-medium">
            Conocé nuestros servicios, consultá disponibilidad y enviá tu solicitud desde un solo lugar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link href="/disponibilidad" className="w-full sm:w-auto">
              <Button size="lg" className="w-full bg-white text-zinc-900 hover:bg-zinc-100 h-14 px-8 text-lg font-bold shadow-lg">
                Consultar disponibilidad
              </Button>
            </Link>
            <Link href="#servicios" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full border-white/50 text-white hover:bg-white/10 bg-black/20 backdrop-blur-sm h-14 px-8 text-lg font-semibold shadow-lg">
                Ver servicios
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICIOS SECTION */}
      <section id="servicios" className="w-full py-24 bg-zinc-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Todo para tu evento</h2>
            <p className="text-zinc-500 max-w-[600px] text-lg">
              Diseñamos experiencias integrales. Elegí los servicios que necesitás y armá tu evento a medida.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="overflow-hidden border-0 shadow-lg group hover:shadow-xl transition-shadow bg-white flex flex-col">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <CardTitle className="text-xl text-zinc-900">{service.name}</CardTitle>
                    <span className="text-sm font-semibold whitespace-nowrap bg-zinc-100 px-2 py-1 rounded-md text-zinc-900">
                      {service.price}
                    </span>
                  </div>
                  <CardDescription className="text-base line-clamp-2">{service.description}</CardDescription>
                </CardHeader>
                <div className="flex-grow"></div>
                <CardFooter className="px-6 pb-6 pt-4 mt-auto">
                  <Link href="/disponibilidad" className="w-full">
                    <Button variant="outline" className="w-full border-zinc-200 text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
                      Consultar
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* EVENT TYPES SECTION */}
      <section className="w-full py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Creamos momentos únicos</h2>
            <p className="text-zinc-500 max-w-[600px] text-lg">
              Nos adaptamos a cada tipo de celebración para que todo salga perfecto.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {eventTypes.map((type) => (
              <div key={type.id} className="group relative rounded-2xl overflow-hidden aspect-square cursor-pointer">
                <Image
                  src={type.image}
                  alt={type.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-opacity" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-white font-bold text-lg md:text-xl drop-shadow-md">{type.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="w-full py-24 bg-zinc-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Experiencias que se recuerdan</h2>
              <p className="text-zinc-400 text-lg mb-8 max-w-lg leading-relaxed">
                {businessInfo.description} Trabajamos con dedicación en cada detalle para garantizar que disfrutes tu fiesta sin preocupaciones.
              </p>
              <div className="space-y-4">
                {["Atención personalizada", "Proveedores exclusivos", "Coordinación el día del evento"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-green-400 h-6 w-6" />
                    <span className="text-zinc-200 text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 p-8 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
              {businessInfo.stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <span className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</span>
                  <span className="text-zinc-400 text-sm uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section id="galeria" className="w-full py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Nuestros trabajos</h2>
            <p className="text-zinc-500 max-w-[600px] text-lg">
              Mirá cómo transformamos espacios.
            </p>
          </div>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryImages.map((src, idx) => (
              <div key={idx} className="relative rounded-xl overflow-hidden break-inside-avoid group cursor-pointer">
                <img
                  src={src}
                  alt={`Trabajo ${idx}`}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Button variant="outline" size="lg">Ver galería completa</Button>
          </div>
        </div>
      </section>

      {/* CTA CONTACTO */}
      <section id="contacto" className="w-full py-24 bg-zinc-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white rounded-3xl p-8 md:p-16 border shadow-sm text-center flex flex-col items-center max-w-4xl mx-auto">
            <Calendar className="h-12 w-12 text-zinc-300 mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">¿Tenés una fecha en mente?</h2>
            <p className="text-zinc-600 text-lg mb-8 max-w-[500px]">
              Contanos sobre tu evento y te asesoramos sin compromiso.
            </p>
            <Link href="/disponibilidad">
              <Button size="lg" className="h-14 px-8 text-lg rounded-full">
                Consultar disponibilidad
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
