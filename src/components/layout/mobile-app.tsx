"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import { useTranslations } from "next-intl"
// import { useLocale } from "next-intl"
import Image from "next/image"

export function MobileApp() {
  const t = useTranslations("mobileApp")
  // const locale = useLocale()
  // const isArabic = locale === "ar"

  return (
    <section className="w-full py-12 md:py-24 ">      
      {/* Background Leaf Shape */}
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="flex flex-col space-y-8 lg:space-y-10">
            {/* Main Heading */}
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1a1a1a] leading-tight lg:leading-tight text-balance">
                {t("title")}
              </h2>
              <p className="text-lg sm:text-xl text-[#4a4a4a] leading-relaxed max-w-lg lg:max-w-xl">
                {t("description")}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <Button
                onClick={() =>
                  window.open(
                    "https://play.google.com/store/apps/details?id=com.fuelup.operator.fuelup_operator",
                    "_blank"
                  )
                } 
                className="bg-[#228C22] hover:bg-[#1a6b1a] text-white rounded-lg h-12 px-6 sm:px-8 flex items-center gap-2 transition-all duration-200 shadow-md hover:shadow-lg">
                <Download size={18} />
                {t("buttonPrimary")}
              </Button>
              {/* <Button className="border border-[#4a4a4a] bg-white text-[#4a4a4a] hover:bg-gray-50 rounded-lg h-12 px-6 flex items-center gap-2">
                {t("buttonSecondary")}
                <ArrowRight size={18} />
              </Button> */}
            </div>
          </div>

          {/* Right Column - Phone Mockup */}
          <div className="flex justify-center lg:justify-end items-center relative h-full min-h-[600px] lg:min-h-[650px] py-8 lg:py-12">
            <div className="relative w-full max-w-[500px] h-[500px] lg:h-[550px] z-10">
              {/* iPhone Mockup Frame */}
              <div className="absolute bg-black rounded-[2.5rem] p-2 shadow-2xl z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px]">
                {/* iPhone Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20"></div>

                {/* Phone Screen */}
                <div className="bg-white rounded-[2.25rem] w-full h-[560px] overflow-hidden relative">
                  <div className="w-full h-full relative">
                    <Image
                      src="test.webp"
                      alt="App Screenshot"
                      fill
                      className="object-cover"
                      priority
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