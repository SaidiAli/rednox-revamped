"use client"

import type React from "react"

import { useState } from "react"
import { sendContactEmail } from "@/actions/email"
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
    const [submitMessage, setSubmitMessage] = useState("")
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
        setSubmitMessage("")

        try {
            const result = await sendContactEmail(formData)
            
            if (result.success) {
                setFormData({
                    name: "",
                    email: "",
                    company: "",
                    subject: "",
                    message: "",
                })
                setSubmitMessage("Thank you for your message! We'll get back to you soon.")
            } else {
                setSubmitMessage("There was an error sending your message. Please try again or contact us directly.")
                console.error("Email sending failed:", result.error)
            }
        } catch (error) {
            setSubmitMessage("There was an error sending your message. Please try again or contact us directly.")
            console.error("Form submission error:", error)
        } finally {
            setIsSubmitting(false)
        }
    }

    const locations = [
        {
            city: "Vetri Labs",
            address: "45277 Fremont Blvd #3, Fremont, CA 94538",
            zipCode: "CA 94536",
            phone: "+1 (925) 640 4183",
            email: "solomon@rednoxinc.com",
        }
    ]

    return (
        <div className="flex min-h-[100dvh] flex-col">

            <main className="flex-1">
                <Navbar />

                <div className="container mx-auto px-4 h-[16rem] md:h-[20rem] flex flex-col justify-center">
                    <TitleHighlight title={t("title")} />
                </div>

                {/* Contact Section */}
                <section className="w-full py-12 md:py-20 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
                            {/* Contact Form */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Card className="border-none backdrop-blur">
                                    <CardHeader className="p-4 md:p-6">
                                        <CardTitle className="text-xl md:text-2xl font-bold text-white">{t("form.title")}</CardTitle>
                                        <p className="text-white/80 text-sm md:text-base">
                                            {t("form.subTitle")}
                                        </p>
                                    </CardHeader>
                                    <CardContent className="p-4 md:p-6">
                                        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                                        <div className="space-y-2">
                                                <Label htmlFor="subject" className="text-sm md:text-base">{t("form.subjectSelect.label")}</Label>
                                                <Select value={formData.subject} onValueChange={handleSelectChange} required>
                                                    <SelectTrigger className="w-full border-moody h-10 md:h-11">
                                                        <SelectValue placeholder={t("form.subjectSelect.placeholder")} className="text-sm md:text-base" />
                                                    </SelectTrigger>
                                                    <SelectContent className="bg-white">
                                                        <SelectItem className="text-black hover:bg-gray-100 text-sm md:text-base" value="general">{t("form.subjectSelect.options.1")}</SelectItem>
                                                        <SelectItem className="text-black hover:bg-gray-100 text-sm md:text-base" value="careers">{t("form.subjectSelect.options.2")}</SelectItem>
                                                        <SelectItem className="text-black hover:bg-gray-100 text-sm md:text-base" value="investors">{t("form.subjectSelect.options.3")}</SelectItem>
                                                        <SelectItem className="text-black hover:bg-gray-100 text-sm md:text-base" value="partnering">{t("form.subjectSelect.options.4")}</SelectItem>
                                                        <SelectItem className="text-black hover:bg-gray-100 text-sm md:text-base" value="other">Other</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                                                <div className="space-y-2">
                                                    <Label htmlFor="name" className="text-sm md:text-base">{t("form.name.label")}</Label>
                                                    <Input
                                                        id="name"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleInputChange}
                                                        placeholder={t("form.name.placeholder")}
                                                        className="border-moody h-10 md:h-11 text-sm md:text-base"
                                                        required
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="email" className="text-sm md:text-base">{t("form.email.label")}</Label>
                                                    <Input
                                                        id="email"
                                                        name="email"
                                                        type="email"
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        placeholder={t("form.email.placeholder")}
                                                        className="border-moody h-10 md:h-11 text-sm md:text-base"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="company" className="text-sm md:text-base">{t("form.company.label")}</Label>
                                                <Input
                                                    id="company"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleInputChange}
                                                    placeholder={t("form.company.placeholder")}
                                                    className="border-moody h-10 md:h-11 text-sm md:text-base"
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="message" className="text-sm md:text-base">{t("form.message.label")}</Label>
                                                <Textarea
                                                    id="message"
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleInputChange}
                                                    placeholder={t("form.message.placeholder")}
                                                    rows={4}
                                                    className="border-moody focus:border-moody text-sm md:text-base min-h-[100px] md:min-h-[120px]"
                                                    required
                                                />
                                            </div>
                                            {submitMessage && (
                                                <div className={`text-sm md:text-base p-3 rounded-lg ${
                                                    submitMessage.includes("error") 
                                                        ? "bg-red-500/20 text-red-200 border border-red-500/30" 
                                                        : "bg-green-500/20 text-green-200 border border-green-500/30"
                                                }`}>
                                                    {submitMessage}
                                                </div>
                                            )}
                                            <Button type="submit" className="w-full h-11 md:h-12 rounded-full bg-gradient-to-r from-primary to-[#F24229] hover:scale-105 transition duration-300 cursor-pointer text-sm md:text-base" disabled={isSubmitting}>
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
                                <div className="space-y-4 md:space-y-6">
                                    <h3 className="text-xl md:text-2xl font-bold text-white">{t("locations.title")}</h3>
                                    <div className="space-y-3 md:space-y-4">
                                        {locations.map((location, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.3, delay: i * 0.1 }}
                                            >
                                                <Card className="border-none backdrop-blur">
                                                    <CardContent className="p-4 md:p-6">
                                                        <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-white">{location.city}</h4>
                                                        <div className="space-y-3 text-xs md:text-sm">
                                                            <div className="flex items-start gap-3">
                                                                <MapPin className="size-4 text-primary mt-0.5 flex-shrink-0" />
                                                                <div>
                                                                    <p className="text-white">{location.address}</p>
                                                                    <p className="text-white/70">{location.zipCode}</p>
                                                                </div>
                                                            </div>
                                                            <div className="flex items-center gap-3">
                                                                <Phone className="size-4 text-primary flex-shrink-0" />
                                                                <a
                                                                    href={`tel:${location.phone}`}
                                                                    className="text-white/70 hover:text-white transition-colors"
                                                                >
                                                                    {location.phone}
                                                                </a>
                                                            </div>
                                                            <div className="flex items-center gap-3">
                                                                <Mail className="size-4 text-primary flex-shrink-0" />
                                                                <a
                                                                    href={`mailto:${location.email}`}
                                                                    className="text-white/70 hover:text-white transition-colors break-all"
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
                                    <CardContent className="p-4 md:p-6">
                                        <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-white">{t("locations.parking.title")}</h4>
                                        <div className="space-y-3 text-xs md:text-sm">
                                            <div className="flex items-center gap-3">
                                                <Car className="size-4 text-primary" />
                                                <div>
                                                    <p className="font-medium text-white">{t("locations.parking.subTitle")}</p>
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
