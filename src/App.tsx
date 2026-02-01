import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Products } from '@/components/Products'
import { About } from '@/components/About'
import { Advantages } from '@/components/Advantages'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Products />
        <About />
        <Advantages />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
