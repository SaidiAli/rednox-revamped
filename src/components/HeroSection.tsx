"use client";
import React from "react";
import { BackgroundBeams } from "./Background-beams";
import { GlowingCard } from "./ui/glowing-card";
import { Check, Zap } from "lucide-react";
import { features } from "@/lib/data";
import { ContainerTextFlip } from "./ui/text-flip";
import { useTranslations } from "next-intl";

export default function HeroSection() {
    const t = useTranslations("HomePage")
    const flipWords = ["Agriculture", "HDE", "Gensets"]
    return (
        <section className="w-full overflow-hidden h-[100vh]">
            <div className="h-full py-20 w-full rounded-md bg-background relative flex flex-col items-center justify-center antialiased">
                <div className="max-w-7xl mx-auto p-4">
                    <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-white text-center font-sans font-bold mb-8">
                        {t("heroHeadline")} <ContainerTextFlip words={flipWords} />
                    </h1>
                    <p className="text-white max-w-lg mx-auto my-2 text-xl text-center relative z-10">
                        {t("heroDescription")}
                    </p>
                </div>

                {/* <GlowingCards /> */}

                <BackgroundBeams />
            </div>
        </section>
    )
}
