"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import hasPinContent from "@/lib/animation/hasPinContent";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

import SectionTitle from "@/components/sectionTitle/SectionTitle";
import BranWorkFooter from "@/components/work/branding/BranWorkFooter";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow,Autoplay  } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";

import Image from "next/image";

type TBrandingWorks = {
  works: { id: number; image: string }[];
  title: string;
  description: string;
  action_btn: any;
};

const BrandingScreenShot = ({ works, title, description, action_btn }: TBrandingWorks) => {
  const pinElement = useRef<HTMLDivElement>(null!);
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(() => {
    hasPinContent(pinElement.current);
    hasFadeAnim();
  }, { scope: containerRef });

  return (
    <section
      id="product"
      ref={pinElement}
      className="scroll-mt-24 work-area section-item mb-[130px] mt-[-130px] 
      rounded-[30px_30px_0_0] lg:rounded-[50px_50px_0_0] xl:rounded-[80px_80px_0_0] 
      relative z-10 overflow-hidden"
      style={{ backgroundColor: '#e0ffe9' }}
    >
      <div ref={containerRef} className="container">
        <div className="main-section-spacing ">
          {/* Title */}
          <SectionTitle
            title={title}
            className="text-[28px] sm:text-[36px] lg:text-[40px] xl:text-[60px] 2xl:text-[70px] 
            font-instrument font-semibold leading-[1] mb-6 text-center text-[#1f6f2e]"
          />

          {/* Short descriptive paragraph under title */}
          <p className="text-center text-[#164e24] max-w-[920px] mx-auto mt-4 text-[18px]" style={{
            fontFamily: "'Lato', sans-serif",
            fontWeight: 600,
            fontStyle: 'normal',
            fontSize: '20px',
            lineHeight: '24px',
            letterSpacing: '0',
            textAlign: 'center',
            
          }}>
            From instant Translations To Smooth Conversations, Our App Screenshots Showcase The Powerful Features That Keep You Connected Across Languages.
          </p>
          
          

           {/* Screenshot Slider with Mockup */}
           <div className="relative max-w-6xl mx-auto mt-10" style={{marginTop:"120px"}}>
              {/* Phone Mockup Overlay */}
              <div className="absolute top-1/2 left-1/2 w-[350px] h-[525px] 
                              -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
                <Image
                  src="/assets/imgs/brand/screenshots/mockup6.png"
                  alt="phone frame"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Screenshot Slider */}
            <Swiper
              modules={[EffectCoverflow, Navigation, Autoplay]}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView="auto"
              loop={true}
              navigation
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 200,
                modifier: 2,
                slideShadows: false,
              }}
              className="relative"
            >
              {works.map((work, idx) => (
                <SwiperSlide
                  key={idx}
                  className="!w-[240px] !h-[480px] flex justify-center"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={work.image}
                      alt={`App screenshot ${idx + 1}`}
                      fill
                      className="object-cover rounded-2xl shadow-xl"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            </div>



          {/* Footer */}
          <div className="text-center">
            <BranWorkFooter action_btn={action_btn} />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default BrandingScreenShot;
