"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LANDING_HERO } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GridOverlay } from "@/components/ui/GridOverlay";
import { StatusIndicator } from "@/components/ui/StatusIndicator";
import {
  Check,
  Play,
  PhoneCall,
  CalendarCheck,
  TrendingUp,
  BarChart3,
  Rocket,
} from "lucide-react";
import Image from "next/image";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  PhoneCall,
  CalendarCheck,
  TrendingUp,
  BarChart3,
  Rocket,
  Check,
};

function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const personas = LANDING_HERO.personas;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % personas.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [personas.length]);

  const persona = personas[activeIndex];

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
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
            >
              <StatusIndicator label="SYSTEM STATUS: ACTIVE" className="mb-6" />
            </motion.div>

            <motion.h1
              className="font-display font-extrabold text-on-surface text-4xl md:text-5xl lg:text-6xl xl:text-[length:var(--font-size-display-lg)] tracking-[var(--tracking-tight)] leading-[var(--leading-display)]"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
            >
              The AI front desk built to grow{" "}
              <span className="italic text-primary">Medical, Fitness, & Wellness</span>{" "}
              franchises
            </motion.h1>

            <motion.p
              className="mt-6 text-on-surface-muted font-body text-[length:var(--font-size-body-lg)] leading-[var(--leading-body)] max-w-lg"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
            >
              {LANDING_HERO.subtitle}
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
            >
              <Button variant="primary" size="lg">
                <Play size={16} fill="currentColor" />
                {LANDING_HERO.ctaPrimary}
              </Button>
              <Button variant="ghost" size="lg">
                {LANDING_HERO.ctaSecondary}
              </Button>
            </motion.div>

            <motion.div
              className="mt-8 flex flex-wrap gap-x-6 gap-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {LANDING_HERO.features.map((feature) => (
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

          {/* Right — Rotating Rectangular Persona Card */}
          <motion.div
            className="relative flex justify-center lg:justify-end lg:-mt-16"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          >
            <div className="relative w-72 md:w-80">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
                  className="relative"
                >
                  {/* Image wrapper — relative so tags can position off it */}
                  <div className="relative">
                    {/* Floating Tags — right-aligned, first one half above image top edge */}
                    {persona.tags.map((tag, i) => {
                      const TagIcon = iconMap[tag.icon];
                      return (
                        <motion.div
                          key={tag.label}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.25 + i * 0.15, duration: 0.4 }}
                          className="absolute z-10 right-0 shadow-ambient-md"
                          style={{ top: i === 0 ? "-18px" : "28px" }}
                        >
                          <div
                            className="flex items-center gap-2 px-3.5 py-2 rounded-sm text-[length:var(--font-size-body-sm)] font-medium text-on-primary whitespace-nowrap"
                            style={{ backgroundColor: persona.color }}
                          >
                            {i === 0 && TagIcon && <TagIcon size={14} />}
                            {tag.label}
                            {i === 1 && TagIcon && <TagIcon size={14} />}
                          </div>
                        </motion.div>
                      );
                    })}

                    {/* Rectangular image */}
                    <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-surface-low">
                      <Image
                        src={persona.image}
                        alt={persona.name}
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 768px) 288px, 320px"
                      />
                      {/* Name Card Overlay — inside the image */}
                      <div className="absolute bottom-4 left-4 right-4 bg-surface-card/90 backdrop-blur-sm rounded-md p-4 shadow-ambient-md">
                        <p className="font-display font-bold text-on-surface text-[length:var(--font-size-headline-sm)]">
                          Hi, I&apos;m{" "}
                          <span style={{ color: persona.color }}>{persona.name}</span>
                        </p>
                        <p className="text-on-surface-muted text-[length:var(--font-size-body-sm)]">
                          Your new{" "}
                          <span className="font-medium" style={{ color: persona.color }}>
                            {persona.role}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Dot indicators */}
              <div className="flex items-center justify-center gap-2 mt-5">
                {personas.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className="cursor-pointer p-1"
                    aria-label={`Show persona ${i + 1}`}
                  >
                    <div
                      className="w-2 h-2 rounded-full transition-all duration-[var(--duration-normal)]"
                      style={{
                        backgroundColor:
                          i === activeIndex
                            ? personas[activeIndex].color
                            : "var(--color-on-surface-faint)",
                        opacity: i === activeIndex ? 1 : 0.3,
                        transform: i === activeIndex ? "scale(1.25)" : "scale(1)",
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export { HeroSection };
