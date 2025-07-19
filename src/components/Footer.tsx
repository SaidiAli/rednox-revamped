import Link from "next/link";
import SocialIcon from "./ui/social-icon";
import Image from "next/image";

export default function Footer({ className }: { className?: string }) {
    return (
        <footer className={`w-full bg-background/95 backdrop-blur-sm ${className}`}>
            <div className="container flex flex-col gap-8 px-4 py-10 md:px-6 lg:py-16">
                <div className="flex flex-row justify-between items-center">
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2 bg-white w-fit rounded-2xl p-2">
                            <Image src="/logo.png" alt="" width={100} height={100} />
                        </Link>
                        <p className="text-xs text-muted-foreground">
                            &copy; {new Date().getFullYear()} Rednox. All rights reserved.
                        </p>
                        <div className="flex gap-4">
                            <SocialIcon href="#" icon="mdi:twitter" name="Twitter" />
                            <SocialIcon href="#" icon="mdi:linkedin" name="LinkedIn" />
                        </div>
                    </div>
                    <div className="flex flex-row gap-16">
                        <div className="space-y-4">
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                        Solutions
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                        Technology
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                        Privacy policy
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                        Cookie policy
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                        Terms of Service
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}