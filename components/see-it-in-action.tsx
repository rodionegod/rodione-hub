"use client"

import { Play, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site-config"

export function SeeItInAction() {
  const { seeItInAction } = siteConfig

  return (
    <section id="action" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            {seeItInAction.badge}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            {seeItInAction.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {seeItInAction.subtitle}
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {seeItInAction.videos.map((video, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              {/* Thumbnail */}
              <div className="aspect-video relative">
                <div 
                  className={`absolute inset-0 ${
                    index === 0 ? 'bg-gradient-to-br from-primary/30 via-secondary to-muted' :
                    index === 1 ? 'bg-gradient-to-br from-secondary via-muted to-primary/20' :
                    'bg-gradient-to-br from-muted via-primary/20 to-secondary'
                  }`}
                />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-primary-foreground ml-1" />
                  </div>
                </div>

                {/* Coming Soon Overlay */}
                <div className="absolute inset-0 bg-background/60 flex items-center justify-center backdrop-blur-sm">
                  <span className="text-sm font-medium text-muted-foreground">Coming Soon</span>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {video.description}
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
            {seeItInAction.ctaButton}
          </Button>
        </div>
      </div>
    </section>
  )
}
