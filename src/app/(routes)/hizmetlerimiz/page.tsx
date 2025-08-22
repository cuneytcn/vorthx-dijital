import Link from 'next/link';

export default function Page() {
    const services = [
        {
            id: 'web-tasarim',
            title: 'Web Tasarım & Geliştirme',
            description:
                'Modern web teknolojileri ile responsive ve performanslı web siteleri geliştiriyoruz.',
            icon: (
                <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                </svg>
            ),
            features: [
                'Responsive Tasarım',
                'CMS Entegrasyonu',
                'E-Ticaret Çözümleri',
                'Performance Optimization',
            ],
            gradient: 'from-blue-500 to-indigo-600',
            href: '/hizmetlerimiz/web-tasarim',
        },
        {
            id: 'e-ticaret',
            title: 'E-Ticaret Çözümleri',
            description:
                'Satış odaklı e-ticaret platformları ile dijital satış kanallarınızı güçlendiriyoruz.',
            icon: (
                <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13h10m-10 0L9 21m8-8v8a2 2 0 01-2 2H9a2 2 0 01-2-2v-8m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
                    />
                </svg>
            ),
            features: [
                'B2B & B2C Platformları',
                'Ödeme Sistemi Entegrasyonu',
                'Stok Yönetimi',
                'Pazaryeri Entegrasyonları',
            ],
            gradient: 'from-emerald-500 to-green-600',
            href: '/hizmetlerimiz/e-ticaret',
        },
        {
            id: 'mobil-uygulama',
            title: 'Mobil Uygulama',
            description:
                'iOS ve Android platformları için native ve cross-platform mobil uygulamalar.',
            icon: (
                <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                </svg>
            ),
            features: [
                'Native iOS & Android',
                'Cross-Platform Çözümler',
                'API Entegrasyonları',
                'App Store Optimization',
            ],
            gradient: 'from-purple-500 to-pink-600',
            href: '/hizmetlerimiz/mobil-uygulama',
        },
        {
            id: 'seo',
            title: 'SEO & Dijital Pazarlama',
            description:
                'Arama motoru optimizasyonu ile online görünürlüğünüzü maksimize ediyoruz.',
            icon: (
                <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
            ),
            features: [
                'Teknik SEO Analizi',
                'İçerik Pazarlama',
                'Google Ads Yönetimi',
                'Analytics & Raporlama',
            ],
            gradient: 'from-orange-500 to-red-600',
            href: '/hizmetlerimiz/seo',
        },
        {
            id: 'sosyal-medya',
            title: 'Sosyal Medya Yönetimi',
            description:
                'Marka bilinirliğinizi artırmak için kapsamlı sosyal medya stratejileri.',
            icon: (
                <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                    />
                </svg>
            ),
            features: [
                'İçerik Stratejisi',
                'Community Management',
                'Influencer Partnerships',
                'Performance Analytics',
            ],
            gradient: 'from-cyan-500 to-blue-600',
            href: '/hizmetlerimiz/sosyal-medya',
        },
        {
            id: 'dijital-pazarlama',
            title: 'Dijital Pazarlama Stratejisi',
            description:
                'ROI odaklı dijital pazarlama kampanyaları ile büyüme hedeflerinize ulaşın.',
            icon: (
                <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                </svg>
            ),
            features: [
                'Kampanya Yönetimi',
                'Veri Analizi',
                'Conversion Optimization',
                'Marketing Automation',
            ],
            gradient: 'from-pink-500 to-rose-600',
            href: '/hizmetlerimiz/dijital-pazarlama',
        },
    ];

    const stats = [
        { number: '150+', label: 'Tamamlanan Proje' },
        { number: '50+', label: 'Aktif Müşteri' },
        { number: '5+', label: 'Yıl Deneyim' },
        { number: '99%', label: 'Müşteri Memnuniyeti' },
    ];

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
                            Dijital Çözümlerimiz
                        </div>

                        <h1 className="mb-8 font-bold text-white">
                            Hizmetlerimiz
                        </h1>

                        <p className="text-2xl leading-relaxed text-indigo-100 lg:text-3xl">
                            Markanızı dijital dünyada{' '}
                            <span className="font-semibold text-indigo-400">
                                zirveye
                            </span>{' '}
                            taşıyacak vizyoner çözümler sunuyoruz.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="relative bg-white py-20">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="mb-2 text-4xl font-bold text-slate-900 lg:text-5xl">
                                    {stat.number}
                                </div>
                                <div className="text-sm font-medium tracking-wide text-slate-600 uppercase">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-indigo-900 py-32">
                {/* Background Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 right-20 h-72 w-72 animate-pulse rounded-full bg-indigo-500/10 blur-xl"></div>
                    <div className="absolute bottom-20 left-20 h-96 w-96 animate-pulse rounded-full bg-purple-500/10 blur-xl delay-700"></div>
                </div>

                <div className="relative container mx-auto px-6 lg:px-8">
                    <div className="mb-24 text-center">
                        <h2 className="mb-8 font-bold text-white">
                            Dijital Çözümlerimiz
                        </h2>
                        <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-300">
                            Her işletmenin ihtiyacına özel, modern ve etkili
                            dijital hizmetler
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {services.map((service) => (
                            <Link
                                key={service.id}
                                href={service.href}
                                className="group relative transform transition-all duration-700 hover:scale-105">
                                <div
                                    className={`absolute -inset-0.5 rounded-3xl bg-gradient-to-r ${service.gradient} opacity-60 blur transition duration-1000 group-hover:opacity-100`}></div>

                                <div className="relative rounded-3xl border border-gray-700/50 bg-gray-900/80 p-8 backdrop-blur-xl">
                                    <div
                                        className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient}`}>
                                        {service.icon}
                                    </div>

                                    <h3 className="mb-4 text-2xl font-bold text-white">
                                        {service.title}
                                    </h3>

                                    <p className="mb-6 leading-relaxed text-gray-300">
                                        {service.description}
                                    </p>

                                    <div className="mb-8 space-y-2">
                                        {service.features.map(
                                            (feature, featureIndex) => (
                                                <div
                                                    key={featureIndex}
                                                    className="flex items-center text-sm text-gray-400">
                                                    <div
                                                        className={`mr-3 h-1.5 w-1.5 rounded-full bg-gradient-to-r ${service.gradient}`}></div>
                                                    {feature}
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="relative bg-white py-32">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="mb-24 text-center">
                        <h2 className="mb-8 font-bold text-gray-900">
                            Çalışma Metodolojimiz
                        </h2>
                        <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
                            Kanıtlanmış süreçlerimizle projelerinizi zamanında
                            ve başarıyla teslim ediyoruz
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4">
                        {[
                            {
                                step: '01',
                                title: 'Keşif & Analiz',
                                description:
                                    'İş gereksinimlerinizi detaylı analiz ederek proje kapsamını belirliyoruz.',
                                gradient: 'from-blue-500 to-indigo-600',
                            },
                            {
                                step: '02',
                                title: 'Strateji & Planlama',
                                description:
                                    'Optimal çözüm stratejisini geliştirip detaylı proje planı hazırlıyoruz.',
                                gradient: 'from-emerald-500 to-green-600',
                            },
                            {
                                step: '03',
                                title: 'Geliştirme & Test',
                                description:
                                    'Agile metodoloji ile geliştirme sürecini yönetip kalite kontrolü yapıyoruz.',
                                gradient: 'from-purple-500 to-pink-600',
                            },
                            {
                                step: '04',
                                title: 'Teslimat & Destek',
                                description:
                                    'Projeyi canlıya alıp sürekli destek ve bakım hizmeti sağlıyoruz.',
                                gradient: 'from-orange-500 to-red-600',
                            },
                        ].map((process, index) => (
                            <div
                                key={index}
                                className="group relative text-center">
                                <div className="relative mb-8">
                                    <div
                                        className={`mx-auto h-20 w-20 rounded-2xl bg-gradient-to-br ${process.gradient} flex items-center justify-center shadow-2xl transition-all duration-500 group-hover:scale-110`}>
                                        <span className="text-2xl font-bold text-white">
                                            {process.step}
                                        </span>
                                    </div>
                                    <div
                                        className={`absolute inset-0 mx-auto h-20 w-20 rounded-2xl bg-gradient-to-br ${process.gradient} animate-pulse opacity-30 blur-xl`}></div>
                                </div>

                                <h3 className="mb-4 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-indigo-600">
                                    {process.title}
                                </h3>
                                <p className="leading-relaxed text-gray-600">
                                    {process.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 py-32">
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-20 h-72 w-72 animate-pulse rounded-full bg-indigo-500/20 blur-xl"></div>
                    <div className="absolute right-20 bottom-20 h-72 w-72 animate-pulse rounded-full bg-purple-500/20 blur-xl delay-700"></div>
                </div>

                <div className="relative container mx-auto px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <h2 className="mb-8 font-bold text-white">
                            Projenizi Başlatalım
                        </h2>
                        <p className="mb-12 text-xl leading-relaxed text-indigo-100 lg:text-2xl">
                            Dijital dönüşüm yolculuğunuzda size eşlik etmek için
                            buradayız
                        </p>

                        <div className="flex flex-col gap-6 sm:flex-row sm:justify-center">
                            <Link
                                href="/iletisim"
                                className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 px-12 py-6 text-xl font-bold text-white shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-indigo-500/50">
                                <span className="relative z-10 flex items-center justify-center">
                                    Ücretsiz Danışmanlık
                                    <svg
                                        className="ml-3 h-6 w-6 transition-transform duration-300 group-hover:translate-x-2"
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
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                            </Link>

                            <Link
                                href="/projelerimiz"
                                className="group inline-flex items-center justify-center rounded-2xl border-2 border-indigo-400 bg-transparent px-12 py-6 text-xl font-bold text-indigo-400 transition-all duration-300 hover:bg-indigo-400 hover:text-white">
                                Projelerimizi İnceleyin
                                <svg
                                    className="ml-3 h-6 w-6 transition-transform duration-300 group-hover:rotate-45"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
