"use client"

import type React from "react"

import Navbar from "@/components/Navbar"
import { TitleHighlight } from "@/components/title-highlight"
import Footer from "@/components/Footer"
import { useTranslations } from "next-intl";
import { advisors, founders, investors } from "@/lib/data"
import Team from "@/components/team"

export default function LeadershipPage() {
    const t = useTranslations("Leadership");

    return (
        <div className="flex min-h-[100dvh] flex-col">
            <Navbar />

            <main className="flex-1">

                <div className="container mx-auto px-4 h-[16rem] md:h-[20rem] flex flex-col justify-center">
                    <TitleHighlight title="Leadership" />
                </div>

                <section className="pb-12 md:pb-20">
                    <div className="container mx-auto px-4">

                        <div className="mb-12 md:mb-16">
                            <h3 className="text-left text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12 text-white">Management</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                                {founders(t).map((member) => (
                                    <Team key={member.id} id={member.id} name={member.name} email={member.email} bio={member.bio} position={member.position} image={member.image} />
                                ))}
                            </div>
                        </div>

                        <div className="mb-12 md:mb-16">
                            <h3 className="text-left text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12 text-white">Board of Directors</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                                {[...founders(t), ...investors(t)].map((member) => (
                                    <Team key={member.id} id={member.id} name={member.name} email={member.email} bio={member.bio} position={member.position} image={member.image} />
                                ))}
                            </div>
                        </div>

                        <div className="mb-8 md:mb-12">
                            <h3 className="text-left text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12 text-white">Advisors</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                                {advisors(t).map((member) => (
                                    <Team key={member.id} id={member.id} name={member.name} email={member.email} bio={member.bio} position={member.position} image={member.image} />
                                ))}
                            </div>
                        </div>

                    </div>
                </section>


            </main>

            <Footer />
        </div>
    )
}
