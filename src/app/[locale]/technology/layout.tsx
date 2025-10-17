import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Sensor Technology",
    description: "Explore the science behind Rednox's high-performance sensors, from our Mixed-Potential Ceramic Stack for NOx to the NDIR Module for AgriNOx (N2O) detection.",
}

export default function TechnologyLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
