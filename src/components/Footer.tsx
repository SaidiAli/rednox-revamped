import Link from "next/link";
import SocialIcon from "./ui/social-icon";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Footer({ className }: { className?: string }) {
    const t = useTranslations("Footer");

    return (
        <footer className={`w-full bg-rBlue backdrop-blur-sm ${className}`}>
            <div className="container flex flex-col gap-6 md:gap-8 px-4 py-8 md:py-10 lg:py-16">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-0">
                    <div className="space-y-4 w-full md:basis-1/3">
                        <Link href="/" className="flex items-center gap-2 bg-white w-fit rounded-2xl p-2">
                            <Image src="/logo.png" alt="" width={100} height={100} />
                        </Link>
                        <p className="text-white text-sm">
                            {t("caption")}
                        </p>

                        <div className="flex gap-2 md:gap-4 mt-6 md:mt-8">
                            <Image src="https://res.cloudinary.com/dvixlnczm/image/upload/v1754921168/Untitled-2_w5mou1.png" alt="" width={80} height={80} className="md:w-[100px] md:h-[100px]" />
                            <Image src="https://res.cloudinary.com/dvixlnczm/image/upload/v1754921168/Untitled-1_zftd0j.png" alt="" width={80} height={80} className="md:w-[100px] md:h-[100px]" />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-start md:justify-center gap-8 md:gap-16 w-full md:basis-2/3">
                        <div className="flex flex-col gap-3 md:gap-4">
                            <p className="text-white text-sm font-semibold">{t("links.company.title")}</p>
                            <Link href="/technology" className="hover:text-primary transition-colors hover:underline">
                                {t("links.company.link1")}
                            </Link>
                            <Link href="/#solutions" className="hover:text-primary transition-colors hover:underline">
                                {t("links.company.link2")}
                            </Link>
                            <Link href="/about" className="hover:text-primary transition-colors hover:underline">
                                {t("links.company.link3")}
                            </Link>
                        </div>
                        <div className="flex flex-col gap-3 md:gap-4">
                            <p className="text-white text-sm font-semibold">{t("links.resourses.title")}</p>
                            <Link href="#" className="hover:text-primary transition-colors hover:underline">
                                {t("links.resourses.link1")}
                            </Link>
                            <Link href="#" className="hover:text-primary transition-colors hover:underline">
                                {t("links.resourses.link2")}
                            </Link>
                            <Link href="/contact" className="hover:text-primary transition-colors hover:underline">
                                {t("links.resourses.link3")}
                            </Link>
                        </div>
                        <div className="flex flex-col gap-3 md:gap-4">
                            <p className="text-white text-sm font-semibold">{t("socials")}</p>
                            <a href="https://x.com/RedNOxInc" target="_blank" className="inline-flex group items-center gap-2 hover:text-primary transition-colors">
                                <SocialIcon icon="mdi:twitter" name="Twitter" className="text-white group-hover:text-primary transition-colors" />
                                Twitter
                            </a>
                            <a href="https://www.linkedin.com/company/rednox-inc/" target="_blank" className="inline-flex group items-center gap-2 hover:text-primary transition-colors">
                                <SocialIcon icon="mdi:linkedin" name="LinkedIn" className="text-white group-hover:text-primary transition-colors" />
                                LinkedIn
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=61581518734927" target="_blank" className="inline-flex group items-center gap-2 hover:text-primary transition-colors">
                                <SocialIcon icon="mdi:facebook" name="Facebook" className="text-white group-hover:text-primary transition-colors" />
                                Facebook
                            </a>
                            <a href="https://www.instagram.com/rednox_inc/" target="_blank" className="inline-flex group items-center gap-2 hover:text-primary transition-colors">
                                <SocialIcon icon="mdi:instagram" name="Instagram" className="text-white group-hover:text-primary transition-colors" />
                                Instagram
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-700">
                    <p className="text-xs text-white text-center">
                        &copy; {new Date().getFullYear()} Rednox Inc. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}