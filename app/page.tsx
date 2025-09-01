import { HeroSection } from "@/components/hero-section"
import { ProductShowcase } from "@/components/product-showcase"
import { NutritionSection } from "@/components/nutrition-section"
import { JungleStorySection } from "@/components/jungle-story-section"
import { StudentLifeSection } from "@/components/student-life-section"
import { Footer } from "@/components/footer"
import { LoginModal } from "@/components/login-modal"
import { Utensils, Apple, BookOpen, Users } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-primary/20 shadow-xl rounded-b-2xl">
        <div className="max-w-7xl mx-auto px-8 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 jungle-gradient rounded-full shadow-lg animate-pulse border-2 border-secondary"></div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent drop-shadow">
              PANDICRUNCH
            </span>
          </div>
          {/* Menú para pantallas grandes */}
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-primary/80">
            <a href="#producto" className="hover:text-secondary hover:scale-105 transition-all duration-200 px-2 py-1 rounded-lg">
              Producto
            </a>
            <a href="#nutricion" className="hover:text-secondary hover:scale-105 transition-all duration-200 px-2 py-1 rounded-lg">
              Nutrición
            </a>
            <a href="#historia" className="hover:text-secondary hover:scale-105 transition-all duration-200 px-2 py-1 rounded-lg">
              Historia
            </a>
            <a href="#estudiantes" className="hover:text-secondary hover:scale-105 transition-all duration-200 px-2 py-1 rounded-lg">
              Estudiantes
            </a>
          </div>
          {/* Menú para pantallas pequeñas */}
          <div className="flex md:hidden items-center gap-4 text-primary">
            <a href="#producto" aria-label="Producto" className="p-2 rounded-full hover:bg-primary/10 transition">
              <Utensils className="w-6 h-6" />
            </a>
            <a href="#nutricion" aria-label="Nutrición" className="p-2 rounded-full hover:bg-primary/10 transition">
              <Apple className="w-6 h-6" />
            </a>
            <a href="#historia" aria-label="Historia" className="p-2 rounded-full hover:bg-primary/10 transition">
              <BookOpen className="w-6 h-6" />
            </a>
            <a href="#estudiantes" aria-label="Estudiantes" className="p-2 rounded-full hover:bg-primary/10 transition">
              <Users className="w-6 h-6" />
            </a>
          </div>
          <LoginModal />
        </div>
      </nav>

      <HeroSection />
      <ProductShowcase />
      <NutritionSection />
      <JungleStorySection />
      <StudentLifeSection />
      <Footer />
    </main>
  )
}
