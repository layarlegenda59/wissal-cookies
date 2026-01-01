import { LanguageProvider } from './context/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import ProductCategories from './components/ProductCategories'
import FeaturedProducts from './components/FeaturedProducts'
import WhyChoose from './components/WhyChoose'
import WhatsAppOrder from './components/WhatsAppOrder'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen selection:bg-accent/30">
        <Navbar />
        <main>
          <Hero />
          <About />
          <ProductCategories />
          <FeaturedProducts />
          <WhyChoose />
          <Testimonials />
          <WhatsAppOrder />
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </LanguageProvider>
  )
}

export default App
