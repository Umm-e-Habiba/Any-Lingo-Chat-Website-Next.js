import Logo from "@/components/elements/logo/Logo";
import siteConfig from "@/config/siteConfig.json";
import Link from "next/link";

const Footer7 = () => {
  const { site_info, footer_info } = siteConfig;

  return (
    <footer 
      className="relative w-full z-10 overflow-hidden" 
      style={{ 
        background: "linear-gradient(to bottom, rgba(235, 255, 236, 0.2)  ,rgba(255, 255, 255, 1) 15% )" 
      }}
    >
      <div className="container overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-8 lg:gap-x-12 xl:gap-x-16 gap-y-10 py-16 lg:py-20 pl-[50px] pr-[50px]">
          
          {/* Column 1: Logo + Contact */}
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <Logo
                light={false}
                url={site_info?.logo_light_2}
                customWidth={40}
                customHeight={40}
                className="!h-[40px] !w-auto"
              />
              <p 
                className=" "
                style={{
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: 900,
                    fontStyle: 'normal',
                    fontSize: '16px',
                    lineHeight: '100%',
                    letterSpacing: '0',
                    color: '#3A9343'
                  }}
              >
                AnyLingo
              </p>
            </div>
            
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 flex-shrink-0 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span 
                  className="text-black text-[15px] font-normal"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  {"Help@Frybix.Com"}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 flex-shrink-0 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span 
                  className="text-black  font-normal"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  {"+1 234 456 678 89"}
                </span>
              </li>
            </ul>
          </div>

          {/* Column 2: Our */}
          <div className="col-span-1">
            <h3 
              className="text-black text-[22px] font-normal mb-6"
              style={{ 
                fontFamily: "'ADLaM Display', sans-serif",
                lineHeight: "1.3"
              }}
            >
              Our
            </h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="#" 
                  className="text-black/80 hover:text-black transition-colors text-[15px] font-normal block"
                  style={{ 
                    fontFamily: "'Lato', sans-serif",
                    lineHeight: "1.6"
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="text-black/80 hover:text-black transition-colors text-[15px] font-normal block"
                  style={{ 
                    fontFamily: "'Lato', sans-serif",
                    lineHeight: "1.6"
                  }}
                >
                  Instant Message
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="text-black/80 hover:text-black transition-colors text-[15px] font-normal block"
                  style={{ 
                    fontFamily: "'Lato', sans-serif",
                    lineHeight: "1.6"
                  }}
                >
                  Translation
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="text-black/80 hover:text-black transition-colors text-[15px] font-normal block"
                  style={{ 
                    fontFamily: "'Lato', sans-serif",
                    lineHeight: "1.6"
                  }}
                >
                  Conversations
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="text-black/80 hover:text-black transition-colors text-[15px] font-normal block"
                  style={{ 
                    fontFamily: "'Lato', sans-serif",
                    lineHeight: "1.6"
                  }}
                >
                  User-Friendly Interface
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div className="col-span-1">
            <h3 
              className="text-black text-[22px] font-normal mb-6"
              style={{ 
                fontFamily: "'ADLaM Display', sans-serif",
                lineHeight: "1.3"
              }}
            >
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="#" 
                  className="text-black/80 hover:text-black transition-colors text-[15px] font-normal block"
                  style={{ 
                    fontFamily: "'Lato', sans-serif",
                    lineHeight: "1.6"
                  }}
                >
                  Terms Of Use
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="text-black/80 hover:text-black transition-colors text-[15px] font-normal block"
                  style={{ 
                    fontFamily: "'Lato', sans-serif",
                    lineHeight: "1.6"
                  }}
                >
                  Privacy Police
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="text-black/80 hover:text-black transition-colors text-[15px] font-normal block"
                  style={{ 
                    fontFamily: "'Lato', sans-serif",
                    lineHeight: "1.6"
                  }}
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Features */}
          <div className="col-span-1">
            <h3 
              className="text-black text-[22px] font-normal mb-6"
              style={{ 
                fontFamily: "'ADLaM Display', sans-serif",
                lineHeight: "1.3"
              }}
            >
              Features
            </h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="#" 
                  className="text-black/80 hover:text-black transition-colors text-[15px] font-normal block"
                  style={{ 
                    fontFamily: "'Lato', sans-serif",
                    lineHeight: "1.6"
                  }}
                >
                  Voice Cloning
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="text-black/80 hover:text-black transition-colors text-[15px] font-normal block"
                  style={{ 
                    fontFamily: "'Lato', sans-serif",
                    lineHeight: "1.6"
                  }}
                >
                  Secure Messaging
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="text-black/80 hover:text-black transition-colors text-[15px] font-normal block"
                  style={{ 
                    fontFamily: "'Lato', sans-serif",
                    lineHeight: "1.6"
                  }}
                >
                  Audio Sharing
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="text-black/80 hover:text-black transition-colors text-[15px] font-normal block"
                  style={{ 
                    fontFamily: "'Lato', sans-serif",
                    lineHeight: "1.6"
                  }}
                >
                  Bi-Directional
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="text-black/80 hover:text-black transition-colors text-[15px] font-normal block"
                  style={{ 
                    fontFamily: "'Lato', sans-serif",
                    lineHeight: "1.6"
                  }}
                >
                  Communication
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Newsletter */}
          <div className="col-span-1">
            <h3 
              className="text-black text-[22px] font-normal mb-6"
              style={{ 
                fontFamily: "'ADLaM Display', sans-serif",
                lineHeight: "1.3"
              }}
            >
              Newsletter
            </h3>
            <p 
              className="text-black/80 mb-6 text-[15px] font-normal"
              style={{ 
                fontFamily: "'Lato', sans-serif",
                lineHeight: "1.6"
              }}
            >
              Stay Up To Date
            </p>

            <form className="relative flex items-center bg-white rounded-full shadow-md p-1 w-full">
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 px-4 py-2.5 border-0 focus:outline-none text-gray-700 text-[13px] bg-transparent placeholder:text-gray-400 min-w-0"
                style={{ fontFamily: "'Lato', sans-serif" }}
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-[#2f8e3a] text-white font-semibold rounded-full hover:bg-[#267a2e] transition-colors text-[13px] whitespace-nowrap flex-shrink-0"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-black/10">
        <div className="container mx-auto px-6 lg:px-12 xl:px-16">
          <div className="py-6">
            <p 
              className="text-center text-black/80 text-[15px] font-normal"
              style={{ 
                fontFamily: "'Lato', sans-serif",
                lineHeight: "1.6"
              }}
            >
              Copyright 2025 AnyLingo Inc. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer7;

