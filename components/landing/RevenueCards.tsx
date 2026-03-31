"use client";

import { motion } from "framer-motion";
import { REVENUE_CARDS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { staggerContainer, staggerItem } from "@/lib/animations";
import {
  PhoneIncoming,
  UserPlus,
  CalendarCheck,
  RefreshCw,
  CreditCard,
  Star,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  PhoneIncoming,
  UserPlus,
  CalendarCheck,
  RefreshCw,
  CreditCard,
  Star,
};

function RevenueCards() {
  return (
    <SectionWrapper surfaceLevel={0}>
      <Container width="default">
        <SectionHeading
          headline="Revenue Amplification"
          subtitle="Six powerful ways LiveIQ drives revenue for your business"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {REVENUE_CARDS.map((card) => {
            const Icon = iconMap[card.icon];
            return (
              <motion.div key={card.title} variants={staggerItem}>
                <Card hover className="h-full ghost-border">
                  {Icon && (
                    <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center mb-5">
                      <Icon size={20} className="text-primary" />
                    </div>
                  )}
                  <h4 className="font-display font-bold text-on-surface text-[length:var(--font-size-headline-sm)] tracking-[var(--tracking-snug)] leading-[var(--leading-headline)]">
                    {card.title}
                  </h4>
                  <p className="mt-3 text-on-surface-muted font-body text-[length:var(--font-size-body-sm)] leading-[var(--leading-body)]">
                    {card.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}

export { RevenueCards };
