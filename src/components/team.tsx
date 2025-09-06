"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function Component({ id, image, name, position, email, bio }: { id: number; image: string; name: string; position: string; email?: string; bio: string }) {
    const [expandedCard, setExpandedCard] = useState<number | null>(null)

    const toggleCard = (id: number) => {
        setExpandedCard(expandedCard === id ? null : id)
    }

    return (
        <div
            key={id}
            className="overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg border border-slate-700 rounded-lg p-4 md:p-6 bg-slate-800/50 hover:bg-slate-800"
            onClick={() => {
                console.log(id)
                toggleCard(id)
            }}
        >
            <div className="">
                <div className="flex flex-row gap-3 md:gap-4 w-full">
                    <div className="relative flex-shrink-0">
                        <Image src={image} width={120} height={120} alt={name} className="object-cover rounded-lg w-full sm:w-[120px] h-[120px] mx-auto sm:mx-0" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
                    </div>
                    <div className="flex flex-col w-full items-center sm:items-start justify-center sm:justify-start">
                        <h3 className="text-lg md:text-xl font-semibold text-white text-center sm:text-left">{name}</h3>
                        <div className="flex flex-row w-full justify-between items-center mt-1 md:mt-2">
                            <p className="text-xs md:text-sm text-white/80 text-center sm:text-left flex-1">{position}</p>
                            <motion.div animate={{ rotate: expandedCard === id ? 180 : 0 }} transition={{ duration: 0.3 }} className="ml-2">
                                <Plus className="w-4 h-4 md:w-5 md:h-5 text-white bg-primary rounded-lg p-1" />
                            </motion.div>
                        </div>
                    </div>
                </div>

                <div className="">
                    <AnimatePresence mode="wait">
                        {expandedCard === id && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <div className="pt-3 md:pt-4">
                                    <p className="text-xs md:text-sm text-white mb-3 md:mb-4 leading-relaxed">{bio}</p>

                                    {email && <div className="mb-3 md:mb-4">
                                        <p className="text-xs md:text-sm font-medium text-white mb-1">Contact:</p>
                                        <a
                                            href={`mailto:${email}`}
                                            className="text-xs md:text-sm text-blue-400 hover:text-blue-300 transition-colors"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            {email}
                                        </a>
                                    </div>}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}
