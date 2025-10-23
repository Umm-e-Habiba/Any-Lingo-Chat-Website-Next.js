"use client";
import hasPinContent from "@/lib/animation/hasPinContent";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ActionBtnType, TServiceType } from "@/types";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";
import BranServiceCard from "@/components/service/branding/BranServiceCard";
import Link from "next/link";
import MainSectionTitle from "@/components/sectionTitle/MainSectionTitle";

type Props = {
  title: string;
  info: string;
  action_btn: ActionBtnType;
  services: TServiceType[];
};

const BrandingService = ({ title, info, action_btn, services }: Props) => {
  const pinContent = useRef<HTMLDivElement>(null!);
  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasPinContent(pinContent.current);
      hasFadeAnim();
    },
    { scope: containerRef }
  );
  return (
    <section id="feature"
      ref={pinContent}
      className="scroll-mt-24 main-section-style bg-background-fixed"
    >
      <div ref={containerRef} className="container">
        <div className="main-section-spacing">
          <div className="text-center">
            {/* dipto behind title */}
            <div className="hidden md:block absolute left-6 top-6 z-0">
              <div className="w-[220px] h-12 bg-emerald-50 rounded-l-full" aria-hidden />
            </div>

            <MainSectionTitle
              title={title}
              className="relative z-10 max-w-[845px] text-text-fixed-2"
            />

            <p className="max-w-3xl mx-auto mt-3 text-sm text-text-fixed-2">
              {info}
            </p>
          </div>

          <div className="mt-[30px] xl:mt-[50px]">
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((item, index) => (
                <BranServiceCard key={index} {...item} highlight={index === 0} />
              ))}
            </div>
          </div>
          <div
            className="has_fade_anim text-center mt-[50px] xl:mt-[70px] "
            data-fade-from="left"
          >
            <p className="bg-[#1C1C1C] max-w-[500px] leading-[1.41] text-[18px] inline-block text-center rounded-[100px] py-[19px] px-[41px] text-text-fixed-2">
              {info}
              <br />
              {action_btn?.enable && (
                <Link
                  href={action_btn.link}
                  className="wc-btn-underline font-normal tracking-normal relative inline-flex items-center gap-[10px] whitespace-nowrap"
                >
                  {action_btn.label}
                </Link>
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandingService;
