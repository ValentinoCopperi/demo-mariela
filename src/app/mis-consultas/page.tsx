"use client"

import { useState } from "react"
import Link from "next/link"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { LeafIcon, Search, Calendar, Clock, ArrowLeft, Download, CreditCard } from 'lucide-react'

// Datos de ejemplo para las consultas
const CONSULTAS_EJEMPLO = [
  {
    id: "1",
    fecha: new Date(2025, 3, 15, 10, 0),
    tipo: "Primera consulta",
    estado: "Completada",
    pago: "Pagado",
    nutricionista: "Ana Martínez",
    notas: "Evaluación inicial. Plan nutricional enviado por correo.",
    precio: "$80"
  },
  {
    id: "2",
    fecha: new Date(2025, 3, 29, 11, 0),
    tipo: "Seguimiento",
    estado: "Programada",
    pago: "Pendiente",
    nutricionista: "Ana Martínez",
    notas: "",
    precio: "$50"
  },
  {
    id: "3",
    fecha: new Date(2025, 2, 10, 16, 0),
    tipo: "Nutrición deportiva",
    estado: "Completada",
    pago: "Pagado",
    nutricionista: "Ana Martínez",
    notas: "Ajuste de plan para maratón. Aumento de carbohidratos recomendado.",
    precio: "$65"
  },
  {
    id: "4",
    fecha: new Date(2025, 1, 5, 9, 0),
    tipo: "Seguimiento",
    estado: "Completada",
    pago: "Pagado",
    nutricionista: "Ana Martínez",
    notas: "Progreso positivo. Pérdida de 2kg desde la última consulta.",
    precio: "$50"
  }
]

export default function MisConsultas() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState("todas")
  
  // Filtrar consultas según la pestaña activa y término de búsqueda
  const filteredConsultas = CONSULTAS_EJEMPLO.filter(consulta => {
    const matchesSearch = 
      consulta.tipo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      consulta.estado.toLowerCase().includes(searchTerm.toLowerCase()) ||
      format(consulta.fecha, "d MMMM yyyy", { locale: es }).toLowerCase().includes(searchTerm.toLowerCase())
    
    if (activeTab === "todas") return matchesSearch
    if (activeTab === "programadas") return matchesSearch && consulta.estado === "Programada"
    if (activeTab === "completadas") return matchesSearch && consulta.estado === "Completada"
    if (activeTab === "pendientes-pago") return matchesSearch && consulta.pago === "Pendiente"
    
    return matchesSearch
  })

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <LeafIcon className="h-6 w-6 text-green-500" />
            <span className="text-xl font-semibold">NutriVida</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:text-green-500 transition-colors">
              Inicio
            </Link>
            <Link href="/sobre-mi" className="text-sm font-medium hover:text-green-500 transition-colors">
              Sobre Mí
            </Link>
            <Link href="/agendar-cita" className="text-sm font-medium hover:text-green-500 transition-colors">
              Agendar Cita
            </Link>
            <Link href="/iniciar-sesion" className="text-sm font-medium hover:text-green-500 transition-colors">
              Iniciar Sesión
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/mis-consultas" className="text-sm font-medium text-green-500">
              Mis Consultas
            </Link>
            <Link href="/registro">
              <Button className="bg-green-500 hover:bg-green-600">Registrarse</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center gap-2 text-green-500 hover:text-green-600 mb-4">
              <ArrowLeft className="h-4 w-4" />
              <span>Volver al inicio</span>
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Mis Consultas</h1>
            <p className="text-gray-600">Gestiona y revisa todas tus consultas nutricionales.</p>
          </div>

          <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="relative w-full md:w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  type="search"
                  placeholder="Buscar consultas..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Link href="/agendar-cita">
                <Button className="w-full md:w-auto bg-green-500 hover:bg-green-600">
                  Agendar Nueva Consulta
                </Button>
              </Link>
            </div>

            <Tabs defaultValue="todas" onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                <TabsTrigger value="todas">Todas</TabsTrigger>
                <TabsTrigger value="programadas">Programadas</TabsTrigger>
                <TabsTrigger value="completadas">Completadas</TabsTrigger>
                <TabsTrigger value="pendientes-pago">Pendientes de Pago</TabsTrigger>
              </TabsList>
              <TabsContent value="todas" className="mt-6">
                {renderConsultasList(filteredConsultas)}
              </TabsContent>
              <TabsContent value="programadas" className="mt-6">
                {renderConsultasList(filteredConsultas)}
              </TabsContent>
              <TabsContent value="completadas" className="mt-6">
                {renderConsultasList(filteredConsultas)}
              </TabsContent>
              <TabsContent value="pendientes-pago" className="mt-6">
                {renderConsultasList(filteredConsultas)}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-8 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <LeafIcon className="h-6 w-6 text-green-500" />
              <span className="text-xl font-semibold">NutriVida</span>
            </div>
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} NutriVida. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function renderConsultasList(consultas: typeof CONSULTAS_EJEMPLO) {
  if (consultas.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No se encontraron consultas que coincidan con tu búsqueda.</p>
      </div>
    )
  }

  return (
    <div className="grid gap-6">
      {consultas.map((consulta) => (
        <Card key={consulta.id} className="overflow-hidden">
          <CardHeader className="pb-3">
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>{consulta.tipo}</CardTitle>
                <CardDescription>
                  Con {consulta.nutricionista} • {consulta.precio}
                </CardDescription>
              </div>
              <div className="flex gap-2">
                <Badge variant={consulta.estado === "Completada" ? "secondary" : "outline"}>
                  {consulta.estado}
                </Badge>
                <Badge variant={consulta.pago === "Pagado" ? "default" : "destructive"}>
                  {consulta.pago}
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pb-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-green-500" />
                <span>{format(consulta.fecha, "EEEE d 'de' MMMM 'de' yyyy", { locale: es })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-green-500" />
                <span>{format(consulta.fecha, "HH:mm")} hrs</span>
              </div>
            </div>
            {consulta.notas && (
              <div className="mt-4">
                <h4 className="text-sm font-medium mb-1">Notas:</h4>
                <p className="text-sm text-gray-600">{consulta.notas}</p>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between pt-3">
            <Button variant="outline" size="sm" className="text-green-500 border-green-500 hover:bg-green-50">
              <Download className="h-4 w-4 mr-2" />
              Descargar Plan
            </Button>
            {consulta.pago === "Pendiente" && (
              <Button size="sm" className="bg-green-500 hover:bg-green-600">
                <CreditCard className="h-4 w-4 mr-2" />
                Realizar Pago
              </Button>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
