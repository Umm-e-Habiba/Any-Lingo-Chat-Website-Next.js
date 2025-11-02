import React from "react";
import BrandingHeader from "@/components/headers/BrandingHeader";
import Footer7 from "@/components/footer/Footer7";
import navigation from "@/config/navigation.json";
import ScrollSmootherComponent from "@/components/tools/ScrollSmoother";

//import ToolsComponent from "@/components/tools";
import ScrollTop from "@/components/tools/ScrollTop";
import "./styling.css";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="instrument">
      <ScrollSmootherComponent />
      
      <ScrollTop />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <BrandingHeader onlyDark />
          <div>{children}</div>
          <Footer7 />
        </div>
      </div>
    </div>
  );
};

export default Layout;
