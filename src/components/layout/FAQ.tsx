"use client"
import { useLocale } from "next-intl"
import { useTranslations } from "next-intl"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { MessageCircle, ArrowRight } from "lucide-react"

export function FAQ() {
  const locale = useLocale()
  const t = useTranslations("FAQ")
  const isArabic = locale === "ar"

  const faqItems = [
    {
      id: "item-1",
      question: t("question1"),
      answer: t("answer1"),
    },
    {
      id: "item-2",
      question: t("question2"),
      answer: t("answer2"),
    },
    {
      id: "item-3",
      question: t("question3"),
      answer: t("answer3"),
    },
    {
      id: "item-4",
      question: t("question4"),
      answer: t("answer4"),
    },
  ]

    const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="faq" className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 ">
      <div className="mx-auto max-w-3xl">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {t("title")}
            <span className="text-[#00b341] ml-2">{t("titleHighlight")}</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>

        {/* Accordion Section */}
        <div className="mb-12 md:mb-16">
          <Accordion type="single" collapsible defaultValue={faqItems[0].id} className="space-y-3">
            {faqItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border border-border rounded-lg px-4 py-3 data-[state=open]:bg-muted/50 transition-colors"
              >
                <AccordionTrigger className="hover:no-underline text-base sm:text-lg font-semibold text-foreground">
                  <span className="text-left">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-muted-foreground pt-3">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Still Have Questions Section */}
        <div className="bg-muted rounded-xl p-6 md:p-8 shadow-sm border border-border">
          <div className="flex flex-col md:flex-row md:items-center md:gap-6">
            {/* Avatars */}
            <div className="flex -space-x-3 mb-4 md:mb-0 md:min-w-fit">
              <Avatar className="h-10 w-10 border-2 border-white">
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=user1" />
                <AvatarFallback>U1</AvatarFallback>
              </Avatar>
              <Avatar className="h-10 w-10 border-2 border-white">
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=user2" />
                <AvatarFallback>U2</AvatarFallback>
              </Avatar>
              <Avatar className="h-10 w-10 border-2 border-white">
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=user3" />
                <AvatarFallback>U3</AvatarFallback>
              </Avatar>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-bold mb-2">{t("stillHaveQuestions")}</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4">{t("stillHaveQuestionsSubtitle")}</p>

              {/* Button */}
              <Button 
                onClick={() => scrollToSection("contact")}
                className="bg-[#00b341] hover:bg-[#00a038] text-white font-semibold gap-2 rounded-lg">
                <MessageCircle className="w-4 h-4" />
                {t("getInTouch")}
                {isArabic ? "" : <ArrowRight className="w-4 h-4 ml-2" />}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}