"use client"

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SolutionHero from "@/components/SolutionsHero";
import SectionTitle from "@/components/ui/SectionTitle";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Agrinox() {
    const t = useTranslations("AgriNOx");

    return (
        <div className="min-h-screen">
            <Navbar />
            <SolutionHero title={t("title")} image="/1.jpeg" description={t("description")} />

            <div className="container mx-auto px-4 py-12 md:py-20">
                <div className="flex flex-col justify-start gap-6 md:gap-8">
                    <SectionTitle title={t("valuePropositionSection.title")} />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <div className="bg-moody p-4 md:p-6 lg:p-8 rounded-2xl flex flex-col sm:flex-row gap-3 md:gap-4">
                            <Icon icon="lucide:check" width="32" height="32" className="text-primary p-1 rounded-full flex-shrink-0 sm:w-12 sm:h-12" />
                            <div>
                                <p className="text-white font-bold text-base md:text-lg">{t("valuePropositionSection.list.1.title")}</p>
                            </div>
                        </div>
                        <div className="bg-moody p-4 md:p-6 lg:p-8 rounded-2xl flex flex-col sm:flex-row gap-3 md:gap-4">
                            <Icon icon="lucide:check" width="32" height="32" className="text-primary p-1 rounded-full flex-shrink-0 sm:w-12 sm:h-12" />
                            <div>
                                <p className="text-white font-bold text-base md:text-lg">{t("valuePropositionSection.list.2.title")}</p>
                            </div>
                        </div>
                        <div className="bg-moody p-4 md:p-6 lg:p-8 rounded-2xl flex flex-col sm:flex-row gap-3 md:gap-4">
                            <Icon icon="lucide:check" width="32" height="32" className="text-primary p-1 rounded-full flex-shrink-0 sm:w-12 sm:h-12" />
                            <div>
                                <p className="text-white font-bold text-base md:text-lg">{t("valuePropositionSection.list.3.title")}</p>
                                <p className="text-white text-sm md:text-base mt-1">{t("valuePropositionSection.list.3.description")}</p>
                            </div>
                        </div>
                        <div className="bg-moody p-4 md:p-6 lg:p-8 rounded-2xl flex flex-col sm:flex-row gap-3 md:gap-4">
                            <Icon icon="lucide:check" width="32" height="32" className="text-primary p-1 rounded-full flex-shrink-0 sm:w-12 sm:h-12" />
                            <div>
                                <p className="text-white font-bold text-base md:text-lg">{t("valuePropositionSection.list.4.title")}</p>
                                <p className="text-white text-sm md:text-base mt-1">{t("valuePropositionSection.list.4.description")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 py-12 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    <div className="order-2 md:order-1">
                        <Image src="/pilot.png" alt="" width={1000} height={1200} className="transition duration-300 blur-0 rounded-2xl object-cover object-center w-full h-auto max-h-80 md:max-h-none" priority />
                    </div>
                    <div className="order-1 md:order-2 flex flex-col justify-start gap-4 md:gap-6">
                        <SectionTitle title={t("workflowSection.title")} />
                        <div className="flex flex-row items-start gap-3 md:gap-4">
                            <Icon icon="mynaui:one-solid" width="32" height="32" className="text-white bg-primary p-1 rounded-full flex-shrink-0 md:w-12 md:h-12 md:p-2" />
                            <p className="text-left text-sm md:text-base lg:text-xl text-white leading-relaxed">{t("workflowSection.1")}</p>
                        </div>
                        <div className="flex flex-row items-start gap-3 md:gap-4">
                            <Icon icon="mynaui:two-solid" width="32" height="32" className="text-white bg-primary p-1 rounded-full flex-shrink-0 md:w-12 md:h-12 md:p-2" />
                            <p className="text-left text-sm md:text-base lg:text-xl text-white leading-relaxed">{t("workflowSection.2")}</p>
                        </div>
                        <div className="flex flex-row items-start gap-3 md:gap-4">
                            <Icon icon="mynaui:three-solid" width="32" height="32" className="text-white bg-primary p-1 rounded-full flex-shrink-0 md:w-12 md:h-12 md:p-2" />
                            <p className="text-left text-sm md:text-base lg:text-xl text-white leading-relaxed">{t("workflowSection.3")}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}