import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { FeaturedProduct } from "@/components/featured-product"
import { WhatsInside } from "@/components/whats-inside"
import { SeeItInAction } from "@/components/see-it-in-action"
import { Portfolio } from "@/components/portfolio"
import { Store } from "@/components/store"
import { Community } from "@/components/community"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      {/* Hero section with light background */}
      <Hero />
      
      {/* Main content with dark background */}
      <main className="min-h-screen bg-background">
        <Header />
        <FeaturedProduct />
        <WhatsInside />
        <SeeItInAction />
        <Portfolio />
        <Store />
        <Community />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
