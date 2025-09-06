"use client"

import type React from "react"
import Navbar from "@/components/Navbar"
import { TitleHighlight } from "@/components/title-highlight"
import Footer from "@/components/Footer"
import { useTranslations } from "next-intl";
import Image from "next/image"
import { Icon } from "@iconify/react/dist/iconify.js"
import { _investors, blogPosts } from "@/lib/data"

export default function InvestorsPage() {
    const t = useTranslations("Leadership");

    const nihonPressRealease = blogPosts["strategic-business-partnership-between-nihon-yamamura-glass-co-ltd-and-rednox"]

    return (
        <div className="flex min-h-[100dvh] flex-col">
            <Navbar />

            <main className="flex-1">

                <div className="container mx-auto px-4 h-[16rem] md:h-[20rem] flex flex-col justify-center">
                    <TitleHighlight title="Investors" />
                </div>

                <section className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20">
                        {_investors.map((investor) => (
                            <InvestorCard key={investor.name} investor={investor} />
                        ))}
                    </div>
                </section>

                <section className="container mx-auto px-4 pb-12 md:pb-20">
                    <div>
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-16 text-white">Press release</h3>
                        <NewsCard title={nihonPressRealease.title} description={nihonPressRealease.excerpt} image={nihonPressRealease.image!} link={"/article/strategic-business-partnership-between-nihon-yamamura-glass-co-ltd-and-rednox"} />
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}

function InvestorCard({ investor }: { investor: { name: string; image: string; bio: string; position: string; email?: string } }) {
    return (
        <div className="flex flex-col gap-3 md:gap-4 bg-slate-800/50 border border-slate-700 rounded-2xl p-4 md:p-6 hover:bg-slate-800 transition-colors">
            <div className="relative h-[200px] md:h-[250px] lg:h-[300px] w-full">
                <Image src={investor.image} alt="" fill className="object-cover rounded-xl" />
            </div>
            <div className="space-y-2">
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white">{investor.name}</h3>
                <p className="text-sm md:text-base lg:text-lg text-white/80 leading-relaxed">{investor.bio}</p>
            </div>
        </div>
    )
}

function NewsCard({ title, description, image, link }: { title: string, description: string, image: string, link: string }) {
    return (
        <div className="group flex flex-col md:flex-row gap-4 md:gap-6 items-stretch bg-moody rounded-2xl hover:shadow-xl transition duration-300 cursor-pointer overflow-hidden">
            <div className="w-full md:w-[300px] h-[200px] md:h-[250px] relative flex-shrink-0">
                <Image src={image} alt="" fill priority className="object-cover md:rounded-tl-2xl md:rounded-bl-2xl" />
            </div>
            <div className="w-full p-4 md:p-6 lg:p-8 flex flex-col justify-between">
                <div>
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4 text-white leading-tight">{title}</h3>
                    <p className="text-sm md:text-base text-white/80 line-clamp-3 md:line-clamp-2 leading-relaxed">{description}</p>
                </div>
                <div className="flex justify-end items-center mt-4 md:mt-6">
                    <a href={link} className="group-hover:text-white text-primary transition duration-300 group-hover:bg-primary p-2 md:p-3 rounded-lg flex items-center gap-2 text-sm md:text-base">
                        Read more <Icon icon="lucide:arrow-right" width="20" height="20" className="md:w-6 md:h-6" />
                    </a>
                </div>
            </div>
        </div>
    )
}