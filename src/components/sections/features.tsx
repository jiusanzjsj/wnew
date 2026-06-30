"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Brain, Zap, Shield, Globe, BarChart3, Workflow,
} from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";
import { use3DTilt } from "@/hooks/use-interactions";
import { getCopy } from "@/lib/copy";

const features = [
  {
    icon: Brain,
    gradient: "from-violet-500/20 to-purple-600/20",
    iconColor: "text-violet-400",
  },
  {
    icon: Zap,
    gradient: "from-amber-500/20 to-orange-600/20",
    iconColor: "text-amber-400",
  },
  {
    icon: Shield,
    gradient: "from-emerald-500/20 to-green-600/20",
    iconColor: "text-emerald-400",
  },
  {
    icon: Globe,
    gradient: "from-blue-500/20 to-cyan-600/20",
    iconColor: "text-blue-400",
  },
  {
    icon: BarChart3,
    gradient: "from-pink-500/20 to-rose-600/20",
    iconColor: "text-pink-400",
  },
  {
    icon: Workflow,
    gradient: "from-brand-500/20 to-indigo-600/20",
    iconColor: "text-brand-400",
  },
];

function FeatureCard({
  feature,
  copyItem,
  index,
}: {
  feature: (typeof features)[0];
  copyItem: { title: string; description: string };
  index: number;
}) {
  const { ref, transform, handleMouseMove, handleMouseLeave } = use3DTilt(12);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.4, 0.25, 1] as const }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative"
      style={{ transform, transition: "transform 0.3s ease" }}
    >
      <div className="relative h-full overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.04]">
        {/* Hover glow */}
        <div className={`pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100`} />

        <div className="relative z-10">
          {/* Icon */}
          <div className={`mb-6 inline-flex rounded-xl border border-white/[0.06] bg-white/[0.03] p-3 ${feature.iconColor} transition-all duration-300 group-hover:scale-110 group-hover:bg-white/[0.06]`}>
            <feature.icon className="h-6 w-6" />
          </div>

          {/* Content */}
          <h3 className="mb-3 text-lg font-semibold text-foreground">
            {copyItem.title}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {copyItem.description}
          </p>
        </div>

        {/* Corner accent */}
        <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 bg-gradient-to-bl from-white/[0.03] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
    </motion.div>
  );
}

export function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { language } = useLanguage();
  const content = getCopy(language).features;

  return (
    <section id="features" className="relative py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/[0.04] blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
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
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {content.description}
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <FeatureCard key={content.items[i].title} feature={feature} copyItem={content.items[i]} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
