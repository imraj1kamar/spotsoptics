'use client';

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import BootstrapClient from "@/components/BootstrapClient";
import CookieConsent from "@/components/CookieConsentClient";
import Preloader from "@/components/common/Preloader";
import Navbar from "@/components/layout/Navbar";
import FooterSection from "@/components/layout/FooterSection";

// Lazy-load non-critical floating widgets to eliminate 180KB+ unused JS from critical path
const Chatbot = dynamic(() => import("@/components/common/Chatbot"), { ssr: false });
const QuoteModal = dynamic(() => import("@/components/common/QuoteModal"), { ssr: false });
const ScrollToTop = dynamic(() => import("@/components/common/ScrollToTop"), { ssr: false });

export default function AppShell({ children }) {
  const pathname = usePathname();
  const isAccountRoute =
    pathname === "/login" ||
    pathname.startsWith("/login/") ||
    pathname === "/dashboard" ||
    pathname.startsWith("/dashboard/");

  if (isAccountRoute) {
    return children;
  }

  return (
    <>
      <BootstrapClient />
      <Preloader />
      <CookieConsent />
      <Navbar />
      <main className="flex-grow">{children}</main>
      <FooterSection />
      <ScrollToTop />
      <Chatbot />
      <QuoteModal />
    </>
  );
}
