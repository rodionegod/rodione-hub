"use client"

import Image from "next/image"
import Link from "next/link"
import { Instagram, Youtube, Twitter } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

const iconMap = {
  Instagram,
  Youtube,
  Twitter,
}

export function Footer() {
  const { brand, footer, socials } = siteConfig

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src={brand.logo}
                alt={brand.name}
                width={150}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm leading-relaxed">
              {footer.description}
            </p>
            <div className="flex items-center gap-3">
              {socials.map((social, index) => {
                const Icon = iconMap[social.icon as keyof typeof iconMap] || Instagram
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="w-4 h-4 text-muted-foreground" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Products</h4>
            <ul className="space-y-3">
              {footer.links.products.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              {footer.links.resources.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {footer.links.legal.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} {footer.copyright}
          </p>
          <p className="text-sm text-muted-foreground">
            {footer.tagline}
          </p>
        </div>
      </div>
    </footer>
  )
}
