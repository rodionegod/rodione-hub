"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Link from "next/link"
import { siteConfig } from "@/lib/site-config"

// Glyphs for scramble effect
const GLYPHS = "!@#$%^&*()_+-=[]{}|;':\",./<>?`~АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ░▒▓█▄▀■□▪▫●○◌◆◇◎"

function useGlyphScramble(text: string, isHovering: boolean) {
  const [displayText, setDisplayText] = useState(text)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const frameRef = useRef(0)

  const scramble = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    
    frameRef.current = 0
    const totalFrames = 20
    
    intervalRef.current = setInterval(() => {
      frameRef.current++
      
      if (frameRef.current >= totalFrames) {
        setDisplayText(text)
        if (intervalRef.current) clearInterval(intervalRef.current)
        return
      }
      
      const progress = frameRef.current / totalFrames
      const newText = text
        .split("")
        .map((char, i) => {
          if (char === " ") return " "
          const threshold = i / text.length
          if (progress > threshold) return char
          return GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
        })
        .join("")
      
      setDisplayText(newText)
    }, 50)
  }, [text])

  useEffect(() => {
    if (isHovering) {
      scramble()
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isHovering, scramble])

  return displayText
}

export function Hero() {
  const { brand, hero } = siteConfig
  const [isHovering, setIsHovering] = useState(false)
  const [mounted, setMounted] = useState(false)
  const displayText = useGlyphScramble(hero.scrambleText, isHovering)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section 
      className="relative min-h-screen bg-[#fafafa] overflow-hidden select-none"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Construction Grid Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
        {/* Horizontal lines */}
        <line x1="0" y1="20%" x2="100%" y2="20%" stroke="#e5e5e5" strokeWidth="1" />
        <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#e5e5e5" strokeWidth="1" />
        <line x1="0" y1="80%" x2="100%" y2="80%" stroke="#e5e5e5" strokeWidth="1" />
        
        {/* Vertical lines */}
        <line x1="20%" y1="0" x2="20%" y2="100%" stroke="#e5e5e5" strokeWidth="1" />
        <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#e5e5e5" strokeWidth="1" />
        <line x1="80%" y1="0" x2="80%" y2="100%" stroke="#e5e5e5" strokeWidth="1" />
        
        {/* Crosshair marks */}
        <circle cx="20%" cy="20%" r="8" fill="none" stroke="#d4d4d4" strokeWidth="1" />
        <circle cx="80%" cy="20%" r="8" fill="none" stroke="#d4d4d4" strokeWidth="1" />
        <circle cx="20%" cy="80%" r="8" fill="none" stroke="#d4d4d4" strokeWidth="1" />
        <circle cx="80%" cy="80%" r="8" fill="none" stroke="#d4d4d4" strokeWidth="1" />
        
        {/* Center crosshair */}
        <line x1="48%" y1="50%" x2="52%" y2="50%" stroke="#d4d4d4" strokeWidth="1" />
        <line x1="50%" y1="48%" x2="50%" y2="52%" stroke="#d4d4d4" strokeWidth="1" />
        <circle cx="50%" cy="50%" r="20" fill="none" stroke="#e5e5e5" strokeWidth="1" />
        <circle cx="50%" cy="50%" r="40" fill="none" stroke="#e5e5e5" strokeWidth="1" strokeDasharray="4 4" />
      </svg>

      {/* Corner Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 flex justify-between items-start p-6 md:p-10">
        <Link 
          href={hero.cornerNav.topLeft.href} 
          className="text-[11px] md:text-xs tracking-[0.2em] text-neutral-400 hover:text-neutral-900 transition-colors font-medium"
        >
          {hero.cornerNav.topLeft.label}
        </Link>
        <Link 
          href={hero.cornerNav.topRight.href} 
          className="text-[11px] md:text-xs tracking-[0.2em] text-neutral-400 hover:text-neutral-900 transition-colors font-medium"
        >
          {hero.cornerNav.topRight.label}
        </Link>
      </nav>

      <nav className="absolute bottom-0 left-0 right-0 z-20 flex justify-between items-end p-6 md:p-10">
        <Link 
          href={hero.cornerNav.bottomLeft.href} 
          className="text-[11px] md:text-xs tracking-[0.2em] text-neutral-400 hover:text-neutral-900 transition-colors font-medium"
        >
          {hero.cornerNav.bottomLeft.label}
        </Link>
        <Link 
          href={hero.cornerNav.bottomRight.href} 
          className="text-[11px] md:text-xs tracking-[0.2em] text-neutral-400 hover:text-neutral-900 transition-colors font-medium"
        >
          {hero.cornerNav.bottomRight.label}
        </Link>
      </nav>

      {/* Center Label - Top */}
      <div className="absolute top-[15%] md:top-[18%] left-1/2 -translate-x-1/2 z-10">
        <span className="text-[10px] md:text-[11px] tracking-[0.3em] text-neutral-400 font-medium">
          {hero.topLabel}
        </span>
      </div>

      {/* Main Content - Scramble Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className="text-[18vw] md:text-[15vw] lg:text-[12vw] text-neutral-900 select-none pointer-events-none transition-all duration-500"
          style={{
            filter: isHovering ? 'blur(0px)' : 'blur(4px)',
            opacity: mounted ? 1 : 0,
            letterSpacing: '-0.02em',
            fontFamily: 'var(--font-underground)',
            fontWeight: 900,
          }}
        >
          {displayText}
        </div>
      </div>

      {/* Right side vertical label */}
      <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-10">
        <span 
          className="text-[10px] md:text-[11px] tracking-[0.3em] text-neutral-400 font-medium"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        >
          {hero.rightLabel}
        </span>
      </div>

      {/* Left side vertical label */}
      <div className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 z-10">
        <span 
          className="text-[10px] md:text-[11px] tracking-[0.3em] text-neutral-400 font-medium"
          style={{ writingMode: 'vertical-lr', textOrientation: 'mixed', transform: 'rotate(180deg)' }}
        >
          {hero.leftLabel}
        </span>
      </div>

      {/* Bottom barcode-style element */}
      <div className="absolute bottom-[15%] md:bottom-[18%] left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
        {/* Barcode lines */}
        <div className="flex items-end gap-[2px] h-6">
          {[4, 8, 4, 12, 4, 8, 4, 16, 4, 8, 4, 12, 4, 8, 4, 20, 4, 8, 4, 12, 4, 8, 4].map((height, i) => (
            <div 
              key={i} 
              className="w-[1px] bg-neutral-300" 
              style={{ height: `${height}px` }}
            />
          ))}
        </div>
        <span className="text-[9px] md:text-[10px] tracking-[0.15em] text-neutral-400 font-mono">
          {hero.bottomBarcode}
        </span>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <div className="w-[1px] h-8 bg-gradient-to-b from-transparent via-neutral-300 to-neutral-400" />
      </div>

      {/* Decorative corner marks */}
      <div className="absolute top-[25%] left-[8%] w-4 h-4 border-l border-t border-neutral-300" />
      <div className="absolute top-[25%] right-[8%] w-4 h-4 border-r border-t border-neutral-300" />
      <div className="absolute bottom-[25%] left-[8%] w-4 h-4 border-l border-b border-neutral-300" />
      <div className="absolute bottom-[25%] right-[8%] w-4 h-4 border-r border-b border-neutral-300" />
    </section>
  )
}
