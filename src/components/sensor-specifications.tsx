import GlowingCards from "./glowing-cards";
import SectionTitle from "./ui/SectionTitle";

export default function SensorSpecifications() {
    return (
        <section className="container mx-auto py-20">
            <div className="flex flex-col gap-6 items-center">
                <SectionTitle title="Sensor Specifications" />
                <h3>The sensors</h3>
                <p>Our dual-sensor platform enables sub-ppm detection of NOx and ppb-level detection of N₂O—enabling earlier intervention, smarter controls, and lower emissions-related costs.</p>
                <GlowingCards />
            </div>
        </section>
    )
}