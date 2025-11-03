"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  ShieldCheck,
  Clock,
  Scale,
  Headphones,
} from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-blue-600" />,
      title: "الجودة",
      desc: "تدقيق الموردين وفحص المنتجات قبل الشحن لضمان أعلى معايير الجودة.",
    },
    {
      icon: <Clock className="w-10 h-10 text-blue-600" />,
      title: "الالتزام",
      desc: "نلتزم بمواعيد تسليم دقيقة وعقود توريد مرنة تناسب جميع العملاء.",
    },
    {
      icon: <Scale className="w-10 h-10 text-blue-600" />,
      title: "الشفافية",
      desc: "نقدم عروض أسعار تفصيلية وتكاليف واضحة دون أي رسوم خفية.",
    },
    {
      icon: <Headphones className="w-10 h-10 text-blue-600" />,
      title: "الدعم",
      desc: "خدمة ما بعد البيع متواصلة واستبدال فوري عند الحاجة.",
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.05),transparent_60%)]" />

      <div className="container mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Left text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-5"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold">من نحن</h2>
          <p className="text-gray-600 dark:text-zinc-300 text-lg leading-relaxed">
            تأسست{" "}
            <span className="text-blue-600 font-semibold">أصل الضيافة</span>{" "}
            لتوفير حلول متكاملة في استيراد وتوزيع المواد المنزلية، عبر شبكة
            واسعة من الموردين العالميين، مع التزام تام بمعايير الجودة وخدمة ما
            بعد البيع لضمان رضا عملائنا.
          </p>

          <ul className="grid gap-3 text-gray-700 dark:text-zinc-300">
            {[
              "توريد مباشر للمتاجر والشركات",
              "خيارات تغليف مخصصة حسب العلامة التجارية",
              "دعم كامل للطلبات الكبيرة والجملة",
              "تنفيذ سريع وإجراءات شحن مبسطة",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right icons grid */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-2 gap-6 md:gap-8"
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -3 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="rounded-2xl p-6 bg-white/80 dark:bg-zinc-900/60 border border-black/5 dark:border-white/10 shadow-sm hover:shadow-lg transition"
            >
              <div className="mb-3">{f.icon}</div>
              <h3 className="text-xl font-bold mb-1">{f.title}</h3>
              <p className="text-sm opacity-80 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
