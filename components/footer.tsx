import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="jungle-gradient text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4">PANDICRUNCH</h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              El cereal que conecta la sabiduría ancestral de la selva peruana con la nutrición moderna. Cada bocado es
              una aventura de sabor y salud.
            </p>
            <div className="flex gap-4">
              <Button size="icon" variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20">
                <Youtube className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Productos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Nutrición
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Sostenibilidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-white/80">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm">info@pandicrunch.pe</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+51 1 234 5678</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Lima, Perú</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
          <p>&copy; 2024 PANDICRUNCH. Todos los derechos reservados. Proyecto Escolar.</p>
        </div>
      </div>
    </footer>
  )
}
