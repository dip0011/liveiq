"use client";

import { motion } from "framer-motion";
import { PRICING_TIERS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

function PricingSection() {
  return (
    <SectionWrapper surfaceLevel={0} id="pricing">
      <Container width="default">
        <SectionHeading
          terminalLabel="PRICING"
          headline="Investment Tiers"
          subtitle="Transparent pricing for every stage of growth"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {PRICING_TIERS.map((tier) => (
            <motion.div key={tier.name} variants={staggerItem} className="flex">
              <div
                className={cn(
                  "flex flex-col w-full rounded-md bg-surface-card p-8 transition-transform duration-[var(--duration-fast)] ease-[var(--ease-sovereign)] hover:-translate-y-1",
                  tier.featured
                    ? "border-2 border-primary relative"
                    : "ghost-border"
                )}
              >
                {/* RECOMMENDED badge for featured tier */}
                {tier.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-block bg-primary text-on-primary text-technical-sm font-medium px-4 py-1.5 rounded-sm whitespace-nowrap">
                      RECOMMENDED
                    </span>
                  </div>
                )}

                {/* Card Content */}
                <div className="flex-1">
                  <h4 className="font-display font-bold text-on-surface text-[length:var(--font-size-headline-md)] tracking-[var(--tracking-snug)]">
                    {tier.name}
                  </h4>
                  <p className="mt-2 text-on-surface-muted text-[length:var(--font-size-body-sm)] leading-[var(--leading-body)]">
                    {tier.description}
                  </p>
                </div>

                {/* CTA pinned to bottom */}
                <div className="mt-8">
                  <Button
                    variant={tier.featured ? "primary" : "ghost"}
                    size="md"
                    className="w-full"
                  >
                    {tier.cta}
                    <ArrowRight size={16} />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}

export { PricingSection };
