"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Menu } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const nav = [
    { label: "الرئيسية", href: "#home" },
    { label: "من نحن", href: "#about" },
    { label: "المنتجات", href: "#products" },
    { label: "الخدمات", href: "#services" },
    { label: "شركاؤنا", href: "#partners" },
    { label: "تواصل معنا", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur border-b shadow">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#home">
          <Image
            src="/images/logo.png"
            alt="شعار الشركة"
            width={150}
            height={50}
            className="object-contain w-auto h-14"
            priority
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="hover:text-blue-600 transition"
            >
              {n.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            <span>تواصل معنا الآن</span>
            <ChevronLeft className="w-4 h-4" />
          </a>
        </nav>

        {/* Mobile button */}
        <button
          className="md:hidden p-2 rounded-xl border border-black/10 dark:border-white/10"
          onClick={() => setMenuOpen((s) => !s)}
        >
          <span className="sr-only">قائمة</span>
          <Menu
            className={`w-6 h-6 transition-transform duration-300 ${
              menuOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`absolute left-0 right-0 top-20 bg-white dark:bg-zinc-900 border-t border-black/5 dark:border-white/10 overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-4 py-3 grid gap-3">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setMenuOpen(false)}
              className="py-2 text-lg hover:text-blue-600 transition"
            >
              {n.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            اطلب عرض سعر
          </a>
        </div>
      </div>
    </header>
  );
}
