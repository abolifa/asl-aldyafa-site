"use client";

import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 relative overflow-hidden bg-linear-to-b from-gray-50 via-blue-50/40 to-gray-50 dark:from-zinc-950 dark:via-blue-950/20 dark:to-zinc-950 border-t border-black/5 dark:border-white/10"
    >
      {/* Subtle radial glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.07),transparent_60%)]" />

      <div className="container mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-12 items-start">
        {/* Left Info */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 dark:text-blue-400">
            تواصل معنا
          </h2>
          <p className="text-gray-700 dark:text-zinc-300 leading-relaxed text-lg max-w-lg">
            نحن هنا للإجابة عن استفساراتكم وتلبية طلباتكم — سواء كنت متجرًا أو
            عميلاً فرديًا. فريقنا جاهز للتواصل معكم.
          </p>

          <div className="mt-8 grid gap-4 text-gray-700 dark:text-zinc-200">
            <a
              href="tel:+218917970306"
              className="flex items-center gap-3 hover:text-blue-600 transition"
            >
              <Phone className="w-5 h-5 text-blue-600" />
              <span dir="ltr">+218 91 797 0306</span>
            </a>
            <a
              href="mailto:hsyndbalhady241@gmail.com"
              className="flex items-center gap-3 hover:text-blue-600 transition"
            >
              <Mail className="w-5 h-5 text-blue-600" />
              hsyndbalhady241@gmail.com
            </a>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-blue-600" />
              ليبيا – مصراتة
            </div>
          </div>

          {/* Socials */}
          <div className="flex gap-4 mt-8">
            <a
              href="https://www.facebook.com/profile.php?id=100080513113458"
              target="blank"
              className="p-3 rounded-full bg-blue-50 dark:bg-zinc-800 text-blue-600 hover:bg-blue-100 dark:hover:bg-zinc-700 transition"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-blue-50 dark:bg-zinc-800 text-blue-600 hover:bg-blue-100 dark:hover:bg-zinc-700 transition"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-blue-50 dark:bg-zinc-800 text-blue-600 hover:bg-blue-100 dark:hover:bg-zinc-700 transition"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="rounded-3xl p-8 bg-gray-100 dark:bg-zinc-900 border border-black/5 dark:border-white/10 shadow-xl grid gap-5"
        >
          <div>
            <label className="block text-sm font-medium mb-1">
              الاسم الكامل
            </label>
            <input
              required
              className="w-full rounded-xl border border-gray-300 dark:border-white/10 bg-white px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium mb-1">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                required
                className="w-full rounded-xl border border-gray-300 dark:border-white/10 bg-white px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                رقم الهاتف
              </label>
              <input className="w-full rounded-xl border border-gray-300 dark:border-white/10 bg-white px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">الموضوع</label>
            <input className="w-full rounded-xl border border-gray-300 dark:border-white/10 bg-white px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">رسالتك</label>
            <textarea
              rows={5}
              className="w-full rounded-xl border border-gray-300 dark:border-white/10 bg-white px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <button className="mt-2 rounded-xl px-6 py-3 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
            إرسال الرسالة
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
