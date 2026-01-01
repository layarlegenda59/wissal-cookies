import { useState } from 'react'
import { motion } from 'framer-motion'
import { User, Package, Hash, FileText, Send } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const WhatsAppOrder = () => {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    product: '',
    quantity: '',
    notes: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Halo Wissal Cookies!%0A%0ASaya ingin memesan:%0A%0ANama: ${formData.name}%0AProduk: ${formData.product}%0AJumlah: ${formData.quantity}%0ACatatan: ${formData.notes || '-'}`
    window.open(`https://wa.me/6283198230073?text=${message}`, '_blank')
  }

  return (
    <section id="order" className="section-padding bg-[#F8F5F2] relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto bg-white rounded-2xl sm:rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] grid lg:grid-cols-2"
        >
          {/* Left Side Visual */}
          <div className="relative min-h-[400px] lg:min-h-[700px] bg-primary overflow-hidden group">
            <img
              src="/nastar.jpg"
              alt="Signature Nastar Royale"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent z-10" />
            <div className="absolute bottom-8 left-8 right-8 sm:bottom-12 sm:left-12 sm:right-12 z-20">
              <div className="w-12 h-px bg-accent mb-4 sm:mb-6"></div>
              <h2 className="text-white font-serif italic text-4xl sm:text-5xl md:text-7xl tracking-tight leading-none">
                {t('order.title')} <br />
                <span className="text-accent not-italic font-sans text-[10px] sm:text-xs uppercase tracking-[0.5em] font-bold mt-3 sm:mt-4 block">
                  {t('order.titleAccent')}
                </span>
              </h2>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="p-6 sm:p-12 md:p-20 space-y-8 sm:space-y-12 bg-white">
            <div className="space-y-4 text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-serif text-primary italic tracking-tight">Inquiry Form</h3>
              <p className="text-muted-foreground text-[10px] sm:text-xs font-light">
                Fields marked with <span className="text-accent">*</span> are essential for your boutique experience.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-10">
              {/* Name Field */}
              <div className="group space-y-4">
                <div className="flex items-center gap-3">
                  <User className="w-3.5 h-3.5 text-primary/40 group-focus-within:text-accent transition-colors" />
                  <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-primary/30 group-focus-within:text-accent transition-colors">
                    {t('order.form.name')}
                  </label>
                </div>
                <input
                  type="text"
                  required
                  placeholder={t('order.form.placeholder.name')}
                  className="w-full bg-transparent border-b border-border py-4 focus:outline-none focus:border-accent transition-all duration-300 text-primary text-base placeholder:text-primary/10"
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              {/* Product Field */}
              <div className="group space-y-4">
                <div className="flex items-center gap-3">
                  <Package className="w-3.5 h-3.5 text-primary/40 group-focus-within:text-accent transition-colors" />
                  <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-primary/30 group-focus-within:text-accent transition-colors">
                    {t('order.form.product')}
                  </label>
                </div>
                <select
                  required
                  className="w-full bg-transparent border-b border-border py-4 focus:outline-none focus:border-accent transition-all duration-300 text-primary text-base appearance-none cursor-pointer"
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                >
                  <option value="" disabled selected>{t('order.form.placeholder.product')}</option>
                  <option value="Classic Nastar">Signature Nastar</option>
                  <option value="Cheese Sistik">Gourmet Sistik</option>
                  <option value="Exclusive Hampers">Bespoke Collection</option>
                </select>
              </div>

              {/* Quantity Field */}
              <div className="group space-y-4">
                <div className="flex items-center gap-3">
                  <Hash className="w-3.5 h-3.5 text-primary/40 group-focus-within:text-accent transition-colors" />
                  <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-primary/30 group-focus-within:text-accent transition-colors">
                    {t('order.form.quantity')}
                  </label>
                </div>
                <input
                  type="text"
                  required
                  placeholder={t('order.form.placeholder.quantity')}
                  className="w-full bg-transparent border-b border-border py-4 focus:outline-none focus:border-accent transition-all duration-300 text-primary text-base placeholder:text-primary/10"
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                />
              </div>

              {/* Notes Field */}
              <div className="group space-y-4">
                <div className="flex items-center gap-3">
                  <FileText className="w-3.5 h-3.5 text-primary/40 group-focus-within:text-accent transition-colors" />
                  <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-primary/30 group-focus-within:text-accent transition-colors">
                    {t('order.form.notes')}
                  </label>
                </div>
                <input
                  type="text"
                  placeholder={t('order.form.placeholder.notes')}
                  className="w-full bg-transparent border-b border-border py-4 focus:outline-none focus:border-accent transition-all duration-300 text-primary text-base placeholder:text-primary/10"
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="btn-premium w-full mt-8 py-5"
              >
                <Send className="w-4 h-4" />
                <span>{t('order.form.submit')}</span>
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhatsAppOrder
