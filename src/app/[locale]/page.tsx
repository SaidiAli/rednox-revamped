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
        {/* Benefits for customers */}
        <BenefitsTabs />
        {/* <CTASection /> */}
        <PressReleases />
      </main>
      <Footer />
    </div>
  )
}

// function IntroStatement() {
//   return (
//     <section className="py-20 bg-rBlue">
//       <div className="flex flex-col items-center justify-center gap-8">
//         <p className="text-white max-w-4xl mx-auto my-2 text-xl text-center relative z-10"><span className="font-bold text-primary">RedNOx</span> develops ultra-sensitive gas sensors for heavy-duty engines, generators, and agriculture—delivering real-time NOx and N₂O data to help customers comply with EPA/CARB standards and improve profitability.</p>
//         <div className="mb-8">
//           <Image src="/lonox.png" alt="Hero Image" width={800} height={800} className="rounded-2xl" />
//         </div>

//         <div>
//           <h4 className="text-white text-2xl font-bold mb-4">Trusted by Our Partners</h4>
//           <div className="flex flex-row gap-4 justify-center items-center">
//             <Image src="/cummins.png" alt="" width={150} height={150} />
//             {/* <Image src="/usda-no-bg.png" alt="" width={100} height={100} /> */}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
