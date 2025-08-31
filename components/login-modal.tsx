"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, Mail, Lock, LogIn } from "lucide-react"

export function LoginModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // TODO: Implement Firebase authentication
    setTimeout(() => {
      setIsLoading(false)
      setIsOpen(false)
    }, 1000)
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // TODO: Implement Firebase registration
    setTimeout(() => {
      setIsLoading(false)
      setIsOpen(false)
    }, 1000)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="bg-white/90 hover:bg-white border-primary text-primary hover:text-primary rounded-full shadow-md px-6 py-2"
        >
          <LogIn className="w-4 h-4 mr-2" />
          Iniciar Sesión
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-green-100 p-8">
        <DialogHeader>
          <DialogTitle className="text-center text-primary text-2xl font-bold mb-2 drop-shadow">
            Bienvenido a PANDICRUNCH
          </DialogTitle>
        </DialogHeader>
        <Tabs defaultValue="login" className="w-full mt-2">
          <TabsList className="grid w-full grid-cols-2 bg-green-50 rounded-lg mb-4 shadow">
            <TabsTrigger value="login" className="rounded-lg py-2 font-semibold data-[state=active]:bg-green-200 data-[state=active]:text-green-700 transition-colors">
              Iniciar Sesión
            </TabsTrigger>
            <TabsTrigger value="register" className="rounded-lg py-2 font-semibold data-[state=active]:bg-green-200 data-[state=active]:text-green-700 transition-colors">
              Registrarse
            </TabsTrigger>
          </TabsList>
          <TabsContent value="login" className="space-y-4">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="font-medium text-green-700">Correo Electrónico</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-green-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    className="pl-10 rounded-lg border-green-200 shadow focus:border-green-400 focus:ring-green-200"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="font-medium text-green-700">Contraseña</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-green-400" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="pl-10 rounded-lg border-green-200 shadow focus:border-green-400 focus:ring-green-200"
                    required
                  />
                </div>
              </div>
              <Button
                type="submit"
                className="w-full jungle-gradient rounded-full shadow-lg font-bold py-2"
                disabled={isLoading}
              >
                {isLoading ? "Iniciando..." : "Iniciar Sesión"}
              </Button>
            </form>
          </TabsContent>
          <TabsContent value="register" className="space-y-4">
            <form onSubmit={handleRegister} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="font-medium text-green-700">Nombre Completo</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-green-400" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="Tu nombre"
                    className="pl-10 rounded-lg border-green-200 shadow focus:border-green-400 focus:ring-green-200"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="register-email" className="font-medium text-green-700">Correo Electrónico</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-green-400" />
                  <Input
                    id="register-email"
                    type="email"
                    placeholder="tu@email.com"
                    className="pl-10 rounded-lg border-green-200 shadow focus:border-green-400 focus:ring-green-200"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="register-password" className="font-medium text-green-700">Contraseña</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-green-400" />
                  <Input
                    id="register-password"
                    type="password"
                    placeholder="••••••••"
                    className="pl-10 rounded-lg border-green-200 shadow focus:border-green-400 focus:ring-green-200"
                    required
                  />
                </div>
              </div>
              <Button
                type="submit"
                className="w-full jungle-gradient rounded-full shadow-lg font-bold py-2"
                disabled={isLoading}
              >
                {isLoading ? "Registrando..." : "Crear Cuenta"}
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
