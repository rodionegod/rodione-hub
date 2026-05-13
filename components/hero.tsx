"use client"

import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden">
      {/* Corner navigation — fixed overlay */}
      <nav className="absolute inset-0 pointer-events-none z-10 select-none">
        <Link
          href="#works"
          className="absolute top-5 left-6 md:top-7 md:left-10 text-[9px] md:text-[10px] font-bold tracking-[0.25em] text-black uppercase pointer-events-auto hover:text-[#FF2020] transition-colors"
        >
          WORKS
        </Link>
        <Link
          href="#packs"
          className="absolute top-5 left-1/2 -translate-x-1/2 text-[9px] md:text-[10px] font-bold tracking-[0.25em] text-black uppercase pointer-events-auto hover:text-[#FF2020] transition-colors"
        >
          PACK
        </Link>
        <Link
          href="#price-list"
          className="absolute top-5 right-6 md:top-7 md:right-10 text-[9px] md:text-[10px] font-bold tracking-[0.25em] text-black uppercase pointer-events-auto hover:text-[#FF2020] transition-colors"
        >
          STORE
        </Link>
        <Link
          href="#order"
          className="absolute bottom-5 left-6 md:bottom-7 md:left-10 text-[9px] md:text-[10px] font-bold tracking-[0.25em] text-black uppercase pointer-events-auto hover:text-[#FF2020] transition-colors"
        >
          ABOUT
        </Link>
        <Link
          href="#contact"
          className="absolute bottom-5 right-6 md:bottom-7 md:right-10 text-[9px] md:text-[10px] font-bold tracking-[0.25em] text-black uppercase pointer-events-auto hover:text-[#FF2020] transition-colors"
        >
          CONTACT
        </Link>
      </nav>

      {/* Center content */}
      <div className="flex flex-col items-center gap-5 px-4">
        <div
          className="rounded-full border-[1.5px] border-black flex items-center justify-center"
          style={{ width: "clamp(220px, 58vmin, 520px)", height: "clamp(220px, 58vmin, 520px)" }}
        >
          <span
            className="font-underground font-black text-black text-center leading-none px-8"
            style={{ fontSize: "clamp(30px, 10vmin, 96px)" }}
          >
            RODIONE
          </span>
        </div>
        <p className="text-[9px] md:text-[10px] font-bold tracking-[0.35em] uppercase text-black text-center">
          Video Editor &amp; Creator
        </p>
      </div>
    </section>
  )
}
