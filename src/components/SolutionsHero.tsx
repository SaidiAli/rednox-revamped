import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useTranslations } from "next-intl"

export default function SolutionHero({ title, description, image }: { title: string, description: string, image: string }) {
    const t = useTranslations("HeavyDutyEngines")
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden transition duration-200">
            <div className="p-4 md:p-8 lg:p-16 flex flex-col justify-center gap-8 md:gap-12">
                <div className="space-y-4 md:space-y-6 lg:space-y-8">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">{title}</h1>
                    <p className="text-left text-sm md:text-base lg:text-lg mt-2 text-white leading-relaxed">{description}</p>
                </div>
                <Link href="/contact">
                    <Button className="bg-primary text-white flex items-center justify-center gap-2 w-full md:w-[300px] cursor-pointer">
                        {t("downloadButton")}
                    </Button>
                </Link>
            </div>
            <div className="relative order-first md:order-last">
                <div className="relative aspect-[4/3] md:aspect-[3/2] h-[20rem] md:h-[25rem] lg:h-[30rem]">
                    <Image
                        src={image}
                        alt=""
                        fill
                        className="object-cover object-center"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-background/80 md:from-background via-background/40 md:via-background/20 to-transparent rounded-lg md:rounded-tr-lg md:rounded-br-lg" />
                </div>
            </div>
        </div>
    )
}
