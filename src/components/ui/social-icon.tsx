import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

export default function SocialIcon({ href, icon, name, className }: { href: string; icon: string; name: string, className?: string }) {
    return (
        <Link href={href} className={cn("transition-colors", className)}>
            <Icon icon={icon} />
            <span className="sr-only">{name}</span>
        </Link>
    )
}