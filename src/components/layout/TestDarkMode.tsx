'use client'
import React from 'react'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslations } from 'next-intl';

const TestDarkMode = () => {
  const t = useTranslations("testDarkMode")
  
  return (
    <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center py-8 bg-background">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-5 pb-2">
            {t("section_title")}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t("section_subtitle")}
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card className="border-border/50 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-semibold">{t("light_mode_title")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {t("light_mode_description")}
              </p>
              <Button size="sm">{t('light_mode_button')}</Button>
            </CardContent>
          </Card>

          <Card className="border-border/50 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-semibold">{t("dark_mode_title")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {t("dark_mode_description")}
              </p>
              <Button variant="outline" size="sm">{t("dark_mode_button")}</Button>
            </CardContent>
          </Card>
        </div>

        {/* Color Palette Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-8 text-foreground">{t('color_palette_title')}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {[
              { bg: 'bg-primary', label: t('primary') },
              { bg: 'bg-secondary', label: t('secondary') },
              { bg: 'bg-accent', label: t('accent') },
              { bg: 'bg-muted', label: t('muted') },
              { bg: 'bg-destructive', label: t('destructive') },
              { bg: 'bg-card border border-border', label: t('card') }
            ].map((color, index) => (
              <div key={index} className="space-y-3">
                <div className={`h-20 ${color.bg} rounded-lg shadow-sm transition-transform hover:scale-105`} />
                <p className="text-sm font-medium text-foreground/80">{color.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestDarkMode