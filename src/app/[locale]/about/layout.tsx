import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "About Rednox Inc.",
    description: "Learn about Rednox, our mission to reduce NOx, CO2, and N2O emissions, and the team behind our breakthrough sensor technology for clean energy and agriculture.",
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
