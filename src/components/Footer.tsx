import Link from "next/link";
import SocialIcon from "./ui/social-icon";
import Image from "next/image";

export default function Footer({ className }: { className?: string }) {
    return (
        <footer className={`w-full bg-rBlue backdrop-blur-sm ${className}`}>
            <div className="container flex flex-col gap-8 px-4 py-10 md:px-6 lg:py-16">
                <div className="flex flex-row justify-between items-center">
                    <div className="space-y-4 basis-1/3">
                        <Link href="/" className="flex items-center gap-2 bg-white w-fit rounded-2xl p-2">
                            <Image src="/logo.png" alt="" width={100} height={100} />
                        </Link>
                        <p className="text-white text-sm">
                            Leading the charge towards low to zero-emissions engines, factories and farmlands
                        </p>
                        
                        <div className="flex gap-4 mt-8">
                            <Image src="https://res.cloudinary.com/dvixlnczm/image/upload/v1754921168/Untitled-2_w5mou1.png" alt="" width={100} height={100} />
                            <Image src="https://res.cloudinary.com/dvixlnczm/image/upload/v1754921168/Untitled-1_zftd0j.png" alt="" width={100} height={100} />
                        </div>
                    </div>
                    <div className="flex flex-row justify-center gap-16 basis-2/3">
                        <div className="flex flex-col gap-4">
                            <p className="text-white text-sm">Company</p>
                            <Link href="/technology" className="hover:text-primary transition-colors hover:underline">
                                Technology
                            </Link>
                            <Link href="/solutions" className="hover:text-primary transition-colors hover:underline">
                                Solutions
                            </Link>
                            <Link href="/about" className="hover:text-primary transition-colors hover:underline">
                                About Us
                            </Link>
                            <Link href="/contact" className="hover:text-primary transition-colors hover:underline">
                                Contact Us
                            </Link>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-white text-sm">Resources</p>
                            <Link href="/privacy-policy" className="hover:text-primary transition-colors hover:underline">
                                Privacy policy
                            </Link>
                            <Link href="/cookie-policy" className="hover:text-primary transition-colors hover:underline">
                                Cookie policy
                            </Link>
                            <Link href="/terms-of-service" className="hover:text-primary transition-colors hover:underline">
                                Terms of Service
                            </Link>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-white text-sm">Follow Updates on our Socials</p>
                            <p className="inline-flex group items-center gap-2 hover:text-primary transition-colors"><SocialIcon href="#" icon="mdi:twitter" name="Twitter" className="text-white group-hover:text-primary transition-colors" />Twitter</p>
                            <p className="inline-flex group items-center gap-2 hover:text-primary transition-colors"><SocialIcon href="#" icon="mdi:linkedin" name="LinkedIn" className="text-white group-hover:text-primary transition-colors" />LinkedIn</p>
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