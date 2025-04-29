"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LeafIcon, Users, Calendar, BarChart3, Settings, LogOut, Menu, ChevronRight, Search, UserPlus, MoreHorizontal, Mail, Phone } from 'lucide-react'
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

// Datos de ejemplo para los clientes
const CLIENTES_EJEMPLO = [
  {
    id: "1",
    nombre: "María García",
    email: "maria.garcia@ejemplo.com",
    telefono: "+34 612 345 678",
    fechaRegistro: "15 Enero, 2025",
    consultas: 8,
    estado: "Activo",
    ultimaConsulta: "10 Abril, 2025",
    imagen: "/placeholder.svg?height=100&width=100&text=MG"
  },
  {
    id: "2",
    nombre: "Carlos Rodríguez",
    email: "carlos.rodriguez@ejemplo.com",
    telefono: "+34 623 456 789",
    fechaRegistro: "3 Febrero, 2025",
    consultas: 5,
    estado: "Activo",
    ultimaConsulta: "8 Abril, 2025",
    imagen: "/placeholder.svg?height=100&width=100&text=CR"
  },
  {
    id: "3",
    nombre: "Laura Martínez",
    email: "laura.martinez@ejemplo.com",
    telefono: "+34 634 567 890",
    fechaRegistro: "20 Febrero, 2025",
    consultas: 3,
    estado: "Inactivo",
    ultimaConsulta: "15 Marzo, 2025",
    imagen: "/placeholder.svg?height=100&width=100&text=LM"
  },
  {
    id: "4",
    nombre: "Javier López",
    email: "javier.lopez@ejemplo.com",
    telefono: "+34 645 678 901",
    fechaRegistro: "5 Marzo, 2025",
    consultas: 2,
    estado: "Activo",
    ultimaConsulta: "2 Abril, 2025",
    imagen: "/placeholder.svg?height=100&width=100&text=JL"
  },
  {
    id: "5",
    nombre: "Ana Sánchez",
    email: "ana.sanchez@ejemplo.com",
    telefono: "+34 656 789 012",
    fechaRegistro: "12 Marzo, 2025",
    consultas: 1,
    estado: "Nuevo",
    ultimaConsulta: "12 Abril, 2025",
    imagen: "/placeholder.svg?height=100&width=100&text=AS"
  },
  {
    id: "6",
    nombre: "Pedro Fernández",
    email: "pedro.fernandez@ejemplo.com",
    telefono: "+34 667 890 123",
    fechaRegistro: "25 Marzo, 2025",
    consultas: 4,
    estado: "Activo",
    ultimaConsulta: "9 Abril, 2025",
    imagen: "/placeholder.svg?height=100&width=100&text=PF"
  }
]

export default function Clientes() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("todos")
  
  // Filtrar clientes según término de búsqueda y filtro de estado
  const filteredClientes = CLIENTES_EJEMPLO.filter(cliente => {
    const matchesSearch = 
      cliente.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cliente.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cliente.telefono.includes(searchTerm)
    
    if (statusFilter === "todos") return matchesSearch
    return matchesSearch && cliente.estado.toLowerCase() === statusFilter.toLowerCase()
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
            <Link href="/dashboard/clientes" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md bg-gray-100 text-gray-900">
              <Users className="h-5 w-5 text-gray-500" />
              Clientes
            </Link>
            <Link href="/dashboard/consultas" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900">
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
            <h1 className="text-xl font-semibold md:hidden">Clientes</h1>
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
            <h1 className="text-2xl font-bold">Clientes</h1>
            <p className="text-gray-600">Gestiona y visualiza todos tus clientes.</p>
          </div>
          
          {/* Filters */}
          <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  type="search"
                  placeholder="Buscar clientes..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full sm:w-40">
                  <SelectValue placeholder="Filtrar por estado" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todos</SelectItem>
                  <SelectItem value="activo">Activos</SelectItem>
                  <SelectItem value="inactivo">Inactivos</SelectItem>
                  <SelectItem value="nuevo">Nuevos</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className="bg-green-500 hover:bg-green-600">
              <UserPlus className="h-4 w-4 mr-2" />
              Nuevo Cliente
            </Button>
          </div>
          
          {/* Clients list */}
          <div className="grid gap-4">
            {filteredClientes.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500">No se encontraron clientes que coincidan con tu búsqueda.</p>
              </div>
            ) : (
              filteredClientes.map((cliente) => (
                <Card key={cliente.id}>
                  <CardContent className="p-0">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 gap-4">
                      <div className="flex items-center gap-4">
                        <div className="relative h-12 w-12 rounded-full overflow-hidden">
                          <Image 
                            src={cliente.imagen || "/placeholder.svg"} 
                            alt={cliente.nombre} 
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-medium">{cliente.nombre}</h3>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Badge 
                              variant={
                                cliente.estado === "Activo" ? "default" : 
                                cliente.estado === "Inactivo" ? "secondary" : 
                                "outline"
                              }
                            >
                              {cliente.estado}
                            </Badge>
                            <span>•</span>
                            <span>{cliente.consultas} consultas</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Mail className="h-4 w-4" />
                          <span>{cliente.email}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Phone className="h-4 w-4" />
                          <span>{cliente.telefono}</span>
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
                              <DropdownMenuItem>Ver perfil</DropdownMenuItem>
                              <DropdownMenuItem>Agendar consulta</DropdownMenuItem>
                              <DropdownMenuItem>Enviar mensaje</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-600">Eliminar</DropdownMenuItem>
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
        </main>
      </div>
    </div>
  )
}
