"use client"

import { motion, useInView, easeInOut } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeInOut,
    },
  },
};

export default function IntroStatement() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = useTranslations("HomePage");

  return (
    <section className="py-12 md:py-20 bg-rBlue">
      <motion.div
        ref={ref}
        className="container mx-auto px-4 flex flex-col items-center justify-center gap-6 md:gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.p 
          className="text-white max-w-4xl mx-auto my-2 text-base md:text-xl text-center relative z-10 px-4"
          variants={itemVariants}
        >
          <span className="font-bold text-primary">RedNOx</span> {t("IntroSection.statement")}
        </motion.p>
        
        <motion.div 
          className="mb-8"
          variants={itemVariants}
        >
          <Image src="https://res.cloudinary.com/dvixlnczm/image/upload/v1754920885/lonox_gjfb4q.png" alt="Hero Image" width={800} height={800} className="rounded-2xl w-full max-w-2xl md:max-w-4xl h-auto" />
        </motion.div>

        <motion.div variants={itemVariants}>
          <h4 className="text-white text-xl md:text-2xl font-bold mb-4 text-center">{t("IntroSection.trustedBy")}</h4>
          <div className="flex flex-row gap-2 md:gap-4 justify-center items-center">
            <Image src="/cummins.png" alt="" width={100} height={100} className="md:w-[150px] md:h-[150px] w-[120px] h-[120px]" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}