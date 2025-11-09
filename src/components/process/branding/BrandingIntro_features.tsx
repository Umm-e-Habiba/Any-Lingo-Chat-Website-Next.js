"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasPinContent from "@/lib/animation/hasPinContent";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

import Image from "next/image";
import { FaApple, FaComments, FaDesktop, FaFlag, FaStore } from "react-icons/fa";
import ImageComponent from "@/components/tools/ImageComponent";
import MainSectionTitle from "@/components/sectionTitle/MainSectionTitle";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// register plugin once
gsap.registerPlugin(ScrollTrigger);

type Props = {
  title: string;
  shape: {
    light: string;
    dark: string;
  };
  process_list: {
    serial_no: number;
    icon: {
      light: string;
      dark: string;
    };
    title: string;
  }[];
};

const BrandingIntro_features = ({ title, shape }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const pinElement = useRef<HTMLDivElement>(null!);

  useGSAP((context) => {
  const q = context.selector!; // scoped selector helper

  // Left features
  gsap.fromTo(
    q(".feature-left"),
    { x: -150, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      ease: "power2.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: q(".phone-container"),
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    }
  );

  // Right features
  gsap.fromTo(
    q(".feature-right"),
    { x: 150, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      ease: "power2.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: q(".phone-container"),
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    }
  );

  // Phone image
  gsap.fromTo(
    q(".phone-image"),
    { y: 200 },
    {
      y: -100,
      
      ease: "power2.out",
      scrollTrigger: {
        trigger: q(".phone-container"),
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    }
  );
  // Title slides up once
  gsap.fromTo(
    q(".section-title"),
    { y: 50, opacity: 0 },   // start lower + hidden
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: q(".section-title"),
        start: "top 80%",   // when 80% of viewport
        toggleActions: "play none none none", // play only once
      },
    }
  );
}, { scope: containerRef });




  // Features
  const featuresLeft = [
    { icon: <FaStore />, title: "Connecting People", desc: "Bringing people together beyond language barriers." },
    { icon: <FaDesktop />, title: "Across Languages", desc: "Communicate instantly with real-time multilingual translation." },
    { icon: <FaApple />, title: "Generate Messages", desc: "Quickly create and share messages with ease." },
  ];
  const featuresRight = [
    { icon: <FaFlag />, title: "RealTime & Accurate Translation", desc: "Experience real-time and accurate translations for seamless conversations." },
    { icon: <FaComments />, title: "Live Chat Support", desc: "Get instant help anytime with live chat support." },
    { icon: <FaDesktop />, title: "Voice Cloning", desc: "Clone voices to make conversations more natural and personal." },
  ];

  return (
    <>
    

    {/* ====== NEW: Key Features (dipto copy) - NOW APPEARS SECOND ====== */}
    <section className="Key-Features bg-[#ebffec] text-emerald-900 py-16 lg:py-24 mt-32 lg:mt-40 relative z-20 !-mt-0">
      <div className="container">
        <div className="text-center relative">
          {/* dipto pill behind title */}
          

          <h3 className=" text-[34px] lg:text-[40px] relative z-10"
          style={{
          fontFamily: "'ADLaM Display', sans-serif",
          fontWeight: '400',
          fontStyle: 'bold',
          fontSize: '40px',
          lineHeight: '47.25px',
          letterSpacing: '0',
          textTransform: 'uppercase',}}>Our Key Features</h3>
          <p className="max-w-3xl mx-auto mt-3  " style={{
    fontFamily: "'Lato', sans-serif",
    fontWeight: 600,
    fontStyle: 'normal',
    fontSize: '14px',
    lineHeight: '24px',
    letterSpacing: '0',
    textAlign: 'center',
    
  }}>
            Our Key Features Are Designed To Break Language Barriers And Make Communication Effortless. From Real-Time Translation To AI-Powered Chat And Voice Cloning, AnyLingo Gives You The Tools To Connect With Confidence - Anytime, Anywhere.
          </p>
        </div>

        <div className="mt-12 lg:mt-16 lg:ml-[120px] lg:mr-[120px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {/* Card 1 - Default Hover State (Dark Green) */}
            <div className="rounded-[24px] bg-[#065F46] border-2 border-[#065F46] p-6 flex flex-col justify-between min-h-[280px] hover:bg-[#065F46] hover:border-[#065F46] transition-all duration-300 cursor-pointer group">
              <div className="w-12 h-12 rounded-full bg-[#FFD700]/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <div>
                <h4 className="mt-4 text-xl lg:text-2xl font-bold leading-tight text-white">Bio-Directional Communication</h4>
                <p className="mt-2 text-sm lg:text-base text-white/90">Enjoy Seamless Two-Way Conversations Without Barriers.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-[24px] bg-white border-2 border-gray-200 p-6 flex flex-col justify-between min-h-[280px] hover:bg-[#065F46] hover:border-[#065F46] transition-all duration-300 cursor-pointer group">
              <div className="w-12 h-12 rounded-full bg-gray-100 group-hover:bg-[#FFD700]/20 flex items-center justify-center flex-shrink-0 transition-colors">
                <svg className="w-6 h-6 text-gray-600 group-hover:text-[#FFD700] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </div>
              <div>
                <h4 className="mt-4 text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-white leading-tight transition-colors">Smooth Multilingual Conversations</h4>
                <p className="mt-2 text-sm lg:text-base text-gray-700 group-hover:text-white/90 transition-colors">Communicate Effortlessly Across Multiple Languages.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-[24px] bg-white border-2 border-gray-200 p-6 flex flex-col justify-between min-h-[280px] hover:bg-[#065F46] hover:border-[#065F46] transition-all duration-300 cursor-pointer group">
              <div className="w-12 h-12 rounded-full bg-gray-100 group-hover:bg-[#FFD700]/20 flex items-center justify-center flex-shrink-0 transition-colors">
                <svg className="w-6 h-6 text-gray-600 group-hover:text-[#FFD700] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h4 className="mt-4 text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-white leading-tight transition-colors">Instant Message Translation</h4>
                <p className="mt-2 text-sm lg:text-base text-gray-700 group-hover:text-white/90 transition-colors">Get Fast, Accurate Translations Right As You Chat.</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="rounded-[24px] bg-white border-2 border-gray-200 p-6 flex flex-col justify-between min-h-[280px] hover:bg-[#065F46] hover:border-[#065F46] transition-all duration-300 cursor-pointer group">
              <div className="w-12 h-12 rounded-full bg-gray-100 group-hover:bg-[#FFD700]/20 flex items-center justify-center flex-shrink-0 transition-colors">
                <svg className="w-6 h-6 text-gray-600 group-hover:text-[#FFD700] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <div>
                <h4 className="mt-4 text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-white leading-tight transition-colors">Voice Cloning & Audio Sharing</h4>
                <p className="mt-2 text-sm lg:text-base text-gray-700 group-hover:text-white/90 transition-colors">Speak In Any Language Using Your Own Voice And Share It Instantly.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default BrandingIntro_features;
