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
            <SolutionHero title={t("title")} image="/image003.png" description={t("description")} />

            <div className="container mx-auto">
                <div className="flex flex-row justify-center gap-8 py-20 w-full">
                    <p className="flex flex-row gap-2"><span className="font-bold"><Icon icon="lucide:check" width="24" height="24" className="text-white bg-primary p-1 rounded-full" /></span>{t("list.1")}</p>
                    <p className="flex flex-row gap-2"><span className="font-bold"><Icon icon="lucide:check" width="24" height="24" className="text-white bg-primary p-1 rounded-full" /></span>{t("list.2")}</p>
                    <p className="flex flex-row gap-2"><span className="font-bold"><Icon icon="lucide:check" width="24" height="24" className="text-white bg-primary p-1 rounded-full" /></span>{t("list.3")}</p>
                </div>
            </div>

            <div className="container mx-auto py-20">
                <div className="flex flex-col justify-start gap-4">
                    <SectionTitle title={t("featureHighLight.title")} />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-moody p-8 rounded-2xl flex flex-row gap-4">
                            <Icon icon="arcticons:vibrationstest" width="48" height="48" className="text-white bg-primary p-1 rounded-full" />
                            <div>
                                <p className="text-white font-bold text-lg">{t("featureHighLight.1.title")}</p>
                                <p className="text-white text-sm">{t("featureHighLight.1.description")}</p>
                            </div>
                        </div>
                        <div className="bg-moody p-8 rounded-2xl flex flex-row gap-4">
                            <Icon icon="arcticons:atmospherelogger" width="48" height="48" className="text-white bg-primary p-1 rounded-full" />
                            <div>
                                <p className="text-white font-bold text-lg">{t("featureHighLight.2.title")}</p>
                                <p className="text-white">{t("featureHighLight.2.description")}</p>
                            </div>
                        </div>
                        <div className="bg-moody p-8 rounded-2xl flex flex-row gap-4">
                            <Icon icon="arcticons:tempmonitor" width="48" height="48" className="text-white bg-primary p-1 rounded-full" />
                            <div>
                                <p className="text-white font-bold text-lg">{t("featureHighLight.3.title")}</p>
                                <p className="text-white">{t("featureHighLight.3.description")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto py-20">
                <SectionTitle title={t("keySpecifications.title")} />
                <SpecsTable />
            </div>
            <Footer />
        </div>
    )
}