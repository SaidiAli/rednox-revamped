export default function SectionTitle({ title }: { title: string }) {
    return (
        <div className="px-4 py-2 rounded-full bg-primary/20 ring-1 ring-primary mb-4 w-fit">
            <h2 className="text-xs font-bold text-white capitalize">{title}</h2>
        </div>
    )
}