"use client"

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";
import TechnologySection from "./table";
import PageHero from "@/components/page-hero";
import { useTranslations } from "next-intl";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sensor Technology",
    description: "Explore the science behind Rednox's high-performance sensors, from our Mixed-Potential Ceramic Stack for NOx to the NDIR Module for AgriNOx (N2O) detection.",
}

export default function Technology() {
    const t = useTranslations("Technology");
    return (
        <>
            <Navbar />
            <div className="min-h-screen">
                <PageHero title={t("title")} subTitle={t("subTitle")} />

                <div className="container mx-auto px-4 pb-12 md:pb-20">
                    <Image src="https://res.cloudinary.com/dvixlnczm/image/upload/v1757450643/Untitled_rg1adf.png" alt="" width={800} height={800} className="transition duration-300 blur-0 rounded-2xl object-cover object-center mx-auto w-full h-auto max-w-2xl" priority />
                </div>
                <div className="container mx-auto px-4 flex flex-col items-center">
                    <div className="mb-8 md:mb-12">
                        <SectionTitle title={t("specifications.title")} />
                    </div>
                    <TechnologySection />
                </div>
                <Footer />
            </div>
        </>
    )
}
