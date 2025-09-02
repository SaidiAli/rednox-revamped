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
            <main className="flex-1 pb-20">
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