"use client";

import React from "react";
import { Building2, Truck, Store, PackageCheck } from "lucide-react";

const Services = () => {
  return (
    <section
      id="services"
      className="py-20 bg-linear-to-b from-white via-gray-50 to-white dark:from-zinc-950 dark:via-zinc-900 dark:to-black border-y border-black/5 dark:border-white/10 relative overflow-hidden"
    >
      {/* Decorative subtle glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_30%,rgba(37,99,235,0.05),transparent_60%)]" />

      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center">
          خدماتنا
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Import & Distribution */}
          <div className="rounded-2xl p-6 bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/10 shadow-sm hover:shadow-lg transition-all duration-300">
            <Building2 className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="text-lg font-bold mb-1">الاستيراد والتوزيع</h3>
            <p className="text-sm opacity-80 leading-relaxed">
              نستورد المواد المنزلية من أفضل الشركات العالمية ونوزعها عبر شبكة
              معتمدة من الوكلاء والمحال التجارية.
            </p>
          </div>

          {/* Wholesale & Bulk Supply */}
          <div className="rounded-2xl p-6 bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/10 shadow-sm hover:shadow-lg transition-all duration-300">
            <PackageCheck className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="text-lg font-bold mb-1">البيع بالجملة والتجزئة</h3>
            <p className="text-sm opacity-80 leading-relaxed">
              نوفر خيارات مرنة للبيع بالجملة والتجزئة مع أسعار تنافسية وتوصيل
              سريع للمحال والموزعين.
            </p>
          </div>

          {/* Local Market Procurement */}
          <div className="rounded-2xl p-6 bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/10 shadow-sm hover:shadow-lg transition-all duration-300">
            <Store className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="text-lg font-bold mb-1">التوريد المحلي</h3>
            <p className="text-sm opacity-80 leading-relaxed">
              نقوم بشراء وتوزيع منتجات محلية مختارة لدعم السوق الليبي وتلبية
              احتياجات عملائنا من مصادر موثوقة.
            </p>
          </div>

          {/* Delivery & Logistics */}
          <div className="rounded-2xl p-6 bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/10 shadow-sm hover:shadow-lg transition-all duration-300">
            <Truck className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="text-lg font-bold mb-1">
              التوصيل والخدمات اللوجستية
            </h3>
            <p className="text-sm opacity-80 leading-relaxed">
              نقدم خدمات نقل وتوصيل المنتجات للمخازن والمحلات بكفاءة وسرعة ضمن
              جميع المدن الليبية.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
