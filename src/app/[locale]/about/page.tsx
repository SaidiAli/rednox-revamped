"use client"

import { BackgroundBeams } from "@/components/Background-beams";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Team from "@/components/team";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";
import { founders } from "@/lib/data";
import { useTranslations } from "next-intl";

export default function Agrinox() {
    const translateAbout = useTranslations("AboutRednox");
    const translateLeadership = useTranslations("Leadership");

    return (
        <div className="min-h-screen">
            <Navbar />

            <div className="w-full overflow-hidden">
                <div className="h-full py-12 md:py-20 w-full rounded-md bg-background relative flex flex-col items-center justify-center antialiased">
                    <div className="max-w-7xl mx-auto px-4 md:p-4">
                        <h1 className="relative z-10 text-3xl md:text-4xl lg:text-5xl bg-clip-text text-white text-center font-sans font-bold leading-tight">
                            {translateAbout("headline")}
                        </h1>
                        <p className="text-white max-w-lg mx-auto my-2 text-base mt-4 md:mt-6 text-center relative z-10 leading-relaxed">
                            {translateAbout("subheader")}
                        </p>
                    </div>

                    <BackgroundBeams />
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 md:py-20 shadow-lg grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 rounded-3xl group border border-transparent overflow-hidden transition duration-200">
                <div className="order-2 md:order-1 flex flex-col justify-center">
                    <div className="flex flex-col justify-start items-start gap-4 md:gap-6">
                        <div>
                            <SectionTitle title={translateAbout("whyRednox.title")} />
                            <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 md:mb-4 text-white leading-tight">{translateAbout("whyRednox.headline")}</p>
                            <p className="text-left text-sm md:text-base mt-2 text-white leading-relaxed">{translateAbout("whyRednox.subheader")}</p>
                        </div>
                    </div>
                </div>
                <div className="relative order-1 md:order-2">
                    <div className="relative aspect-[3/2] h-64 md:h-auto">
                        <Image
                            src="https://res.cloudinary.com/dvixlnczm/image/upload/v1757448486/image004_r5z8qu.png"
                            alt=""
                            fill
                            className="object-cover object-top rounded-lg md:rounded-tr-lg md:rounded-br-lg"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-background/60 md:from-background via-background/20 to-transparent rounded-lg md:rounded-tr-lg md:rounded-br-lg" />
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 md:py-20">
                <div className="mb-8 md:mb-12">
                    <SectionTitle title={translateAbout("founders.title")} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {founders(translateLeadership).map((member) => (
                        <Team key={member.id} id={member.id} name={member.name} email={member.email} bio={member.bio} position={member.position} image={member.image} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}
