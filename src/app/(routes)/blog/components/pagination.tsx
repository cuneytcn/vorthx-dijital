export default function Pagination() {
    return (
        <div className="flex items-center gap-2">
            <button className="rounded-xl bg-gray-200 px-4 py-2 text-gray-500 transition-colors duration-300 hover:bg-gray-300">
                Önceki
            </button>
            <button className="rounded-xl bg-indigo-600 px-4 py-2 text-white">
                1
            </button>
            <button className="rounded-xl bg-gray-200 px-4 py-2 text-gray-700 transition-colors duration-300 hover:bg-gray-300">
                2
            </button>
            <button className="rounded-xl bg-gray-200 px-4 py-2 text-gray-700 transition-colors duration-300 hover:bg-gray-300">
                3
            </button>
            <span className="px-2 text-gray-500">...</span>
            <button className="rounded-xl bg-gray-200 px-4 py-2 text-gray-500 transition-colors duration-300 hover:bg-gray-300">
                Sonraki
            </button>
        </div>
    );
}
