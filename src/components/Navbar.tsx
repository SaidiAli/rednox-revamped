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

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [mounted, setMounted] = useState(false)
    const router = useRouter()

    useEffect(() => {
        setMounted(true)
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

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
                    {/* <nav className="hidden md:flex gap-4">
                        <Link
                            href="#features"
                            className="text-sm font-medium text-primaryForeground transition-colors hover:text-primary"
                        >
                            Solutions
                        </Link>
                        <Link
                            href="/technology"
                            className="text-sm font-medium text-primaryForeground transition-colors hover:text-primary"
                        >
                            Technology
                        </Link>
                        <Link
                            href="/about"
                            className="text-sm font-medium text-primaryForeground transition-colors hover:text-primary"
                        >
                            About
                        </Link>
                        <Link
                            href="/press-release"
                            className="text-sm font-medium text-primaryForeground transition-colors hover:text-primary"
                        >
                            Press Release
                        </Link>
                        <Link
                            href="/in-the-news"
                            className="text-sm font-medium text-primaryForeground transition-colors hover:text-primary"
                        >
                            In the news
                        </Link>
                        <Link
                            href="/contact"
                            className="text-sm font-medium text-primaryForeground transition-colors hover:text-primary"
                        >
                            Contact
                        </Link>
                    </nav> */}
                </div>
                <div className="hidden md:flex gap-4 items-center">
                    <div className="hidden md:block">
                        <LocaleSwitcher />
                    </div>
                    <Button onClick={() => router.push('/contact')} className="rounded-full bg-gradient-to-r from-primary to-[#F24229] text-primaryForeground cursor-pointer">
                        Schedule a pilot
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
    return (
        <NavigationMenu viewport={false}>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                    <NavigationMenuContent className="">
                        <ul className="grid gap-2 md:w-[800px] grid-cols-3 p-4">
                            <li className="">
                                <NavigationMenuLink asChild>
                                    <a className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b no-underline outline-hidden select-none focus:shadow-md"
                                        href="/heavy-duty-engines">
                                        <div className="mt-2 mb-2 text-lg font-medium">
                                            Heavy-Duty Engines
                                        </div>
                                        <p className="text-muted-foreground text-sm leading-tight">
                                            Monitor and control emissions from heavy-duty engines.
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <li className="">
                                <NavigationMenuLink asChild>
                                    <a className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b no-underline outline-hidden select-none focus:shadow-md"
                                        href="/gensets">
                                        <div className="mt-2 mb-2 text-lg font-medium">
                                            Gensets & Prime Power
                                        </div>
                                        <p className="text-muted-foreground text-sm leading-tight">
                                            Monitor and control emissions from gensets and prime power.
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <li className="">
                                <NavigationMenuLink asChild>
                                    <a className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b no-underline outline-hidden select-none focus:shadow-md"
                                        href="/agrinox">
                                        <div className="mt-2 mb-2 text-lg font-medium">
                                            AgriNOx
                                        </div>
                                        <p className="text-muted-foreground text-sm leading-tight">
                                            Monitor and control emissions from agricultural equipment.
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={`hover:underline ${navigationMenuTriggerStyle()}`}>
                        <Link href="/technology">Technology</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>About</NavigationMenuTrigger>
                    <NavigationMenuContent className="">
                        <div className="min-w-[200px]">
                            <NavigationMenuLink asChild className={""}>
                                <Link href="/about">About Rednox</Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild className={""}>
                                <Link href="/about">Team</Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild className={""}>
                                <Link href="/about">Investors</Link>
                            </NavigationMenuLink>
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Press Release</NavigationMenuTrigger>
                    <NavigationMenuContent className="">
                        <div className="min-w-[200px]">
                            <NavigationMenuLink asChild className={""}>
                                <Link href="/press-release">Press Release</Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild className={""}>
                                <Link href="/in-the-news">In the news</Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild className={""}>
                                <Link href="/publications">Publications</Link>
                            </NavigationMenuLink>
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={`hover:underline ${navigationMenuTriggerStyle()}`}>
                        <Link href="/contact">Contact</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}