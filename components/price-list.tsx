const prices = [
  { service: "Reels / TikTok (до 60 сек)", price: "от 15$" },
  { service: "YouTube Short (60–90 сек)", price: "от 20$" },
  { service: "YouTube видео (до 10 мин)", price: "от 45$" },
  { service: "YouTube видео (10–20 мин)", price: "от 65$" },
  { service: "Thumbnail / превью", price: "от 8$" },
  { service: "Субтитры / текст на экране", price: "от 5$" },
  { service: "Цветокоррекция", price: "от 10$" },
  { service: "Монтаж клипа", price: "от 80$" },
  { service: "Анимация логотипа", price: "от 40$" },
  { service: "Reels-пакет (5 шт)", price: "от 60$" },
]

export function PriceList() {
  return (
    <section id="price-list" className="py-24 md:py-32 bg-white border-t-2 border-black">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left heading */}
          <div>
            <h2
              className="font-underground font-black text-black leading-none mb-6"
              style={{ fontSize: "clamp(52px, 9vw, 104px)" }}
            >
              PRICE<br />LIST
            </h2>
            <p className="text-sm text-black/50 max-w-xs leading-relaxed">
              Финальная цена зависит от сложности и объёма. Обсудим детали в диалоге.
            </p>
          </div>

          {/* Right: dark price table */}
          <div className="bg-black p-6 md:p-8">
            {prices.map((item, i) => (
              <div
                key={i}
                className={`flex items-center justify-between py-3 ${i < prices.length - 1 ? "border-b border-white/8" : ""}`}
              >
                <span className="text-xs md:text-sm text-white/70 pr-4">{item.service}</span>
                <span className="text-xs md:text-sm font-bold text-[#FF2020] whitespace-nowrap">
                  {item.price}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
