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
    <section className="text-white py-16 lg:py-24 relative overflow-hidden z-30 h-[250px] md:h-[400px] lg:h-[600px] xl:h-[800px] 2xl:h-[1150px] ">
    {/* Background Video */}
    <div className="container">
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

   
    </div>
  </section>
  );
};

export default BrandingFunFact;
