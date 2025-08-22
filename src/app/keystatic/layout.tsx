import KeystaticApp from './keystatic';

export default function Layout() {
    return (
        <main>
            {/* <div className="fixed top-1.5 right-3 z-50 md:top-3.5 md:right-6 lg:right-8">
                <Link
                    href="/"
                    className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-3 py-2 text-xs text-white shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/50 md:text-sm">
                    <span>Ana sayfaya dön</span>
                </Link>
            </div> */}
            <KeystaticApp />
        </main>
    );
}
