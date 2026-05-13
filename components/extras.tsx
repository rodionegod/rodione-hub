const extras = [
  { service: "Субтитры", price: "5$" },
  { service: "Перевод аудио", price: "105$" },
  { service: "Лиц. музыка", price: "10–35$" },
  { service: "Ускор. доставка", price: "+50%" },
  { service: "Доп. правка", price: "10$" },
  { service: "Анимация лого", price: "105$" },
  { service: "SFX пакет", price: "20$" },
  { service: "Обложка альбома", price: "45$" },
]

export function Extras() {
  return (
    <section id="extras" className="py-24 md:py-32 bg-white border-t-2 border-black">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">

        <div className="flex items-start justify-between mb-12 flex-wrap gap-4">
          <h2
            className="font-underground font-black text-black leading-none"
            style={{ fontSize: "clamp(52px, 10vw, 120px)" }}
          >
            EXTRAS
          </h2>
          <span
            className="font-underground font-black text-[#FF2020] select-none leading-none"
            style={{ fontSize: "clamp(60px, 10vw, 120px)" }}
          >
            ✦
          </span>
        </div>

        {/* Grid: each cell has border-r and border-b; container adds border-l and border-t */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
          style={{ borderLeft: "2px solid black", borderTop: "2px solid black" }}
        >
          {extras.map((item, i) => (
            <div
              key={i}
              className="p-5 md:p-6 hover:bg-[#FF2020] transition-colors group"
              style={{ borderRight: "2px solid black", borderBottom: "2px solid black" }}
            >
              <div
                className="font-underground font-black text-black leading-none mb-2"
                style={{ fontSize: "clamp(22px, 3vw, 36px)" }}
              >
                {item.price}
              </div>
              <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-black/50 group-hover:text-black/75 transition-colors">
                {item.service}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-4 text-[9px] font-bold tracking-[0.25em] uppercase text-black/30">
          * Итоговая цена может меняться в зависимости от объёма
        </p>
      </div>
    </section>
  )
}
