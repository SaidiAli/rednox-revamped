import { Button } from "@/components/ui/button"
import { Icon } from "@iconify/react/dist/iconify.js"
import Image from "next/image"

export default function SolutionHero({ title, description, image }: { title: string, description: string, image: string }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden transition duration-200">
            <div className="p-4 md:p-16 flex flex-col justify-center gap-12">
                <div className="space-y-8">
                    <h1 className="text-4xl font-bold text-white">{title}</h1>
                    <p className="text-left text-base md:text-md mt-2 text-white">{description}</p>
                </div>
                <Button className="bg-primary text-white w-[300px]">Download spec sheet<Icon icon="lucide:download" width="24" height="24" className="text-white"/></Button>
            </div>
            <div className="relative">
                <div className="relative aspect-[4/3] lg:aspect-[3/2] h-[30rem]">
                    <Image
                        src={image}
                        alt=""
                        fill
                        className="object-cover object-center"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/20 to-transparent rounded-tr-lg rounded-br-lg" />
                </div>
            </div>
        </div>
    )
}
