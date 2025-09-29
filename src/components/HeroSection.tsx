"use client";
import React from "react";
import { BackgroundBeams } from "./Background-beams";
import { ChevronRight } from "lucide-react";
import { ContainerTextFlip } from "./ui/text-flip";
import { useTranslations } from "next-intl";
import { motion, easeInOut } from "framer-motion";
import Link from "next/link";

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

export default function HeroSection() {
    const t = useTranslations("HomePage")
    const flipWords = ["Agriculture", "HDE", "Gensets"]
    return (
        <section className="w-full overflow-hidden h-[60vh] md:h-[100vh]">

            <div className="h-full py-20 w-full rounded-md bg-background relative flex flex-col items-center justify-center antialiased">
                <motion.div
                    className="max-w-7xl mx-auto p-4 flex flex-col items-center justify-center gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1
                        className="relative z-10 text-4xl md:text-6xl lg:text-7xl bg-clip-text text-white text-center font-sans font-bold mb-8"
                        variants={itemVariants}
                    >
                        {t("heroHeadline")} <ContainerTextFlip words={flipWords} />
                    </motion.h1>

                    <motion.p
                        className="text-white max-w-lg mx-auto my-2 text-base md:text-2xl lg:text-3xl text-center relative z-10"
                        variants={itemVariants}
                    >
                        {t("heroDescription")}
                    </motion.p>

                    <motion.div className="flex gap-4 relative z-20" variants={staggerButtonVariants}>
                        <Link 
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 relative z-20"
                        >
                            Schedule a pilot
                            <ChevronRight className="ml-1 size-4" />
                        </Link>
                    </motion.div>
                </motion.div>
                <BackgroundBeams />
            </div>
        </section>
    )
}
