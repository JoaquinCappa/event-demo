import { businessInfo } from "@/lib/mock-data";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-zinc-50 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 grid gap-8 md:grid-cols-4">
        <div className="flex flex-col gap-3">
          <span className="text-xl font-bold tracking-tight">{businessInfo.name}</span>
          <p className="text-sm text-zinc-600">{businessInfo.description}</p>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-zinc-900">Navegación</h3>
          <Link href="/" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">Inicio</Link>
          <Link href="/#servicios" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">Servicios</Link>
          <Link href="/#galeria" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">Galería</Link>
          <Link href="/disponibilidad" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">Disponibilidad</Link>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-zinc-900">Contacto</h3>
          <span className="text-sm text-zinc-600">{businessInfo.address}</span>
          <span className="text-sm text-zinc-600">{businessInfo.phone}</span>
          <span className="text-sm text-zinc-600">{businessInfo.email}</span>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-zinc-900">Redes Sociales</h3>
          <span className="text-sm text-zinc-600">{businessInfo.instagram}</span>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 mt-12 pt-8 border-t border-zinc-200 text-center text-sm text-zinc-500">
        &copy; {new Date().getFullYear()} {businessInfo.name}. Todos los derechos reservados.
      </div>
    </footer>
  );
}
