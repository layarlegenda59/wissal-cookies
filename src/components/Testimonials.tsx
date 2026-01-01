import { motion } from 'framer-motion'
import { Star, Quote, Users } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const Testimonials = () => {
  const { t } = useLanguage()

  const testimonials = [
    {
      name: t('testimonials.t1.name'),
      role: t('testimonials.t1.role'),
      content: t('testimonials.t1.content'),
      rating: 5,
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200'
    },
    {
      name: t('testimonials.t2.name'),
      role: t('testimonials.t2.role'),
      content: t('testimonials.t2.content'),
      rating: 5,
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200'
    },
    {
      name: t('testimonials.t3.name'),
      role: t('testimonials.t3.role'),
      content: t('testimonials.t3.content'),
      rating: 5,
      image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=200'
    }
  ]

  return (
    <section id="testimonials" className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-secondary/20 to-transparent -z-0"></div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent font-bold tracking-[0.3em] uppercase text-xs"
          >
            {t('testimonials.label')}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="heading-2"
          >
            {t('testimonials.title')} <span className="italic font-light text-accent">{t('testimonials.titleAccent')}</span>
          </motion.h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="relative group h-full"
            >
              <div className="card-luxury p-10 h-full flex flex-col items-center text-center">
                <div className="mb-8 text-accent/20 group-hover:text-accent/40 transition-colors duration-500">
                  <Quote className="w-12 h-12" />
                </div>

                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-accent fill-current" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed italic font-light mb-auto">
                  "{testimonial.content}"
                </p>

                <div className="mt-10 pt-8 border-t border-border/40 w-full flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-4 ring-4 ring-secondary transition-transform duration-500 group-hover:scale-110">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-primary font-bold tracking-tight">{testimonial.name}</h4>
                  <p className="text-accent text-[10px] uppercase tracking-widest font-bold mt-1">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Proof Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-24 flex flex-col items-center gap-8"
        >
          <div className="flex -space-x-4">
            {[
              'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100',
              'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
              'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
              'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100'
            ].map((url, i) => (
              <div key={i} className="w-14 h-14 rounded-full border-4 border-white overflow-hidden shadow-xl hover:translate-y-[-4px] transition-transform duration-300">
                <img src={url} alt="Satisfied Client" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-accent/30 hidden md:block"></div>
              <p className="stat-value text-primary group-hover:text-accent transition-colors duration-500">2,500+</p>
              <div className="h-px w-12 bg-accent/30 hidden md:block"></div>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-accent" />
              <span className="stat-label mt-0">{t('testimonials.socialProof').replace('{count}', '')}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
