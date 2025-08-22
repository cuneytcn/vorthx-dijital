import { ArrowRight, Clock, Star, Zap } from 'lucide-react';
import Link from 'next/link';

interface Service {
    name: string;
    price: string;
    description?: string;
    duration?: string;
    popular?: boolean;
}

interface ServiceCategory {
    name: string;
    description?: string;
    icon?: any;
    services: Service[];
}

interface AdditionalServicesProps {
    additionalServices: ServiceCategory[];
}

export default function AdditionalServices({
    additionalServices,
}: AdditionalServicesProps) {
    const getCategoryIcon = (categoryName: string) => {
        switch (categoryName.toLowerCase()) {
            case 'tek seferlik hizmetler':
                return Zap;
            case 'danışmanlık hizmetleri':
                return Star;
            default:
                return Clock;
        }
    };

    return (
        <div className="space-y-16">
            {/* Header Section */}
            <div className="text-center">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-6 py-3 text-sm font-medium text-blue-700">
                    <Zap className="h-4 w-4" />
                    Ek Hizmetler
                </div>
                <h2 className="mb-8 font-bold text-slate-900">
                    İhtiyaçlarınıza Özel Çözümler
                </h2>
                <p className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-600">
                    Ana paketlerinizin yanında, özel ihtiyaçlarınız için
                    tasarlanmış ek hizmetlerimizi keşfedin
                </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                {additionalServices.map((category, index) => {
                    const IconComponent =
                        category.icon || getCategoryIcon(category.name);

                    return (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-500 hover:shadow-2xl">
                            {/* Background Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                            {/* Header */}
                            <div className="relative mb-8 flex items-center gap-4">
                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg">
                                    <IconComponent className="h-8 w-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900">
                                        {category.name}
                                    </h3>
                                    {category.description && (
                                        <p className="mt-2 text-slate-600">
                                            {category.description}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Services List */}
                            <div className="relative space-y-6">
                                {category.services.map(
                                    (service, serviceIndex) => (
                                        <div
                                            key={serviceIndex}
                                            className={`group/item relative rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:border-blue-200 hover:shadow-md ${
                                                service.popular
                                                    ? 'bg-blue-50/50 ring-2 ring-blue-200'
                                                    : ''
                                            }`}>
                                            {service.popular && (
                                                <div className="absolute -top-3 left-6">
                                                    <span className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-3 py-1 text-xs font-semibold text-white shadow-sm">
                                                        Popüler
                                                    </span>
                                                </div>
                                            )}

                                            <div className="flex items-start justify-between">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2">
                                                        <h4 className="font-semibold text-slate-900">
                                                            {service.name}
                                                        </h4>
                                                        {service.popular && (
                                                            <Star className="h-4 w-4 fill-current text-yellow-500" />
                                                        )}
                                                    </div>
                                                    {service.description && (
                                                        <p className="mt-2 text-sm text-slate-600">
                                                            {
                                                                service.description
                                                            }
                                                        </p>
                                                    )}
                                                    {service.duration && (
                                                        <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
                                                            <Clock className="h-3 w-3" />
                                                            <span>
                                                                {
                                                                    service.duration
                                                                }
                                                            </span>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="ml-4 text-right">
                                                    <div className="text-2xl font-bold text-slate-900">
                                                        {service.price}
                                                    </div>
                                                    {service.duration && (
                                                        <div className="text-xs text-slate-500">
                                                            / {service.duration}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Hover Effect */}
                                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-indigo-500/5 opacity-0 transition-opacity duration-300 group-hover/item:opacity-100"></div>
                                        </div>
                                    )
                                )}
                            </div>

                            {/* CTA Button */}
                            <div className="relative mt-8">
                                <Link
                                    href="/iletisim"
                                    className="group/btn inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                                    Bu Kategoriden Hizmet Al
                                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Bottom CTA */}
            <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-900 to-purple-900 p-12 text-center">
                <div className="mx-auto max-w-2xl">
                    <h3 className="mb-4 text-3xl font-bold text-white">
                        Özel Projeniz mi Var?
                    </h3>
                    <p className="mb-8 text-xl leading-relaxed text-gray-300">
                        Standart paketlerimizin dışında özel ihtiyaçlarınız için
                        özel çözümler geliştiriyoruz.
                    </p>
                    <Link
                        href="/iletisim"
                        className="group inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-slate-900 transition-all duration-300 hover:scale-105 hover:bg-gray-100">
                        Özel Teklif Alın
                        <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
