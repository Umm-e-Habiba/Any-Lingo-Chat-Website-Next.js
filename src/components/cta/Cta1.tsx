"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import hasPinContent from "@/lib/animation/hasPinContent";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import ButtonSwap from "../elements/button/ButtonSwap";
import { ActionBtnType } from "@/types";

type Props = {
  title: string;
  sub_title: string;
  action_btn: ActionBtnType;
};

const Cta1 = ({ title, sub_title, action_btn }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const pinElement = useRef<HTMLDivElement>(null!);
  const videoRef = useRef<HTMLVideoElement>(null!);
  const [isPlaying, setIsPlaying] = useState(false);

  useGSAP(
    () => {
      hasPinContent(pinElement.current);
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section
      ref={pinElement}
      className="cta_area main-section-style bg-[#2f8e3a] text-white overflow-hidden mb-[50px]" 
      
    >
      <div ref={containerRef} className="container">
        <div className="py-20 lg:py-28 text-center">
          <div className="max-w-[1000px] mx-auto">
            <h2 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[72px]  leading-[1.02] "
            style={{
              fontFamily: "'ADLaM Display', sans-serif",
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '75px',
              lineHeight: '100%',
              letterSpacing: '-2px',
              textAlign: 'center',
            }}
            >
              Love our Application?
            </h2>
            <h3 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[72px]  leading-[1.02]  mt-3"
            style={{
              fontFamily: "'ADLaM Display', sans-serif",
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '75px',
              lineHeight: '100%',
              letterSpacing: '-2px',
              textAlign: 'center',
            }}>
              Download Now
            </h3>

            <p className="mt-4 text-[14px] sm:text-[16px] text-white/90 max-w-[760px] mx-auto"
            style={{
              fontFamily: "'Lato', sans-serif",
              fontWeight: 500,
              fontStyle: 'normal',
              fontSize: '18px',
              lineHeight: '32px',
              letterSpacing: '-0.2px',
              textAlign: 'center',
              textTransform: 'capitalize',
            }}>
              Like What AnyLingo Offers? Take The Next Step - Download The App And Make Every Conversation Smoother.
            </p>

            {/* Store buttons */}
            <div className="flex items-center justify-center gap-5 mt-10">
              {/* Google Play button */}
              <a
                href="#"
                className="inline-flex items-center gap-3 bg-black text-white rounded-lg px-5 py-3 hover:bg-gray-900 transition-colors duration-300"
                style={{
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  minWidth: "160px",
                }}
                aria-label="Get it on Google Play"
              >
                <span className="flex-shrink-0">
                  {/* Google Play colorful icon */}
                  <svg width="28" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 20.5L20.5 12L3 3.5v17z" fill="#34A853"/>
                    <path d="M3 3.5L14.5 12L20.5 8.5L3 3.5z" fill="#4285F4"/>
                    <path d="M3 20.5L20.5 15.5L14.5 12L3 20.5z" fill="#FBBC05"/>
                    <path d="M20.5 12l-6-3.5L3 3.5l17.5 8.5z" fill="#EA4335"/>
                  </svg>
                </span>
                <div className="text-left leading-tight">
                  <div className="text-[10px] font-normal uppercase tracking-wide opacity-90">GET IT ON</div>
                  <div className="text-[17px] font-semibold -mt-0.5">Google Play</div>
                </div>
              </a>

              {/* App Store button */}
              <a
                href="#"
                className="inline-flex items-center gap-3 bg-white text-black rounded-lg px-5 py-3 hover:bg-gray-100 transition-colors duration-300"
                style={{
                  backgroundColor: 'rgb(0 0 0 / 0%)',
                  borderColor:"#fff",
                  
                  borderWidth: '1px',
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  minWidth: "160px",
                  color: '#fff',
                }}
                aria-label="Download on the App Store"
              >
                <span className="flex-shrink-0">
                  {/* Apple logo */}
                  <svg width="24" height="28" viewBox="0 0 814 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" fill="currentColor"/>
                  </svg>
                </span>
                <div className="text-left leading-tight">
                  <div className="text-[10px] font-normal  tracking-wide opacity-70">Download on the</div>
                  <div className="text-[17px] font-semibold -mt-0.5">App Store</div>
                </div>
              </a>
            </div>

            {/* Video Section */}
            <div className="mt-16 relative w-full px-4 md:px-8">
              <div className="relative max-w-[1200px] mx-auto">
                {/* decorative left dots */}
                <div className="absolute -left-[40px] top-[-40px] grid grid-cols-6 gap-3 opacity-50 z-10">
                  {Array.from({ length: 30 }).map((_, i) => (
                    <span key={i} className="w-2 h-2 bg-white/80 rounded-full" />
                  ))}
                </div>

                {/* Video Container */}
                <div className="relative rounded-[30px] overflow-hidden shadow-2xl  mt-[50px] mb-[50px] z-10" style={{}}>
                  {/* Video Element */}
                  <video
                    ref={videoRef}
                    className="w-full h-auto block cursor-pointer"
                    poster="/assets/imgs/hero/hero-3.jpg"
                    onClick={handlePlayPause}
                    onEnded={() => setIsPlaying(false)}
                    preload="auto"
                    style={{
                      aspectRatio: "16/9",
                      objectFit: "cover",
                      backgroundColor: '#fff'
                    }}
                  >
                    <source src="/assets/video/IMG_7055.MP4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Custom Play Button - Only show when not playing */}
                  {!isPlaying && (
                    <button 
                      onClick={handlePlayPause}
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                                 w-28 h-28 rounded-full bg-white 
                                 flex items-center justify-center 
                                 shadow-2xl hover:scale-110 transition-transform duration-300
                                 z-30"
                      aria-label="Play video"
                    >
                      {/* Green Play Triangle */}
                      <div className="w-0 h-0 ml-2
                                      border-l-[24px] border-l-[#2f8e3a] 
                                      border-t-[16px] border-t-transparent 
                                      border-b-[16px] border-b-transparent">
                      </div>
                    </button>
                  )}
                </div>

                {/* Top Right Corner Accents */}
                <div className="absolute -top-4 -right-4 w-32 h-32 z-20 pointer-events-none hidden lg:block">
                  {/* White square accent */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-white rounded-bl-[30px]"></div>
                  {/* Orange square accent behind */}
                  <div className="absolute top-0 right-0 w-20  h-20 bg-[#ff6b3b] rounded-bl-[35px]"></div>
                </div>

                {/* Bottom Right Corner Accent - Large curved shape */}
                <div className="absolute -bottom-8 -right-8 w-40 h-40 z-20 pointer-events-none hidden lg:block">
                  <div className="w-36  h-36 bg-[#ff6b3b] rounded-tl-[100px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta1;
