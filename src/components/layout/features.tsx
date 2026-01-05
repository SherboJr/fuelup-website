"use client"

import type React from "react"

import { useTranslations, useLocale } from "next-intl"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, BarChart3, Zap, Users, Gauge } from "lucide-react"
import Image from "next/image"

interface FeatureBlock {
  id: string
  titleKey: string
  descKey: string
  bulletKey1: string
  bulletKey2: string
  bulletKey3: string
  image: string
  layout: "left" | "right"
  icon: React.ReactNode
}

export function Features() {
  const t = useTranslations("features")
  const locale = useLocale()
  const [visibleCards, setVisibleCards] = useState<string[]>([])
  const cardsRef = useRef<{ [key: string]: HTMLDivElement | null }>({})

  const isArabic = locale === "ar"

  const features: FeatureBlock[] = [
    {
      id: "admin",
      titleKey: "item1.title",
      descKey: "item1.description",
      bulletKey1: "item1.bullet1",
      bulletKey2: "item1.bullet2",
      bulletKey3: "item1.bullet3",
      image: "/admin-dashboard-interface.png",
      layout: "left",
      icon: <BarChart3 className="w-5 h-5" />,
    },
    {
      id: "gas",
      titleKey: "item2.title",
      descKey: "item2.description",
      bulletKey1: "item2.bullet1",
      bulletKey2: "item2.bullet2",
      bulletKey3: "item2.bullet3",
      image: "/gas-station-dashboard.jpg",
      layout: "right",
      icon: <Zap className="w-5 h-5" />,
    },
    {
      id: "customer",
      titleKey: "item3.title",
      descKey: "item3.description",
      bulletKey1: "item3.bullet1",
      bulletKey2: "item3.bullet2",
      bulletKey3: "item3.bullet3",
      image: "/customer-dashboard.jpg",
      layout: "left",
      icon: <Users className="w-5 h-5" />,
    },
    {
      id: "operation",
      titleKey: "item4.title",
      descKey: "item4.description",
      bulletKey1: "item4.bullet1",
      bulletKey2: "item4.bullet2",
      bulletKey3: "item4.bullet3",
      image: "/mobile-app-interface-driver.jpg",
      layout: "right",
      icon: <Gauge className="w-5 h-5" />,
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setVisibleCards((prev) => (prev.includes(entry.target.id) ? prev : [...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.2 },
    )

    Object.values(cardsRef.current).forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id ="features" className="py-20 md:py-32 px-4 md:px-8 bg-white">
      <div className="w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-sm font-semibold text-[#00b341] uppercase tracking-wide mb-4">{t("badge")}</h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-balance">{t("heading")}</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>

        {/* Features Grid */}
        <div className="space-y-24">
          {features.map((feature) => {
            const isVisible = visibleCards.includes(feature.id)
            const isLeftLayout = isArabic ? feature.layout === "right" : feature.layout === "left"

            return (
              <div
                key={feature.id}
                id={feature.id}
                ref={(el) => {
                  if (el) cardsRef.current[feature.id] = el
                }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
              >
                {/* Content */}
                <div
                  className={`transition-all duration-1000 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : `opacity-0 ${isLeftLayout ? "-translate-x-12" : "translate-x-12"}`
                  } ${!isLeftLayout ? "lg:order-2" : ""}`}
                >
                  <div className="w-12 h-12 rounded-full bg-[#e8f7f1] flex items-center justify-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#00b341] flex items-center justify-center">
                      <span className="text-white">{feature.icon}</span>
                    </div>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t(feature.titleKey)}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">{t(feature.descKey)}</p>

                  {/* Checkmarks */}
                  <ul className="space-y-4 mb-8">
                    {[feature.bulletKey1, feature.bulletKey2, feature.bulletKey3].map((bulletKey, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-6 h-6 text-[#00b341] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{t(bulletKey)}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className="bg-[#00b341] hover:bg-[#00992f] text-white font-semibold px-8 py-3 rounded-lg transition-all">
                    {t("buttonText")}
                  </Button>
                </div>

                {/* Image Section with Frame and Pattern */}
                <div
                  className={`transition-all duration-1000 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  } ${!isLeftLayout ? "lg:order-1" : ""}`}
                >
                  {/* Frame container with light gray background */}
                  <div className="relative z-10 bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl p-6 shadow-lg">
                    <div className="rounded-lg overflow-hidden border-4 border-gray-800 shadow-xl">
                      <Image
                        src= "electric-vehicle-charging-station.webp"
                        alt={t(feature.titleKey)}
                        width={1000}
                        height={600}
                        className="w-full h-auto"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>

                    {/* Decorative dotted pattern background - responsive */}
                    <div className="absolute inset-0 pointer-events-none opacity-20 hidden sm:block">
                      <svg className="w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="none">
                        <defs>
                          <pattern id="dots" patternUnits="userSpaceOnUse" width="20" height="20">
                            <circle cx="10" cy="10" r="1.5" fill="#00b341" opacity="0.6" />
                          </pattern>
                        </defs>
                        <rect width="400" height="300" fill="url(#dots)" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  )
}
