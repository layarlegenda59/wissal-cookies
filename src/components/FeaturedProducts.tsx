import { motion } from 'framer-motion'
import { Star, ArrowRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const FeaturedProducts = () => {
  const { t } = useLanguage()

  const featured = [
    {
      name: t('featured.items.nastar.name'),
      category: t('featured.items.nastar.category'),
      image: '/nastar.jpg',
      badge: t('featured.items.nastar.badge')
    },
    {
      name: t('featured.items.kaastengels.name'),
      category: t('featured.items.kaastengels.category'),
      image: '/kaastengels.jpg',
      badge: t('featured.items.kaastengels.badge')
    },
    {
      name: t('featured.items.sagoo.name'),
      category: t('featured.items.sagoo.category'),
      image: '/sagoo.jpg',
      badge: t('featured.items.sagoo.badge')
    },
    {
      name: t('featured.items.sistik.name'),
      category: t('featured.items.sistik.category'),
      image: '/sistik.jpg',
      badge: t('featured.items.sistik.badge')
    }
  ]

  return (
    <section id="products" className="section-padding bg-white relative overflow-hidden">
      {/* Subtle background text */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none select-none opacity-[0.02]">
        <span className="text-[20vw] font-serif font-black uppercase tracking-tighter">Artisanal</span>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-accent font-bold tracking-[0.3em] uppercase text-xs"
            >
              {t('featured.label')}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="heading-2"
            >
              {t('featured.title')} <span className="italic font-light text-accent">{t('featured.titleAccent')}</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <button className="group flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-primary hover:text-accent transition-colors">
              {t('featured.explore')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Products Grid - Horizontal Scroll on Mobile, Grid on Desktop */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 pb-8 md:pb-0 snap-x snap-mandatory no-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
          {featured.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group min-w-[280px] sm:min-w-0 snap-center"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-700">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                {/* Minimal Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>

                {/* Top Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-md text-primary text-[10px] font-bold uppercase tracking-[0.1em] px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <Star className="w-2.5 h-2.5 fill-accent text-accent" />
                    {product.badge}
                  </span>
                </div>

                {/* Info on Hover/Bottom */}
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-accent/80 text-[10px] uppercase font-bold tracking-[0.2em] mb-1">
                    {product.category}
                  </p>
                  <h3 className="text-white font-serif italic text-2xl">
                    {product.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Counter Concept */}
        <div className="mt-32 flex justify-center border-t border-border/60 pt-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex flex-wrap items-center justify-center gap-12 md:gap-24"
          >
            <div className="text-center group">
              <p className="stat-value group-hover:text-accent transition-colors duration-500">24+</p>
              <p className="stat-label">{t('featured.stats.varieties')}</p>
            </div>
            <div className="hidden md:block w-px h-16 bg-border/60"></div>
            <div className="text-center group">
              <p className="stat-value group-hover:text-accent transition-colors duration-500">100%</p>
              <p className="stat-label">{t('featured.stats.natural')}</p>
            </div>
            <div className="hidden md:block w-px h-16 bg-border/60"></div>
            <div className="text-center group">
              <p className="stat-value group-hover:text-accent transition-colors duration-500">Always</p>
              <p className="stat-label">{t('featured.stats.fresh')}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
