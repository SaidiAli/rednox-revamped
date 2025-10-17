import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with the Rednox team for inquiries about partnerships, careers, or our emissions sensor technology. Find our location and contact details.",
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
