import { easeInOut, motion } from "framer-motion";
import { BackgroundBeams } from "./Background-beams";

// Define the animation variants for the container
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3, // Delay between each child's animation
        },
    },
};

// Define the animation variants for the children
const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6, // Duration of each child's animation
            ease: easeInOut,
        },
    },
};

const staggerButtonVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: easeInOut,
        },
    },
};

export default function PageHero({ title, subTitle }: { title: string; subTitle: string }) {
    return (
        <div className="w-full overflow-hidden">
            <div className="h-full py-12 md:py-20 w-full rounded-md bg-background relative flex flex-col items-center justify-center antialiased">
                <motion.div
                    className="max-w-7xl mx-auto px-4 md:p-4"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1
                        className="relative z-10 text-2xl md:text-3xl lg:text-4xl bg-clip-text text-white text-center font-sans font-bold leading-tight"
                        variants={itemVariants}
                    >
                        {title}
                    </motion.h1>

                    <motion.p
                        className="text-white max-w-lg mx-auto my-2 text-sm md:text-base mt-4 md:mt-6 text-center relative z-10 leading-relaxed"
                        variants={itemVariants}
                    >
                        {subTitle}
                    </motion.p>
                </motion.div>
                <BackgroundBeams />
            </div>
        </div>
    )
}