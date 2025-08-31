"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Zap, Shield, Heart, Brain, MinusCircle as Muscle, Eye } from "lucide-react"

const nutritionFacts = [
  { nutrient: "Proteína", amount: "8g", percentage: 80, color: "bg-green-500" },
  { nutrient: "Fibra", amount: "4g", percentage: 65, color: "bg-emerald-500" },
  { nutrient: "Grasas Saludables", amount: "12g", percentage: 90, color: "bg-teal-500" },
  { nutrient: "Vitamina E", amount: "15mg", percentage: 75, color: "bg-green-600" },
  { nutrient: "Magnesio", amount: "120mg", percentage: 85, color: "bg-emerald-600" },
  { nutrient: "Zinc", amount: "2.5mg", percentage: 70, color: "bg-teal-600" },
]

const healthBenefits = [
  {
    icon: Brain,
    title: "Potencia Mental",
    description: "Los ácidos grasos omega-3 mejoran la concentración y memoria, perfectos para estudiantes.",
    color: "text-purple-600",
  },
  {
    icon: Muscle,
    title: "Energía Duradera",
    description: "Proteínas de alta calidad que mantienen tu energía estable durante todo el día.",
    color: "text-orange-600",
  },
  {
    icon: Heart,
    title: "Corazón Saludable",
    description: "Grasas monoinsaturadas que cuidan tu sistema cardiovascular naturalmente.",
    color: "text-red-500",
  },
  {
    icon: Eye,
    title: "Visión Clara",
    description: "Rico en antioxidantes que protegen tus ojos del estrés digital diario.",
    color: "text-blue-600",
  },
  {
    icon: Shield,
    title: "Sistema Inmune",
    description: "Vitaminas y minerales que fortalecen tus defensas naturales.",
    color: "text-green-600",
  },
  {
    icon: Zap,
    title: "Metabolismo Activo",
    description: "Nutrientes que aceleran tu metabolismo y te mantienen en forma.",
    color: "text-yellow-600",
  },
]

export function NutritionSection() {
  return (
    <section id="nutricion" className="py-24 px-6 bg-gradient-to-b from-white to-green-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-green-100 text-green-800 border-green-200 px-4 py-2 text-sm font-semibold">
            Nutrición Científicamente Comprobada
          </Badge>
          <h2 className="text-5xl md:text-6xl font-black text-primary mb-8 text-balance">
            Cada Bocado es
            <span className="text-secondary block">Pura Nutrición</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
            PANDICRUNCH no es solo delicioso, es una bomba nutricional diseñada por la naturaleza para alimentar tu
            cuerpo y mente con lo mejor de la selva amazónica.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Nutrition Facts */}
          <Card className="tropical-shadow border-0 bg-white/90 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold text-primary mb-8 text-center">
                Información Nutricional
                <span className="block text-lg font-normal text-muted-foreground mt-2">Por porción de 30g</span>
              </h3>
              <div className="space-y-6">
                {nutritionFacts.map((fact, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-primary">{fact.nutrient}</span>
                      <span className="font-bold text-secondary">{fact.amount}</span>
                    </div>
                    <div className="relative">
                      <Progress value={fact.percentage} className="h-3" />
                      <div
                        className={`absolute top-0 left-0 h-3 rounded-full ${fact.color} transition-all duration-1000`}
                        style={{ width: `${fact.percentage}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-muted-foreground text-right">{fact.percentage}% VD*</p>
                  </div>
                ))}
                <p className="text-xs text-muted-foreground mt-4 pt-4 border-t">
                  *Valores Diarios basados en una dieta de 2000 calorías
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Health Benefits */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-primary mb-8">Beneficios para tu Salud</h3>
            {healthBenefits.map((benefit, index) => (
              <Card
                key={index}
                className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg bg-white/80 backdrop-blur-sm transform hover:-translate-y-1"
              >
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-4 rounded-xl">
                    <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-primary mb-3 text-lg">{benefit.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-primary to-secondary text-white border-0 tropical-shadow">
          <CardContent className="p-12 text-center">
            <h3 className="text-4xl font-bold mb-6">¿Listo para Transformar tu Desayuno?</h3>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Únete a miles de estudiantes que ya descubrieron el poder nutricional de PANDICRUNCH
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                100% Natural
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                Sin Gluten
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                Rico en Proteína
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                Vegano
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
