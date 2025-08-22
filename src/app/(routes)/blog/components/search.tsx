export default function Search() {
    return (
        <div className="rounded-3xl bg-white p-8 shadow-xl">
            <h3 className="mb-6 text-2xl font-bold text-gray-900">Arama</h3>
            <div className="relative">
                <input
                    type="text"
                    placeholder="Makale ara..."
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-6 py-4 pr-12 focus:border-indigo-500 focus:bg-white focus:outline-none"
                />
                <button className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400 hover:text-indigo-600">
                    <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}
