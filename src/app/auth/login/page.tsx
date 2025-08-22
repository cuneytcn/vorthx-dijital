'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export default function Page() {
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const router = useRouter();

    // Zod schema
    const loginSchema = z.object({
        username: z.string().min(2, 'Kullanıcı adı en az 2 karakter olmalı'),
        password: z.string().min(4, 'Şifre en az 4 karakter olmalı'),
    });
    type LoginFormData = z.infer<typeof loginSchema>;

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        defaultValues: { username: '', password: '' },
    });

    const onSubmit = async (data: LoginFormData) => {
        setLoading(true);
        setError('');
        setSuccess(false);
        try {
            const res = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            const result = await res.json();
            if (result.success) {
                setSuccess(true);
                setTimeout(() => {
                    router.push('/keystatic');
                }, 1200);
                reset();
            } else {
                setError(result.message || 'Giriş başarısız');
            }
        } catch {
            setError('Sunucu hatası');
        }
        setLoading(false);
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full max-w-md space-y-8 rounded-2xl bg-white p-10 shadow-2xl">
                <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
                    Giriş Yap
                </h2>

                {/* Error Message */}
                {error && (
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
                                <p className="text-sm text-red-700">{error}</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Success Message */}
                {success && (
                    <div className="relative mb-6 overflow-hidden rounded-xl border border-green-200 bg-gradient-to-r from-green-50 to-emerald-50 p-4">
                        <div className="absolute inset-0 bg-green-500/5"></div>
                        <div className="relative flex items-center gap-3">
                            <div className="flex-shrink-0">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                                    <svg
                                        className="h-4 w-4 text-green-600"
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
                                <h4 className="mb-1 text-sm font-semibold text-green-800">
                                    Giriş başarılı! Yönlendiriliyorsunuz...
                                </h4>
                            </div>
                        </div>
                    </div>
                )}

                <div className="space-y-6">
                    <div className="group">
                        <label className="mb-3 block text-sm font-semibold text-gray-900">
                            Kullanıcı Adı
                        </label>
                        <input
                            type="text"
                            {...register('username')}
                            className={`w-full appearance-none rounded-xl border-2 bg-white px-4 py-4 text-gray-900 transition-all duration-300 placeholder:text-gray-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none ${errors.username ? 'border-red-300 bg-red-50 focus:border-red-500' : 'border-gray-200 focus:border-indigo-500'}`}
                            placeholder="Kullanıcı adınızı girin"
                        />
                        {errors.username && (
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
                                    {errors.username.message}
                                </p>
                            </div>
                        )}
                    </div>
                    <div className="group">
                        <label className="mb-3 block text-sm font-semibold text-gray-900">
                            Şifre
                        </label>
                        <input
                            type="password"
                            {...register('password')}
                            className={`w-full appearance-none rounded-xl border-2 bg-white px-4 py-4 text-gray-900 transition-all duration-300 placeholder:text-gray-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none ${errors.password ? 'border-red-300 bg-red-50 focus:border-red-500' : 'border-gray-200 focus:border-indigo-500'}`}
                            placeholder="Şifrenizi girin"
                        />
                        {errors.password && (
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
                                    {errors.password.message}
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <button
                        type="submit"
                        disabled={loading}
                        className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 px-12 py-6 text-xl font-bold text-white shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-indigo-500/50 disabled:cursor-not-allowed disabled:opacity-50">
                        <span className="relative z-10 flex items-center justify-center">
                            {loading ? (
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
                                    Giriş yapılıyor...
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
                                    Giriş Yap
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
        </div>
    );
}
