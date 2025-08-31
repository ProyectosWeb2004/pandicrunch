"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TreePine, Droplets, Sun, Leaf } from "lucide-react"
import Image from "next/image"

const storySteps = [
  {
    icon: TreePine,
    title: "Selección en la Selva",
    description:
      "Nuestros expertos recorren la Amazonía peruana seleccionando los mejores árboles de cashew, respetando el ecosistema y trabajando con comunidades locales.",
    image: "/amazon-rainforest-cashew-trees-with-workers.png",
  },
  {
    icon: Sun,
    title: "Secado Natural",
    description:
      "Los cashews se secan naturalmente bajo el sol amazónico, preservando todos sus nutrientes y desarrollando ese sabor único que caracteriza a PANDICRUNCH.",
    image: "/cashews-drying-naturally-in-amazon-sun.png",
  },
  {
    icon: Droplets,
    title: "Proceso Artesanal",
    description:
      "Cada lote es procesado artesanalmente por familias peruanas, manteniendo tradiciones ancestrales que garantizan la máxima calidad y frescura.",
    image: "/peruvian-families-processing-cashews-traditionally.png",
  },
  {
    icon: Leaf,
    title: "Empaque Sostenible",
    description:
      "Finalmente, empacamos cada porción en materiales 100% biodegradables, cuidando el planeta que nos da estos increíbles ingredientes.",
    image: "/eco-friendly-packaging-with-jungle-background.png",
  },
]

export function JungleStorySection() {
  return (
    <section id="historia" className="py-24 px-6 bg-gradient-to-b from-green-50/50 to-emerald-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-emerald-100 text-emerald-800 border-emerald-200 px-4 py-2 text-sm font-semibold">
            Del Corazón de la Amazonía
          </Badge>
          <h2 className="text-5xl md:text-6xl font-black text-primary mb-8 text-balance">
            La Historia Detrás de
            <span className="text-secondary block">Cada Crujido</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
            Desde las profundidades de la selva peruana hasta tu mesa, cada cashew de PANDICRUNCH lleva consigo una
            historia de tradición, sostenibilidad y amor por la naturaleza.
          </p>
        </div>

        <div className="space-y-16">
          {storySteps.map((step, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            >
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-2xl shadow-lg">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <Badge variant="outline" className="text-primary border-primary/30">
                    Paso {index + 1}
                  </Badge>
                </div>

                <h3 className="text-4xl font-bold text-primary mb-6">{step.title}</h3>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">{step.description}</p>

                <div className="flex flex-wrap gap-3">
                  {index === 0 && (
                    <>
                      <Badge variant="secondary">Comercio Justo</Badge>
                      <Badge variant="secondary">Comunidades Locales</Badge>
                      <Badge variant="secondary">Selección Premium</Badge>
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <Badge variant="secondary">100% Natural</Badge>
                      <Badge variant="secondary">Sin Químicos</Badge>
                      <Badge variant="secondary">Energía Solar</Badge>
                    </>
                  )}
                  {index === 2 && (
                    <>
                      <Badge variant="secondary">Tradición Ancestral</Badge>
                      <Badge variant="secondary">Calidad Artesanal</Badge>
                      <Badge variant="secondary">Familias Peruanas</Badge>
                    </>
                  )}
                  {index === 3 && (
                    <>
                      <Badge variant="secondary">Eco-Friendly</Badge>
                      <Badge variant="secondary">Biodegradable</Badge>
                      <Badge variant="secondary">Cero Residuos</Badge>
                    </>
                  )}
                </div>
              </div>

              <div className={`relative ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl scale-110"></div>
                <Card className="relative tropical-shadow border-0 bg-white/90 backdrop-blur-sm overflow-hidden">
                  <CardContent className="p-0">
                    <Image
                      src={step.image || "/placeholder.svg"}
                      alt={step.title}
                      width={500}
                      height={350}
                      className="w-full h-80 object-cover"
                    />
                    <div className="p-6 bg-gradient-to-t from-white to-transparent">
                      <p className="text-sm text-muted-foreground font-medium">{step.title} - Amazonía Peruana</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Stats */}
        <Card className="mt-20 bg-gradient-to-r from-emerald-600 to-green-600 text-white border-0 tropical-shadow">
          <CardContent className="p-12">
            <h3 className="text-4xl font-bold text-center mb-12">Nuestro Impacto en la Amazonía</h3>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl font-black mb-2">500+</div>
                <p className="text-white/90">Familias Beneficiadas</p>
              </div>
              <div>
                <div className="text-5xl font-black mb-2">1,200</div>
                <p className="text-white/90">Hectáreas Protegidas</p>
              </div>
              <div>
                <div className="text-5xl font-black mb-2">100%</div>
                <p className="text-white/90">Comercio Justo</p>
              </div>
              <div>
                <div className="text-5xl font-black mb-2">0</div>
                <p className="text-white/90">Químicos Artificiales</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
