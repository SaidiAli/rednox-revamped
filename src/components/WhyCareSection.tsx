"use client"

import Image from "next/image"
import SectionTitle from "./ui/SectionTitle"
import { useTranslations } from "next-intl"

export default function WhyCareSection() {
    const t = useTranslations("HomePage")
    return (
        <div className="container mx-auto py-20 shadow-lg grid grid-cols-1 md:grid-cols-2 rounded-3xl group border border-transparent overflow-hidden hover:scale-[1.02] transition duration-200">
            <div className="p-4 md:p-8 flex flex-col justify-between">
                <div className="flex flex-col justify-between items-start gap-8">
                    <div>
                        <SectionTitle title={t("whyYouShouldCare.headline")} />
                        <p className="text-lg md:text-4xl font-bold mb-8 text-white">{t("whyYouShouldCare.subheader")}</p>
                        <p className="text-left text-base mt-2 text-white">{t("whyYouShouldCare.description")}</p>
                    </div>
                </div>
            </div>
            <div className="relative">
                <div className="relative aspect-[4/3] lg:aspect-[3/2]">
                    <Image
                        src="/agrinox_farmer.jpg"
                        alt=""
                        fill
                        className="object-cover object-center rounded-tr-lg rounded-br-lg"
                        priority
                    />
                </div>
            </div>
        </div>
    )
}