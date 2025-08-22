'use client';

import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

interface PricingPlan {
    name: string;
    description: string;
    price: string;
    period: string;
    features: string[];
    popular: boolean;
    icon: any;
    gradient: string;
    color: string;
}

interface PricingCardsProps {
    pricingPlans: PricingPlan[];
}

export default function PricingCards({ pricingPlans }: PricingCardsProps) {
    const [isYearly, setIsYearly] = useState(false);

    const getPrice = (monthlyPrice: string) => {
        if (isYearly) {
            const price = parseInt(monthlyPrice.replace(/[^\d]/g, ''));
            const yearlyPrice = Math.round(price * 12 * 0.85); // 15% discount
            return `₺${yearlyPrice.toLocaleString()}`;
        }
        return monthlyPrice;
    };

    const getPeriod = () => (isYearly ? 'yıllık' : 'aylık');

    return (
        <div>
            {/* Pricing Toggle */}
            <div className="mb-32 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6">
                <div className="flex items-center space-x-4">
                    <span
                        className={`text-lg font-semibold transition-colors duration-200 ${
                            !isYearly ? 'text-blue-600' : 'text-slate-500'
                        }`}>
                        Aylık
                    </span>
                    <div className="relative">
                        <input
                            type="checkbox"
                            id="billing-toggle"
                            className="sr-only"
                            checked={isYearly}
                            onChange={(e) => setIsYearly(e.target.checked)}
                        />
                        <label
                            htmlFor="billing-toggle"
                            className="flex cursor-pointer items-center">
                            <div className="relative">
                                <div className="h-8 w-16 rounded-full bg-slate-200 shadow-inner transition-colors duration-200 hover:bg-slate-300"></div>
                                <div
                                    className={`absolute top-1 h-6 w-6 transform rounded-full bg-white shadow-md transition-all duration-300 ease-in-out ${
                                        isYearly
                                            ? 'translate-x-8'
                                            : 'translate-x-2'
                                    }`}></div>
                            </div>
                        </label>
                    </div>
                    <span
                        className={`text-lg font-semibold transition-colors duration-200 ${
                            isYearly ? 'text-blue-600' : 'text-slate-500'
                        }`}>
                        Yıllık
                    </span>
                </div>
                <div className="flex items-center space-x-2">
                    <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700 shadow-sm">
                        %15 İndirim
                    </span>
                    <span className="text-sm text-slate-500">
                        Yıllık ödemelerde
                    </span>
                </div>
            </div>

            {/* Pricing Cards Grid */}
            <div className="grid grid-cols-1 gap-8 gap-10 md:grid-cols-2 lg:grid-cols-3">
                {pricingPlans.map((plan, index) => {
                    const IconComponent = plan.icon;

                    return (
                        <div
                            key={index}
                            className={`group relative transform transition-all duration-700 hover:scale-105 ${
                                plan.popular ? 'lg:scale-110' : ''
                            }`}>
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 z-10 -translate-x-1/2 transform">
                                    <span className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 text-sm font-semibold text-white shadow-lg">
                                        En Popüler
                                    </span>
                                </div>
                            )}

                            <div
                                className={`absolute -inset-0.5 rounded-3xl bg-gradient-to-r ${plan.gradient} opacity-60 blur transition duration-1000 group-hover:opacity-100 ${
                                    plan.popular ? 'opacity-80' : ''
                                }`}></div>

                            <div className="relative rounded-3xl border border-gray-200 bg-white/80 p-8 shadow-lg backdrop-blur-xl">
                                <div
                                    className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${plan.gradient}`}>
                                    <IconComponent className="h-8 w-8 text-white" />
                                </div>

                                <h3 className="mb-4 text-2xl font-bold text-slate-900">
                                    {plan.name}
                                </h3>

                                <p className="mb-6 leading-relaxed text-slate-600">
                                    {plan.description}
                                </p>

                                <div className="mb-8">
                                    <div className="flex items-baseline">
                                        <span className="text-4xl font-bold text-slate-900">
                                            {getPrice(plan.price)}
                                        </span>
                                        <span className="ml-2 text-slate-500">
                                            /{getPeriod()}
                                        </span>
                                    </div>
                                </div>

                                <div className="mb-8 space-y-3">
                                    {plan.features.map(
                                        (feature, featureIndex) => (
                                            <div
                                                key={featureIndex}
                                                className="flex items-center text-sm text-slate-600">
                                                <Check className="mr-3 h-4 w-4 flex-shrink-0 text-green-500" />
                                                {feature}
                                            </div>
                                        )
                                    )}
                                </div>

                                <Link
                                    href="/iletisim"
                                    className={`group inline-flex w-full items-center justify-center rounded-2xl px-6 py-4 text-lg font-semibold transition-all duration-300 ${
                                        plan.popular
                                            ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:shadow-purple-500/25'
                                            : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                                    }`}>
                                    {plan.popular
                                        ? 'Hemen Başla'
                                        : 'Paketi Seç'}
                                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
