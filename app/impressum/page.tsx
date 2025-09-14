export const metadata = {
  title: "Impressum",
  description: "Rechtliche Informationen und Angaben zum Betreiber der Website der Familie Sprick.",
}

import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Impressum</h1>
          <p className="text-slate-300 max-w-2xl">Gesetzliche Angaben gemäß § 5 TMG</p>
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

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <section className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Angaben gemäß § 5 TMG</h2>
              <p className="text-slate-600">
                Familie Sprick
                <br />
                Schuhstraße 21
                <br />
                32657 Lemgo
                <br />
                Deutschland
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Kontakt</h2>
              <p className="text-slate-600">
                Telefon: +49 (0) 5261 1839770
                <br />
                E-Mail: kontakt@sprick-world.com
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <p className="text-slate-600">
                Familie Sprick
                <br />
                Schuhstraße 21
                <br />
                32657 Lemgo
                <br />
                Deutschland
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Haftungsausschluss</h2>
              <h3 className="font-semibold text-slate-900 mb-2">Haftung für Inhalte</h3>
              <p className="text-slate-600 mb-4">
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit
                und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß
                § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§
                8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte
                fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                hinweisen.
              </p>

              <h3 className="font-semibold text-slate-900 mb-2">Haftung für Links</h3>
              <p className="text-slate-600 mb-4">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die
                verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
                Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">Urheberrecht</h2>
              <p className="text-slate-600">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
                Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
            </section>
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
                    <a href="/impressumssum" className="hover:text-white transition-colors">
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

