"use client"

import { getPressData } from "@/lib/data";
import { PressData } from "@/lib/types";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image"
import { useParams } from "next/navigation";

export default function PressRelease() {
    const params = useParams()
    const locale = (params.locale as string) || 'en'
    const pressData = getPressData(locale);

    return (
        <div className="flex flex-col gap-4 md:gap-6">
            <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
                {pressData.map((press, index) => (
                    <PressCard key={index} {...press} locale={locale} />
                ))}
            </div>
        </div>
    )
}

function PressCard({ title, excerpt: description, image, slug: link, locale }: PressData & { locale: string }) {
    return (
        <div className="group flex flex-col md:flex-row gap-4 md:gap-6 items-stretch bg-moody rounded-2xl hover:shadow-xl transition duration-300 hover:scale-[1.02] md:hover:scale-105 cursor-pointer overflow-hidden">
            <div className="w-full md:w-[200px] lg:w-[250px] h-[200px] md:h-[250px] relative flex-shrink-0">
                <Image src={image || "/newspaper.png"} alt="" fill priority className="object-cover md:rounded-tl-2xl md:rounded-bl-2xl" />
            </div>
            <div className="w-full p-4 md:p-6 lg:p-8 flex flex-col justify-between">
                <div>
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4 text-white leading-tight">{title}</h3>
                    <p className="text-sm md:text-base text-white/80 line-clamp-3 md:line-clamp-2 leading-relaxed">{description}</p>
                </div>
                <div className="flex justify-end items-center mt-4 md:mt-6">
                    <a href={`/${locale}/article/${link}`} className="group-hover:text-white text-primary transition duration-300 group-hover:bg-primary p-2 md:p-3 rounded-lg flex items-center gap-2 text-sm md:text-base">
                        Read more <Icon icon="lucide:arrow-right" width="20" height="20" className="md:w-6 md:h-6" />
                    </a>
                </div>
            </div>
        </div>
    )
}

