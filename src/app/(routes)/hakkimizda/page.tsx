import Link from 'next/link';

export default function HakkimizdaPage() {
    const team = [
        {
            name: 'Ahmet Yılmaz',
            role: 'Kurucu & CEO',
            bio: '10+ yıllık teknoloji deneyimi ile dijital dünyada innovatif çözümler geliştiriyor.',
            image: '/team/ceo.jpg',
            skills: ['Strateji', 'İnovasyon', 'Liderlik'],
        },
        {
            name: 'Ayşe Demir',
            role: 'Kreatif Direktör',
            bio: 'Yaratıcı tasarımları ile markaları dijital dünyada öne çıkarıyor.',
            image: '/team/creative.jpg',
            skills: ['UI/UX', 'Branding', 'Yaratıcılık'],
        },
        {
            name: 'Mehmet Kaya',
            role: 'Teknik Direktör',
            bio: 'En güncel teknolojilerle performanslı ve güvenli çözümler geliştiriyor.',
            image: '/team/tech.jpg',
            skills: ['Development', 'DevOps', 'Security'],
        },
        {
            name: 'Zeynep Arslan',
            role: 'Dijital Pazarlama Uzmanı',
            bio: 'Veri odaklı yaklaşımlarla markaları hedef kitlelerine ulaştırıyor.',
            image: '/team/marketing.jpg',
            skills: ['SEO', 'Analytics', 'Growth'],
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
                            Hikayemiz
                        </div>

                        <h1 className="mb-8 font-bold text-white">
                            Hakkımızda
                        </h1>

                        <p className="text-2xl leading-relaxed text-indigo-100 lg:text-3xl">
                            Dijital dünyada iz bırakan çözümler geliştiren,
                            yenilikçi ve tutkulu bir ekibiz.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="relative bg-white py-32">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
                        {/* Mission */}
                        <div className="group relative">
                            <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 blur transition duration-1000 group-hover:opacity-20"></div>
                            <div className="relative rounded-3xl bg-gradient-to-br from-indigo-50 to-purple-50 p-12">
                                <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600">
                                    <svg
                                        className="h-8 w-8 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M13 10V3L4 14h7v7l9-11h-7z"
                                        />
                                    </svg>
                                </div>
                                <h2 className="mb-6 font-bold text-gray-900">
                                    Misyonumuz
                                </h2>
                                <p className="text-xl leading-relaxed text-gray-600">
                                    İşletmelerin dijital dönüşüm süreçlerinde
                                    güvenilir ortağı olmak, teknoloji ve
                                    yaratıcılığı harmanlayarak değer yaratan
                                    çözümler sunmak.
                                </p>
                            </div>
                        </div>

                        {/* Vision */}
                        <div className="group relative">
                            <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-purple-500 to-pink-600 opacity-0 blur transition duration-1000 group-hover:opacity-20"></div>
                            <div className="relative rounded-3xl bg-gradient-to-br from-purple-50 to-pink-50 p-12">
                                <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600">
                                    <svg
                                        className="h-8 w-8 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                        />
                                    </svg>
                                </div>
                                <h2 className="mb-6 font-bold text-gray-900">
                                    Vizyonumuz
                                </h2>
                                <p className="text-xl leading-relaxed text-gray-600">
                                    Dijital dünyada global standartlarda
                                    çözümler üreten, inovasyon odaklı bir
                                    teknoloji şirketi olmak.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="relative bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 py-32">
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-20 h-72 w-72 animate-pulse rounded-full bg-indigo-500/20 blur-xl"></div>
                    <div className="absolute right-20 bottom-20 h-72 w-72 animate-pulse rounded-full bg-purple-500/20 blur-xl delay-700"></div>
                </div>

                <div className="relative container mx-auto px-6 lg:px-8">
                    <div className="mb-24 text-center">
                        <h2 className="mb-8 font-bold text-white">Ekibimiz</h2>
                        <p className="mx-auto max-w-3xl text-xl leading-relaxed text-indigo-100">
                            Farklı uzmanlık alanlarından gelen tutkulu
                            profesyoneller.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
                        {team.map((member, index) => (
                            <div
                                key={index}
                                className="group text-center"
                                style={{ animationDelay: `${index * 100}ms` }}>
                                <div className="relative mb-6">
                                    <div className="mx-auto h-40 w-40 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 p-1 transition-all duration-500 group-hover:scale-105 group-hover:rotate-3">
                                        <div className="flex h-full w-full items-center justify-center rounded-full bg-gray-200">
                                            <svg
                                                className="h-16 w-16 text-gray-400"
                                                fill="currentColor"
                                                viewBox="0 0 24 24">
                                                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <h3 className="mb-2 text-xl font-bold text-white">
                                    {member.name}
                                </h3>
                                <div className="mb-4 text-indigo-300">
                                    {member.role}
                                </div>
                                <p className="mb-6 text-sm leading-relaxed text-gray-300">
                                    {member.bio}
                                </p>

                                <div className="flex flex-wrap justify-center gap-2">
                                    {member.skills.map((skill, skillIndex) => (
                                        <span
                                            key={skillIndex}
                                            className="rounded-full bg-white/10 px-3 py-1 text-xs text-indigo-200 backdrop-blur-sm">
                                            {skill}
                                        </span>
                                    ))}
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
                            Birlikte Çalışmaya Hazır mısınız?
                        </h2>
                        <p className="mb-12 text-xl leading-relaxed text-gray-600 lg:text-2xl">
                            Sizinle tanışmak ve projelerinizde nasıl değer
                            katabileceğimizi konuşmak isteriz.
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
