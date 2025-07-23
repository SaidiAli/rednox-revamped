"use client"

import { pressData } from "@/lib/data";
import { PressData } from "@/lib/types";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image"

export default function PressRelease() {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
                {pressData.map((press, index) => (
                    <PressCard key={index} {...press} />
                ))}
            </div>
        </div>
    )
}

function PressCard({ title, description, image, date, link }: PressData) {
    return (
        
        <div className="group flex flex-row gap-4 items-center bg-moody p-4 rounded-2xl hover:shadow-xl transition duration-300 hover:scale-105 cursor-pointer">
            <Image src={image || "/newspaper.png"} alt="" width={100} height={100} priority className="rounded-2xl p-4" />
            <div className="w-full">
                <h3 className="text-2xl font-bold mb-4">{title}</h3>
                <p className="text-base text-muted">{description}</p>
                <div className="flex justify-between items-center">
                    <p>{date}</p>
                    <a href={link} className="group-hover:text-white text-primary transition duration-300 group-hover:bg-primary p-2 rounded-lg flex items-center gap-2">Read more <Icon icon="lucide:arrow-right" width="24" height="24" /></a>
                </div>
            </div>
        </div>
    )
}

