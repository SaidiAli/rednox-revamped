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

                <div className="container mx-auto h-[20rem] flex flex-col justify-center">
                    <TitleHighlight title="Investors" />
                </div>

                <section className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                        {_investors.map((investor) => (
                            <InvestorCard key={investor.name} investor={investor} />
                        ))}
                    </div>
                </section>

                <section className="container mx-auto">
                    <div>
                        <h3 className="text-4xl font-bold mb-16">Press release</h3>
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
        <div className="flex flex-col gap-4">
            <div className="relative h-[300px] w-full">
                <Image src={investor.image} alt="" fill className="object-cover rounded-2xl" />
            </div>
            <div>
                <h3 className="text-2xl font-bold">{investor.name}</h3>
                <p className="text-lg">{investor.bio}</p>
            </div>
        </div>
    )
}

function NewsCard({ title, description, image, link }: { title: string, description: string, image: string, link: string }) {
    return (
        <div className="group flex flex-row gap-4 items-center bg-moody rounded-2xl hover:shadow-xl transition duration-300 cursor-pointer">
            <div className="w-[300px] h-[200px] relative">
                <Image src={image} alt="" fill priority className="object-cover rounded-tl-2xl rounded-bl-2xl" />
            </div>
            <div className="w-full p-8">
                <h3 className="text-2xl font-bold mb-4">{title}</h3>
                <p className="text-base text-muted line-clamp-2">{description}</p>
                <div className="flex justify-between items-center mt-4">
                    <p></p>
                    <a href={link} className="group-hover:text-white text-primary transition duration-300 group-hover:bg-primary p-2 rounded-lg flex items-center gap-2">Read more <Icon icon="lucide:arrow-right" width="24" height="24" /></a>
                </div>
            </div>
        </div>
    )
}