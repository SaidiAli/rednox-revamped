import Link from "next/link";
import { useState, useEffect } from "react";
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

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${isScrolled ? "bg-background/80 shadow-sm" : "bg-transparent"}`}
        >
            <DesktopNavbar />
            <MobileNavbar />
        </header>
    )
}

function DesktopNavbar() {
    const router = useRouter()
    const t = useTranslations("Navbar")

    return (
        <div className="hidden md:flex container h-20 items-center justify-between">
            <div className="flex items-center gap-8 font-bold">
                <Link href="/" className="flex items-center gap-2 bg-white rounded-2xl p-2">
                    <Image src="/logo.png" alt="" width={100} height={100} />
                </Link>
                <NavMenu />
            </div>
            <div className="flex gap-4 items-center">
                <LocaleSwitcher />
                <Button onClick={() => router.push('/contact')} className="rounded-full bg-gradient-to-r from-primary to-[#F24229] text-primaryForeground cursor-pointer">
                    {t("scheduleButton")}
                    <ChevronRight className="ml-1 size-4" />
                </Button>
            </div>
        </div>
    )
}

function MobileNavbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const router = useRouter()
    const t = useTranslations("Navbar")

    return (
        <div className="md:hidden">
            <div className="container flex h-20 items-center justify-between p-4">
                <Link href="/" className="flex items-center gap-2 bg-white rounded-2xl p-2">
                    <Image src="/logo.png" alt="" width={100} height={100} />
                </Link>
                <Button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X className="size-5" /> : <div className="flex items-center gap-2"><Menu className="size-5" /><p className="text-md">Menu</p></div>}
                    <span className="sr-only">Toggle menu</span>
                </Button>
            </div>
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute top-16 inset-x-0 bg-background/95 backdrop-blur-lg border-b p-4"
                >
                    <div className="container py-4 flex flex-col gap-4">
                        <div className="flex flex-col gap-3">
                            <h3 className="font-semibold text-base">{t("menu.solutions.title")}</h3>
                            <div className="flex flex-col gap-2 ml-2">
                                <Link href="/heavy-duty-engines" className="py-2 text-sm" onClick={() => setMobileMenuOpen(false)}>
                                    {t("menu.solutions.link1.title")}
                                </Link>
                                <Link href="/gensets" className="py-2 text-sm" onClick={() => setMobileMenuOpen(false)}>
                                    {t("menu.solutions.link2.title")}
                                </Link>
                                <Link href="/agrinox" className="py-2 text-sm" onClick={() => setMobileMenuOpen(false)}>
                                    {t("menu.solutions.link3.title")}
                                </Link>
                            </div>
                        </div>
                        
                        <Link href="/technology" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                            {t("menu.technology")}
                        </Link>
                        
                        <div className="flex flex-col gap-3">
                            <h3 className="font-semibold text-base">{t("menu.about.title")}</h3>
                            <div className="flex flex-col gap-2 ml-2">
                                <Link href="/about" className="py-2 text-sm" onClick={() => setMobileMenuOpen(false)}>
                                    {t("menu.about.link1")}
                                </Link>
                                <Link href="/leadership" className="py-2 text-sm" onClick={() => setMobileMenuOpen(false)}>
                                    {t("menu.about.link2")}
                                </Link>
                                <Link href="/investors" className="py-2 text-sm" onClick={() => setMobileMenuOpen(false)}>
                                    {t("menu.about.link3")}
                                </Link>
                            </div>
                        </div>
                        
                        <div className="flex flex-col gap-3">
                            <h3 className="font-semibold text-base">{t("menu.press-release.title")}</h3>
                            <div className="flex flex-col gap-2 ml-2">
                                <Link href="/press-release" className="py-2 text-sm" onClick={() => setMobileMenuOpen(false)}>
                                    {t("menu.press-release.link1")}
                                </Link>
                                <Link href="/in-the-news" className="py-2 text-sm" onClick={() => setMobileMenuOpen(false)}>
                                    {t("menu.press-release.link2")}
                                </Link>
                                <Link href="/publications" className="py-2 text-sm" onClick={() => setMobileMenuOpen(false)}>
                                    {t("menu.press-release.link3")}
                                </Link>
                            </div>
                        </div>
                        
                        <Link href="/contact" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                            {t("menu.contact")}
                        </Link>
                        
                        <div className="flex flex-col gap-3 pt-4 border-t">
                            <LocaleSwitcher />
                            <Button onClick={() => { router.push('/contact'); setMobileMenuOpen(false); }} className="rounded-full bg-gradient-to-r from-primary to-[#F24229] text-primaryForeground w-full">
                                {t("scheduleButton")}
                                <ChevronRight className="ml-1 size-4" />
                            </Button>
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
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
                                <Link href="/leadership">{t("menu.about.link2")}</Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild className={""}>
                                <Link href="/investors">{t("menu.about.link3")}</Link>
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