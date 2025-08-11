import Link from "next/link";
import SocialIcon from "./ui/social-icon";
import Image from "next/image";

export default function Footer({ className }: { className?: string }) {
    return (
        <footer className={`w-full bg-rBlue backdrop-blur-sm ${className}`}>
            <div className="container flex flex-col gap-8 px-4 py-10 md:px-6 lg:py-16">
                <div className="flex flex-row justify-between items-center">
                    <div className="space-y-4 w-[400px]">
                        <Link href="/" className="flex items-center gap-2 bg-white w-fit rounded-2xl p-2">
                            <Image src="/logo.png" alt="" width={100} height={100} />
                        </Link>
                        <p className="text-white text-sm">
                            Leading the charge towards low to zero-emissions engines, factories and farmlands
                        </p>
                        {/* <div className="flex gap-4">
                            <SocialIcon href="#" icon="mdi:twitter" name="Twitter" />
                            <SocialIcon href="#" icon="mdi:linkedin" name="LinkedIn" />
                        </div> */}
                        <div className="flex gap-4">
                            <Image src="/9001.png" alt="" width={100} height={100} />
                            <Image src="/iso_14001.webp" alt="" width={100} height={100} />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-4">
                            <p className="text-white text-sm">Company</p>
                            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors hover:underline">
                                Privacy policy
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors hover:underline">
                                Cookie policy
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors hover:underline">
                                Terms of Service
                            </Link>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-white text-sm">Company</p>
                            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors hover:underline">
                                Privacy policy
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors hover:underline">
                                Cookie policy
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors hover:underline">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-8">
                    <p className="text-xs text-white text-center">
                        &copy; {new Date().getFullYear()} Rednox Inc. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}