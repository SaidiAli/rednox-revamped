import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

export default function SocialIcon({ href, icon, name }: { href: string; icon: string; name: string }) {
    return (
        <Link href={href} className="text-muted-foreground hover:text-foreground transition-colors">
            <Icon icon={icon} />
            <span className="sr-only">{name}</span>
        </Link>
    )
}