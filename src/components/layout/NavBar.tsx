"use client"

import { useTranslations } from "next-intl"
import { LocaleSwitcher } from "./locale-switcher"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export function NavBar() {
  const t = useTranslations("Navigation")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { id: "home", label: t("home") },
    { id: "services", label: t("services") },
    { id: "faq", label: t("faq") },
    { id: "features", label: t("howToUse") },
    { id: "contact", label: t("contact") },
    { id: "main-features", label: t("features") }
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  return (
    <>
      {/* Fixed Header */}
      <header 
        dir="ltr"
        className="fixed top-0 left-0 right-0 z-50 w-full border-b border-border/40 bg-[#F1FDEA] backdrop-blur-xl supports-[backdrop-filter]:bg-[#F1FDEA]/60 shadow-sm"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-16">
            {/* Logo Section */}
            <div className="flex-shrink-0 flex items-center">
              <button
                onClick={() => scrollToSection("home")}
                className="group flex items-center gap-2 text-xl md:text-2xl font-bold bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent hover:from-primary/90 hover:via-primary hover:to-primary transition-all duration-300"
              >
                <Image
                  src="dummy logo.png" 
                  alt="Fuel Up Logo"
                  width={65}
                  height={65}
                  className="object-cover group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300"
                />
                <span className="hidden sm:inline">Fuel Up</span>
              </button>
            </div>

            {/* Centered Desktop Navigation */}
            <nav className="hidden lg:flex items-center justify-center flex-1 max-w-2xl mx-8">
              <div className="flex items-center gap-1 flex-wrap justify-center">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="relative px-3 py-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-200 group"
                  >
                    <span className="relative z-10 whitespace-nowrap">{link.label}</span>
                    <span className="absolute inset-0 bg-primary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-200 ease-out"></span>
                  </button>
                ))}
              </div>
            </nav>
            
            {/* Right Section */}
            <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
              {/* Language Switcher */}
              <LocaleSwitcher />

              {/* Mobile Menu Button - Always visible and fixed */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-muted/80 transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Fixed positioning */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/90 border-b border-border/40 overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-4 space-y-3">
              {/* Mobile Navigation */}
              {navLinks.map((link) => (
                <button
                  key={`mobile-${link.id}`}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left px-4 py-2.5 text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-muted/50 rounded-lg transition-all duration-200"
                >
                  {link.label}
                </button>
              ))}
              
              {/* Mobile Controls */}
              <div className="pt-3 space-y-3 border-t border-border/40">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground/60">Language</span>
                  {/* Mobile Language Button */}
                  <div className="sm:hidden">
                    <LocaleSwitcher />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-16 md:h-16" />
    </>
  )
}
