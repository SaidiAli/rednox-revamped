"use client"

import Image from "next/image"
import { Button } from "./ui/button"
import { ChevronRight, Download } from "lucide-react"
import SectionTitle from "./ui/SectionTitle"

export default function WhyCareSection() {
    return (
        <div className="container mx-auto py-20 shadow-lg grid grid-cols-1 md:grid-cols-2 rounded-3xl group border border-transparent overflow-hidden hover:scale-[1.02] transition duration-200">
            <div className="p-4 md:p-8 flex flex-col justify-between">
                <div className="flex flex-col justify-between items-start gap-8">
                    <div>
                        <SectionTitle title="Why you should care" />
                        <p className="text-lg md:text-4xl font-bold mb-4 text-white">Save the environment</p>
                        <p className="text-left text-base mt-2 text-white">NOx drives smog and acid rain; N₂O has 298× the GWP of CO₂. One ppm you
                            eliminate today stops both an air-quality fine and a greenhouse-gas penalty tomorrow.</p>
                    </div>
                    <div className="flex w-full gap-4">
                        <Button className="bg-primary text-white w-full">Schedule a pilot<ChevronRight className="ml-1 size-4" /></Button>
                        <Button className="bg-primary text-white w-full">Download spec sheet<Download className="ml-1 size-4" /></Button>
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
    )
}