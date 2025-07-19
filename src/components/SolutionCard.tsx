
import { ArrowRight } from "lucide-react";
import Image from "next/image"

export default function SolutionCard({ title, description, image, link }: { title: string; description: string; image: string; link: string }) {
    return (
        <div className="bg-[#1B1818] text-white rounded-3xl flex flex-col gap-4 group w-full">
            <div className="w-full h-[200px] relative rounded-t-2xl">
                <Image src={image} alt="" width={750} height={500} className="transition duration-300 blur-0 aspect-video h-[14rem] rounded-2xl object-cover object-top group-hover:scale-105" priority />
            </div>
            <div className="flex flex-col justify-between h-full">
                <div className="p-8">
                    <h2 className="text-2xl font-bold mb-4">{title}</h2>
                    <p className="text-neutral-500 text-base">{description}</p>
                </div>
                <a href={link} className="relative flex items-center gap-2 group-hover:bg-primary group-hover:text-white transition duration-200 p-8 rounded-b-2xl">
                    <p className="text-white">Explore Solution</p>
                    <ArrowRight className="ml-1 size-4 text-white" />
                    <Image src="/sensor-icon.png" alt="" width={150} height={150} className="absolute opacity-50 top-0 right-0 hidden group-hover:block translate-x-0 transition duration-500 ease-in-out" />
                </a>
            </div>
        </div>
    )
}
