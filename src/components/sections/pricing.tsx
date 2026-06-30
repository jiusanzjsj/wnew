"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";
import { Button } from "@/components/ui/button";
import { use3DTilt } from "@/hooks/use-interactions";
import { getCopy } from "@/lib/copy";

const plans = [
  {
    price: "$0",
    highlighted: false,
  },
  {
    price: "$49",
    highlighted: true,
  },
  {
    price: "Custom",
    highlighted: false,
  },
];

function PricingCard({
  plan,
  copyPlan,
  mostPopularLabel,
  index,
}: {
  plan: (typeof plans)[0];
  copyPlan: {
    name: string;
    period: string;
    description: string;
    features: readonly string[];
    cta: string;
  };
  mostPopularLabel: string;
  index: number;
}) {
  const { ref, transform, handleMouseMove, handleMouseLeave } = use3DTilt(8);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative"
      style={{ transform, transition: "transform 0.3s ease" }}
    >
      <div
        className={`relative h-full overflow-hidden rounded-3xl border p-8 transition-all duration-500 ${
          plan.highlighted
            ? "border-brand-500/30 bg-brand-500/[0.06] shadow-2xl shadow-brand-500/10"
            : "border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12]"
        }`}
      >
        {plan.highlighted && (
          <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-b from-brand-500/20 via-transparent to-transparent" />
        )}

        {plan.highlighted && (
          <div className="absolute right-6 top-6">
            <span className="rounded-full bg-brand-500/20 px-3 py-1 text-xs font-semibold text-brand-400 ring-1 ring-brand-500/30">
              {mostPopularLabel}
            </span>
          </div>
        )}

        <div className="relative z-10">
          <h3 className="text-lg font-semibold text-foreground">{copyPlan.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{copyPlan.description}</p>

          <div className="mt-6 flex items-baseline gap-1">
            <span className="text-5xl font-bold tracking-tight text-foreground">{plan.price}</span>
            {copyPlan.period && (
              <span className="text-sm text-muted-foreground">{copyPlan.period}</span>
            )}
          </div>

          <Button
            className={`mt-8 w-full py-6 text-sm font-semibold ${
              plan.highlighted
                ? "bg-brand-600 text-white shadow-lg shadow-brand-600/25 hover:bg-brand-500"
                : "glass hover:bg-white/[0.08] text-foreground"
            }`}
          >
            {copyPlan.cta}
          </Button>

          <div className="mt-8 space-y-4">
            {copyPlan.features.map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <div className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                  plan.highlighted ? "bg-brand-500/20 text-brand-400" : "bg-white/[0.06] text-muted-foreground"
                }`}>
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-sm text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { language } = useLanguage();
  const content = getCopy(language).pricing;

  return (
    <section id="pricing" className="relative py-32 overflow-hidden">
      <div className="pointer-events-none absolute left-1/4 top-0 h-[400px] w-[400px] rounded-full bg-violet-500/[0.04] blur-[100px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-0 h-[400px] w-[400px] rounded-full bg-brand-500/[0.04] blur-[100px]" />

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
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {content.description}
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <PricingCard
              key={content.plans[i].name}
              plan={plan}
              copyPlan={content.plans[i]}
              mostPopularLabel={content.mostPopular}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
