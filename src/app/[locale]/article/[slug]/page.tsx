"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useParams, useRouter } from "next/navigation"
import { blogPosts } from "@/lib/data"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function BlogPostPage() {
    const params = useParams()
    const router = useRouter()

    const currentPost = blogPosts[params.slug as keyof typeof blogPosts]

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
                {/* Article Header */}
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
                                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-8"
                            >
                                <ArrowLeft className="size-4" />
                                Back
                            </div>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight">
                                {currentPost.title}
                            </h1>

                            <div className="flex flex-wrap items-center gap-6 mb-8 text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <User className="size-4" />
                                    <span>{currentPost.author}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar className="size-4" />
                                    <span>{new Date(currentPost.date).toLocaleDateString()}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="size-4" />
                                    <span>{currentPost.readTime}</span>
                                </div>
                                <Button variant="outline" size="sm" className="rounded-full bg-transparent">
                                    <Share2 className="size-4 mr-2" />
                                    Share
                                </Button>
                            </div>

                            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-12">
                                <Image
                                    src={"/bg1.jpeg"}
                                    alt={currentPost.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
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

                            {/* Author Bio */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="mt-16 pt-8 border-t border-border/40"
                            >
                                <Card className="border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="size-16 rounded-full bg-muted flex items-center justify-center text-foreground font-medium text-xl">
                                                {currentPost.author.charAt(0)}
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold mb-2">{currentPost.author}</h3>
                                                <p className="text-muted-foreground mb-4">
                                                    Content strategist and SaaS expert with over 8 years of experience helping companies scale
                                                    their operations and improve team productivity.
                                                </p>
                                                <div className="flex gap-2">
                                                    <Button variant="outline" size="sm" className="rounded-full bg-transparent">
                                                        Follow
                                                    </Button>
                                                    <Button variant="ghost" size="sm" className="rounded-full">
                                                        <BookOpen className="size-4 mr-2" />
                                                        More Articles
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </main>
    )
}
