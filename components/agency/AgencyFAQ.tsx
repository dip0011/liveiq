"use client";

import { motion } from "framer-motion";
import { AGENCY_FAQ } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { AccordionGroup } from "@/components/ui/AccordionGroup";
import { AccordionItem } from "@/components/ui/AccordionItem";
import { Button } from "@/components/ui/Button";
import { fadeUp } from "@/lib/animations";

function AgencyFAQ() {
  return (
    <SectionWrapper surfaceLevel={1} id="faq">
      <Container width="default">
        <motion.div {...fadeUp}>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16">
            {/* Left — Heading */}
            <div>
              <h2 className="font-display font-bold text-on-surface text-3xl md:text-4xl lg:text-[length:var(--font-size-display-sm)] tracking-[var(--tracking-tight)] leading-[var(--leading-headline)]">
                {AGENCY_FAQ.headline}
              </h2>
              <p className="mt-4 text-on-surface-muted font-body text-[length:var(--font-size-body-md)] leading-[var(--leading-body)]">
                {AGENCY_FAQ.subtitle}
              </p>
              <div className="mt-6">
                <Button variant="primary" size="md">
                  Let&apos;s talk
                </Button>
              </div>
            </div>

            {/* Right — Accordion */}
            <AccordionGroup>
              {(openIndex, toggle) =>
                AGENCY_FAQ.items.map((item, i) => (
                  <AccordionItem
                    key={i}
                    question={item.question}
                    answer={item.answer}
                    isOpen={openIndex === i}
                    onToggle={() => toggle(i)}
                  />
                ))
              }
            </AccordionGroup>
          </div>
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}

export { AgencyFAQ };
