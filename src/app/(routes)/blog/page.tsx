import Link from 'next/link';
import BlogPosts from './components/blog-posts';
import Categories from './components/categories';
import FeaturedPost from './components/featured-post';
import Newsletter from './components/newsletter';
import Pagination from './components/pagination';
import Search from './components/search';
import SortDropdown from './components/sort-dropdown';

export default async function BlogPage() {
    const featuredPost = {
        id: 1,
        title: '2024 Web Tasarım Trendleri: Geleceğin Dijital Deneyimleri',
        description:
            'Bu yıl web tasarımında öne çıkan trendler ve gelecek yıla dair öngörüler...',
        excerpt:
            'Bu yıl web tasarımında öne çıkan trendler ve gelecek yıla dair öngörüler...',
        category: 'Web Tasarım',
        author: 'Vorthx Ekibi',
        date: '15 Aralık 2024',
        readTime: '8 dk okuma',
        image: '/blog/featured.jpg',
        tags: ['Web Tasarım', 'Trendler', '2024'],
        gradient: 'from-blue-500 to-indigo-600',
        slug: '2024-web-tasarim-trendleri',
    };

    const posts = [
        {
            id: 2,
            title: 'SEO Optimizasyonu: Google İlk Sırada Görünme Rehberi',
            description:
                "Web sitenizin Google'da üst sıralarda yer alması için uygulamanız gereken stratejiler...",
            excerpt:
                "Web sitenizin Google'da üst sıralarda yer alması için uygulamanız gereken stratejiler...",
            category: 'SEO',
            author: 'Ali Veli',
            date: '12 Aralık 2024',
            readTime: '6 dk okuma',
            image: '/blog/seo.jpg',
            tags: ['SEO', 'Google', 'Optimizasyon'],
            gradient: 'from-green-500 to-emerald-600',
            slug: 'seo-optimizasyonu-google-ilk-sirada',
        },
        {
            id: 3,
            title: "React vs Vue.js: Hangi Framework'ü Seçmeli?",
            description:
                "Modern web geliştirmede en popüler iki framework'ün detaylı karşılaştırması...",
            excerpt:
                "Modern web geliştirmede en popüler iki framework'ün detaylı karşılaştırması...",
            category: 'Geliştirme',
            author: 'Ahmet Yılmaz',
            date: '10 Aralık 2024',
            readTime: '10 dk okuma',
            image: '/blog/react-vue.jpg',
            tags: ['React', 'Vue.js', 'Frontend'],
            gradient: 'from-blue-500 to-cyan-600',
            slug: 'react-vs-vuejs-karsilastirma',
        },
        {
            id: 4,
            title: 'E-Ticaret Sitesi Nasıl Kurulur? Adım Adım Rehber',
            description:
                'Sıfırdan e-ticaret sitesi kurma sürecinin tüm detayları ve ipuçları...',
            excerpt:
                'Sıfırdan e-ticaret sitesi kurma sürecinin tüm detayları ve ipuçları...',
            category: 'E-Ticaret',
            author: 'Ayşe Demir',
            date: '8 Aralık 2024',
            readTime: '12 dk okuma',
            image: '/blog/ecommerce.jpg',
            tags: ['E-Ticaret', 'Online Satış', 'Web Tasarım'],
            gradient: 'from-purple-500 to-pink-600',
            slug: 'e-ticaret-sitesi-kurma-rehberi',
        },
        {
            id: 5,
            title: 'Mobil Uygulama Geliştirme: Native vs Hybrid',
            description:
                'Mobil uygulama geliştirmede doğru yaklaşımı seçmek için bilmeniz gerekenler...',
            excerpt:
                'Mobil uygulama geliştirmede doğru yaklaşımı seçmek için bilmeniz gerekenler...',
            category: 'Mobil',
            author: 'Mehmet Kaya',
            date: '5 Aralık 2024',
            readTime: '7 dk okuma',
            image: '/blog/mobile.jpg',
            tags: ['Mobil', 'Native', 'Hybrid'],
            gradient: 'from-orange-500 to-red-600',
            slug: 'mobil-uygulama-native-vs-hybrid',
        },
        {
            id: 6,
            title: 'Dijital Pazarlama Stratejileri: 2024 Rehberi',
            description:
                'Başarılı dijital pazarlama kampanyaları için uygulamanız gereken stratejiler...',
            excerpt:
                'Başarılı dijital pazarlama kampanyaları için uygulamanız gereken stratejiler...',
            category: 'Pazarlama',
            author: 'Zeynep Özkan',
            date: '3 Aralık 2024',
            readTime: '9 dk okuma',
            image: '/blog/marketing.jpg',
            tags: ['Dijital Pazarlama', 'Strateji', 'ROI'],
            gradient: 'from-indigo-500 to-purple-600',
            slug: 'dijital-pazarlama-stratejileri-2024',
        },
        {
            id: 7,
            title: 'UI/UX Tasarımında Renk Psikolojisi',
            description:
                'Renklerin kullanıcı deneyimi üzerindeki etkisi ve doğru renk paleti seçimi...',
            excerpt:
                'Renklerin kullanıcı deneyimi üzerindeki etkisi ve doğru renk paleti seçimi...',
            category: 'UI/UX',
            author: 'Fatma Yıldız',
            date: '1 Aralık 2024',
            readTime: '5 dk okuma',
            image: '/blog/colors.jpg',
            tags: ['UI/UX', 'Renk', 'Psikoloji'],
            gradient: 'from-pink-500 to-rose-600',
            slug: 'ui-ux-renk-psikolojisi',
        },
    ];

    const categories = [
        { name: 'Tümü', count: 25, active: true },
        { name: 'Web Tasarım', count: 8, active: false },
        { name: 'SEO', count: 6, active: false },
        { name: 'Geliştirme', count: 5, active: false },
        { name: 'E-Ticaret', count: 4, active: false },
        { name: 'Mobil', count: 2, active: false },
    ];

    const popularTags = [
        'Web Tasarım',
        'SEO',
        'React',
        'E-Ticaret',
        'UI/UX',
        'Mobil',
        'JavaScript',
        'WordPress',
        'Pazarlama',
        'Optimizasyon',
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
                            Bilgi & İpuçları
                        </div>

                        <h1 className="mb-8 font-bold text-white">Blog</h1>

                        <p className="text-2xl leading-relaxed text-indigo-100 lg:text-3xl">
                            Dijital dünyada güncel kalmanızı sağlayan rehberler,
                            trendler ve ipuçları.
                        </p>
                    </div>
                </div>
            </section>

            {/* Featured Post */}
            <section className="relative bg-white py-20">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl">
                            Öne Çıkan Makale
                        </h2>
                        <p className="text-xl text-gray-600">
                            Bu haftanın en çok okunan içeriği
                        </p>
                    </div>

                    <div className="mx-auto max-w-6xl">
                        <FeaturedPost data={featuredPost} />
                    </div>
                </div>
            </section>

            {/* Blog Posts & Sidebar */}
            <section className="relative bg-gradient-to-br from-gray-50 to-indigo-50/30 py-20">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
                        {/* Blog Posts */}
                        <div className="lg:col-span-2">
                            <div className="mb-12 flex items-center justify-between">
                                <h2 className="text-3xl font-bold text-gray-900">
                                    Son Makaleler
                                </h2>
                                <div className="flex items-center gap-4">
                                    <SortDropdown />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                                <BlogPosts data={posts} />
                            </div>

                            {/* Pagination */}
                            <div className="mt-16 flex justify-center">
                                <Pagination />
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            {/* Search */}
                            <Search />

                            {/* Categories */}
                            <div className="rounded-3xl bg-white p-8 shadow-xl">
                                <h3 className="mb-6 text-2xl font-bold text-gray-900">
                                    Kategoriler
                                </h3>
                                <div className="space-y-3">
                                    <Categories data={categories} />
                                </div>
                            </div>

                            {/* Popular Tags */}
                            <div className="rounded-3xl bg-white p-8 shadow-xl">
                                <h3 className="mb-6 text-2xl font-bold text-gray-900">
                                    Popüler Etiketler
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {popularTags.map((tag, index) => (
                                        <button
                                            key={index}
                                            className="rounded-xl bg-gray-100 px-3 py-2 text-sm text-gray-700 transition-all duration-300 hover:bg-indigo-600 hover:text-white">
                                            {tag}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Newsletter */}
                            <div className="rounded-3xl bg-gradient-to-br from-indigo-600 to-purple-600 p-8 text-white shadow-xl">
                                <h3 className="mb-4 text-2xl font-bold">
                                    Bülten
                                </h3>
                                <p className="mb-6 text-indigo-100">
                                    Yeni makalelerimizden haberdar olmak için
                                    bültenimize abone olun.
                                </p>
                                <Newsletter />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="relative bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 py-32">
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-20 h-72 w-72 animate-pulse rounded-full bg-indigo-500/20 blur-xl"></div>
                    <div className="absolute right-20 bottom-20 h-72 w-72 animate-pulse rounded-full bg-purple-500/20 blur-xl delay-700"></div>
                </div>

                <div className="relative container mx-auto px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <h2 className="mb-8 font-bold text-white">
                            Düzenli İçerik Üretiyoruz
                        </h2>
                        <p className="mb-12 text-xl leading-relaxed text-indigo-100 lg:text-2xl">
                            Dijital dünyada güncel kalmak için haftalık
                            rehberler ve ipuçları alın.
                        </p>

                        <div className="flex flex-col gap-6 sm:flex-row sm:justify-center">
                            <Link
                                href="/iletisim"
                                className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 px-12 py-6 text-xl font-bold text-white shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-indigo-500/50">
                                <span className="relative z-10 flex items-center justify-center">
                                    İletişime Geçin
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
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
