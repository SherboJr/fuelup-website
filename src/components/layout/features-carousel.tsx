"use client"

import React, { useEffect, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import AutoScroll from "embla-carousel-auto-scroll"
import { ChevronLeft, ChevronRight, Package, Zap, Lock } from "lucide-react"
import { Card } from "@/components/ui/card"
import { useLocale, useTranslations } from "next-intl"

export function FeaturesCarousel() {
  const locale = useLocale()
  const t = useTranslations("featuresCarousel")
  const isRTL = locale === "ar"

  const features = [
    { id: 1, icon: <Package className="w-7 h-7" />, iconBg: "bg-orange-100 text-orange-500", titleKey: "item1.title", descKey: "item1.description" },
    { id: 2, icon: <Zap className="w-7 h-7" />, iconBg: "bg-green-100 text-green-500", titleKey: "item2.title", descKey: "item2.description" },
    { id: 3, icon: <Lock className="w-7 h-7" />, iconBg: "bg-yellow-100 text-yellow-500", titleKey: "item3.title", descKey: "item3.description" },
    { id: 4, icon: <Package className="w-7 h-7" />, iconBg: "bg-blue-100 text-blue-500", titleKey: "item4.title", descKey: "item4.description" },
  ]

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: false,
      slidesToScroll: 1,
      direction: isRTL ? "rtl" : "ltr",
    },
    [
      AutoScroll({
        speed: 1,
        startDelay: 2000,
        stopOnInteraction: false,
        playOnInit: true,
      }),
    ]
  )

  useEffect(() => {
    emblaApi?.reInit()
  }, [emblaApi, isRTL])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <section id="main-features" className="w-full py-12 md:py-24 bg-gradient-to-b from-[#F9FCFB] to-[#F1FDEA]">
      <div className="container mx-auto px-4 md:px-6" dir={isRTL ? "rtl" : "ltr"}>
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">{t("heading")}</h2>
          <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>

        <div className="relative">
          {/* Embla Carousel */}
          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4 md:gap-6 pl-4 pr-4 md:pl-5 md:pr-5">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="
                    embla__slide
                    flex-[0_0_100%]        /* mobile */
                    sm:flex-[0_0_50%]      /* small screens >= 640px */
                    md:flex-[0_0_33.333%]  /* medium screens >= 768px */
                  "
                >
                  <Card className="h-full p-6 md:p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border-0 bg-white flex flex-col group hover:bg-gradient-to-br hover:from-white hover:to-green-50/30">
                    <div className={`${feature.iconBg} w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center mb-4 md:mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 transition-all duration-300">{t(feature.titleKey)}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 md:mb-6 flex-1 transition-all duration-300 group-hover:text-gray-700">{t(feature.descKey)}</p>
                    <a
                      href="#"
                      className="inline-flex items-center font-semibold text-sm md:text-base transition-all duration-300 group-hover:translate-x-1 w-fit overflow-hidden"
                      style={{
                        color:
                          feature.iconBg.includes("orange") ? "#ec8c5e" :
                          feature.iconBg.includes("green") ? "#22c55e" :
                          feature.iconBg.includes("yellow") ? "#eab308" :
                          "#3b82f6",
                      }}
                    >
                      {/* <span className="transition-all duration-300">{t("learnMore")}</span>
                      <span className="ml-2 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110 transform">→</span> */}
                    </a>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-6">
            <button onClick={scrollPrev} className={`p-2.5 md:p-3 rounded-full border border-gray-300 bg-white/70 backdrop-blur-md shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 ${isRTL ? "rotate-180" : ""}`}>
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-green-600 transition-colors duration-300" />
            </button>
            <button onClick={scrollNext} className={`p-2.5 md:p-3 rounded-full border border-gray-300 bg-white/70 backdrop-blur-md shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 ${isRTL ? "rotate-180" : ""}`}>
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-green-600 transition-colors duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}