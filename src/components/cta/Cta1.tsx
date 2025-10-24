"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasPinContent from "@/lib/animation/hasPinContent";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import ButtonSwap from "../elements/button/ButtonSwap";
import { ActionBtnType } from "@/types";

type Props = {
  title: string;
  sub_title: string;
  action_btn: ActionBtnType;
};

const Cta1 = ({ title, sub_title, action_btn }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const pinElement = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasPinContent(pinElement.current);
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={pinElement}
      className="cta_area main-section-style bg-[#2f8e3a] text-white overflow-hidden"
    >
      <div ref={containerRef} className="container">
        <div className="py-20 lg:py-28 text-center">
          <div className="max-w-[1000px] mx-auto">
            <h2 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[72px] font-bold leading-[1.02] !font-getaway">
              Love our Application?
            </h2>
            <h3 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[72px] font-bold leading-[1.02] !font-getaway mt-3">
              Download Now
            </h3>

            <p className="mt-4 text-[14px] sm:text-[16px] text-white/90 max-w-[760px] mx-auto">
              Like What AnyLingo Offers? Take The Next Step - Download The App And Make Every Conversation Smoother.
            </p>

            {/* Store buttons */}
            <div className="flex items-center justify-center gap-4 mt-7">
              {/* Google Play button */}
              <a
                href="#"
                className="inline-flex items-center gap-3 bg-black text-white rounded-md px-4 py-2 shadow-md"
                aria-label="Get it on Google Play"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-sm bg-white">
                  {/* Google Play multicolor triangle SVG */}
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 0L15 8.5L1 17V0Z" fill="#34A853"/>
                    <path d="M1 0L11.2 7.1L15 8.5L1 0Z" fill="#4285F4"/>
                    <path d="M1 17L15 8.5L11.2 10.9L1 17Z" fill="#FBBC05"/>
                    <path d="M15 8.5L11.2 10.9L1 0L15 8.5Z" fill="#EA4335"/>
                  </svg>
                </span>
                <div className="text-left leading-none">
                  <div className="text-[11px]">GET IT ON</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>

              {/* App Store button */}
              <a
                href="#"
                className="inline-flex items-center gap-3 border border-white text-white rounded-md px-4 py-2 shadow-md"
                aria-label="Download on the App Store"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-sm bg-white text-black">
                  {/* Apple logo SVG */}
                  <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.6 3.2c-.2.2-.5.4-.8.4-.4 0-.9-.3-1.2-.5-.6-.4-1.1-.9-1.1-1.6 0-.7.3-1 .6-1.4.4-.4 1-.7 1.6-.7.2 0 .5 0 .7.1-.1.2-.2.4-.2.6 0 .5.2 1 .5 1.3.3.2.8.5 1.2.6-.4.6-.9 1.1-1.3 1.2z" fill="#000"/>
                    <path d="M10.7 6.1c-.7.1-1.5.6-2 1.3-.5.6-1 1.4-.9 2.4.1 1 .7 1.7 1.4 2.3.6.5 1.4 1 2.3 1 1 0 1.3-.4 2.7-.4.1-.9.4-1.9 1.1-2.6-.8-.6-1.4-1.4-1.7-2.2-.4-1-.9-1.4-1.6-1.7-.8-.4-1.4-.5-2.4-.2z" fill="#000"/>
                  </svg>
                </span>
                <div className="text-left leading-none">
                  <div className="text-[11px]">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>
            </div>

            {/* Video mockup */}
            <div className="mt-12 flex justify-center">
              <div className="relative w-[720px] max-w-full rounded-2xl overflow-hidden shadow-2xl">
                {/* decorative left dots */}
                <div className="absolute -left-6 top-6 grid grid-cols-3 gap-2 opacity-40">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <span key={i} className="w-2 h-2 bg-white/30 rounded-sm" />
                  ))}
                </div>

                <img
                  src="/assets/imgs/hero/hero-3.jpg"
                  alt="video thumbnail"
                  className="w-full h-auto object-cover block"
                />

                {/* play button */}
                <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg">
                  <span className="block w-0 h-0 border-l-[14px] border-l-[#2f8e3a] border-t-[9px] border-t-transparent border-b-[9px] border-b-transparent ml-1"></span>
                </button>

                {/* corner accents */}
                <div className="absolute bottom-3 right-3 w-8 h-16 bg-[#ff6b3b] rounded-l-full rotate-12"></div>
                <div className="absolute top-3 right-3 w-6 h-6 bg-white rounded-tr-md transform rotate-12"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta1;
