import ContactForm from '@/app/(routes)/iletisim/components/contact-form';
import { siteConfig } from '@/config/site.config';

export default function IletisimPage() {
    const faqs = [
        {
            question: 'Proje süresi ne kadar?',
            answer: 'Proje karmaşıklığına bağlı olarak 2-12 hafta arasında değişmektedir. Detaylı zaman çizelgesini görüşme sonrası paylaşıyoruz.',
        },
        {
            question: 'Hangi teknolojileri kullanıyorsunuz?',
            answer: "React, Next.js, Node.js, Python gibi güncel teknolojiler kullanıyoruz. Projeye en uygun teknoloji stack'ini seçiyoruz.",
        },
        {
            question: 'Proje sonrası destek veriyor musunuz?',
            answer: 'Evet, tüm projelerimizde 3 aylık ücretsiz destek sağlıyoruz. Sonrasında uygun fiyatlı bakım paketlerimiz mevcuttur.',
        },
        {
            question: 'Ödeme nasıl yapılır?',
            answer: 'Genellikle %40 kapora, %40 ara ödeme, %20 teslimat şeklinde 3 taksitte ödeme alıyoruz. Esnek ödeme seçenekleri sunabiliriz.',
        },
        {
            question: 'Proje sürecinde nasıl bilgilendiriliyorum?',
            answer: 'Haftalık progress raporları ve düzenli toplantılarla süreç boyunca bilgilendirme yapıyoruz. İstediğiniz an projeye erişebilirsiniz.',
        },
        {
            question: "Sadece Türkiye'de mi hizmet veriyorsunuz?",
            answer: "Türkiye'nin yanı sıra global müşterilerimiz de bulunmaktadır. Uzaktan çalışma konusunda deneyimliyiz.",
        },
    ];

    return (
        <div className="w-full overflow-hidden">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 py-32">
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-20 h-72 w-72 animate-pulse rounded-full bg-indigo-500/20 blur-xl"></div>
                    <div className="absolute right-20 bottom-20 h-96 w-96 animate-pulse rounded-full bg-purple-500/20 blur-xl delay-700"></div>
                </div>

                <div className="relative container mx-auto px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-6 py-3 text-sm font-medium text-indigo-300 backdrop-blur-sm">
                            <div className="h-2 w-2 animate-pulse rounded-full bg-indigo-400"></div>
                            Size Nasıl Yardımcı Olabiliriz?
                        </div>

                        <h1 className="mb-8 font-bold text-white">İletişim</h1>

                        <p className="text-2xl leading-relaxed text-indigo-100 lg:text-3xl">
                            Projeniz hakkında konuşmak ve size en uygun çözümü
                            bulmak için bizimle iletişime geçin.
                        </p>
                    </div>
                </div>
            </section>

            {/* Quick Actions */}
            <section className="relative bg-gradient-to-br from-gray-50 to-indigo-50/30 py-20">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        <a
                            href={`tel:${siteConfig.contact.phone}`}
                            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-pink-500 to-orange-500 p-8 text-white shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-pink-500/50">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                            <div className="relative text-center">
                                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                                    <svg
                                        className="h-8 w-8"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="mb-2 text-xl font-bold">
                                    Hemen Arayın
                                </h3>
                                <p className="text-pink-100">
                                    Acil durumlar için direkt arayın
                                </p>
                            </div>
                        </a>

                        <a
                            href={`mailto:${siteConfig.contact.email}`}
                            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500 to-indigo-600 p-8 text-white shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-blue-500/50">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                            <div className="relative text-center">
                                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                                    <svg
                                        className="h-8 w-8"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="mb-2 text-xl font-bold">
                                    E-posta Gönder
                                </h3>
                                <p className="text-blue-100">
                                    Detaylı bilgi için mail atın
                                </p>
                            </div>
                        </a>

                        <a
                            href={siteConfig.links.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500 to-green-600 p-8 text-white shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-emerald-500/50">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                            <div className="relative text-center">
                                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                                    <svg
                                        className="h-8 w-8"
                                        fill="currentColor"
                                        viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.251" />
                                    </svg>
                                </div>
                                <h3 className="mb-2 text-xl font-bold">
                                    WhatsApp
                                </h3>
                                <p className="text-emerald-100">
                                    Anında mesajlaşın
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section className="relative bg-white py-32">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl">
                        <div className="mb-16 text-center">
                            <h2 className="mb-8 font-bold text-gray-900">
                                Proje Başlatalım
                            </h2>
                            <p className="text-xl leading-relaxed text-gray-600">
                                Projeniz hakkında detaylı bilgi verin, size özel
                                teklif hazırlayalım.
                            </p>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500 to-purple-600 opacity-20 blur"></div>
                            <div className="relative rounded-3xl bg-white p-12 shadow-2xl">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="relative bg-gradient-to-br from-gray-50 to-indigo-50/30 py-32">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="mb-24 text-center">
                        <h2 className="mb-8 font-bold text-gray-900">
                            Neden Vorthx Dijital?
                        </h2>
                        <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
                            Projenizi güvenle teslim edebileceğimiz nedenler.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                title: 'Hızlı Teslimat',
                                description:
                                    'Projelerinizi belirlenen sürede eksiksiz teslim ediyoruz.',
                                icon: '⚡',
                                gradient: 'from-yellow-500 to-orange-600',
                            },
                            {
                                title: '7/24 Destek',
                                description:
                                    'Proje sonrası sürekli destek ve bakım hizmeti veriyoruz.',
                                icon: '🛡️',
                                gradient: 'from-blue-500 to-indigo-600',
                            },
                            {
                                title: 'Şeffaf Süreç',
                                description:
                                    'Her adımda bilgilendirilir, süreçte aktif rol alırsınız.',
                                icon: '👁️',
                                gradient: 'from-purple-500 to-pink-600',
                            },
                            {
                                title: 'Güncel Teknoloji',
                                description:
                                    'En son teknolojilerle modern ve performanslı çözümler.',
                                icon: '🚀',
                                gradient: 'from-emerald-500 to-green-600',
                            },
                            {
                                title: 'Uygun Fiyat',
                                description:
                                    'Kaliteli hizmeti en rekabetçi fiyatlarla sunuyoruz.',
                                icon: '💰',
                                gradient: 'from-orange-500 to-red-600',
                            },
                            {
                                title: 'Deneyimli Ekip',
                                description:
                                    '5+ yıllık deneyimle uzman ekibimiz yanınızda.',
                                icon: '👥',
                                gradient: 'from-cyan-500 to-blue-600',
                            },
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="group relative"
                                style={{ animationDelay: `${index * 100}ms` }}>
                                <div className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-5`}></div>

                                    <div className="relative text-center">
                                        <div className="mb-6 text-5xl">
                                            {feature.icon}
                                        </div>

                                        <h3 className="mb-4 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-indigo-600">
                                            {feature.title}
                                        </h3>

                                        <p className="leading-relaxed text-gray-600">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="relative bg-white py-32">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="mb-24 text-center">
                        <h2 className="mb-8 font-bold text-gray-900">
                            Sıkça Sorulan Sorular
                        </h2>
                        <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
                            Merak ettiklerinizin yanıtları burada. Daha fazla
                            soru için bize ulaşın.
                        </p>
                    </div>

                    <div className="mx-auto max-w-4xl">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            {faqs.map((faq, index) => (
                                <details
                                    key={index}
                                    className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 p-8 shadow-lg transition-all duration-500 open:border-indigo-300 open:shadow-2xl hover:-translate-y-1 hover:border-indigo-200">
                                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 transition-opacity duration-500 group-open:opacity-100"></div>

                                    <summary className="relative cursor-pointer">
                                        <div className="flex items-start justify-between">
                                            <h3 className="flex-1 pr-4 text-lg font-bold text-gray-900 transition-colors duration-300 group-hover:text-indigo-600">
                                                {faq.question}
                                            </h3>
                                            <div className="flex-shrink-0">
                                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 transition-all duration-300 group-open:rotate-180 group-open:bg-indigo-600">
                                                    <svg
                                                        className="h-4 w-4 text-indigo-600 transition-colors duration-300 group-open:text-white"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24">
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M19 9l-7 7-7-7"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </summary>

                                    <div className="animate-in slide-in-from-top-1 relative mt-6 leading-relaxed text-gray-600 duration-300">
                                        {faq.answer}
                                    </div>
                                </details>
                            ))}
                        </div>

                        <div className="mt-16 text-center">
                            <p className="mb-8 text-lg text-gray-600">
                                Sorunuzun yanıtını bulamadınız mı?
                            </p>
                            <a
                                href={`mailto:${siteConfig.contact.email}`}
                                className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 text-lg font-bold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-indigo-500/50">
                                Bize Sorun
                                <svg
                                    className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="relative bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 py-32">
                <div className="absolute inset-0">
                    <div className="absolute top-10 left-10 h-72 w-72 animate-pulse rounded-full bg-indigo-500/30 blur-xl"></div>
                    <div className="absolute right-10 bottom-10 h-72 w-72 animate-pulse rounded-full bg-purple-500/30 blur-xl delay-700"></div>
                </div>

                <div className="relative container mx-auto px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <h2 className="mb-8 font-bold text-white">
                            Projenizi Bugün Başlatalım
                        </h2>
                        <p className="mb-16 text-2xl leading-relaxed text-indigo-100 lg:text-3xl">
                            Ücretsiz danışmanlık için hemen iletişime geçin. 24
                            saat içinde geri dönüş garantisi.
                        </p>

                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {/* Phone */}
                            <a
                                href={`tel:${siteConfig.contact.phone}`}
                                className="group relative overflow-hidden rounded-3xl bg-white/10 p-8 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:bg-white/20">
                                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                                <div className="relative text-center">
                                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500 text-white shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                                        <svg
                                            className="h-8 w-8"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            />
                                        </svg>
                                    </div>

                                    <h3 className="mb-3 text-xl font-bold text-white">
                                        Hemen Arayın
                                    </h3>
                                    <p className="mb-4 text-green-200">
                                        Anında görüşelim
                                    </p>
                                    <div className="text-lg font-bold text-white">
                                        {siteConfig.contact.phone}
                                    </div>
                                </div>
                            </a>

                            {/* Email */}
                            <a
                                href={`mailto:${siteConfig.contact.email}`}
                                className="group relative overflow-hidden rounded-3xl bg-white/10 p-8 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:bg-white/20">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                                <div className="relative text-center">
                                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500 text-white shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                                        <svg
                                            className="h-8 w-8"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </div>

                                    <h3 className="mb-3 text-xl font-bold text-white">
                                        E-posta Gönderin
                                    </h3>
                                    <p className="mb-4 text-blue-200">
                                        Detaylı bilgi için
                                    </p>
                                    <div className="text-lg font-bold text-white">
                                        {siteConfig.contact.email}
                                    </div>
                                </div>
                            </a>

                            {/* WhatsApp */}
                            <a
                                href={siteConfig.links.whatsapp}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative overflow-hidden rounded-3xl bg-white/10 p-8 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:bg-white/20">
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-green-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                                <div className="relative text-center">
                                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                                        <svg
                                            className="h-8 w-8"
                                            fill="currentColor"
                                            viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.251" />
                                        </svg>
                                    </div>

                                    <h3 className="mb-3 text-xl font-bold text-white">
                                        WhatsApp
                                    </h3>
                                    <p className="mb-4 text-emerald-200">
                                        Anında mesajlaşın
                                    </p>
                                    <div className="text-lg font-bold text-white">
                                        Mesaj Gönder
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="mt-16">
                            <div className="inline-flex items-center gap-4 rounded-2xl bg-white/10 px-8 py-4 backdrop-blur-sm">
                                <div className="h-3 w-3 animate-pulse rounded-full bg-green-400"></div>
                                <span className="text-lg font-medium text-white">
                                    Şu anda aktifiz - 24 saat içinde
                                    yanıtlıyoruz
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
