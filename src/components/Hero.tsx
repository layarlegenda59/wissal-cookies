import { motion } from 'framer-motion'
import { ArrowRight, Heart, Star, ShieldCheck, Sparkles } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const Hero = () => {
  const { t } = useLanguage()

  const openWhatsApp = () => {
    window.open('https://wa.me/6283198230073', '_blank')
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 sm:pt-40 overflow-hidden">
      {/* Background with Ambient Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img
            src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=1920"
            alt="Handmade Luxury Cookies"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] z-10" />
      </div>

      <div className="container-custom relative z-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
              <Star className="w-4 h-4 text-accent fill-accent" />
              <span className="text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">
                {t('hero.subtitle')}
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif text-white leading-[1.1] tracking-tight text-center sm:text-left">
              {t('hero.title')} <br />
              <span className="text-accent italic font-light drop-shadow-sm">
                {t('hero.titleAccent')}
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed font-light text-center sm:text-left mx-auto sm:mx-0">
              {t('hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
              <button
                onClick={openWhatsApp}
                className="btn-premium group w-full sm:w-auto py-4 px-8"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {t('hero.ctaPrimary')} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="text-white font-medium hover:text-accent transition-colors flex items-center gap-2 group tracking-widest text-xs uppercase">
                <span className="hidden sm:block w-8 h-px bg-accent/50 group-hover:w-12 transition-all" />
                {t('hero.ctaSecondary')}
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-12 pt-6 sm:pt-12 border-t border-white/10 mt-6 sm:mt-16 max-w-3xl px-6 sm:px-0 mx-auto sm:mx-0">
              {[
                {
                  icon: () => (
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 shrink-0" stroke="currentColor" strokeWidth="1.2">
                      <path d="M12 2L15 5M12 2L9 5M12 2V22" opacity="0.3" />
                      <path d="M12 22s-7-4-7-10 7-10 7-10 7 4 7 10-7 10-7 10z" />
                      <path d="M12 7l3 3M12 11l-3 3M12 15l2 2" strokeWidth="0.8" opacity="0.5" />
                    </svg>
                  ),
                  label: t('hero.trustBadges.artisanal')
                },
                {
                  icon: () => (
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 shrink-0" stroke="currentColor" strokeWidth="1.2">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  ),
                  label: t('hero.trustBadges.premium')
                },
                {
                  icon: () => (
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 shrink-0" stroke="currentColor" strokeWidth="1.2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="M12 18s5-2.5 5-6.5V7l-5-2-5 2v4.5c0 4 5 6.5 5 6.5z" opacity="0.3" strokeWidth="0.8" />
                      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ),
                  label: t('hero.trustBadges.exclusive')
                }
              ].map((badge, i) => (
                <div key={i} className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left">
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-accent shrink-0 backdrop-blur-sm">
                    <badge.icon />
                  </div>
                  <span className="text-white text-[8px] sm:text-[9px] uppercase tracking-[0.3em] font-bold leading-tight drop-shadow-md max-w-[150px] sm:max-w-none">{badge.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 right-12 hidden xl:block z-20"
        onClick={openWhatsApp}
      >
        <div className="bg-white p-7 rounded-[2.5rem] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.2)] border border-white/20 flex items-center gap-6 group hover:scale-105 transition-all duration-500 cursor-pointer relative overflow-hidden">
          {/* Subtle Decorative Gradient */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>

          <div className="relative">
            <div className="w-20 h-20 rounded-[1.5rem] overflow-hidden ring-4 ring-secondary shadow-lg">
              <img src="/nastar.jpg" alt="Featured" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            {/* Live Indicator */}
            <div className="absolute -top-1 -right-1 flex items-center justify-center">
              <span className="absolute animate-ping w-3 h-3 rounded-full bg-accent opacity-75"></span>
              <span className="relative w-2.5 h-2.5 rounded-full bg-accent border-2 border-white"></span>
            </div>
          </div>

          <div className="pr-6">
            <span className="text-accent text-[9px] font-bold uppercase tracking-[0.4em] block mb-2">
              {t('hero.floatLabel')}
            </span>
            <h4 className="text-primary font-serif text-2xl mb-1 leading-tight tracking-tight">
              {t('hero.floatTitle')}
            </h4>
            <p className="text-primary/60 text-[11px] font-medium tracking-wide">
              {t('hero.floatSubtitle')}
            </p>

            <motion.div
              initial={{ width: 0 }}
              whileHover={{ width: '100%' }}
              className="h-px bg-accent/30 mt-4 origin-left transition-all"
            />
          </div>
        </div>
      </motion.div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
        <span className="text-white/20 text-[8px] uppercase tracking-[0.5em] font-bold vertical-text">Scroll</span>
      </motion.div>
    </section>
  )
}

export default Hero
