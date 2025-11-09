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

const BrandingIntro_why = ({ title, shape }: Props) => {
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
    
  {/* ====== 'WHY CHOOSE ANYLINGO CHAT' SECTION - EXACT DIPTO COPY ====== */}
  <section  className="text-white py-16 lg:py-24 relative overflow-hidden z-30 ">
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

    <div className="container relative z-10 ">
      {/* Header */}
      <div className="text-center mb-12 lg:mb-16">
        <h2 className="text-3xl lg:text-5xl mb-4 " style={{
          fontFamily: "'ADLaM Display', sans-serif",
          fontWeight: '400',
          fontStyle: 'bold',
          fontSize: '40px',
          lineHeight: '47.25px',
          letterSpacing: '0',
          textTransform: 'uppercase',
        }}>WHY CHOOSE ANYLINGO CHAT</h2>
        <p className="max-w-3xl mx-auto leading-relaxed" style={{
          fontFamily: "'Lato', sans-serif",
          fontWeight: 500,
          fontStyle: 'normal',
          fontSize: '18px',
          lineHeight: '24px',
          letterSpacing: '0',
          textAlign: 'center',
          
          color: '#ffffff',
        }}>
          AnyLingo Chat is more than just translation—it's your gateway to meaningful connections across cultures. From instant messages to voice chat, everything is designed to help you communicate confidently.
        </p>
      </div>

      {/* Main Content Layout */}
      <div className="relative ">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Column - 3 Cards */}
          <div className="col-span-3 space-y-6 relative z-10">
            {/* Card 1 - Chat Translation */}
            <div className="bg-emerald-400/30 backdrop-blur-sm rounded-3xl p-6 text-right relative">
              {/* Connecting line to phone - Top Left */}
              <div className="absolute left-full top-1/2 -translate-y-1/2 w-[80%] h-[2px] pointer-events-none">
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
              <div className="absolute left-full top-1/2 -translate-y-1/2 w-[80%] h-[2px] pointer-events-none">
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
              <div className="absolute left-full top-1/2 -translate-y-1/2 w-[80%] h-[2px] pointer-events-none">
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
          <div className="col-span-6 flex justify-center items-center relative px-8 z-20 ">
            <div className="relative  h-[900px] flex items-center justify-center overflow-visible">
              {/* Single Centered Phone - Enlarged */}
              <div className="relative w-[1650px] h-[1000px] md:w-[1650px] md:h-[1000px] lg:w-[1650px] lg:h-[1000px] xl:w-[1650px] xl:h-[1000px] 2xl:w-[1650px] 2xl:h-[1000px] z-20">
                <div className="relative">
                  <Image
                    src="/assets/imgs/brand/Pre-comp 1_00149 1 (1).png"
                    alt="AnyLingo Phone"
                    width={2000}
                    height={4000}
                    className="w-[1650px] h-[1000px] md:w-[1650px] md:h-[1000px] lg:w-[1650px] lg:h-[1000px] xl:w-[1650px] xl:h-[1000px] 2xl:w-[1650px] 2xl:h-[1000px] drop-shadow-2xl"
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
              <div className="absolute right-full top-1/2 -translate-y-1/2 w-[80%] h-[2px] pointer-events-none">
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
              <div className="absolute right-full top-1/2 -translate-y-1/2 w-[80%] h-[2px] pointer-events-none">
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
              <div className="absolute right-full top-1/2 -translate-y-1/2 w-[80%] h-[2px] pointer-events-none">
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
            <div className="relative w-[800px] h-[300px] md:h-[500px] ">
              <Image
                src="/assets/imgs/brand/Pre-comp 1_00149 1 (1).png"
                alt="AnyLingo Phone"
                width={600}
                height={600}
                className="w-[800px] h-[500px]drop-shadow-2xl"
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

    
    </>
  );
};

export default BrandingIntro_why;
