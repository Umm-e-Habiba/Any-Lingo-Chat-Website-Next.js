"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  title: string;
  shape1: string;
  shape2: string;
  value: number;
};

const BrandingFunFact = ({ title, shape1, shape2, value }: Props) => {
  const sectionRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      // Exact same sliding effect as BrandingIntro (phone-image animation)
      gsap.fromTo(
        sectionRef.current,
        { y: 0 },
        {
          y: -100,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{height: '900px', marginBottom:'-100px'}}
    >
      {/* Background Video */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%'
          }}
        >
          <source src="/assets/video/IMG_7053.MP4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="container relative z-10 ">
        {/* Empty container to maintain height */}
      </div>
    </section>
  );
};

export default BrandingFunFact;
