import Link from 'next/link';
import type { Project } from '../../../lib/wordpress/types';
import ProjectsFilter from './components/projects-filter';

export default function Page() {
    const projects: Project[] = [
        {
            slug: 'e-ticaret-platformu',
            title: 'E-Ticaret Platformu',
            category: 'E-Ticaret',
            description:
                'Modern ve kullanıcı dostu e-ticaret platformu tasarımı',
            longDescription:
                'Bu proje, kullanıcı deneyimini ön planda tutan modern bir e-ticaret platformudur. Responsive tasarım, hızlı yükleme süreleri ve güvenli ödeme sistemi ile müşteri memnuniyetini maksimize eder.',
            image: '/projects/ecommerce.jpg',
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
            year: '2024',
            status: 'Tamamlandı',
            gradient: 'from-blue-500 to-indigo-600',
            client: 'Fashion Store',
            duration: '3 ay',
            team: '4 kişi',
            features: [
                'Responsive tasarım',
                'Gelişmiş arama ve filtreleme',
                'Güvenli ödeme sistemi',
                'Admin paneli',
                'Stok yönetimi',
                'Müşteri yorumları',
                'SEO optimizasyonu',
                'Analytics entegrasyonu',
            ],
            challenges: [
                'Yüksek trafik yönetimi',
                'Güvenli ödeme entegrasyonu',
                'Performans optimizasyonu',
                'Mobil uyumluluk',
            ],
            solutions: [
                'CDN kullanımı ile hızlı yükleme',
                'SSL sertifikası ve güvenlik protokolleri',
                'Database optimizasyonu',
                'Progressive Web App (PWA) özellikleri',
            ],
            results: [
                'Satışlarda %300 artış',
                'Sayfa yükleme süresinde %60 iyileştirme',
                'Mobil kullanıcı deneyiminde %80 artış',
                "SEO sıralamasında ilk 3'e yükselme",
            ],
            liveUrl: 'https://fashionstore.com',
            githubUrl: 'https://github.com/vorthx/ecommerce-platform',
            images: [
                '/projects/ecommerce-1.jpg',
                '/projects/ecommerce-2.jpg',
                '/projects/ecommerce-3.jpg',
            ],
        },
        {
            slug: 'kurumsal-web-sitesi',
            title: 'Kurumsal Web Sitesi',
            category: 'Web Tasarım',
            description: 'Responsive ve SEO optimize kurumsal web sitesi',
            longDescription:
                'Profesyonel kurumsal kimliği yansıtan, SEO dostu ve kullanıcı deneyimi odaklı web sitesi. Modern tasarım ve hızlı performans ile marka değerini artırır.',
            image: '/projects/corporate.jpg',
            technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
            year: '2024',
            status: 'Tamamlandı',
            gradient: 'from-emerald-500 to-green-600',
            client: 'Tech Solutions',
            duration: '2 ay',
            team: '3 kişi',
            features: [
                'Modern ve temiz tasarım',
                'SEO optimizasyonu',
                'Blog sistemi',
                'İletişim formu',
                'Çoklu dil desteği',
                'Analytics entegrasyonu',
                'Hızlı yükleme süreleri',
                'Mobil uyumluluk',
            ],
            challenges: [
                'SEO optimizasyonu',
                'Hızlı yükleme süreleri',
                'Responsive tasarım',
                'İçerik yönetimi',
            ],
            solutions: [
                'Next.js ile SSR/SSG kullanımı',
                'Image optimization',
                'Mobile-first tasarım',
                'Headless CMS entegrasyonu',
            ],
            results: [
                'Organik trafikte %200 artış',
                'Sayfa yükleme süresinde %70 iyileştirme',
                "Bounce rate'de %40 azalma",
                'Google PageSpeed skorunda 95+ puan',
            ],
            liveUrl: 'https://techsolutions.com',
            githubUrl: 'https://github.com/vorthx/corporate-website',
            images: [
                '/projects/corporate-1.jpg',
                '/projects/corporate-2.jpg',
                '/projects/corporate-3.jpg',
            ],
        },
        {
            slug: 'mobil-fitness-uygulamasi',
            title: 'Mobil Fitness Uygulaması',
            category: 'Mobil Uygulama',
            description: 'iOS ve Android fitness takip uygulaması',
            longDescription:
                'Kullanıcıların fitness hedeflerini takip edebileceği, kişiselleştirilmiş antrenman programları sunan mobil uygulama. Sosyal özellikler ve gamification ile motivasyonu artırır.',
            image: '/projects/fitness.jpg',
            technologies: ['React Native', 'Firebase', 'Redux', 'Node.js'],
            year: '2024',
            status: 'Geliştirme Aşamasında',
            gradient: 'from-purple-500 to-pink-600',
            client: 'Healthy Life',
            duration: '4 ay',
            team: '5 kişi',
            features: [
                'Kişiselleştirilmiş antrenman programları',
                'Fitness takip sistemi',
                'Sosyal özellikler',
                'Gamification',
                'Push notifications',
                'Offline çalışma',
                'Wearable cihaz entegrasyonu',
                'Video antrenmanlar',
            ],
            challenges: [
                'Cross-platform uyumluluk',
                'Performans optimizasyonu',
                'Offline senkronizasyon',
                'Wearable entegrasyonu',
            ],
            solutions: [
                'React Native ile native performans',
                'Redux ile state yönetimi',
                'SQLite ile offline storage',
                'HealthKit/Google Fit entegrasyonu',
            ],
            results: [
                "App Store'da 4.8/5 puan",
                '100,000+ indirme',
                'Günlük aktif kullanıcıda %150 artış',
                'Kullanıcı memnuniyetinde %90',
            ],
            liveUrl: null,
            githubUrl: 'https://github.com/vorthx/fitness-app',
            images: [
                '/projects/fitness-1.jpg',
                '/projects/fitness-2.jpg',
                '/projects/fitness-3.jpg',
            ],
        },
        {
            slug: 'restaurant-yonetim-sistemi',
            title: 'Restaurant Yönetim Sistemi',
            category: 'Web Uygulama',
            description: 'Kompleks restaurant yönetim ve sipariş sistemi',
            longDescription:
                'Restaurant işletmelerinin tüm operasyonlarını dijitalleştiren kapsamlı yönetim sistemi. Sipariş yönetimi, stok takibi, personel yönetimi ve müşteri ilişkileri tek platformda.',
            image: '/projects/restaurant.jpg',
            technologies: ['Vue.js', 'Laravel', 'MySQL', 'WebSocket', 'Redis'],
            year: '2023',
            status: 'Tamamlandı',
            gradient: 'from-orange-500 to-red-600',
            client: 'Food Chain Restaurant',
            duration: '5 ay',
            team: '6 kişi',
            features: [
                'Gerçek zamanlı sipariş yönetimi',
                'Stok ve envanter takibi',
                'Personel yönetimi ve vardiya sistemi',
                'Müşteri sadakat programı',
                'Analytics ve raporlama',
                'Mobil uygulama entegrasyonu',
                'Ödeme sistemi entegrasyonu',
                'Çoklu şube yönetimi',
            ],
            challenges: [
                'Gerçek zamanlı veri senkronizasyonu',
                'Yüksek eş zamanlı kullanıcı desteği',
                'Karmaşık iş akışları',
                'Mobil uygulama entegrasyonu',
            ],
            solutions: [
                'WebSocket ile real-time iletişim',
                'Redis cache ile performans optimizasyonu',
                'Microservices mimarisi',
                'RESTful API tasarımı',
            ],
            results: [
                'Sipariş işleme süresinde %70 azalma',
                'Müşteri memnuniyetinde %85 artış',
                'Operasyonel maliyetlerde %30 düşüş',
                'Günlük sipariş kapasitesinde %200 artış',
            ],
            liveUrl: 'https://restaurant-system.com',
            githubUrl: 'https://github.com/vorthx/restaurant-system',
            images: [
                '/projects/restaurant-1.jpg',
                '/projects/restaurant-2.jpg',
                '/projects/restaurant-3.jpg',
            ],
        },
        {
            slug: 'fintech-dashboard',
            title: 'Fintech Dashboard',
            category: 'Web Uygulama',
            description: 'Finansal verileri analiz eden admin paneli',
            longDescription:
                'Finansal kurumlar için geliştirilmiş, gerçek zamanlı veri analizi ve görselleştirme sunan kapsamlı dashboard. Güvenli, ölçeklenebilir ve kullanıcı dostu arayüz.',
            image: '/projects/fintech.jpg',
            technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL'],
            year: '2023',
            status: 'Tamamlandı',
            gradient: 'from-cyan-500 to-blue-600',
            client: 'Digital Bank',
            duration: '6 ay',
            team: '8 kişi',
            features: [
                'Gerçek zamanlı veri görselleştirme',
                'Gelişmiş analitik raporlar',
                'Risk yönetimi araçları',
                'Kullanıcı yetkilendirme sistemi',
                'API entegrasyonları',
                'Otomatik raporlama',
                'Mobil responsive tasarım',
                'Çoklu dil desteği',
            ],
            challenges: [
                'Büyük veri setleri ile çalışma',
                'Gerçek zamanlı veri işleme',
                'Güvenlik ve uyumluluk',
                'Karmaşık veri görselleştirme',
            ],
            solutions: [
                'Apache Kafka ile stream processing',
                'Redis ve PostgreSQL optimizasyonu',
                'OAuth 2.0 ve JWT güvenlik',
                'D3.js ile interaktif grafikler',
            ],
            results: [
                'Veri analizi süresinde %80 azalma',
                'Kullanıcı verimliliğinde %150 artış',
                'Sistem güvenilirliğinde %99.9 uptime',
                'Operasyonel maliyetlerde %40 düşüş',
            ],
            liveUrl: 'https://fintech-dashboard.com',
            githubUrl: 'https://github.com/vorthx/fintech-dashboard',
            images: [
                '/projects/fintech-1.jpg',
                '/projects/fintech-2.jpg',
                '/projects/fintech-3.jpg',
            ],
        },
        {
            slug: 'egitim-platformu',
            title: 'Eğitim Platformu',
            category: 'Web Uygulama',
            description: 'Online eğitim ve kurs yönetim platformu',
            longDescription:
                'Eğitim kurumları ve eğitmenler için geliştirilmiş, kapsamlı online eğitim platformu. Video dersler, interaktif sınavlar, öğrenci takibi ve sertifika sistemi.',
            image: '/projects/education.jpg',
            technologies: ['React', 'Node.js', 'PostgreSQL', 'WebRTC', 'AWS'],
            year: '2023',
            status: 'Tamamlandı',
            gradient: 'from-pink-500 to-purple-600',
            client: 'EduTech Solutions',
            duration: '7 ay',
            team: '10 kişi',
            features: [
                'Video streaming ve canlı dersler',
                'İnteraktif sınav ve quiz sistemi',
                'Öğrenci ilerleme takibi',
                'Sertifika yönetimi',
                'Ödeme sistemi entegrasyonu',
                'Mobil uygulama',
                'Analytics ve raporlama',
                'Çoklu dil desteği',
            ],
            challenges: [
                'Video streaming optimizasyonu',
                'Ölçeklenebilir sistem tasarımı',
                'Ödeme sistemi entegrasyonu',
                'Mobil uygulama senkronizasyonu',
            ],
            solutions: [
                'WebRTC ve HLS ile video streaming',
                'Microservices ve containerization',
                'Stripe entegrasyonu',
                'React Native ile cross-platform',
            ],
            results: [
                'Öğrenci katılımında %200 artış',
                'Eğitmen verimliliğinde %120 artış',
                'Platform kullanımında %300 artış',
                'Müşteri memnuniyetinde %95',
            ],
            liveUrl: 'https://edutech-platform.com',
            githubUrl: 'https://github.com/vorthx/education-platform',
            images: [
                '/projects/education-1.jpg',
                '/projects/education-2.jpg',
                '/projects/education-3.jpg',
            ],
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
                            Başarı Hikayeleri
                        </div>

                        <h1 className="mb-8 font-bold text-white">
                            Projelerimiz
                        </h1>

                        <p className="text-2xl leading-relaxed text-indigo-100 lg:text-3xl">
                            Hayata geçirdiğimiz dijital çözümler ve
                            müşterilerimizin başarı hikayeleri.
                        </p>
                    </div>
                </div>
            </section>

            {/* Filter & Projects Component */}
            <ProjectsFilter projects={projects} />

            {/* Testimonials */}
            <section className="relative bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 py-32">
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-20 h-72 w-72 animate-pulse rounded-full bg-indigo-500/20 blur-xl"></div>
                    <div className="absolute right-20 bottom-20 h-72 w-72 animate-pulse rounded-full bg-purple-500/20 blur-xl delay-700"></div>
                </div>

                <div className="relative container mx-auto px-6 lg:px-8">
                    <div className="mb-24 text-center">
                        <h2 className="mb-8 font-bold text-white">
                            Müşteri Yorumları
                        </h2>
                        <p className="mx-auto max-w-3xl text-xl leading-relaxed text-indigo-100">
                            Projelerimiz hakkında müşterilerimizin görüşleri.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                name: 'Ayşe Yılmaz',
                                company: 'Fashion Store',
                                text: 'E-ticaret sitemiz sayesinde satışlarımız %300 arttı. Hem tasarım hem de performans mükemmel.',
                                rating: 5,
                            },
                            {
                                name: 'Mehmet Kaya',
                                company: 'Tech Solutions',
                                text: 'Profesyonel yaklaşımları ve zamanında teslimatları ile harika bir deneyim yaşadık.',
                                rating: 5,
                            },
                            {
                                name: 'Zeynep Demir',
                                company: 'Healthy Life',
                                text: 'Mobil uygulamamız kullanıcılarımız tarafından çok beğenildi. Teşekkürler Vorthx!',
                                rating: 5,
                            },
                        ].map((testimonial, index) => (
                            <div
                                key={index}
                                className="rounded-3xl bg-white/10 p-8 backdrop-blur-sm"
                                style={{ animationDelay: `${index * 200}ms` }}>
                                <div className="mb-6 flex text-yellow-400">
                                    {[...Array(testimonial.rating)].map(
                                        (_, i) => (
                                            <svg
                                                key={i}
                                                className="h-5 w-5"
                                                fill="currentColor"
                                                viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        )
                                    )}
                                </div>
                                <p className="mb-6 text-lg leading-relaxed text-indigo-100">
                                    &ldquo;{testimonial.text}&rdquo;
                                </p>
                                <div>
                                    <div className="font-bold text-white">
                                        {testimonial.name}
                                    </div>
                                    <div className="text-indigo-300">
                                        {testimonial.company}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative bg-white py-32">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <h2 className="mb-8 font-bold text-gray-900">
                            Siz de Projelerimize Katılın
                        </h2>
                        <p className="mb-12 text-xl leading-relaxed text-gray-600 lg:text-2xl">
                            Hayallerinizdeki projeyi birlikte hayata geçirelim
                            ve başarı hikayenizi yazalım.
                        </p>

                        <div className="flex flex-col gap-6 sm:flex-row sm:justify-center">
                            <Link
                                href="/iletisim"
                                className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 px-12 py-6 text-xl font-bold text-white shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-indigo-500/50">
                                <span className="relative z-10 flex items-center justify-center">
                                    Projenizi Başlatın
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
                                href="/hizmetlerimiz"
                                className="group inline-flex items-center justify-center rounded-2xl border-2 border-indigo-600 bg-transparent px-12 py-6 text-xl font-bold text-indigo-600 transition-all duration-300 hover:bg-indigo-600 hover:text-white">
                                Hizmetlerimiz
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
