import Link from "next/link";
import SocialIcon from "./ui/social-icon";
import Image from "next/image";

export default function Footer({ className }: { className?: string }) {
    return (
        <footer className={`w-full bg-background/95 backdrop-blur-sm ${className}`}>
            <div className="container flex flex-col gap-8 px-4 py-10 md:px-6 lg:py-16">
                <div className="flex flex-row justify-between items-center">
                    <div className="space-y-4">
                        <p className="text-xs text-muted-foreground">
                            &copy; {new Date().getFullYear()} Rednox Inc. All rights reserved.
                        </p>
                        <div className="flex gap-4">
                            <SocialIcon href="#" icon="mdi:twitter" name="Twitter" />
                            <SocialIcon href="#" icon="mdi:linkedin" name="LinkedIn" />
                        </div>
                    </div>
                    <div className="flex flex-row gap-4">
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
        </footer>
    )
}