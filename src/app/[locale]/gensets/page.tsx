"use client"

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SolutionHero from "@/components/SolutionsHero";
import SpecsTable from "@/components/SpecsTable";
import SectionTitle from "@/components/ui/SectionTitle";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useTranslations } from "next-intl";

export default function Gensets() {
    const t = useTranslations("Gensets")
    return (
        <div className="min-h-screen">
            <Navbar />
            <SolutionHero title={t("title")} image="https://res.cloudinary.com/dvixlnczm/image/upload/v1757448487/image003_cweymn.png" description={t("description")} />

            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-4 md:gap-8 py-12 md:py-20 w-full">
                    <p className="flex flex-row gap-3 items-center text-sm md:text-base text-white"><Icon icon="lucide:check" width="20" height="20" className="text-white bg-primary p-1 rounded-full flex-shrink-0" />{t("list.1")}</p>
                    <p className="flex flex-row gap-3 items-center text-sm md:text-base text-white"><Icon icon="lucide:check" width="20" height="20" className="text-white bg-primary p-1 rounded-full flex-shrink-0" />{t("list.2")}</p>
                    <p className="flex flex-row gap-3 items-center text-sm md:text-base text-white"><Icon icon="lucide:check" width="20" height="20" className="text-white bg-primary p-1 rounded-full flex-shrink-0" />{t("list.3")}</p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 md:py-20">
                <div className="flex flex-col justify-start gap-6 md:gap-8">
                    <SectionTitle title={t("featureHighLight.title")} />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <div className="bg-moody p-4 md:p-6 lg:p-8 rounded-2xl flex flex-col sm:flex-row gap-3 md:gap-4">
                            <Icon icon="arcticons:vibrationstest" width="32" height="32" className="text-white bg-primary p-1 rounded-full flex-shrink-0 sm:w-12 sm:h-12" />
                            <div>
                                <p className="text-white font-bold text-base md:text-lg">{t("featureHighLight.1.title")}</p>
                                <p className="text-white text-sm md:text-base mt-1">{t("featureHighLight.1.description")}</p>
                            </div>
                        </div>
                        <div className="bg-moody p-4 md:p-6 lg:p-8 rounded-2xl flex flex-col sm:flex-row gap-3 md:gap-4">
                            <Icon icon="arcticons:atmospherelogger" width="32" height="32" className="text-white bg-primary p-1 rounded-full flex-shrink-0 sm:w-12 sm:h-12" />
                            <div>
                                <p className="text-white font-bold text-base md:text-lg">{t("featureHighLight.2.title")}</p>
                                <p className="text-white text-sm md:text-base mt-1">{t("featureHighLight.2.description")}</p>
                            </div>
                        </div>
                        <div className="bg-moody p-4 md:p-6 lg:p-8 rounded-2xl flex flex-col sm:flex-row gap-3 md:gap-4 md:col-span-2 md:max-w-md md:mx-auto">
                            <Icon icon="arcticons:tempmonitor" width="32" height="32" className="text-white bg-primary p-1 rounded-full flex-shrink-0 sm:w-12 sm:h-12" />
                            <div>
                                <p className="text-white font-bold text-base md:text-lg">{t("featureHighLight.3.title")}</p>
                                <p className="text-white text-sm md:text-base mt-1">{t("featureHighLight.3.description")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 py-12 md:py-20">
                <div className="space-y-6 md:space-y-8">
                    <SectionTitle title={t("keySpecifications.title")} />
                    <SpecsTable />
                </div>
            </div>
            <Footer />
        </div>
    )
}