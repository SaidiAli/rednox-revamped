"use client"

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Team from "@/components/team";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/ui/SectionTitle";
import { founders } from "@/lib/data";
import Image from "next/image";

export default function Agrinox() {
    return (
        <div className="min-h-screen">
            <div className="w-full mb-20 bg-moody">
                <Navbar />
                <div className="container mx-auto rounded-2xl p-32 my-8">
                    <h1 className="text-center font-bold text-5xl max-w-2xl mx-auto">Reducing NO<sub>x</sub>, CO<sub>2</sub> and N<sub>2</sub>O Emissions now</h1>
                    <p className="text-base max-w-lg mx-auto text-center mt-4">RedNOx is a company that creates GHG emissions sensors. It combines advanced ceramic engineering with high-precision instrumentation to make selective and sensitive NOx, CO2 and N2O measurement platform. It has started several verification programs in collaboration with top automotive and agriculture companies.</p>
                </div>
            </div>

            <div className="container mx-auto py-20 shadow-lg grid grid-cols-1 md:grid-cols-2 rounded-3xl group border border-transparent overflow-hidden transition duration-200">
                <div className="p-4 md:p-8 flex flex-col justify-between">
                    <div className="flex flex-col justify-between items-start gap-8">
                        <div>
                            <SectionTitle title="Why RedNox" />
                            <p className="text-lg md:text-4xl font-bold mb-4 text-white">Breakthrough NO<sub>x</sub> Technology</p>
                            <p className="text-left text-base mt-2 text-white">Our platform can measure NO<sub>x</sub> and N<sub>2</sub>O greenhouse gases at the parts-per-billion level. Our goal is to provide sensor platforms to clean energy and alternative fuel engines around the world as quickly as possible. We are developing these sensors for use in various mobility areas. Our LoNOxTM high-temperature ceramics and N2O technologies can potentially reduce emissions to levels set by the EPA and CARB, while also lowering costs for engine manufacturers and farmers.</p>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div className="relative aspect-[4/3] lg:aspect-[3/2]">
                        <Image
                            src="/image003.png"
                            alt=""
                            fill
                            className="object-cover object-center rounded-tr-lg rounded-br-lg"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/20 to-transparent rounded-tr-lg rounded-br-lg" />
                    </div>
                </div>
            </div>

            <div className="container mx-auto">
                <SectionTitle title="Founders" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[300px] h-[300px]">
                    {founders.map((member) => (
                        <Team id={member.id} name={member.name} email={member.email} bio={member.bio} position={member.position} image={member.image} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}
