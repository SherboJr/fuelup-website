"use client"

import { useTranslations } from "next-intl"
import { useLocale } from "next-intl"
import { Mail, MapPin, Phone, Info, Twitter, Linkedin, Facebook, Instagram} from "lucide-react"
import Image from "next/image"

export function Footer() {
  const t = useTranslations("Footer")
  const locale = useLocale()
  const isArabic = locale === "ar"

  const footerLinks = {
    siteMap: [
      { label: t("siteMap.home"), href: "#" },
      { label: t("siteMap.aboutUs"), href: "#" },
      { label: t("siteMap.service"), href: "#services" },
      { label: t("siteMap.ourClient"), href: "#" },
      { label: t("siteMap.getQuote"), href: "#" },
      { label: t("siteMap.process"), href: "#howToUse" },
    ],
    contactItems: [
      { icon: Info, label: t("contact.tradeStyle"), value: "Trade Style: Fuelup" },
      { icon: MapPin, label: t("contact.address"), value: t("contact.addressValue") },
      { icon: Mail, label: t("contact.email"), value: "Mahmoud@Fuelup.com" },
      { icon: Phone, label: t("contact.phone"), value: "(+2) 01282032962" },
    ],
    products: [
      { 
        upperText: t("products.appStore.upper"), 
        lowerText: t("products.appStore.lower"), 
        iconSrc: "/icons/apple-store.svg", 
        store: "ios" 
      },
      { 
        upperText: t("products.googlePlay.upper"), 
        lowerText: t("products.googlePlay.lower"), 
        iconSrc: "/icons/google-play.svg", 
        store: "android" 
      },
    ],
  }

  const socialIcons = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ]

  const getStoreIconStyle = (store: string) => {
    switch (store) {
      case "ios":
        return "text-white bg-gradient-to-br from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800"
      case "android":
        return "text-white bg-gradient-to-br from-green-600 to-green-800 hover:from-green-500 hover:to-green-700"
      case "gallery":
        return "text-white bg-gradient-to-br from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700"
      default:
        return "text-gray-300 bg-gray-800 hover:bg-gray-700"
    }
  }

  return (
    <footer className="bg-[#0e1320] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Company Info */}
          <div >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#00b341] to-[#00a838] rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#00b341] to-[#00d44a] bg-clip-text text-transparent">
                Fuelup
              </h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">{t("companyDescription")}</p>
          </div>

          {/* Column 2: Site Map */}
          <div className="gap-2" >
            <h4 className={`text-gray-300 uppercase text-xs font-semibold tracking-widest mb-6 border-[#00b341] ${isArabic ? 'border-r-4 pr-3' : 'border-l-4 pl-3'}`}>
              {t("siteMapTitle")}
            </h4>
            <ul className="space-y-3">
              {footerLinks.siteMap.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className={`text-sm transition-all duration-300 group flex items-center ${
                      idx === 0 
                        ? "text-[#00b341] font-medium" 
                        : "text-gray-400 hover:text-[#00b341] hover:translate-x-1"
                    }`}
                  >
                    <span className="group-hover:underline">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div >
            <h4 className={`text-gray-300 uppercase text-xs font-semibold tracking-widest mb-6 border-[#00b341] ${isArabic ? 'border-r-4 pr-3' : 'border-l-4 pl-3'}`}>
              {t("contactTitle")}
            </h4>
            <ul className="space-y-1">
              {footerLinks.contactItems.map((item, idx) => {
                const IconComponent = item.icon
                return (
                  <li key={idx} className="flex gap-3 items-start group hover:bg-gray-800/30 rounded-lg p-2 transition-all duration-300">
                    <div className="p-1.5 bg-gray-800 rounded-lg group-hover:bg-[#00b341]/20 transition-colors duration-300">
                      <IconComponent className="w-4 h-4 text-[#00b341] flex-shrink-0" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-gray-500 mb-1">{item.label}</p>
                      <p className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                        {item.value}
                      </p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Column 4: Our Products */}
          <div >
            <h4 className={`text-gray-300 uppercase text-xs font-semibold tracking-widest mb-6 border-[#00b341] ${isArabic ? 'border-r-4 pr-3' : 'border-l-4 pl-3'}`}>
              {t("productsTitle")}
            </h4>
            <div className="space-y-3">
              {footerLinks.products.map((product, idx) => (
                <button
                  key={idx}
                  className="w-2/3 px-4 py-2.5 rounded-lg bg-transparent border-2 border-white transition-all duration-300 flex items-center gap-3 hover:bg-white/10"
                  onClick={() =>
                    window.open(
                      "https://play.google.com/store/apps/details?id=com.fuelup.operator.fuelup_operator",
                      "_blank"
                    )
                  }
                >
                  <Image
                    src={product.iconSrc}
                    alt={product.lowerText}
                    width={36}
                    height={36}
                    className="object-contain w-9 h-9"
                    priority
                  />
                  <div className={`flex-1 ${isArabic ? 'text-right' : 'text-left'}`}>
                    <span className="text-[11px] font-normal text-white block tracking-wide">
                      {product.upperText}
                    </span>
                    <span className="text-xl font-semibold text-white block leading-tight">
                      {product.lowerText}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#070b12] border-t border-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400 text-center sm:text-left">
            {t("copyright")} • <span className="text-[#00b341]">Fuelup</span>
          </p>

          {/* <div className="flex gap-5 items-center">
            {socialIcons.map((social, idx) => {
              const Icon = social.icon
              return (
                <a
                  key={idx}
                  href={social.href}
                  className="text-gray-400 hover:text-[#00b341] transition-all duration-300 p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50"
                  aria-label={social.label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              )
            })}
          </div> */}
        </div>
      </div>
    </footer>
  )
}