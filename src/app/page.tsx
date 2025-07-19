"use client"

import HeroSection from "@/components/HeroSection"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhyCareSection from "@/components/WhyCareSection"
import CTASection from "@/components/CTASection"
import SolutionsSection from "@/components/SolutionsSection"
import PressReleases from "@/components/PressReleases"

export default function LandingPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <WhyCareSection />
        <SolutionsSection />
        {/* <CTASection /> */}
        <PressReleases />
      </main>
      <Footer />
    </div>
  )
}
