import { motion } from 'framer-motion'
import { Instagram, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const Footer = () => {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { name: t('nav.heritage'), href: '#about' },
    { name: t('nav.collections'), href: '#categories' },
    { name: t('nav.connoisseurs'), href: '#testimonials' },
    { name: t('nav.order'), href: '#order' },
  ]

  return (
    <footer className="bg-primary text-white overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

      <div className="container-custom pt-24 pb-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 md:w-20 md:h-20 overflow-hidden rounded-full ring-4 ring-white/10 shadow-2xl">
                <img src="/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <h3 className="text-2xl md:text-3xl font-serif font-bold tracking-tighter">
                  WISSAL<span className="italic font-light text-accent">COOKIES</span>
                </h3>
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent">Atelier Boutique</span>
              </div>
            </div>
            <p className="text-white/60 body-large max-w-sm mx-auto lg:mx-0 text-center lg:text-left">
              {t('footer.description')}
            </p>
            <div className="flex justify-center lg:justify-start gap-4 pt-4">
              {[
                { icon: Instagram, href: 'https://instagram.com/wissalcookies' },
                { icon: Mail, href: 'mailto:wissalcookies@gmail.com' },
                { icon: Phone, href: 'https://wa.me/6283198230073' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-500"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-8 text-center lg:text-left">
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-accent">{t('footer.navTitle')}</h4>
            <ul className="space-y-4">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="group flex items-center justify-center lg:justify-start gap-2 text-white/70 hover:text-white transition-colors duration-300">
                    <span className="hidden lg:block w-0 group-hover:w-4 h-px bg-accent transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Location */}
          <div className="lg:col-span-4 space-y-8 text-center lg:text-left">
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-accent">{t('footer.contactTitle')}</h4>
            <div className="space-y-6">
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-center lg:justify-start pt-2">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                <p className="text-white/70 text-sm leading-relaxed">
                  {t('footer.address')}<br />
                  {t('footer.addressDetails')}
                </p>
              </div>
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-center lg:justify-start">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <p className="text-white/70 text-sm italic">+62 831-9823-0073</p>
              </div>
            </div>

            {/* Premium Newsletter Section */}
            <div className="pt-8 space-y-6 text-center lg:text-left">
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 block">Stay Updated</span>
                <p className="text-sm text-white/60 font-medium">{t('footer.newsletter')}</p>
              </div>

              <div className="relative group">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-7 pr-16 focus:outline-none focus:border-accent/50 focus:bg-white/10 transition-all duration-500 text-sm placeholder:text-white/20"
                />
                <button className="absolute right-2 top-2 bottom-2 w-12 bg-accent hover:bg-white text-primary rounded-xl flex items-center justify-center transition-all duration-500 group-focus-within:shadow-[0_0_20px_rgba(234,179,8,0.3)]">
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>

              <p className="text-[9px] text-white/20 italic tracking-wider">
                * By subscribing, you agree to our privacy policy.
              </p>
            </div>
          </div>
        </div>

        {/* Legal & Credits */}
        <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
            &copy; {currentYear} WISSAL COOKIES ATELIER. {t('footer.rights')}.
          </p>
          <div className="flex gap-8">
            {['Privacy Policy', 'Terms of Service'].map((legal, i) => (
              <a key={i} href="#" className="text-[10px] uppercase tracking-[0.2em] text-white/40 hover:text-accent transition-colors">
                {legal}
              </a>
            ))}
          </div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 flex items-center gap-2">
            Crafted for <span className="text-accent italic font-serif">Excellence</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
