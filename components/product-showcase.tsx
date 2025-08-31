"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Zap, Shield, Heart } from "lucide-react"
import Image from "next/image"

const benefits = [
  {
    icon: Leaf,
    title: "Ingredientes Naturales",
    description: "Cashews peruanos de la más alta calidad, cosechados de forma sostenible",
  },
  {
    icon: Zap,
    title: "Energía Natural",
    description: "Proteínas y vitaminas que te dan energía para todo el día",
  },
  {
    icon: Shield,
    title: "Sin Conservantes",
    description: "Libre de químicos artificiales, solo bondad natural",
  },
  {
    icon: Heart,
    title: "Saludable",
    description: "Rico en fibra, vitaminas y minerales esenciales",
  },
]

export function ProductShowcase() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Producto Premium</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">
            El Cereal que Revoluciona tu Desayuno
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Cada caja de PANDICRUNCH está llena de cashews crujientes y sabor auténtico que despertará todos tus
            sentidos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <div className="absolute inset-0 jungle-gradient rounded-3xl blur-3xl opacity-20 scale-110"></div>
            <Card className="relative tropical-shadow border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <Image
                  src="/images/cashews.png"
                  alt="Cashews Premium PANDICRUNCH"
                  width={500}
                  height={400}
                  className="w-full h-80 object-cover rounded-2xl mb-6"
                />
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-primary mb-2">Cashews Premium</h3>
                  <p className="text-muted-foreground">Seleccionados directamente de los árboles de la selva peruana</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="border-primary/20 hover:border-primary/40 transition-colors bg-white/60 backdrop-blur-sm"
              >
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">{benefit.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Educational Connection */}
        <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-primary mb-4">Educación y Nutrición</h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  PANDICRUNCH no solo alimenta el cuerpo, sino también la mente. Perfecto para estudiantes que buscan
                  una alimentación saludable que los ayude a rendir al máximo en sus estudios.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Rico en Omega-3</Badge>
                  <Badge variant="secondary">Proteína Vegetal</Badge>
                  <Badge variant="secondary">Vitaminas B</Badge>
                  <Badge variant="secondary">Minerales</Badge>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/students-reading.png"
                  alt="Estudiantes disfrutando PANDICRUNCH"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-2xl tropical-shadow"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
