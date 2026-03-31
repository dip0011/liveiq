"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TESTIMONIAL } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { Play } from "lucide-react";
import { fadeUp } from "@/lib/animations";

function TestimonialSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="py-20 lg:py-28 bg-surface" id="testimonials">
      <Container width="wide">
        <motion.div {...fadeUp}>
          <div className="relative w-full aspect-[3/4] sm:aspect-[16/10] md:aspect-[16/8] rounded-lg overflow-hidden bg-[#1a1630]">
            {/* Dark gradient backdrop */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1630] via-[#1e1a3a] to-[#141025]" />

            {/* Subtle vertical light streaks */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute left-[20%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
              <div className="absolute left-[40%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
              <div className="absolute left-[60%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
              <div className="absolute left-[80%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
            </div>

            {playing ? (
              <iframe
                className="absolute inset-0 w-full h-full z-20"
                src={`https://www.youtube.com/embed/${TESTIMONIAL.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                title="Testimonial video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <>
                {/* Large Background Text */}
                <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none select-none">
                  <span className="font-display font-extrabold text-[clamp(2.5rem,8vw,7rem)] tracking-[var(--tracking-tight)] text-[#c9a84c]/20 leading-none">
                    Testimonial
                  </span>
                </div>

                {/* Play Button — highest z so text never blocks it */}
                <button
                  onClick={() => setPlaying(true)}
                  className="absolute inset-0 z-20 flex items-center justify-center cursor-pointer group"
                  aria-label="Play testimonial video"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-sm bg-surface-card/10 backdrop-blur-sm border border-surface-card/20 flex items-center justify-center group-hover:bg-surface-card/20 transition-all duration-[var(--duration-normal)]">
                    <Play size={28} className="text-surface-card ml-1" fill="currentColor" />
                  </div>
                </button>

                {/* Bottom overlay with all copy — pointer-events-none so play button stays clickable */}
                <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none bg-gradient-to-t from-[#0e0b1a]/90 via-[#0e0b1a]/60 to-transparent pt-20 md:pt-28 px-4 sm:px-6 md:px-10 pb-4 sm:pb-6 md:pb-8">
                  {/* Row 1: Quote left + Attribution right */}
                  <div className="flex items-start justify-between gap-6 mb-4 md:mb-5">
                    <div>
                      <span className="text-technical-sm text-surface-card/50 block mb-1.5">
                        {TESTIMONIAL.title}
                      </span>
                      <p className="font-body text-surface-card text-[length:var(--font-size-body-sm)] md:text-[length:var(--font-size-body-md)] leading-[var(--leading-body)]">
                        {TESTIMONIAL.quote}
                      </p>
                    </div>
                    <div className="text-right shrink-0 hidden sm:block">
                      <p className="font-display font-bold text-surface-card text-[length:var(--font-size-body-md)]">
                        {TESTIMONIAL.attribution}
                      </p>
                      <p className="text-surface-card/50 text-[length:var(--font-size-body-sm)]">
                        {TESTIMONIAL.attributionRole}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export { TestimonialSection };
