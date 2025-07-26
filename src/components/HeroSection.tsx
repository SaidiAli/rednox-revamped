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
        <section className="w-full overflow-hidden">
            <div className="h-full py-20 w-full rounded-md bg-background relative flex flex-col items-center justify-center antialiased">
                <div className="max-w-7xl mx-auto p-4">
                    <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-white text-center font-sans font-bold">
                        {t("heroHeadline")} <ContainerTextFlip words={flipWords} />
                    </h1>
                    <p className="text-white max-w-lg mx-auto my-2 text-xl mt-6 text-center relative z-10">
                        {t("heroDescription")}
                    </p>
                </div>

                <div className="w-full flex items-center justify-center gap-8 mt-20">
                    <GlowingCard className="w-[500px]">
                        <div className="border-[0.75px] relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
                            <div className="relative flex flex-1 flex-col justify-between gap-3">
                                <div className="space-y-8">
                                    <div className="space-y-2">
                                        <div className="w-fit rounded-lg border border- p-2">
                                            <Zap className="h-4 w-4 text-white" />
                                        </div>
                                        <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance md:text-2xl/[1.875rem] text-white">
                                            {t("keyValueGrid.hde")}
                                        </h3>
                                    </div>
                                    <div className="space-y-3 text-white">
                                        {features(t).hde.map((feature, index) => (
                                            <div key={index} className="flex items-center justify-between gap-4">
                                                <div className="flex items-center gap-2">
                                                    <Check className="h-4 w-4 flex-shrink-0 text-white bg-primary rounded-full p-1" />
                                                    <p className="font-semibold text-sm">{feature.key}</p>
                                                </div>
                                                <p className="text-sm text-neutral-400 text-right">{feature.value}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </GlowingCard>

                    <GlowingCard className="w-[500px]">
                        <div className="border-[0.75px] relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
                            <div className="relative flex flex-1 flex-col justify-between gap-3">
                                <div className="space-y-8">
                                    <div className="space-y-2">
                                        <div className="w-fit rounded-lg border border-gray-600 p-2">
                                            <Zap className="h-4 w-4 text-white" />
                                        </div>
                                        <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance md:text-2xl/[1.875rem] text-white">
                                            {t("keyValueGrid.agrinox")}
                                        </h3>
                                    </div>
                                    <div className="space-y-3 text-white">
                                        {features(t).afgrinox.map((feature, index) => (
                                            <div key={index} className="flex items-center justify-between gap-4">
                                                <div className="flex items-center gap-2">
                                                    <Check className="h-4 w-4 flex-shrink-0 text-white bg-primary rounded-full p-1" />
                                                    <p className="font-semibold text-sm">{feature.key}</p>
                                                </div>
                                                <p className="text-sm text-neutral-400 text-right">{feature.value}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </GlowingCard>
                </div>

                <BackgroundBeams />
            </div>
        </section>
    )
}