'use client';

import cn from 'clsx';
import { useEffect, useState } from 'react';

interface CookieSettings {
    necessary: boolean;
    performance: boolean;
    analytics: boolean;
    marketing: boolean;
}

export default function CookieModal() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [settings, setSettings] = useState<CookieSettings>({
        necessary: true,
        performance: false,
        analytics: false,
        marketing: false,
    });

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            setIsModalOpen(true);
        } else {
            const savedSettings = localStorage.getItem('cookieSettings');
            if (savedSettings) {
                setSettings(JSON.parse(savedSettings));
            }
        }
    }, []);

    // Modal açık/kapalı durumunda body scroll'unu kontrol et
    useEffect(() => {
        if (isModalOpen) {
            // Modal açıkken body scroll'unu engelle
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = '0px'; // Scrollbar kayması önlemi
        } else {
            // Modal kapandığında body scroll'unu geri getir
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        }

        // Cleanup function - component unmount olduğunda
        return () => {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        };
    }, [isModalOpen]);

    const handleAcceptAll = () => {
        const allAccepted = {
            necessary: true,
            performance: true,
            analytics: true,
            marketing: true,
        };
        setSettings(allAccepted);
        localStorage.setItem('cookieConsent', 'true');
        localStorage.setItem('cookieSettings', JSON.stringify(allAccepted));
        setIsModalOpen(false);
        // Body scroll'unu geri getir
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
    };

    const handleRejectAll = () => {
        const onlyNecessary = {
            necessary: true,
            performance: false,
            analytics: false,
            marketing: false,
        };
        setSettings(onlyNecessary);
        localStorage.setItem('cookieConsent', 'true');
        localStorage.setItem('cookieSettings', JSON.stringify(onlyNecessary));
        setIsModalOpen(false);
        // Body scroll'unu geri getir
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
    };

    const handleSaveSettings = () => {
        localStorage.setItem('cookieConsent', 'true');
        localStorage.setItem('cookieSettings', JSON.stringify(settings));
        setIsModalOpen(false);
        // Body scroll'unu geri getir
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
    };

    const handleToggle = (key: keyof CookieSettings) => {
        if (key === 'necessary') return;
        setSettings((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        // Body scroll'unu geri getir
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
    };

    if (!isModalOpen) {
        return (
            <button
                onClick={() => setIsModalOpen(true)}
                className="fixed right-6 bottom-6 z-50 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-white shadow-lg transition-all duration-300 hover:from-indigo-700 hover:to-purple-700 hover:shadow-xl">
                Çerez Ayarları
            </button>
        );
    }

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
                onClick={handleCloseModal}
            />

            {/* Modal */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div
                    className={cn(
                        'relative flex w-full max-w-2xl flex-col rounded-2xl bg-white shadow-2xl',
                        {
                            'h-[90vh]': showSettings,
                        }
                    )}>
                    {/* Header - Sabit */}
                    <div className="relative flex-shrink-0 overflow-hidden rounded-t-2xl bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-6">
                        <div className="absolute inset-0 bg-black/10"></div>
                        <div className="relative flex items-center justify-between">
                            <h2 className="text-2xl font-bold text-white">
                                {showSettings
                                    ? 'Çerez Ayarları'
                                    : 'Çerez Politikası'}
                            </h2>
                            <button
                                onClick={handleCloseModal}
                                className="text-white/80 transition-colors duration-200 hover:text-white">
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Content - Scroll edilebilir */}
                    <div
                        className={cn('overflow-y-auto px-8 py-8', {
                            'flex-1': showSettings,
                        })}>
                        {!showSettings ? (
                            <div className="space-y-6">
                                <p className="leading-relaxed text-gray-700">
                                    Web sitemizde en iyi deneyimi sunabilmek
                                    için çerezleri kullanıyoruz. Sitemizi
                                    kullanmaya devam ederek çerez kullanımını
                                    kabul etmiş olursunuz.
                                </p>
                                <p className="text-sm text-gray-600">
                                    Çerez tercihlerinizi dilediğiniz zaman
                                    değiştirebilirsiniz.
                                </p>
                            </div>
                        ) : (
                            <div className="space-y-8">
                                <p className="text-gray-700">
                                    Aşağıdaki çerez kategorilerini inceleyerek
                                    tercihlerinizi belirleyebilirsiniz:
                                </p>

                                {/* Zorunlu Çerezler */}
                                <div className="relative overflow-hidden rounded-2xl border-2 border-gray-200 bg-white p-6 transition-all duration-300 hover:border-emerald-300 hover:shadow-lg">
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1 pr-4">
                                            <div className="mb-3 flex items-center gap-3">
                                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600">
                                                    <svg
                                                        className="h-4 w-4 text-white"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20">
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </div>
                                                <h3 className="text-lg font-semibold text-gray-900">
                                                    Zorunlu Çerezler
                                                </h3>
                                            </div>
                                            <p className="text-sm text-gray-600">
                                                Web sitesinin temel işlevlerini
                                                sağlamak için gerekli
                                                çerezlerdir. Bu çerezler devre
                                                dışı bırakılamaz.
                                            </p>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="mr-3 text-sm font-medium text-emerald-600">
                                                Her zaman aktif
                                            </span>
                                            <div className="relative h-6 w-12 rounded-full bg-emerald-500">
                                                <div className="absolute top-0.5 right-0.5 h-5 w-5 rounded-full bg-white shadow-md"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Performans Çerezleri */}
                                <div className="relative overflow-hidden rounded-2xl border-2 border-gray-200 bg-white p-6 transition-all duration-300 hover:border-blue-300 hover:shadow-lg">
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1 pr-4">
                                            <div className="mb-3 flex items-center gap-3">
                                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600">
                                                    <svg
                                                        className="h-4 w-4 text-white"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20">
                                                        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                                                    </svg>
                                                </div>
                                                <h3 className="text-lg font-semibold text-gray-900">
                                                    Performans Çerezleri
                                                </h3>
                                            </div>
                                            <p className="text-sm text-gray-600">
                                                Web sitesinin performansını
                                                analiz etmek ve iyileştirmek
                                                için kullanılır.
                                            </p>
                                        </div>
                                        <div className="flex items-center">
                                            <button
                                                onClick={() =>
                                                    handleToggle('performance')
                                                }
                                                className={`relative h-6 w-12 rounded-full transition-all duration-300 ${
                                                    settings.performance
                                                        ? 'bg-gradient-to-r from-blue-500 to-blue-600'
                                                        : 'bg-gray-300'
                                                }`}>
                                                <div
                                                    className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-md transition-all duration-300 ${
                                                        settings.performance
                                                            ? 'right-0.5'
                                                            : 'left-0.5'
                                                    }`}></div>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Analiz Çerezleri */}
                                <div className="relative overflow-hidden rounded-2xl border-2 border-gray-200 bg-white p-6 transition-all duration-300 hover:border-purple-300 hover:shadow-lg">
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1 pr-4">
                                            <div className="mb-3 flex items-center gap-3">
                                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-purple-600">
                                                    <svg
                                                        className="h-4 w-4 text-white"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20">
                                                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                                                    </svg>
                                                </div>
                                                <h3 className="text-lg font-semibold text-gray-900">
                                                    Analiz Çerezleri
                                                </h3>
                                            </div>
                                            <p className="text-sm text-gray-600">
                                                Ziyaretçi davranışlarını analiz
                                                etmek ve site içeriğini
                                                geliştirmek için kullanılır.
                                            </p>
                                        </div>
                                        <div className="flex items-center">
                                            <button
                                                onClick={() =>
                                                    handleToggle('analytics')
                                                }
                                                className={`relative h-6 w-12 rounded-full transition-all duration-300 ${
                                                    settings.analytics
                                                        ? 'bg-gradient-to-r from-purple-500 to-purple-600'
                                                        : 'bg-gray-300'
                                                }`}>
                                                <div
                                                    className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-md transition-all duration-300 ${
                                                        settings.analytics
                                                            ? 'right-0.5'
                                                            : 'left-0.5'
                                                    }`}></div>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Pazarlama Çerezleri */}
                                <div className="relative overflow-hidden rounded-2xl border-2 border-gray-200 bg-white p-6 transition-all duration-300 hover:border-pink-300 hover:shadow-lg">
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1 pr-4">
                                            <div className="mb-3 flex items-center gap-3">
                                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-pink-500 to-purple-600">
                                                    <svg
                                                        className="h-4 w-4 text-white"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20">
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </div>
                                                <h3 className="text-lg font-semibold text-gray-900">
                                                    Pazarlama Çerezleri
                                                </h3>
                                            </div>
                                            <p className="text-sm text-gray-600">
                                                Kişiselleştirilmiş reklamlar ve
                                                pazarlama içerikleri sunmak için
                                                kullanılır.
                                            </p>
                                        </div>
                                        <div className="flex items-center">
                                            <button
                                                onClick={() =>
                                                    handleToggle('marketing')
                                                }
                                                className={`relative h-6 w-12 rounded-full transition-all duration-300 ${
                                                    settings.marketing
                                                        ? 'bg-gradient-to-r from-pink-500 to-purple-600'
                                                        : 'bg-gray-300'
                                                }`}>
                                                <div
                                                    className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-md transition-all duration-300 ${
                                                        settings.marketing
                                                            ? 'right-0.5'
                                                            : 'left-0.5'
                                                    }`}></div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Footer - Sabit */}
                    <div className="flex-shrink-0 rounded-b-2xl bg-gray-50 px-8 py-6">
                        <div className="flex flex-col justify-end gap-3 sm:flex-row">
                            {!showSettings ? (
                                <>
                                    <button
                                        onClick={handleRejectAll}
                                        className="rounded-xl border border-gray-300 px-6 py-3 text-gray-700 transition-colors duration-200 hover:bg-gray-50">
                                        Reddet
                                    </button>
                                    <button
                                        onClick={() => setShowSettings(true)}
                                        className="rounded-xl border border-indigo-300 px-6 py-3 text-indigo-600 transition-colors duration-200 hover:bg-indigo-50">
                                        Ayarları Özelleştir
                                    </button>
                                    <button
                                        onClick={handleAcceptAll}
                                        className="rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-white shadow-lg transition-all duration-200 hover:from-indigo-700 hover:to-purple-700">
                                        Tümünü Kabul Et
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button
                                        onClick={() => setShowSettings(false)}
                                        className="rounded-xl border border-gray-300 px-6 py-3 text-gray-700 transition-colors duration-200 hover:bg-gray-50">
                                        Geri
                                    </button>
                                    <button
                                        onClick={handleSaveSettings}
                                        className="rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-white shadow-lg transition-all duration-200 hover:from-indigo-700 hover:to-purple-700">
                                        Ayarları Kaydet
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
