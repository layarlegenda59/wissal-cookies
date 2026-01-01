import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

const WhatsAppFloat = () => {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll)

    // Show tooltip once after a while
    const timer = setTimeout(() => {
      setShowTooltip(true)
    }, 5000)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timer)
    }
  }, [])

  const openWhatsApp = () => {
    const message = encodeURIComponent(t('waFloat.waText'))
    window.open(`https://wa.me/6283198230073?text=${message}`, '_blank')
  }

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="flex flex-col items-end gap-4"
          >
            {/* Elegant Concierge Tooltip */}
            <AnimatePresence>
              {showTooltip && (
                <motion.div
                  initial={{ opacity: 0, x: 20, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 20, scale: 0.9 }}
                  className="relative group mb-2"
                >
                  <div className="bg-white/90 backdrop-blur-xl p-5 rounded-2xl shadow-2xl border border-primary/5 max-w-[240px]">
                    <button
                      onClick={() => setShowTooltip(false)}
                      className="absolute -top-2 -left-2 w-6 h-6 bg-white border border-border shadow-md rounded-full flex items-center justify-center text-primary/40 hover:text-accent transition-colors"
                    >
                      <X className="w-3 h-3" />
                    </button>

                    <div className="flex flex-col gap-2">
                      <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent">{t('waFloat.tooltip')}</span>
                      <p className="text-xs text-primary/80 font-medium leading-relaxed">
                        {t('waFloat.message')}
                      </p>
                    </div>
                  </div>
                  {/* Speech arrow */}
                  <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white/90 backdrop-blur-xl rotate-45 border-r border-b border-primary/5"></div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main Floating Button */}
            <motion.button
              onClick={openWhatsApp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group flex items-center"
            >
              {/* WhatsApp Brand Circle */}
              <div className="relative w-16 h-16 bg-[#25D366] rounded-full shadow-2xl flex items-center justify-center border-4 border-white transition-all duration-500 overflow-hidden">
                {/* Clean WhatsApp Icon SVG */}
                <svg
                  viewBox="0 0 24 24"
                  className="w-9 h-9 text-white fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.411 5.634 1.411a11.911 11.911 0 0011.892-11.892 11.846 11.846 0 00-3.414-8.414" />
                </svg>

                {/* Subtle shine effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </div>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default WhatsAppFloat
