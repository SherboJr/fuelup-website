"use client"

import { useLocale } from "next-intl"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import { useTranslations } from "next-intl"

export function Testimonial() {
  const locale = useLocale()
  const isArabic = locale === "ar"
  const t = useTranslations("testimonial")
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: t("item1.name"),
      role: t("item1.role"),
      quote: t("item1.quote"),
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=boy2",
    },
    {
      name: t("item2.name"),
      role: t("item2.role"),
      quote: t("item2.quote"),
      image: "https://avatar.iran.liara.run/public/boy",
    },
    {
      name: t("item3.name"),
      role: t("item3.role"),
      quote: t("item3.quote"),
      image: "https://avatar.iran.liara.run/public/girl",
    },
  ]

  const current = testimonials[currentIndex]

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonial" className="relative w-full bg-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto relative min-h-[600px] flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className={isArabic ? "lg:order-2" : ""}>
            {/* 5-Star Rating */}
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            {/* Testimonial Quote */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8 line-clamp-5">
              {current.quote}
            </h2>

            {/* Profile Section */}
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
                <Image
                  src={current.image || "/placeholder.svg"}
                  alt={current.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm sm:text-base">{current.name}</p>
                <p className="text-gray-600 text-xs sm:text-sm">{current.role}</p>
              </div>
            </div>
          </div>

          {/* Right - Image Collage */}
          <div className="relative w-full max-w-xl mx-auto">
            {/* Top Row */}
            <div className="flex gap-2 sm:gap-3 mb-2 sm:mb-3 justify-center items-end">
              {/* Top Right - Taller */}
              <div className="w-[100px] h-[150px] sm:w-[120px] sm:h-[180px] md:w-[140px] md:h-[210px] lg:w-[160px] lg:h-[240px] overflow-hidden shadow-lg flex-shrink-0">
                <Image
                  src="t2.webp"
                  alt="Gas station"
                  width={160}
                  height={240}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Top Left - Aligned to bottom */}
              <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px] overflow-hidden shadow-lg flex-shrink-0">
                <Image
                  src="t1.webp"
                  alt="Man refueling car"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Bottom Row */}
            <div className="flex gap-2 sm:gap-3 justify-center">
              {/* Bottom Left */}
              <div className="w-[120px] h-[80px] sm:w-[144px] sm:h-[96px] md:w-[168px] md:h-[112px] lg:w-[192px] lg:h-[128px] overflow-hidden shadow-lg flex-shrink-0">
                <Image
                  src="t3.webp"
                  alt="Mechanic"
                  width={192}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom Middle - Taller */}
              <div className="w-[100px] h-[150px] sm:w-[120px] sm:h-[180px] md:w-[140px] md:h-[210px] lg:w-[160px] lg:h-[240px] overflow-hidden shadow-lg flex-shrink-0">
                <Image
                  src="t4.webp"
                  alt="Fuel nozzles"
                  width={160}
                  height={240}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom Right */}
              <div className="w-[120px] h-[80px] sm:w-[144px] sm:h-[96px] md:w-[168px] md:h-[112px] lg:w-[192px] lg:h-[128px] overflow-hidden shadow-lg flex-shrink-0">
                <Image
                  src="t5.webp"
                  alt="Car refueling"
                  width={192}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div
          className={`flex justify-center gap-4 mt-10 lg:mt-0 
            lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:bottom-[50px] 
            ${isArabic ? "flex-row-reverse" : ""}`}
        >
          <button
            onClick={handlePrev}
            className={`flex items-center justify-center w-12 h-12 rounded-full border-2 border-gray-300 hover:border-gray-900 text-gray-900 bg-white/80 backdrop-blur-md transition-all duration-300 hover:shadow-md ${
              isArabic ? "rotate-180" : ""
            }`}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            className={`flex items-center justify-center w-12 h-12 rounded-full border-2 border-gray-300 hover:border-gray-900 text-gray-900 bg-white/80 backdrop-blur-md transition-all duration-300 hover:shadow-md ${
              isArabic ? "rotate-180" : ""
            }`}
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
