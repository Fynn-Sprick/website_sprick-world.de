export const metadata = {
  title: "Über uns", // Wird zu "Über uns | Familie Sprick"
  description:
      "Lernen Sie die Familie Sprick aus Lemgo kennen - unsere Geschichte, Werte und was uns als Familie ausmacht.",
}

import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Über uns</h1>
          <p className="text-slate-300 max-w-2xl">
            Lernen Sie die Familie Sprick aus Lemgo kennen
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

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Unsere Geschichte</h2>
              <p className="text-slate-600 mb-4">
                Die Familie Sprick blickt auf eine lange Tradition in Lemgo zurück. Seit mehreren Generationen sind wir
                in dieser wunderschönen Stadt verwurzelt und haben ihre Entwicklung miterlebt und mitgestaltet.
              </p>
              <p className="text-slate-600">
                Was als kleine Familiengemeinschaft begann, hat sich über die Jahre zu einem weitverzweigten Netzwerk
                entwickelt. Wir pflegen unsere Familientraditionen und geben sie mit Stolz an die nächsten Generationen
                weiter.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Ferienhaus an der Nordsee</h2>
              <p className="text-slate-600 mb-4">
                Die Familie Sprick hat sich im Jahre 2021 dazu entschieden, ein Ferienhaus an der Nordsee zu kaufen. Dieses
                Haus dient uns als Rückzugsort und Ort der Erholung. Wir verbringen hier gerne unsere freien Tage und
                genießen die frische Seeluft.
              </p>
              <p className="text-slate-600">
                Nach den Umbaumasnahmen im Jahr 2022 ist das Ferienhaus nun bereit für die nächsten Generationen. Wir
                freuen uns darauf, viele schöne Momente in unserem Ferienhaus zu verbringen. Sie können das Ferienhaus auch mieten
                und einen unvergesslichen Urlaub an der Nordsee erleben. Website: <a href="https://friesenhaus1822.de" className="text-blue-600 hover:underline">https://friesenhaus1822.de</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Unsere Werte</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-lg mb-2 text-slate-900">Zusammenhalt</h3>
                  <p className="text-slate-600">
                    Für uns steht der familiäre Zusammenhalt an erster Stelle. Wir unterstützen einander in allen
                    Lebenslagen.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-lg mb-2 text-slate-900">Gemeinschaft</h3>
                  <p className="text-slate-600">
                    Als Teil der Gemeinschaft in Lemgo engagieren wir uns aktiv für unsere Stadt und ihre Menschen.
                  </p>
                </div>
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-4 text-slate-900">Familienchronik</h3>
              <ul className="space-y-4">
                <li className="border-l-2 border-blue-500 pl-4 py-1">
                  <span className="text-sm text-slate-500">2018</span>
                  <p className="text-slate-700">Umzug nach Lemgo</p>
                </li>
                <li className="border-l-2 border-blue-500 pl-4 py-1">
                  <span className="text-sm text-slate-500">2021</span>
                  <p className="text-slate-700">Ferienhaus kauf an der Nordsee</p>
                </li>
                <li className="border-l-2 border-blue-500 pl-4 py-1">
                  <span className="text-sm text-slate-500">2025</span>
                  <p className="text-slate-700">Neugestaltung der Familien-Website</p>
                </li>
              </ul>
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
                    <a href="/aboutbout" className="hover:text-white transition-colors">
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

