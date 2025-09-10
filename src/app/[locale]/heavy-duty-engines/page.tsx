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
            <SolutionHero title={t("title")} image="https://res.cloudinary.com/dvixlnczm/image/upload/v1757448487/image002_uegzli.png" description={t("description")} />
            <div className="container mx-auto px-4 py-12 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    <div className="order-2 md:order-1">
                        <Image src="/oem.jpg" alt="" width={750} height={500} className="transition duration-300 blur-0 aspect-video h-auto max-h-[18rem] w-full rounded-2xl object-cover object-top" priority />
                    </div>
                    <div className="order-1 md:order-2 flex flex-col justify-start gap-4">
                        <SectionTitle title={t("problemSection.headline")} />
                        <p className="text-left text-sm md:text-base lg:text-xl mt-2 text-white">{t("problemSection.subheader")}</p>
                    </div>

                </div>
            </div>
            <div className="container mx-auto px-4 py-12 md:py-20">
                <div className="flex flex-col justify-start gap-6 md:gap-8">
                    <SectionTitle title={t("ourFixSection.headline")} />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <div className="bg-moody p-4 md:p-6 lg:p-8 rounded-2xl flex flex-col sm:flex-row gap-3 md:gap-4">
                            <Icon icon="arcticons:vibrationstest" width="32" height="32" className="text-white bg-primary p-1 rounded-full flex-shrink-0 sm:w-12 sm:h-12" />
                            <div>
                                <p className="text-white font-bold text-base md:text-lg">{t("ourFixSection.fixes.1.title")}</p>
                                <p className="text-white text-sm md:text-base mt-1">{t("ourFixSection.fixes.1.description")}</p>
                            </div>
                        </div>
                        <div className="bg-moody p-4 md:p-6 lg:p-8 rounded-2xl flex flex-col sm:flex-row gap-3 md:gap-4">
                            <Icon icon="arcticons:atmospherelogger" width="32" height="32" className="text-white bg-primary p-1 rounded-full flex-shrink-0 sm:w-12 sm:h-12" />
                            <div>
                                <p className="text-white font-bold text-base md:text-lg">{t("ourFixSection.fixes.2.title")}</p>
                                <p className="text-white text-sm md:text-base mt-1">{t("ourFixSection.fixes.2.description")}</p>
                            </div>
                        </div>
                        <div className="bg-moody p-4 md:p-6 lg:p-8 rounded-2xl flex flex-col sm:flex-row gap-3 md:gap-4">
                            <Icon icon="arcticons:tempmonitor" width="32" height="32" className="text-white bg-primary p-1 rounded-full flex-shrink-0 sm:w-12 sm:h-12" />
                            <div>
                                <p className="text-white font-bold text-base md:text-lg">{t("ourFixSection.fixes.3.title")}</p>
                                <p className="text-white text-sm md:text-base mt-1">{t("ourFixSection.fixes.3.description")}</p>
                            </div>
                        </div>
                        <div className="bg-moody p-4 md:p-6 lg:p-8 rounded-2xl flex flex-col sm:flex-row gap-3 md:gap-4">
                            <Icon icon="arcticons:at-and-t-cloud" width="32" height="32" className="text-white bg-primary p-1 rounded-full flex-shrink-0 sm:w-12 sm:h-12" />
                            <div>
                                <p className="text-white font-bold text-base md:text-lg">{t("ourFixSection.fixes.4.title")}</p>
                                <p className="text-white text-sm md:text-base mt-1">{t("ourFixSection.fixes.4.description")}</p>
                            </div>
                        </div>
                    </div>
                    {/* <Grid /> */}

                </div>
            </div>
            <div className="container mx-auto px-4 py-8 md:p-16 bg-moody rounded-3xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

                    <div className="flex flex-col justify-start gap-4 md:gap-6">
                        <SectionTitle title={t("useCaseFlowSection.headline")} />
                        <div className="space-y-3 md:space-y-4">
                            <div className="flex flex-row gap-3">
                                <Check className="size-5 md:size-6 text-white bg-primary p-1 rounded-full flex-shrink-0 mt-0.5" />
                                <p className="text-white text-sm md:text-base">{t("useCaseFlowSection.list.1")}</p>
                            </div>
                            <div className="flex flex-row gap-3">
                                <Check className="size-5 md:size-6 text-white bg-primary p-1 rounded-full flex-shrink-0 mt-0.5" />
                                <p className="text-white text-sm md:text-base">{t("useCaseFlowSection.list.2")}</p>
                            </div>
                            <div className="flex flex-row gap-3">
                                <Check className="size-5 md:size-6 text-white bg-primary p-1 rounded-full flex-shrink-0 mt-0.5" />
                                <p className="text-white text-sm md:text-base">{t("useCaseFlowSection.list.3")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="order-first md:order-last">
                        <Image src="https://res.cloudinary.com/dvixlnczm/image/upload/v1757450643/Untitled_rg1adf.png" alt="" width={800} height={800} className="transition duration-300 blur-0 rounded-2xl object-cover object-center w-full h-auto max-h-80 md:max-h-none" priority />
                    </div>
                </div>
            </div>
            <Footer className="mt-20" />
        </div>
    )
}