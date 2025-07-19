import { motion } from "framer-motion";
import SolutionCard from "./SolutionCard";
import SectionTitle from "./ui/SectionTitle";

export default function SolutionsSection() {
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
        <section id="features" className="w-full py-20 md:py-32">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
                >
                    <SectionTitle title="Solutions" />
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Precision Monitoring for Every Emission Challenge</h2>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                    <SolutionCard title="Heavy-Duty Engines" image="/thumbnails/1.png" link="/heavy-duty-engine" description="OEMs face the 2027 U.S. EPA & CARB 0.02 g/hp-hr NOx limit while customers demand < 1 gallon/h fuel-penalties. Current electrochemical sensors bottom out at ~50 ppm." />
                    <SolutionCard title="Gensets & Prime Power" image="/thumbnails/2.png" link="/gensets" description="RedNOx sensors provide continuous, accurate NOx measurement for stationary engines, enabling 24/7 compliance, reducing fuel costs, and ensuring proactive maintenance through remote telemetry and self-diagnostics" />
                    <SolutionCard title="AgriNOx – Precision N₂O Monitoring" image="/thumbnails/3.png" link="/agrinox" description="AgriNOx provides real-time, in-situ N₂O measurement in soil and plume emissions, helping farmers optimize nitrogen usage, reduce greenhouse gas contributions, and generate carbon credits through continuous monitoring and analytics." />
                </motion.div>
            </div>
        </section>
    )
}