"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Rocket, Award, TrendingUp } from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";
import { getCopy } from "@/lib/copy";

const stats = [
  { icon: Users, value: "2,000+" },
  { icon: Rocket, value: "10M+" },
  { icon: Award, value: "99.99%" },
  { icon: TrendingUp, value: "10x" },
];

const logos = [
  "Vercel", "Stripe", "Linear", "Notion", "Figma", "Supabase",
];

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { language } = useLanguage();
  const content = getCopy(language).about;

  return (
    <section id="about" className="relative overflow-hidden py-32">
      <div className="pointer-events-none absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-brand-500/[0.04] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="glass-strong mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-brand-400">
            {content.eyebrow}
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {content.titlePrefix}{" "}
            <span className="text-gradient-static">{content.titleHighlight}</span>
            {content.titleSuffix}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {content.description}
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={content.stats[i].label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 text-center transition-all duration-500 hover:border-white/[0.12]"
            >
              <stat.icon className="mx-auto mb-4 h-6 w-6 text-brand-400 transition-transform duration-300 group-hover:scale-110" />
              <div className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{content.stats[i].label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-24 text-center"
        >
          <p className="mb-8 text-sm font-medium uppercase tracking-wider text-muted-foreground/60">
            {content.trustedBy}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {logos.map((logo, i) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                className="text-lg font-bold tracking-tight text-muted-foreground/30 transition-colors hover:text-muted-foreground/60"
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
