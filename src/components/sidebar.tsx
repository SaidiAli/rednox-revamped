import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Sidebar() {
    const t = useTranslations("newsAndPress");

    return (
        <div className="flex flex-col gap-3 md:gap-4">
            <div className="flex flex-col gap-1 md:gap-2 bg-moody p-3 md:p-4 rounded-2xl">
                <Link href="/in-the-news" className="flex justify-between items-center gap-2 hover:bg-primary transition duration-200 cursor-pointer p-3 md:p-4 rounded-2xl">
                    <p className="text-white text-sm md:text-base">{t("sidebar.inTheNews")}</p>
                    <ChevronRight className="text-white w-4 h-4" />
                </Link>
                <Link href="/press-release" className="flex justify-between items-center gap-2 hover:bg-primary transition duration-200 cursor-pointer p-3 md:p-4 rounded-2xl">
                    <p className="text-white text-sm md:text-base">{t("sidebar.pressRelease")}</p>
                    <ChevronRight className="text-white w-4 h-4" />
                </Link>
                <Link href="/publications" className="flex justify-between items-center gap-2 hover:bg-primary transition duration-200 cursor-pointer p-3 md:p-4 rounded-2xl">
                    <p className="text-white text-sm md:text-base">{t("sidebar.publications")}</p>
                    <ChevronRight className="text-white w-4 h-4" />
                </Link>
            </div>
        </div>
    )
}