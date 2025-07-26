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
            <SolutionHero title={t("title")} image="/image004.png" description={t("description")} />

            <div className="container mx-auto py-20">
                <div className="flex flex-col justify-start gap-4">
                    <SectionTitle title={t("valuePropositionSection.title")} />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-moody p-8 rounded-2xl flex flex-row gap-4">
                            <Icon icon="lucide:check" width="48" height="48" className="text-primary p-1 rounded-full" />
                            <div>
                                <p className="text-white font-bold text-lg">{t("valuePropositionSection.list.1.title")}</p>
                            </div>
                        </div>
                        <div className="bg-moody p-8 rounded-2xl flex flex-row gap-4">
                            <Icon icon="lucide:check" width="48" height="48" className="text-primary p-1 rounded-full" />
                            <div>
                                <p className="text-white font-bold text-lg">{t("valuePropositionSection.list.2.title")}</p>
                            </div>
                        </div>
                        <div className="bg-moody p-8 rounded-2xl flex flex-row gap-4">
                            <Icon icon="lucide:check" width="48" height="48" className="text-primary p-1 rounded-full" />
                            <div>
                                <p className="text-white font-bold text-lg">{t("valuePropositionSection.list.3.title")}</p>
                                <p className="text-white">{t("valuePropositionSection.list.3.description")}</p>
                            </div>
                        </div>
                        <div className="bg-moody p-8 rounded-2xl flex flex-row gap-4">
                            <Icon icon="lucide:check" width="48" height="48" className="text-primary p-1 rounded-full" />
                            <div>
                                <p className="text-white font-bold text-lg">{t("valuePropositionSection.list.4.title")}</p>
                                <p className="text-white">{t("valuePropositionSection.list.4.description")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Image src="/pilot.png" alt="" width={1000} height={1200} className="transition duration-300 blur-0 rounded-2xl object-cover object-top" priority />
                    <div className="px-4 md:px-16 flex flex-col justify-start gap-4">
                        <SectionTitle title={t("workflowSection.title")} />
                        <div className="flex flex-row items-center gap-2">
                            <Icon icon="mynaui:one-solid" width="50" height="50" className="text-white bg-primary p-2 rounded-full" />
                            <p className="text-left md:text-xl mt-2 text-white">{t("workflowSection.1")}</p>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                            <Icon icon="mynaui:two-solid" width="50" height="50" className="text-white bg-primary p-2 rounded-full" />
                            <p className="text-left text-base md:text-xl mt-2 text-white">{t("workflowSection.2")}</p>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                            <Icon icon="mynaui:three-solid" width="50" height="50" className="text-white bg-primary p-2 rounded-full" />
                            <p className="text-left text-base md:text-xl mt-2 text-white">{t("workflowSection.3")}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}