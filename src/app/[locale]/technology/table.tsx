"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const technologyData = [
    {
        innovation: "Mixed-Potential Ceramic Stack — NOx",
        howItWorks:
            "A 250 μm YSZ electrolyte is sandwiched between reference and sensing electrodes. At ~700°C, competing electro-catalytic reactions establish a mixed potential linearly proportional to NO + NO₂ partial pressure. The multilayer stack is screen-printed, co-fired at 1,300°C, and laser-trimmed for sub-ppm linearity.",
        whyItMatters:
            "Solid-state construction shrugs off sulphur, oil aerosols, and thermal shock, delivering >10,000 h field life while outperforming legacy amperometric cells that bottom out near 50 ppm.",
    },
    {
        innovation: "Integrated Catalyst & Rapid-Warm Heater",
        howItWorks:
            "A nano-engineered catalyst layer accelerates the NO↔NO₂ redox pair while suppressing hydrocarbon cross-talk. A spiral heater etched under the sensing pad reaches 650°C in <30 s with <8 W draw.",
        whyItMatters:
            "Fast light-off captures cold-start spikes—critical for 2027 HD-FTP—and the low power budget means the sensor runs straight off the ECU harness.",
    },
    {
        innovation: "On-Chip Temperature & Cross-Gas Compensation",
        howItWorks:
            "Dual RTDs embedded in the ceramic feed a 32-bit MCU that applies a 4th-order temperature polynomial every 50 ms. Auxiliary channels sample O₂ and H₂ to correct matrix effects in real time.",
        whyItMatters:
            "Maintains ±10% accuracy from –40°C to +125°C gas temps and across 0–20% O₂, eliminating field recalibration cycles.",
    },
    {
        innovation: "Factory Calibration & Digital Fingerprint",
        howItWorks:
            "Each die is calibrated against NIST-traceable 0, 5, 10 ppm NOx blends. Calibration curves and heater signatures are stored in OTP memory and encoded in a QR on the shell.",
        whyItMatters:
            "End-to-end traceability lets OEMs and fleets audit any sensor back to its raw data, simplifying ISO 9001 and regulatory reporting.",
    },
    {
        innovation: "NDIR Module — AgriNOx (N₂O)",
        howItWorks:
            "AgriNOx employs a dual-beam nondispersive IR setup: a narrowband MEMS IR emitter at 4.5 μm, a long-life optical path, and a pair of thermopile detectors (sample & reference). Differential spectroscopy cancels humidity, CO₂, and NH₃ interference, while a micro-pump pulls a continuous soil-gas stream.",
        whyItMatters:
            "Delivers < 100 ppb detection with <3 s response directly in soil plumes, enabling real-time nitrogen-use-efficiency mapping. Low-power (<2 W) operation plus LoRaWAN lets a small solar cell run the probe all season.",
    },
]

export default function TechnologySection() {

    return (
        <section className="text-white py-16 px-4">
            <div className="max-w-7xl mx-auto">

                {/* Desktop Table View */}
                <div className="hidden lg:block overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="border-b-2 border-primary/20">
                                <th className="text-left p-6 text-primary font-semibold text-lg w-1/3">Core Innovation</th>
                                <th className="text-left p-6 text-primary font-semibold text-lg w-1/3">How it Works</th>
                                <th className="text-left p-6 text-primary font-semibold text-lg w-1/3">Why it Matters</th>
                            </tr>
                        </thead>
                        <tbody>
                            {technologyData.map((tech, index) => (
                                <tr
                                    key={index}
                                    className={cn(
                                        "border-b border-primary/20 transition-colors",
                                        index % 2 === 0 ? "" : "",
                                    )}
                                >
                                    <td className="p-6 font-semibold text-primary align-top">{tech.innovation}</td>
                                    <td className="p-6 text-slate-300 align-top leading-relaxed">{tech.howItWorks}</td>
                                    <td className="p-6 text-slate-300 align-top leading-relaxed">{tech.whyItMatters}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Mobile Tech Cards Carousel */}
                <div className="lg:hidden">
                    <div className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory scrollbar-hide">
                        {technologyData.map((tech, index) => (
                            <div
                                key={index}
                                className="flex-none w-80 bg-slate-800 rounded-lg p-6 border border-slate-700 snap-start hover:border-cyan-400/50 transition-colors"
                            >
                                <h3 className="font-semibold text-cyan-300 text-lg mb-4 leading-tight">{tech.innovation}</h3>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold text-cyan-400 mb-2 text-sm uppercase tracking-wide">How it Works</h4>
                                        <p className="text-slate-300 text-sm leading-relaxed">{tech.howItWorks}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-cyan-400 mb-2 text-sm uppercase tracking-wide">Why it Matters</h4>
                                        <p className="text-slate-300 text-sm leading-relaxed">{tech.whyItMatters}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-4">
                        <p className="text-slate-400 text-sm">← Swipe to explore technologies →</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
