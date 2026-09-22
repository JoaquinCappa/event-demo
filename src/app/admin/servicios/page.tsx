import { Card } from "@/components/ui/card";
import { services } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Plus, Edit, Trash2 } from "lucide-react";
import Image from "next/image";

export default function ServiciosPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Servicios</h1>
          <p className="text-zinc-500 mt-1">Gestioná los servicios que ofreces a tus clientes.</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Agregar servicio
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Card key={service.id} className="overflow-hidden flex flex-col">
            <div className="relative h-48 w-full bg-zinc-100">
              <Image 
                src={service.image} 
                alt={service.name} 
                fill 
                className="object-cover"
              />
              <div className="absolute top-2 right-2 flex gap-1">
                <Button variant="secondary" size="icon" className="h-8 w-8 bg-white hover:bg-zinc-100">
                  <Edit className="h-4 w-4 text-zinc-700" />
                </Button>
                <Button variant="secondary" size="icon" className="h-8 w-8 bg-white hover:bg-zinc-100">
                  <Trash2 className="h-4 w-4 text-red-600" />
                </Button>
              </div>
              {!service.active && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <span className="bg-zinc-900 text-white px-3 py-1 rounded-full text-xs font-semibold">Inactivo</span>
                </div>
              )}
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-2 gap-2">
                <h3 className="font-bold text-lg leading-tight">{service.name}</h3>
                <span className="text-sm font-semibold bg-zinc-100 px-2 py-1 rounded whitespace-nowrap">
                  {service.price}
                </span>
              </div>
              <p className="text-zinc-500 text-sm flex-1">{service.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
