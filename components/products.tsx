"use client";

import { ChevronRight, Package } from "lucide-react";
import Image from "next/image";
import React from "react";

const categories = [
  {
    title: "أدوات المطبخ",
    desc: "أطقم الطهي، قدور، أواني تقديم",
    image: "/products/1.jpg",
  },
  {
    title: "أجهزة منزلية",
    desc: "خلاطات، غلايات، مكانس",
    image: "/products/5.jpg",
  },
  {
    title: "مفروشات منزلية",
    desc: "مفارش، أغطية، وسائد",
    image: "/products/4.jpg",
  },
  {
    title: "أدوات التنظيف",
    desc: "مكانس، ممسحات، منظفات",
    image: "/products/6.jpg",
  },
  {
    title: "تخزين وتنظيم",
    desc: "سلال، رفوف، علب حفظ",
    image: "/products/11.jpg",
  },
  {
    title: "مستلزمات الضيافة",
    desc: "أطقم شاي وقهوة، صوانٍ",
    image: "/products/10.jpg",
  },
];

const Products = () => {
  return (
    <section
      id="products"
      className="py-20 bg-linear-to-b from-white via-gray-50 to-white dark:from-zinc-950 dark:via-zinc-900 dark:to-black border-y border-black/5 dark:border-white/10 relative overflow-hidden"
    >
      {/* Subtle radial glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_20%,rgba(37,99,235,0.08),transparent_55%)]" />

      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center">
          تصفح فئات <span className="text-blue-600">منتجاتنا</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((c) => (
            <div
              key={c.title}
              className="relative group rounded-3xl overflow-hidden bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Image background */}
              <div className="relative h-64 md:h-72 overflow-hidden">
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Softer overlay for text readability */}
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/25 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Floating icon */}
              <div className="absolute top-4 left-4 w-10 h-10 flex items-center justify-center rounded-xl bg-white/70 dark:bg-zinc-800/70 backdrop-blur-sm border border-white/10 shadow">
                <Package className="w-5 h-5 text-blue-600" />
              </div>

              {/* Text overlay */}
              <div className="absolute bottom-0 w-full p-6 text-white z-10">
                <h3 className="text-xl font-bold mb-1 drop-shadow-lg">
                  {c.title}
                </h3>
                <p className="text-sm opacity-95 font-light leading-relaxed">
                  {c.desc}
                </p>
              </div>

              {/* Glow border accent */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition duration-700">
                <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-blue-400/30 to-transparent blur-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
