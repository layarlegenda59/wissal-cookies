import { motion } from 'framer-motion'
import { Heart, Star, ShieldCheck, Sparkles, Users, Leaf, Clock, Gift } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const About = () => {
  const { t } = useLanguage()

  const values = [
    {
      icon: () => (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.2">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          <path d="M12 18l-1-0.9C6.5 13.5 4 11 4 8.5 4 6.5 5.5 5 7.5 5c1.4 0 2.7 0.8 3.5 1.9C11.8 5.8 13.1 5 14.5 5 16.5 5 18 6.5 18 8.5c0 2.5-2.5 5-7 8.6L10 18z" opacity="0.3" strokeWidth="0.8" />
        </svg>
      ),
      title: t('about.values.v1.title'),
      description: t('about.values.v1.desc')
    },
    {
      icon: () => (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.2">
          <path d="M12 2L15 5M12 2L9 5M12 2V22" opacity="0.3" />
          <path d="M12 22s-7-4-7-10 7-10 7-10 7 4 7 10-7 10-7 10z" />
          <path d="M12 7l3 3M12 11l-3 3M12 15l2 2" strokeWidth="0.8" opacity="0.5" />
        </svg>
      ),
      title: t('about.values.v2.title'),
      description: t('about.values.v2.desc')
    },
    {
      icon: () => (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M12 18s5-2.5 5-6.5V7l-5-2-5 2v4.5c0 4 5 6.5 5 6.5z" opacity="0.3" strokeWidth="0.8" />
          <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: t('about.values.v3.title'),
      description: t('about.values.v3.desc')
    },
    {
      icon: () => (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" opacity="0.4" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" opacity="0.4" />
          <circle cx="9" cy="7" r="1.5" opacity="0.2" fill="currentColor" stroke="none" />
        </svg>
      ),
      title: t('about.values.v4.title'),
      description: t('about.values.v4.desc')
    }
  ]

  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/30 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 -z-0" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=1000"
                alt="Our Heritage"
                className="w-full h-[350px] sm:h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>

            {/* Experience Seal */}
            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.5, type: 'spring' }}
              className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white px-6 py-4 sm:px-10 sm:py-6 rounded-2xl sm:rounded-[2.2rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] border border-accent/5 max-w-[160px] sm:max-w-[210px] text-center z-20"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + (i * 0.1) }}
                    >
                      <Star className="w-3 h-3 text-accent fill-accent" />
                    </motion.div>
                  ))}
                </div>

                <div className="space-y-2">
                  <div className="inline-block bg-[#FAF6F0] text-accent font-bold tracking-[0.4em] uppercase text-[7px] px-3 py-1 rounded-full border border-accent/5 whitespace-nowrap">
                    {t('about.legacy.est')}
                  </div>
                  <h4 className="text-primary font-serif italic text-xl leading-tight">
                    {t('about.legacy.title')}
                  </h4>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <div className="space-y-10">
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-accent font-bold tracking-[0.3em] uppercase text-xs"
              >
                {t('about.label')}
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="heading-2"
              >
                {t('about.title')} <br />
                <span className="italic font-light text-accent">
                  {t('about.titleAccent')}
                </span>
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="space-y-6 text-muted-foreground leading-relaxed text-lg font-light"
            >
              <p> {t('about.p1')} </p>
              <p> {t('about.p2')} </p>
            </motion.div>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-8 pt-10 border-t border-border/60">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 text-center sm:text-left">
                    <div className="icon-atelier-container shrink-0 group-hover:scale-105 transition-transform duration-500">
                      <div className="icon-atelier-base w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white group-hover:bg-primary border border-secondary shadow-sm transition-all duration-500">
                        <div className="text-primary group-hover:text-white transition-colors duration-500 scale-[0.6] sm:scale-75">
                          <value.icon />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-primary text-[11px] sm:text-[13px] tracking-tight mb-1 group-hover:text-accent transition-colors duration-300">{value.title}</h4>
                      <p className="hidden sm:block text-[11px] text-muted-foreground leading-relaxed font-light">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
