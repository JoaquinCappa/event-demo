import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { businessInfo } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ConfiguracionPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Configuración</h1>
        <p className="text-zinc-500 mt-1">Administrá la información de tu negocio visible para los clientes.</p>
      </div>

      <div className="grid gap-8 max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle>Información General</CardTitle>
            <CardDescription>Los datos principales de tu página pública.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre del negocio</Label>
                <Input id="name" defaultValue={businessInfo.name} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="instagram">Instagram</Label>
                <Input id="instagram" defaultValue={businessInfo.instagram} />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="desc">Descripción</Label>
              <Textarea id="desc" defaultValue={businessInfo.description} rows={4} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Datos de Contacto</CardTitle>
            <CardDescription>Dónde y cómo pueden encontrarte tus clientes.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="address">Dirección / Ubicación</Label>
                <Input id="address" defaultValue={businessInfo.address} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono / WhatsApp</Label>
                <Input id="phone" defaultValue={businessInfo.phone} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Correo electrónico</Label>
                <Input id="email" defaultValue={businessInfo.email} />
              </div>
            </div>
            <div className="pt-4 flex justify-end">
              <Button size="lg">Guardar cambios</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
