"use client";

import type React from "react";
import { useState } from "react";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  MapPin,
  Phone,
  MessageSquare,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Globe,
} from "lucide-react";

export function Contact() {
  const t = useTranslations();
  const locale = useLocale();
  const isArabic = locale === "ar";

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    agreed: false,
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, agreed: checked }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.agreed) {
      alert("Please agree to the privacy policy.");
      return;
    }

    setStatus("loading");

    try {
      const form = new FormData(e.currentTarget);

      form.append("name", `${formData.firstName} ${formData.lastName}`);

      form.append("_replyto", formData.email);

      form.append(
        "_subject",
        `New message from ${formData.firstName} ${formData.lastName}`
      );

      const res = await fetch(`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: form,
      });

      if (res.ok) {
        setStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
          agreed: false,
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative">
      <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row min-h-[700px]">
        {/* Left Column */}
        <div
          className={`bg-[#F1FDEA] w-full lg:w-1/3 p-8 md:p-10 flex flex-col justify-between ${
            isArabic ? "lg:order-2" : "lg:order-1"
          } lg:sticky lg:top-0 lg:left-0`}
        >
          <div className="flex-1 flex flex-col justify-between h-full">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                {t("contact.heading")}
              </h2>
              <p className="text-gray-600 text-base mb-10">
                {t("contact.subtitle")}
              </p>

              {/* Chat to Us */}
              <div className="mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-green-200 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {t("contact.chatTitle")}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {t("contact.chatDescription")}
                    </p>
                    <a
                      href={`mailto:${process.env.NEXT_PUBLIC_SUPPORT_EMAIL}`}
                      className="text-green-700 font-semibold text-sm hover:text-green-800 transition"
                    >
                      {t("contact.chatEmail")}
                    </a>
                  </div>
                </div>
              </div>

              {/* Office */}
              <div className="mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-green-200 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {t("contact.officeTitle")}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {t("contact.officeDescription")}
                    </p>
                    <p className="text-green-700 font-semibold text-sm">
                      {t("contact.officeAddress")}
                    </p>
                    <p className="text-green-700 font-semibold text-sm">
                      {t("contact.officeCity")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-green-200 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {t("contact.phoneTitle")}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {t("contact.phoneHours")}
                    </p>
                    <a
                      href="tel:+15550000000"
                      className="text-green-700 font-semibold text-sm hover:text-green-800 transition"
                    >
                      {t("contact.phoneNumber")}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 pt-6">
              {[Facebook, Twitter, Linkedin, Youtube, Globe].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center hover:bg-green-300 transition"
                >
                  <Icon className="w-5 h-5 text-gray-600" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div
          className={`flex-1 flex items-center justify-center p-8 md:p-12 ${
            isArabic ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <div className="w-full max-w-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    {t("contact.firstName")}
                  </label>
                  <Input
                    type="text"
                    name="firstName"
                    placeholder={t("contact.firstNamePlaceholder")}
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    {t("contact.lastName")}
                  </label>
                  <Input
                    type="text"
                    name="lastName"
                    placeholder={t("contact.lastNamePlaceholder")}
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  {t("contact.email")}
                </label>
                <Input
                  type="email"
                  name="email"
                  placeholder={t("contact.emailPlaceholder")}
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  {t("contact.formPhoneLabel")}
                </label>
                <div className="flex gap-3">
                  <select className="w-24 border border-gray-300 rounded-lg px-3 py-3 bg-white text-gray-700 font-semibold text-sm">
                    <option value="US">US</option>
                    <option value="UK">UK</option>
                    <option value="SA">SA</option>
                    <option value="AE">AE</option>
                  </select>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder={t("contact.phonePlaceholder")}
                    value={formData.phone}
                    onChange={handleChange}
                    className="flex-1"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  {t("contact.message")}
                </label>
                <Textarea
                  name="message"
                  placeholder={t("contact.messagePlaceholder")}
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full"
                />
              </div>

              {/* Checkbox */}
              <div className="flex items-start gap-3 pt-2">
                <Checkbox
                  checked={formData.agreed}
                  onCheckedChange={handleCheckbox}
                  className="w-5 h-5 mt-0.5"
                />
                <span className="text-sm text-gray-600">
                  {t("contact.agreeText")}
                  <a
                    href="#"
                    className="text-green-700 font-semibold underline hover:no-underline"
                  >
                    {t("contact.privacyPolicy")}
                  </a>
                </span>
              </div>

              {/* Status Messages */}
              {status === "success" && (
                <p className="text-green-600 font-semibold">
                  ✔ Your message has been sent!
                </p>
              )}
              {status === "error" && (
                <p className="text-red-600 font-semibold">
                  ✖ Something went wrong. Try again.
                </p>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition duration-200"
              >
                {status === "loading"
                  ? "Sending..."
                  : t("contact.submitButton")}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
