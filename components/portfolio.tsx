"use client"

import { ExternalLink, Play, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site-config"

export function Portfolio() {
  const { portfolio } = siteConfig

  return (
    <section id="portfolio" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            {portfolio.badge}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            {portfolio.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {portfolio.subtitle}
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {portfolio.items.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              {/* Thumbnail */}
              <div className="aspect-video relative overflow-hidden">
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-secondary via-muted to-secondary"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <Button size="sm" className="bg-primary text-primary-foreground">
                    <Play className="w-4 h-4 mr-1" />
                    Watch
                  </Button>
                </div>

                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 rounded-md bg-background/80 backdrop-blur-sm text-xs font-medium text-foreground">
                    {item.category}
                  </span>
                </div>

                {/* Views */}
                <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-1 rounded-md bg-background/80 backdrop-blur-sm">
                  <Eye className="w-3 h-3 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">{item.views}</span>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  Client: {item.client}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-border text-foreground hover:bg-secondary group"
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            {portfolio.ctaButton}
          </Button>
        </div>
      </div>
    </section>
  )
}
