"use client"

import Link from "next/link"
import { Download, Infinity, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site-config"

export function Store() {
  const { store } = siteConfig

  return (
    <section id="store" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            {store.badge}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            {store.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {store.subtitle}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {store.products.map((product, index) => (
            <div
              key={index}
              className={`relative rounded-xl overflow-hidden bg-card border transition-all duration-300 flex flex-col ${
                product.status === 'coming-soon' 
                  ? 'border-primary/30 hover:border-primary/50' 
                  : 'border-border hover:border-primary/50'
              }`}
            >
              {/* Status Badge */}
              {product.status === 'coming-soon' && (
                <div className="absolute top-4 right-4">
                  <span className="px-2 py-1 rounded-md bg-primary/20 text-primary text-xs font-medium flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    Soon
                  </span>
                </div>
              )}

              <div className="p-6 flex-1 flex flex-col">
                {/* Price */}
                <div className="mb-4">
                  <span className="text-2xl font-bold text-foreground">{product.price}</span>
                </div>

                {/* Name & Description */}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6 flex-1">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  asChild={product.status !== 'coming-soon'}
                  className={`w-full ${
                    product.status === 'coming-soon'
                      ? 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                      : 'bg-primary text-primary-foreground hover:bg-primary/90'
                  }`}
                  disabled={product.status === 'coming-soon'}
                >
                  {product.status === 'coming-soon' ? (
                    'Coming Soon'
                  ) : (
                    <Link href={product.href}>
                      {product.price === 'Free' ? 'Download Free' : 'Get Started'}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  )}
                </Button>
              </div>

              {/* Badges */}
              <div className="px-6 pb-6 pt-0 flex gap-2">
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Download className="w-3 h-3" />
                  Instant
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Infinity className="w-3 h-3" />
                  Lifetime
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
