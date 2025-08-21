'use client';

import { useState } from 'react';

export default function Newsletter() {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setIsSubmitting(true);

        // Simulate submission
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setIsSubmitting(false);
        setIsSubmitted(true);
        setEmail('');

        // Reset success message after 3 seconds
        setTimeout(() => setIsSubmitted(false), 3000);
    };

    return (
        <div className="relative">
            <h4 className="mb-4 text-lg font-semibold text-white">
                Bültenimize Abone Olun
            </h4>
            <p className="mb-6 text-sm text-gray-400">
                Son güncellemeler ve özel tekliflerden haberdar olun.
            </p>

            {isSubmitted ? (
                <div className="flex items-center gap-3 rounded-xl bg-green-500/20 px-4 py-3 text-green-300">
                    <svg
                        className="h-5 w-5"
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
                    Başarıyla abone oldunuz!
                </div>
            ) : (
                <form
                    onSubmit={handleSubmit}
                    className="group relative flex w-full max-w-full overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm transition-all duration-300 focus-within:bg-white/10 focus-within:ring-2 focus-within:ring-indigo-500/50">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E-posta adresiniz"
                        required
                        className="w-0 flex-1 bg-transparent px-4 py-3 text-white placeholder-gray-400 focus:outline-none"
                    />
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group relative flex-shrink-0 overflow-hidden bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-3 font-medium text-white transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/50 disabled:opacity-50">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <span className="relative z-10 flex items-center">
                            {isSubmitting ? (
                                <>
                                    <svg
                                        className="mr-2 h-4 w-4 animate-spin"
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
                                    Abone Oluyor...
                                </>
                            ) : (
                                <>
                                    Abone Ol
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
                                </>
                            )}
                        </span>
                    </button>
                </form>
            )}
        </div>
    );
}
