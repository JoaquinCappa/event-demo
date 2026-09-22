"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Calendar as CalendarIcon, ClipboardList, Users, Package, Image as ImageIcon, Settings, LogOut, Menu } from "lucide-react";
import { businessInfo } from "@/lib/mock-data";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const sidebarLinks = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Calendario", href: "/admin/calendario", icon: CalendarIcon },
  { name: "Solicitudes", href: "/admin/solicitudes", icon: ClipboardList },
  { name: "Clientes", href: "/admin/clientes", icon: Users },
  { name: "Servicios", href: "/admin/servicios", icon: Package },
  { name: "Configuración", href: "/admin/configuracion", icon: Settings },
];

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen bg-zinc-50 overflow-hidden text-zinc-900">
      {/* Sidebar Desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r">
        <div className="h-16 flex items-center px-6 border-b">
          <span className="font-bold text-lg">{businessInfo.name} Admin</span>
        </div>
        <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
          {sidebarLinks.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${
                  isActive ? "bg-zinc-100 text-zinc-900" : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
                }`}
              >
                <Icon className={`mr-3 h-5 w-5 ${isActive ? "text-zinc-900" : "text-zinc-400"}`} />
                {link.name}
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t">
          <Link href="/" className="flex items-center px-3 py-2 text-sm font-medium text-zinc-600 hover:bg-zinc-50 rounded-md">
            <LogOut className="mr-3 h-5 w-5 text-zinc-400" />
            Salir al sitio
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header Mobile & Top actions */}
        <header className="h-16 flex items-center justify-between md:justify-end px-4 md:px-6 bg-white border-b">
          <div className="md:hidden flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu className="h-5 w-5" />
            </Button>
            <span className="font-bold">{businessInfo.name}</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 rounded-full bg-zinc-900 text-white flex items-center justify-center font-bold text-xs">
              AD
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-6xl mx-auto">
            {children}
          </div>
        </main>
      </div>

      {/* Mobile Menu overlay (simplified for demo) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-black/50" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="w-64 h-full bg-white flex flex-col" onClick={e => e.stopPropagation()}>
            <div className="h-16 flex items-center px-6 border-b">
              <span className="font-bold text-lg">Menú Admin</span>
            </div>
            <nav className="flex-1 py-4 px-2 space-y-1">
              {sidebarLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center px-4 py-3 text-sm font-medium text-zinc-600 border-b border-zinc-100"
                >
                  <link.icon className="mr-3 h-5 w-5" />
                  {link.name}
                </Link>
              ))}
              <Link href="/" className="flex items-center px-4 py-3 text-sm font-medium text-red-600">
                <LogOut className="mr-3 h-5 w-5" />
                Salir
              </Link>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
