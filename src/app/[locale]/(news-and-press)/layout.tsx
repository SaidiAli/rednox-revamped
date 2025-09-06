"use client"

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sidebar from "@/components/sidebar";
import { usePathname } from "next/navigation";
import { TitleHighlight } from "@/components/title-highlight";

export default function NewsAndPressLayout({ children }: { children: React.ReactNode }) {
    const pathName = usePathname();
    const title = pathName.split("/").pop();
    return (
        <div className="flex min-h-[100dvh] flex-col">
            <Navbar />
            <main className="flex-1 pb-12 md:pb-20">
                <div className="container mx-auto px-4 h-[16rem] md:h-[20rem] flex flex-col justify-center">
                    <TitleHighlight title={title?.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ") || ""} />
                </div>
                <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
                    <div className="order-2 lg:order-1 lg:col-span-1">
                        <Sidebar />
                    </div>
                    <div className="order-1 lg:order-2 lg:col-span-2">
                        {children}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}