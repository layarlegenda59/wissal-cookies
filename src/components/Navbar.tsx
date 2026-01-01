import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Instagram, Menu, X, ShoppingBag, Globe } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: t('nav.heritage'), href: '#about' },
    { name: t('nav.collections'), href: '#categories' },
    { name: t('nav.connoisseurs'), href: '#testimonials' },
  ]

  const LanguageToggle = ({ className = "" }: { className?: string }) => (
    <div className={`flex items-center gap-1 bg-secondary/30 p-1 rounded-full border border-accent/20 ${className}`}>
      <button
        onClick={() => setLanguage('id')}
        className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-widest transition-all duration-300 ${language === 'id' ? 'bg-accent text-white shadow-lg' : 'text-primary/40 hover:text-primary'}`}
      >
        ID
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-widest transition-all duration-300 ${language === 'en' ? 'bg-accent text-white shadow-lg' : 'text-primary/40 hover:text-primary'}`}
      >
        EN
      </button>
    </div>
  )

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'py-3 bg-white/80 backdrop-blur-lg shadow-sm border-b border-border/40'
          : 'py-6 bg-transparent'
          }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo with Image */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 md:w-14 md:h-14 overflow-hidden rounded-full shadow-lg ring-2 ring-white transition-transform duration-500 group-hover:scale-110">
              <img
                src="/logo.jpg"
                alt="Wissal Cookies Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-serif font-bold text-lg md:text-xl tracking-tighter transition-colors duration-500 ${isScrolled ? 'text-primary' : 'text-white'}`}>
                WISSAL<span className="italic font-light text-accent">COOKIES</span>
              </span>
              <span className="text-[8px] uppercase tracking-[0.3em] font-bold text-accent -mt-1">Premium Artisanal</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-xs uppercase tracking-[0.2em] font-bold transition-all hover:text-accent relative group py-2 ${isScrolled ? 'text-primary' : 'text-white'
                    }`}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            <div className="flex items-center gap-6 pl-10 border-l border-white/10">
              <LanguageToggle />
              <a
                href="https://instagram.com/wissalcookies"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors hover:text-accent ${isScrolled ? 'text-primary' : 'text-white'}`}
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#order" className="btn-premium py-2 px-6">
                <ShoppingBag className="w-4 h-4" />
                <span>{t('nav.orderNow')}</span>
              </a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center gap-4">
            <LanguageToggle className="scale-90" />
            <button
              className={`p-2 transition-colors ${isScrolled ? 'text-primary' : 'text-white'}`}
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 1, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-white flex flex-col p-6"
          >
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 overflow-hidden rounded-full ring-2 ring-secondary shadow-md">
                  <img src="/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
                </div>
                <span className="font-serif font-bold text-lg text-primary">WISSAL<span className="italic font-light text-accent">COOKIES</span></span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-primary hover:text-accent transition-colors"
              >
                <X className="w-7 h-7" />
              </button>
            </div>

            <div className="flex flex-col gap-5">
              {navLinks.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-serif italic text-primary hover:text-accent transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="mt-auto pt-10 border-t border-border flex flex-col gap-6">
              <a href="#order" className="btn-premium w-full justify-center py-4">
                {t('nav.waInquire')}
              </a>
              <div className="flex justify-center gap-8 items-center">
                <a href="#" className="text-primary hover:text-accent transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
