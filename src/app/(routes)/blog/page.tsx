import Link from 'next/link';

export default function BlogPage() {
    const featuredPost = {
        id: 1,
        title: '2024 Web Tasarım Trendleri: Geleceğin Dijital Deneyimleri',
        excerpt:
            'Bu yıl web tasarımında öne çıkan trendler ve gelecek yıla dair öngörüler...',
        category: 'Web Tasarım',
        author: 'Vorthx Ekibi',
        date: '15 Aralık 2024',
        readTime: '8 dk okuma',
        image: '/blog/featured.jpg',
        tags: ['Web Tasarım', 'Trendler', '2024'],
    };

    const blogPosts = [
        {
            id: 2,
            title: 'SEO Optimizasyonu: Google İlk Sırada Görünme Rehberi',
            excerpt:
                "Web sitenizin Google'da üst sıralarda yer alması için uygulamanız gereken stratejiler...",
            category: 'SEO',
            author: 'Ali Veli',
            date: '12 Aralık 2024',
            readTime: '6 dk okuma',
            image: '/blog/seo.jpg',
            tags: ['SEO', 'Google', 'Optimizasyon'],
            gradient: 'from-green-500 to-emerald-600',
        },
        {
            id: 3,
            title: "React vs Vue.js: Hangi Framework'ü Seçmeli?",
            excerpt:
                "Modern web geliştirmede en popüler iki framework'ün detaylı karşılaştırması...",
            category: 'Geliştirme',
            author: 'Ahmet Yılmaz',
            date: '10 Aralık 2024',
            readTime: '10 dk okuma',
            image: '/blog/react-vue.jpg',
            tags: ['React', 'Vue.js', 'Frontend'],
            gradient: 'from-blue-500 to-cyan-600',
        },
        {
            id: 4,
            title: 'E-Ticaret Sitesi Nasıl Kurulur? Adım Adım Rehber',
            excerpt:
                'Sıfırdan e-ticaret sitesi kurma sürecinin tüm detayları ve ipuçları...',
            category: 'E-Ticaret',
            author: 'Ayşe Demir',
            date: '8 Aralık 2024',
            readTime: '12 dk okuma',
            image: '/blog/ecommerce.jpg',
            tags: ['E-Ticaret', 'Online Satış', 'Web Tasarım'],
            gradient: 'from-purple-500 to-pink-600',
        },
        {
            id: 5,
            title: 'Mobil Uygulama Geliştirme: Native vs Hybrid',
            excerpt:
                'Mobil uygulama geliştirmede doğru yaklaşımı seçmek için bilmeniz gerekenler...',
            category: 'Mobil',
            author: 'Mehmet Kaya',
            date: '5 Aralık 2024',
            readTime: '7 dk okuma',
            image: '/blog/mobile.jpg',
            tags: ['Mobil', 'Native', 'Hybrid'],
            gradient: 'from-orange-500 to-red-600',
        },
        {
            id: 6,
            title: 'Dijital Pazarlama Stratejileri: 2024 Rehberi',
            excerpt:
                'Başarılı dijital pazarlama kampanyaları için uygulamanız gereken stratejiler...',
            category: 'Pazarlama',
            author: 'Zeynep Özkan',
            date: '3 Aralık 2024',
            readTime: '9 dk okuma',
            image: '/blog/marketing.jpg',
            tags: ['Dijital Pazarlama', 'Strateji', 'ROI'],
            gradient: 'from-indigo-500 to-purple-600',
        },
        {
            id: 7,
            title: 'UI/UX Tasarımında Renk Psikolojisi',
            excerpt:
                'Renklerin kullanıcı deneyimi üzerindeki etkisi ve doğru renk paleti seçimi...',
            category: 'UI/UX',
            author: 'Fatma Yıldız',
            date: '1 Aralık 2024',
            readTime: '5 dk okuma',
            image: '/blog/colors.jpg',
            tags: ['UI/UX', 'Renk', 'Psikoloji'],
            gradient: 'from-pink-500 to-rose-600',
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
                        <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-50 to-purple-50 shadow-2xl transition-all duration-700 hover:shadow-indigo-500/20">
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                {/* Image */}
                                <div className="relative aspect-video lg:aspect-auto">
                                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600">
                                        <div className="text-center text-white">
                                            <svg
                                                className="mx-auto mb-4 h-20 w-20 opacity-60"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                                                />
                                            </svg>
                                            <p className="text-xl opacity-80">
                                                Featured Article
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-12">
                                    <div className="mb-4 flex items-center gap-4">
                                        <span className="rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-2 text-sm font-bold text-white">
                                            {featuredPost.category}
                                        </span>
                                        <span className="text-sm text-gray-500">
                                            {featuredPost.readTime}
                                        </span>
                                    </div>

                                    <h3 className="mb-6 text-3xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-indigo-600">
                                        {featuredPost.title}
                                    </h3>

                                    <p className="mb-8 text-lg leading-relaxed text-gray-600">
                                        {featuredPost.excerpt}
                                    </p>

                                    <div className="mb-8 flex flex-wrap gap-2">
                                        {featuredPost.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="rounded-lg bg-gray-100 px-3 py-1 text-sm text-gray-700">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 font-bold text-white">
                                                {featuredPost.author.charAt(0)}
                                            </div>
                                            <div>
                                                <div className="font-bold text-gray-900">
                                                    {featuredPost.author}
                                                </div>
                                                <div className="text-sm text-gray-500">
                                                    {featuredPost.date}
                                                </div>
                                            </div>
                                        </div>

                                        <Link
                                            href={`/blog/${featuredPost.id}`}
                                            className="group/btn inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl">
                                            Makaleyi Oku
                                            <svg
                                                className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1"
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
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                    <select className="rounded-xl border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-indigo-500 focus:outline-none">
                                        <option>En Yeni</option>
                                        <option>En Popüler</option>
                                        <option>A-Z</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                                {blogPosts.map((post, index) => (
                                    <article
                                        key={post.id}
                                        className="group relative overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl"
                                        style={{
                                            animationDelay: `${index * 100}ms`,
                                        }}>
                                        {/* Post Image */}
                                        <div className="relative aspect-video overflow-hidden">
                                            <div
                                                className={`h-full w-full bg-gradient-to-br ${post.gradient} flex items-center justify-center`}>
                                                <div className="text-center text-white">
                                                    <svg
                                                        className="mx-auto mb-2 h-12 w-12 opacity-60"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24">
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                                                        />
                                                    </svg>
                                                    <p className="text-sm opacity-80">
                                                        {post.category}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Category Badge */}
                                            <div
                                                className={`absolute top-4 left-4 rounded-full bg-gradient-to-r ${post.gradient} px-3 py-1 text-xs font-bold text-white`}>
                                                {post.category}
                                            </div>

                                            {/* Overlay */}
                                            <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/10"></div>
                                        </div>

                                        {/* Post Content */}
                                        <div className="p-6">
                                            <div className="mb-3 flex items-center gap-4 text-sm text-gray-500">
                                                <span>{post.date}</span>
                                                <span>•</span>
                                                <span>{post.readTime}</span>
                                            </div>

                                            <h3 className="mb-4 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-indigo-600">
                                                <Link href={`/blog/${post.id}`}>
                                                    {post.title}
                                                </Link>
                                            </h3>

                                            <p className="mb-4 leading-relaxed text-gray-600">
                                                {post.excerpt}
                                            </p>

                                            <div className="mb-4 flex flex-wrap gap-1">
                                                {post.tags
                                                    .slice(0, 2)
                                                    .map((tag, tagIndex) => (
                                                        <span
                                                            key={tagIndex}
                                                            className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-700">
                                                            {tag}
                                                        </span>
                                                    ))}
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <div
                                                        className={`h-8 w-8 rounded-full bg-gradient-to-r ${post.gradient} flex items-center justify-center text-sm font-bold text-white`}>
                                                        {post.author.charAt(0)}
                                                    </div>
                                                    <span className="text-sm font-medium text-gray-700">
                                                        {post.author}
                                                    </span>
                                                </div>

                                                <Link
                                                    href={`/blog/${post.id}`}
                                                    className="group/link flex items-center gap-2 text-sm font-medium text-indigo-600 transition-colors duration-300 hover:text-indigo-700">
                                                    Devamı
                                                    <svg
                                                        className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1"
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
                                                </Link>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>

                            {/* Pagination */}
                            <div className="mt-16 flex justify-center">
                                <div className="flex items-center gap-2">
                                    <button className="rounded-xl bg-gray-200 px-4 py-2 text-gray-500 transition-colors duration-300 hover:bg-gray-300">
                                        Önceki
                                    </button>
                                    <button className="rounded-xl bg-indigo-600 px-4 py-2 text-white">
                                        1
                                    </button>
                                    <button className="rounded-xl bg-gray-200 px-4 py-2 text-gray-700 transition-colors duration-300 hover:bg-gray-300">
                                        2
                                    </button>
                                    <button className="rounded-xl bg-gray-200 px-4 py-2 text-gray-700 transition-colors duration-300 hover:bg-gray-300">
                                        3
                                    </button>
                                    <span className="px-2 text-gray-500">
                                        ...
                                    </span>
                                    <button className="rounded-xl bg-gray-200 px-4 py-2 text-gray-500 transition-colors duration-300 hover:bg-gray-300">
                                        Sonraki
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            {/* Search */}
                            <div className="rounded-3xl bg-white p-8 shadow-xl">
                                <h3 className="mb-6 text-2xl font-bold text-gray-900">
                                    Arama
                                </h3>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Makale ara..."
                                        className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-6 py-4 pr-12 focus:border-indigo-500 focus:bg-white focus:outline-none"
                                    />
                                    <button className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400 hover:text-indigo-600">
                                        <svg
                                            className="h-5 w-5"
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
                                    </button>
                                </div>
                            </div>

                            {/* Categories */}
                            <div className="rounded-3xl bg-white p-8 shadow-xl">
                                <h3 className="mb-6 text-2xl font-bold text-gray-900">
                                    Kategoriler
                                </h3>
                                <div className="space-y-3">
                                    {categories.map((category, index) => (
                                        <button
                                            key={index}
                                            className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left transition-all duration-300 ${
                                                category.active
                                                    ? 'bg-indigo-600 text-white'
                                                    : 'bg-gray-50 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600'
                                            }`}>
                                            <span className="font-medium">
                                                {category.name}
                                            </span>
                                            <span
                                                className={`rounded-full px-2 py-1 text-xs ${
                                                    category.active
                                                        ? 'bg-white/20'
                                                        : 'bg-gray-200'
                                                }`}>
                                                {category.count}
                                            </span>
                                        </button>
                                    ))}
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
                                <div className="space-y-4">
                                    <input
                                        type="email"
                                        placeholder="E-posta adresiniz"
                                        className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/70 backdrop-blur-sm focus:border-white/40 focus:outline-none"
                                    />
                                    <button className="w-full rounded-xl bg-white px-6 py-3 font-bold text-indigo-600 transition-all duration-300 hover:bg-gray-100">
                                        Abone Ol
                                    </button>
                                </div>
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
