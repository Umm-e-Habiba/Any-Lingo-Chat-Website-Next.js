"use client";

import { useEffect, useRef } from "react";
import Lenis, { LenisOptions } from "lenis";
import { usePathname } from "next/navigation";

export default function SmoothScroll() {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;

    const baseOptions: LenisOptions = {
      duration: 1.1,
      smoothWheel: true,        // inertia on wheel
      touchMultiplier: 1.0,     // adjust touch sensitivity if needed
      gestureOrientation: "vertical",
      // no smoothTouch here
    };

    const lenis = new Lenis(
      isTouch
        ? { ...baseOptions, smoothWheel: false } // tone it down on touch
        : baseOptions
    );

    lenisRef.current = lenis;

    const raf = (t: number) => {
      lenis.raf(t);
      rafRef.current = requestAnimationFrame(raf);
    };
    rafRef.current = requestAnimationFrame(raf);

    // Smooth in-page #hash links
    const onAnchorClick = (e: MouseEvent) => {
      const a = (e.target as Element).closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!a) return;
      const id = a.getAttribute("href")!.slice(1);
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el, { offset: -80, duration: 1.1 });
      history.replaceState(null, "", `#${id}`);
    };

    document.addEventListener("click", onAnchorClick);
    return () => {
      document.removeEventListener("click", onAnchorClick);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [pathname]);

  return null;
}
