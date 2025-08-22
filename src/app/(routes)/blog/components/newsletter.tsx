export default function Newsletter() {
    return (
        <div className="space-y-4">
            <input
                type="email"
                placeholder="E-posta adresiniz"
                className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/70 backdrop-blur-sm focus:border-white/40 focus:outline-none"
            />
            <button className="w-full rounded-xl bg-white px-6 py-3 font-bold text-indigo-600 transition-all duration-300 hover:bg-gray-100">
                Abone Ol
            </button>
        </div>
    );
}
