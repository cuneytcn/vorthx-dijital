import { ArrowRight, Zap } from 'lucide-react';
import Link from 'next/link';

export default function CTASection() {
    return (
        <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-8 text-4xl font-bold text-white lg:text-5xl">
                Hemen Başlayın
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-xl leading-relaxed text-indigo-100">
                Size en uygun paketi seçin ve dijital dönüşümünüzü başlatın.
                Ücretsiz danışmanlık için bizimle iletişime geçin.
            </p>
            <div className="flex flex-col justify-center gap-6 sm:flex-row">
                <Link
                    href="/iletisim"
                    className="group relative overflow-hidden rounded-2xl bg-white px-10 py-5 text-xl font-bold text-indigo-600 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-white/20">
                    <span className="relative z-10 flex items-center">
                        Ücretsiz Danışmanlık
                        <Zap className="ml-3 h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                    </span>
                </Link>

                <Link
                    href="/iletisim"
                    className="group inline-flex items-center justify-center rounded-2xl border-2 border-white bg-transparent px-10 py-5 text-xl font-bold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                    İletişime Geç
                    <ArrowRight className="ml-3 h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
            </div>
        </div>
    );
}
