"use client"

import HeroSection from "@/components/HeroSection"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhyCareSection from "@/components/WhyCareSection"
import SolutionsSection from "@/components/SolutionsSection"
import PressReleases from "@/components/PressReleases"
import SensorSpecifications from "@/components/sensor-specifications"
import { BenefitsTabs } from "@/components/benefits-tabs"
import IntroStatement from "@/components/intro-statement"

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
