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
    <section id="about" ref={pinElement} className="hero-area z-10 pb-[40px] sm:pb-[80px] md:pb-[100px] lg:pb-[130px] relative overflow-hidden" style={{top: '0px'}}>
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

      <div className="container px-4 sm:px-6 md:px-8">
        <div
          ref={containerRef}
          className="pt-[60px] sm:pt-[100px] md:pt-[120px] lg:pt-[140px] xl:pt-[160px] 2xl:pt-[200px] pb-[20px] sm:pb-[50px] md:pb-[80px] lg:pb-[120px] xl:pb-[150px] 2xl:pb-[200px]"
        >
          {/* ====== HERO CONTENT ====== */}
          <div className="grid grid-cols-1 items-center gap-y-6 sm:gap-y-8 md:gap-y-10 gap-x-8 md:gap-x-12 lg:gap-x-16 lg:grid-cols-2 pl-0 sm:pl-[10px] md:pl-[20px] lg:pl-[40px]">

            {/* LEFT: title + sub + buttons + downloads + video */}
            <div className="has_fade_anim mt-0 sm:mt-6 md:mt-8 lg:mt-12 xl:mt-16" data-fade-from="left">
              {/* Top pill (optional): sub_title */}
              {sub_title && (
                <span className="inline-flex items-center rounded-full px-2.5 py-1 sm:px-4 sm:py-2 text-[10px] sm:text-sm font-medium bg-white/70 text-emerald-700 ring-1 ring-black/5 backdrop-blur mb-2 sm:mb-4 md:mb-5">
                  {sub_title}
                </span>
              )}

              {/* Big title */}
              <h1
                className={cn(
                  "has_char_anim branding-hero-title font-display text-white ",
                  "text-[16px] leading-[1.25] tracking-tight mt-10 mb-0",                  // mobile - even smaller
                  "xs:text-[24px] xs:leading-[1.2]",          // extra small
                  "sm:text-[16px] sm:leading-[1.1] sm:tracking-[-0.5px]",  // small screens
                  "md:text-[48px] md:leading-[1.1] md:tracking-[-1px]",      // medium
                  "lg:text-[56px] lg:tracking-[-1.5px]",      // large
                  "xl:text-[72px] xl:tracking-[-2px] xl:mb-[-6px]",  // extra large
                  "2xl:text-[88px] 2xl:mt-[-1px] 2xl:mb-[-10px]", // 2xl
                  layout === "box" &&
                    "xxl:text-[80px] 2xl:mt-0 2xl:mb-[-6px] 2xl:max-w-[900px]"
                )}
                dangerouslySetInnerHTML={convertWithBrSpan(title, "no-animate")}
                style={{
                  fontFamily: "'ADLaM Display', sans-serif",
                  fontWeight: 400,
                  fontStyle: 'normal',
                  fontSize: '60px',
                  lineHeight: '65px',
                  letterSpacing: '-2px',
                }}
              />


              {/* Subheading */}
              {description && (
                <p className="mt-2.5 sm:mt-4 md:mt-5 lg:mt-6 max-w-full sm:max-w-[90%] md:max-w-[80%] lg:max-w-[60ch] text-[6px] sm:text-[8px] md:text-[16px] lg:text-[17px] xl:text-[18px] leading-[1.6] sm:leading-[1.5] md:leading-[1.4] text-white/95">
                  {/* Make 'AnyLingo:' bold and the rest regular to match the design */}
                  {description.startsWith("AnyLingo:") ? (
                    <>
                      <strong className="font-[600] mr-1">AnyLingo:</strong>
                      <span className="font-[400]">{description.replace(/^AnyLingo:\s*/i, "")}</span>
                    </>
                  ) : (
                    description
                  )}
                </p>
              )}

                {/* Download badges (black style) */}
              <div className="mt-3 sm:mt-6 md:mt-7 lg:mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2 sm:gap-4  w-[200px] sm:w-auto">
                <a
                  href="https://apps.apple.com/pk/app/any-lingo-chat/id6698850454"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center sm:justify-start gap-1.5 sm:gap-3 rounded-md px-2.5 py-1.5 sm:px-4 sm:py-3 bg-black text-white shadow-sm hover:opacity-90 transition w-full sm:w-auto"
                  aria-label="Download on the App Store"
                >
                  {/* Apple's iconic rainbow logo color */}
                  <FaApple className="text-sm sm:text-lg" style={{ color: '#A6B1B7' }} />
                  <div className="flex flex-col leading-[0.9] text-left">
                    <span className="text-[8px] sm:text-[11px]">Download on the</span>
                    <span className="font-semibold text-[11px] sm:text-base">App Store</span>
                  </div>
                </a>

                <a
                  href="https://play.google.com/store/apps/details?id=com.anylingo.chat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center sm:justify-start gap-1.5 sm:gap-3 rounded-md px-2.5 py-1.5 sm:px-4 sm:py-3 bg-black text-white shadow-sm hover:opacity-90 transition w-full sm:w-auto"
                  aria-label="Get it on Google Play"
                >
                  {/* Google Play's icon colors */}
                  <FaGooglePlay className="text-sm sm:text-lg" style={{ color: '#00F076' }} />
                  <div className="flex flex-col leading-[0.9] text-left">
                    <span className="text-[8px] sm:text-[11px]">GET IT ON</span>
                    <span className="font-semibold text-[11px] sm:text-base">Google Play</span>
                  </div>
                </a>
              </div>


              
              {/* Trusted avatars + rating */}
              <div className="mt-2.5 sm:mt-5 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                <div className="flex items-center gap-1.5 sm:gap-3">
                  <div className="flex -space-x-1 sm:-space-x-2">
                    <Image src="/assets/imgs/team/user1.jpg" alt="User 1" width={24} height={24} className="h-5 w-5 sm:h-8 sm:w-8 md:h-9 md:w-9 rounded-full ring-1 sm:ring-2 ring-white object-cover" />
                    <Image src="/assets/imgs/team/user2.jpg" alt="User 2" width={24} height={24} className="h-5 w-5 sm:h-8 sm:w-8 md:h-9 md:w-9 rounded-full ring-1 sm:ring-2 ring-white object-cover" />
                    <Image src="/assets/imgs/team/user3.jpg" alt="User 3" width={24} height={24} className="h-5 w-5 sm:h-8 sm:w-8 md:h-9 md:w-9 rounded-full ring-1 sm:ring-2 ring-white object-cover" />
                  </div>

                  <div className="bg-white text-black rounded-full px-1.5 py-0.5 sm:px-2 sm:py-1 text-[9px] sm:text-sm font-semibold shadow">
                    9K
                  </div>
                </div>

                <div className="flex items-center gap-0.5 sm:gap-2">
                  {/* stars */}
                  <div className="flex text-yellow-400">
                    <svg width="11" height="11" className="sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 .587l3.668 7.568L24 9.423l-6 5.858L19.335 24 12 19.897 4.665 24 6 15.281 0 9.423l8.332-1.268L12 .587z"/></svg>
                    <svg width="11" height="11" className="sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 .587l3.668 7.568L24 9.423l-6 5.858L19.335 24 12 19.897 4.665 24 6 15.281 0 9.423l8.332-1.268L12 .587z"/></svg>
                    <svg width="11" height="11" className="sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 .587l3.668 7.568L24 9.423l-6 5.858L19.335 24 12 19.897 4.665 24 6 15.281 0 9.423l8.332-1.268L12 .587z"/></svg>
                    <svg width="11" height="11" className="sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 .587l3.668 7.568L24 9.423l-6 5.858L19.335 24 12 19.897 4.665 24 6 15.281 0 9.423l8.332-1.268L12 .587z"/></svg>
                    <svg width="11" height="11" className="sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 .587l3.668 7.568L24 9.423l-6 5.858L19.335 24 12 19.897 4.665 24 6 15.281 0 9.423l8.332-1.268L12 .587z"/></svg>
                  </div>

                  <p className="text-[10px] sm:text-sm text-white/90">Trusted by 9K happy customers</p>
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
