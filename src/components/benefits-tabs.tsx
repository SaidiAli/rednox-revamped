import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import Image from "next/image"

export function BenefitsTabs() {
    return (
        <section className="container mx-auto">
            <div className="flex flex-col gap-6">
                <Tabs defaultValue="oem" className="">
                    <div className="flex flex-row justify-center">
                        <TabsList className="flex flex-row gap-4 w-full">
                            <TabsTrigger className="px-16 py-8 text-xl font-bold" value="oem">OEM Engineers</TabsTrigger>
                            <TabsTrigger className="px-16 py-8 text-xl font-bold" value="sustainability-manager">Sustainability Manager</TabsTrigger>
                            <TabsTrigger className="px-16 py-8 text-xl font-bold" value="farmer">Fleet & Farm Managers</TabsTrigger>
                        </TabsList>
                    </div>
                    <TabsContent value="oem">
                        <BenefitsTabContent title="Design for Tomorrow's Regulations, Today." descriptionP1="The RedNOx sensor provides the precision and durability you need to meet stringent emissions standards, including the 2027 U.S. EPA & CARB 0.02g/hp−hr NOx limit. With a detection range of 1-20 ppm and an accuracy of ±10%, you can maintain warranty margins and ensure your products are compliant. The plug-and-play ECU interface and J1939 data flow simplify integration into your engine systems. The heater-optimized ceramic stack reaches temperature in less than 30 seconds, allowing you to meet cold-start FTP requirements. Our solid-state construction is resistant to sulfur, oil aerosols, and thermal shock, ensuring a field life of over 10,000 hours. Each sensor is factory-calibrated against NIST-traceable blends, and the data is stored in memory, simplifying ISO 9001 and regulatory reporting" descriptionP2="" image="/engineer-on-screen.avif" metrics={[{ label: "Response Time", value: "<2s" }, { label: "Operating Temp.", value: "-40...+700°C" }, { label: "Cold Start Time", value: "<30s" }]} />
                    </TabsContent>
                    <TabsContent value="sustainability-manager">
                        <BenefitsTabContent title="Achieve Your Green Goals with Verifiable Data." descriptionP1="Prove your commitment to environmental stewardship with traceable, real-time data from our ultra-sensitive sensors. Our sensors enable you to cut NOx, which drives smog and acid rain, and reduce N2O, which has a global warming potential 298 times that of CO2. By using our cloud dashboard and API, you can precisely manage engine emissions and track your environmental impact. For agriculture, the AgriNOx sensor provides a real-time kg N lost/ha algorithm, helping farmers monitor nitrogen efficiency and earn carbon credits through programs like CARB LCFS. With our technology, you can not only meet but exceed environmental targets and showcase your progress with verifiable data" descriptionP2="" image="/contrast.webp" metrics={[{ label: "GWP of N₂O vs. CO₂ ", value: "298x" }, { label: "N₂O Detection Floor", value: "<100ppb" }]} />
                    </TabsContent>
                    <TabsContent value="farmer">
                        <BenefitsTabContent title="Cut Costs, Boost Uptime, and Simplify Operations." descriptionP1="RedNOx sensors help you slash fuel burn and reduce fuel penalties. For heavy-duty engines, the cloud API and dashboard can trigger regen or urea-dosing only when needed, saving up to 5% on Diesel Exhaust Fluid (DEF). Our robust design and remote telemetry features allow for better service and uptime, as you can schedule maintenance before a warning light even appears. For farms, the AgriNOx sensor's real-time N2O data allows for variable-rate prescriptions, which helps improve nitrogen usage and can lead to carbon credits. The simple plug-and-play integration and lack of required recalibration make our sensors easy to use and maintain, saving you time and effort." descriptionP2="" image="/image004.png" metrics={[{ label: "NOx Detection Floor", value: "<1ppm" }, { label: "Potential DEF Savings", value: "5%" }, { label: "Sensor Lifetime", value: ">5,000 hrs" }]} />
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    )
}


function BenefitsTabContent({ title, descriptionP1, descriptionP2, image, metrics }: { title: string, descriptionP1: string; descriptionP2: string; image: string; metrics: { label: string; value: string }[] }) {
    return (
        <div className="border-1 border-rBlue p-8">
            <div className="flex flex-row justify-center gap-8">
                <div className="w-1/2">
                    <h2 className="text-2xl font-bold mb-8">{title}</h2>
                    <p>{descriptionP1}</p>
                    <p>{descriptionP2}</p>
                    <div className="flex flex-row justify-center gap-8 mt-16">
                        {metrics.map((metric, index) => (
                            <div key={index} className="flex flex-col justify-center items-center gap-4">
                                <p className="text-4xl font-bold text-primary">{metric.value}</p>
                                <p className="text-base">{metric.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-1/2 relative w-[500px">
                    <Image src={image} alt="" fill className="rounded-2xl object-cover" />
                </div>
            </div>
        </div>
    )
}