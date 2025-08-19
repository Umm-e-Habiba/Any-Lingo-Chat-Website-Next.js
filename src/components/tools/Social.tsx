import Link from "next/link";

// icons
import {
  FaDribbble,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

// lib
import { cn } from "@/lib/utils";

type SocialType = {
  name: string;
  link: string;
  value?: string;
};

export const SocialShare1 = (item: SocialType, className?: string) => {
  switch (item.name) {
    case "Fb":
      return (
        <Link
          href="https://www.facebook.com/profile.php?id=61571824100566"
          target="_blank"
          key={item.link}
          className={cn("relative z-10", className)}
        >
          <FaFacebookF />
        </Link>
      );
    case "Tw":
      return (
        <Link
          href="https://www.youtube.com/@AnyLingo"
          target="_blank"
          key={item.link}
          className={cn("relative z-10", className)}
        >
          <FaYoutube />
        </Link>
      );
    case "In":
      return (
        <Link
          href="https://www.instagram.com/anylingoapp?igsh=MXBtNnRpeWk0aDMxaA=="
          target="_blank"
          key={item.link}
          className={cn("relative z-10", className)}
        >
          <FaInstagram />
        </Link>
      );
    case "Db":
      return (
        <Link
          href="https://www.linkedin.com/company/anylingo/"
          target="_blank"
          key={item.link}
          className={cn("relative z-10", className)}
        >
          <FaLinkedin />
        </Link>
      );
    
  }
};
