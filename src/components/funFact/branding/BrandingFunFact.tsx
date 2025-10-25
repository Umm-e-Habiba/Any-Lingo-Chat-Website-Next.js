"use client";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import hasPinContent from "@/lib/animation/hasPinContent";
import hasImageReveal from "@/lib/animation/hasImageReveal";
import hasCountAnim from "@/lib/animation/hasCountAnim";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import Image from "next/image";

type Props = {
  title: string;
  shape1: string;
  shape2: string;
  value: number;
};

const BrandingFunFact = ({ title, shape1, shape2, value }: Props) => {
  const pinElement = useRef<HTMLDivElement>(null!);
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasPinContent(pinElement.current);
      hasImageReveal();
      hasCountAnim();
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={pinElement}
      className="relative py-32 lg:py-48 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 overflow-hidden"
    >
      <div ref={containerRef} className="container">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center justify-center">
          {/* Left: Content - Centered */}
          <div className="max-w-2xl text-center flex-1">
            <div className="text-9xl lg:text-10xl font-bold text-white mb-12">
              <span data-count={value} className="has_count_anim">
                {value}
              </span>
            </div>
            <p className="text-white text-2xl lg:text-4xl font-medium leading-relaxed">
              Breaking barriers isn't easy, yet AnyLingo has delivered seamless translation in over 70 languages.
            </p>
          </div>

          {/* Right: Mobile Phone Mockup - Full Size */}
          <div className="flex justify-center lg:justify-end flex-1">
            <div className="relative w-full h-full flex items-center justify-end">
              <Image
                src="/assets/imgs/brand/Pre-comp 7_00240 1.png"
                alt="AnyLingo app features"
                width={1920}
                height={2624}
                className="w-full max-w-full h-auto drop-shadow-2xl"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandingFunFact;
