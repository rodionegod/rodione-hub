import { Hero } from "@/components/hero"
import { Order } from "@/components/order"
import { Works } from "@/components/works"
import { Packs } from "@/components/packs"
import { PriceList } from "@/components/price-list"
import { HowToOrder } from "@/components/how-to-order"
import { Extras } from "@/components/extras"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <Order />
      <Works />
      <Packs />
      <PriceList />
      <HowToOrder />
      <Extras />
      <Footer />
    </main>
  )
}
