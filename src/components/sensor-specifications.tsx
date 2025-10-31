import GlowingCards from "./glowing-cards";
import SectionTitle from "./ui/SectionTitle";
import { useTranslations } from "next-intl";

export default function SensorSpecifications() {
    const t = useTranslations("HomePage");
    return (
        <section className="container mx-auto py-12 md:py-20 px-4">
            <div className="flex flex-col gap-4 md:gap-6 items-center">
                <SectionTitle title={t("sensorSpecifications.title")} />
                <div className="max-w-4xl">
                    <p className="text-center text-base px-4">{t("sensorSpecifications.description")}</p>
                </div>
                <GlowingCards />
            </div>
        </section>
    )
}