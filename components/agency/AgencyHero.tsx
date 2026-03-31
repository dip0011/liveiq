"use client";

import { motion } from "framer-motion";
import { AGENCY_HERO } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GridOverlay } from "@/components/ui/GridOverlay";
import { StatusIndicator } from "@/components/ui/StatusIndicator";
import { Check, ArrowRight } from "lucide-react";
import Image from "next/image";

function AgencyHero() {
  return (
    <section className="relative bg-surface overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
      <GridOverlay />
      <Container width="wide" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <StatusIndicator label="SYSTEM TYPE: AGENCY" className="mb-6" />
            </motion.div>

            <motion.h1
              className="font-display font-extrabold text-on-surface text-4xl md:text-5xl lg:text-6xl xl:text-[length:var(--font-size-display-lg)] tracking-[var(--tracking-tight)] leading-[var(--leading-display)]"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
            >
              <span className="italic text-primary">Scale</span> your{" "}
              <span className="italic text-primary">agency</span> with a world-class AI Concierge
            </motion.h1>

            <motion.p
              className="mt-6 text-on-surface-muted font-body text-[length:var(--font-size-body-lg)] leading-[var(--leading-body)] max-w-lg"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
            >
              {AGENCY_HERO.subtitle}
            </motion.p>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
            >
              <Button variant="primary" size="lg">
                {AGENCY_HERO.ctaPrimary}
                <ArrowRight size={16} />
              </Button>
            </motion.div>

            <motion.div
              className="mt-8 flex flex-wrap gap-x-6 gap-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {AGENCY_HERO.features.map((feature) => (
                <span
                  key={feature}
                  className="inline-flex items-center gap-1.5 text-[length:var(--font-size-body-sm)] text-on-surface-muted"
                >
                  <Check size={14} className="text-primary" />
                  {feature}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — Persona Card */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          >
            <div className="relative w-72 md:w-80">
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-surface-low">
                <Image
                  src={AGENCY_HERO.persona.image}
                  alt={AGENCY_HERO.persona.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 288px, 320px"
                />
              </div>
              {/* Name Card Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-surface-card/90 backdrop-blur-sm rounded-md p-4 shadow-ambient-md">
                <p className="font-display font-bold text-on-surface text-[length:var(--font-size-headline-sm)]">
                  {AGENCY_HERO.persona.name}
                </p>
                <p className="text-on-surface-muted text-[length:var(--font-size-body-sm)]">
                  {AGENCY_HERO.persona.role}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export { AgencyHero };
