import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function ConfirmacionPage() {
  return (
    <div className="container mx-auto px-4 py-24 flex-1 flex flex-col items-center justify-center text-center">
      <div className="max-w-md w-full bg-white p-8 rounded-3xl shadow-xl border relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-zinc-900" />
        <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
        <h1 className="text-3xl font-bold tracking-tight mb-4">Solicitud enviada</h1>
        <p className="text-zinc-500 mb-8 text-lg">
          Recibimos tu consulta. Revisaremos la disponibilidad y nos pondremos en contacto para confirmar los detalles y presupuesto.
        </p>
        <Link href="/">
          <Button size="lg" className="w-full">
            Volver al inicio
          </Button>
        </Link>
      </div>
    </div>
  );
}
