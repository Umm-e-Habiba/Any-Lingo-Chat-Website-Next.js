import { getMainPage, getAllPages } from "@/lib/helper/contentConverter";

import BrandingHero from "@/components/hero/BrandingHero";
import BrandingScreenShot from "@/components/work/branding/BrandingScreenShot";
import BrandingFunFact from "@/components/funFact/branding/BrandingFunFact";
import BrandingProcess from "@/components/process/branding/BrandingProcess";
import BrandingIntro from "@/components/process/branding/BrandingIntro";
import BrandingImage from "@/components/image/BrandingImage";

import Cta1 from "@/components/cta/Cta1";
import SeoData from "@/components/tools/SeoData";
import RefreshGsap from "@/components/tools/RefreshGsap";

const Branding = () => {
  const { data: hero } = getMainPage("/heros/branding-hero.mdx");
  const works = getAllPages("/works/branding");
  const { data: work } = getMainPage("/works/branding/_main.mdx");
  const { data: funFact } = getMainPage("/funFact/branding-fun-fact.mdx");
  const { data: service } = getMainPage("services/branding/_main.mdx");
  const services = getAllPages("services/branding");
  const { data: process } = getMainPage("/process/branding-process.mdx");
  const { data: image } = getMainPage("/image/branding-image.mdx");
  const { data: testimonial } = getMainPage(
    "/testimonial/branding-testimonial.mdx"
  );
  const { data: brands } = getMainPage("/brands/brands1.mdx");
  const { data: team } = getMainPage("/team/branding/_main.mdx");
  const teamMembers = getAllPages("/team/main");
  const { data: blogSection } = getMainPage("/blogs/branding/_main.mdx");
  const blogs = getAllPages("/blogs/branding");
  const { data: cta } = getMainPage("/ctas/cta1.mdx");

  return (
    <main>
      <SeoData
        title="Any Lingo - Chat"
        description="Any Lingo: Chat and Translate Effortlessly"
      />
      <RefreshGsap />
      <BrandingHero {...hero} />
  <BrandingIntro {...process} />
      <BrandingFunFact {...funFact} />
      <BrandingScreenShot
        title="App Screenshots"
        description="Any Lingo — Chat and translate with real-time,
                      bi-directional messaging in any language. Stay
                      connected worldwide with instant translations,
                      secure chats, and voice cloning."
        action_btn={{ label: "Download Now", link: "/download" }}
        works={[
          
          { id: 6, image: "/assets/imgs/brand/screenshots/img1.PNG" },
          { id: 7, image: "/assets/imgs/brand/screenshots/img5.PNG" },
          { id: 8, image: "/assets/imgs/brand/screenshots/img3.PNG" },
          { id: 9, image: "/assets/imgs/brand/screenshots/img2.PNG" },
          { id: 1, image: "/assets/imgs/brand/screenshots/img1.PNG" },
          { id: 2, image: "/assets/imgs/brand/screenshots/img2.PNG" },
          { id: 3, image: "/assets/imgs/brand/screenshots/img3.PNG" },
          { id: 4, image: "/assets/imgs/brand/screenshots/img4.PNG" },
          { id: 5, image: "/assets/imgs/brand/screenshots/img5.PNG" },
        ]}
      />
      
      
      <BrandingProcess {...process} />
      <BrandingImage {...image} />
      
      
      
      <Cta1 {...cta} />
    </main>
  );
};

export default Branding;
