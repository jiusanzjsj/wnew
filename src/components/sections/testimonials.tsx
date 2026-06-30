"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";
import { getCopy } from "@/lib/copy";

const testimonials = [
  {
    name: "Sarah Chen",
    rating: 5,
    avatar: "SC",
  },
  {
    name: "Marcus Williams",
    rating: 5,
    avatar: "MW",
  },
  {
    name: "Priya Patel",
    rating: 5,
    avatar: "PP",
  },
  {
    name: "James Morrison",
    rating: 5,
    avatar: "JM",
  },
  {
    name: "Aiko Tanaka",
    rating: 5,
    avatar: "AT",
  },
  {
    name: "David Kim",
    rating: 5,
    avatar: "DK",
  },
];

function TestimonialCard({
  testimonial,
  copyItem,
  index,
}: {
  testimonial: (typeof testimonials)[0];
  copyItem: { role: string; content: string };
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative w-[380px] flex-shrink-0"
    >
      <div className="relative h-full rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.04]">
        <Quote className="mb-4 h-8 w-8 text-brand-500/30" />

        <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
          &ldquo;{copyItem.content}&rdquo;
        </p>

        <div className="mb-4 flex items-center gap-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-xs font-bold text-white">
            {testimonial.avatar}
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
            <p className="text-xs text-muted-foreground">{copyItem.role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { language } = useLanguage();
  const content = getCopy(language).testimonials;
  const marqueeRow = [...testimonials, ...testimonials];
  const reversedMarqueeRow = [...marqueeRow].reverse();

  return (
    <section id="testimonials" className="relative overflow-hidden py-32">
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
      </div>

      <div className="relative mt-20">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-background to-transparent" />

        <div className="flex animate-marquee gap-6" style={{ width: "max-content" }}>
          {marqueeRow.map((t, i) => (
            <TestimonialCard
              key={`row1-${i}`}
              testimonial={t}
              copyItem={content.items[i % testimonials.length]}
              index={i % testimonials.length}
            />
          ))}
        </div>
      </div>

      <div className="relative mt-6">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-background to-transparent" />

        <div
          className="flex animate-marquee gap-6"
          style={{ width: "max-content", animationDirection: "reverse" }}
        >
          {reversedMarqueeRow.map((t, i) => {
            const sourceIndex = testimonials.length - 1 - (i % testimonials.length);

            return (
              <TestimonialCard
                key={`row2-${i}`}
                testimonial={t}
                copyItem={content.items[sourceIndex]}
                index={i % testimonials.length}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
