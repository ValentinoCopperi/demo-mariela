"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LeafIcon, ArrowLeft, Clock, CalendarIcon, CheckCircle, CreditCard, Banknote, Clock4 } from "lucide-react"

// Horarios disponibles simulados
const AVAILABLE_HOURS = ["09:00", "10:00", "11:00", "12:00", "16:00", "17:00", "18:00"]

// Días no disponibles simulados (fines de semana y algunos días específicos)
const isDateUnavailable = (date: Date) => {
  const day = date.getDay()
  // Fines de semana no disponibles
  if (day === 0 || day === 6) return true

  // Algunos días específicos no disponibles (ejemplo)
  const dateString = format(date, "yyyy-MM-dd")
  const unavailableDates = ["2025-03-28", "2025-03-29", "2025-04-02"]
  return unavailableDates.includes(dateString)
}

export default function AgendarCita() {
  const [step, setStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [selectedHour, setSelectedHour] = useState<string | undefined>(undefined)
  const [appointmentType, setAppointmentType] = useState("primera-consulta")
  const [isConfirmed, setIsConfirmed] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null)

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date)
    if (date) {
      setStep(2)
    }
  }

  const handleHourSelect = (hour: string) => {
    setSelectedHour(hour)
    setStep(3)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar los datos del formulario
    setIsConfirmed(true)
  }

  const handlePaymentSelect = (method: string) => {
    setPaymentMethod(method)

    // Simulación de procesamiento de pago
    if (method === "mercado-pago") {
      // Aquí iría la redirección a Mercado Pago o apertura de modal de pago
      alert("Redirigiendo a Mercado Pago para completar el pago...")
    } else if (method === "efectivo") {
      alert("Has seleccionado pago en efectivo. Por favor, realiza el pago en la consulta.")
    } else if (method === "mas-tarde") {
      alert("Has seleccionado pagar más tarde. Recibirás un correo con las instrucciones de pago.")
    }

    // Resetear el formulario o redirigir después de un tiempo
    setTimeout(() => {
      window.location.href = "/"
    }, 2000)
  }

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
            <Link href="/agendar-cita" className="text-sm font-medium text-green-500 transition-colors">
              Agendar Cita
            </Link>
            <Link href="/iniciar-sesion" className="text-sm font-medium hover:text-green-500 transition-colors">
              Iniciar Sesión
            </Link>
          </nav>
          <Link href="/registro">
            <Button className="bg-green-500 hover:bg-green-600">Registrarse</Button>
          </Link>
        </div>
      </header>

      <main className="w-full py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center gap-2 text-green-500 hover:text-green-600 mb-4">
              <ArrowLeft className="h-4 w-4" />
              <span>Volver al inicio</span>
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Agenda tu consulta</h1>
            <p className="text-gray-600">Selecciona la fecha y hora que mejor se adapte a tu disponibilidad.</p>
          </div>

          {isConfirmed ? (
            <div className="max-w-2xl mx-auto">
              <Card className="border-none shadow-lg">
                <CardContent className="pt-6 pb-6">
                  <div className="text-center space-y-4 mb-8">
                    <div className="flex justify-center">
                      <CheckCircle className="h-16 w-16 text-green-500" />
                    </div>
                    <h2 className="text-2xl font-bold">¡Cita confirmada con éxito!</h2>
                    <p className="text-gray-600">
                      Tu cita ha sido agendada para el{" "}
                      <span className="font-medium">
                        {selectedDate ? format(selectedDate, "EEEE d 'de' MMMM 'de' yyyy", { locale: es }) : ""} a las{" "}
                        {selectedHour} hrs
                      </span>
                    </p>
                    <p className="text-gray-600">
                      Hemos enviado un correo de confirmación con los detalles de tu cita.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-center">Selecciona tu método de pago</h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Button
                        variant="outline"
                        className="h-auto py-6 flex flex-col items-center gap-3 hover:border-green-500 hover:bg-green-50"
                        onClick={() => handlePaymentSelect("mercado-pago")}
                      >
                        <div className="rounded-full bg-green-100 p-3">
                          <CreditCard className="h-6 w-6 text-green-600" />
                        </div>
                        <div className="text-center">
                          <div className="font-medium">Mercado Pago</div>
                          <div className="text-xs text-gray-500">Pagar ahora online</div>
                        </div>
                      </Button>

                      <Button
                        variant="outline"
                        className="h-auto py-6 flex flex-col items-center gap-3 hover:border-green-500 hover:bg-green-50"
                        onClick={() => handlePaymentSelect("efectivo")}
                      >
                        <div className="rounded-full bg-green-100 p-3">
                          <Banknote className="h-6 w-6 text-green-600" />
                        </div>
                        <div className="text-center">
                          <div className="font-medium">Efectivo</div>
                          <div className="text-xs text-gray-500">Pagar en consulta</div>
                        </div>
                      </Button>

                      <Button
                        variant="outline"
                        className="h-auto py-6 flex flex-col items-center gap-3 hover:border-green-500 hover:bg-green-50"
                        onClick={() => handlePaymentSelect("mas-tarde")}
                      >
                        <div className="rounded-full bg-green-100 p-3">
                          <Clock4 className="h-6 w-6 text-green-600" />
                        </div>
                        <div className="text-center">
                          <div className="font-medium">Pagar más tarde</div>
                          <div className="text-xs text-gray-500">Recibir instrucciones</div>
                        </div>
                      </Button>
                    </div>

                    <div className="text-center text-sm text-gray-500 mt-6">
                      <p>Si tienes alguna pregunta, contáctanos al +34 123 456 789</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Sidebar con pasos */}
              <div className="lg:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle>Proceso de reserva</CardTitle>
                    <CardDescription>Completa estos pasos para agendar tu cita</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div
                        className={`rounded-full p-2 ${step >= 1 ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-400"}`}
                      >
                        <CalendarIcon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className={`font-medium ${step >= 1 ? "text-gray-900" : "text-gray-400"}`}>
                          Selecciona una fecha
                        </h3>
                        <p className="text-sm text-gray-500">Elige un día disponible en el calendario</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div
                        className={`rounded-full p-2 ${step >= 2 ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-400"}`}
                      >
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className={`font-medium ${step >= 2 ? "text-gray-900" : "text-gray-400"}`}>
                          Elige una hora
                        </h3>
                        <p className="text-sm text-gray-500">Selecciona el horario que prefieras</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div
                        className={`rounded-full p-2 ${step >= 3 ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-400"}`}
                      >
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          height="24"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                      </div>
                      <div>
                        <h3 className={`font-medium ${step >= 3 ? "text-gray-900" : "text-gray-400"}`}>
                          Completa tus datos
                        </h3>
                        <p className="text-sm text-gray-500">Información necesaria para tu consulta</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {selectedDate && selectedHour && (
                  <Card className="mt-6">
                    <CardHeader>
                      <CardTitle>Tu reserva</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CalendarIcon className="h-4 w-4 text-green-500" />
                        <span>
                          {selectedDate ? format(selectedDate, "EEEE d 'de' MMMM 'de' yyyy", { locale: es }) : ""}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-green-500" />
                        <span>{selectedHour} hrs</span>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Contenido principal */}
              <div className="lg:col-span-2">
                <Card>
                  <CardContent className="pt-6">
                    {step === 1 && (
                      <div className="space-y-4">
                        <h2 className="text-xl font-semibold">Selecciona una fecha</h2>
                        <div className="flex justify-center">
                          <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={handleDateSelect}
                            disabled={isDateUnavailable}
                            className="rounded-md border"
                            locale={es}
                            fromDate={new Date()}
                          />
                        </div>
                        <p className="text-sm text-gray-500 text-center">
                          Los días no disponibles aparecen en gris. Selecciona un día disponible para continuar.
                        </p>
                      </div>
                    )}

                    {step === 2 && selectedDate && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h2 className="text-xl font-semibold">Selecciona una hora</h2>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setStep(1)}
                            className="text-green-500 hover:text-green-600"
                          >
                            Cambiar fecha
                          </Button>
                        </div>
                        <p className="text-gray-600">
                          {format(selectedDate, "EEEE d 'de' MMMM 'de' yyyy", { locale: es })}
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
                          {AVAILABLE_HOURS.map((hour) => (
                            <Button
                              key={hour}
                              variant="outline"
                              className={`h-12 ${selectedHour === hour ? "border-green-500 bg-green-50 text-green-600" : ""}`}
                              onClick={() => handleHourSelect(hour)}
                            >
                              {hour}
                            </Button>
                          ))}
                        </div>
                      </div>
                    )}

                    {step === 3 && selectedDate && selectedHour && (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="flex items-center justify-between">
                          <h2 className="text-xl font-semibold">Completa tus datos</h2>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setStep(2)}
                            className="text-green-500 hover:text-green-600"
                          >
                            Cambiar hora
                          </Button>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="appointment-type">Tipo de consulta</Label>
                            <RadioGroup
                              id="appointment-type"
                              value={appointmentType}
                              onValueChange={setAppointmentType}
                              className="flex flex-col space-y-2 mt-2"
                            >
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="primera-consulta" id="primera-consulta" />
                                <Label htmlFor="primera-consulta">Primera consulta (60 min) - $80</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="seguimiento" id="seguimiento" />
                                <Label htmlFor="seguimiento">Consulta de seguimiento (30 min) - $50</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="nutricion-deportiva" id="nutricion-deportiva" />
                                <Label htmlFor="nutricion-deportiva">Nutrición deportiva (45 min) - $65</Label>
                              </div>
                            </RadioGroup>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="nombre">Nombre completo</Label>
                              <Input id="nombre" placeholder="Tu nombre y apellidos" required />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="email">Correo electrónico</Label>
                              <Input id="email" type="email" placeholder="tu@email.com" required />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="telefono">Teléfono</Label>
                              <Input id="telefono" placeholder="Tu número de teléfono" required />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="edad">Edad</Label>
                              <Input id="edad" type="number" placeholder="Tu edad" required />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="objetivo">Objetivo principal</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Selecciona tu objetivo principal" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="perdida-peso">Pérdida de peso</SelectItem>
                                <SelectItem value="ganancia-muscular">Ganancia muscular</SelectItem>
                                <SelectItem value="rendimiento-deportivo">Rendimiento deportivo</SelectItem>
                                <SelectItem value="salud-general">Mejorar salud general</SelectItem>
                                <SelectItem value="condicion-medica">Condición médica específica</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="comentarios">Comentarios adicionales</Label>
                            <Textarea
                              id="comentarios"
                              placeholder="Cuéntame más sobre tu situación actual, objetivos o cualquier información relevante para la consulta"
                              className="min-h-[100px]"
                            />
                          </div>
                        </div>

                        <Button type="submit" className="w-full bg-green-500 hover:bg-green-600">
                          Confirmar Cita
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
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

