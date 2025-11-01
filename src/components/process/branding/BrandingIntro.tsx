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

const BrandingIntro = ({ title, shape }: Props) => {
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
    <section
      id="Intro"
      ref={pinElement}
      className="scroll-mt-24 bg-[#ebffec] dark:bg-[#252525] section-spacing-top section-spacing-bottom relative z-20"
    >
      <div ref={containerRef} className="container">
        <div className=" main-section-spacing relative">
          {/* Background Shape removed per request */}

          {/* Decorative pale green 'dipto' behind the title (matches design) */}
          <div className="hidden lg:block absolute right-6 top-8 -translate-y-2 z-0 pointer-events-none">
            <div className="w-[280px] h-12 bg-[#EDF9F1] rounded-l-full" aria-hidden="true" />
          </div>

          {/* Section Title */}
          <MainSectionTitle title="ABOUT OUR APP" className="section-title text-center mx-auto z-10 relative" />

          {/* Intro paragraph (centered) */}
          <div className="mt-1 text-center">
            <p className="max-w-3xl mx-auto text-base text-gray-700 dark:text-gray-300">
              Powered by advanced AI, AnyLingo bridges communication gaps by blending smart translation
              with natural conversation. Whether for travel, work, or learning, AnyLingo makes every
              interaction smoother.
            </p>
          </div>

          {/* ABOUT APP content: phone on left, features on right */}
          <div className="mt-0 xl:mt-2 flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-6">
            {/* Left: phone/gallery */}
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative phone-container w-[300px] sm:w-[420px] lg:w-[480px]">
                  <Image
                    src="/assets/imgs/brand/phones-collage.png"
                    alt="App preview"
                    width={760}
                    height={1100}
                    className="w-full h-auto rounded-[18px]"
                  />
              </div>
            </div>

            {/* Right: features in two columns */}
            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
              <div className="space-y-2">
                <div>
                  <h4 className="font-semibold text-lg text-emerald-800">Connecting People</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Bringing individuals closer through seamless communication.</p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg text-emerald-800">Across Languages</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Break barriers and chat effortlessly in any language.</p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg text-emerald-800">Generate Messages</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Smart AI creates natural, context-aware responses.</p>
                </div>
              </div>

              <div className="space-y-2">
                <div>
                  <h4 className="font-semibold text-lg text-emerald-800">Real Time and Accurate Translation</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Get instant, precise translations for smooth and natural conversations.</p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg text-emerald-800">Live Chat Support</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Always-on help to guide your conversations.</p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg text-emerald-800">Voice Cloning <span className="ml-2 inline-block bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full text-xs">NEW</span></h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Speak in any language with your own voice.</p>
                </div>
              </div>

              {/* CTA spanning full width */}
              <div className="col-span-full mt-2">
                <a href="/solutions" className="inline-block bg-[#6DBD47] hover:bg-[#58aa3f] text-white px-8 py-3 rounded-full shadow-lg text-base font-semibold transition-colors duration-200">Explore Solutions</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  {/* ====== 'WHY CHOOSE ANYLINGO CHAT' SECTION - EXACT DIPTO COPY ====== */}
  <section className="text-white py-16 lg:py-24 relative overflow-hidden z-30">
    {/* Background Image */}
    <div className="absolute inset-0 -z-10">
      <Image
        src="/assets/imgs/hero/branding/Rectangle 14.png"
        alt="background"
        fill
        className="object-cover"
        priority
      />
    </div>

    <div className="container relative z-10">
      {/* Header */}
      <div className="text-center mb-12 lg:mb-16">
        <h2 className="text-3xl lg:text-5xl font-bold mb-4 uppercase">WHY CHOOSE ANYLINGO CHAT</h2>
        <p className="max-w-3xl mx-auto text-base lg:text-lg text-white/90 leading-relaxed">
          AnyLingo Chat is more than just translation—it's your gateway to meaningful connections across cultures. From instant messages to voice chat, everything is designed to help you communicate confidently.
        </p>
      </div>

      {/* Main Content Layout */}
      <div className="relative">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Column - 3 Cards */}
          <div className="col-span-3 space-y-6 relative z-10">
            {/* Card 1 - Chat Translation */}
            <div className="bg-emerald-400/30 backdrop-blur-sm rounded-3xl p-6 text-right relative">
              {/* Connecting line to phone - Top Left */}
              <div className="absolute left-full top-1/2 -translate-y-1/2 w-[200%] h-[2px] pointer-events-none">
                <svg className="absolute left-0 top-0 w-full h-full" style={{ overflow: 'visible' }}>
                  <line x1="0" y1="0" x2="100%" y2="0" stroke="white" strokeWidth="2" opacity="0.6"/>
                  <circle cx="0" cy="0" r="6" fill="white" opacity="0.8"/>
                </svg>
              </div>
              <div className="flex justify-end mb-3">
                <div className="w-12 h-12 bg-white/30 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
                  </svg>
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2 uppercase">CHAT TRANSLATION</h3>
              <p className="text-sm text-white/90">We bring people closer through effortless conversations.</p>
            </div>

            {/* Card 2 - Voice Clone Sharing */}
            <div className="bg-emerald-400/30 backdrop-blur-sm rounded-3xl p-6 text-right relative">
              {/* Connecting line to phone - Middle Left */}
              <div className="absolute left-full top-1/2 -translate-y-1/2 w-[200%] h-[2px] pointer-events-none">
                <svg className="absolute left-0 top-0 w-full h-full" style={{ overflow: 'visible' }}>
                  <line x1="0" y1="0" x2="100%" y2="0" stroke="white" strokeWidth="2" opacity="0.6"/>
                  <circle cx="0" cy="0" r="6" fill="white" opacity="0.8"/>
                </svg>
              </div>
              <div className="flex justify-end mb-3">
                <div className="w-12 h-12 bg-white/30 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
                    <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
                  </svg>
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2 uppercase">VOICE CLONE SHARING</h3>
              <p className="text-sm text-white/90">Communicate seamlessly no matter the language.</p>
            </div>

            {/* Card 3 - Generate Messages */}
            <div className="bg-emerald-400/30 backdrop-blur-sm rounded-3xl p-6 text-right relative">
              {/* Connecting line to phone - Bottom Left */}
              <div className="absolute left-full top-1/2 -translate-y-1/2 w-[200%] h-[2px] pointer-events-none">
                <svg className="absolute left-0 top-0 w-full h-full" style={{ overflow: 'visible' }}>
                  <line x1="0" y1="0" x2="100%" y2="0" stroke="white" strokeWidth="2" opacity="0.6"/>
                  <circle cx="0" cy="0" r="6" fill="white" opacity="0.8"/>
                </svg>
              </div>
              <div className="flex justify-end mb-3">
                <div className="w-12 h-12 bg-white/30 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2 uppercase">GENERATE MESSAGES</h3>
              <p className="text-sm text-white/90">AI-powered replies that feel natural and contextual.</p>
            </div>
          </div>

          {/* Center Column - Phone Images */}
          <div className="col-span-6 flex justify-center items-center relative px-8 z-20">
            <div className="relative w-full h-[700px] flex items-center justify-center overflow-visible">
              {/* Single Centered Phone - Enlarged */}
              <div className="relative w-[600px] z-20">
                <div className="relative">
                  <Image
                    src="/assets/imgs/brand/Pre-comp 1_00149 1 (1).png"
                    alt="AnyLingo Phone"
                    width={2000}
                    height={4000}
                    className="w-full h-auto drop-shadow-2xl"
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - 3 Cards */}
          <div className="col-span-3 space-y-6 relative z-10">
            {/* Card 1 - Real Time Translation */}
            <div className="bg-emerald-400/30 backdrop-blur-sm rounded-3xl p-6 relative">
              {/* Connecting line to phone - Top Right */}
              <div className="absolute right-full top-1/2 -translate-y-1/2 w-[200%] h-[2px] pointer-events-none">
                <svg className="absolute right-0 top-0 w-full h-full" style={{ overflow: 'visible' }}>
                  <line x1="0" y1="0" x2="100%" y2="0" stroke="white" strokeWidth="2" opacity="0.6"/>
                  <circle cx="100%" cy="0" r="6" fill="white" opacity="0.8"/>
                </svg>
              </div>
              <div className="flex justify-start mb-3">
                <div className="w-12 h-12 bg-white/30 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
                  </svg>
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2 uppercase">REAL TIME ACCURATE TRANSLATION</h3>
              <p className="text-sm text-white/90">Seamless, instant translations that capture meaning, not just words.</p>
            </div>

            {/* Card 2 - Voice Clone Generation */}
            <div className="bg-emerald-400/30 backdrop-blur-sm rounded-3xl p-6 relative">
              {/* Connecting line to phone - Middle Right */}
              <div className="absolute right-full top-1/2 -translate-y-1/2 w-[200%] h-[2px] pointer-events-none">
                <svg className="absolute right-0 top-0 w-full h-full" style={{ overflow: 'visible' }}>
                  <line x1="0" y1="0" x2="100%" y2="0" stroke="white" strokeWidth="2" opacity="0.6"/>
                  <circle cx="100%" cy="0" r="6" fill="white" opacity="0.8"/>
                </svg>
              </div>
              <div className="flex justify-start mb-3">
                <div className="w-12 h-12 bg-white/30 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                  </svg>
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2 uppercase">VOICE CLONE GENERATION</h3>
              <p className="text-sm text-white/90">Express yourself in any language using your own voice.</p>
            </div>

            {/* Card 3 - Supports 70+ Languages */}
            <div className="bg-emerald-400/30 backdrop-blur-sm rounded-3xl p-6 relative">
              {/* Connecting line to phone - Bottom Right */}
              <div className="absolute right-full top-1/2 -translate-y-1/2 w-[200%] h-[2px] pointer-events-none">
                <svg className="absolute right-0 top-0 w-full h-full" style={{ overflow: 'visible' }}>
                  <line x1="0" y1="0" x2="100%" y2="0" stroke="white" strokeWidth="2" opacity="0.6"/>
                  <circle cx="100%" cy="0" r="6" fill="white" opacity="0.8"/>
                </svg>
              </div>
              <div className="flex justify-start mb-3">
                <div className="w-12 h-12 bg-white/30 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                  </svg>
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2 uppercase">SUPPORTS 70 + LANGUAGES</h3>
              <p className="text-sm text-white/90">Reliable assistance whenever you need it.</p>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-6">
          {/* Phone Images for Mobile */}
          <div className="flex justify-center mb-8">
            <div className="relative w-64 h-96">
              <Image
                src="/assets/imgs/brand/tilted.png"
                alt="AnyLingo Phone"
                width={300}
                height={600}
                className="w-full h-auto drop-shadow-2xl"
                unoptimized
              />
            </div>
          </div>

          {/* Mobile Cards */}
          <div className="space-y-4">
            {[
              { icon: "💬", title: "CHAT TRANSLATION", desc: "We bring people closer through effortless conversations." },
              { icon: "🎙️", title: "VOICE CLONE SHARING", desc: "Communicate seamlessly no matter the language." },
              { icon: "⚡", title: "GENERATE MESSAGES", desc: "AI-powered replies that feel natural and contextual." },
              { icon: "📱", title: "REAL TIME ACCURATE TRANSLATION", desc: "Seamless, instant translations that capture meaning, not just words." },
              { icon: "�", title: "VOICE CLONE GENERATION", desc: "Express yourself in any language using your own voice." },
              { icon: "👥", title: "SUPPORTS 70 + LANGUAGES", desc: "Reliable assistance whenever you need it." }
            ].map((card, idx) => (
              <div key={idx} className="bg-emerald-400/30 backdrop-blur-sm rounded-3xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/30 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">{card.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-base mb-2 uppercase">{card.title}</h3>
                    <p className="text-sm text-white/90">{card.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>

    {/* ====== NEW: Key Features (dipto copy) - NOW APPEARS SECOND ====== */}
    <section className="bg-[#ebffec] text-emerald-900 py-16 lg:py-24 mt-32 lg:mt-40 relative z-20 !-mt-0">
      <div className="container">
        <div className="text-center relative">
          {/* dipto pill behind title */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 -top-6 z-0">
            <div className="w-[280px] h-12 bg-emerald-100 rounded-l-full" aria-hidden />
          </div>

          <h3 className="font-instrument font-semibold text-[34px] lg:text-[40px] relative z-10">Our Key Features</h3>
          <p className="max-w-3xl mx-auto mt-3 text-sm lg:text-base text-emerald-800/90">
            Our Key Features Are Designed To Break Language Barriers And Make Communication Effortless. From Real-Time Translation To AI-Powered Chat And Voice Cloning, AnyLingo Gives You The Tools To Connect With Confidence - Anytime, Anywhere.
          </p>
        </div>

        <div className="mt-12 lg:mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {/* Card 1 */}
            <div className="rounded-[12px] bg-white border-2 border-emerald-200 p-4 flex flex-col aspect-square justify-start hover:bg-[#065F46] hover:border-[#065F46] transition-all duration-300 cursor-pointer group">
              <div className="w-10 h-10 rounded-full bg-emerald-50 group-hover:bg-emerald-600/50 flex items-center justify-center flex-shrink-0 transition-colors">
                <span className="text-emerald-700 group-hover:text-white text-2xl font-bold transition-colors">◎</span>
              </div>
              <h4 className="mt-3 text-2xl lg:text-4xl font-bold leading-snug text-emerald-900 group-hover:text-white transition-colors">Bio-Directional Communication</h4>
              <p className="mt-2 text-lg lg:text-xl text-emerald-700 group-hover:text-white transition-colors">Enjoy Seamless Two-Way Conversations Without Barriers.</p>
            </div>

            {/* Card 2 */}
            <div className="rounded-[12px] bg-white border-2 border-emerald-200 p-4 flex flex-col aspect-square justify-start hover:bg-[#065F46] hover:border-[#065F46] transition-all duration-300 cursor-pointer group">
              <div className="w-10 h-10 rounded-full bg-emerald-50 group-hover:bg-emerald-600/50 flex items-center justify-center flex-shrink-0 transition-colors">
                <span className="text-emerald-700 group-hover:text-white text-2xl font-bold transition-colors">◎</span>
              </div>
              <h4 className="mt-3 text-2xl lg:text-4xl font-bold text-emerald-900 group-hover:text-white leading-snug transition-colors">Smooth Multilingual Conversations</h4>
              <p className="mt-2 text-lg lg:text-xl text-emerald-700 group-hover:text-white transition-colors">Communicate Effortlessly Across Multiple Languages.</p>
            </div>

            {/* Card 3 */}
            <div className="rounded-[12px] bg-white border-2 border-emerald-200 p-4 flex flex-col aspect-square justify-start hover:bg-[#065F46] hover:border-[#065F46] transition-all duration-300 cursor-pointer group">
              <div className="w-10 h-10 rounded-full bg-emerald-50 group-hover:bg-emerald-600/50 flex items-center justify-center flex-shrink-0 transition-colors">
                <span className="text-emerald-700 group-hover:text-white text-2xl font-bold transition-colors">◎</span>
              </div>
              <h4 className="mt-3 text-2xl lg:text-4xl font-bold text-emerald-900 group-hover:text-white leading-snug transition-colors">Instant Message Translation</h4>
              <p className="mt-2 text-lg lg:text-xl text-emerald-700 group-hover:text-white transition-colors">Get Fast, Accurate Translations Right As You Chat.</p>
            </div>

            {/* Card 4 */}
            <div className="rounded-[12px] bg-white border-2 border-emerald-200 p-4 flex flex-col aspect-square justify-start hover:bg-[#065F46] hover:border-[#065F46] transition-all duration-300 cursor-pointer group">
              <div className="w-10 h-10 rounded-full bg-emerald-50 group-hover:bg-emerald-600/50 flex items-center justify-center flex-shrink-0 transition-colors">
                <span className="text-emerald-700 group-hover:text-white text-2xl font-bold transition-colors">◎</span>
              </div>
              <h4 className="mt-3 text-2xl lg:text-4xl font-bold text-emerald-900 group-hover:text-white leading-snug transition-colors">Voice Cloning & Audio Sharing</h4>
              <p className="mt-2 text-lg lg:text-xl text-emerald-700 group-hover:text-white transition-colors">Speak In Any Language Using Your Own Voice And Share It Instantly.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default BrandingIntro;
