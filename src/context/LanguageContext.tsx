import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'id' | 'en';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguageState] = useState<Language>('id');

    useEffect(() => {
        const savedLang = localStorage.getItem('language') as Language;
        if (savedLang && (savedLang === 'id' || savedLang === 'en')) {
            setLanguageState(savedLang);
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('language', lang);
    };

    // Helper function to get nested objects from a key like 'hero.title'
    const t = (key: string) => {
        const keys = key.split('.');
        let result: any = translations[language];

        for (const k of keys) {
            if (result && result[k]) {
                result = result[k];
            } else {
                return key; // return key as fallback
            }
        }
        return result;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

const translations: Record<Language, any> = {
    id: {
        nav: {
            heritage: 'Warisan',
            collections: 'Koleksi',
            connoisseurs: 'Penikmat',
            order: 'Pesan',
            orderNow: 'Pesan Sekarang',
            waInquire: 'Tanya via WhatsApp',
        },
        hero: {
            subtitle: 'Sebuah Warisan Rasa Sejak 2018',
            title: 'Seni Kue Kering',
            titleAccent: 'Artisanal yang Mewah.',
            description: 'Dibuat dengan presisi butik dan bahan-bahan pilihan yang langka. Wissal Cookies menghadirkan pengalaman rasa yang mendalam bagi mereka yang menghargai setiap detail kecil.',
            ctaPrimary: 'Lihat Koleksi',
            ctaSecondary: 'Cerita Kami',
            floatLabel: 'Konsultasi Atelier',
            floatTitle: 'Atelier Inquiry',
            floatSubtitle: 'Konsultasi dengan Artisan',
            floatHint: 'Klik untuk terhubung',
            trustBadges: {
                artisanal: 'Seni Kerajinan Tangan',
                premium: 'Bahan-Bahan Premium',
                exclusive: 'Koleksi Eksklusif'
            }
        },
        about: {
            label: 'Cerita Heritage Kami',
            title: 'Melampaui Sekadar Memanggang,',
            titleAccent: 'Sebuah Warisan Seni.',
            p1: 'Berdiri di jantung tradisi kuliner sejak 2018, Wissal Cookies lahir dari mimpi untuk menghadirkan kue kering dengan standar kualitas yang belum pernah ada sebelumnya. Kami tidak hanya membuat makanan; kami menciptakan kenangan dalam setiap gigitan.',
            p2: 'Setiap resep kami adalah rahasia keluarga yang dijaga ketat, disempurnakan selama bertahun-tahun di dapur atelier kami. Menggunakan mentega pilihan terbaik, butiran cokelat dari perkebunan terbaik dunia, dan rempah-rempah artisanal.',
            legacy: {
                est: 'DIDIRIKAN 2018',
                title: 'Artisanal Legacy'
            },
            values: {
                v1: { title: 'Dibuat dengan Cinta', desc: 'Setiap kue dibuat dengan dedikasi mendalam dan ketepatan artistik.' },
                v2: { title: 'Pilihan Premium', desc: 'Kami hanya menggunakan bahan-bahan terbaik dari seluruh dunia untuk rasa yang tak tertandingi.' },
                v3: { title: 'Kualitas Terpercaya', desc: 'Diproduksi dengan standar higienis tertinggi dan kontrol kualitas bersertifikat.' },
                v4: { title: 'Rasa Khas', desc: 'Resep warisan keluarga rahasia yang disempurnakan melalui penguasaan kuliner bertahun-tahun.' }
            }
        },
        whyChoose: {
            label: 'Faktor Keunggulan',
            title: 'Mengapa Memilih',
            titleAccent: 'Wissal Cookies',
            reasons: {
                r1: { title: 'Bahan Artisanal', desc: 'Kami hanya menggunakan bahan-bahan murni berkualitas tinggi tanpa pengawet berbahaya.' },
                r2: { title: 'Selalu Baru Dipanggang', desc: 'Dibuat dalam jumlah kecil setiap hari untuk menjamin tekstur sempurna dan rasa legendaris.' },
                r3: { title: 'Dipercaya oleh Elit', desc: 'Melayani ribuan klien terpilih yang menghargai seni pembuatan kue premium.' },
                r4: { title: 'Kemasan Eksklusif', desc: 'Kemasan bespoke kami membuat setiap kotak menjadi pernyataan sempurna untuk momen spesial Anda.' },
                r5: { title: 'Kemurnian & Warisan', desc: 'Diproduksi dengan standar higienis tertinggi, menjaga resep keluarga yang otentik.' },
                r6: { title: 'Karya Berjiwa', desc: 'Setiap kreasi adalah hasil kerja penuh cinta, dirancang untuk menggugah emosi dalam setiap gigitan lembut.' }
            },
            banner: {
                subtitle: 'Pengalaman Luar Biasa',
                title: 'Rasakan puncak',
                titleAccent: 'Rasa Premium.',
                desc: 'Setiap kreasi adalah bukti warisan artisanal kami. Bergabunglah dengan lingkaran konsumen kue paling eksklusif.',
                cta: 'Pesan Koleksi Anda sekarang',
                badges: {
                    secure: 'Inquiry Aman',
                    artisanal: '100% Artisanal',
                    gifting: 'Kemasan Mewah'
                }
            }
        },
        testimonials: {
            label: 'Suara Keunggulan',
            title: 'Apa Kata Para',
            titleAccent: 'Penikmat Kami.',
            socialProof: 'Bergabunglah dengan keluarga yang puas berbagi warisan manis kami.',
            connoisseurs: 'Penikmat',
            t1: {
                name: 'Amanda Wibowo',
                role: 'Kolektor Pribadi',
                content: 'Wissal Cookies bukan sekadar camilan, tapi pengalaman seni. Tekstur Nastar-nya benar-benar meluncur di lidah, kelembutan menteganya sangat terasa premium.'
            },
            t2: {
                name: 'Hendra Wijaya',
                role: 'Antusias Kuliner',
                content: 'Sebagai penikmat kuliner, saya sangat menghargai konsistensi rasa Wissal. Sistik-nya memiliki kerenyahan yang pas dengan bumbu yang meresap sempurna.'
            },
            t3: {
                name: 'Diana Putri',
                role: 'Ahli Kado',
                content: 'Packaging-nya sangat berkelas. Saya selalu memesan koleksi khusus untuk hampers klien eksklusif saya, dan mereka selalu terpukau dengan kualitasnya.'
            }
        },
        order: {
            label: 'Layanan Atelier',
            title: 'Koleksi Kustom',
            titleAccent: 'Hanya untuk Anda.',
            desc: 'Wujudkan kreasi hadiah kustom atau koleksi eksklusif Anda. Artisan kami siap membantu merancang pengalaman yang sempurna.',
            form: {
                name: 'Nama Lengkap Anda *',
                product: 'Produk yang Diinginkan *',
                quantity: 'Jumlah (Kotak) *',
                notes: 'Catatan Kustom (Opsional)',
                placeholder: {
                    name: 'Contoh: Ahmad Wijaya',
                    product: 'Pilih Koleksi Kami',
                    quantity: 'Berapa kotak yang Anda butuhkan?',
                    notes: 'Ceritakan detail kustomisasi Anda...'
                },
                submit: 'Kirim via WhatsApp'
            },
            info: {
                time: 'Estimasi Pengerjaan',
                timeDesc: '2-3 Hari Kerja',
                shipping: 'Pengiriman Aman',
                shippingDesc: 'Jaminan keamanan pengiriman ke seluruh wilayah.'
            }
        },
        categories: {
            label: 'Koleksi Kami',
            title: 'Temukan Mahakarya',
            titleAccent: 'Artisanal Kami.',
            desc: 'Jelajahi pilihan rasa kurasi kami, masing-masing adalah bukti keahlian kami.',
            viewBoutique: 'Lihat Butik',
            items: {
                nastar: {
                    name: 'Signature Nastar',
                    desc: 'Si pirang klasik. Dipanggang sempurna dengan selai nanas premium.',
                    waText: 'Halo, saya tertarik dengan Signature Nastar Anda.'
                },
                kaastengels: {
                    name: 'Premium Kaastengels',
                    desc: 'Gurih, penuh keju, dan renyah sempurna. Impian para pecinta keju.',
                    waText: 'Halo, saya tertarik dengan Premium Kaastengels Anda.'
                },
                sagoo: {
                    name: 'Velvet Sagoo',
                    desc: 'Kue sagu keju lembut yang langsung meleleh di mulut Anda.',
                    waText: 'Halo, saya tertarik dengan Velvet Sagoo Cheese Anda.'
                },
                sistik: {
                    name: 'Artisanal Sistik',
                    desc: 'Camilan ulat sutra renyah khas kami dengan rasa otentik.',
                    waText: 'Halo, saya tertarik dengan Artisanal Sistik Gold Anda.'
                }
            }
        },
        featured: {
            label: 'Mahakarya Kami',
            title: 'Favorit',
            titleAccent: 'Signature Kami.',
            explore: 'Jelajahi Koleksi Lengkap',
            items: {
                nastar: { name: 'Signature Nastar Royale', category: 'Koleksi Signature', badge: 'Pilihan Butik' },
                kaastengels: { name: 'Savory Kaastengels', category: 'Seleksi Premium', badge: 'Pilihan Chef' },
                sagoo: { name: 'Velvet Sagoo Cheese', category: 'Kelepasan Musiman', badge: 'Favorit Pelanggan' },
                sistik: { name: 'Artisanal Sistik Gold', category: 'Camilan Warisan', badge: 'Warisan' }
            },
            stats: {
                varieties: 'Variasi',
                natural: 'Alami',
                fresh: 'Terjamin Segar'
            }
        },
        waFloat: {
            tooltip: 'Layanan Concierge',
            message: 'Ada yang bisa saya bantu dengan pilihan kudapan Anda hari ini?',
            waText: 'Halo Wissal Cookies, saya memerlukan bantuan Layanan Concierge.'
        },
        footer: {
            description: 'Menciptakan momen luar biasa dengan keunggulan artisanal. Komitmen kami terhadap kualitas memastikan setiap gigitan adalah perjalanan kemewahan murni.',
            navTitle: 'Navigasi',
            contactTitle: 'Atelier Kami',
            address: 'Cimareme Permai - Ngamprah',
            addressDetails: 'Kabupaten Bandung Barat, Indonesia',
            newsletter: 'Berlangganan kabar terbaru kami',
            rights: 'Semua Hak Dilindungi',
        }
    },
    en: {
        nav: {
            heritage: 'Heritage',
            collections: 'Collections',
            connoisseurs: 'Connoisseurs',
            order: 'Order',
            orderNow: 'Order Now',
            waInquire: 'Inquire via WhatsApp',
        },
        hero: {
            subtitle: 'A Legacy of Taste Since 2018',
            title: 'The Art of',
            titleAccent: 'Artisanal Luxury.',
            description: 'Crafted with boutique precision and rare selected ingredients. Wissal Cookies brings a profound taste experience for those who appreciate every small detail.',
            ctaPrimary: 'View Collections',
            ctaSecondary: 'Our Story',
            floatLabel: 'Atelier Inquiry',
            floatTitle: 'Atelier Inquiry',
            floatSubtitle: 'Consult with our Artisan',
            floatHint: 'Click to connect',
            trustBadges: {
                artisanal: 'Art of Handcrafting',
                premium: 'Premium Ingredients',
                exclusive: 'Exclusive Collections'
            }
        },
        about: {
            label: 'Our Heritage Story',
            title: 'Beyond Just Baking,',
            titleAccent: 'A Legacy of Art.',
            p1: 'Standing at the heart of culinary tradition since 2018, Wissal Cookies was born from a dream to present cookies with an unprecedented standard of quality. We do not just make food; we create memories in every bite.',
            p2: "Each of our recipes is a closely guarded family secret, perfected over years in our atelier kitchen. Using only the finest selected butter, chocolate nibs from the world's best plantations, and artisanal spices.",
            legacy: {
                est: 'FOUNDED 2018',
                title: 'Artisanal Legacy'
            },
            values: {
                v1: { title: 'Made with Passion', desc: 'Every cookie is handcrafted with deep devotion and artistic precision.' },
                v2: { title: 'Premium Selection', desc: 'We source only the finest globally-sourced ingredients for unparalleled taste.' },
                v3: { title: 'Trusted Quality', desc: 'Produced with the highest hygiene standards and certified quality control.' },
                v4: { title: 'Signature Taste', desc: 'A secret family heritage recipe refined over years of culinary mastery.' }
            }
        },
        whyChoose: {
            label: 'The Excellence Factor',
            title: 'Why Choose',
            titleAccent: 'Wissal Cookies',
            reasons: {
                r1: { title: 'Artisanal Ingredients', desc: 'We source only the purest, highest-quality ingredients without any harmful preservatives.' },
                r2: { title: 'Always Freshly Baked', desc: 'Crafted in small batches daily to ensure the perfect texture and legendary flavor.' },
                r3: { title: 'Trusted by Elite', desc: 'Serving thousands of discerning clients who value the art of premium baking.' },
                r4: { title: 'Exquisite Gifting', desc: 'Our bespoke packaging makes every box a perfect statement for your special moments.' },
                r5: { title: 'Purity & Heritage', desc: 'Manufactured with the highest hygiene standards, preserving authentic family recipes.' },
                r6: { title: 'Soulful Craft', desc: 'Every creation is a labor of love, designed to evoke emotion in every delicate bite.' }
            },
            banner: {
                subtitle: 'The Ultimate Experience',
                title: 'Experience the pinnacle',
                titleAccent: 'of Premium Taste.',
                desc: 'Every creation is a testament to our artisanal heritage. Join the most exclusive circle of cookie connoisseurs.',
                cta: 'Reserve Your Collection',
                badges: {
                    secure: 'Secure Inquiry',
                    artisanal: '100% Artisanal',
                    gifting: 'Luxury Gifting'
                }
            }
        },
        testimonials: {
            label: 'Voice of Excellence',
            title: 'What Our',
            titleAccent: 'Connoisseurs Say.',
            socialProof: 'Join satisfied families sharing our sweet legacy.',
            connoisseurs: 'Connoisseurs',
            t1: {
                name: 'Amanda Wibowo',
                role: 'Private Collector',
                content: 'Wissal Cookies is not just a snack, it is an artistic experience. The Nastar texture literally glides on the tongue; the buttery softness feels truly premium.'
            },
            t2: {
                name: 'Hendra Wijaya',
                role: 'Culinary Enthusiast',
                content: 'As a culinary enthusiast, I highly appreciate Wissal\'s taste consistency. Their Sistik has the perfect crunch with seasonings that are thoroughly infused.'
            },
            t3: {
                name: 'Diana Putri',
                role: 'Gifting Expert',
                content: 'The packaging is extremely classy. I always order custom collections for my exclusive client hampers, and they are always impressed with the quality.'
            }
        },
        order: {
            label: 'Atelier Service',
            title: 'Bespoke Collection',
            titleAccent: 'Just for You.',
            desc: 'Realize your custom gift creations or exclusive collections. Our artisans are ready to help design the perfect experience.',
            form: {
                name: 'Your Full Name *',
                product: 'Desired Product *',
                quantity: 'Quantity (Boxes) *',
                notes: 'Custom Notes (Optional)',
                placeholder: {
                    name: 'Example: Ahmad Wijaya',
                    product: 'Choose Our Collection',
                    quantity: 'How many boxes do you need?',
                    notes: 'Tell us about your customization details...'
                },
                submit: 'Send via WhatsApp'
            },
            info: {
                time: 'Production Time',
                timeDesc: '2-3 Working Days',
                shipping: 'Safe Shipping',
                shippingDesc: 'Safety guaranteed across all regions.'
            }
        },
        categories: {
            label: 'The Collection',
            title: 'Discover our',
            titleAccent: 'Artisanal Masterpieces.',
            desc: 'Explore our curated selection of flavors, Each one is a testament to our craft.',
            viewBoutique: 'View Boutique',
            items: {
                nastar: {
                    name: 'Signature Nastar',
                    desc: 'The golden classic. Perfectly baked with premium pineapple jam filling.',
                    waText: 'Hello, I am interested in your Signature Nastar.'
                },
                kaastengels: {
                    name: 'Premium Kaastengels',
                    desc: 'Savory, cheesy, and perfectly crunchy. A true cheese lover\'s delight.',
                    waText: 'Hello, I am interested in your Premium Kaastengels.'
                },
                sagoo: {
                    name: 'Velvet Sagoo',
                    desc: 'Delicate cheese sagoo cookies that melt in your mouth instantly.',
                    waText: 'Hello, I am interested in your Velvet Sagoo Cheese.'
                },
                sistik: {
                    name: 'Artisanal Sistik',
                    desc: 'Our signature crunchy ulat sutra snacks with authentic flavors.',
                    waText: 'Hello, I am interested in your Artisanal Sistik Gold.'
                }
            }
        },
        featured: {
            label: 'The Masterpieces',
            title: 'Our',
            titleAccent: 'Signature Favorites.',
            explore: 'Explore Full Collection',
            items: {
                nastar: { name: 'Signature Nastar Royale', category: 'Signature Collection', badge: 'Boutique Choice' },
                kaastengels: { name: 'Savory Kaastengels', category: 'Premium Selection', badge: 'Chef\'s Pick' },
                sagoo: { name: 'Velvet Sagoo Cheese', category: 'Seasonal Delight', badge: 'Customer Favorite' },
                sistik: { name: 'Artisanal Sistik Gold', category: 'Legacy Snacks', badge: 'Heritage' }
            },
            stats: {
                varieties: 'Varieties',
                natural: 'Natural',
                fresh: 'Fresh Guaranteed'
            }
        },
        waFloat: {
            tooltip: 'Concierge Service',
            message: 'May I assist you with your artisanal selection today?',
            waText: 'Hello Wissal Cookies, I require Atelier Concierge assistance.'
        },
        footer: {
            description: 'Crafting extraordinary moments with artisanal excellence. Our commitment to quality ensures every bite is a journey of pure luxury.',
            navTitle: 'Navigation',
            contactTitle: 'The Atelier',
            address: 'Cimareme Permai - Ngamprah',
            addressDetails: 'West Bandung Regency, Indonesia',
            newsletter: 'Subscribe to our latest updates',
            rights: 'All Rights Reserved',
        }
    }
};
