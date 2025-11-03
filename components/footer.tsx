import React from "react";

const Footer = () => {
  return (
    <footer className="py-10 border-t bg-blue-600 text-white">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-6 items-center">
        <div className="text-sm font-semibold opacity-80">
          © {new Date().getFullYear()} أصل الضيافة لاستيراد المواد المنزلية.
          جميع الحقوق محفوظة.
        </div>
        <div className="flex justify-start md:justify-end gap-4 text-sm">
          <a href="#about" className="hover:underline">
            عن الشركة
          </a>
          <a href="#services" className="hover:underline">
            الخدمات
          </a>
          <a href="#contact" className="hover:underline">
            اتصل بنا
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
