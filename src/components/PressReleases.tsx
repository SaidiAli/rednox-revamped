import { ArrowRight } from "lucide-react";
import SectionTitle from "./ui/SectionTitle";
import Image from "next/image";

export default function PressReleases() {
    return (
        <section id="press-releases" className="w-full py-20 md:py-32">
            <div className="container px-4 md:px-6 flex flex-col gap-6 items-center">
                <SectionTitle title="In the News" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <PressReleaseCard title="RedNOx Awarded SBIR Phase I for its Innovative Greenhouse Gas Measurement Platform" description="FREMONT, Calif., August 28, 2023 (GLOBE NEWSWIRE) -- RedNOx Inc., a trailblazer in environmental solid-state sensing technology, is delighted to announce its recent achievement in securing a Phase I Small Business Innovation Research (SBIR) award for its groundbreaking atmosphere and soil greenhouse gas measurement platform." image="/usda.jpg" link="#" />
                    <PressReleaseCard title="RedNOx Awarded USDA NIFA SBIR Phase II Grant to Drive Innovation in Agricultural Emissions Reduction" description="We are thrilled to announce that RedNOx has been awarded a USDA NIFA SBIR Phase II grant of $650,000 as part of a $26.8 million investment to support groundbreaking, small business-led innovations in agriculture." image="/us.jpg" link="#" />
                </div>
            </div>
        </section>
    )
}

const PressReleaseCard = ({ title, description, image, link }: { title: string; description: string; image: string; link: string }) => {
    return (
        <div className="bg-[#1B1818] text-white rounded-3xl flex flex-col gap-4 group w-full">
            <div className="w-full h-[200px] relative rounded-t-2xl">
                <Image src={image} alt="" width={750} height={500} className="transition duration-300 blur-0 aspect-video h-[14rem] rounded-2xl object-cover object-top" priority />
            </div>
            <div className="flex flex-col justify-between h-full">
                <div className="p-8">
                    <h2 className="text-2xl font-bold">{title}</h2>
                    <p className="text-muted-foreground">{description}</p>
                </div>
                <a href={link} className="relative flex items-center gap-2 group-hover:bg-primary group-hover:text-white transition duration-200 p-8 rounded-b-2xl">
                    <p className="text-white">Read more</p>
                    <ArrowRight className="ml-1 size-4 text-white" />
                    <Image src="/pen.png" alt="" width={150} height={150} className="absolute opacity-50 top-0 right-0 hidden group-hover:block translate-x-0 transition duration-500 ease-in-out" />
                </a>
            </div>
        </div>
    )
}