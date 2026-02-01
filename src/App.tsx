import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Products } from '@/components/Products'
import { Gallery } from '@/components/Gallery'
import { About } from '@/components/About'
import { Advantages } from '@/components/Advantages'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { FloatingPhone } from '@/components/FloatingPhone'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Products />
        <Gallery />
        <About />
        <Advantages />
        <Contact />
      </main>
      <Footer />
      <FloatingPhone />
    </div>
  )
}

export default App
