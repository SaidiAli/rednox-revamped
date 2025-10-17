import HeroSection from "@/components/HeroSection"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhyCareSection from "@/components/WhyCareSection"
import SolutionsSection from "@/components/SolutionsSection"
import PressReleases from "@/components/PressReleases"
import SensorSpecifications from "@/components/sensor-specifications"
import { BenefitsTabs } from "@/components/benefits-tabs"
import IntroStatement from "@/components/intro-statement"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Rednox Inc. | Ultra-Sensitive Emissions Sensors for Agriculture & Engines",
    description: "Cut emissions, reduce compliance costs, and unlock operational savings with Rednox's advanced NOx and N2O sensors for heavy-duty engines, gensets, and agriculture.",
}

export default function LandingPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <IntroStatement />
        <SensorSpecifications />
        <WhyCareSection />
        <SolutionsSection />
        <BenefitsTabs />
        {/* <CTASection /> */}
        <PressReleases />
      </main>
      <Footer />
    </div>
  )
}
