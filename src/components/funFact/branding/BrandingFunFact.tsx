"use client";
import { useRef, useState, useEffect } from "react";
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

const BrandingFunFact = ({ title }: Props) => {
  const sectionRef = useRef<HTMLDivElement>(null!);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ratio, setRatio] = useState<number>(16 / 9); // fallback until metadata loads

  // Measure natural video aspect ratio to size the section without cropping
  const handleLoadedMetadata = () => {
    const v = videoRef.current;
    if (!v) return;
    const w = v.videoWidth || 16;
    const h = v.videoHeight || 9;
    const r = w / h;
    if (!Number.isNaN(r) && r > 0) setRatio(r);
    // Ensure ScrollTrigger computes with the final height
    ScrollTrigger.refresh();
  };

  

  // If fonts/layout change later, keep ScrollTrigger in sync
  useEffect(() => {
    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <section
      
      
      // Use aspect-ratio so the section matches the video's natural shape (no crop)
      className="relative w-full h-[240px] sm:h-[450px] md:h-[432px] lg:h-[576px] xl:h-[612px] 2xl:h-[1440px] mb-[0px]  lg:mb-[0px] mt-[0px] lg:mt-[0px] "
      
    >
      {/* Background Video (no cropping) */}
      <div className="absolute inset-0 -z-10 w-full h-full">
        <video
          
          autoPlay
          loop
          muted
          playsInline
          onLoadedMetadata={handleLoadedMetadata}
          // object-contain ensures the entire frame is visible; bg shows letterbox/pillarbox
          className="w-full h-full object-contain bg-black"
          style={{ width: "100%", height: "100%", }}
        >
          <source src="/assets/video/IMG_7053.MP4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content overlay (optional) */}
      <div className="container relative z-10 pointer-events-none">
        {/* Put overlay content here if needed */}
      </div>
    </section>
  );
};

export default BrandingFunFact;
