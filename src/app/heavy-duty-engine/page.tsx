"use client"

import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import SectionTitle from "@/components/ui/SectionTitle"
import { Check, Download, Vibrate } from "lucide-react"
import Image from "next/image"

export default function HeavyDutyEngine() {
    return (
        <div className="flex min-h-[100dvh] flex-col">
            <Navbar />
            <SolutionHero />
            <div className="container mx-auto py-20">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div>
                        <Image src="/oem.jpg" alt="" width={750} height={500} className="transition duration-300 blur-0 aspect-video h-[18rem] rounded-2xl object-cover object-top" priority />
                    </div>
                    <div className="px-4 md:px-16 flex flex-col justify-start gap-4">
                        <SectionTitle title="Problem" />
                        <p className="text-left text-base md:text-xl mt-2 text-white">OEMs face the 2027 U.S. EPA & CARB 0.02 g/hp-hr NOx limit while customers demand
                            &lt; 1 gallon/h fuel-penalties. Current electrochemical sensors bottom out at ~50 ppm.</p>
                    </div>

                </div>
            </div>
            <div className="container mx-auto py-20">
                <div className="px-4 md:px-16 flex flex-col justify-start gap-4">
                    <SectionTitle title="Our Fix" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-moody p-4 rounded-2xl flex flex-row gap-4">
                            <Vibrate className="w-12 h-12 text-white bg-primary p-1 rounded-full" />
                            <div>
                                <p className="text-white font-bold text-lg">1 – 20 ppm detection with ±10 % error</p>
                                <p className="text-white text-sm">This keeps you inside warranty margins.</p>
                            </div>
                        </div>
                        <div className="bg-moody p-4 rounded-2xl flex flex-row gap-2">
                            <Check className="size-6 text-white bg-primary p-1 rounded-full" />
                            <div>
                                <p className="text-white font-bold text-lg">Plug-and-play ECU interface.</p>
                                <p className="text-white">One harness, two CAN frames per second.</p>
                            </div>
                        </div>
                        <div className="bg-moody p-4 rounded-2xl">
                            <p className="text-white font-bold text-lg">Heater-optimised ceramic stack</p>
                            <p className="text-white">That reaches temperature in &lt; 30 s — meets cold-start FTP.</p>
                        </div>
                        <div className="bg-moody p-4 rounded-2xl">
                            <p className="text-white font-bold text-lg">Cloud API & dashboard</p>
                            <p className="text-white">Trigger regen or urea-dosing only when needed, saving up to 5 % DEF.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto py-20 bg-moody rounded-3xl">
                <div className="grid grid-cols-1 md:grid-cols-2">

                    <div className="px-4 md:px-16 flex flex-col justify-start gap-4">
                        <SectionTitle title="Use-Case Flow" />
                        <div className="space-y-4">
                            <div className="flex flex-row gap-2">
                                <Check className="size-6 text-white bg-primary p-1 rounded-full" />
                                <p className="text-white">Sensor bolts into the after-treatment slip joint.</p>
                            </div>
                            <div className="flex flex-row gap-2">
                                <Check className="size-6 text-white bg-primary p-1 rounded-full" />
                                <p className="text-white">Data flows via J1939 to the ECU (closed-loop) and via LTE to RedNOx Cloud.</p>
                            </div>
                            <div className="flex flex-row gap-2">
                                <Check className="size-6 text-white bg-primary p-1 rounded-full" />
                                <p className="text-white">Fleet manager views per-truck NOx intensity & fuel/NH₃ trade-off curves.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Image src="/sensor_unit.png" alt="" width={800} height={800} className="transition duration-300 blur-0 rounded-2xl object-cover object-top" priority />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

const SolutionHero = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden transition duration-200">
            <div className="p-4 md:p-16 flex flex-col justify-center gap-12">
                <div className="space-y-8">
                    <h1 className="text-4xl font-bold text-white">Heavy Duty Engine</h1>
                    <p className="text-left text-base md:text-xl mt-2 text-white">RedNOx offers advanced sensor solutions for Heavy-Duty Engines, designed to meet the rigorous demands of upcoming regulations like the 2027 U.S. EPA & CARB </p>
                </div>
                <Button className="bg-primary text-white w-[300px]">Download spec sheet<Download className="ml-1 size-4" /></Button>
            </div>
            <div className="relative">
                <div className="relative aspect-[4/3] lg:aspect-[3/2]">
                    <Image
                        src="/image002.png"
                        alt=""
                        fill
                        className="object-cover object-center"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/20 to-transparent rounded-tr-lg rounded-br-lg" />
                </div>
            </div>
        </div>
    )
}
