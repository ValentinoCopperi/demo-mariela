"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { LeafIcon, Users, Calendar, BarChart3, Settings, LogOut, Menu, ChevronRight, Search, CalendarPlus, MoreHorizontal, Clock, CalendarDays, CreditCard, CheckCircle, XCircle } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// Datos de ejemplo para las consultas
const CONSULTAS_EJEMPLO = [
  {
    id: "1",
    cliente: {
      nombre: "María García",
      imagen: "/placeholder.svg?height=100&width=100&text=MG"
    },
    fecha: new Date(2025, 3, 15, 10, 0),
    tipo: "Primera consulta",
    duracion: "60 min",
    estado: "Completada",
    pago: "Pagado",
    precio: "$80"
  },
  {
    id: "2",
    cliente: {
      nombre: "Carlos Rodríguez",
      imagen: "/placeholder.svg?height=100&width=100&text=CR"
    },
    fecha: new Date(2025, 3, 16, 11, 0),
    tipo: "Seguimiento",
    duracion: "30 min",
    estado: "Programada",
    pago: "Pendiente",
    precio: "$50"
  },
  {
    id: "3",
    cliente: {
      nombre: "Laura Martínez",
      imagen: "/placeholder.svg?height=100&width=100&text=LM"
    },
    fecha: new Date(2025, 3, 16, 15, 0),
    tipo: "Nutrición deportiva",
    duracion: "45 min",
    estado: "Programada",
    pago: "Pagado",
    precio: "$65"
  },
  {
    id: "4",
    cliente: {
      nombre: "Javier López",
      imagen: "/placeholder.svg?height=100&width=100&text=JL"
    },
    fecha: new Date(2025, 3, 17, 9, 0),
    tipo: "Seguimiento",
    duracion: "30 min",
    estado: "Programada",
    pago: "Pendiente",
    precio: "$50"
  },
  {
    id: "5",
    cliente: {
      nombre: "Ana Sánchez",
      imagen: "/placeholder.svg?height=100&width=100&text=AS"
    },
    fecha: new Date(2025, 3, 14, 16, 30),
    tipo: "Primera consulta",
    duracion: "60 min",
    estado: "Cancelada",
    pago: "Reembolsado",
    precio: "$80"
  },
  {
    id: "6",
    cliente: {
      nombre: "Pedro Fernández",
      imagen: "/placeholder.svg?height=100&width=100&text=PF"
    },
    fecha: new Date(2025, 3, 13, 12, 0),
    tipo: "Seguimiento",
    duracion: "30 min",
    estado: "Completada",
    pago: "Pagado",
    precio: "$50"
  }
]

export default function Consultas() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("todas")
  const [paymentFilter, setPaymentFilter] = useState("todos")
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [activeTab, setActiveTab] = useState("lista")
  
  // Filtrar consultas según término de búsqueda, filtros y fecha seleccionada
  const filteredConsultas = CONSULTAS_EJEMPLO.filter(consulta => {
    const matchesSearch = 
      consulta.cliente.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      consulta.tipo.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesStatus = 
      statusFilter === "todas" || 
      consulta.estado.toLowerCase() === statusFilter.toLowerCase()
    
    const matchesPayment = 
      paymentFilter === "todos" || 
      (paymentFilter === "pagados" && consulta.pago === "Pagado") ||
      (paymentFilter === "pendientes" && consulta.pago === "Pendiente")
    
    const matchesDate = 
      !selectedDate || 
      (consulta.fecha.getDate() === selectedDate.getDate() &&
       consulta.fecha.getMonth() === selectedDate.getMonth() &&
       consulta.fecha.getFullYear() === selectedDate.getFullYear())
    
    return matchesSearch && matchesStatus && matchesPayment && matchesDate
  })
  
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:translate-x-0`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between h-16 px-4 border-b">
            <Link href="/dashboard" className="flex items-center gap-2">
              <LeafIcon className="h-6 w-6 text-green-500" />
              <span className="text-xl font-semibold">NutriVida</span>
            </Link>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden" 
              onClick={() => setSidebarOpen(false)}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="flex items-center gap-4 p-4 border-b">
            <div className="relative h-10 w-10 rounded-full overflow-hidden">
              <Image 
                src="/placeholder.svg?height=40&width=40" 
                alt="Ana Martínez" 
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-medium text-sm">Ana Martínez</p>
              <p className="text-xs text-gray-500">Nutricionista</p>
            </div>
          </div>
          
          <nav className="flex-1 p-4 space-y-1 overflow-auto">
            <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900">
              <BarChart3 className="h-5 w-5 text-gray-500" />
              Dashboard
            </Link>
            <Link href="/dashboard/clientes" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900">
              <Users className="h-5 w-5 text-gray-500" />
              Clientes
            </Link>
            <Link href="/dashboard/consultas" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md bg-gray-100 text-gray-900">
              <Calendar className="h-5 w-5 text-gray-500" />
              Consultas
            </Link>
            <Link href="/dashboard/configuracion" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900">
              <Settings className="h-5 w-5 text-gray-500" />
              Configuración
            </Link>
          </nav>
          
          <div className="p-4 border-t">
            <Button variant="ghost" className="w-full justify-start text-gray-600 hover:text-gray-900 hover:bg-gray-100">
              <LogOut className="h-5 w-5 mr-2" />
              Cerrar sesión
            </Button>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className={`flex-1 ${sidebarOpen ? 'md:ml-64' : ''}`}>
        {/* Header */}
        <header className="sticky top-0 z-40 bg-white border-b">
          <div className="flex h-16 items-center justify-between px-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden" 
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </Button>
            <h1 className="text-xl font-semibold md:hidden">Consultas</h1>
            <div className="ml-auto flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Calendar className="h-4 w-4 mr-2" />
                Agendar
              </Button>
              <div className="relative h-8 w-8 rounded-full overflow-hidden">
                <Image 
                  src="/placeholder.svg?height=32&width=32" 
                  alt="Ana Martínez" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </header>
        
        <main className="p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold">Consultas</h1>
            <p className="text-gray-600">Gestiona y visualiza todas tus consultas.</p>
          </div>
          
          {/* Tabs */}
          <Tabs defaultValue="lista" onValueChange={setActiveTab} className="mb-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="lista">Vista de Lista</TabsTrigger>
              <TabsTrigger value="calendario">Vista de Calendario</TabsTrigger>
            </TabsList>
          </Tabs>
          
          {/* Filters */}
          <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  type="search"
                  placeholder="Buscar consultas..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full sm:w-40">
                  <SelectValue placeholder="Estado" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todas">Todas</SelectItem>
                  <SelectItem value="programada">Programadas</SelectItem>
                  <SelectItem value="completada">Completadas</SelectItem>
                  <SelectItem value="cancelada">Canceladas</SelectItem>
                </SelectContent>
              </Select>
              <Select value={paymentFilter} onValueChange={setPaymentFilter}>
                <SelectTrigger className="w-full sm:w-40">
                  <SelectValue placeholder="Pago" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todos</SelectItem>
                  <SelectItem value="pagados">Pagados</SelectItem>
                  <SelectItem value="pendientes">Pendientes</SelectItem>
                </SelectContent>
              </Select>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full sm:w-auto justify-start">
                    <CalendarDays className="h-4 w-4 mr-2" />
                    {selectedDate ? format(selectedDate, "d MMM, yyyy", { locale: es }) : "Filtrar por fecha"}
                    {selectedDate && (
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="ml-2 h-5 w-5" 
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedDate(undefined)
                        }}
                      >
                        <XCircle className="h-3 w-3" />
                      </Button>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <CalendarComponent
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <Button className="bg-green-500 hover:bg-green-600">
              <CalendarPlus className="h-4 w-4 mr-2" />
              Nueva Consulta
            </Button>
          </div>
          
          {/* Content based on active tab */}
          {activeTab === "lista" ? (
            <div className="grid gap-4">
              {filteredConsultas.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500">No se encontraron consultas que coincidan con tu búsqueda.</p>
                </div>
              ) : (
                filteredConsultas.map((consulta) => (
                  <Card key={consulta.id}>
                    <CardContent className="p-0">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 gap-4">
                        <div className="flex items-center gap-4">
                          <div className="relative h-12 w-12 rounded-full overflow-hidden">
                            <Image 
                              src={consulta.cliente.imagen || "/placeholder.svg"} 
                              alt={consulta.cliente.nombre} 
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-medium">{consulta.cliente.nombre}</h3>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                              <span>{consulta.tipo}</span>
                              <span>•</span>
                              <span>{consulta.duracion}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-gray-500" />
                            <span className="text-sm">{format(consulta.fecha, "d MMM, yyyy", { locale: es })}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-gray-500" />
                            <span className="text-sm">{format(consulta.fecha, "HH:mm")} hrs</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge 
                              variant={
                                consulta.estado === "Completada" ? "default" : 
                                consulta.estado === "Programada" ? "outline" : 
                                "secondary"
                              }
                            >
                              {consulta.estado}
                            </Badge>
                            <Badge 
                              variant={
                                consulta.pago === "Pagado" ? "default" : 
                                consulta.pago === "Pendiente" ? "destructive" : 
                                "secondary"
                              }
                            >
                              {consulta.pago}
                            </Badge>
                          </div>
                          <div className="ml-auto">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <MoreHorizontal className="h-5 w-5" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Ver detalles</DropdownMenuItem>
                                <DropdownMenuItem>Editar consulta</DropdownMenuItem>
                                {consulta.estado === "Programada" && (
                                  <DropdownMenuItem>Marcar como completada</DropdownMenuItem>
                                )}
                                {consulta.pago === "Pendiente" && (
                                  <DropdownMenuItem>Registrar pago</DropdownMenuItem>
                                )}
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-red-600">Cancelar consulta</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          ) : (
            <div className="bg-white rounded-lg p-4 border">
              <div className="text-center py-12">
                <p className="text-gray-500">Vista de calendario en desarrollo.</p>
                <p className="text-gray-500">Por favor, utiliza la vista de lista por ahora.</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
