import { motion } from "framer-motion";
import SolutionCard from "./SolutionCard";
import SectionTitle from "./ui/SectionTitle";
import { useTranslations } from "next-intl";

export default function SolutionsSection() {
    const t = useTranslations("HomePage")
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }
    return (
        <section id="solutions" className="w-full py-20 md:py-32">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
                >
                    <SectionTitle title={t("solutionsSection.headline")} />
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">{t("solutionsSection.subheader")}</h2>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                    <SolutionCard title={t("solutionsSection.solutions.hde.title")} image="/thumbnails/1.png" link="/heavy-duty-engines" description={t("solutionsSection.solutions.hde.description")} />
                    <SolutionCard title={t("solutionsSection.solutions.genset.title")} image="/thumbnails/2.png" link="/gensets" description={t("solutionsSection.solutions.genset.description")} />
                    <SolutionCard title={t("solutionsSection.solutions.agrinox.title")} image="/thumbnails/3.png" link="/agrinox" description={t("solutionsSection.solutions.agrinox.description")} />
                </motion.div>
            </div>
        </section>
    )
}