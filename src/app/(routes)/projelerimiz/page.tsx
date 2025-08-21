import Link from 'next/link';
import ProjectsFilter from './components/projects-filter';

export default function Page() {
    const projects = [
        {
            id: 1,
            title: 'E-Ticaret Platformu',
            category: 'E-Ticaret',
            description:
                'Modern ve kullanıcı dostu e-ticaret platformu tasarımı',
            image: '/projects/ecommerce.jpg',
            technologies: ['React', 'Node.js', 'MongoDB'],
            year: '2024',
            status: 'Tamamlandı',
            gradient: 'from-blue-500 to-indigo-600',
        },
        {
            id: 2,
            title: 'Kurumsal Web Sitesi',
            category: 'Web Tasarım',
            description: 'Responsive ve SEO optimize kurumsal web sitesi',
            image: '/projects/corporate.jpg',
            technologies: ['Next.js', 'TypeScript', 'Tailwind'],
            year: '2024',
            status: 'Tamamlandı',
            gradient: 'from-emerald-500 to-green-600',
        },
        {
            id: 3,
            title: 'Mobil Fitness Uygulaması',
            category: 'Mobil Uygulama',
            description: 'iOS ve Android fitness takip uygulaması',
            image: '/projects/fitness.jpg',
            technologies: ['React Native', 'Firebase', 'Redux'],
            year: '2024',
            status: 'Geliştirme Aşamasında',
            gradient: 'from-purple-500 to-pink-600',
        },
        {
            id: 4,
            title: 'Restaurant Yönetim Sistemi',
            category: 'Web Uygulama',
            description: 'Kompleks restaurant yönetim ve sipariş sistemi',
            image: '/projects/restaurant.jpg',
            technologies: ['Vue.js', 'Laravel', 'MySQL'],
            year: '2023',
            status: 'Tamamlandı',
            gradient: 'from-orange-500 to-red-600',
        },
        {
            id: 5,
            title: 'Fintech Dashboard',
            category: 'Web Uygulama',
            description: 'Finansal verileri analiz eden admin paneli',
            image: '/projects/fintech.jpg',
            technologies: ['React', 'D3.js', 'Python'],
            year: '2023',
            status: 'Tamamlandı',
            gradient: 'from-cyan-500 to-blue-600',
        },
        {
            id: 6,
            title: 'Eğitim Platformu',
            category: 'Web Uygulama',
            description: 'Online eğitim ve kurs yönetim platformu',
            image: '/projects/education.jpg',
            technologies: ['React', 'Node.js', 'PostgreSQL'],
            year: '2023',
            status: 'Tamamlandı',
            gradient: 'from-pink-500 to-purple-600',
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
                                    "{testimonial.text}"
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
