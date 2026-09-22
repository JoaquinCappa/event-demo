import Link from "next/link";
import { businessInfo } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 text-zinc-900">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-zinc-900">{businessInfo.name}</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-semibold text-zinc-700 hover:text-zinc-900 transition-colors">Inicio</Link>
          <Link href="/#servicios" className="text-sm font-semibold text-zinc-700 hover:text-zinc-900 transition-colors">Servicios</Link>
          <Link href="/#galeria" className="text-sm font-semibold text-zinc-700 hover:text-zinc-900 transition-colors">Galería</Link>
          <Link href="/disponibilidad" className="text-sm font-semibold text-zinc-700 hover:text-zinc-900 transition-colors">Disponibilidad</Link>
          <Link href="/#contacto" className="text-sm font-semibold text-zinc-700 hover:text-zinc-900 transition-colors">Contacto</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/disponibilidad">
            <Button className="font-semibold shadow-sm">Consultar disponibilidad</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
