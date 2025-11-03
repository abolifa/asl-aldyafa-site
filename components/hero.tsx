"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-20 bg-[radial-gradient(ellipse_at_top_right,rgba(251,191,36,0.5),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(244,63,94,0.5),transparent_40%)]" />

      <div className="container mx-auto px-4 py-20 grid md:grid-cols-2 items-center gap-10">
        {/* Left Text Side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            حلول استيراد <span className="text-blue-600">موثوقة</span> للمواد
            المنزلية
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-zinc-300">
            أصل الضيافة شركة ليبية متخصصة في استيراد توزيع الأدوات المنزلية
            والمستلزمات اليومية بجودة عالية وأسعار منافسة، مع خدمات لوجستية مرنة
            تناسب الأفراد والشركات والمتاجر.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#products"
              className="rounded-2xl px-5 py-3 bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              تصفح المنتجات
            </a>
            <a
              href="#contact"
              className="rounded-2xl px-5 py-3 border border-black/10 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/10 transition"
            >
              تواصل معنا
            </a>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            <div className="rounded-2xl p-4 bg-white/70 dark:bg-zinc-900/50 border border-black/5 dark:border-white/10">
              <div className="text-2xl font-extrabold">+2000</div>
              <div className="text-sm opacity-80">منتج متنوع</div>
            </div>
            <div className="rounded-2xl p-4 bg-white/70 dark:bg-zinc-900/50 border border-black/5 dark:border-white/10">
              <div className="text-2xl font-extrabold">+300</div>
              <div className="text-sm opacity-80">علامة موثوقة</div>
            </div>
            <div className="rounded-2xl p-4 bg-white/70 dark:bg-zinc-900/50 border border-black/5 dark:border-white/10">
              <div className="text-2xl font-extrabold">24/7</div>
              <div className="text-sm opacity-80">دعم واستجابة</div>
            </div>
          </div>
        </motion.div>

        {/* Right Gallery Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="grid grid-cols-4 grid-rows-3 gap-2 aspect-4/3 rounded-3xl overflow-hidden border border-black/5 dark:border-white/10 bg-white dark:bg-zinc-900">
            {/* Large left image */}
            <div className="col-span-2 row-span-3 relative">
              <Image
                src="/gallery/1.jpg"
                alt="منتج 1"
                fill
                className="object-cover"
              />
            </div>

            {/* Top-right two small images */}
            <div className="col-span-2 row-span-1 grid grid-cols-2 gap-2">
              <div className="relative">
                <Image
                  src="/gallery/2.jpg"
                  alt="منتج 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative">
                <Image
                  src="/gallery/3.jpg"
                  alt="منتج 3"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Middle-right wide image */}
            <div className="col-span-2 row-span-1 relative">
              <Image
                src="/gallery/4.jpg"
                alt="منتج 4"
                fill
                className="object-cover"
              />
            </div>

            {/* Bottom-right two small images */}
            <div className="col-span-2 row-span-1 grid grid-cols-2 gap-2">
              <div className="relative">
                <Image
                  src="/gallery/5.jpg"
                  alt="منتج 5"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative">
                <Image
                  src="/gallery/6.jpg"
                  alt="منتج 6"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
