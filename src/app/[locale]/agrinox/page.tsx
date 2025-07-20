"use client"

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SolutionHero from "@/components/SolutionsHero";
import SectionTitle from "@/components/ui/SectionTitle";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";

export default function Agrinox() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <SolutionHero title="AgriNOx – Precision N₂O Monitoring" image="/image004.png" description="Precision N₂O monitoring for agricultural equipment, ensuring compliance with Tier 4 Final rules and reducing fuel costs." />

            <div className="container mx-auto py-20">
                <div className="flex flex-col justify-start gap-4">
                    <SectionTitle title="Our Fix" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-moody p-8 rounded-2xl flex flex-row gap-4">
                            <Icon icon="lucide:check" width="48" height="48" className="text-primary p-1 rounded-full" />
                            <div>
                                <p className="text-white font-bold text-lg">Real-time in-situ N₂O ppm → kg N lost/ha algorithm.</p>
                            </div>
                        </div>
                        <div className="bg-moody p-8 rounded-2xl flex flex-row gap-4">
                            <Icon icon="lucide:check" width="48" height="48" className="text-primary p-1 rounded-full" />
                            <div>
                                <p className="text-white font-bold text-lg">Turns nitrogen savings into CARB LCFS or voluntary carbon credits.</p>
                            </div>
                        </div>
                        <div className="bg-moody p-8 rounded-2xl flex flex-row gap-4">
                            <Icon icon="lucide:check" width="48" height="48" className="text-primary p-1 rounded-full" />
                            <div>
                                <p className="text-white font-bold text-lg">Integrates with GPS-enabled spreaders</p>
                                <p className="text-white">Variable-rate prescriptions based on live soil plume.</p>
                            </div>
                        </div>
                        <div className="bg-moody p-8 rounded-2xl flex flex-row gap-4">
                            <Icon icon="lucide:check" width="48" height="48" className="text-primary p-1 rounded-full" />
                            <div>
                                <p className="text-white font-bold text-lg">Annual subscription (SaaS)</p>
                                <p className="text-white">Analytics, benchmarking, and automated credit registry filing.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Image src="/pilot.png" alt="" width={1000} height={1200} className="transition duration-300 blur-0 rounded-2xl object-cover object-top" priority />
                    <div className="px-4 md:px-16 flex flex-col justify-start gap-4">
                        <SectionTitle title="Pilot Workflow" />
                        <div className="flex flex-row items-center gap-2">
                            <Icon icon="mynaui:one-solid" width="50" height="50" className="text-white bg-primary p-2 rounded-full" />
                            <p className="text-left md:text-xl mt-2 text-white">Install probe & LoRa gateway in &lt; 30 min.</p>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                            <Icon icon="mynaui:two-solid" width="50" height="50" className="text-white bg-primary p-2 rounded-full" />
                            <p className="text-left text-base md:text-xl mt-2 text-white">Farm leverages live N₂O + weather to trim side-dress passes.</p>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                            <Icon icon="mynaui:three-solid" width="50" height="50" className="text-white bg-primary p-2 rounded-full" />
                            <p className="text-left text-base md:text-xl mt-2 text-white">Verified credit statement auto-generated at harvest.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}