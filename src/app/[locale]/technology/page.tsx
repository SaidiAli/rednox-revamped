"use client"

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";
import TechnologySection from "./table";

export default function Agrinox() {
    return (
        <div className="min-h-screen">
            <div className="w-full mb-20 bg-moody">
            <Navbar />
                <div className="container mx-auto rounded-2xl p-32 my-8">
                    <h1 className="text-center font-bold text-5xl max-w-2xl mx-auto">The Science behind RedNox Product</h1>
                    <p className="text-base max-w-lg mx-auto text-center mt-4">Learn about the sophisticated engineering and robust design that allows our sensors to provide unprecedented sub-ppm insight and enduring performance across diverse applications</p>
                </div>
            </div>
            <div className="container mx-auto pb-20">
                <Image src="/sensor_unit.png" alt="" width={800} height={800} className="transition duration-300 blur-0 rounded-2xl object-cover object-top mx-auto" priority />
            </div>
            <div className="container mx-auto flex flex-col items-center">
                <SectionTitle title="High performance Sensors" />
                <TechnologySection />
            </div>
            <Footer />
        </div>
    )
}
