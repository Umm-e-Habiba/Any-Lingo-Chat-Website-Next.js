"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { FaPlay, FaApple, FaGooglePlay } from "react-icons/fa6";
import VideoModal from "@/components/tools/VideoModal";
import { useGSAP } from "@gsap/react";
import hasPinContent from "@/lib/animation/hasPinContent";
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
      {/* Hero background image */}
      <div className="absolute w-full h-full -z-10 top-0 start-0 overflow-hidden">
        <Image
          src="/assets/imgs/hero/branding/BG.png"
          alt="hero background"
          fill
          className="object-cover"
          priority
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
            <div className="has_fade_anim mt-8 md:mt-12 lg:mt-16" data-fade-from="left">
              {/* Top pill (optional): sub_title */}
              {sub_title && (
                <span className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-white/70 text-emerald-700 ring-1 ring-black/5 backdrop-blur mb-5">
                  {sub_title}
                </span>
              )}

              {/* Big title */}

              <h1
                className={cn(
                  "has_char_anim branding-hero-title font-display text-white uppercase !leading-[1.1] tracking-tight",
                  "text-[32px] mt-0 mb-0",                  // mobile
                  "sm:text-[40px] sm:mt-[-1px] sm:mb-[-4px]",  // small screens
                  "md:text-[56px] md:tracking-[-0.02em]",      // medium
                  "xl:text-[72px] xl:mb-[-6px]",               // large
                  "2xl:text-[88px] 2xl:mt-[-1px] 2xl:mb-[-10px]", // extra large
                  layout === "box" &&
                    "xxl:text-[80px] 2xl:mt-0 2xl:mb-[-6px] 2xl:max-w-[900px]"
                )}
                dangerouslySetInnerHTML={convertWithBrSpan(title, "no-animate")}
              />


              {/* Subheading */}
              {description && (
                <p className="mt-6 max-w-[60ch] text-[17px] md:text-[18px] leading-[1.4] text-white/95">
                  {/* Make 'AnyLingo:' bold and the rest regular to match the design */}
                  {description.startsWith("AnyLingo:") ? (
                    <>
                      <strong className="font-[600] mr-1">AnyLingo:</strong>
                      <span className="font-[450]">{description.replace(/^AnyLingo:\s*/i, "")}</span>
                    </>
                  ) : (
                    description
                  )}
                </p>
              )}

                {/* Download badges (black style) */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="https://apps.apple.com/pk/app/any-lingo-chat/id6698850454"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-md px-4 py-3 bg-black text-white shadow-sm hover:opacity-90 transition"
                  aria-label="Download on the App Store"
                >
                  {/* Apple's iconic rainbow logo color */}
                  <FaApple className="text-lg" style={{ color: '#A6B1B7' }} />
                  <div className="flex flex-col leading-[0.9] text-left">
                    <span className="text-[11px]">Download on the</span>
                    <span className="font-semibold">App Store</span>
                  </div>
                </a>

                <a
                  href="https://play.google.com/store/apps/details?id=com.anylingo.chat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-md px-4 py-3 bg-black text-white shadow-sm hover:opacity-90 transition"
                  aria-label="Get it on Google Play"
                >
                  {/* Google Play's icon colors */}
                  <FaGooglePlay className="text-lg" style={{ color: '#00F076' }} />
                  <div className="flex flex-col leading-[0.9] text-left">
                    <span className="text-[11px]">GET IT ON</span>
                    <span className="font-semibold">Google Play</span>
                  </div>
                </a>
              </div>              {/* Trusted avatars + rating */}
              <div className="mt-5 flex items-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <Image src="/assets/imgs/team/user1.jpg" alt="User 1" width={36} height={36} className="h-9 w-9 rounded-full ring-2 ring-white object-cover" />
                    <Image src="/assets/imgs/team/user2.jpg" alt="User 2" width={36} height={36} className="h-9 w-9 rounded-full ring-2 ring-white object-cover" />
                    <Image src="/assets/imgs/team/user3.jpg" alt="User 3" width={36} height={36} className="h-9 w-9 rounded-full ring-2 ring-white object-cover" />
                  </div>

                  <div className="bg-white text-black rounded-full px-2 py-1 text-sm font-semibold shadow -ml-2">
                    9K
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {/* stars */}
                  <div className="flex text-yellow-400">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 .587l3.668 7.568L24 9.423l-6 5.858L19.335 24 12 19.897 4.665 24 6 15.281 0 9.423l8.332-1.268L12 .587z"/></svg>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 .587l3.668 7.568L24 9.423l-6 5.858L19.335 24 12 19.897 4.665 24 6 15.281 0 9.423l8.332-1.268L12 .587z"/></svg>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 .587l3.668 7.568L24 9.423l-6 5.858L19.335 24 12 19.897 4.665 24 6 15.281 0 9.423l8.332-1.268L12 .587z"/></svg>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 .587l3.668 7.568L24 9.423l-6 5.858L19.335 24 12 19.897 4.665 24 6 15.281 0 9.423l8.332-1.268L12 .587z"/></svg>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 .587l3.668 7.568L24 9.423l-6 5.858L19.335 24 12 19.897 4.665 24 6 15.281 0 9.423l8.332-1.268L12 .587z"/></svg>
                  </div>

                  <p className="text-sm text-white/90">Trusted by 9K happy customers</p>
                </div>
              </div>

              {/* removed earlier 'Supports More Than' line to match design */}
            </div>

            {/* RIGHT: removed — using hero background image instead (per design) */}
          </div>
          
        </div>
      </div>

      <VideoModal link={video} isOpen={isOpen} close={closeDialog} />
    </section>
  );
};

export default BrandingHero;
