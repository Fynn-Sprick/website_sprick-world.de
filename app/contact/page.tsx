export const metadata = {
  title: "Kontakt",
  description: "Kontaktieren Sie die Familie Sprick aus Lemgo. Wir freuen uns auf Ihre Nachricht.",
}

import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Kontakt</h1>
          <p className="text-slate-300 max-w-2xl">
            Haben Sie Fragen oder möchten Sie mit uns in Kontakt treten? Wir freuen uns auf Ihre Nachricht.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <Button variant="ghost" className="mb-8" asChild>
          <a href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Zurück zur Startseite
          </a>
        </Button>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Schreiben Sie uns</h2>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Vorname</Label>
                  <Input id="firstName" placeholder="Ihr Vorname" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Nachname</Label>
                  <Input id="lastName" placeholder="Ihr Nachname" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-Mail</Label>
                <Input id="email" type="email" placeholder="ihre-email@beispiel.de" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Betreff</Label>
                <Input id="subject" placeholder="Worum geht es?" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Nachricht</Label>
                <Textarea id="message" placeholder="Ihre Nachricht an uns..." className="min-h-[150px]" />
              </div>

              <Button type="submit" className="w-full sm:w-auto">
                Nachricht senden
              </Button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Kontaktinformationen</h2>

            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-medium text-slate-900">E-Mail</h3>
                    <p className="text-slate-600">kontakt@sprick-world.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-medium text-slate-900">Telefon</h3>
                    <p className="text-slate-600">+49 (0) 5261 1839770</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-medium text-slate-900">Adresse</h3>
                    <p className="text-slate-600">
                      Schuhstraße 21
                      <br />
                      32657 Lemgo
                      <br />
                      Deutschland
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 mt-12">
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
                    <a href="/contacttact" className="hover:text-white transition-colors">
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

