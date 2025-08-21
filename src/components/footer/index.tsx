import { siteConfig } from '@/config/site.config';
import Link from 'next/link';
import Newsletter from './components/newsletter';

export default function Footer() {
    return (
        <footer className="w-full bg-slate-900">
            {/* Animated Background */}
            <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10" />

                {/* Floating Orbs */}
                <div className="absolute -top-40 -left-40 h-80 w-80 animate-pulse rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-3xl" />
                <div
                    className="absolute -right-40 -bottom-40 h-80 w-80 animate-pulse rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl"
                    style={{ animationDelay: '2s' }}
                />

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />

                <div className="relative container mx-auto px-6 py-20 lg:px-8">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0px,450px)_1fr_1fr_1fr] xl:gap-24">
                        {/* COL SPAN 1 START */}
                        <div className="">
                            <Link
                                href={'/'}
                                className="group mb-8 flex items-center gap-3">
                                <div className="relative">
                                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 blur-sm transition-all duration-500 group-hover:opacity-60" />
                                    <div className="relative flex h-12 w-12 transform items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                                        <svg
                                            className="h-7 w-7 text-white"
                                            fill="currentColor"
                                            viewBox="0 0 24 24">
                                            <path d="M13 3L4 14h6v7l9-11h-6V3z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-secondary text-xl font-bold tracking-wide text-white md:text-2xl">
                                        Vorthx Dijital
                                    </span>
                                    <span className="-mt-1 text-xs tracking-wide text-indigo-300">
                                        İnovasyon Lab
                                    </span>
                                </div>
                            </Link>

                            <p className="mb-8 leading-relaxed text-gray-300">
                                Dijital dünyada fark yaratan çözümler sunan,
                                teknoloji ve yaratıcılığı bir araya getiren
                                dijital ajansınız.
                            </p>

                            <div className="mb-8 flex items-center gap-3">
                                {Object.entries(siteConfig.links).map(
                                    ([key, url], index) => {
                                        return (
                                            <div key={index}>
                                                <a
                                                    href={url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-white/5 text-gray-400 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:text-white hover:shadow-xl hover:shadow-indigo-500/25">
                                                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                                    {key === 'linkedin' && (
                                                        <svg
                                                            className="relative z-10 h-5 w-5"
                                                            fill="currentColor"
                                                            viewBox="0 0 24 24">
                                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                                                        </svg>
                                                    )}
                                                    {key === 'twitter' && (
                                                        <svg
                                                            className="relative z-10 h-5 w-5"
                                                            fill="currentColor"
                                                            viewBox="0 0 24 24">
                                                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                                                        </svg>
                                                    )}
                                                    {key === 'instagram' && (
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="relative z-10 h-5 w-5">
                                                            <rect
                                                                width="20"
                                                                height="20"
                                                                x="2"
                                                                y="2"
                                                                rx="5"
                                                                ry="5"
                                                            />
                                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                                            <line
                                                                x1="17.5"
                                                                x2="17.51"
                                                                y1="6.5"
                                                                y2="6.5"
                                                            />
                                                        </svg>
                                                    )}
                                                    {key === 'whatsapp' && (
                                                        <svg
                                                            className="relative z-10 h-5 w-5"
                                                            fill="currentColor"
                                                            viewBox="0 0 24 24">
                                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"></path>
                                                        </svg>
                                                    )}
                                                </a>
                                            </div>
                                        );
                                    }
                                )}
                            </div>
                            <Newsletter />
                        </div>
                        {/* COL SPAN 1 END */}

                        {/* COL SPAN 2 START */}
                        <div className="">
                            <h3 className="mb-8 text-xl font-semibold text-white">
                                Hizmetlerimiz
                            </h3>
                            <div className="flex flex-col gap-4">
                                {siteConfig.services.map((service, index) => {
                                    return (
                                        <Link
                                            key={index}
                                            href={service.href}
                                            className="group relative w-fit text-gray-300 transition-all duration-300 hover:text-white">
                                            <span className="relative z-10">
                                                {service.name}
                                            </span>
                                            <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-indigo-400 to-purple-400 transition-all duration-300 group-hover:w-full" />
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                        {/* COL SPAN 2 END */}

                        {/* COL SPAN 3 START */}
                        <div className="">
                            <h3 className="mb-8 text-xl font-semibold text-white">
                                Navigasyon
                            </h3>
                            <div className="flex flex-col gap-4">
                                {siteConfig.navigation.map((item, index) => {
                                    return (
                                        <Link
                                            key={index}
                                            href={item.href}
                                            className="group relative w-fit text-gray-300 transition-all duration-300 hover:text-white">
                                            <span className="relative z-10">
                                                {item.name}
                                            </span>
                                            <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-indigo-400 to-purple-400 transition-all duration-300 group-hover:w-full" />
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                        {/* COL SPAN 3 END */}

                        {/* COL SPAN 4 START */}
                        <div className="">
                            <h3 className="mb-8 text-xl font-semibold text-white">
                                İletişim
                            </h3>
                            <div className="flex flex-col gap-6">
                                <div className="flex items-start space-x-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-400">
                                        <svg
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path>
                                        </svg>
                                    </div>
                                    <div className="text-gray-300">
                                        {siteConfig.contact.address
                                            .split(',')
                                            .map((line, index) => (
                                                <span key={index}>
                                                    {line.trim()}
                                                    {index <
                                                        siteConfig.contact.address.split(
                                                            ','
                                                        ).length -
                                                            1 && <br />}
                                                </span>
                                            ))}
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-400">
                                        <svg
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.17 3.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"></path>
                                        </svg>
                                    </div>
                                    <a
                                        href={`tel:${siteConfig.contact.phone}`}
                                        className="text-gray-300 transition-colors duration-300 hover:text-white">
                                        {siteConfig.contact.phone}
                                    </a>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-400">
                                        <svg
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"></path>
                                        </svg>
                                    </div>
                                    <a
                                        href={`mailto:${siteConfig.contact.email}`}
                                        className="text-gray-300 transition-colors duration-300 hover:text-white">
                                        {siteConfig.contact.email}
                                    </a>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-400">
                                        <svg
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                    </div>
                                    <div className="text-gray-300">
                                        <p>
                                            Pzt-Cum:{' '}
                                            {siteConfig.workingHours.weekdays}
                                        </p>
                                        <p>
                                            Cmt-Pzr:{' '}
                                            {siteConfig.workingHours.weekend}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* COL SPAN 4 END */}
                    </div>

                    {/* Bottom Section */}
                    <div className="mt-16 border-t border-white/10 pt-8">
                        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                            <div className="text-center text-gray-400 md:text-left">
                                <p>
                                    &copy; 2024 Vorthx Dijital. Tüm hakları
                                    saklıdır.
                                </p>
                            </div>
                            <div className="flex items-center gap-6 text-sm text-gray-400">
                                <Link
                                    href="/gizlilik-politikasi"
                                    className="transition-colors hover:text-white">
                                    Gizlilik Politikası
                                </Link>
                                <Link
                                    href="/kullanim-kosullari"
                                    className="transition-colors hover:text-white">
                                    Kullanım Koşulları
                                </Link>
                                <Link
                                    href="/cerez-politikasi"
                                    className="transition-colors hover:text-white">
                                    Çerez Politikası
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
