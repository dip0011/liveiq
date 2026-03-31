"use client";

import { motion } from "framer-motion";
import { COMPARISON_TABLE } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Check, X, Minus } from "lucide-react";
import { fadeUp } from "@/lib/animations";

function ComparisonCell({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-sm bg-primary/10">
        <Check size={16} className="text-primary" />
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-sm bg-error/10">
        <X size={16} className="text-error" />
      </span>
    );
  }
  return (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-sm bg-warning/10">
      <Minus size={16} className="text-warning" />
    </span>
  );
}

function ComparisonTable() {
  return (
    <SectionWrapper surfaceLevel={0}>
      <Container width="default">
        <SectionHeading headline={COMPARISON_TABLE.headline} />

        <motion.div {...fadeUp} className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left pb-4 pr-6 text-technical-sm text-on-surface-faint font-medium w-1/2">
                  Feature
                </th>
                <th className="text-center pb-4 px-6 text-technical-sm text-primary font-medium">
                  LiveIQ
                </th>
                <th className="text-center pb-4 pl-6 text-technical-sm text-on-surface-faint font-medium">
                  Competitors
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_TABLE.rows.map((row, i) => (
                <tr
                  key={row.feature}
                  className="border-t border-outline-ghost"
                >
                  <td className="py-5 pr-6">
                    <p className="font-body font-medium text-on-surface text-[length:var(--font-size-body-md)]">
                      {row.feature}
                    </p>
                    <p className="text-on-surface-muted text-[length:var(--font-size-body-sm)] mt-0.5">
                      {row.description}
                    </p>
                  </td>
                  <td className="py-5 px-6 text-center">
                    <ComparisonCell value={row.liveiq} />
                  </td>
                  <td className="py-5 pl-6 text-center">
                    <ComparisonCell value={row.competitor} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}

export { ComparisonTable };
