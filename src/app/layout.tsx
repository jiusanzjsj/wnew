import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LanguageProvider } from "@/components/providers/language-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GPUAI - Enterprise AI Platform",
  description:
    "GPUAI gives enterprise teams a governed AI platform for model access, observability, security, and scalable delivery.",
  keywords: ["GPUAI", "AI platform", "enterprise AI", "model governance", "observability", "deployment"],
  openGraph: {
    title: "GPUAI - Enterprise AI Platform",
    description:
      "GPUAI gives enterprise teams a governed AI platform for model access, observability, security, and scalable delivery.",
    type: "website",
    siteName: "GPUAI",
  },
  twitter: {
    card: "summary_large_image",
    title: "GPUAI - Enterprise AI Platform",
    description:
      "GPUAI gives enterprise teams a governed AI platform for model access, observability, security, and scalable delivery.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${inter.variable} dark h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
