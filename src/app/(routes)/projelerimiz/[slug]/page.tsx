import {
    ArrowLeft,
    Calendar,
    Clock,
    ExternalLink,
    Github,
    Globe,
    Star,
    Users,
} from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Proje verileri - gerçek uygulamada bu veriler API'den veya CMS'den gelecek
const projects = [
    {
        slug: 'e-ticaret-platformu',
        title: 'E-Ticaret Platformu',
        category: 'E-Ticaret',
        description: 'Modern ve kullanıcı dostu e-ticaret platformu tasarımı',
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

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function ProjectDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="w-full overflow-hidden">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 py-32">
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-20 h-72 w-72 animate-pulse rounded-full bg-indigo-500/20 blur-xl"></div>
                    <div className="absolute right-20 bottom-20 h-96 w-96 animate-pulse rounded-full bg-purple-500/20 blur-xl delay-700"></div>
                </div>

                <div className="relative container mx-auto px-6 lg:px-8">
                    {/* Back Button */}
                    <div className="mb-8">
                        <Link
                            href="/projelerimiz"
                            className="group inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-6 py-3 text-sm font-medium text-indigo-300 backdrop-blur-sm transition-all duration-300 hover:bg-indigo-500/20">
                            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                            Projelere Dön
                        </Link>
                    </div>

                    <div className="mx-auto max-w-4xl">
                        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-6 py-3 text-sm font-medium text-indigo-300 backdrop-blur-sm">
                            <div className="h-2 w-2 animate-pulse rounded-full bg-indigo-400"></div>
                            {project.category}
                        </div>

                        <h1 className="mb-8 font-bold text-white">
                            {project.title}
                        </h1>

                        <p className="mb-12 text-2xl leading-relaxed text-indigo-100 lg:text-3xl">
                            {project.longDescription}
                        </p>

                        {/* Project Meta */}
                        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                            <div className="flex items-center gap-3 text-indigo-300">
                                <Calendar className="h-5 w-5" />
                                <span className="text-sm">{project.year}</span>
                            </div>
                            <div className="flex items-center gap-3 text-indigo-300">
                                <Clock className="h-5 w-5" />
                                <span className="text-sm">
                                    {project.duration}
                                </span>
                            </div>
                            <div className="flex items-center gap-3 text-indigo-300">
                                <Users className="h-5 w-5" />
                                <span className="text-sm">{project.team}</span>
                            </div>
                            <div className="flex items-center gap-3 text-indigo-300">
                                <Star className="h-5 w-5" />
                                <span className="text-sm">
                                    {project.status}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Details */}
            <section className="relative bg-white py-32">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
                        {/* Left Column - Project Info */}
                        <div className="space-y-12">
                            {/* Technologies */}
                            <div>
                                <h3 className="mb-6 text-2xl font-bold text-slate-900">
                                    Kullanılan Teknolojiler
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {project.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-2 text-sm font-semibold text-white">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Features */}
                            <div>
                                <h3 className="mb-6 text-2xl font-bold text-slate-900">
                                    Özellikler
                                </h3>
                                <ul className="space-y-3">
                                    {project.features.map((feature, index) => (
                                        <li
                                            key={index}
                                            className="flex items-center gap-3 text-slate-700">
                                            <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Challenges & Solutions */}
                            <div>
                                <h3 className="mb-6 text-2xl font-bold text-slate-900">
                                    Zorluklar ve Çözümler
                                </h3>
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="mb-3 font-semibold text-red-600">
                                            Zorluklar:
                                        </h4>
                                        <ul className="space-y-2">
                                            {project.challenges.map(
                                                (challenge, index) => (
                                                    <li
                                                        key={index}
                                                        className="flex items-center gap-3 text-slate-700">
                                                        <div className="h-2 w-2 rounded-full bg-red-500"></div>
                                                        {challenge}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="mb-3 font-semibold text-green-600">
                                            Çözümler:
                                        </h4>
                                        <ul className="space-y-2">
                                            {project.solutions.map(
                                                (solution, index) => (
                                                    <li
                                                        key={index}
                                                        className="flex items-center gap-3 text-slate-700">
                                                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                                                        {solution}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Results & Links */}
                        <div className="space-y-12">
                            {/* Results */}
                            <div>
                                <h3 className="mb-6 text-2xl font-bold text-slate-900">
                                    Sonuçlar
                                </h3>
                                <div className="space-y-4">
                                    {project.results.map((result, index) => (
                                        <div
                                            key={index}
                                            className="rounded-2xl border border-green-200 bg-gradient-to-r from-green-50 to-emerald-50 p-6">
                                            <p className="font-semibold text-green-800">
                                                {result}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Links */}
                            <div>
                                <h3 className="mb-6 text-2xl font-bold text-slate-900">
                                    Proje Linkleri
                                </h3>
                                <div className="space-y-4">
                                    {project.liveUrl && (
                                        <Link
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-blue-300 hover:shadow-lg">
                                            <div className="flex items-center gap-4">
                                                <Globe className="h-6 w-6 text-blue-600" />
                                                <div>
                                                    <div className="font-semibold text-slate-900">
                                                        Canlı Site
                                                    </div>
                                                    <div className="text-sm text-slate-500">
                                                        {project.liveUrl}
                                                    </div>
                                                </div>
                                            </div>
                                            <ExternalLink className="h-5 w-5 text-slate-400 transition-transform duration-300 group-hover:translate-x-1" />
                                        </Link>
                                    )}

                                    <Link
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-gray-400 hover:shadow-lg">
                                        <div className="flex items-center gap-4">
                                            <Github className="h-6 w-6 text-slate-900" />
                                            <div>
                                                <div className="font-semibold text-slate-900">
                                                    GitHub
                                                </div>
                                                <div className="text-sm text-slate-500">
                                                    Kaynak kod
                                                </div>
                                            </div>
                                        </div>
                                        <ExternalLink className="h-5 w-5 text-slate-400 transition-transform duration-300 group-hover:translate-x-1" />
                                    </Link>
                                </div>
                            </div>

                            {/* Client Info */}
                            <div className="rounded-2xl bg-gradient-to-r from-slate-50 to-gray-50 p-8">
                                <h3 className="mb-4 text-xl font-bold text-slate-900">
                                    Müşteri Bilgileri
                                </h3>
                                <div className="space-y-3">
                                    <div>
                                        <span className="text-sm font-medium text-slate-500">
                                            Müşteri:
                                        </span>
                                        <div className="font-semibold text-slate-900">
                                            {project.client}
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-sm font-medium text-slate-500">
                                            Kategori:
                                        </span>
                                        <div className="font-semibold text-slate-900">
                                            {project.category}
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-sm font-medium text-slate-500">
                                            Durum:
                                        </span>
                                        <div className="font-semibold text-slate-900">
                                            {project.status}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative bg-gradient-to-r from-indigo-600 to-purple-600 py-32">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <h2 className="mb-8 font-bold text-white">
                            Benzer Bir Proje mi Düşünüyorsunuz?
                        </h2>
                        <p className="mb-12 text-xl leading-relaxed text-indigo-100">
                            Bu projeye benzer bir çözüm için bizimle iletişime
                            geçin. Uzman ekibimiz size özel çözümler sunacaktır.
                        </p>

                        <div className="flex flex-col gap-6 sm:flex-row sm:justify-center">
                            <Link
                                href="/iletisim"
                                className="group inline-flex items-center justify-center rounded-2xl bg-white px-12 py-6 text-xl font-bold text-indigo-600 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                                Projenizi Başlatın
                                <ArrowLeft className="ml-3 h-6 w-6 rotate-180 transition-transform duration-300 group-hover:translate-x-2" />
                            </Link>

                            <Link
                                href="/projelerimiz"
                                className="group inline-flex items-center justify-center rounded-2xl border-2 border-white bg-transparent px-12 py-6 text-xl font-bold text-white transition-all duration-300 hover:bg-white hover:text-indigo-600">
                                Diğer Projeler
                                <ArrowLeft className="ml-3 h-6 w-6 transition-transform duration-300 group-hover:-translate-x-2" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
