import type React from "react"
import "../globals.css"
import { Inter, Nunito_Sans, Exo } from "next/font/google"
import type { Metadata } from "next"
import { hasLocale, NextIntlClientProvider } from "next-intl"
import { routing } from '@/i18n/routing';
import { notFound } from "next/navigation"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] })
const nunito = Nunito_Sans({ subsets: ["latin"], variable: "--font-nunito" })
const exo = Exo({ subsets: ["latin"], variable: "--font-exo" })

export const metadata: Metadata = {
  title: "Rednox Inc.",
  description: "Ultra-Sensitive Emissions Sensors — Sub-ppm Insight in Real Time",
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body className={cn(nunito.className, exo.variable)}>
        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
