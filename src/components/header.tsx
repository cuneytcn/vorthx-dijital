import { clsx } from 'clsx';
import { useEffect, useState } from 'react';
import { siteConfig } from '../config/site.config';
import { useHandleScroll } from '../hooks/useHadleScroll';
import { useToggleMenu } from '../hooks/useToggleMenu';

export default function Header() {
    const sticky = useHandleScroll();
    const { isOpen, setIsOpen, toggle } = useToggleMenu();
    const [pathname, setPathname] = useState('');

    useEffect(() => {
        setPathname(window.location.pathname);
    }, [pathname]);

    return (
        <header>
            <div
                className={clsx(
                    'fixed top-0 left-0 z-50 h-auto w-full bg-white/80 backdrop-blur-sm transition-all duration-300 ease-in-out',
                    {
                        'translate-y-0': !sticky,
                        '-translate-y-full': sticky,
                    }
                )}>
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="flex h-20 w-full items-center justify-between lg:h-24">
                        {/* LOGO */}
                        <a
                            className="group flex items-center space-x-3"
                            href="/">
                            <div className="relative">
                                <div className="flex h-10 w-10 transform items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 shadow-lg transition-transform duration-200 group-hover:scale-105">
                                    <svg
                                        className="h-6 w-6 text-white"
                                        fill="currentColor"
                                        viewBox="0 0 24 24">
                                        <path d="M13 3L4 14h6v7l9-11h-6V3z"></path>
                                    </svg>
                                </div>
                                <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 opacity-0 blur transition-opacity duration-200 group-hover:opacity-20"></div>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-secondary bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-xl font-bold tracking-wide text-transparent">
                                    Vorthx Dijital
                                </span>
                                <span className="-mt-0.5 text-xs tracking-wide text-gray-500">
                                    İnovasyon Lab
                                </span>
                            </div>
                        </a>

                        {/* DESKTOP MENU */}
                        <nav className="hidden lg:block">
                            <ul className="flex items-center gap-2">
                                {siteConfig.header.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <a
                                                href={item.path}
                                                className={clsx(
                                                    'group font-secondary relative rounded-lg px-4 py-2 text-sm text-gray-700 transition-all duration-200 hover:bg-indigo-50 hover:text-indigo-600',
                                                    {
                                                        'rounded-lg bg-indigo-50 text-indigo-600':
                                                            pathname ===
                                                            item.path,
                                                    }
                                                )}>
                                                {item.label}
                                                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-indigo-600 transition-all duration-200 group-hover:w-full" />
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>

                        {/* MOBILE MENU BUTTON */}
                        <button
                            onClick={toggle}
                            type="button"
                            id="mobile-menu-button"
                            className="relative size-10 cursor-pointer rounded-lg bg-gray-100 text-gray-600 transition-colors duration-200 hover:text-gray-900 lg:hidden">
                            <span
                                className={clsx(
                                    'absolute top-1/2 left-1/2 h-0.5 w-8/12 -translate-x-1/2 -translate-y-2 rounded-full bg-black',
                                    {
                                        '!-translate-y-1/2 rotate-45': isOpen,
                                        'transition-transform duration-300': true,
                                    }
                                )}
                            />
                            <span
                                className={clsx(
                                    'absolute top-1/2 left-1/2 h-0.5 w-8/12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black',
                                    {
                                        'opacity-0': isOpen,
                                        'transition-opacity duration-300': true,
                                    }
                                )}
                            />
                            <span
                                className={clsx(
                                    'absolute top-1/2 left-1/2 h-0.5 w-8/12 -translate-x-1/2 translate-y-1.5 rounded-full bg-black',
                                    {
                                        '!-translate-y-1/2 -rotate-45': isOpen,
                                        'transition-transform duration-300': true,
                                    }
                                )}
                            />
                        </button>

                        {/* MOBILE MENU  */}
                        <div
                            className={clsx(
                                'fixed top-20 left-0 z-50 h-[calc(100dvh-5rem)] w-full lg:top-24 lg:hidden lg:h-[calc(100dvh-6rem)]',
                                {}
                            )}>
                            <div
                                className={clsx(
                                    'fixed top-20 left-0 h-[calc(100dvh-5rem)] w-full bg-black/10 transition-all duration-300 ease-in-out lg:top-24 lg:h-[calc(100dvh-6rem)]',
                                    {
                                        'opacity-0': !isOpen,
                                    }
                                )}
                            />
                            <div
                                id="mobile-menu"
                                className={clsx(
                                    'relative max-h-[999px] w-full origin-top scale-y-0 overflow-hidden bg-white py-6 lg:pb-8',
                                    {
                                        '!scale-y-100': isOpen,
                                        'transition-transform duration-300': true,
                                    }
                                )}>
                                <div
                                    className={clsx(
                                        'container mx-auto px-6 lg:px-8',
                                        {}
                                    )}>
                                    {/* MOBILE MENU LINKS */}
                                    <ul className="flex flex-col gap-2">
                                        {siteConfig.header.map(
                                            (item, index) => {
                                                return (
                                                    <li key={index}>
                                                        <a
                                                            href={item.path}
                                                            onClick={() => {
                                                                setIsOpen(
                                                                    false
                                                                );
                                                            }}
                                                            className={clsx(
                                                                'font-secondary block rounded-lg px-4 py-3 text-[13px] font-semibold tracking-wide transition-colors duration-200 hover:bg-indigo-50 hover:text-indigo-600',
                                                                {
                                                                    'bg-indigo-50 text-indigo-600':
                                                                        pathname ===
                                                                        item.path,
                                                                }
                                                            )}>
                                                            {item.label}
                                                        </a>
                                                    </li>
                                                );
                                            }
                                        )}

                                        <li>
                                            <a
                                                className="relative mt-3 block transform cursor-pointer rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-center text-base font-medium text-white transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
                                                href="/iletisim">
                                                Projeni Başlat
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <a
                            className="group relative hidden transform cursor-pointer rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-base font-medium text-white shadow-lg transition-all duration-200 hover:shadow-xl focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none lg:inline-flex"
                            href="/iletisim">
                            <span className="relative z-10">
                                Projeni Başlat
                            </span>
                            <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 transition-opacity duration-200 group-hover:opacity-20" />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}
