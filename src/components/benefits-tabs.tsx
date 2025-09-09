import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import Image from "next/image"

const benefitsTabsData = [
    {
        title: "Design for Tomorrow's Regulations, Today.",
        descriptionP1: "The RedNOx sensor provides the precision and durability you need to meet stringent emissions standards, including the 2027 U.S. EPA & CARB 0.02g/hp−hr NOx limit. With a detection range of 1-20 ppm and an accuracy of ±10%, you can maintain warranty margins and ensure your products are compliant. The plug-and-play ECU interface and J1939 data flow simplify integration into your engine systems. The heater-optimized ceramic stack reaches temperature in less than 30 seconds, allowing you to meet cold-start FTP requirements. Our solid-state construction is resistant to sulfur, oil aerosols, and thermal shock, ensuring a field life of over 10,000 hours. Each sensor is factory-calibrated against NIST-traceable blends, and the data is stored in memory, simplifying ISO 9001 and regulatory reporting",
        descriptionP2: "",
        image: "https://res.cloudinary.com/dvixlnczm/image/upload/v1757448139/engineer-on-screen_csubkw.avif",
        metrics: [{ label: "NOx", value: "1ppm" }, { label: "Potential DEF Saving", value: "5-10%" }, { label: "Sensor Lifetime", value: ">5,000 hrs" }]
    },
    {
        title: "Optimize Your Fleet for Compliance and Profit.",
        descriptionP1: "The RedNOx sensor gives you continuous, accurate, real-time measurement of NOx emissions for every truck in your fleet. The cloud dashboard and API allow you to view per-truck NOx intensity, giving you the traceable data you need to prove your environmental leadership and meet regulations. By integrating the sensor into your fleet management system, you can use the data to trigger urea-dosing and regen only when needed, which can save up to 5% on Diesel Exhaust Fluid (DEF). Our remote telemetry features and self-diagnostics help you schedule service before a warning light even appears, ensuring better uptime. This proactive approach helps you avoid costly air-quality fines and greenhouse-gas penalties.",
        descriptionP2: "",
        image: "https://res.cloudinary.com/dvixlnczm/image/upload/v1757443328/Gemini_Generated_Image_ynacw1ynacw1ynac_tisycn.png",
        metrics: [{ label: "Reduced NOx Emissions", value: "<1ppm" }, { label: "Compliance Audits", value: "24/7" }]
    },
    {
        title: "Maximize Yields and Profits with Smarter Nitrogen Management.",
        descriptionP1: "With real-time, in-situ N2O data from AgriNOx, you can make smarter decisions about nitrogen application. Our sensors provide a real-time algorithm that translates N2O ppm to kilograms of nitrogen lost per hectare, a key metric for maximizing Nitrogen Use Efficiency (NUE). By knowing exactly when and where nitrogen is being lost, you can decrease overall nitrogen input, saving on fertilizer costs. Our sensors also allow for the timed use of nitrogen inhibitors, further reducing inputs and improving the effectiveness of your nitrogen. This precision agriculture approach not only boosts your bottom line but also transforms nitrogen savings into verifiable carbon credits, proving your farm's sustainability.",
        descriptionP2: "",
        image: "https://res.cloudinary.com/dvixlnczm/image/upload/v1757448055/agrinox_farmer_iyqjlo.jpg",
        metrics: [{ label: "NOx Detection Floor", value: "<1ppb" }, { label: "Potential DEF Savings", value: "5%" }, { label: "Sensor Lifetime", value: ">5,000 hrs" }]
    }
]

export function BenefitsTabs() {
    return (
        <section className="container mx-auto px-4 py-12 md:py-20">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white capitalize text-center mb-8 md:mb-16">A product line-up <span className="text-primary">Adapted to Your Needs</span></h2>
            <div className="flex flex-col gap-6">
                <Tabs defaultValue="oem" className="">
                    <div className="flex flex-row justify-center">
                        <TabsList className="flex flex-row gap-2 md:gap-4 w-full h-auto">
                            <TabsTrigger className="px-4 md:px-16 py-4 md:py-8 text-sm md:text-xl font-bold" value="oem">OEMs</TabsTrigger>
                            <TabsTrigger className="px-4 md:px-16 py-4 md:py-8 text-sm md:text-xl font-bold" value="sustainability-manager">Fleet Managers</TabsTrigger>
                            <TabsTrigger className="px-4 md:px-16 py-4 md:py-8 text-sm md:text-xl font-bold" value="farmer">Farm Managers</TabsTrigger>
                        </TabsList>
                    </div>
                    <TabsContent value="oem">
                        <BenefitsTabContent title={benefitsTabsData[0].title} descriptionP1={benefitsTabsData[0].descriptionP1} descriptionP2={benefitsTabsData[0].descriptionP2} image={benefitsTabsData[0].image} metrics={benefitsTabsData[0].metrics} />
                    </TabsContent>
                    <TabsContent value="sustainability-manager">
                        <BenefitsTabContent title={benefitsTabsData[1].title} descriptionP1={benefitsTabsData[1].descriptionP1} descriptionP2={benefitsTabsData[1].descriptionP2} image={benefitsTabsData[1].image} metrics={benefitsTabsData[1].metrics} />
                    </TabsContent>
                    <TabsContent value="farmer">
                        <BenefitsTabContent title={benefitsTabsData[2].title} descriptionP1={benefitsTabsData[2].descriptionP1} descriptionP2={benefitsTabsData[2].descriptionP2} image={benefitsTabsData[2].image} metrics={benefitsTabsData[2].metrics} />
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