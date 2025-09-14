import type React from "react"
import { Home, Users, Mail, MapPin, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="text-xl font-semibold text-slate-900">
              Familie Sprick
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink href="/" icon={<Home className="w-4 h-4" />}>
                Home
              </NavLink>
              <NavLink href="/about" icon={<Users className="w-4 h-4" />}>
                Über uns
              </NavLink>
              <NavLink href="/contact" icon={<Mail className="w-4 h-4" />}>
                Kontakt
              </NavLink>
            </div>

            {/* Mobile Navigation */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-6">
                  <MobileNavLink href="/" icon={<Home className="w-4 h-4" />}>
                    Home
                  </MobileNavLink>
                  <MobileNavLink href="/about" icon={<Users className="w-4 h-4" />}>
                    Über uns
                  </MobileNavLink>
                  <MobileNavLink href="/contact" icon={<Mail className="w-4 h-4" />}>
                    Kontakt
                  </MobileNavLink>
                  <MobileNavLink href="/location" icon={<MapPin className="w-4 h-4" />}>
                    Standort
                  </MobileNavLink>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="relative z-10 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Willkommen bei Familie Sprick</h1>
            <p className="text-lg text-slate-600 mb-8">
              Herzlich Willkommen auf der Homepage der Familie Sprick aus Lemgo.
            </p>
            <Button size="lg">Mehr über uns</Button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 aspect-square opacity-10">
          <div className="w-full h-full bg-gradient-to-br from-blue-600 to-green-400 rounded-full blur-3xl" />
        </div>
        <div className="absolute left-0 bottom-0 w-1/4 aspect-square opacity-10">
          <div className="w-full h-full bg-gradient-to-tr from-green-400 to-blue-600 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Unsere Geschichte</h2>
              <p className="text-slate-600">
                Als Familie mit tiefen Wurzeln in Lemgo sind wir fest mit unserer Region verbunden.
              </p>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <img
                src="/DJI_0507.JPG?height=400&width=600"
                alt="Familie Sprick"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Familie Sprick</h3>
              <p className="text-slate-400">Lemgo, Deutschland</p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-white font-semibold mb-4">Navigation</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="/" className="hover:text-white transition-colors">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="hover:text-white transition-colors">
                      Über uns
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="hover:text-white transition-colors">
                      Kontakt
                    </a>
                  </li>

                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Rechtliches</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="/impressum" className="hover:text-white transition-colors">
                      Impressum
                    </a>
                  </li>
                  <li>
                    <a href="/datenschutz" className="hover:text-white transition-colors">
                      Datenschutz
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; {new Date().getFullYear()} Familie Sprick. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Navigation Link Components
function NavLink({ href, children, icon }: { href: string; children: React.ReactNode; icon: React.ReactNode }) {
  return (
    <a href={href} className="flex items-center space-x-2 text-slate-600 hover:text-slate-900 transition-colors">
      {icon}
      <span>{children}</span>
    </a>
  )
}

function MobileNavLink({ href, children, icon }: { href: string; children: React.ReactNode; icon: React.ReactNode }) {
  return (
    <a href={href} className="flex items-center space-x-2 text-slate-600 hover:text-slate-900 transition-colors p-2">
      {icon}
      <span>{children}</span>
    </a>
  )
}

