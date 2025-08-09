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

                <div className="container mx-auto h-[20rem] flex flex-col justify-center">
                    <TitleHighlight title="Leadership" />
                </div>

                <section>
                    <div className="container mx-auto">

                        <h3 className="text-left text-2xl font-bold mb-8">Board of Directors</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[300px] h-[300px]">
                            {[...founders(t), ...investors].map((member) => (
                                <Team key={member.id} id={member.id} name={member.name} email={member.email} bio={member.bio} position={member.position} image={member.image} />
                            ))}
                        </div>

                        <h3 className="text-left text-2xl font-bold mb-8">Advisors</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[300px] h-[300px]">
                            {advisors.map((member) => (
                                <Team key={member.id} id={member.id} name={member.name} email={member.email} bio={member.bio} position={member.position} image={member.image} />
                            ))}
                        </div>

                        {/* <h3 className="text-left text-2xl font-bold mb-8">Investors</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[300px] h-[300px]">
                            {investors.map((member) => (
                                <Team key={member.id} id={member.id} name={member.name} email={member.email} bio={member.bio} position={member.position} image={member.image} />
                            ))}
                        </div> */}
                    </div>
                </section>


            </main>

            <Footer />
        </div>
    )
}
