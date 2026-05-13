import Link from "next/link"

const packs = [
  {
    name: "BASIC",
    tagline: "Simple, Clear, Effective.",
    description: "Идеально для стартовых проектов и разовых задач.",
    features: ["1 концепция", "1 правка", "Файлы в высоком разрешении", "3–5 дней"],
    price: "$120",
    red: true,
    tilt: "-rotate-1",
  },
  {
    name: "CONTENT",
    tagline: "Полный контент под ключ.",
    description: "Для блогеров, артистов и брендов с постоянным потоком задач.",
    features: ["4 кастомных визуала", "Форматы для постов", "12 правок", "7–10 дней"],
    price: "$280",
    red: false,
    tilt: "",
  },
  {
    name: "FULL",
    tagline: "The complete package.",
    description: "От концепта до реализации. Для серьёзных брендов.",
    features: ["Визуальная айдентика", "10+ визуалов", "Brand Kit", "6 правок", "Приоритетный support", "6 дней"],
    price: "$650",
    red: true,
    tilt: "rotate-1",
  },
]

export function Packs() {
  return (
    <section id="packs" className="py-24 md:py-32 bg-white border-t-2 border-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-3">
          <h2
            className="font-underground font-black text-black leading-none"
            style={{ fontSize: "clamp(64px, 14vw, 160px)" }}
          >
            PACK
          </h2>
        </div>
        <p className="text-center text-[9px] font-bold tracking-[0.35em] uppercase text-black/40 mb-12 md:mb-16">
          Services &amp; Packages
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-3 items-stretch">
          {packs.map((pack) => (
            <div
              key={pack.name}
              className={`flex flex-col justify-between p-7 md:p-8 min-h-[380px] md:min-h-[420px] border-2 border-black transition-transform duration-300 hover:scale-[1.02] ${pack.red ? "bg-[#FF2020]" : "bg-white"} ${pack.tilt}`}
            >
              <div>
                <h3
                  className="font-underground font-black text-black leading-none mb-5"
                  style={{ fontSize: "clamp(36px, 5vw, 52px)" }}
                >
                  {pack.name}
                </h3>
                <p className="text-sm font-bold text-black/80 mb-1">{pack.tagline}</p>
                <p className="text-xs text-black/60 mb-7 leading-relaxed">{pack.description}</p>
                <ul className="space-y-1.5">
                  {pack.features.map((f, i) => (
                    <li key={i} className="text-xs text-black/75 flex items-start gap-1.5">
                      <span className="mt-px">·</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 flex items-end justify-between">
                <span
                  className="font-underground font-black text-black leading-none"
                  style={{ fontSize: "clamp(40px, 5vw, 56px)" }}
                >
                  {pack.price}
                </span>
                <Link
                  href="#contact"
                  className={`text-[9px] font-bold tracking-[0.25em] uppercase border border-black px-4 py-2 hover:bg-black hover:text-white transition-colors ${pack.red ? "text-black" : "text-black"}`}
                >
                  ORDER →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom label */}
        <p className="text-right mt-6 text-[9px] font-bold tracking-[0.25em] uppercase text-black/35">
          Choose what fits your vision
        </p>
      </div>
    </section>
  )
}
