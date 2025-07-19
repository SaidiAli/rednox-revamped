"use client"

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SolutionHero from "@/components/SolutionsHero";
import SpecsTable from "@/components/SpecsTable";
import SectionTitle from "@/components/ui/SectionTitle";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Gensets() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <SolutionHero title="Gensets & Prime power" image="/image003.png" description="For stationary engines, continuous compliance and operational efficiency are paramount. RedNOx offers advanced sensing solutions for Gensets & Prime Power, designed to provide accurate, real-time NOx emission data. Our sensors help avoid costly shutdowns under Tier 4 Final rules by providing detection within a <10 ppm range. With plug-and-play integration into SCADA panels via Modbus-TCP and remote telemetry for proactive self-diagnostics, RedNOx ensures your operations remain compliant and optimized, even in remote locations." />

            <div className="container mx-auto">
                <div className="flex flex-row justify-center gap-8 py-20 w-full">
                    <p className="flex flex-row gap-2"><span className="font-bold"><Icon icon="lucide:check" width="24" height="24" className="text-white bg-primary p-1 rounded-full" /></span>24/7 compliance audits </p>
                    <p className="flex flex-row gap-2"><span className="font-bold"><Icon icon="lucide:check" width="24" height="24" className="text-white bg-primary p-1 rounded-full" /></span>Remote locations</p>
                    <p className="flex flex-row gap-2"><span className="font-bold"><Icon icon="lucide:check" width="24" height="24" className="text-white bg-primary p-1 rounded-full" /></span>Fuel cost is &gt; 70 % OPEX</p>
                </div>
            </div>

            <div className="container mx-auto py-20">
                <div className="flex flex-col justify-start gap-4">
                    <SectionTitle title="Our Fix" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-moody p-8 rounded-2xl flex flex-row gap-4">
                            <Icon icon="arcticons:vibrationstest" width="48" height="48" className="text-white bg-primary p-1 rounded-full" />
                            <div>
                                <p className="text-white font-bold text-lg">1 – 20 ppm detection with ±10 % error</p>
                                <p className="text-white text-sm">This keeps you inside warranty margins.</p>
                            </div>
                        </div>
                        <div className="bg-moody p-8 rounded-2xl flex flex-row gap-4">
                            <Icon icon="arcticons:atmospherelogger" width="48" height="48" className="text-white bg-primary p-1 rounded-full" />
                            <div>
                                <p className="text-white font-bold text-lg">Plug-and-play ECU interface.</p>
                                <p className="text-white">One harness, two CAN frames per second.</p>
                            </div>
                        </div>
                        <div className="bg-moody p-8 rounded-2xl flex flex-row gap-4">
                            <Icon icon="arcticons:tempmonitor" width="48" height="48" className="text-white bg-primary p-1 rounded-full" />
                            <div>
                                <p className="text-white font-bold text-lg">Heater-optimised ceramic stack</p>
                                <p className="text-white">That reaches temperature in &lt; 30 s — meets cold-start FTP.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto py-20">
                <SectionTitle title="Key Specifications" />
                <SpecsTable />
            </div>
            <Footer />
        </div>
    )
}