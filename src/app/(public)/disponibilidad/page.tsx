"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { services, eventTypes, bookedDates } from "@/lib/mock-data";
import { CheckCircle2, CalendarIcon, Loader2 } from "lucide-react";

export default function DisponibilidadPage() {
  const router = useRouter();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const disabledDays = bookedDates.map(d => new Date(d));

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Mock API call
    setTimeout(() => {
      setIsSubmitting(false);
      router.push("/reserva/confirmacion");
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 flex-1 flex flex-col items-center">
      <div className="w-full max-w-3xl">
        
        {/* Progress */}
        <div className="mb-8 flex items-center justify-between relative">
          <div className="absolute left-0 top-1/2 w-full h-0.5 bg-zinc-100 -z-10 transform -translate-y-1/2" />
          {[1, 2, 3].map((s) => (
            <div key={s} className={`flex items-center justify-center w-10 h-10 rounded-full border-2 bg-white transition-colors
              ${step >= s ? "border-zinc-900 text-zinc-900" : "border-zinc-200 text-zinc-300"}
              ${step === s ? "ring-4 ring-zinc-100" : ""}
            `}>
              {step > s ? <CheckCircle2 className="w-6 h-6" /> : <span className="font-semibold">{s}</span>}
            </div>
          ))}
        </div>

        {/* Step 1: Fecha */}
        {step === 1 && (
          <Card className="border-0 shadow-xl rounded-2xl overflow-hidden">
            <CardHeader className="text-center bg-zinc-50 border-b pb-8 pt-10">
              <CardTitle className="text-3xl text-zinc-900">Elegí tu fecha</CardTitle>
              <CardDescription className="text-base mt-2 text-zinc-600">Seleccioná un día en el calendario para ver si estamos disponibles.</CardDescription>
            </CardHeader>
            <CardContent className="p-8 flex flex-col items-center">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                disabled={[
                  { before: new Date() },
                  ...disabledDays
                ]}
                className="rounded-xl border p-4 shadow-sm bg-white text-zinc-900"
              />
              <div className="mt-8 w-full flex justify-end">
                <Button onClick={handleNext} disabled={!date} size="lg" className="w-full sm:w-auto px-8">
                  Continuar
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Servicio */}
        {step === 2 && (
          <Card className="border-0 shadow-xl rounded-2xl overflow-hidden">
            <CardHeader className="text-center bg-zinc-50 border-b pb-8 pt-10">
              <CardTitle className="text-3xl text-zinc-900">¿Qué servicio necesitás?</CardTitle>
              <CardDescription className="text-base mt-2 text-zinc-600">
                Para el {date && format(date, "dd 'de' MMMM, yyyy", { locale: es })}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 bg-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service) => (
                  <div
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={`cursor-pointer rounded-xl border-2 p-4 transition-all
                      ${selectedService === service.id ? "border-zinc-900 bg-zinc-50" : "border-zinc-200 hover:border-zinc-300"}
                    `}
                  >
                    <h3 className="font-semibold text-lg text-zinc-900">{service.name}</h3>
                    <p className="text-zinc-600 text-sm mt-1">{service.price}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex gap-4 justify-between">
                <Button variant="outline" onClick={handleBack} size="lg" className="text-zinc-900 border-zinc-300">Atrás</Button>
                <Button onClick={handleNext} disabled={!selectedService} size="lg" className="px-8">
                  Continuar
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 3: Datos */}
        {step === 3 && (
          <Card className="border-0 shadow-xl rounded-2xl overflow-hidden">
            <CardHeader className="text-center bg-zinc-50 border-b pb-8 pt-10">
              <CardTitle className="text-3xl text-zinc-900">Contanos sobre tu evento</CardTitle>
              <CardDescription className="text-base mt-2 text-zinc-600">Completá tus datos para que podamos contactarte con una propuesta.</CardDescription>
            </CardHeader>
            <CardContent className="p-8 bg-white">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-zinc-900">Nombre completo</Label>
                    <Input id="name" required placeholder="Ej: María Gómez" className="bg-white border-zinc-200 text-zinc-900" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="whatsapp" className="text-zinc-900">WhatsApp</Label>
                    <Input id="whatsapp" required placeholder="+54 9 11 ..." type="tel" className="bg-white border-zinc-200 text-zinc-900" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-zinc-900">Email</Label>
                    <Input id="email" required placeholder="hola@ejemplo.com" type="email" className="bg-white border-zinc-200 text-zinc-900" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="type" className="text-zinc-900">Tipo de evento</Label>
                    <select id="type" required className="flex h-10 w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400">
                      <option value="">Seleccionar...</option>
                      {eventTypes.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="guests" className="text-zinc-900">Cantidad aprox. de personas</Label>
                    <Input id="guests" required type="number" min="10" placeholder="Ej: 100" className="bg-white border-zinc-200 text-zinc-900" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-zinc-900">Mensaje adicional (Opcional)</Label>
                  <Textarea id="message" placeholder="Contanos más detalles o dudas que tengas..." className="bg-white border-zinc-200 text-zinc-900" />
                </div>

                <div className="bg-zinc-50 p-4 rounded-lg flex items-start gap-4">
                  <CalendarIcon className="w-5 h-5 text-zinc-500 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium text-zinc-900">Resumen de solicitud</p>
                    <p className="text-zinc-500">
                      Fecha: {date && format(date, "dd/MM/yyyy")}<br/>
                      Servicio: {services.find(s => s.id === selectedService)?.name}
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex gap-4 justify-between">
                  <Button type="button" variant="outline" onClick={handleBack} size="lg" disabled={isSubmitting} className="text-zinc-900 border-zinc-300">Atrás</Button>
                  <Button type="submit" size="lg" className="px-8" disabled={isSubmitting}>
                    {isSubmitting ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
                    {isSubmitting ? "Enviando..." : "Enviar solicitud"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

      </div>
    </div>
  );
}
