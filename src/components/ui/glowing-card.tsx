"use client";

import { Box } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export function GlowingCard({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3 ${className}`}>
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={5}
      />
      {children}
    </div>
  );
}