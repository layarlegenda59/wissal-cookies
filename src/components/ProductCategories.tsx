import { motion } from 'framer-motion'
import { ArrowRight, ShoppingBag } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const ProductCategories = () => {
  const { t } = useLanguage()

  const categories = [
    {
      name: t('categories.items.nastar.name'),
      description: t('categories.items.nastar.desc'),
      image: '/nastar.jpg',
      whatsappText: t('categories.items.nastar.waText')
    },
    {
      name: t('categories.items.kaastengels.name'),
      description: t('categories.items.kaastengels.desc'),
      image: '/kaastengels.jpg',
      whatsappText: t('categories.items.kaastengels.waText')
    },
    {
      name: t('categories.items.sagoo.name'),
      description: t('categories.items.sagoo.desc'),
      image: '/sagoo.jpg',
      whatsappText: t('categories.items.sagoo.waText')
    },
    {
      name: t('categories.items.sistik.name'),
      description: t('categories.items.sistik.desc'),
      image: '/sistik.jpg',
      whatsappText: t('categories.items.sistik.waText')
    }
  ]

  const openWhatsApp = (text: string) => {
    const encodedText = encodeURIComponent(text)
    window.open(`https://wa.me/6283198230073?text=${encodedText}`, '_blank')
  }

  return (
    <section id="products" className="section-padding bg-secondary/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl space-y-4"
          >
            <p className="text-accent font-bold tracking-[0.3em] uppercase text-xs">{t('categories.label')}</p>
            <h2 className="heading-2 capitalize">
              {t('categories.title')} <br />
              <span className="italic font-light text-accent">{t('categories.titleAccent')}</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden md:block"
          >
            <p className="body-large max-w-sm text-right">
              {t('categories.desc')}
            </p>
          </motion.div>
        </div>

        {/* Categories Grid - Horizontal Scroll on Mobile */}
        <div className="flex overflow-x-auto lg:grid lg:grid-cols-4 gap-6 lg:gap-8 pb-8 lg:pb-0 snap-x snap-mandatory no-scrollbar -mx-4 px-4 lg:mx-0 lg:px-0">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group min-w-[230px] lg:min-w-0 snap-center"
            >
              <div className="card-luxury h-full flex flex-col">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <button
                      onClick={() => openWhatsApp(category.whatsappText)}
                      className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100"
                    >
                      <ShoppingBag className="w-6 h-6" />
                    </button>
                  </div>
                </div>

                <div className="p-5 sm:p-8 space-y-3 flex-grow flex flex-col">
                  <h3 className="text-lg sm:text-2xl font-serif italic text-primary group-hover:text-accent transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-[13px] sm:text-sm text-muted-foreground leading-relaxed flex-grow">
                    {category.description}
                  </p>
                  <button
                    onClick={() => openWhatsApp(category.whatsappText)}
                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:text-accent transition-colors pt-4 group/link"
                  >
                    {t('categories.viewBoutique')}
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductCategories
