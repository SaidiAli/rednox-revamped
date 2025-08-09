"use client";
import React from "react";
import { BackgroundBeams } from "./Background-beams";
import { ChevronRight, Download } from "lucide-react";
import { ContainerTextFlip } from "./ui/text-flip";
import { useTranslations } from "next-intl";
import { Button } from "./ui/button";

export default function HeroSection() {
    const t = useTranslations("HomePage")
    const flipWords = ["Agriculture", "HDE", "Gensets"]
    return (
        <section className="w-full overflow-hidden h-[100vh]">
            <div className="h-full py-20 w-full rounded-md bg-background relative flex flex-col items-center justify-center antialiased">
                <div className="max-w-7xl mx-auto p-4 flex flex-col items-center justify-center gap-8">
                    <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-white text-center font-sans font-bold mb-8">
                        {t("heroHeadline")} <ContainerTextFlip words={flipWords} />
                    </h1>
                    <p className="text-white max-w-lg mx-auto my-2 text-xl text-center relative z-10">
                        {t("heroDescription")}
                    </p>

                    <div className="flex gap-4">
                        <Button className="bg-primary text-white w-64 hover:scale-105 transition duration-200 cursor-pointer">{t("whyYouShouldCare.scheduleButton")}<ChevronRight className="ml-1 size-4" /></Button>
                        <Button className="bg-primary text-white w-64 hover:scale-105 transition duration-200 cursor-pointer">{t("whyYouShouldCare.downloadButton")}<Download className="ml-1 size-4" /></Button>
                    </div>
                </div>
                <BackgroundBeams />
            </div>
        </section>
    )
}
