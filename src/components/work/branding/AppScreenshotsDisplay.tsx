"use client";

import { useState } from "react";
import Image from "next/image";

const AppScreenshotsDisplay = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // 6 images available
  const screenshots = [
    "/assets/imgs/brand/screenshots/img1.PNG",
    "/assets/imgs/brand/screenshots/img2.PNG",
    "/assets/imgs/brand/screenshots/img3.PNG",
    "/assets/imgs/brand/screenshots/img4.PNG",
    "/assets/imgs/brand/screenshots/img5.PNG",
    "/assets/imgs/brand/screenshots/img6.PNG",
  ];

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? screenshots.length - 3 : prev - 1));
    setTimeout(() => setIsAnimating(false), 600);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev >= screenshots.length - 3 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 600);
  };

  // Get 3 consecutive images to display
  const displayedImages = [
    screenshots[currentIndex],
    screenshots[(currentIndex + 1) % screenshots.length],
    screenshots[(currentIndex + 2) % screenshots.length],
  ];

  return (
    <section 
      id="screenshot"
      className="relative py-20 overflow-hidden mb-[30px]"
      style={{ backgroundColor: "#e0ffe9" }}
    >
      <div className="container mx-auto px-12 mb-[50px]">
        {/* Title */}
        <h2
          className="text-center font-bold mb-12"
          style={{
            fontFamily: "'ADLaM Display', sans-serif",
            fontWeight: 400,
            fontStyle: 'bold',
            fontSize: '50px',
            lineHeight: '38.4px',
            letterSpacing: '0',
            color: "#114D22",
            verticalAlign: 'middle',
          }}
        >
          App Screenshots
        </h2>
        

        {/* Description */}
        <p
          className="text-center max-w-4xl mx-auto mb-16"
          style={{
            fontFamily: "'Lato', sans-serif",
            fontWeight: 600,
            fontStyle: 'normal',
            fontSize: '20px',
            lineHeight: '24px',
            letterSpacing: '0',
            textAlign: 'center',
            
          }}
        >
          From Instant Translations To Smooth Conversations, Our App Screenshots
          Showcase The Powerful Features That Keep You Connected Across
          Languages.
        </p>

        {/* Phone Display Section */}
        <div className="relative max-w-7xl mx-auto">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 
                       w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 
                       bg-white rounded-full shadow-xl 
                       flex items-center justify-center 
                       hover:scale-110 transition-transform duration-300
                       -ml-4 sm:-ml-8"
            aria-label="Previous screenshots"
          >
            <svg
              className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 
                       w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 
                       bg-[#10b981] rounded-full shadow-xl 
                       flex items-center justify-center 
                       hover:scale-110 transition-transform duration-300
                       -mr-4 sm:-mr-8"
            aria-label="Next screenshots"
          >
            <svg
              className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* 3 Phones Display */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 lg:gap-10 px-8 sm:px-12 lg:px-20 py-8">
            {/* Left Phone - Smaller */}
            <div
              className="relative flex-shrink-0 transition-all duration-700 ease-in-out"
              style={{
                width: "clamp(180px, 20vw, 280px)",
                height: "clamp(360px, 40vw, 560px)",
                opacity: isAnimating ? 0.5 : 1,
                transform: isAnimating ? "translateX(-20px)" : "translateX(0)",
              }}
            >
              {/* iPhone Frame */}
              <div className="absolute inset-0 bg-black rounded-[40px] shadow-2xl p-2.5">
                {/* Screen */}
                <div className="relative w-full h-full bg-white rounded-[35px] overflow-hidden">
                  <Image
                    src={displayedImages[0]}
                    alt="App screenshot left"
                    fill
                    className="object-cover transition-opacity duration-700"
                    priority
                    key={`left-${currentIndex}`}
                  />
                </div>
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[22px] bg-black rounded-b-[18px] z-10"></div>
                {/* Side Buttons */}
                <div className="absolute -left-[2px] top-[90px] w-[3px] h-[40px] bg-gray-900 rounded-r-sm"></div>
                <div className="absolute -left-[2px] top-[140px] w-[3px] h-[50px] bg-gray-900 rounded-r-sm"></div>
                <div className="absolute -right-[2px] top-[110px] w-[3px] h-[70px] bg-gray-900 rounded-l-sm"></div>
              </div>
            </div>

            {/* Center Phone - Larger/Focused */}
            <div
              className="relative flex-shrink-0 transition-all duration-700 ease-in-out z-10"
              style={{
                width: "clamp(220px, 25vw, 340px)",
                height: "clamp(440px, 50vw, 680px)",
                opacity: isAnimating ? 0.4 : 1,
                transform: isAnimating ? "scale(0.95)" : "scale(1)",
              }}
            >
              {/* iPhone Frame */}
              <div className="absolute inset-0 bg-black rounded-[45px] shadow-2xl p-3">
                {/* Screen */}
                <div className="relative w-full h-full bg-white rounded-[38px] overflow-hidden">
                  <Image
                    src={displayedImages[1]}
                    alt="App screenshot center"
                    fill
                    className="object-cover transition-opacity duration-700"
                    priority
                    key={`center-${currentIndex}`}
                  />
                </div>
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[26px] bg-black rounded-b-[20px] z-10"></div>
                {/* Side Buttons */}
                <div className="absolute -left-[2px] top-[100px] w-[3px] h-[50px] bg-gray-900 rounded-r-sm"></div>
                <div className="absolute -left-[2px] top-[160px] w-[3px] h-[60px] bg-gray-900 rounded-r-sm"></div>
                <div className="absolute -right-[2px] top-[120px] w-[3px] h-[80px] bg-gray-900 rounded-l-sm"></div>
              </div>
            </div>

            {/* Right Phone - Smaller */}
            <div
              className="relative flex-shrink-0 transition-all duration-700 ease-in-out"
              style={{
                width: "clamp(180px, 20vw, 280px)",
                height: "clamp(360px, 40vw, 560px)",
                opacity: isAnimating ? 0.5 : 1,
                transform: isAnimating ? "translateX(20px)" : "translateX(0)",
              }}
            >
              {/* iPhone Frame */}
              <div className="absolute inset-0 bg-black rounded-[40px] shadow-2xl p-2.5">
                {/* Screen */}
                <div className="relative w-full h-full bg-white rounded-[35px] overflow-hidden">
                  <Image
                    src={displayedImages[2]}
                    alt="App screenshot right"
                    fill
                    className="object-cover transition-opacity duration-700"
                    priority
                    key={`right-${currentIndex}`}
                  />
                </div>
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[22px] bg-black rounded-b-[18px] z-10"></div>
                {/* Side Buttons */}
                <div className="absolute -left-[2px] top-[90px] w-[3px] h-[40px] bg-gray-900 rounded-r-sm"></div>
                <div className="absolute -left-[2px] top-[140px] w-[3px] h-[50px] bg-gray-900 rounded-r-sm"></div>
                <div className="absolute -right-[2px] top-[110px] w-[3px] h-[70px] bg-gray-900 rounded-l-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppScreenshotsDisplay;

