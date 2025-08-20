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
    <section
      id="Intro"
      ref={pinElement}
      className="scroll-mt-24 bg-[#D8E9E4] dark:bg-[#252525] main-section-style"
    >
      <div ref={containerRef} className="container">
        <div className=" main-section-spacing relative">
          {/* Background Shape */}
          <div className="hidden lg:block absolute start-[59%] top-[4%] xl:top-[10%]">
            <ImageComponent
              className="w-auto h-[169px] xl:h-[269px] 2xl:h-[319px]"
              src={shape.dark}
              darkSrc={shape.light}
              width={372}
              height={320}
              alt="shape-1"
            />
          </div>

          {/* Section Title */}
          <MainSectionTitle title="Why Choose Any-Ling Chat" className="section-title items-center justify-center" />

          {/* WHY CHOOSE APPBOX CONTENT */}
          <div className="mt-[50px] xl:mt-[90px] flex flex-col lg:flex-row items-center justify-center gap-8">
            {/* Left Features */}
            <div className="space-y-12 text-right max-w-sm -mt-20">
            {featuresLeft.map((f, i) => (
                <div key={i} className="feature-left flex items-center justify-end gap-8">
                {/* Text */}
                <div>
                    <h3 className="font-bold text-2xl">{f.title}</h3>
                    <p className="text-lg text-gray-600 dark:text-gray-400">{f.desc}</p>
                </div>

                {/* Bigger Oval Icon */}
                <div className="w-28 h-16 flex items-center justify-center 
                rounded-3xl border border-gray-300 
                text-green-500 text-4xl shrink-0 shadow-md">
                {f.icon}
                </div>

                </div>
            ))}
            </div>




            {/* Phone Image */}
            <div className="relative phone-container">
            <Image
                src="/assets/imgs/brand/55.png"
                alt="App Preview"
                width={400}
                height={700}
                className="drop-shadow-xl phone-image"
            />
            </div>

            {/* Right Features */}
            <div className="space-y-12 text-left max-w-sm -mt-20">
            {featuresRight.map((f, i) => (
                <div key={i} className="feature-right flex items-center gap-8">
                {/* Oval Icon */}
                <div className="w-28 h-16 flex items-center justify-center 
                rounded-3xl border border-gray-300 
                text-green-500 text-4xl shrink-0 shadow-md">
                    {f.icon}
                </div>

                {/* Text */}
                <div>
                    <h3 className="font-bold text-2xl">{f.title}</h3>
                    <p className="text-lg text-gray-600 dark:text-gray-400">{f.desc}</p>
                </div>
                </div>
            ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandingIntro;
