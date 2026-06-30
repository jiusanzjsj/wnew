"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";
import { Button } from "@/components/ui/button";
import { getCopy } from "@/lib/copy";

export function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { language } = useLanguage();
  const content = getCopy(language).cta;

  return (
    <section className="relative overflow-hidden py-32">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] as const }}
          className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-brand-600/10 via-brand-500/5 to-violet-600/10 p-16 text-center sm:p-24"
        >
          <div className="pointer-events-none absolute -left-40 -top-40 h-80 w-80 rounded-full bg-brand-500/20 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-violet-500/20 blur-[80px]" />
          <div className="absolute inset-0 dot-bg opacity-30" />

          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
            >
              {content.titlePrefix}{" "}
              <span className="text-gradient-static">{content.titleHighlight}</span>
              {content.titleSuffix}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground"
            >
              {content.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Button
                size="lg"
                className="group bg-brand-600 px-8 py-6 text-base font-semibold text-white shadow-2xl shadow-brand-600/30 hover:bg-brand-500 hover:shadow-brand-500/40 hover:scale-[1.02] active:scale-[0.98]"
              >
                {content.primaryCta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="glass px-8 py-6 text-base font-semibold hover:bg-white/[0.08]"
              >
                {content.secondaryCta}
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex flex-col items-center gap-3 text-sm text-muted-foreground"
            >
              {content.supportPoints.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-brand-400" />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
