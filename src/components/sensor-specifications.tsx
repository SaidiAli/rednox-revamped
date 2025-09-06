import GlowingCards from "./glowing-cards";
import SectionTitle from "./ui/SectionTitle";

export default function SensorSpecifications() {
    return (
        <section className="container mx-auto py-12 md:py-20 px-4">
            <div className="flex flex-col gap-4 md:gap-6 items-center">
                <SectionTitle title="Sensor Specifications" />
                <div className="max-w-4xl">
                    <p className="text-center text-base px-4">Our dual-sensor platform enables sub-ppm detection of NOx and ppb-level detection of N₂O—enabling earlier intervention, smarter controls, and lower emissions-related costs.</p>
                </div>
                <GlowingCards />
            </div>
        </section>
    )
}