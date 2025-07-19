"use client"

import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import SectionTitle from "@/components/ui/SectionTitle"
import { Check } from "lucide-react"
import Image from "next/image"
import { Icon } from "@iconify/react"
import SolutionHero from "@/components/SolutionsHero"

export default function HeavyDutyEngine() {
    return (
        <div className="flex min-h-[100dvh] flex-col">
            <Navbar />
            <SolutionHero title="Heavy Duty Engine" image="/image002.png" description="RedNOx offers advanced sensor solutions for Heavy-Duty Engines, designed to meet the rigorous demands of upcoming regulations like the 2027 U.S. EPA & CARB" />
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
                <div className="flex flex-col justify-start gap-4">
                    <SectionTitle title="Our Fix" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-moody p-8 rounded-2xl flex flex-row gap-4">
                            <Icon icon="arcticons:vibrationstest" width="48" height="48" className="text-white bg-primary p-1 rounded-full" />
                            <div>
                                <p className="text-white font-bold text-lg">1 – 20 ppm detection with ±10 % error</p>
                                <p className="text-white text-sm">This keeps you inside warranty margins.</p>
                            </div>
                        </div>
                        <div className="bg-moody p-8 rounded-2xl flex flex-row gap-4">
                            <Icon icon="arcticons:atmospherelogger" width="48" height="48" className="text-white bg-primary p-1 rounded-full" />
                            <div>
                                <p className="text-white font-bold text-lg">Plug-and-play ECU interface.</p>
                                <p className="text-white">One harness, two CAN frames per second.</p>
                            </div>
                        </div>
                        <div className="bg-moody p-8 rounded-2xl flex flex-row gap-4">
                            <Icon icon="arcticons:tempmonitor" width="48" height="48" className="text-white bg-primary p-1 rounded-full" />
                            <div>
                                <p className="text-white font-bold text-lg">Heater-optimised ceramic stack</p>
                                <p className="text-white">That reaches temperature in &lt; 30 s — meets cold-start FTP.</p>
                            </div>
                        </div>
                        <div className="bg-moody p-8 rounded-2xl flex flex-row gap-4">
                            <Icon icon="arcticons:at-and-t-cloud" width="48" height="48" className="text-white bg-primary p-1 rounded-full" />
                            <div>
                                <p className="text-white font-bold text-lg">Cloud API & dashboard</p>
                                <p className="text-white">Trigger regen or urea-dosing only when needed, saving up to 5 % DEF.</p>
                            </div>
                        </div>
                    </div>
                    {/* <Grid /> */}

                </div>
            </div>
            <div className="container mx-auto p-16 bg-moody rounded-3xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    <div className="flex flex-col justify-start gap-4">
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
            <Footer className="mt-20" />
        </div>
    )
}