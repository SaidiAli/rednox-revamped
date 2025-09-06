"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { useTranslations } from "next-intl";
import { TechnologyTranslations } from "@/lib/types";

const technologyData = (t: TechnologyTranslations) => ([
    {
        innovation: t("specifications.table.tableBody.1.coreInnovation"),
        howItWorks:
            t("specifications.table.tableBody.1.howItWorks"),
        whyItMatters:
            t("specifications.table.tableBody.1.whyItMatters"),
    },
    {
        innovation: t("specifications.table.tableBody.2.coreInnovation"),
        howItWorks:
            t("specifications.table.tableBody.2.howItWorks"),
        whyItMatters:
            t("specifications.table.tableBody.2.whyItMatters"),
    },
    {
        innovation: t("specifications.table.tableBody.3.coreInnovation"),
        howItWorks:
            t("specifications.table.tableBody.3.howItWorks"),
        whyItMatters:
            t("specifications.table.tableBody.3.whyItMatters"),
    },
    {
        innovation: t("specifications.table.tableBody.4.coreInnovation"),
        howItWorks:
            t("specifications.table.tableBody.4.howItWorks"),
        whyItMatters:
            t("specifications.table.tableBody.4.whyItMatters"),
    },
    {
        innovation: t("specifications.table.tableBody.5.coreInnovation"),
        howItWorks:
            t("specifications.table.tableBody.5.howItWorks"),
        whyItMatters:
            t("specifications.table.tableBody.5.whyItMatters"),
    },
])

export default function TechnologySection() {
    const t = useTranslations("Technology");
    return (
        <section className="text-white py-8 md:py-16 w-full">
            <div className="max-w-7xl mx-auto px-4">

                {/* Desktop Table View */}
                <div className="hidden lg:block overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="border-b-2 border-primary/20">
                                <th className="text-left p-4 md:p-6 text-primary font-semibold text-base md:text-lg w-1/3">{t("specifications.table.tableHead.coreInnovation")}</th>
                                <th className="text-left p-4 md:p-6 text-primary font-semibold text-base md:text-lg w-1/3">{t("specifications.table.tableHead.howItWorks")}</th>
                                <th className="text-left p-4 md:p-6 text-primary font-semibold text-base md:text-lg w-1/3">{t("specifications.table.tableHead.whyItMatters")}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {technologyData(t).map((tech, index) => (
                                <tr
                                    key={index}
                                    className={cn(
                                        "border-b border-primary/20 transition-colors",
                                        index % 2 === 0 ? "" : "",
                                    )}
                                >
                                    <td className="p-4 md:p-6 font-semibold text-primary align-top text-sm md:text-base">{tech.innovation}</td>
                                    <td className="p-4 md:p-6 text-slate-300 align-top leading-relaxed text-sm md:text-base">{tech.howItWorks}</td>
                                    <td className="p-4 md:p-6 text-slate-300 align-top leading-relaxed text-sm md:text-base">{tech.whyItMatters}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Mobile Tech Cards Carousel */}
                <div className="lg:hidden">
                    <div className="flex overflow-x-auto gap-4 md:gap-6 pb-4 snap-x snap-mandatory scrollbar-hide px-2">
                        {technologyData(t).map((tech, index) => (
                            <div
                                key={index}
                                className="flex-none w-72 md:w-80 bg-slate-800 rounded-lg p-4 md:p-6 border border-slate-700 snap-start hover:border-cyan-400/50 transition-colors"
                            >
                                <h3 className="font-semibold text-cyan-300 text-base md:text-lg mb-3 md:mb-4 leading-tight">{tech.innovation}</h3>
                                <div className="space-y-3 md:space-y-4">
                                    <div>
                                        <h4 className="font-semibold text-cyan-400 mb-2 text-xs md:text-sm uppercase tracking-wide">How it Works</h4>
                                        <p className="text-slate-300 text-xs md:text-sm leading-relaxed">{tech.howItWorks}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-cyan-400 mb-2 text-xs md:text-sm uppercase tracking-wide">Why it Matters</h4>
                                        <p className="text-slate-300 text-xs md:text-sm leading-relaxed">{tech.whyItMatters}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-4 md:mt-6">
                        <p className="text-slate-400 text-xs md:text-sm">{t("specifications.table.swipeToExplore")}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
