"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"
import { useTranslations } from "next-intl"
import Image from "next/image"

export function Hero() {
  const t = useTranslations("hero")

  return (
    <section id="home" className="bg-[#F1FDEA] relative min-h-screen flex items-center overflow-hidden -mt-16 pt-16 md:pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center pt-6 md:pt-8">
          {/* Left Column - Content */}
          <div className="flex flex-col space-y-8 md:space-y-10 lg:space-y-10 order-2 lg:order-1">
            {/* Main Heading */}
            <div className="space-y-6 md:space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0f172a] leading-[1.1] tracking-tight">
                <span className="block">
                  {t("title")}
                </span>
              </h1>

              <p className="text-lg md:text-xl text-[#334155] leading-relaxed max-w-lg lg:max-w-xl font-medium">
                {t("description")}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-5">
              <Button className="bg-[#228C22] hover:bg-[#1a6b1a] text-white rounded-xl md:rounded-lg h-12 md:h-12 px-6 sm:px-8 flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]">
                <MessageCircle size={20} />
                <span className="font-medium tracking-wide">{t("buttonPrimary")}</span>
              </Button>
              <Button
                className="border border-[#4a4a4a]/30 bg-white text-[#4a4a4a] hover:bg-gray-50/80 rounded-xl md:rounded-lg h-12 md:h-12 px-6 flex items-center justify-center gap-2 transition-all duration-300 hover:border-[#4a4a4a]/50 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="font-medium tracking-wide">{t("buttonSecondary")}</span>
                <ArrowRight size={20} />
              </Button>
            </div>
          </div>

          {/* Right Column - Phone Mockup */}
          <div className="flex justify-center lg:justify-end items-center relative h-full min-h-[500px] md:min-h-[600px] lg:min-h-[650px] py-6 md:py-8 lg:py-12 order-1 lg:order-2">
            <div className="relative w-full max-w-[320px] md:max-w-[400px] lg:max-w-[500px] h-[400px] md:h-[500px] lg:h-[550px] z-10">
              {/* Decorative Circles - Behind Phone */}
              
              {/* Large Peach solid circle - background for phone */}
              <div
                className="absolute rounded-full bg-gradient-to-br from-[#FFEDE8] to-[#FFF7F5] z-0 w-[280px] h-[280px] md:w-[350px] md:h-[350px] lg:w-[451.54px] lg:h-[451.54px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_25px_50px_rgba(255,237,232,0.4)] md:shadow-[0_25px_50px_rgba(255,237,232,0.3)]"
              ></div>

              {/* Green donut circle - top right */}
              <div
                className="absolute rounded-full z-0 w-[100px] h-[100px] md:w-[140px] md:h-[140px] lg:w-[164.88px] lg:h-[164.88px] top-[5%] md:top-[10%] lg:top-[44.66px] right-[10%] md:right-[5%] lg:left-[340.88px] bg-gradient-to-br from-[#64E718] to-[#7CFC00] shadow-[0_15px_30px_rgba(100,231,24,0.2)] md:shadow-[0_20px_40px_rgba(100,231,24,0.25)]"
              >
                <div
                  className="absolute inset-0 m-auto rounded-full bg-[#F1FDEA] w-[55px] h-[55px] md:w-[80px] md:h-[80px] lg:w-[93.88px] lg:h-[93.88px]"
                ></div>
              </div>

              {/* Orange donut circle - bottom left */}
              <div
                className="absolute rounded-full z-0 w-[60px] h-[60px] md:w-[80px] md:h-[80px] lg:w-[96.75px] lg:h-[96.75px] bottom-[20%] md:bottom-[15%] lg:top-[298.13px] left-[8%] md:left-[5%] lg:left-[27.7px] bg-gradient-to-br from-[#FF825D] to-[#FFA07A] shadow-[0_12px_25px_rgba(255,130,93,0.2)] md:shadow-[0_15px_30px_rgba(255,130,93,0.25)]"
              >
                <div
                  className="absolute inset-0 m-auto rounded-full bg-[#F1FDEA] w-[15px] h-[15px] md:w-[20px] md:h-[20px] lg:w-[25.75px] lg:h-[25.75px]"
                ></div>
              </div>

              {/* iPhone Mockup Frame */}
              <div 
                className="absolute bg-gradient-to-b from-black to-gray-900 rounded-[2.2rem] md:rounded-[2.5rem] p-1.5 md:p-2 shadow-2xl z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] md:w-[280px] lg:w-[280px] ring-2 ring-gray-800/50"
              >
                {/* iPhone Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 md:w-32 h-5 md:h-6 bg-black rounded-b-xl md:rounded-b-2xl z-20"></div>
                
                {/* Phone Screen */}
                <div className="bg-white rounded-[1.9rem] md:rounded-[2.25rem] w-full h-[480px] md:h-[560px] overflow-hidden relative">
                  {/* Screen Content */}
                  <div className="w-full h-full relative">
                    <Image
                      src="One -1.webp"
                      alt="App Screenshot"
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 240px, 280px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}