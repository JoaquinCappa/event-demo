import { Card } from "@/components/ui/card";
import { mockCustomers } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Search, MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";

import { format } from "date-fns";
import { es } from "date-fns/locale";

export default function ClientesPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Clientes</h1>
          <p className="text-zinc-500 mt-1">Directorio de clientes y contactos.</p>
        </div>
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
          <Input placeholder="Buscar cliente..." className="pl-9 bg-white border-zinc-200 text-zinc-900 placeholder:text-zinc-400 focus-visible:ring-zinc-400" />
        </div>
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-zinc-500 uppercase bg-zinc-50 border-b">
              <tr>
                <th className="px-6 py-4 font-medium">Nombre</th>
                <th className="px-6 py-4 font-medium">Contacto</th>
                <th className="px-6 py-4 font-medium">Eventos</th>
                <th className="px-6 py-4 font-medium">Última reserva</th>
                <th className="px-6 py-4 font-medium">Estado</th>
                <th className="px-6 py-4 font-medium text-right">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {mockCustomers.map((cli) => (
                <tr key={cli.id} className="border-b last:border-0 hover:bg-zinc-50">
                  <td className="px-6 py-4 font-medium">{cli.name}</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col text-xs text-zinc-500">
                      <span>{cli.whatsapp}</span>
                      <span>{cli.email}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">{cli.events}</td>
                  <td className="px-6 py-4">{format(new Date(cli.lastBooking + "T00:00:00"), "d 'de' MMMM 'de' yyyy", { locale: es })}</td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {cli.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Button variant="ghost" size="icon" title="Contactar por WhatsApp">
                      <MessageCircle className="h-4 w-4 text-zinc-500" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
