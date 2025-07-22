"use client"

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sidebar from "@/components/sidebar";
import { usePathname } from "next/navigation";
import { HeroHighlight, Highlight } from "@/components/header-highlight";
import { motion } from "framer-motion";

export default function NewsAndPressLayout({ children }: { children: React.ReactNode }) {
    const pathName = usePathname();
    const title = pathName.split("/").pop();
    return (
        <div className="flex min-h-[100dvh] flex-col">
            <Navbar />
            <main className="flex-1">
                <div className="container mx-auto h-[20rem] flex flex-col justify-center">
                    <TitleHighlight title={title?.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ") || ""} />
                </div>
                <div className="container mx-auto grid grid-cols-3 gap-12">
                    <div className="col-span-1">
                        <Sidebar />
                    </div>
                    <div className="col-span-2">
                        {children}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export function TitleHighlight({ title }: { title: string }) {
    return (
        <div>
            <motion.h1
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                animate={{
                    opacity: 1,
                    y: [20, -5, 0],
                }}
                transition={{
                    duration: 0.5,
                    ease: [0.4, 0.0, 0.2, 1],
                }}
                className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
            >
                <Highlight className="text-black dark:text-white">
                    {title}
                </Highlight>
            </motion.h1>
        </div>
    );
}
