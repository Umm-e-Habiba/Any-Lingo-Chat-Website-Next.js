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
      className="relative py-32 lg:py-48 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/assets/imgs/brand/breaking barriers bg.jpg"
          alt="breaking barriers background"
          fill
          className="object-cover blur-sm scale-125"
          style={{
            objectPosition: 'center 30%'
          }}
          unoptimized
        />
      </div>

      <div ref={containerRef} className="container relative z-10">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-center justify-center px-4">
          {/* Left: Content - Centered */}
          <div className="max-w-2xl text-center flex-1 flex flex-col items-center">
            <div className="text-9xl lg:text-10xl font-bold text-white mb-12">
              <span data-count={value} className="has_count_anim">
                {value}
              </span>
            </div>
            <p className="text-white text-2xl lg:text-3xl font-medium leading-relaxed">
              Breaking barriers isn't easy, yet AnyLingo has delivered seamless translation in over 70 languages.
            </p>
          </div>

          {/* Right: Mobile Phone Mockup */}
          <div className="flex justify-right flex-1">
            <div className="relative w-full max-w-2xl h-full flex items-right">
              <Image
                src="/assets/imgs/brand/Pre-comp 7_00240 1.png"
                alt="AnyLingo app features"
                width={1920}
                height={2624}
                className="w-[800px] h-[600px] md:w-[500px] md:h-[600px] lg:w-[400px] lg:h-[700px] xl:w-[300px] xl:h-[700px] 2xl:w-[400px] 2xl:h-[800px] drop-shadow-2xl"
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
