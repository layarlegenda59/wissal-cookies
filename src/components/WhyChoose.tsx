import { motion } from 'framer-motion'
import { Leaf, Gift, Heart, Shield } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const WhyChoose = () => {
  const { t } = useLanguage()

  const reasons = [
    {
      icon: () => (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.2">
          <path d="M12 2L15 5M12 2L9 5M12 2V22" opacity="0.3" />
          <path d="M12 22s-7-4-7-10 7-10 7-10 7 4 7 10-7 10-7 10z" />
          <path d="M12 7l3 3M12 11l-3 3M12 15l2 2" strokeWidth="0.8" opacity="0.5" />
        </svg>
      ),
      title: t('whyChoose.reasons.r1.title'),
      description: t('whyChoose.reasons.r1.desc')
    },
    {
      icon: () => (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.2">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 12l3-3M12 12V7" strokeLinecap="round" />
          <path d="M12 3a9 9 0 0 1 9 9" opacity="0.3" strokeWidth="2" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      ),
      title: t('whyChoose.reasons.r2.title'),
      description: t('whyChoose.reasons.r2.desc')
    },
    {
      icon: () => (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" opacity="0.4" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" opacity="0.4" />
          <circle cx="9" cy="7" r="1.5" opacity="0.2" fill="currentColor" stroke="none" />
        </svg>
      ),
      title: t('whyChoose.reasons.r3.title'),
      description: t('whyChoose.reasons.r3.desc')
    },
    {
      icon: () => (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.2">
          <rect x="3" y="8" width="18" height="13" rx="2" />
          <path d="M12 8V3M12 3c-2 0-4 1-4 3s2 3 4 3 4-1 4-3-2-3-4-3z" />
          <path d="M3 12h18" opacity="0.4" />
          <path d="M12 8v13" opacity="0.4" />
        </svg>
      ),
      title: t('whyChoose.reasons.r4.title'),
      description: t('whyChoose.reasons.r4.desc')
    },
    {
      icon: () => (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M12 18s5-2.5 5-6.5V7l-5-2-5 2v4.5c0 4 5 6.5 5 6.5z" opacity="0.3" strokeWidth="0.8" />
          <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: t('whyChoose.reasons.r5.title'),
      description: t('whyChoose.reasons.r5.desc')
    },
    {
      icon: () => (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.2">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          <path d="M12 18l-1-0.9C6.5 13.5 4 11 4 8.5 4 6.5 5.5 5 7.5 5c1.4 0 2.7 0.8 3.5 1.9C11.8 5.8 13.1 5 14.5 5 16.5 5 18 6.5 18 8.5c0 2.5-2.5 5-7 8.6L10 18z" opacity="0.3" strokeWidth="0.8" />
        </svg>
      ),
      title: t('whyChoose.reasons.r6.title'),
      description: t('whyChoose.reasons.r6.desc')
    }
  ]

  return (
    <section className="section-padding bg-secondary/20 relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent font-bold tracking-[0.3em] uppercase text-xs"
          >
            {t('whyChoose.label')}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="heading-2"
          >
            {t('whyChoose.title')} <span className="italic font-light text-accent">{t('whyChoose.titleAccent')}</span>?
          </motion.h2>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group space-y-6"
            >
              <div className="icon-atelier-container w-fit">
                <div className="icon-atelier-glow"></div>
                <div className="icon-atelier-ring"></div>
                <div className="icon-atelier-base !bg-white group-hover:!bg-primary transition-colors duration-500">
                  <div className="text-primary group-hover:text-white transition-colors duration-500">
                    <reason.icon />
                  </div>
                  <div className="icon-atelier-dot"></div>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-serif italic text-primary tracking-tight group-hover:text-accent transition-colors duration-500">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed font-light">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Banner - Redesigned with Cinema Editorial Photo */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mt-20 sm:mt-32 relative rounded-[2rem] sm:rounded-[4rem] overflow-hidden group min-h-[400px] sm:min-h-[500px] flex items-center shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] bg-primary"
        >
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=1920"
              alt="Exclusive Craft"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            {/* Luxurious Layered Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent z-10"></div>
            <div className="absolute inset-0 bg-black/40 mix-blend-overlay z-10"></div>

            {/* Light Leaks */}
            <div className="absolute -top-1/2 -left-1/4 w-[100%] h-[100%] bg-accent/20 blur-[120px] rounded-full mix-blend-soft-light" style={{ animation: 'pulse 4s infinite' }}></div>
            <div className="absolute -bottom-1/2 -right-1/4 w-[100%] h-[100%] bg-primary/20 blur-[120px] rounded-full mix-blend-soft-light" style={{ animation: 'pulse 4s infinite 2s' }}></div>
          </div>

          <div className="relative z-20 w-full px-8 py-16 sm:px-12 md:px-24 text-center lg:text-left">
            <div className="max-w-2xl mx-auto lg:mx-0">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-center lg:justify-start gap-4">
                  <div className="h-px w-12 bg-accent/50"></div>
                  <span className="text-accent font-bold tracking-[0.4em] uppercase text-[10px]">{t('whyChoose.banner.subtitle')}</span>
                </div>

                <h3 className="text-3xl sm:text-4xl md:text-6xl font-serif text-white leading-[1.1]">
                  {t('whyChoose.banner.title')} <br />
                  <span className="italic font-light text-accent">{t('whyChoose.banner.titleAccent')}</span>
                </h3>

                <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-lg font-light mx-auto lg:mx-0">
                  {t('whyChoose.banner.desc')}
                </p>

                <div className="pt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
                  <button className="btn-premium px-10 py-5 group-hover:shadow-accent/20">
                    <span className="relative z-10 flex items-center gap-2">
                      {t('whyChoose.banner.cta')}
                      <Heart className="w-4 h-4 fill-white text-white" />
                    </span>
                  </button>

                  <div className="flex items-center gap-6">
                    {[
                      {
                        icon: () => (
                          <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="1.2">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            <path d="M12 18s5-2.5 5-6.5V7l-5-2-5 2v4.5c0 4 5 6.5 5 6.5z" opacity="0.3" strokeWidth="0.8" />
                            <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        ),
                        label: t('whyChoose.banner.badges.secure')
                      },
                      {
                        icon: () => (
                          <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="1.2">
                            <path d="M12 2L15 5M12 2L9 5M12 2V22" opacity="0.3" />
                            <path d="M12 22s-7-4-7-10 7-10 7-10 7 4 7 10-7 10-7 10z" />
                            <path d="M12 7l3 3M12 11l-3 3M12 15l2 2" strokeWidth="0.8" opacity="0.5" />
                          </svg>
                        ),
                        label: t('whyChoose.banner.badges.artisanal')
                      },
                      {
                        icon: () => (
                          <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="1.2">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                          </svg>
                        ),
                        label: t('whyChoose.banner.badges.gifting')
                      }
                    ].map((badge, i) => (
                      <div key={i} className="flex flex-col items-center gap-2">
                        <div className="text-accent/60">
                          <badge.icon />
                        </div>
                        <span className="text-[8px] uppercase tracking-[0.2em] text-white/40 font-bold">{badge.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChoose
