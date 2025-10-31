"use client"

import type React from "react"
import Navbar from "@/components/Navbar"
import { TitleHighlight } from "@/components/title-highlight"
import Footer from "@/components/Footer"
import Image from "next/image"
import { _investors } from "@/lib/data"
import { useTranslations } from "next-intl"

export default function InvestorsPage() {
    const t = useTranslations("investors");
    const bios = [t("rev1"), t("soundboard"), t("nyg")];

    return (
        <div className="flex min-h-[100dvh] flex-col">
            <Navbar />

            <main className="flex-1">

                <div className="container mx-auto px-4 h-[16rem] md:h-[20rem] flex flex-col justify-center">
                    <TitleHighlight title={t("title")} />
                </div>

                <section className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20">
                        {_investors.map((investor, index) => (
                            <InvestorCard key={investor.name} investor={investor} bio={bios[index]} />
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

function InvestorCard({ investor, bio }: { investor: { name: string; image: string; bio: string; position: string; email?: string }, bio: string }) {

    return (
        <div className="flex flex-col gap-3 md:gap-4 bg-slate-800/50 border border-slate-700 rounded-2xl p-4 md:p-6 hover:bg-slate-800 transition-colors">
            <div className="relative h-[200px] md:h-[250px] lg:h-[300px] w-full">
                <Image src={investor.image} alt="" fill className="object-cover rounded-xl" />
            </div>
            <div className="space-y-2">
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white">{investor.name}</h3>
                <p className="text-sm md:text-base lg:text-lg text-white/80 leading-relaxed">{bio}</p>
            </div>
        </div>
    )
}