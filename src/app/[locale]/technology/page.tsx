"use client"

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";
import TechnologySection from "./table";
import PageHero from "@/components/page-hero";

export default function Technology() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen">
                <PageHero title="The Science behind RedNox Product" subTitle="Learn about the sophisticated engineering and robust design that allows our sensors to provide unprecedented sub-ppm insight and enduring performance across diverse applications" />

                <div className="container mx-auto pb-20">
                    <Image src="/sensor_unit.png" alt="" width={800} height={800} className="transition duration-300 blur-0 rounded-2xl object-cover object-top mx-auto" priority />
                </div>
                <div className="container mx-auto flex flex-col items-center">
                    <SectionTitle title="High performance Sensors" />
                    <TechnologySection />
                </div>
                <Footer />
            </div>
        </>
    )
}
