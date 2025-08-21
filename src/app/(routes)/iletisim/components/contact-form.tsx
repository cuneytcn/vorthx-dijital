'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

// Zod validation schema
const contactFormSchema = z.object({
    name: z.string().min(2, 'Ad Soyad en az 2 karakter olmalıdır'),
    email: z.string().email('Geçerli bir e-posta adresi giriniz'),
    phone: z.string().optional(),
    company: z.string().optional(),
    service: z.string().min(1, 'Lütfen bir hizmet türü seçiniz'),
    budget: z.string().optional(),
    message: z.string().min(10, 'Mesajınız en az 10 karakter olmalıdır'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            company: '',
            service: '',
            budget: '',
            message: '',
        },
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        setErrorMessage(null);

        try {
            // API çağrısı
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || 'Form gönderilemedi');
            }

            // console.log('Form başarıyla gönderildi:', result);

            setIsSubmitted(true);
            reset(); // Formu temizle
            setTimeout(() => {
                setIsSubmitted(false);
            }, 5000);
        } catch (error) {
            console.error('Form gönderme hatası:', error);
            setErrorMessage(
                error instanceof Error
                    ? error.message
                    : 'Bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.'
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-50 to-emerald-50 p-12 text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5"></div>
                <div className="relative">
                    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-600">
                        <svg
                            className="h-10 w-10 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>
                    <h3 className="mb-4 text-2xl font-bold text-gray-900">
                        Mesajınız Başarıyla Gönderildi!
                    </h3>
                    <p className="text-lg text-gray-600">
                        En kısa sürede size dönüş yapacağız.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Personal Information */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="group">
                    <label className="mb-3 block text-sm font-semibold text-gray-900">
                        Ad Soyad *
                    </label>
                    <input
                        type="text"
                        {...register('name')}
                        className={`w-full appearance-none rounded-xl border-2 bg-white px-4 py-4 text-gray-900 transition-all duration-300 [-moz-appearance:none] [-webkit-appearance:none] placeholder:text-gray-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none ${
                            errors.name
                                ? 'border-red-300 bg-red-50 focus:border-red-500'
                                : 'border-gray-200 focus:border-indigo-500'
                        }`}
                        placeholder="Adınız ve soyadınız"
                    />
                    {errors.name && isSubmitted && (
                        <div className="mt-2 flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2">
                            <svg
                                className="h-4 w-4 flex-shrink-0 text-red-500"
                                fill="currentColor"
                                viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <p className="text-sm font-medium text-red-700">
                                {errors.name.message}
                            </p>
                        </div>
                    )}
                </div>

                <div className="group">
                    <label className="mb-3 block text-sm font-semibold text-gray-900">
                        E-posta *
                    </label>
                    <input
                        type="email"
                        {...register('email')}
                        className={`w-full appearance-none rounded-xl border-2 bg-white px-4 py-4 text-gray-900 transition-all duration-300 [-moz-appearance:none] [-webkit-appearance:none] placeholder:text-gray-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none ${
                            errors.email
                                ? 'border-red-300 bg-red-50 focus:border-red-500'
                                : 'border-gray-200 focus:border-indigo-500'
                        }`}
                        placeholder="ornek@email.com"
                    />
                    {errors.email && isSubmitted && (
                        <div className="mt-2 flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2">
                            <svg
                                className="h-4 w-4 flex-shrink-0 text-red-500"
                                fill="currentColor"
                                viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <p className="text-sm font-medium text-red-700">
                                {errors.email.message}
                            </p>
                        </div>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="group">
                    <label className="mb-3 block text-sm font-semibold text-gray-900">
                        Telefon
                    </label>
                    <input
                        type="tel"
                        {...register('phone')}
                        className={`w-full appearance-none rounded-xl border-2 bg-white px-4 py-4 text-gray-900 transition-all duration-300 [-moz-appearance:none] [-webkit-appearance:none] placeholder:text-gray-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none ${
                            errors.phone
                                ? 'border-red-300 bg-red-50 focus:border-red-500'
                                : 'border-gray-200 focus:border-indigo-500'
                        }`}
                        placeholder="+90 (555) 123 45 67"
                    />
                    {errors.phone && isSubmitted && (
                        <div className="mt-2 flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2">
                            <svg
                                className="h-4 w-4 flex-shrink-0 text-red-500"
                                fill="currentColor"
                                viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <p className="text-sm font-medium text-red-700">
                                {errors.phone.message}
                            </p>
                        </div>
                    )}
                </div>

                <div className="group">
                    <label className="mb-3 block text-sm font-semibold text-gray-900">
                        Şirket
                    </label>
                    <input
                        type="text"
                        {...register('company')}
                        className={`w-full appearance-none rounded-xl border-2 bg-white px-4 py-4 text-gray-900 transition-all duration-300 [-moz-appearance:none] [-webkit-appearance:none] placeholder:text-gray-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none ${
                            errors.company
                                ? 'border-red-300 bg-red-50 focus:border-red-500'
                                : 'border-gray-200 focus:border-indigo-500'
                        }`}
                        placeholder="Şirket adınız"
                    />
                    {errors.company && isSubmitted && (
                        <div className="mt-2 flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2">
                            <svg
                                className="h-4 w-4 flex-shrink-0 text-red-500"
                                fill="currentColor"
                                viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <p className="text-sm font-medium text-red-700">
                                {errors.company.message}
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Project Details */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="group">
                    <label className="mb-3 block text-sm font-semibold text-gray-900">
                        Hizmet Türü *
                    </label>
                    <select
                        {...register('service')}
                        className={`w-full appearance-none rounded-xl border-2 bg-white bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236B7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22M6%208l4%204%204-4%22/%3E%3C/svg%3E')] bg-[length:20px] bg-right bg-no-repeat px-4 py-4 pr-12 text-gray-900 transition-all duration-300 [-moz-appearance:none] [-webkit-appearance:none] focus:ring-2 focus:ring-indigo-500/20 focus:outline-none ${
                            errors.service
                                ? 'border-red-300 bg-red-50 focus:border-red-500'
                                : 'border-gray-200 focus:border-indigo-500'
                        }`}>
                        <option value="">Hizmet seçin</option>
                        <option value="web-tasarim">Web Tasarımı</option>
                        <option value="e-ticaret">E-Ticaret</option>
                        <option value="mobil-uygulama">Mobil Uygulama</option>
                        <option value="seo">SEO Optimizasyonu</option>
                        <option value="sosyal-medya">
                            Sosyal Medya Yönetimi
                        </option>
                        <option value="dijital-strateji">
                            Dijital Strateji
                        </option>
                        <option value="diger">Diğer</option>
                    </select>
                    {errors.service && isSubmitted && (
                        <div className="mt-2 flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2">
                            <svg
                                className="h-4 w-4 flex-shrink-0 text-red-500"
                                fill="currentColor"
                                viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <p className="text-sm font-medium text-red-700">
                                {errors.service.message}
                            </p>
                        </div>
                    )}
                </div>

                <div className="group">
                    <label className="mb-3 block text-sm font-semibold text-gray-900">
                        Bütçe Aralığı
                    </label>
                    <select
                        {...register('budget')}
                        className={`w-full appearance-none rounded-xl border-2 bg-white bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236B7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22M6%208l4%204%204-4%22/%3E%3C/svg%3E')] bg-[length:20px] bg-right bg-no-repeat px-4 py-4 pr-12 text-gray-900 transition-all duration-300 [-moz-appearance:none] [-webkit-appearance:none] focus:ring-2 focus:ring-indigo-500/20 focus:outline-none ${
                            errors.budget
                                ? 'border-red-300 bg-red-50 focus:border-red-500'
                                : 'border-gray-200 focus:border-indigo-500'
                        }`}>
                        <option value="">Bütçe seçin</option>
                        <option value="5000-15000">5.000₺ - 15.000₺</option>
                        <option value="15000-30000">15.000₺ - 30.000₺</option>
                        <option value="30000-50000">30.000₺ - 50.000₺</option>
                        <option value="50000-100000">50.000₺ - 100.000₺</option>
                        <option value="100000+">100.000₺+</option>
                    </select>
                    {errors.budget && isSubmitted && (
                        <div className="mt-2 flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2">
                            <svg
                                className="h-4 w-4 flex-shrink-0 text-red-500"
                                fill="currentColor"
                                viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <p className="text-sm font-medium text-red-700">
                                {errors.budget.message}
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Message */}
            <div className="group">
                <label className="mb-3 block text-sm font-semibold text-gray-900">
                    Proje Detayları *
                </label>
                <textarea
                    {...register('message')}
                    rows={6}
                    className={`w-full resize-none appearance-none rounded-xl border-2 bg-white px-4 py-4 text-gray-900 transition-all duration-300 [-moz-appearance:none] [-webkit-appearance:none] placeholder:text-gray-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none ${
                        errors.message
                            ? 'border-red-300 bg-red-50 focus:border-red-500'
                            : 'border-gray-200 focus:border-indigo-500'
                    }`}
                    placeholder="Projeniz hakkında detaylı bilgi verin..."
                />
                {errors.message && isSubmitted && (
                    <div className="mt-2 flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2">
                        <svg
                            className="h-4 w-4 flex-shrink-0 text-red-500"
                            fill="currentColor"
                            viewBox="0 0 20 20">
                            <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <p className="text-sm font-medium text-red-700">
                            {errors.message.message}
                        </p>
                    </div>
                )}
            </div>

            {/* Submit Button */}
            <div className="text-center">
                {/* Error Message */}
                {errorMessage && (
                    <div className="relative mb-6 overflow-hidden rounded-xl border border-red-200 bg-gradient-to-r from-red-50 to-rose-50 p-4">
                        <div className="absolute inset-0 bg-red-500/5"></div>
                        <div className="relative flex items-center gap-3">
                            <div className="flex-shrink-0">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100">
                                    <svg
                                        className="h-4 w-4 text-red-600"
                                        fill="currentColor"
                                        viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex-1">
                                <h4 className="mb-1 text-sm font-semibold text-red-800">
                                    Bir hata oluştu!
                                </h4>
                                <p className="text-sm text-red-700">
                                    {errorMessage}
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 px-12 py-6 text-xl font-bold text-white shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-indigo-500/50 disabled:cursor-not-allowed disabled:opacity-50">
                    <span className="relative z-10 flex items-center justify-center">
                        {isSubmitting ? (
                            <>
                                <svg
                                    className="mr-3 h-6 w-6 animate-spin"
                                    fill="none"
                                    viewBox="0 0 24 24">
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    />
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    />
                                </svg>
                                Gönderiliyor...
                            </>
                        ) : (
                            <>
                                <svg
                                    className="mr-3 h-6 w-6 transition-transform duration-300 group-hover:rotate-12"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                    />
                                </svg>
                                Mesajı Gönder
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
                            </>
                        )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                </button>
            </div>
        </form>
    );
}
