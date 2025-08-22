'use client';

import { Shield, Star, Target } from 'lucide-react';
import AdditionalServices from './components/additional-services';
import CTASection from './components/cta-section';
import FAQSection from './components/faq-section';
import PricingCards from './components/pricing-cards';

const pricingPlans = [
    {
        name: 'Başlangıç',
        description: 'Küçük işletmeler için temel dijital varlık',
        price: '₺5,500',
        period: 'aylık',
        features: [
            'Responsive Web Sitesi',
            'SEO Temel Optimizasyon',
            'Sosyal Medya Hesapları (3 platform)',
            'Aylık Raporlama',
            'E-posta Desteği',
            '5 Sayfa İçerik',
        ],
        popular: false,
        icon: Target,
        gradient: 'from-blue-500 to-indigo-600',
        color: 'blue',
    },
    {
        name: 'Profesyonel',
        description: 'Büyüyen işletmeler için kapsamlı çözüm',
        price: '₺10,500',
        period: 'aylık',
        features: [
            'Tüm Başlangıç Özellikleri',
            'E-ticaret Entegrasyonu',
            'Gelişmiş SEO Stratejisi',
            'Sosyal Medya Yönetimi (5 platform)',
            'Google Ads Yönetimi',
            'Aylık İçerik Üretimi',
            '7/24 Öncelikli Destek',
            'Sınırsız Sayfa',
        ],
        popular: true,
        icon: Star,
        gradient: 'from-purple-500 to-pink-600',
        color: 'purple',
    },
    {
        name: 'Kurumsal',
        description: 'Büyük şirketler için özel çözümler',
        price: '₺32,500',
        period: 'aylık',
        features: [
            'Tüm Profesyonel Özellikleri',
            'Özel Yazılım Geliştirme',
            'Mobil Uygulama',
            'CRM Entegrasyonu',
            'Çoklu Dil Desteği',
            'Özel Tasarım',
            'Dedicated Proje Yöneticisi',
            'Aylık Strateji Toplantısı',
            'Performans Garantisi',
        ],
        popular: false,
        icon: Shield,
        gradient: 'from-indigo-500 to-purple-600',
        color: 'indigo',
    },
];

const fallbackAdditionalServices = [
    {
        name: 'Tek Seferlik Hizmetler',
        description: 'Bir kezlik özel projeler ve hizmetler',
        services: [
            {
                name: 'Logo Tasarımı',
                price: '₺1,500',
                description: 'Profesyonel logo tasarımı ve kurumsal kimlik',
                duration: '3-5 gün',
            },
            {
                name: 'Kurumsal Kimlik',
                price: '₺3,500',
                description:
                    'Tam kurumsal kimlik paketi (logo, kartvizit, antetli kağıt)',
                duration: '1-2 hafta',
                popular: true,
            },
            {
                name: 'Web Sitesi Yenileme',
                price: '₺4,500',
                description:
                    'Mevcut web sitenizin modern tasarımla yenilenmesi',
                duration: '2-3 hafta',
            },
            {
                name: 'SEO Audit',
                price: '₺2,500',
                description: 'Detaylı SEO analizi ve iyileştirme önerileri',
                duration: '1 hafta',
            },
            {
                name: 'Sosyal Medya Stratejisi',
                price: '₺2,000',
                description: 'Kapsamlı sosyal medya stratejisi ve içerik planı',
                duration: '1 hafta',
            },
        ],
    },
    {
        name: 'Danışmanlık Hizmetleri',
        description: 'Uzman danışmanlık ve strateji hizmetleri',
        services: [
            {
                name: 'Dijital Pazarlama Danışmanlığı',
                price: '₺500',
                description: 'Saatlik dijital pazarlama danışmanlığı',
                duration: 'saat',
            },
            {
                name: 'SEO Danışmanlığı',
                price: '₺400',
                description: 'SEO stratejisi ve teknik danışmanlık',
                duration: 'saat',
            },
            {
                name: 'Sosyal Medya Danışmanlığı',
                price: '₺300',
                description: 'Sosyal medya yönetimi ve strateji danışmanlığı',
                duration: 'saat',
            },
            {
                name: 'Web Tasarım Danışmanlığı',
                price: '₺400',
                description: 'Web tasarım ve kullanıcı deneyimi danışmanlığı',
                duration: 'saat',
                popular: true,
            },
        ],
    },
];

const faqs = [
    {
        question: 'Paketler arasında geçiş yapabilir miyim?',
        answer: 'Evet, paketler arasında istediğiniz zaman geçiş yapabilirsiniz. Değişiklik bir sonraki fatura döneminde geçerli olur.',
    },
    {
        question: 'Sözleşme süresi ne kadar?',
        answer: 'Minimum sözleşme süremiz 3 aydır. Bu süre sonunda istediğiniz zaman iptal edebilirsiniz.',
    },
    {
        question: 'Özel projeler için fiyat teklifi alabilir miyim?',
        answer: 'Evet, özel projeleriniz için ücretsiz fiyat teklifi alabilirsiniz. İletişim formumuzu doldurarak bizimle iletişime geçin.',
    },
    {
        question: 'Ödeme seçenekleri nelerdir?',
        answer: 'Aylık, 3 aylık ve yıllık ödeme seçeneklerimiz mevcuttur. Yıllık ödemelerde %15 indirim uygulanır.',
    },
];

export default function Page() {
    return (
        <div className="w-full overflow-hidden">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 py-32">
                {/* Animated Background */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-20 h-72 w-72 animate-pulse rounded-full bg-indigo-500/20 mix-blend-multiply blur-xl filter"></div>
                    <div className="absolute top-40 right-20 h-96 w-96 animate-pulse rounded-full bg-purple-500/20 mix-blend-multiply blur-xl filter delay-700"></div>
                    <div className="absolute bottom-20 left-40 h-80 w-80 animate-pulse rounded-full bg-pink-500/20 mix-blend-multiply blur-xl filter delay-1000"></div>
                </div>

                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-20">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                            backgroundSize: '50px 50px',
                        }}></div>
                </div>

                <div className="relative container mx-auto px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-6 py-3 text-sm font-medium text-indigo-300 backdrop-blur-sm">
                            <div className="h-2 w-2 animate-pulse rounded-full bg-indigo-400"></div>
                            Şeffaf Fiyatlandırma
                        </div>

                        <h1 className="mb-8 font-bold text-white">
                            Fiyatlandırma
                        </h1>

                        <p className="text-2xl leading-relaxed text-indigo-100 lg:text-3xl">
                            İşinizin büyüklüğüne uygun, esnek ve şeffaf{' '}
                            <span className="font-semibold text-indigo-400">
                                fiyatlandırma
                            </span>{' '}
                            seçenekleri.
                        </p>
                    </div>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="relative py-32">
                {/* Background Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 right-20 h-72 w-72 animate-pulse rounded-full bg-blue-500/10 blur-xl"></div>
                    <div className="absolute bottom-20 left-20 h-96 w-96 animate-pulse rounded-full bg-indigo-500/10 blur-xl delay-700"></div>
                </div>

                <div className="relative container mx-auto px-6 lg:px-8">
                    <div className="mb-24 text-center">
                        <h2 className="mb-8 font-bold text-slate-900">
                            Paketlerimiz
                        </h2>
                        <p className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-600">
                            Her bütçeye uygun profesyonel dijital çözümler
                        </p>
                    </div>

                    <PricingCards pricingPlans={pricingPlans} />
                </div>
            </section>

            {/* Additional Services */}
            <section className="relative bg-white py-32">
                <div className="container mx-auto px-6 lg:px-8">
                    <AdditionalServices
                        additionalServices={fallbackAdditionalServices}
                    />
                </div>
            </section>

            {/* FAQ Section */}
            <section className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-indigo-900 py-32">
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-20 h-72 w-72 animate-pulse rounded-full bg-indigo-500/10 blur-xl"></div>
                    <div className="absolute right-20 bottom-20 h-96 w-96 animate-pulse rounded-full bg-purple-500/10 blur-xl delay-700"></div>
                </div>

                <div className="relative container mx-auto px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl">
                        <div className="mb-16 text-center">
                            <h2 className="mb-8 font-bold text-white">
                                Sık Sorulan Sorular
                            </h2>
                            <p className="text-xl leading-relaxed text-gray-300">
                                Fiyatlandırma hakkında merak ettikleriniz
                            </p>
                        </div>

                        <FAQSection faqs={faqs} />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative bg-gradient-to-r from-indigo-600 to-purple-600 py-32">
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-20 h-72 w-72 animate-pulse rounded-full bg-white/10 blur-xl"></div>
                    <div className="absolute right-20 bottom-20 h-96 w-96 animate-pulse rounded-full bg-white/10 blur-xl delay-700"></div>
                </div>

                <div className="relative container mx-auto px-6 lg:px-8">
                    <CTASection />
                </div>
            </section>
        </div>
    );
}
