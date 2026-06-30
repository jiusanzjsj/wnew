"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";
import { Button } from "@/components/ui/button";
import { getCopy } from "@/lib/copy";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const content = getCopy(language).navbar;
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 0.8]);
  const blur = useTransform(scrollY, [0, 100], [0, 24]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backdropFilter: useTransform(blur, (v) => `blur(${v}px)`),
      }}
    >
      <motion.div
        className="absolute inset-0 border-b border-white/[0.06] transition-colors duration-300"
        style={{
          opacity: bgOpacity,
          backgroundColor: scrolled ? "rgba(8,8,20,0.8)" : "transparent",
        }}
      />
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <motion.a
          href="#"
          className="flex items-center gap-2.5 text-lg font-bold tracking-tight"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative h-8 w-8 overflow-hidden rounded-lg">
            <Image src="/ga.png" alt="GPUAI icon" fill className="object-cover" sizes="32px" />
          </div>
          <span className="dark:text-white">{content.brand}</span>
        </motion.a>

        <motion.div
          className="hidden items-center gap-1 md:flex"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {content.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </motion.div>

        <motion.div
          className="hidden items-center gap-3 md:flex"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button variant="ghost" size="sm" className="px-3 text-muted-foreground hover:text-foreground" onClick={toggleLanguage}>
            {content.languageLabel}
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            {content.signIn}
          </Button>
          <Button size="sm" className="bg-brand-600 text-white hover:bg-brand-500 shadow-lg shadow-brand-600/25">
            {content.getStarted}
          </Button>
        </motion.div>

        <button
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-white/5 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={content.mobileMenuLabel}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex h-full flex-col items-center justify-center gap-8">
                {content.links.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    className="text-3xl font-bold text-foreground"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.div
                  className="mt-4 flex flex-col gap-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <Button variant="ghost" size="lg" onClick={toggleLanguage}>
                    {content.languageLabel}
                  </Button>
                  <Button variant="outline" size="lg">
                    {content.signIn}
                  </Button>
                  <Button size="lg" className="bg-brand-600 text-white hover:bg-brand-500">
                    {content.getStarted}
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
