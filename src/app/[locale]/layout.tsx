import type React from "react"
import "../globals.css"
import { Nunito_Sans, Exo } from "next/font/google"
import type { Metadata } from "next"
import { hasLocale, NextIntlClientProvider } from "next-intl"
import { routing } from '@/i18n/routing';
import { notFound } from "next/navigation"
import { cn } from "@/lib/utils"
import { Analytics } from "@vercel/analytics/next"

const nunito = Nunito_Sans({ subsets: ["latin"], variable: "--font-nunito" })
const exo = Exo({ subsets: ["latin"], variable: "--font-exo" })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rednoxinc.com"),
  title: {
    default: "Rednox Inc. | Ultra-Sensitive Emissions Sensors",
    template: "%s | Rednox Inc.",
  },
  description: "Rednox develops ultra-sensitive NOx and N2O gas sensors for heavy-duty engines, generators, and agriculture to meet EPA/CARB standards and improve profitability.",
  keywords: ["NOx sensor", "N2O sensor", "emissions monitoring", "EPA compliance", "CARB standards", "heavy-duty engines", "gensets", "agrinox", "agricultural emissions"],
  openGraph: {
    title: "Rednox Inc. | Ultra-Sensitive Emissions Sensors",
    description: "Cutting-edge sensor technology for emissions reduction in transportation and agriculture.",
    url: "https://www.rednoxinc.com",
    siteName: "Rednox Inc.",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rednox Inc. | Ultra-Sensitive Emissions Sensors',
    description: 'Rednox develops ultra-sensitive NOx and N2O gas sensors to help industries meet strict emissions standards.',
    creator: '@RedNOxInc', 
    images: ['/og-image.png'],
  },
};

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
        <Analytics />
      </body>
    </html>
  )
}
