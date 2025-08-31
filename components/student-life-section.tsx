"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Clock, Trophy, Users, Star, Zap } from "lucide-react"
import Image from "next/image"

const studentBenefits = [
  {
    icon: BookOpen,
    title: "Mejor Concentración",
    description: "Los omega-3 y vitaminas B mejoran tu capacidad de concentración durante largas sesiones de estudio.",
    stat: "85% mejor enfoque",
  },
  {
    icon: Clock,
    title: "Energía Sostenida",
    description: "Proteínas de liberación lenta que mantienen tu energía estable durante todo el día académico.",
    stat: "6+ horas de energía",
  },
  {
    icon: Trophy,
    title: "Rendimiento Académico",
    description: "Estudiantes que consumen PANDICRUNCH reportan mejores calificaciones y mayor productividad.",
    stat: "92% mejores notas",
  },
  {
    icon: Users,
    title: "Vida Social Activa",
    description: "La energía natural te permite participar más en actividades extracurriculares y sociales.",
    stat: "3x más actividades",
  },
]

const testimonialStats = [
  { number: "15,000+", label: "Estudiantes Satisfechos" },
  { number: "98%", label: "Recomendarían PANDICRUNCH" },
  { number: "4.9/5", label: "Calificación Promedio" },
  { number: "89%", label: "Mejora en Concentración" },
]

export function StudentLifeSection() {
  return (
    <section id="estudiantes" className="py-24 px-6 bg-gradient-to-b from-emerald-50/30 to-blue-50/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200 px-4 py-2 text-sm font-semibold">
            El Combustible de los Estudiantes Exitosos
          </Badge>
          <h2 className="text-5xl md:text-6xl font-black text-primary mb-8 text-balance">
            Potencia tu
            <span className="text-secondary block">Vida Estudiantil</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
            Miles de estudiantes ya descubrieron el secreto para mantener la energía, concentración y rendimiento
            académico al máximo nivel con PANDICRUNCH.
          </p>
        </div>

        {/* Hero Image with Students */}
        <div className="mb-20">
          <Card className="tropical-shadow border-0 bg-white/90 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-0 relative">
              <Image
                src="/images/students-uniform.png"
                alt="Estudiantes disfrutando PANDICRUNCH"
                width={1200}
                height={600}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-3xl font-bold mb-4">"PANDICRUNCH cambió mi rutina de estudio"</h3>
                <p className="text-lg text-white/90 max-w-2xl">
                  Desde que incluí PANDICRUNCH en mi desayuno, mi concentración mejoró notablemente y puedo estudiar por
                  más tiempo sin sentirme cansado.
                </p>
                <div className="flex items-center gap-2 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 font-semibold">María González, Estudiante de Medicina</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Student Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {studentBenefits.map((benefit, index) => (
            <Card
              key={index}
              className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl bg-white/80 backdrop-blur-sm transform hover:-translate-y-2"
            >
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-4 rounded-2xl w-fit mx-auto mb-6">
                  <benefit.icon className="w-10 h-10 text-primary" />
                </div>
                <h4 className="font-bold text-primary mb-4 text-xl">{benefit.title}</h4>
                <p className="text-muted-foreground leading-relaxed mb-4 text-sm">{benefit.description}</p>
                <Badge variant="secondary" className="bg-secondary/20 text-secondary font-bold">
                  {benefit.stat}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Study Routine Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-4xl font-bold text-primary mb-8">La Rutina Perfecta del Estudiante Exitoso</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Desayuno Energético (7:00 AM)</h4>
                  <p className="text-muted-foreground">
                    Comienza tu día con un tazón de PANDICRUNCH y leche. Los nutrientes se absorben mejor en ayunas.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Sesión de Estudio Intensiva (8:00-12:00)</h4>
                  <p className="text-muted-foreground">
                    Aprovecha el pico de concentración que proporciona PANDICRUNCH para tus materias más difíciles.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Snack Inteligente (3:00 PM)</h4>
                  <p className="text-muted-foreground">
                    Un puñado de PANDICRUNCH como snack mantiene tu energía para las clases de la tarde.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Repaso Nocturno (7:00-9:00 PM)</h4>
                  <p className="text-muted-foreground">
                    Los nutrientes de PANDICRUNCH siguen trabajando, mejorando tu memoria a largo plazo.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Card className="tropical-shadow border-0 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-8">
              <Image
                src="/images/students-reading.png"
                alt="Estudiantes estudiando con PANDICRUNCH"
                width={500}
                height={400}
                className="w-full h-80 object-cover rounded-2xl mb-6"
              />
              <div className="text-center">
                <h4 className="text-2xl font-bold text-primary mb-4">¡Únete a la Revolución Estudiantil!</h4>
                <p className="text-muted-foreground mb-6">
                  Descubre por qué PANDICRUNCH es el desayuno favorito de los estudiantes más exitosos.
                </p>
                <Button className="bg-secondary hover:bg-secondary/90 text-primary font-bold px-8 py-3">
                  <Zap className="w-5 h-5 mr-2" />
                  Potencia tu Estudio
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Statistics */}
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 tropical-shadow">
          <CardContent className="p-12">
            <h3 className="text-4xl font-bold text-center mb-12">Los Números Hablan por Sí Solos</h3>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {testimonialStats.map((stat, index) => (
                <div key={index}>
                  <div className="text-5xl font-black mb-2">{stat.number}</div>
                  <p className="text-white/90 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Basado en una encuesta a 15,000 estudiantes universitarios que consumen PANDICRUNCH regularmente durante
                6 meses.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
