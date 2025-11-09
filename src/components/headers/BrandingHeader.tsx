"use client";
import Logo from "@/components/elements/logo/Logo";
import SideNavModal from "@/components/sideNavModal/SideNavModal";
import Menu from "../menu/Menu";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type Props = {
  maxWidth?: string;
  onlyDark?: boolean;
};

const BrandingHeader = ({ maxWidth, onlyDark = false }: Props) => {
  const { theme } = useTheme();
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      setIsLight(true);
    } else {
      setIsLight(false);
    }
  }, [theme]);

  return (
    <>
      <header className="absolute top-0 inset-x-0 z-50">
        <div className={cn("container", maxWidth)}>
          <div className="flex h-[80px] 2xl:h-[100px] items-center gap-[20px] relative justify-between">
            <div className="pl-[5px] sm:pl-[10px] md:pl-[20px] lg:pl-[40px]">
              <Logo light={!onlyDark && isLight} />
            </div>
            <div className="pos-center hidden xl:block">
              <Menu
                textColor={cn("text-white font-bold", onlyDark && "text-white font-bold")}
              />
            </div>
            <div className="flex items-center gap-6">
              
              <SideNavModal />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default BrandingHeader;
