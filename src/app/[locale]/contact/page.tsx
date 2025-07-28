"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Send, Car } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import Navbar from "@/components/Navbar"
import { TitleHighlight } from "@/components/title-highlight"
import Footer from "@/components/Footer"
import Map from "@/components/map"
import { useTranslations } from "next-intl";

export default function ContactPage() {
    const t = useTranslations("Contact");
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSelectChange = (value: string) => {
        setFormData((prev) => ({ ...prev, subject: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 2000))

        // Reset form
        setFormData({
            name: "",
            email: "",
            company: "",
            subject: "",
            message: "",
        })
        setIsSubmitting(false)

        // You would typically show a success message here
        alert("Thank you for your message! We'll get back to you soon.")
    }

    const locations = [
        {
            city: "Fremont",
            address: "3467 Pinewood Terrace",
            zipCode: "CA 94536",
            phone: "+1 (925) 640 4183",
            email: "solomon@rednoxinc.com",
        }
    ]

    return (
        <div className="flex min-h-[100dvh] flex-col">

            <main className="flex-1">
                <Navbar />

                <div className="container mx-auto h-[20rem] flex flex-col justify-center">
                    <TitleHighlight title={t("title")} />
                </div>

                {/* Contact Section */}
                <section className="w-full py-20 md:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                            {/* Contact Form */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Card className="border-none backdrop-blur">
                                    <CardHeader>
                                        <CardTitle className="text-2xl font-bold">{t("form.title")}</CardTitle>
                                        <p className="text-muted-foreground">
                                            {t("form.subTitle")}
                                        </p>
                                    </CardHeader>
                                    <CardContent>
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="space-y-2">
                                                <Label htmlFor="subject">{t("form.subjectSelect.label")}</Label>
                                                <Select value={formData.subject} onValueChange={handleSelectChange} required>
                                                    <SelectTrigger className="w-full border-moody">
                                                        <SelectValue placeholder={t("form.subjectSelect.placeholder")} />
                                                    </SelectTrigger>
                                                    <SelectContent className="bg-white">
                                                        <SelectItem className="text-black hover:bg-gray-100" value="general">{t("form.subjectSelect.options.1")}</SelectItem>
                                                        <SelectItem className="text-black hover:bg-gray-100" value="careers">{t("form.subjectSelect.options.2")}</SelectItem>
                                                        <SelectItem className="text-black hover:bg-gray-100" value="investors">{t("form.subjectSelect.options.3")}</SelectItem>
                                                        <SelectItem className="text-black hover:bg-gray-100" value="partnering">{t("form.subjectSelect.options.4")}</SelectItem>
                                                        <SelectItem className="text-black hover:bg-gray-100" value="other">Other</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className="grid sm:grid-cols-2 gap-4">

                                                <div className="space-y-2">
                                                    <Label htmlFor="name">{t("form.name.label")}</Label>
                                                    <Input
                                                        id="name"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleInputChange}
                                                        placeholder={t("form.name.placeholder")}
                                                        className="border-moody"
                                                        required
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="email">{t("form.email.label")}</Label>
                                                    <Input
                                                        id="email"
                                                        name="email"
                                                        type="email"
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        placeholder={t("form.email.placeholder")}
                                                        className="border-moody"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="company">{t("form.company.label")}</Label>
                                                <Input
                                                    id="company"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleInputChange}
                                                    placeholder={t("form.company.placeholder")}
                                                    className="border-moody"
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="message">{t("form.message.label")}</Label>
                                                <Textarea
                                                    id="message"
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleInputChange}
                                                    placeholder={t("form.message.placeholder")}
                                                    rows={6}
                                                    className="border-moody focus:border-moody"
                                                    required
                                                />
                                            </div>
                                            <Button type="submit" className="w-full rounded-full bg-gradient-to-r from-primary to-[#F24229] hover:scale-105 transition duration-300 cursor-pointer" disabled={isSubmitting}>
                                                {isSubmitting ? (
                                                    "Sending..."
                                                ) : (
                                                    <>
                                                        {t("form.submit")}
                                                        <Send className="ml-2 size-4" />
                                                    </>
                                                )}
                                            </Button>
                                        </form>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            {/* Locations and Map */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="space-y-8"
                            >
                                {/* Map */}
                                <Map />

                                {/* Locations */}
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-bold">{t("locations.title")}</h3>
                                    <div className="space-y-4">
                                        {locations.map((location, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.3, delay: i * 0.1 }}
                                            >
                                                <Card className="border-none backdrop-blur">
                                                    <CardContent className="p-6">
                                                        <h4 className="text-lg font-semibold mb-4">{location.city}</h4>
                                                        <div className="space-y-3 text-sm">
                                                            <div className="flex items-start gap-3">
                                                                <MapPin className="size-4 text-primary mt-0.5 flex-shrink-0" />
                                                                <div>
                                                                    <p>{location.address}</p>
                                                                    <p className="text-muted-foreground">{location.zipCode}</p>
                                                                </div>
                                                            </div>
                                                            <div className="flex items-center gap-3">
                                                                <Phone className="size-4 text-primary flex-shrink-0" />
                                                                <a
                                                                    href={`tel:${location.phone}`}
                                                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                                                >
                                                                    {location.phone}
                                                                </a>
                                                            </div>
                                                            <div className="flex items-center gap-3">
                                                                <Mail className="size-4 text-primary flex-shrink-0" />
                                                                <a
                                                                    href={`mailto:${location.email}`}
                                                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                                                >
                                                                    {location.email}
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Quick Contact Info */}
                                <Card className="border-none backdrop-blur">
                                    <CardContent className="p-6">
                                        <h4 className="text-lg font-semibold mb-4">{t("locations.parking.title")}</h4>
                                        <div className="space-y-3 text-sm">
                                            <div className="flex items-center gap-3">
                                                <Car className="size-4 text-primary" />
                                                <div>
                                                    <p className="font-medium">{t("locations.parking.subTitle")}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
