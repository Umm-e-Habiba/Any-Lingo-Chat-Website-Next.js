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
            <div>
              <Logo light={!onlyDark && isLight} />
            </div>
            <div className="pos-center hidden xl:block">
              <Menu
                textColor={cn("text-text", onlyDark && "text-text-fixed")}
              />
            </div>
            <div className="flex items-center gap-6">
              <a href="/login" className="hidden md:block text-white/80 hover:text-white font-medium text-base transition-colors">
                Login
              </a>
              <a href="/signup" className="hidden md:block px-8 py-3 bg-[#FF724B] hover:bg-[#ff5c2f] text-white font-medium text-base rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                Sign Up
              </a>
              <SideNavModal />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default BrandingHeader;
