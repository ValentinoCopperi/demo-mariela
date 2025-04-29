"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LeafIcon, Users, Calendar, BarChart3, Settings, LogOut, Menu, ChevronRight, TrendingUp, DollarSign, UserPlus, CalendarCheck } from 'lucide-react'

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  
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
            <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md bg-gray-100 text-gray-900">
              <BarChart3 className="h-5 w-5 text-gray-500" />
              Dashboard
            </Link>
            <Link href="/dashboard/clientes" className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900">
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
            <h1 className="text-xl font-semibold md:hidden">Dashboard</h1>
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
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="text-gray-600">Bienvenida, Ana. Aquí tienes un resumen de tu actividad.</p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Clientes Totales</p>
                    <p className="text-2xl font-bold">124</p>
                  </div>
                  <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-xs text-green-600">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  <span>8% más que el mes pasado</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Ingresos Mensuales</p>
                    <p className="text-2xl font-bold">$4,250</p>
                  </div>
                  <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <DollarSign className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-xs text-blue-600">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  <span>12% más que el mes pasado</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Nuevos Clientes</p>
                    <p className="text-2xl font-bold">18</p>
                  </div>
                  <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <UserPlus className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-xs text-purple-600">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  <span>5% más que el mes pasado</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Consultas Completadas</p>
                    <p className="text-2xl font-bold">87</p>
                  </div>
                  <div className="h-12 w-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <CalendarCheck className="h-6 w-6 text-amber-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-xs text-amber-600">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  <span>15% más que el mes pasado</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Tabs */}
          <Tabs defaultValue="proximas-citas">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="proximas-citas">Próximas Citas</TabsTrigger>
              <TabsTrigger value="pagos-pendientes">Pagos Pendientes</TabsTrigger>
            </TabsList>
            
            <TabsContent value="proximas-citas" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Próximas Citas</CardTitle>
                  <CardDescription>Tienes 5 citas programadas para los próximos días.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3, 4, 5].map((_, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="relative h-10 w-10 rounded-full overflow-hidden">
                            <Image 
                              src={`/placeholder.svg?height=40&width=40&text=${index + 1}`} 
                              alt="Cliente" 
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <p className="font-medium">Cliente {index + 1}</p>
                            <p className="text-xs text-gray-500">Primera consulta • 60 min</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">10:00 AM</p>
                          <p className="text-xs text-gray-500">15 Abril, 2025</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 text-center">
                    <Link href="/dashboard/consultas">
                      <Button variant="outline" className="text-green-500 border-green-500 hover:bg-green-50">
                        Ver todas las citas
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="pagos-pendientes" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Pagos Pendientes</CardTitle>
                  <CardDescription>Tienes 3 pagos pendientes por cobrar.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3].map((_, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="relative h-10 w-10 rounded-full overflow-hidden">
                            <Image 
                              src={`/placeholder.svg?height=40&width=40&text=${index + 1}`} 
                              alt="Cliente" 
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <p className="font-medium">Cliente {index + 1}</p>
                            <p className="text-xs text-gray-500">Consulta del {10 + index} de Abril, 2025</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-red-500">${50 + index * 15}</p>
                          <Button size="sm" className="mt-1 h-7 bg-green-500 hover:bg-green-600">Recordar</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 text-center">
                    <Link href="/dashboard/consultas?filter=pendientes">
                      <Button variant="outline" className="text-green-500 border-green-500 hover:bg-green-50">
                        Ver todos los pagos pendientes
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
