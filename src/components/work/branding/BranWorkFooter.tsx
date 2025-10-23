import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasTextMovAnim from "@/lib/animation/hasTextMovAnim";
import ButtonSwap from "@/components/elements/button/ButtonSwap";
import { ActionBtnType } from "@/types";

type Props = {
  action_btn: ActionBtnType;
};

const BranWorkFooter = ({ action_btn }: Props) => {
  const containerRef = useRef<HTMLParagraphElement>(null!);

  useGSAP(
    () => {
      hasTextMovAnim();
    },
    { scope: containerRef }
  );

  return (
    <div
      className="grid lg:grid-cols-2 gap-x-[30px] justify-end pt-[60px] xl:pt-[120px] 2xl:pt-[150px]"
      ref={containerRef}
    >
      <div></div>
      <div>
        {/* description is rendered in parent (BrandingScreenShot) */}
        {action_btn?.enable && (
          <div
            className="mt-[33px] xl:mt-[43px] has_fade_anim"
            data-fade-from="left"
          >
            <ButtonSwap buttonText={action_btn.label} link={action_btn.link} />
          </div>
        )}
      </div>
    </div>
  );
};

export default BranWorkFooter;
