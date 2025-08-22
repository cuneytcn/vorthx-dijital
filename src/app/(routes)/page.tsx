import { siteConfig } from '@/config/site.config';
import Link from 'next/link';

export default function Page() {
    return (
        <div className="w-full overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-indigo-900">
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

                <div className="relative container mx-auto flex min-h-screen items-center px-6 py-20 lg:px-8 lg:py-32">
                    <div className="grid w-full grid-cols-1 gap-20 lg:grid-cols-2 lg:gap-24">
                        <div className="flex flex-col justify-center space-y-8">
                            {/* Badge */}
                            <div className="group">
                                <span className="inline-flex items-center gap-3 rounded-2xl border border-indigo-400/30 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 px-6 py-3 text-sm font-medium text-indigo-300 backdrop-blur-sm transition-all duration-300 hover:border-indigo-400/50">
                                    <div className="relative">
                                        <div className="h-2 w-2 animate-ping rounded-full bg-indigo-400"></div>
                                        <div className="absolute top-0 h-2 w-2 rounded-full bg-indigo-400"></div>
                                    </div>
                                    Dijital Dönüşümde Öncü
                                </span>
                            </div>

                            {/* Main Title */}
                            <div className="space-y-6">
                                <h1 className="leading-tight font-bold text-white">
                                    <span className="block">Dijital</span>
                                    <span className="block animate-pulse bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                        Mükemmellik
                                    </span>
                                </h1>

                                <div className="h-1 w-20 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"></div>
                            </div>

                            {/* Description */}
                            <p className="max-w-2xl text-2xl leading-relaxed text-gray-300 lg:text-3xl">
                                Markanızı dijital dünyada{' '}
                                <span className="font-semibold text-indigo-400">
                                    zirveye
                                </span>{' '}
                                taşıyacak vizyoner çözümler sunuyoruz.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col gap-6 pt-4 sm:flex-row">
                                <Link
                                    href="/hizmetlerimiz"
                                    className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 px-10 py-5 text-xl font-bold text-white transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/50">
                                    <span className="relative z-10 flex items-center">
                                        Keşfetmeye Başlayın
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
                                    className="group inline-flex items-center justify-center rounded-2xl border-2 border-gray-600 bg-transparent px-10 py-5 text-xl font-bold text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white/10">
                                    Portfolio
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

                        {/* Hero Cards */}
                        <div className="relative">
                            <div className="perspective-1000 grid grid-cols-2 gap-8">
                                {/* Card 1 */}
                                <div className="space-y-8">
                                    <div className="group relative transform transition-all duration-700 hover:scale-105 hover:rotate-3">
                                        <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-indigo-500 to-purple-600 opacity-60 blur transition duration-1000 group-hover:opacity-100"></div>
                                        <div className="relative rounded-3xl border border-gray-700/50 bg-gray-900/80 p-8 backdrop-blur-xl">
                                            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600">
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
                                            </div>
                                            <h3 className="mb-3 text-2xl font-bold text-white">
                                                Web Deneyimi
                                            </h3>
                                            <p className="text-gray-300">
                                                Çağın ötesinde kullanıcı
                                                deneyimi
                                            </p>
                                        </div>
                                    </div>

                                    <div className="group relative transform transition-all delay-100 duration-700 hover:scale-105 hover:-rotate-3">
                                        <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-purple-500 to-pink-600 opacity-60 blur transition duration-1000 group-hover:opacity-100"></div>
                                        <div className="relative rounded-3xl border border-gray-700/50 bg-gray-900/80 p-8 backdrop-blur-xl">
                                            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600">
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
                                            </div>
                                            <h3 className="mb-3 text-2xl font-bold text-white">
                                                Mobil İnovasyon
                                            </h3>
                                            <p className="text-gray-300">
                                                Geleceğin mobil çözümleri
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Card 2 */}
                                <div className="space-y-8 pt-16">
                                    <div className="group relative transform transition-all delay-200 duration-700 hover:scale-105 hover:rotate-3">
                                        <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-emerald-500 to-cyan-600 opacity-60 blur transition duration-1000 group-hover:opacity-100"></div>
                                        <div className="relative rounded-3xl border border-gray-700/50 bg-gray-900/80 p-8 backdrop-blur-xl">
                                            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-600">
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
                                            </div>
                                            <h3 className="mb-3 text-2xl font-bold text-white">
                                                SEO Mastery
                                            </h3>
                                            <p className="text-gray-300">
                                                Görünürlükte sınır tanımayan
                                                strateji
                                            </p>
                                        </div>
                                    </div>

                                    <div className="group relative transform transition-all delay-300 duration-700 hover:scale-105 hover:-rotate-3">
                                        <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-orange-500 to-red-600 opacity-60 blur transition duration-1000 group-hover:opacity-100"></div>
                                        <div className="relative rounded-3xl border border-gray-700/50 bg-gray-900/80 p-8 backdrop-blur-xl">
                                            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-red-600">
                                                <svg
                                                    className="h-8 w-8 text-white"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                                    />
                                                </svg>
                                            </div>
                                            <h3 className="mb-3 text-2xl font-bold text-white">
                                                Digital Strategy
                                            </h3>
                                            <p className="text-gray-300">
                                                Veriye dayalı büyüme
                                                stratejileri
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform">
                    <div className="flex flex-col items-center text-white/60">
                        <span className="mb-2 text-sm">
                            Keşfetmeye devam edin
                        </span>
                        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/30">
                            <div className="mt-2 h-3 w-1 animate-bounce rounded-full bg-white/60"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="relative bg-white py-32 lg:py-40">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3Ccircle cx='53' cy='7' r='7'/%3E%3Ccircle cx='30' cy='30' r='7'/%3E%3Ccircle cx='7' cy='53' r='7'/%3E%3Ccircle cx='53' cy='53' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}></div>
                </div>

                <div className="relative container mx-auto px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="mb-24 text-center">
                        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-6 py-2 text-sm font-medium text-indigo-700">
                            <div className="h-2 w-2 animate-pulse rounded-full bg-indigo-500"></div>
                            Hizmet Portföyümüz
                        </div>
                        <h2 className="mb-8 font-bold text-gray-900">
                            Dijital
                            <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                Çözümlerimiz
                            </span>
                        </h2>
                        <p className="mx-auto max-w-4xl text-2xl leading-relaxed text-gray-600">
                            Her bir hizmetimiz, markanızın dijital varlığını
                            güçlendirmek ve hedef kitlenizle daha etkili
                            bağlantılar kurmanız için özenle tasarlanmıştır.
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                        {siteConfig.services.map((service, index) => {
                            const gradients = [
                                'from-indigo-500 to-purple-600',
                                'from-purple-500 to-pink-600',
                                'from-pink-500 to-red-600',
                                'from-emerald-500 to-cyan-600',
                                'from-cyan-500 to-blue-600',
                                'from-orange-500 to-amber-600',
                            ];

                            const icons = [
                                <svg
                                    key="monitor"
                                    className="h-8 w-8"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>,
                                <svg
                                    key="lock"
                                    className="h-8 w-8"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                    />
                                </svg>,
                                <svg
                                    key="mobile"
                                    className="h-8 w-8"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                                    />
                                </svg>,
                                <svg
                                    key="trending"
                                    className="h-8 w-8"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                    />
                                </svg>,
                                <svg
                                    key="briefcase"
                                    className="h-8 w-8"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V1a1 1 0 011 1v7.268a2 2 0 01-.586 1.414l-2.122 2.122a1 1 0 00-.293.707V18a1 1 0 01-1 1H9a1 1 0 01-1-1v-4.395a1 1 0 00-.293-.707L5.586 10.682A2 2 0 015 9.268V2a1 1 0 011-1z"
                                    />
                                </svg>,
                                <svg
                                    key="bar-chart"
                                    className="h-8 w-8"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                    />
                                </svg>,
                            ];

                            return (
                                <Link
                                    key={index}
                                    href={service.href}
                                    className="group relative overflow-hidden rounded-3xl bg-white p-10 shadow-xl ring-1 ring-gray-100 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:ring-gray-200">
                                    {/* Card Background Effect */}
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${gradients[index]} opacity-0 transition-opacity duration-500 group-hover:opacity-5`}></div>

                                    {/* Icon */}
                                    <div className="relative mb-8">
                                        <div
                                            className={`inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${gradients[index]} text-white shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl`}>
                                            {icons[index]}
                                        </div>

                                        {/* Floating indicator */}
                                        <div
                                            className={`absolute -top-2 -right-2 h-6 w-6 rounded-full bg-gradient-to-br ${gradients[index]} opacity-0 transition-all duration-500 group-hover:animate-ping group-hover:opacity-100`}></div>
                                    </div>

                                    {/* Content */}
                                    <div className="relative">
                                        <h3 className="mb-6 text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-indigo-600">
                                            {service.name}
                                        </h3>
                                        <p className="mb-8 text-lg leading-relaxed text-gray-600">
                                            {service.description}
                                        </p>

                                        {/* CTA */}
                                        <div className="flex translate-y-4 transform items-center font-semibold text-indigo-600 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                                            Detayları Keşfedin
                                            <svg
                                                className="ml-2 h-5 w-5 transition-transform duration-500 group-hover:translate-x-2"
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
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-20 text-center">
                        <Link
                            href="/hizmetlerimiz"
                            className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 px-12 py-6 text-xl font-bold text-white shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-indigo-500/50">
                            <span className="relative z-10 flex items-center">
                                Tüm Hizmetleri Keşfedin
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
            </section>

            {/* Stats Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 py-32">
                {/* Animated Background Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 h-96 w-96 animate-pulse rounded-full bg-indigo-500/10 blur-3xl"></div>
                    <div className="absolute right-0 bottom-0 h-96 w-96 animate-pulse rounded-full bg-purple-500/10 blur-3xl delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 transform animate-pulse rounded-full bg-pink-500/5 blur-3xl delay-500"></div>
                </div>

                {/* Geometric Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                        }}></div>
                </div>

                <div className="relative container mx-auto px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="mb-20 text-center">
                        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-6 py-3 text-sm font-medium text-indigo-300 backdrop-blur-sm">
                            <div className="h-2 w-2 animate-pulse rounded-full bg-indigo-400"></div>
                            Başarı Hikayelerimiz
                        </div>
                        <h2 className="mb-6 font-bold text-white">
                            İstatistiklerle
                            <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Başarımız
                            </span>
                        </h2>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:gap-16">
                        {[
                            {
                                number: '100+',
                                label: 'Tamamlanan Proje',
                                icon: '📊',
                            },
                            {
                                number: '50+',
                                label: 'Mutlu Müşteri',
                                icon: '❤️',
                            },
                            {
                                number: '5+',
                                label: 'Yıllık Deneyim',
                                icon: '🚀',
                            },
                            {
                                number: '24/7',
                                label: 'Destek Hizmeti',
                                icon: '⚡',
                            },
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className="group relative transform text-center transition-all duration-700 hover:scale-110"
                                style={{ animationDelay: `${index * 200}ms` }}>
                                {/* Background Glow */}
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"></div>

                                {/* Card */}
                                <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg lg:p-10">
                                    {/* Icon */}
                                    <div className="mb-4 text-4xl group-hover:animate-bounce">
                                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-2xl">
                                            {stat.icon}
                                        </div>
                                    </div>

                                    {/* Number */}
                                    <div className="mb-4 text-5xl font-bold text-white transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent lg:text-6xl xl:text-7xl">
                                        {stat.number}
                                    </div>

                                    {/* Label */}
                                    <div className="text-lg font-medium text-indigo-200 lg:text-xl">
                                        {stat.label}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Decoration */}
                    <div className="mt-20 flex justify-center">
                        <div className="h-1 w-32 rounded-full bg-gradient-to-r from-transparent via-indigo-400 to-transparent"></div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="relative bg-gradient-to-br from-gray-50 to-indigo-50/30 py-32 lg:py-40">
                {/* Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-32 h-96 w-96 rounded-full bg-gradient-to-br from-indigo-400/20 to-purple-400/20 blur-3xl"></div>
                    <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-gradient-to-br from-purple-400/20 to-pink-400/20 blur-3xl"></div>
                </div>

                <div className="relative container mx-auto px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="mb-24 text-center">
                        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-6 py-3 text-sm font-medium text-indigo-700">
                            <svg
                                className="h-4 w-4"
                                fill="currentColor"
                                viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            Neden Biz?
                        </div>
                        <h2 className="mb-8 font-bold text-gray-900">
                            Dijital Dünyada
                            <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                Fark Yaratan Değerler
                            </span>
                        </h2>
                        <p className="mx-auto max-w-4xl text-2xl leading-relaxed text-gray-600">
                            Her projede mükemmellik arayışımız, müşterilerimizin
                            başarı hikayeleri yazmalarına olanak tanır.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
                        {[
                            {
                                title: 'Yıldırım Hızında Teslimat',
                                description:
                                    'Projelerinizi belirlenen sürelerde, en yüksek kalite standartlarında hayata geçiriyoruz. Zaman bizim için değerli.',
                                icon: (
                                    <svg
                                        className="h-12 w-12"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M13 10V3L4 14h7v7l9-11h-7z"
                                        />
                                    </svg>
                                ),
                                gradient: 'from-blue-500 to-indigo-600',
                            },
                            {
                                title: 'Sınırsız Yaratıcılık',
                                description:
                                    'Benzersiz tasarımlar ve yenilikçi çözümlerle markanızı rakiplerinizden ayırt edici hale getiriyoruz.',
                                icon: (
                                    <svg
                                        className="h-12 w-12"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                        />
                                    </svg>
                                ),
                                gradient: 'from-purple-500 to-pink-600',
                            },
                            {
                                title: 'Kanıtlanmış Başarı',
                                description:
                                    'Sektörün en güncel teknolojileri ve metodolojileri ile desteklenen çözümlerimizle garantili sonuçlar.',
                                icon: (
                                    <svg
                                        className="h-12 w-12"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                        />
                                    </svg>
                                ),
                                gradient: 'from-emerald-500 to-green-600',
                            },
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="group relative text-center"
                                style={{ animationDelay: `${index * 200}ms` }}>
                                {/* Background Card */}
                                <div className="relative rounded-3xl bg-white/70 p-12 shadow-xl ring-1 ring-gray-200/50 backdrop-blur-sm transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl hover:ring-gray-300/50">
                                    {/* Floating Orb */}
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 transform">
                                        <div
                                            className={`relative h-16 w-16 rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent"></div>
                                            <div className="absolute inset-0 flex items-center justify-center text-white">
                                                {feature.icon}
                                            </div>
                                        </div>
                                        <div
                                            className={`absolute inset-0 h-16 w-16 rounded-2xl bg-gradient-to-br ${feature.gradient} animate-pulse opacity-50 blur-xl`}></div>
                                    </div>

                                    {/* Content */}
                                    <div className="pt-8">
                                        <h3 className="mb-6 text-3xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-indigo-600">
                                            {feature.title}
                                        </h3>
                                        <p className="text-xl leading-relaxed text-gray-600">
                                            {feature.description}
                                        </p>
                                    </div>

                                    {/* Decorative Elements */}
                                    <div className="absolute top-4 right-4 h-8 w-8 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 opacity-50 transition-opacity duration-500 group-hover:opacity-100"></div>
                                    <div className="absolute bottom-4 left-4 h-6 w-6 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 opacity-30 transition-opacity duration-500 group-hover:opacity-70"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 py-32">
                {/* Animated Background */}
                <div className="absolute inset-0">
                    <div className="absolute top-10 left-10 h-72 w-72 animate-pulse rounded-full bg-indigo-500/30 mix-blend-multiply blur-xl filter"></div>
                    <div className="absolute top-20 right-10 h-96 w-96 animate-pulse rounded-full bg-purple-500/30 mix-blend-multiply blur-xl filter delay-700"></div>
                    <div className="absolute bottom-10 left-20 h-80 w-80 animate-pulse rounded-full bg-pink-500/30 mix-blend-multiply blur-xl filter delay-1000"></div>
                </div>

                {/* Particle Effect */}
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute h-2 w-2 animate-ping rounded-full bg-white/20"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 3}s`,
                                animationDuration: `${2 + Math.random() * 2}s`,
                            }}></div>
                    ))}
                </div>

                <div className="relative container mx-auto px-6 lg:px-8">
                    <div className="mx-auto max-w-5xl text-center">
                        {/* Badge */}
                        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-6 py-3 text-sm font-medium text-indigo-300 backdrop-blur-sm">
                            <div className="h-2 w-2 animate-pulse rounded-full bg-indigo-400"></div>
                            Hayallerinizi Gerçekleştirmeye Hazır
                        </div>

                        {/* Main Title */}
                        <h2 className="mb-8 font-bold text-white">
                            <span className="block">Projenizi</span>
                            <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Hayata Geçirelim
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="mx-auto mb-12 max-w-4xl text-2xl leading-relaxed text-indigo-100 lg:text-3xl">
                            Dijital dünyada iz bırakacak projeler yaratmak için
                            <span className="font-semibold text-white">
                                {' '}
                                bugün{' '}
                            </span>
                            başlayın.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col gap-8 sm:flex-row sm:justify-center sm:gap-6">
                            <Link
                                href="/hizmetlerimiz"
                                className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 px-12 py-6 text-xl font-bold text-white shadow-2xl transition-all duration-500 hover:scale-110 hover:shadow-indigo-500/50">
                                <span className="relative z-10 flex items-center justify-center">
                                    <svg
                                        className="mr-3 h-6 w-6 transition-transform duration-300 group-hover:rotate-12"
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
                                    Hemen Başlayın
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
                                href={`tel:${siteConfig.contact.phone}`}
                                className="group inline-flex items-center justify-center rounded-2xl border-2 border-white/30 bg-white/10 px-12 py-6 text-xl font-bold text-white backdrop-blur-sm transition-all duration-500 hover:border-white hover:bg-white hover:text-indigo-900 hover:shadow-2xl">
                                <svg
                                    className="mr-3 h-6 w-6 transition-transform duration-300 group-hover:animate-pulse"
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
                                Hemen Arayın
                            </Link>
                        </div>

                        {/* Bottom Decoration */}
                        <div className="mt-16 flex justify-center space-x-2">
                            <div className="h-2 w-2 animate-pulse rounded-full bg-indigo-400"></div>
                            <div className="h-2 w-2 animate-pulse rounded-full bg-purple-400 delay-200"></div>
                            <div className="h-2 w-2 animate-pulse rounded-full bg-pink-400 delay-400"></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
