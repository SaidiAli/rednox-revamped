import { ArrowRight } from "lucide-react";
import SectionTitle from "./ui/SectionTitle";
import Image from "next/image";
import { pressData } from "@/lib/data";
import { useTranslations } from "next-intl";

export default function PressReleases() {
    const t = useTranslations("HomePage")
    return (
        <section id="press-releases" className="w-full py-20 md:py-32">
            <div className="container px-4 md:px-6 flex flex-col gap-6 items-center">
                <SectionTitle title={t("PressReleaseSection.title")} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {pressData.map((press, index) => (
                        <PressReleaseCard slug={press.slug} key={index} title={press.title} description={press.excerpt} image={press.image || "https://placehold.co/600x400"} />
                    ))}
                </div>
            </div>
        </section>
    )
}

const PressReleaseCard = ({ title, description, image, slug }: { title: string; description: string; image: string; slug: string }) => {
    const t = useTranslations("HomePage")
    return (
        <div className="bg-[#1B1818] text-white rounded-3xl flex flex-col gap-4 group w-full">
            <div className="w-full h-[200px] relative rounded-t-2xl">
                <Image src={image} alt="" width={750} height={500} className="transition duration-300 blur-0 aspect-video h-[14rem] rounded-2xl object-cover object-top" priority />
            </div>
            <div className="flex flex-col justify-between h-full">
                <div className="p-8">
                    <h2 className="text-2xl font-bold mb-4">{title}</h2>
                    <p className="text-base">{description}</p>
                </div>
                <a href={`/article/${slug}`} className="relative flex items-center gap-2 group-hover:bg-primary group-hover:text-white transition duration-200 p-8 rounded-b-2xl">
                    <p className="text-white">{t("PressReleaseSection.readMoreButton")}</p>
                    <ArrowRight className="ml-1 size-4 text-white" />
                    <Image src="/pen.png" alt="" width={150} height={150} className="absolute opacity-50 top-0 right-0 hidden group-hover:block translate-x-0 transition duration-500 ease-in-out" />
                </a>
            </div>
        </div>
    )
}