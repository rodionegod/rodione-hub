import Link from "next/link"

const steps = [
  {
    num: "01",
    title: "Написать в Direct",
    desc: "Свяжитесь со мной в Instagram или Telegram — расскажите о задаче.",
  },
  {
    num: "02",
    title: "Обсудить детали",
    desc: "Разберём формат, сроки, объём и пожелания к работе.",
  },
  {
    num: "03",
    title: "Оплата перед работой",
    desc: "Предоплата 50% перед стартом. Остаток — после сдачи материала.",
  },
  {
    num: "04",
    title: "Готовый материал",
    desc: "Получаете файлы в нужном формате с правами на использование.",
  },
]

export function HowToOrder() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-white border-t-2 border-black">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left */}
          <div>
            <h2
              className="font-underground font-black text-black leading-none mb-10"
              style={{ fontSize: "clamp(44px, 7vw, 88px)" }}
            >
              HOW TO<br />ORDER
            </h2>
            <Link
              href="https://t.me/rodione"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#FF2020] text-black font-bold text-[10px] tracking-[0.3em] uppercase px-8 py-4 hover:bg-black hover:text-white transition-colors"
            >
              LET&apos;S CREATE →
            </Link>
          </div>

          {/* Right: steps */}
          <div>
            {steps.map((step, i) => (
              <div
                key={i}
                className={`flex gap-7 py-6 ${i < steps.length - 1 ? "border-b border-black/10" : ""}`}
              >
                <div
                  className="font-underground font-black text-[#FF2020] shrink-0 w-10 leading-none"
                  style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
                >
                  {step.num}
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-black mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-black/55 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
