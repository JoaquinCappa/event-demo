"use client";

import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { bookedDates, mockRequests } from "@/lib/mock-data";
import { useState } from "react";
import { format } from "date-fns";
import { es } from "date-fns/locale";

export default function CalendarioPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  const disabledDays = bookedDates.map(d => new Date(d));
  
  const selectedDateStr = date ? format(date, "yyyy-MM-dd") : null;
  const eventsOnDate = mockRequests.filter(req => req.date === selectedDateStr);
  const isBooked = selectedDateStr ? bookedDates.includes(selectedDateStr) : false;

  const pendingDatesStr = mockRequests.filter(r => r.status === 'Pendiente').map(r => r.date);
  
  const bookedDatesObj = bookedDates.map(d => new Date(d + "T00:00:00"));
  const pendingDatesObj = pendingDatesStr.map(d => new Date(d + "T00:00:00"));

  let dayStatus = "Disponible";
  let statusColor = "bg-green-50 text-green-800 border-green-200";
  
  if (isBooked) {
    dayStatus = "Reservado";
    statusColor = "bg-red-50 text-red-800 border-red-200";
  } else if (eventsOnDate.some(r => r.status === 'Pendiente')) {
    dayStatus = "Consulta Pendiente";
    statusColor = "bg-yellow-50 text-yellow-800 border-yellow-200";
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Calendario</h1>
        <p className="text-zinc-500 mt-1">Visualizá tus fechas disponibles y eventos programados.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Seleccioná una fecha</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center pb-8">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="border rounded-xl p-4 shadow-sm"
              modifiers={{
                booked: bookedDatesObj,
                pending: pendingDatesObj,
              }}
              modifiersClassNames={{
                booked: "text-red-500 font-bold bg-red-50",
                pending: "text-yellow-600 font-bold bg-yellow-50",
              }}
            />
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Detalle del día</CardTitle>
            <p className="text-sm text-zinc-500">
              {date ? (
                (() => {
                  const str = format(date, "EEEE d 'de' MMMM 'de' yyyy", { locale: es });
                  return str.charAt(0).toUpperCase() + str.slice(1);
                })()
              ) : "Ninguna fecha seleccionada"}
            </p>
          </CardHeader>
          <CardContent>
            {date && (
              <div className={`p-4 rounded-lg mb-6 text-sm font-medium border ${statusColor}`}>
                Estado: {dayStatus}
              </div>
            )}

            <h3 className="font-semibold mb-4">Solicitudes para este día:</h3>
            
            {eventsOnDate.length > 0 ? (
              <div className="space-y-4">
                {eventsOnDate.map(req => (
                  <div key={req.id} className="p-4 border rounded-lg bg-zinc-50">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-semibold">{req.client}</span>
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium
                        ${req.status === 'Pendiente' ? 'bg-yellow-100 text-yellow-800' : ''}
                        ${req.status === 'Confirmada' ? 'bg-green-100 text-green-800' : ''}
                        ${req.status === 'Rechazada' ? 'bg-red-100 text-red-800' : ''}
                      `}>
                        {req.status}
                      </span>
                    </div>
                    <p className="text-sm text-zinc-600 mb-1">{req.eventType} - {req.service}</p>
                    <p className="text-sm text-zinc-500">{req.guests} invitados</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-zinc-500">No hay solicitudes para esta fecha.</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
