import Link from "next/link"

const works = [
  {
    title: "MISS PACK",
    description: "Дизайн упаковки для стрит-фуда. Брендинг и полиграфия.",
    year: "2024",
  },
  {
    title: "UG FEST",
    description: "Брендинг музыкального фестиваля андерграунд культуры.",
    year: "2024",
  },
  {
    title: "RODIONE.SITE",
    description: "Персональный сайт видеоредактора и создателя контента.",
    year: "2025",
  },
  {
    title: "HPWORK.ID",
    description: "Айдентика студии цифровых услуг. Логотип, система, носители.",
    year: "2024",
  },
  {
    title: "NOISE ONLY",
    description: "Бренд-айдентика музыкального проекта независимого артиста.",
    year: "2023",
  },
]

export function Works() {
  return (
    <section id="works" className="py-24 md:py-32 bg-white border-t-2 border-black">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section title */}
        <h2
          className="font-underground font-black text-black leading-none mb-10 md:mb-14"
          style={{ fontSize: "clamp(64px, 14vw, 160px)" }}
        >
          WORKS
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {works.map((work, i) => (
            <div
              key={i}
              className="group border-2 border-[#FF2020] p-5 cursor-pointer hover:bg-[#FF2020] transition-colors duration-200"
            >
              {/* Thumbnail */}
              <div className="aspect-video bg-black mb-4 flex items-center justify-center overflow-hidden">
                <span className="font-underground text-lg font-black text-white/10 select-none group-hover:text-white/20 transition-colors">
                  {work.title}
                </span>
              </div>

              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <h3 className="font-underground text-base font-black text-black uppercase leading-tight mb-1">
                    {work.title}
                  </h3>
                  <p className="text-xs text-black/55 leading-relaxed group-hover:text-black/70 transition-colors">
                    {work.description}
                  </p>
                </div>
                <span className="text-[9px] font-bold tracking-widest text-black/35 shrink-0 mt-0.5">
                  {work.year}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <Link
            href="#"
            className="inline-block border-2 border-black text-black font-bold text-[10px] tracking-[0.3em] uppercase px-8 py-4 hover:bg-black hover:text-white transition-colors"
          >
            СМОТРЕТЬ ВСЕ РАБОТЫ →
          </Link>
        </div>
      </div>
    </section>
  )
}
