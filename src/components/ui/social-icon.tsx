import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function SocialIcon({ icon, name, className }: { icon: string; name: string, className?: string }) {
    return (
        <div className={cn("transition-colors", className)}>
            <Icon icon={icon} />
            <span className="sr-only">{name}</span>
        </div>
    )
}