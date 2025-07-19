import type React from "react"
import "./globals.css"
import { Inter, Nunito_Sans } from "next/font/google"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })
const nunito = Nunito_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rednox Inc.",
  description: "Ultra-Sensitive Emissions Sensors — Sub-ppm Insight in Real Time",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        {children}
      </body>
    </html>
  )
}
