"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, Plus } from "lucide-react"
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
            className="overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg border-none rounded-none"
            onClick={() => {
                console.log(id)
                toggleCard(id)
            }}
        >
            <div className="p-0">
                <div className="flex flex-row gap-4 w-full">
                    <div className="relative">
                        <Image src={image} width={100} height={100} alt={name} className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                    <div className="flex flex-col w-full items-start mb-2">
                        <h3 className="text-xl font-semibold text-white">{name}</h3>
                        <div className="flex flex-row w-full justify-between">
                            <p className="text-sm text-white">{position}</p>
                            <motion.div animate={{ rotate: expandedCard === id ? 180 : 0 }} transition={{ duration: 0.3 }}>
                                <Plus className="w-5 h-5 white bg-primary rounded-lg" />
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
                                <div className="pt-4">
                                    <p className="text-sm text-white mb-4">{bio}</p>

                                    {email && <div className="mb-4">
                                        <p className="text-sm font-medium text-white mb-1">Contact:</p>
                                        <a
                                            href={`mailto:${email}`}
                                            className="text-sm text-blue-600 hover:text-blue-800"
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
