import Link from "next/link"

export function Order() {
  return (
    <section id="order" className="py-24 md:py-36 bg-white border-t-2 border-black">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">

          {/* Left: text */}
          <div>
            <h2 className="font-underground font-black text-black leading-none mb-8"
              style={{ fontSize: "clamp(44px, 7vw, 88px)" }}
            >
              ORDER<br />YOUR EDIT
            </h2>

            <p className="text-sm md:text-base text-black/65 mb-3 leading-relaxed max-w-md">
              На продвижение материалы — ролики в TikTok и Instagram. Работаю с блогерами,
              брендами, бизнесами и артистами.
            </p>
            <p className="text-sm md:text-base text-black/65 mb-12 leading-relaxed max-w-md">
              Быстро, чисто, в срок.
            </p>

            {/* Stats */}
            <div className="flex gap-12 mb-12">
              <div>
                <div className="font-underground font-black text-black leading-none"
                  style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
                >
                  500+
                </div>
                <div className="text-[9px] font-bold tracking-[0.25em] uppercase text-black/45 mt-1">
                  Работ
                </div>
              </div>
              <div>
                <div className="font-underground font-black text-black leading-none"
                  style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
                >
                  50+
                </div>
                <div className="text-[9px] font-bold tracking-[0.25em] uppercase text-black/45 mt-1">
                  Довольных клиентов
                </div>
              </div>
            </div>

            <Link
              href="#contact"
              className="inline-block bg-[#FF2020] text-black font-bold text-[10px] md:text-xs tracking-[0.3em] uppercase px-8 py-4 hover:bg-black hover:text-white transition-colors"
            >
              ЗАКАЗАТЬ ПРЯМО →
            </Link>
          </div>

          {/* Right: illustration */}
          <div className="flex justify-center items-center">
            <div className="relative">
              {/* Shopping cart outline */}
              <div className="w-56 h-56 md:w-72 md:h-72 border-2 border-black flex items-center justify-center">
                <div className="text-center select-none">
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="mx-auto mb-4">
                    <path d="M10 16h8l10 32h32l8-24H24" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="34" cy="56" r="4" fill="black"/>
                    <circle cx="54" cy="56" r="4" fill="black"/>
                  </svg>
                  {/* Play button */}
                  <div className="w-10 h-10 bg-[#FF2020] flex items-center justify-center mx-auto">
                    <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
                      <path d="M2 2l10 6-10 6V2z" fill="black"/>
                    </svg>
                  </div>
                </div>
              </div>
              {/* Deco corner marks */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-[#FF2020]" />
              <div className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-[#FF2020]" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-[#FF2020]" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-[#FF2020]" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
