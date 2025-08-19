"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { FaPlay, FaApple, FaGooglePlay } from "react-icons/fa6"; // ← add these
import VideoModal from "@/components/tools/VideoModal";
import { useGSAP } from "@gsap/react";
import hasPinContent from "@/lib/animation/hasPinContent";
import { ActionBtnType } from "@/types";
import hasCharAnim from "@/lib/animation/hasCharAnim";
import { convertWithBrSpan } from "@/lib/helper/converter";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import { useDirection, useLayout } from "@/context/app.context";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  sub_title: string;
  description: string;
  image: string; // background
  video: string;
  action_btn?: ActionBtnType;
};

const BrandingHero = ({
  title,
  sub_title,
  description,
  image,
  video,
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const pinElement = useRef<HTMLDivElement>(null!);
  const { layout } = useLayout();
  const { direction } = useDirection();
  const [isOpen, setIsOpen] = useState(false);

  const closeDialog = () => setIsOpen(!isOpen);

  useGSAP(() => { hasPinContent(pinElement.current); hasFadeAnim(); }, { scope: containerRef });
  useGSAP(() => { hasCharAnim(); }, { dependencies: [direction], scope: containerRef });

  return (
    <section id="about" ref={pinElement} className="hero-area z-10 pb-[130px] relative">
      {/* background */}
      <div className="absolute w-full h-full -z-10 top-0 start-0">
        <Image
          src={image}
          alt="Hero image"
          className="w-full h-full"
          style={{ objectFit: "cover" }}
          height={2110}
          width={1920}
        />
      </div>

      <div className="container">
        <div
          ref={containerRef}
          className="pt-[120px] pb-[50px] md:pb-[80px] lg:pb-[120px] xl:pb-[150px] 2xl:pt-[200px] 2xl:pb-[200px]"
        >
          {/* ====== HERO CONTENT ====== */}
          <div className="grid grid-cols-1 items-center gap-y-10 gap-x-16 lg:grid-cols-2">

            {/* LEFT: title + sub + buttons + downloads + video */}
            <div className="has_fade_anim" data-fade-from="left">
              {/* Top pill (optional): sub_title */}
              {sub_title && (
                <span className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-white/70 text-emerald-700 ring-1 ring-black/5 backdrop-blur mb-5">
                  {sub_title}
                </span>
              )}

              {/* Big title */}

              <h1
                className={cn(
                  "has_char_anim branding-hero-title !font-getaway text-text-fixed uppercase !leading-[1] !font-normal",
                  "text-[24px] mt-0 mb-0",                  // mobile
                  "sm:text-[32px] sm:mt-[-1px] sm:mb-[-4px]",  // small screens
                  "md:text-[48px] md:tracking-[-0.01em]",      // medium
                  "xl:text-[64px] xl:mb-[-6px]",               // large
                  "2xl:text-[80px] 2xl:mt-[-1px] 2xl:mb-[-10px]", // extra large
                  layout === "box" &&
                    "xxl:text-[72px] 2xl:mt-0 2xl:mb-[-6px] 2xl:max-w-[900px]"
                )}
                dangerouslySetInnerHTML={convertWithBrSpan(title, "no-animate")}
              />


              {/* Subheading */}
              {description && (
                <p className="mt-6 max-w-[60ch] text-base md:text-lg text-text-fixed/80 text-black">
                  {description}
                </p>
              )}

              {/* Download buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                {/* App Store */}
                <a
                  href="https://apps.apple.com/pk/app/any-lingo-chat/id6698850454"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full px-8 py-4 bg-background-fixed text-text-fixed-2 shadow-sm hover:opacity-90 transition"
                  aria-label="Download on the App Store"
                >
                  <FaApple className="text-xl" />
                  <span className="font-medium">Download App</span>
                </a>

                {/* Google Play */}
                <a
                  href="https://play.google.com/store/apps/details?id=com.anylingo.chat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full px-8 py-4 bg-background-fixed text-text-fixed-2 shadow-sm hover:opacity-90 transition"
                  aria-label="Get it on Google Play"
                >
                  <FaGooglePlay className="text-xl" />
                  <span className="font-medium">Get it on Google Play</span>
                </a>
              </div>

              {/* Downloads metric */}
              <div className="mt-5 flex items-center gap-3">
                {/* simple avatar group (placeholders) */}
                {/* avatar group */}
                <div className="flex -space-x-2">
                  <Image
                    src="/assets/imgs/team/user1.jpg"
                    alt="User 1"
                    width={32}
                    height={32}
                    className="h-8 w-8 rounded-full ring-2 ring-white object-cover"
                  />
                  <Image
                    src="/assets/imgs/team/user2.jpg"
                    alt="User 2"
                    width={32}
                    height={32}
                    className="h-8 w-8 rounded-full ring-2 ring-white object-cover"
                  />
                  <Image
                    src="/assets/imgs/team/user3.jpg"
                    alt="User 3"
                    width={32}
                    height={32}
                    className="h-8 w-8 rounded-full ring-2 ring-white object-cover"
                  />
                </div>

                <p className="text-base font-medium text-text-fixed">
                  10,000+ Downloads
                </p>
              </div>

              {/* Watch video button */}
              <div>
                <div className="relative rounded-[30px] overflow-hidden inline-block mt-8 md:mt-10 lg:mt-12">
                  <Image
                    src="/assets/imgs/hero/branding/lingo.png"
                    className="w-full h-full"
                    width={435}
                    height={260}
                    alt="image"
                  />

                  {/* centered button */}
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="h-[80px] w-[80px] border-[2px] text-[18px] rounded-full flex items-center justify-center pos-center cursor-pointer bg-white/20 backdrop-blur hover:bg-white/30 transition"
                    aria-label="Play video"
                  >
                    
                    <FaPlay className="text-text-fixed-2" />
                  </button>
                </div>
              </div>

              <p className="mt-10 text-2xl md:text-3xl 2xl:text-4xl !font-getaway font-bold text-text-fixed text-center lg:text-left">
  Supports More Than 70+ Languages
</p>
            </div>

            {/* RIGHT: phone image */}
            <div className="has_fade_anim hidden lg:block " data-fade-from="right">
              <div className="relative mx-auto max-w-[520px] ">
                <Image
                  src="/assets/imgs/brand/5.png" // your phone/mock image
                  alt="App preview"
                  width={520}
                  height={300}
                  className="w-full h-auto "
                  priority
                  style={{height:"800px"}}
                />
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <VideoModal link={video} isOpen={isOpen} close={closeDialog} />
    </section>
  );
};

export default BrandingHero;
