import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { useTranslations } from "next-intl"
import Image from "next/image"

const benefitsTabsData = [
    {
        descriptionP2: "",
        image: "https://res.cloudinary.com/dvixlnczm/image/upload/v1757448139/engineer-on-screen_csubkw.avif",
        metrics: [{ label: "NOx", value: "1ppm" }, { label: "Potential DEF Saving", value: "5-10%" }, { label: "Sensor Lifetime", value: ">5,000 hrs" }]
    },
    {
        descriptionP2: "",
        image: "https://res.cloudinary.com/dvixlnczm/image/upload/v1757443328/Gemini_Generated_Image_ynacw1ynacw1ynac_tisycn.png",
        metrics: [{ label: "Reduced NOx Emissions", value: "<1ppm" }, { label: "Compliance Audits", value: "24/7" }]
    },
    {
        descriptionP2: "",
        image: "https://res.cloudinary.com/dvixlnczm/image/upload/v1757448055/agrinox_farmer_iyqjlo.jpg",
        metrics: [{ label: "NOx Detection Floor", value: "<1ppb" }, { label: "Potential DEF Savings", value: "5%" }, { label: "Sensor Lifetime", value: ">5,000 hrs" }]
    }
]

export function BenefitsTabs() {
    const t = useTranslations("HomePage");

    return (
        <section className="container mx-auto px-4 py-12 md:py-20">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white capitalize text-center mb-8 md:mb-16">{t("benefitsTabs.title1")} <span className="text-primary">{t("benefitsTabs.title2")}</span></h2>
            <div className="flex flex-col gap-6">
                <Tabs defaultValue="oem" className="">
                    <div className="flex flex-row justify-center">
                        <TabsList className="flex flex-row gap-2 md:gap-4 w-full h-auto">
                            <TabsTrigger className="px-4 md:px-16 py-4 md:py-8 text-sm md:text-xl font-bold" value="oem">{t("benefitsTabs.tabs.oem.title")}</TabsTrigger>
                            <TabsTrigger className="px-4 md:px-16 py-4 md:py-8 text-sm md:text-xl font-bold" value="sustainability-manager">{t("benefitsTabs.tabs.fleetManager.title")}</TabsTrigger>
                            <TabsTrigger className="px-4 md:px-16 py-4 md:py-8 text-sm md:text-xl font-bold" value="farmer">{t("benefitsTabs.tabs.farmManager.title")}</TabsTrigger>
                        </TabsList>
                    </div>
                    <TabsContent value="oem">
                        <BenefitsTabContent title={t("benefitsTabs.tabs.oem.heading")} descriptionP1={t("benefitsTabs.tabs.oem.description")} descriptionP2={""} image={benefitsTabsData[0].image} metrics={benefitsTabsData[0].metrics} />
                    </TabsContent>
                    <TabsContent value="sustainability-manager">
                        <BenefitsTabContent title={t("benefitsTabs.tabs.fleetManager.heading")} descriptionP1={t("benefitsTabs.tabs.fleetManager.description")} descriptionP2={""} image={benefitsTabsData[1].image} metrics={benefitsTabsData[1].metrics} />
                    </TabsContent>
                    <TabsContent value="farmer">
                        <BenefitsTabContent title={t("benefitsTabs.tabs.farmManager.heading")} descriptionP1={t("benefitsTabs.tabs.farmManager.description")} descriptionP2={""} image={benefitsTabsData[2].image} metrics={benefitsTabsData[2].metrics} />
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    )
}


function BenefitsTabContent({ title, descriptionP1, descriptionP2, image, metrics }: { title: string, descriptionP1: string; descriptionP2: string; image: string; metrics: { label: string; value: string }[] }) {
    return (
        <div className="border-1 border-rBlue p-4 md:p-8">
            <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8">
                <div className="w-full md:w-1/2">
                    <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-8">{title}</h2>
                    <p className="text-sm md:text-base mb-4">{descriptionP1}</p>
                    <p className="text-sm md:text-base mb-4">{descriptionP2}</p>
                    <div className="flex flex-row justify-center gap-4 md:gap-8 mt-6 md:mt-16">
                        {metrics.map((metric, index) => (
                            <div key={index} className="flex flex-col justify-center items-center gap-4">
                                <p className="text-2xl md:text-4xl font-bold text-primary">{metric.value}</p>
                                <p className="text-xs md:text-base text-center">{metric.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full md:w-1/2 relative h-64 md:h-96">
                    <Image src={image} alt="" fill className="rounded-2xl object-cover" />
                </div>
            </div>
        </div>
    )
}