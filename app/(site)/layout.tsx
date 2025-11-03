import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <main
      dir="rtl"
      className="min-h-dvh flex flex-col bg-linear-to-b from-white to-gray-50 text-gray-900 dark:from-zinc-950 dark:to-black dark:text-zinc-50"
    >
      <Navbar />
      <div className="flex-1 py-5">{children}</div>
      <Footer />
    </main>
  );
};

export default MainLayout;
