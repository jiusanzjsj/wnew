"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/components/providers/language-provider";
import { getCopy } from "@/lib/copy";

const footerCategories = ["Product", "Company", "Resources", "Legal"] as const;

export function Footer() {
  const { language } = useLanguage();
  const content = getCopy(language).footer;

  return (
    <footer className="relative border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <motion.a
              href="#"
              className="mb-4 flex items-center gap-2.5 text-lg font-bold tracking-tight"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-8 w-28">
                <Image src="/logo-write.png" alt="GPUAI logo" fill className="object-contain object-left" sizes="112px" />
              </div>
            </motion.a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {content.description}
            </p>
            <div className="mt-6 flex gap-4">
              {["X", "GH", "LI", "YT"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.02] text-xs font-bold text-muted-foreground transition-all hover:border-white/[0.12] hover:bg-white/[0.06] hover:text-foreground"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {footerCategories.map((category) => (
            <div key={category}>
              <h4 className="mb-4 text-sm font-semibold text-foreground">{content.categories[category]}</h4>
              <ul className="space-y-3">
                {content.links[category].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} GPUAI, Inc. {content.copyright}
          </p>
          <div className="flex items-center gap-1">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs text-muted-foreground">{content.status}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
