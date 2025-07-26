"use client"

import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import SectionTitle from "@/components/ui/SectionTitle"
import { Check } from "lucide-react"
import Image from "next/image"
import { Icon } from "@iconify/react"
import SolutionHero from "@/components/SolutionsHero"
import { useTranslations } from "next-intl"

export default function HeavyDutyEngine() {
    const t = useTranslations("HeavyDutyEngines")
    return (
        <div className="flex min-h-[100dvh] flex-col">
            <Navbar />
            <SolutionHero title={t("title")} image="/image002.png" description={t("description")} />
            <div className="container mx-auto py-20">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div>
                        <Image src="/oem.jpg" alt="" width={750} height={500} className="transition duration-300 blur-0 aspect-video h-[18rem] rounded-2xl object-cover object-top" priority />
                    </div>
                    <div className="px-4 md:px-16 flex flex-col justify-start gap-4">
                        <SectionTitle title={t("problemSection.headline")} />
                        <p className="text-left text-base md:text-xl mt-2 text-white">{t("problemSection.subheader")}</p>
                    </div>

                </div>
            </div>
            <div className="container mx-auto py-20">
                <div className="flex flex-col justify-start gap-4">
                    <SectionTitle title={t("ourFixSection.headline")} />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-moody p-8 rounded-2xl flex flex-row gap-4">
                            <Icon icon="arcticons:vibrationstest" width="48" height="48" className="text-white bg-primary p-1 rounded-full" />
                            <div>
                                <p className="text-white font-bold text-lg">{t("ourFixSection.fixes.1.title")}</p>
                                <p className="text-white text-sm">{t("ourFixSection.fixes.1.description")}</p>
                            </div>
                        </div>
                        <div className="bg-moody p-8 rounded-2xl flex flex-row gap-4">
                            <Icon icon="arcticons:atmospherelogger" width="48" height="48" className="text-white bg-primary p-1 rounded-full" />
                            <div>
                                <p className="text-white font-bold text-lg">{t("ourFixSection.fixes.2.title")}</p>
                                <p className="text-white">{t("ourFixSection.fixes.2.description")}</p>
                            </div>
                        </div>
                        <div className="bg-moody p-8 rounded-2xl flex flex-row gap-4">
                            <Icon icon="arcticons:tempmonitor" width="48" height="48" className="text-white bg-primary p-1 rounded-full" />
                            <div>
                                <p className="text-white font-bold text-lg">{t("ourFixSection.fixes.3.title")}</p>
                                <p className="text-white">{t("ourFixSection.fixes.3.description")}</p>
                            </div>
                        </div>
                        <div className="bg-moody p-8 rounded-2xl flex flex-row gap-4">
                            <Icon icon="arcticons:at-and-t-cloud" width="48" height="48" className="text-white bg-primary p-1 rounded-full" />
                            <div>
                                <p className="text-white font-bold text-lg">{t("ourFixSection.fixes.4.title")}</p>
                                <p className="text-white">{t("ourFixSection.fixes.4.description")}</p>
                            </div>
                        </div>
                    </div>
                    {/* <Grid /> */}

                </div>
            </div>
            <div className="container mx-auto p-16 bg-moody rounded-3xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    <div className="flex flex-col justify-start gap-4">
                        <SectionTitle title={t("useCaseFlowSection.headline")} />
                        <div className="space-y-4">
                            <div className="flex flex-row gap-2">
                                <Check className="size-6 text-white bg-primary p-1 rounded-full" />
                                <p className="text-white">{t("useCaseFlowSection.list.1")}</p>
                            </div>
                            <div className="flex flex-row gap-2">
                                <Check className="size-6 text-white bg-primary p-1 rounded-full" />
                                <p className="text-white">{t("useCaseFlowSection.list.2")}</p>
                            </div>
                            <div className="flex flex-row gap-2">
                                <Check className="size-6 text-white bg-primary p-1 rounded-full" />
                                <p className="text-white">{t("useCaseFlowSection.list.3")}</p>
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