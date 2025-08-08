import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ChevronRight, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import LocaleSwitcher from "./LocaleSwitcher";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const router = useRouter()
    const t = useTranslations("Navbar")

    return (
        <header
            className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${isScrolled ? "bg-background/80 shadow-sm" : "bg-transparent"}`}
        >
            <div className="container flex h-20 items-center justify-between">
                <div className="flex items-center gap-8 font-bold">
                    <Link href="/" className="flex items-center gap-2 bg-white rounded-2xl p-2">
                        <Image src="/logo.png" alt="" width={100} height={100} />
                    </Link>
                    <NavMenu />
                </div>
                <div className="hidden md:flex gap-4 items-center">
                    <div className="hidden md:block">
                        <LocaleSwitcher />
                    </div>
                    <Button onClick={() => router.push('/contact')} className="rounded-full bg-gradient-to-r from-primary to-[#F24229] text-primaryForeground cursor-pointer">
                        {t("scheduleButton")}
                        <ChevronRight className="ml-1 size-4" />
                    </Button>
                </div>
                <div className="flex items-center gap-4 md:hidden">
                    <Button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X className="size-5" /> : <div className="flex items-center gap-2"><Menu className="size-5" /><p className="text-md">Menu</p></div>}
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                </div>
            </div>
            {/* Mobile menu */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="md:hidden absolute top-16 inset-x-0 bg-background/95 backdrop-blur-lg border-b"
                >
                    <div className="container py-4 flex flex-col gap-4">
                        <Link href="#features" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                            Features
                        </Link>
                        <Link href="#testimonials" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                            Testimonials
                        </Link>
                        <Link href="#pricing" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                            Pricing
                        </Link>
                        <Link href="#faq" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                            FAQ
                        </Link>
                        <div className="flex flex-col gap-2 pt-2 border-t">
                            <Button className="rounded-full">
                                Schedule a pilot
                                <ChevronRight className="ml-1 size-4" />
                            </Button>
                        </div>
                    </div>
                </motion.div>
            )}
        </header>
    )
}

export function NavMenu() {
    const t = useTranslations("Navbar")
    return (
        <NavigationMenu viewport={false}>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="">{t("menu.solutions.title")}</NavigationMenuTrigger>
                    <NavigationMenuContent className="">
                        <ul className="grid gap-2 md:w-[800px] grid-cols-3 p-4">
                            <li className="">
                                <NavigationMenuLink asChild>
                                    <Link className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b no-underline outline-hidden select-none focus:shadow-md"
                                        href="/heavy-duty-engines">
                                        <div className="mt-2 mb-2 text-lg font-medium">
                                            {t("menu.solutions.link1.title")}
                                        </div>
                                        <p className="text-muted-foreground text-sm leading-tight">
                                            {t("menu.solutions.link1.description")}
                                        </p>
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                            <li className="">
                                <NavigationMenuLink asChild>
                                    <Link className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b no-underline outline-hidden select-none focus:shadow-md"
                                        href="/gensets">
                                        <div className="mt-2 mb-2 text-lg font-medium">
                                            {t("menu.solutions.link2.title")}
                                        </div>
                                        <p className="text-muted-foreground text-sm leading-tight">
                                            {t("menu.solutions.link2.description")}
                                        </p>
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                            <li className="">
                                <NavigationMenuLink asChild>
                                    <Link className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b no-underline outline-hidden select-none focus:shadow-md"
                                        href="/agrinox">
                                        <div className="mt-2 mb-2 text-lg font-medium">
                                            {t("menu.solutions.link3.title")}
                                        </div>
                                        <p className="text-muted-foreground text-sm leading-tight">
                                            {t("menu.solutions.link3.description")}
                                        </p>
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={`hover:underline ${navigationMenuTriggerStyle()}`}>
                        <Link href="/technology">{t("menu.technology")}</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>{t("menu.about.title")}</NavigationMenuTrigger>
                    <NavigationMenuContent className="">
                        <div className="min-w-[200px]">
                            <NavigationMenuLink asChild className={""}>
                                <Link href="/about">{t("menu.about.link1")}</Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild className={""}>
                                <Link href="/about">{t("menu.about.link2")}</Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild className={""}>
                                <Link href="/about">{t("menu.about.link3")}</Link>
                            </NavigationMenuLink>
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>{t("menu.press-release.title")}</NavigationMenuTrigger>
                    <NavigationMenuContent className="">
                        <div className="min-w-[200px]">
                            <NavigationMenuLink asChild className={""}>
                                <Link href="/press-release">{t("menu.press-release.link1")}</Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild className={""}>
                                <Link href="/in-the-news">{t("menu.press-release.link2")}</Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild className={""}>
                                <Link href="/publications">{t("menu.press-release.link3")}</Link>
                            </NavigationMenuLink>
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={`hover:underline ${navigationMenuTriggerStyle()}`}>
                        <Link href="/contact">{t("menu.contact")}</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}