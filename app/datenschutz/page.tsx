export const metadata = {
  title: "Datenschutz",
  description:
      "Datenschutzerklärung und Informationen zur Verarbeitung personenbezogener Daten auf der Website der Familie Sprick.",
}

import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Datenschutzerklärung</h1>
          <p className="text-slate-300 max-w-2xl">Informationen zum Schutz Ihrer personenbezogenen Daten</p>
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
              <h2 className="text-xl font-bold text-slate-900 mb-4">1. Datenschutz auf einen Blick</h2>

              <h3 className="font-semibold text-slate-900 mb-2">Allgemeine Hinweise</h3>
              <p className="text-slate-600 mb-4">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
                passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
                persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie
                unserer unter diesem Text aufgeführten Datenschutzerklärung.
              </p>

              <h3 className="font-semibold text-slate-900 mb-2">Datenerfassung auf unserer Website</h3>
              <p className="text-slate-600 mb-4">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</p>
              <p className="text-slate-600 mb-4">
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können
                Sie dem Impressum dieser Website entnehmen.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">2. Allgemeine Hinweise und Pflichtinformationen</h2>

              <h3 className="font-semibold text-slate-900 mb-2">Datenschutz</h3>
              <p className="text-slate-600 mb-4">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
                personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie
                dieser Datenschutzerklärung.
              </p>
              <p className="text-slate-600 mb-4">
                Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene
                Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende
                Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch,
                wie und zu welchem Zweck das geschieht.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">3. Datenerfassung auf unserer Website</h2>

              <h3 className="font-semibold text-slate-900 mb-2">Cookies</h3>
              <p className="text-slate-600 mb-4">
                Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen
                Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver
                und sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die
                Ihr Browser speichert.
              </p>
              <p className="text-slate-600 mb-4">
                Die meisten der von uns verwendeten Cookies sind so genannte "Session-Cookies". Sie werden nach Ende
                Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert bis Sie diese
                löschen. Diese Cookies ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">4. Kontaktformular</h2>
              <p className="text-slate-600 mb-4">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular
                inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall
                von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
              <p className="text-slate-600">
                Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt somit ausschließlich auf
                Grundlage Ihrer Einwilligung. Sie können diese Einwilligung jederzeit widerrufen. Dazu reicht eine
                formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
                Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
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
                    <a href="/impressum" className="hover:text-white transition-colors">
                      Impressum
                    </a>
                  </li>
                  <li>
                    <a href="/datenschutzhutz" className="hover:text-white transition-colors">
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

