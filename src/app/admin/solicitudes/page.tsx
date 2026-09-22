import { Card } from "@/components/ui/card";
import { mockRequests } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Check, X, MessageCircle } from "lucide-react";

import { format } from "date-fns";
import { es } from "date-fns/locale";

export default function SolicitudesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Solicitudes</h1>
        <p className="text-zinc-500 mt-1">Gestioná las consultas y reservas de tus clientes.</p>
      </div>

      <div className="grid gap-4">
        {mockRequests.map((req) => (
          <Card key={req.id} className="p-6">
            <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <h3 className="font-bold text-lg">{req.client}</h3>
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium
                    ${req.status === 'Pendiente' ? 'bg-yellow-100 text-yellow-800' : ''}
                    ${req.status === 'Confirmada' ? 'bg-green-100 text-green-800' : ''}
                    ${req.status === 'Rechazada' ? 'bg-red-100 text-red-800' : ''}
                  `}>
                    {req.status}
                  </span>
                </div>
                <div className="text-sm text-zinc-500 flex flex-wrap gap-x-4 gap-y-1">
                  <span><strong>Evento:</strong> {req.eventType}</span>
                  <span><strong>Fecha:</strong> {format(new Date(req.date + "T00:00:00"), "d 'de' MMMM 'de' yyyy", { locale: es })}</span>
                  <span><strong>Invitados:</strong> {req.guests}</span>
                </div>
                <div className="text-sm text-zinc-500">
                  <span><strong>Servicio(s):</strong> {req.service}</span>
                </div>
                {req.message && (
                  <div className="text-sm bg-zinc-50 p-3 rounded-md mt-3 italic border">
                    "{req.message}"
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-2 w-full md:w-auto">
                {req.status === 'Pendiente' && (
                  <>
                    <Button variant="outline" className="flex-1 md:flex-none border-green-200 text-green-700 hover:bg-green-50 hover:text-green-800">
                      <Check className="w-4 h-4 mr-2" />
                      Confirmar reserva
                    </Button>
                    <Button variant="outline" className="flex-1 md:flex-none border-red-200 text-red-700 hover:bg-red-50 hover:text-red-800">
                      <X className="w-4 h-4 mr-2" />
                      Rechazar fecha
                    </Button>
                  </>
                )}
                <Button variant="secondary" className="flex-1 md:flex-none">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contactar / Propuesta
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
