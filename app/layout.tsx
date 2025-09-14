import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Familie Sprick | Lemgo",
    template: "Familie Sprick | %s ",
  },
  description: "Willkommen auf der Website der Familie Sprick aus Lemgo",
  keywords: ["Familie Sprick", "Lemgo", "Familienwebsite"],
  authors: [{ name: "Familie Sprick" }],
  creator: "Familie Sprick",
  metadataBase: new URL("https://sprick-world.com"),
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://sprick-world.com",
    title: "Familie Sprick | Lemgo",
    description: "Willkommen auf der Website der Familie Sprick aus Lemgo",
    siteName: "Familie Sprick",
  },
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="de">
      <body className={inter.className}>{children}</body>
      </html>
  )
}

