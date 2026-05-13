import Link from "next/link"

const nav = [
  { href: "#works", label: "WORKS" },
  { href: "#packs", label: "PACK" },
  { href: "#price-list", label: "STORE" },
  { href: "#order", label: "ABOUT" },
  { href: "#contact", label: "CONTACT" },
]

export function Footer() {
  return (
    <footer className="border-t-2 border-black bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-6 md:py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
          <span className="font-underground font-black text-black text-2xl md:text-3xl tracking-tight leading-none">
            RODIONE
          </span>

          <nav className="flex flex-wrap items-center gap-6 justify-center">
            {nav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[9px] font-bold tracking-[0.25em] text-black/50 hover:text-[#FF2020] transition-colors uppercase"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <p className="text-[9px] font-bold tracking-[0.2em] text-black/30 uppercase">
            © 2025 RODIONE
          </p>
        </div>
      </div>
    </footer>
  )
}
