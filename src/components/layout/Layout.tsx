import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
  /** Set to true for pages with full-screen hero that goes behind the navbar */
  fullscreenHero?: boolean;
}

export function Layout({ children, fullscreenHero = false }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className={`flex-1 ${fullscreenHero ? "" : "pt-[5.25rem]"}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
