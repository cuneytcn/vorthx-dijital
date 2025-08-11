'use client';

import { siteConfig } from '@/config/site.config';
import { clsx as cn } from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function Header() {
    const [open, setOpen] = React.useState<boolean>(false);
    const [sticky, setSticky] = React.useState<boolean>(false);

    const pathname = usePathname();

    // Handle scroll to toggle sticky header
    React.useEffect(() => {
        let currentPosition = window.scrollY;
        let position = 0;

        const handleScroll = () => {
            currentPosition = window.scrollY;
            if (currentPosition > position) {
                setSticky(true);
            } else {
                setSticky(false);
            }

            position = currentPosition;
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Handle scroll to close mobile menu
    React.useEffect(() => {
        const handleScroll = () => {
            if (open) {
                setOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [open]);

    // Handle resize to close mobile menu
    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Handle click outside to close mobile menu
    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const menuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            if (
                open &&
                menuButton &&
                !menuButton.contains(event.target as Node) &&
                mobileMenu &&
                !mobileMenu.contains(event.target as Node)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [open]);

    // Handle keydown to close mobile menu
    React.useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && open) {
                setOpen(false);
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [open]);

    // Handle prevent body scroll when mobile menu is open
    React.useEffect(() => {
        const handleScroll = (event: WheelEvent) => {
            if (open) {
                event.preventDefault();
            }
        };

        document.addEventListener('wheel', handleScroll, { passive: false });
        return () => {
            document.removeEventListener('wheel', handleScroll);
        };
    }, [open]);

    return (
        <header
            className={cn(
                'fixed top-0 left-0 z-50 h-auto w-full backdrop-blur-xl transition-all duration-500',
                {
                    'translate-y-0': !sticky,
                    '-translate-y-full': sticky,
                    'border-b border-white/10 bg-slate-900/95': open,
                    'border-b border-white/5 bg-slate-900/80': !open,
                }
            )}>
            <div className="container mx-auto flex h-20 items-center justify-between px-6 lg:px-8">
                {/* LOGO START */}
                <Link href={'/'} className="group flex items-center gap-3">
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
                {/* LOGO END */}

                {/* NAVIGATION MENU START */}
                <nav className="hidden lg:flex">
                    <ul className="flex items-center gap-1">
                        {siteConfig.navigation.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className={cn(
                                        'group relative rounded-xl px-5 py-3 text-sm font-medium text-gray-300 transition-all duration-300 hover:text-white',
                                        {
                                            'bg-white/10 text-white backdrop-blur-sm':
                                                pathname === item.href,
                                        }
                                    )}>
                                    <span className="relative z-10">
                                        {item.name}
                                    </span>
                                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 transition-all duration-300 group-hover:opacity-100" />
                                    <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-indigo-400 to-purple-400 transition-all duration-300 group-hover:w-full" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                {/* NAVIGATION MENU END */}

                {/* START PROJECT BUTTON START */}
                <Link
                    href={'/iletisim?source=header'}
                    className="group relative hidden items-center justify-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-3 text-sm font-bold text-white shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/50 lg:flex">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <span className="relative z-10 flex items-center">
                        <svg
                            className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-12"
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
                        Projenizi Başlatın
                        <svg
                            className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
                </Link>
                {/* START PROJECT BUTTON END */}

                {/* MOBILE MENU BUTTON START */}
                <button
                    type="button"
                    id="mobile-menu-button"
                    onClick={() => setOpen(!open)}
                    className="relative h-10 w-10 cursor-pointer rounded-xl bg-white/10 text-gray-300 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:text-white lg:hidden">
                    <span
                        className={cn(
                            'absolute top-1/2 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-current transition-transform duration-300',
                            {
                                '-translate-y-1/2 rotate-45': open,
                                '-translate-y-2': !open,
                            }
                        )}
                    />
                    <span
                        className={cn(
                            'absolute top-1/2 left-1/2 h-0.5 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-current transition-opacity duration-300',
                            {
                                'opacity-0': open,
                            }
                        )}
                    />
                    <span
                        className={cn(
                            'absolute top-1/2 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-current transition-transform duration-300',
                            {
                                '-translate-y-1/2 -rotate-45': open,
                                'translate-y-1.5': !open,
                            }
                        )}
                    />
                </button>
                {/* MOBILE MENU BUTTON END */}
                {/* MOBILE MENU START */}
                <div
                    id="mobile-menu"
                    className={cn(
                        'fixed top-20 left-0 z-50 max-h-[999px] w-full origin-top overflow-x-hidden border-t border-white/10 bg-slate-900/95 backdrop-blur-xl transition-all duration-500',
                        {
                            'pointer-events-none scale-y-0 opacity-0': !open,
                            'pointer-events-auto scale-y-100 opacity-100': open,
                        }
                    )}>
                    <div className="container mx-auto px-6 lg:px-8">
                        <ul className="flex flex-col gap-2 py-6">
                            {siteConfig.navigation.map((item, index) => (
                                <li
                                    key={item.name}
                                    style={{
                                        animationDelay: `${index * 100}ms`,
                                    }}>
                                    <Link
                                        href={item.href}
                                        onClick={() => setOpen(false)}
                                        className={cn(
                                            'group relative block rounded-xl px-5 py-4 text-base font-medium text-gray-300 transition-all duration-300 hover:text-white',
                                            {
                                                'bg-white/10 text-white backdrop-blur-sm':
                                                    pathname === item.href,
                                            }
                                        )}>
                                        <span className="relative z-10">
                                            {item.name}
                                        </span>
                                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 transition-all duration-300 group-hover:opacity-100" />
                                    </Link>
                                </li>
                            ))}
                            <li className="mt-4">
                                <Link
                                    href={'/iletisim?source=header'}
                                    onClick={() => setOpen(false)}
                                    className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-4 text-base font-bold text-white shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/50">
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                    <span className="relative z-10 flex items-center">
                                        <svg
                                            className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:rotate-12"
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
                                        Projenizi Başlatın
                                        <svg
                                            className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
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
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* MOBILE MENU END */}
            </div>
        </header>
    );
}
