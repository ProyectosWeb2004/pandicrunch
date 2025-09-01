import { HeroSection } from "@/components/hero-section"
import { ProductShowcase } from "@/components/product-showcase"
import { NutritionSection } from "@/components/nutrition-section"
import { JungleStorySection } from "@/components/jungle-story-section"
import { StudentLifeSection } from "@/components/student-life-section"
import { Footer } from "@/components/footer"
import { LoginModal } from "@/components/login-modal"
import { LogIn } from "lucide-react"

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
          {/* Solo icono en móvil, botón completo en desktop */}
          <div>
            <div className="md:hidden flex items-center">
              <button
                aria-label="Iniciar Sesión"
                onClick={() => {
                  const el = document.querySelector('[data-login-modal-trigger]');
                  if (el && typeof (el as HTMLButtonElement).click === "function") {
                    (el as HTMLButtonElement).click();
                  }
                }}
                className="p-2 rounded-full hover:bg-primary/10 transition"
              >
                <LogIn className="w-6 h-6 text-primary" />
              </button>
            </div>
            <div className="hidden md:block">
              <LoginModal />
            </div>
          </div>
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
