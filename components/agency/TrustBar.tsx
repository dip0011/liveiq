"use client";

import { motion } from "framer-motion";
import { AGENCY_TRUST } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { fadeIn } from "@/lib/animations";

function TrustBar() {
  return (
    <section className="py-16 lg:py-20 bg-surface-low">
      <Container width="default">
        <motion.div {...fadeIn} className="text-center">
          <p className="font-display font-semibold text-on-surface text-lg md:text-xl lg:text-2xl tracking-[var(--tracking-snug)] leading-[var(--leading-headline)] max-w-3xl mx-auto">
            {AGENCY_TRUST.headline}
          </p>
          <p className="mt-3 text-primary font-body font-medium text-[length:var(--font-size-body-md)]">
            {AGENCY_TRUST.subtitle}
          </p>
        </motion.div>
      </Container>
    </section>
  );
}

export { TrustBar };
