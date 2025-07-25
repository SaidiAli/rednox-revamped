import { BackgroundBeams } from "./Background-beams";

export default function PageHero({ title, subTitle }: { title: string; subTitle: string }) {
    return (
        <div className="w-full overflow-hidden">
            <div className="h-full py-20 w-full rounded-md bg-background relative flex flex-col items-center justify-center antialiased">
                <div className="max-w-7xl mx-auto p-4">
                    <h1 className="relative z-10 text-lg md:text-4xl bg-clip-text text-white text-center font-sans font-bold">
                        {title}
                    </h1>
                    <p className="text-white max-w-lg mx-auto my-2 text-base mt-6 text-center relative z-10">
                        {subTitle}
                    </p>
                </div>

                <BackgroundBeams />
            </div>
        </div>
    )
}