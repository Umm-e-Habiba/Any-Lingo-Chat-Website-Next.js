// src/components/menu/Menu.tsx
"use client";

import * as React from "react";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import navigation from "@/config/navigation.json";
import Link from "next/link";
import clsx from "clsx";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useDirection } from "@/context/app.context";
import LeftSubmenu from "../elements/leftSubmenu/LeftSubmenu";

// 1) Strong type for nav items
type NavItem = {
  id: number;
  name: string;
  path: string;
  hasChildren?: boolean;
  children?: NavItem[];
};

// 2) Tell TS what your JSON is
const menuData = navigation.header as NavItem[];

type Props = { textColor?: string; className?: string };

const Menu = ({ textColor, className }: Props) => {
  const [hoveredChildMenuId, setHoveredChildMenuId] = useState<number | null>(null);
  const { direction } = useDirection();
  let timeoutId: ReturnType<typeof setTimeout>;

  const handleMouseEnter = (id: number) => {
    clearTimeout(timeoutId);
    setHoveredChildMenuId(id);
  };
  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => setHoveredChildMenuId(null), 200);
  };

  return (
    <NavigationMenu dir={direction as "rtl" | "ltr"}>
      <NavigationMenuList>
        {menuData.map((menu: NavItem) => {
          // 3) Derive whether this item actually has children
          const hasChildren = !!menu.children?.length;

          return (
            <NavigationMenuItem key={menu.id} className={cn(className)}>
              {hasChildren ? (
                <>
                  <NavigationMenuTrigger
                    className={cn(
                      "bg-inherit submenu-trigger text-[16px] leading-[1] px-[15px] py-[37px] h-full uppercase font-normal",
                      textColor
                    )}
                  >
                    {menu.name}
                  </NavigationMenuTrigger>

                  <NavigationMenuContent className="border-0 bg-[#232529] transition-none">
                    <NavigationMenuList
                      className={clsx(
                        "py-[18px] px-0 w-[240px] gap-4 grid grid-cols-1",
                        menu.id === 1 && "w-[500px] grid grid-cols-2"
                      )}
                    >
                      {menu.children?.map((childMenu: NavItem, j: number) => (
                        <NavigationMenuItem
                          key={childMenu.id}
                          className="px-[25px] relative ease-in transition-all duration-300 transform hover:scale-105"
                          onMouseEnter={() => handleMouseEnter(childMenu.id)}
                          onMouseLeave={handleMouseLeave}
                        >
                          <NavigationMenuLink asChild className="px-0 relative">
                            <>
                              <Link
                                className="text-text-fixed-3 px-0 flex justify-between hover:text-text-fixed-2"
                                href={childMenu.path}
                              >
                                {childMenu.name}
                                {!!childMenu.children?.length && (
                                  <>
                                    {direction === "rtl" ? (
                                      <ChevronLeft className="text-text-fixed-3 hover:text-text-fixed-2" />
                                    ) : (
                                      <ChevronRight className="text-text-fixed-3 hover:text-text-fixed-2" />
                                    )}
                                  </>
                                )}
                              </Link>

                              {!!childMenu.children?.length &&
                                hoveredChildMenuId === childMenu.id && (
                                  <LeftSubmenu submenuData={childMenu} />
                                )}
                            </>
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      ))}
                    </NavigationMenuList>
                  </NavigationMenuContent>
                </>
              ) : (
                <NavigationMenuLink
                  asChild
                  className={cn(
                    "text-[16px] leading-[1] px-[15px] py-[37px] h-full uppercase",
                    textColor
                  )}
                >
                  <Link href={menu.path}>{menu.name}</Link>
                </NavigationMenuLink>
              )}
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Menu;
