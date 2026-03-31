"use client";

import { motion } from "framer-motion";
import { LOGOS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { fadeIn } from "@/lib/animations";

function LogosBar() {
  return (
    <section className="py-12 lg:py-16 bg-surface">
      <Container width="wide">
        <motion.div {...fadeIn} className="text-center">
          <p className="text-technical-sm text-on-surface-faint mb-8">
            Proudly serving industry leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
            {LOGOS.map((logo) => (
              <span
                key={logo}
                className="font-display font-bold text-on-surface-faint/40 text-lg md:text-xl tracking-[var(--tracking-snug)] hover:text-on-surface-muted transition-colors duration-[var(--duration-normal)] select-none"
              >
                {logo}
              </span>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export { LogosBar };
