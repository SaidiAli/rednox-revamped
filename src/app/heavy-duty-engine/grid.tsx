function GridItem() {
    return (
        <div className="group relative flex flex-col border-b border-l border-r py-10 dark:border-neutral-800 lg:border-l">
            <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover:opacity-100 dark:from-neutral-800"></div>
            
            <div className="relative z-10 mb-4 px-10"></div>
            <div className="relative z-10 mb-2 px-10 text-lg font-bold">
                <div className="absolute inset-y-0 left-0 h-6 w-1 rounded-br-full rounded-tr-full bg-neutral-300 transition duration-200 group-hover:bg-blue-500 dark:bg-neutral-700"></div>
                <span className="inline-block transition duration-200 group-hover:translate-x-2">
                    Built for developers
                </span>
            </div>
            <p className="relative z-10 mx-auto max-w-xs px-10 text-sm text-muted dark:text-muted-dark">
                Built for engineers, developers, dreamers, thinkers and doers.
            </p>
        </div>
    )
}

export default function Grid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4">
            <GridItem />
            <GridItem />
            <GridItem />
            <GridItem />
        </div>
    )
}
