"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Clock, User, Share2, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useParams, useRouter } from "next/navigation"
import { blogPosts } from "@/lib/data"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function BlogPostPage() {
    const params = useParams()
    const router = useRouter()

    const currentPost = blogPosts[params.slug as keyof typeof blogPosts]
    const date = new Date(currentPost.date)

    if (!currentPost) {
        return (
            <div className="flex min-h-[100dvh] items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
                    <Link href="/blog">
                        <Button>Back to Blog</Button>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <main className="flex min-h-[100dvh] flex-col">
            <Navbar />

            <div className="flex-1">
                <section className="w-full py-12 md:py-20">
                    <div className="container px-4 md:px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="max-w-4xl mx-auto"
                        >
                            <div
                                onClick={() => router.back()}
                                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-8 cursor-pointer"
                            >
                                <ArrowLeft className="size-4" />
                                Back
                            </div>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight">
                                {currentPost.title}
                            </h1>

                            <div className="flex flex-wrap items-center gap-6 mb-8 text-muted-foreground">
                                {currentPost.author && (
                                    <div className="flex items-center gap-2">
                                        <User className="size-4" />
                                        <span>{currentPost.author}</span>
                                    </div>
                                )}
                                <div className="flex items-center gap-2">
                                    <Calendar className="size-4" />
                                    <span>{`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="size-4" />
                                    <span>{currentPost.readTime}</span>
                                </div>
                                <Button className="rounded-full bg-transparent">
                                    <Share2 className="size-4 mr-2" />
                                    Share
                                </Button>
                            </div>

                            {currentPost.image && (
                                <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-12">
                                    <Image
                                        src={currentPost.image}
                                        alt={currentPost.title}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            )}
                        </motion.div>
                    </div>
                </section>

                {/* Article Content */}
                <section className="w-full pb-20 md:pb-32">
                    <div className="container px-4 md:px-6">
                        <div className="max-w-3xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="prose prose-lg dark:prose-invert max-w-none"
                                dangerouslySetInnerHTML={{ __html: currentPost.content }}
                            />


                        </div>
                    </div>


                </section>

                {currentPost.downloadLink && currentPost.downloadCTATitle && <DownloadCTA title={currentPost.downloadCTATitle} link={currentPost.downloadLink} />}
            </div>
            <Footer />
        </main>
    )
}


function DownloadCTA({ title, link }: { title: string, link: string }) {
    return (
        <section className="w-full py-12 md:py-20">
            <div className="container px-4 md:px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-primary p-8 md:p-16 rounded-xl">
                        <p className="text-2xl font-bold">{title}</p>
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            <Button className="bg-rBlue hover:bg-rBlue/80 cursor-pointer">Download press release<Download className="size-4" /></Button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
