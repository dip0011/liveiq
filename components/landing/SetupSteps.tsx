"use client";

import { motion } from "framer-motion";
import { SETUP_STEPS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";

function SetupSteps() {
  return (
    <SectionWrapper surfaceLevel={1} id="ideas">
      <Container width="default">
        <SectionHeading
          headline={SETUP_STEPS.headline}
          subtitle={SETUP_STEPS.subtitle}
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {SETUP_STEPS.steps.map((step) => (
            <motion.div key={step.number} variants={staggerItem}>
              <Card hover className="h-full">
                <span className="text-technical text-primary mb-4 block">
                  {step.number}
                </span>
                <h4 className="font-display font-bold text-on-surface text-[length:var(--font-size-headline-sm)] tracking-[var(--tracking-snug)] leading-[var(--leading-headline)]">
                  {step.title}
                </h4>
                <p className="mt-3 text-on-surface-muted font-body text-[length:var(--font-size-body-sm)] leading-[var(--leading-body)]">
                  {step.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Integration Logos */}
        <motion.div {...fadeUp} className="mt-12 text-center">
          <div className="flex flex-wrap items-center justify-center gap-6 mb-4">
            {SETUP_STEPS.integrationLogos.map((logo) => (
              <span
                key={logo}
                className="text-technical-sm text-on-surface-faint/50 font-medium"
              >
                {logo}
              </span>
            ))}
          </div>
          <p className="text-on-surface-muted text-[length:var(--font-size-body-sm)]">
            {SETUP_STEPS.integrationNote}
          </p>
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}

export { SetupSteps };
