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
      className="scroll-mt-24 bg-[#ebffec] dark:bg-[#252525] section-spacing-top section-spacing-bottom relative z-10"
    >
      <div ref={containerRef} className="container">
        <div className=" main-section-spacing relative">
          {/* Background Shape removed per request */}

          {/* Decorative pale green 'dipto' behind the title (matches design) */}
          <div className="hidden lg:block absolute right-6 top-8 -translate-y-2 z-0 pointer-events-none">
            <div className="w-[280px] h-12 bg-[#EDF9F1] rounded-l-full" aria-hidden="true" />
          </div>

          {/* Section Title */}
          <MainSectionTitle title="ABOUT OUR APP" className="section-title text-center mx-auto z-10" />

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
    
  {/* ====== DUPLICATED 'WHY CHOOSE' SECTION (from image) - NOW APPEARS FIRST ====== */}
  <section className="bg-emerald-600 text-white py-16 lg:py-24 mt-40 lg:mt-52 relative z-10 overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0 -z-10">
      <Image
        src="/assets/imgs/hero/branding/Rectangle 14.png"
        alt="why choose background"
        fill
        className="object-cover"
      />
    </div>
      <div className="container">
        <div className="text-center mb-8 lg:mb-12">
          <h3 className="font-instrument font-semibold text-[34px] lg:text-[40px]">WHY CHOOSE ANYLINGO CHAT</h3>
          <p className="max-w-3xl mx-auto mt-3 text-sm lg:text-base text-white/90">
            AnyLingo Chat is more than just translation—it's your gateway to meaningful connections across cultures. From instant messages to voice chat, everything is designed to help you communicate confidently.
          </p>
        </div>

        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8">
          {/* Left column features */}
          <div className="hidden lg:block w-1/3">
            <div className="space-y-6">
              <div className="bg-white/10 rounded-xl p-6">
                <h5 className="font-semibold">CHAT TRANSLATION</h5>
                <p className="text-sm text-white/90 mt-2">We bring people closer through effortless conversations.</p>
              </div>

              <div className="bg-white/10 rounded-xl p-6">
                <h5 className="font-semibold">VOICE CLONE SHARING</h5>
                <p className="text-sm text-white/90 mt-2">Communicate seamlessly no matter the language.</p>
              </div>

              <div className="bg-white/10 rounded-xl p-6">
                <h5 className="font-semibold">GENERATE MESSAGES</h5>
                <p className="text-sm text-white/90 mt-2">AI-powered replies that feel natural and contextual.</p>
              </div>
            </div>
          </div>

          {/* Center phones */}
          <div className="relative z-10 flex items-center justify-center gap-4 lg:gap-0">
            <div className="transform -rotate-6 scale-95">
              <Image src="/assets/imgs/brand/tilted phone.jpg" alt="phone left" width={280} height={560} className="rounded-3xl shadow-2xl" />
            </div>
            <div className="transform rotate-6 scale-100 -ml-6 lg:-ml-12">
              <Image src="/assets/imgs/brand/tilted phone.jpg" alt="phone right" width={280} height={560} className="rounded-3xl shadow-2xl" />
            </div>
          </div>

          {/* Right column features */}
          <div className="hidden lg:block w-1/3">
            <div className="space-y-6">
              <div className="bg-white/10 rounded-xl p-6">
                <h5 className="font-semibold">REAL TIME ACCURATE TRANSLATION</h5>
                <p className="text-sm text-white/90 mt-2">Seamless, instant translations that capture meaning, not just words.</p>
              </div>

              <div className="bg-white/10 rounded-xl p-6">
                <h5 className="font-semibold">VOICE CLONE GENERATION</h5>
                <p className="text-sm text-white/90 mt-2">Express yourself in any language using your own voice.</p>
              </div>

              <div className="bg-white/10 rounded-xl p-6">
                <h5 className="font-semibold">SUPPORTS 70+ LANGUAGES</h5>
                <p className="text-sm text-white/90 mt-2">Reliable assistance whenever you need it.</p>
              </div>
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
            <div className="rounded-[12px] bg-white border-2 border-emerald-200 p-4 flex flex-col aspect-square justify-start hover:bg-[#065F46] hover:border-[#065F46] hover:text-white transition-all duration-300 cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-emerald-50 hover:bg-emerald-600/50 flex items-center justify-center flex-shrink-0 transition-colors">
                <span className="text-emerald-700 hover:text-white text-2xl font-bold transition-colors">◎</span>
              </div>
              <h4 className="mt-3 text-2xl lg:text-4xl font-bold leading-snug text-emerald-900 hover:text-white transition-colors">Bio-Directional Communication</h4>
              <p className="mt-2 text-lg lg:text-xl text-emerald-700 hover:text-white/95 leading-relaxed transition-colors">Enjoy Seamless Two-Way Conversations Without Barriers.</p>
            </div>

            {/* Card 2 */}
            <div className="rounded-[12px] bg-white border-2 border-emerald-200 p-4 flex flex-col aspect-square justify-start hover:bg-[#065F46] hover:border-[#065F46] hover:text-white transition-all duration-300 cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-emerald-50 hover:bg-emerald-600/50 flex items-center justify-center flex-shrink-0 transition-colors">
                <span className="text-emerald-700 hover:text-white text-2xl font-bold transition-colors">◎</span>
              </div>
              <h4 className="mt-3 text-2xl lg:text-4xl font-bold text-emerald-900 hover:text-white leading-snug transition-colors">Smooth Multilingual Conversations</h4>
              <p className="mt-2 text-lg lg:text-xl text-emerald-700 hover:text-white/95 leading-relaxed transition-colors">Communicate Effortlessly Across Multiple Languages.</p>
            </div>

            {/* Card 3 */}
            <div className="rounded-[12px] bg-white border-2 border-emerald-200 p-4 flex flex-col aspect-square justify-start hover:bg-[#065F46] hover:border-[#065F46] hover:text-white transition-all duration-300 cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-emerald-50 hover:bg-emerald-600/50 flex items-center justify-center flex-shrink-0 transition-colors">
                <span className="text-emerald-700 hover:text-white text-2xl font-bold transition-colors">◎</span>
              </div>
              <h4 className="mt-3 text-2xl lg:text-4xl font-bold text-emerald-900 hover:text-white leading-snug transition-colors">Instant Message Translation</h4>
              <p className="mt-2 text-lg lg:text-xl text-emerald-700 hover:text-white/95 leading-relaxed transition-colors">Get Fast, Accurate Translations Right As You Chat.</p>
            </div>

            {/* Card 4 */}
            <div className="rounded-[12px] bg-white border-2 border-emerald-200 p-4 flex flex-col aspect-square justify-start hover:bg-[#065F46] hover:border-[#065F46] hover:text-white transition-all duration-300 cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-emerald-50 hover:bg-emerald-600/50 flex items-center justify-center flex-shrink-0 transition-colors">
                <span className="text-emerald-700 hover:text-white text-2xl font-bold transition-colors">◎</span>
              </div>
              <h4 className="mt-3 text-2xl lg:text-4xl font-bold text-emerald-900 hover:text-white leading-snug transition-colors">Voice Cloning & Audio Sharing</h4>
              <p className="mt-2 text-lg lg:text-xl text-emerald-700 hover:text-white/95 leading-relaxed transition-colors">Speak In Any Language Using Your Own Voice And Share It Instantly.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default BrandingIntro;
