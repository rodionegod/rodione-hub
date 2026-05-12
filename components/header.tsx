"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site-config"

export function Header() {
  const { brand, navigation } = siteConfig
  const [isVisible, setIsVisible] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show header after scrolling past hero section (100vh)
      const heroHeight = window.innerHeight
      setIsVisible(window.scrollY > heroHeight - 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isVisible
          ? "bg-background/95 backdrop-blur-md border-b border-border translate-y-0 opacity-100"
          : "-translate-y-full opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src={brand.logo}
              alt={brand.name}
              width={120}
              height={40}
              className="h-8 md:h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href={navigation.ctaButton.href}>{navigation.ctaButton.label}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-md">
            <nav className="flex flex-col gap-4">
              {navigation.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-4 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4 pt-4 border-t border-border">
                <Button
                  asChild
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Link href={navigation.ctaButton.href}>{navigation.ctaButton.label}</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
