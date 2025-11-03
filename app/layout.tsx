// app/layout.tsx or app/layout.jsx
import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  variable: "--font-tajawal",
  fallback: ["sans-serif"],
  display: "swap",
  preload: true,
  style: "normal",
});

export const metadata: Metadata = {
  title: {
    default: "أصل الضيافة | لاستيراد المواد المنزلية",
    template: "%s | أصل الضيافة",
  },
  description:
    "شركة ليبية متخصصة في استيراد وتوريد المواد المنزلية- المنزل والمفروشات والمستلزمات اليومية بأسعار منافسة وخدمة احترافية.",
  keywords: [
    "استيراد مواد منزلية",
    "مستلزمات منزلية ليبيا",
    "توريد بالجملة",
    "أصل الضيافة ليبيا",
  ],
  authors: [{ name: "أصل الضيافة", url: "https://asl-dyafa.vercel.app" }],
  openGraph: {
    title: "أصل الضيافة لاستيراد المواد المنزلية",
    description:
      "شركة ليبية متخصصة في استيراد المواد المنزلية وتوزيعها للمحلات والعملاء في ليبيا.",
    url: "https://asl-dyafa.vercel.app",
    siteName: "أصل الضيافة",
    images: [
      {
        url: "https://asl-dyafa.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "أصل الضيافة – استيراد المواد المنزلية ليبيا",
      },
    ],
    locale: "ar_LY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "أصل الضيافة لاستيراد المواد المنزلية",
    description:
      "استيراد وتوريد المواد المنزلية في ليبيا — جودة وسرعة وسعر منافس.",
    images: ["https://asl-dyafa.vercel.app/og-image.jpg"],
    creator: "@YourTwitterHandle",
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "icon", url: "/favicon-32x32.png", sizes: "32x32" },
      { rel: "icon", url: "/favicon-16x16.png", sizes: "16x16" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={cn("antialiased", tajawal.variable, tajawal.className)}>
        {children}
      </body>
    </html>
  );
}
