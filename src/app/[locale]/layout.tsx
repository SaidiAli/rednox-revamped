import type React from "react"
import "../globals.css"
import { Inter, Nunito_Sans } from "next/font/google"
import type { Metadata } from "next"
import { hasLocale, NextIntlClientProvider } from "next-intl"
import { routing } from '@/i18n/routing';
import { notFound } from "next/navigation"

const inter = Inter({ subsets: ["latin"] })
const nunito = Nunito_Sans({ subsets: ["latin"] })

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
      <body className={nunito.className}>
        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
