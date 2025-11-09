"use client";

import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { FaBars } from "react-icons/fa6";
import navigation from "@/config/navigation.json";
import siteConfig from "@/config/siteConfig.json";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SocialShare1 } from "../tools/Social";

// ✅ 1) Strong type for menu items (children optional)
type NavItem = {
  id: number;
  name: string;
  path: string;
  children?: NavItem[];
};

const SideNavModal = () => {
  // ✅ 2) Tell TS what the data is
  const SideMenuData = navigation.header as NavItem[];
  const { footer_info, social } = siteConfig;

  return (
    <>
      <Drawer direction="left">
        <DrawerTrigger asChild>
          <button className="xl:hidden text-white hover:text-[#2f8e3a] transition-colors">
            <FaBars size={24} />
          </button>
        </DrawerTrigger>

        <DrawerContent className="h-full border-none w-[85vw] max-w-[400px]">
          <DrawerTitle className="hidden">Side Navigation</DrawerTitle>
          <DrawerDescription className="hidden">
            Navigate through the site menu
          </DrawerDescription>

          <div className="bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] w-full h-full flex flex-col">
            {/* Header with Close Button */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-800">
              <h2 
                className="text-2xl font-bold text-white"
                style={{ fontFamily: "'ADLaM Display', sans-serif" }}
              >
                Menu
              </h2>
              <DrawerClose asChild>
                <button className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#2f8e3a] flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </DrawerClose>
            </div>

            {/* Navigation Menu */}
            <ScrollArea className="flex-1 px-6 py-6">
              <nav className="space-y-2">
                {SideMenuData.map((menuItem: NavItem, i: number) =>
                  menuItem.children?.length ? (
                    <Accordion type="single" collapsible key={menuItem.id} className="border-0">
                      <AccordionItem value={`item-${menuItem.name}`} className="border-0">
                        <AccordionTrigger 
                          className="text-lg font-semibold text-white hover:text-[#2f8e3a] py-3 px-4 hover:bg-gray-800/50 rounded-lg transition-all"
                          style={{ fontFamily: "'Lato', sans-serif" }}
                        >
                          {menuItem.name}
                        </AccordionTrigger>
                        <AccordionContent className="pl-4 mt-2 space-y-1">
                          {menuItem.children?.map((submenu: NavItem) =>
                            submenu.children?.length ? (
                              <Accordion type="single" collapsible key={submenu.id} className="border-0">
                                <AccordionItem value={`submenu-${submenu.id}`} className="border-0">
                                  <AccordionTrigger 
                                    className="text-base font-medium text-gray-300 hover:text-[#2f8e3a] py-2 px-3 hover:bg-gray-800/30 rounded-md transition-all"
                                    style={{ fontFamily: "'Lato', sans-serif" }}
                                  >
                                    {submenu.name}
                                  </AccordionTrigger>
                                  <AccordionContent className="pl-4 mt-1 space-y-1">
                                    {submenu.children?.map((submenuChild: NavItem) => (
                                      <DrawerClose asChild key={submenuChild.id}>
                                        <Link
                                          href={submenuChild.path}
                                          className="block text-sm text-gray-400 hover:text-white hover:bg-gray-800/30 py-2 px-3 rounded-md transition-all"
                                          style={{ fontFamily: "'Lato', sans-serif" }}
                                        >
                                          {submenuChild.name}
                                        </Link>
                                      </DrawerClose>
                                    ))}
                                  </AccordionContent>
                                </AccordionItem>
                              </Accordion>
                            ) : (
                              <DrawerClose asChild key={submenu.id}>
                                <Link
                                  href={submenu.path}
                                  className="block text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800/30 py-2 px-3 rounded-md transition-all"
                                  style={{ fontFamily: "'Lato', sans-serif" }}
                                >
                                  {submenu.name}
                                </Link>
                              </DrawerClose>
                            )
                          )}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ) : (
                    <DrawerClose asChild key={menuItem.id}>
                      <Link
                        href={menuItem.path}
                        className="block text-lg font-semibold text-white hover:text-[#2f8e3a] hover:bg-gray-800/50 py-3 px-4 rounded-lg transition-all"
                        style={{ fontFamily: "'Lato', sans-serif" }}
                      >
                        {menuItem.name}
                      </Link>
                    </DrawerClose>
                  )
                )}
              </nav>
            </ScrollArea>

            
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideNavModal;
