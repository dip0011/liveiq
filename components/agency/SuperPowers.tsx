"use client";

import { motion } from "framer-motion";
import { AGENCY_COMPARISON } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp } from "@/lib/animations";
import { Check, X } from "lucide-react";

function SuperPowers() {
  return (
    <SectionWrapper surfaceLevel={0} id="features">
      <Container width="default">
        <SectionHeading headline={AGENCY_COMPARISON.headline} />

        <motion.div {...fadeUp} className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left pb-4 pr-6 text-technical-sm text-on-surface-faint font-medium w-1/4">
                  Selling Point
                </th>
                <th className="text-left pb-4 px-6 text-technical-sm text-primary font-medium w-[37.5%]">
                  <span className="inline-flex items-center gap-1.5">
                    Agencies with LiveIQ
                    <Check size={14} />
                  </span>
                </th>
                <th className="text-left pb-4 pl-6 text-technical-sm text-on-surface-faint font-medium w-[37.5%]">
                  <span className="inline-flex items-center gap-1.5">
                    Agencies without
                    <X size={14} />
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {AGENCY_COMPARISON.rows.map((row) => (
                <tr key={row.point} className="border-t border-outline-ghost">
                  <td className="py-5 pr-6">
                    <span className="font-body font-semibold text-on-surface text-[length:var(--font-size-body-md)]">
                      {row.point}
                    </span>
                  </td>
                  <td className="py-5 px-6">
                    <span className="text-on-surface font-body text-[length:var(--font-size-body-sm)] leading-[var(--leading-body)]">
                      {row.withLiveIQ}
                    </span>
                  </td>
                  <td className="py-5 pl-6">
                    <span className="text-on-surface-muted font-body text-[length:var(--font-size-body-sm)] leading-[var(--leading-body)]">
                      {row.without}
                    </span>
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

export { SuperPowers };
