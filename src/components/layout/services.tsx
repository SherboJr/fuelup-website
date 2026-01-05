"use client"

import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function EVServicesSection() {
  const t = useTranslations("services");

  const services = [
    {
      key: 'accessibility',
      number: '01',
      position: 'left-top'
    },
    {
      key: 'safety',
      number: '04',
      position: 'left-bottom'
    },
    {
      key: 'monitoring',
      number: '02',
      position: 'right-top'
    },
    {
      key: 'control',
      number: '03',
      position: 'right-bottom'
    }
  ];

  return (
    <section id="services" className="  bg-[#F1FDEA] py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-6 py-2 bg-white border-2 border-green-500 rounded-full text-green-600 font-medium text-sm mb-6">
            {t("badge")}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            {t("title")} <span className="text-green-500">{t("titleHighlight")}</span>
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          {/* Left Column - Services 01 & 04 */}
          <div className="space-y-12 lg:space-y-36">
            {services.filter(s => s.position.startsWith('left')).map((service, idx) => (
              <div 
                key={service.number}
                className={`transform transition-all duration-300 hover:scale-105 ${
                  idx === 0 ? 'lg:mt-0' : 'lg:mt-12'
                }`}
              >
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-green-600">{service.number}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-green-600 mb-3">
                      {t(`items.${service.key}.title`)}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {t(`items.${service.key}.description`)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Center Column - Image */}
          <div className="flex justify-center items-center my-8 lg:my-0">
            <div className="relative w-full max-w-md transform transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0  rounded-full blur-3xl opacity-30"></div>
              <div className="relative w-full h-auto">
                <Image 
                  src="electric-vehicle-charging-station.webp"
                  alt={t("imageAlt")}
                  width={800}
                  height={600}
                  className="relative w-full h-auto object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Column - Services 02 & 03 */}
          <div className="space-y-12 lg:space-y-36">
            {services.filter(s => s.position.startsWith('right')).map((service, idx) => (
              <div 
                key={service.number}
                className={`transform transition-all duration-300 hover:scale-105 ${
                  idx === 0 ? 'lg:mt-0' : 'lg:mt-12'
                }`}
              >
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-green-600">{service.number}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-green-600 mb-3">
                      {t(`items.${service.key}.title`)}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {t(`items.${service.key}.description`)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Decorative Elements */}
        <div className="mt-16 flex justify-center space-x-4">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse delay-75"></div>
          <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse delay-150"></div>
        </div>
      </div>
    </section>
  );
}