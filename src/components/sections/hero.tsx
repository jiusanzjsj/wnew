"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";
import { Button } from "@/components/ui/button";
import { AuroraBackground } from "@/components/effects/aurora-background";
import { ParticleField } from "@/components/effects/particle-field";
import { getCopy } from "@/lib/copy";

const heroVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] as const },
  },
};

export function Hero() {
  const { language } = useLanguage();
  const content = getCopy(language).hero;

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">
      {/* Background layers */}
      <AuroraBackground />
      <ParticleField />
      <div className="absolute inset-0 dot-bg opacity-40" />

      {/* Radial gradient spotlight */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 bg-brand-500/[0.07] blur-[120px] rounded-full" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-8">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8 inline-flex">
            <div className="glass-strong flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">
              <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
              </span>
              <span className="text-muted-foreground">{content.badge}</span>
              <ArrowRight className="h-3.5 w-3.5 text-muted-foreground" />
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-8xl"
          >
            <span className="block text-foreground">{content.titleLine1}</span>
            <span className="block text-gradient mt-2">{content.titleLine2}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
          >
            {content.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              className="group relative overflow-hidden bg-brand-600 px-8 py-6 text-base font-semibold text-white shadow-2xl shadow-brand-600/30 transition-all hover:shadow-brand-500/40 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="relative z-10 flex items-center gap-2">
                {content.primaryCta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-500 to-brand-400 opacity-0 transition-opacity group-hover:opacity-100" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group glass px-8 py-6 text-base font-semibold transition-all hover:bg-white/[0.08]"
            >
              <Play className="h-4 w-4 transition-transform group-hover:scale-110" />
              {content.secondaryCta}
            </Button>
          </motion.div>

          {/* Social proof */}
          <motion.div
            variants={itemVariants}
            className="mt-20 flex flex-col items-center gap-6"
          >
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="h-9 w-9 rounded-full border-2 border-background bg-gradient-to-br from-brand-400 to-brand-600"
                  style={{
                    background: `linear-gradient(135deg, hsl(${260 + i * 15}, 70%, 60%), hsl(${280 + i * 15}, 60%, 50%))`,
                  }}
                />
              ))}
              <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-background bg-muted text-xs font-bold text-muted-foreground">
                2k+
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              {content.trustedPrefix} <span className="font-semibold text-foreground">{content.trustedHighlight}</span> {content.trustedSuffix}
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-10 grid gap-3 text-left sm:grid-cols-2"
          >
            {content.highlights.map((item) => (
              <div
                key={item}
                className="glass flex items-center rounded-2xl border border-white/[0.06] px-4 py-3 text-sm text-muted-foreground"
              >
                <span className="mr-3 h-2 w-2 shrink-0 rounded-full bg-brand-400" />
                {item}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
