"use client"

import { Users, MessageSquare, Video, Trophy, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site-config"

const iconMap = {
  Users,
  MessageSquare,
  Video,
  Trophy,
}

export function Community() {
  const { community } = siteConfig

  return (
    <section id="community" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            {community.badge}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            {community.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {community.subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {community.features.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap] || Users
            return (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Testimonials */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-foreground text-center mb-8">
            What Editors Are Saying
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {community.testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-secondary/50 border border-border"
              >
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 group"
          >
            {community.ctaButton}
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <p className="text-sm text-muted-foreground mt-3">
            {community.ctaSubtext}
          </p>
        </div>
      </div>
    </section>
  )
}
