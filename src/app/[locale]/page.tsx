"use client"

import HeroSection from "@/components/HeroSection"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhyCareSection from "@/components/WhyCareSection"
import CTASection from "@/components/CTASection"
import SolutionsSection from "@/components/SolutionsSection"
import PressReleases from "@/components/PressReleases"
import SensorSpecifications from "@/components/sensor-specifications"
import Image from "next/image"

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
        {/* <CTASection /> */}
        <PressReleases />
      </main>
      <Footer />
    </div>
  )
}

function IntroStatement() {
  return (
    <section className="py-20 bg-primary">
      <div className="flex flex-col items-center justify-center gap-8">
        <p className="text-white max-w-4xl mx-auto my-2 text-xl text-center relative z-10">RedNOx develops ultra-sensitive gas sensors for heavy-duty engines, generators, and agriculture—delivering real-time NOx and N₂O data to help customers comply with EPA/CARB standards and improve profitability.</p>
        <div>
          <Image src="/lonox.png" alt="Hero Image" width={1000} height={1000} className="rounded-2xl" />
        </div>
      </div>
    </section>
  )
}
