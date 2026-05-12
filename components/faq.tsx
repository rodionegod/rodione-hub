"use client"

import { useState } from "react"
import { ChevronDown, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site-config"

export function FAQ() {
  const { faq } = siteConfig
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            {faq.badge}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            {faq.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {faq.subtitle}
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4 mb-12">
          {faq.items.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-border bg-card overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-secondary/30 transition-colors"
              >
                <span className="font-medium text-foreground pr-4">{item.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="text-center p-8 rounded-xl bg-card border border-border">
          <MessageCircle className="w-10 h-10 text-primary mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-foreground mb-2">
            {faq.contactCta.title}
          </h3>
          <p className="text-muted-foreground mb-4">
            {faq.contactCta.subtitle}
          </p>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="#contact">{faq.contactCta.button}</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
