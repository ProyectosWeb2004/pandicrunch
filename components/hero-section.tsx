"use client"

import { Button } from "@/components/ui/button"
import { Leaf, Sparkles, Heart, ArrowDown } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900"></div>
        <div className="absolute inset-0 bg-[url('/lush-tropical-jungle-canopy-with-sunlight-filterin.png')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/10 to-transparent"></div>
      </div>

      <div className="absolute top-20 left-10 animate-float">
        <Leaf className="w-16 h-16 text-secondary opacity-70 animate-leaf-sway drop-shadow-lg" />
      </div>
      <div className="absolute top-32 right-16 animate-float" style={{ animationDelay: "1s" }}>
        <Sparkles className="w-12 h-12 text-accent opacity-80 drop-shadow-lg" />
      </div>
      <div className="absolute bottom-40 left-16 animate-bounce-gentle">
        <Heart className="w-14 h-14 text-secondary opacity-60 drop-shadow-lg" />
      </div>
      <div className="absolute top-1/3 right-1/4 animate-float" style={{ animationDelay: "2.5s" }}>
        <div className="w-8 h-8 bg-accent/60 rounded-full blur-sm animate-pulse"></div>
      </div>
      <div className="absolute bottom-1/3 left-1/3 animate-bounce-gentle" style={{ animationDelay: "1.8s" }}>
        <div className="w-6 h-6 bg-secondary/50 rounded-full blur-sm"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
        {/* Imagen más cerca del título */}
        <div className="mb-4 animate-bounce-gentle">
          <div className="relative">
            <div className="absolute inset-0 bg-secondary/20 rounded-full blur-3xl scale-150"></div>
            <Image
              src="/images/0.png"
              alt="PANDICRUNCH Cashew Mascots - Consume PandiCrunch La Nueva Era del Sabor"
              width={0}
              height={0}
              sizes="100vw"
              className="relative mx-auto mb-4 w-auto max-w-md drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
        {/* Fin imagen cashews */}

        <div className="space-y-4 mb-8">
          <h1 className="text-7xl md:text-9xl font-black text-white mb-4 text-balance drop-shadow-2xl">
            PANDI
            <span className="text-secondary animate-pulse">CRUNCH</span>
          </h1>

          <div className="space-y-4">
            <p className="text-3xl md:text-4xl text-white font-bold text-balance drop-shadow-lg">
              ¡El Crujido Mágico de la Selva Peruana!
            </p>

            <p className="text-xl md:text-2xl text-white/90 font-medium text-balance max-w-4xl mx-auto">
              Despierta tus sentidos con cada bocado lleno de aventura
            </p>

            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto text-pretty leading-relaxed">
              Descubre el sabor auténtico de la Amazonía peruana en cada crujiente cashew. PANDICRUNCH combina la
              riqueza natural de la selva con el crujido perfecto que revolucionará tu desayuno para siempre.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-primary font-bold px-12 py-6 text-xl tropical-shadow transform hover:scale-105 transition-all duration-300"
          >
            <Sparkles className="w-6 h-6 mr-3" />
            ¡Prueba la Magia!
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-white/95 hover:bg-white border-3 border-white text-primary font-bold px-12 py-6 text-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <Leaf className="w-6 h-6 mr-3" />
            Ingredientes Naturales
          </Button>
        </div>

        <div className="animate-bounce">
          <ArrowDown className="w-8 h-8 text-white/70 mx-auto" />
          <p className="text-white/60 text-sm mt-2">Descubre más</p>
        </div>
      </div>

      <div className="absolute bottom-20 left-1/4 animate-bounce-gentle" style={{ animationDelay: "0.5s" }}>
        <div className="w-6 h-6 bg-secondary rounded-full opacity-80 shadow-lg"></div>
      </div>
      <div className="absolute bottom-32 right-1/3 animate-float" style={{ animationDelay: "1.5s" }}>
        <div className="w-4 h-4 bg-accent rounded-full opacity-70 shadow-lg"></div>
      </div>
      <div className="absolute bottom-16 right-1/4 animate-bounce-gentle" style={{ animationDelay: "2s" }}>
        <div className="w-8 h-8 bg-secondary rounded-full opacity-60 shadow-lg"></div>
      </div>
      <div className="absolute bottom-28 left-1/6 animate-float" style={{ animationDelay: "3s" }}>
        <div className="w-5 h-5 bg-accent rounded-full opacity-50 shadow-lg"></div>
      </div>
    </section>
  )
}

