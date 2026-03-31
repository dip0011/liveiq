"use client";

import { useState, type ReactNode } from "react";

interface AccordionGroupProps {
  children: (openIndex: number | null, toggle: (i: number) => void) => ReactNode;
}

function AccordionGroup({ children }: AccordionGroupProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return <div className="space-y-3">{children(openIndex, toggle)}</div>;
}

export { AccordionGroup };
