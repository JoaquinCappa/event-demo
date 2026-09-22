import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockRequests } from "@/lib/mock-data";
import { ClipboardList, CalendarCheck, CalendarDays, Bell } from "lucide-react";
import Link from "next/link";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Button } from "@/components/ui/button";

export default function AdminDashboard() {
  const pendingRequests = mockRequests.filter(r => r.status === "Pendiente").length;
  const confirmedRequests = mockRequests.filter(r => r.status === "Confirmada").length;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Resumen</h1>
        <p className="text-zinc-500 mt-1">Acá podés ver el estado general de tus reservas y solicitudes.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Solicitudes pendientes</CardTitle>
            <Bell className="h-4 w-4 text-zinc-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingRequests}</div>
            <p className="text-xs text-zinc-500 mt-1">Para revisar hoy</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Reservas confirmadas</CardTitle>
            <CalendarCheck className="h-4 w-4 text-zinc-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{confirmedRequests}</div>
            <p className="text-xs text-zinc-500 mt-1">Próximos eventos</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Fechas ocupadas</CardTitle>
            <CalendarDays className="h-4 w-4 text-zinc-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6</div>
            <p className="text-xs text-zinc-500 mt-1">En los próximos 30 días</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Consultas totales</CardTitle>
            <ClipboardList className="h-4 w-4 text-zinc-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockRequests.length}</div>
            <p className="text-xs text-zinc-500 mt-1">Histórico</p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold tracking-tight">Últimas solicitudes</h2>
          <Link href="/admin/solicitudes">
            <Button variant="outline" size="sm">Ver todas</Button>
          </Link>
        </div>
        <Card>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-zinc-500 uppercase bg-zinc-50 border-b">
                <tr>
                  <th className="px-6 py-4 font-medium">Cliente</th>
                  <th className="px-6 py-4 font-medium">Evento</th>
                  <th className="px-6 py-4 font-medium">Fecha</th>
                  <th className="px-6 py-4 font-medium">Estado</th>
                </tr>
              </thead>
              <tbody>
                {mockRequests.slice(0, 5).map((req) => (
                  <tr key={req.id} className="border-b last:border-0 hover:bg-zinc-50">
                    <td className="px-6 py-4 font-medium">{req.client}</td>
                    <td className="px-6 py-4">{req.eventType}</td>
                    <td className="px-6 py-4">{format(new Date(req.date + "T00:00:00"), "d 'de' MMMM 'de' yyyy", { locale: es })}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium
                        ${req.status === 'Pendiente' ? 'bg-yellow-100 text-yellow-800' : ''}
                        ${req.status === 'Confirmada' ? 'bg-green-100 text-green-800' : ''}
                        ${req.status === 'Rechazada' ? 'bg-red-100 text-red-800' : ''}
                      `}>
                        {req.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}
