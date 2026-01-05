
"use client"

import { useTransition } from "react"
import { useLocale } from "next-intl"
import { useRouter, usePathname } from "@/i18n/navigation"
import Image from "next/image"


export function LocaleSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  const isArabic = locale === "ar"

  const handleLocaleChange = (newLocale: string) => {
    if (newLocale === locale) return
    startTransition(() => {
      router.replace(pathname, { locale: newLocale })
    })
  }

  const toggleLanguage = () => {
    handleLocaleChange(isArabic ? "en" : "ar")
  }

  return (
    <div className="flex items-center gap-3 lg:gap-0 min-w-0 flex-1 justify-end">
      {/* Desktop Language Select */}
      <div className="hidden sm:flex items-center gap-3">
        {/* Icon Box - Fixed Position */}
        <button
          onClick={toggleLanguage}
          disabled={isPending}
          className="group relative w-12 h-12  rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center overflow-hidden  hover:to-primary flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {/* Animated background pulse */}
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          
          {/* Language Icon */}
          <Image
            src="/arabic.svg"
            alt="Language"
            width={32}
            height={32}
            className={`
              relative z-10
              transition-transform duration-500
              ${isPending ? "" : "group-hover:rotate-180"}
              text-base font-semibold text-gray-800 block
            `}
            priority
          />
          
          {/* Decorative corner accent */}
          <div className="absolute top-0 right-0 w-3 h-3 bg-white opacity-30 transform rotate-45 translate-x-1 -translate-y-1"></div>
        </button>
        
        {/* Language Text - Fixed Width Container */}
        <div className="w-20 flex-shrink-0">
          <span className="text-base font-semibold text-gray-800 block">
            {isArabic ? 'عربي' : 'English'}
          </span>
        </div>
      </div>

      {/* Mobile Language Selector */}
      <div className="sm:hidden">
        <button 
          onClick={toggleLanguage}
          disabled={isPending}
          className="relative w-8 h-8 rounded-lg shadow-md active:scale-95 transition-transform duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg 
            className="w-6 h-6 text-primary" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
          </svg>
        </button>
      </div>
    </div>
  )
}
