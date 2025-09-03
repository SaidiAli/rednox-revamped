"use client"

import { BackgroundBeams } from "@/components/Background-beams";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Team from "@/components/team";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/ui/SectionTitle";
import { founders } from "@/lib/data";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Agrinox() {
    const translateAbout = useTranslations("AboutRednox");
    const translateLeadership = useTranslations("Leadership");

    return (
        <div className="min-h-screen">
            <Navbar />

            <div className="w-full overflow-hidden">
                <div className="h-full py-20 w-full rounded-md bg-background relative flex flex-col items-center justify-center antialiased">
                    <div className="max-w-7xl mx-auto p-4">
                        <h1 className="relative z-10 text-lg md:text-4xl bg-clip-text text-white text-center font-sans font-bold">
                            {translateAbout("headline")}
                        </h1>
                        <p className="text-white max-w-lg mx-auto my-2 text-base mt-6 text-center relative z-10">
                            {translateAbout("subheader")}
                        </p>
                    </div>

                    <BackgroundBeams />
                </div>
            </div>

            <div className="container mx-auto py-20 shadow-lg grid grid-cols-1 md:grid-cols-2 rounded-3xl group border border-transparent overflow-hidden transition duration-200">
                <div className="p-4 md:p-8 flex flex-col justify-between">
                    <div className="flex flex-col justify-between items-start gap-8">
                        <div>
                            <SectionTitle title={translateAbout("whyRednox.title")} />
                            <p className="text-lg md:text-4xl font-bold mb-4 text-white">{translateAbout("whyRednox.headline")}</p>
                            <p className="text-left text-base mt-2 text-white">{translateAbout("whyRednox.subheader")}</p>
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
                <SectionTitle title={translateAbout("founders.title")} />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[300px] h-[300px]">
                    {founders(translateLeadership).map((member) => (
                        <Team key={member.id} id={member.id} name={member.name} email={member.email} bio={member.bio} position={member.position} image={member.image} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}
