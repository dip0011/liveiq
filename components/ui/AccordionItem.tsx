"use client";

import { cn } from "@/lib/cn";
import { Plus, Minus } from "lucide-react";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ question, answer, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="bg-surface-card rounded-md overflow-hidden">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full px-6 py-5 text-left cursor-pointer"
      >
        <span className="font-body font-medium text-on-surface text-[length:var(--font-size-body-md)] pr-4">
          {question}
        </span>
        <span className="flex-shrink-0 text-on-surface-muted">
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>
      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-[var(--duration-normal)] ease-[var(--ease-sovereign)]",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-on-surface-muted font-body text-[length:var(--font-size-body-sm)] leading-[var(--leading-body)]">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export { AccordionItem };
