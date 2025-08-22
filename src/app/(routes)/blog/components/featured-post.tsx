import Link from 'next/link';

interface FeaturedPostProps {
    data: {
        id: number;
        title: string;
        excerpt: string;
        category: string;
        author: string;
        date: string;
        readTime: string;
        image: string;
        tags: string[];
        slug?: string;
    };
}

export default function data({ data }: FeaturedPostProps) {
    return (
        <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-50 to-purple-50 shadow-2xl transition-all duration-700 hover:shadow-indigo-500/20">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image */}
                <div className="relative aspect-video lg:aspect-auto">
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600">
                        <div className="text-center text-white">
                            <svg
                                className="mx-auto mb-4 h-20 w-20 opacity-60"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                                />
                            </svg>
                            <p className="text-xl opacity-80">
                                Featured Article
                            </p>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="p-12">
                    <div className="mb-4 flex items-center gap-4">
                        <span className="rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-2 text-sm font-bold text-white">
                            {data.category}
                        </span>
                        <span className="text-sm text-gray-500">
                            {data.readTime}
                        </span>
                    </div>

                    <h3 className="mb-6 text-3xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-indigo-600">
                        {data.title}
                    </h3>

                    <p className="mb-8 text-lg leading-relaxed text-gray-600">
                        {data.excerpt}
                    </p>

                    <div className="mb-8 flex flex-wrap gap-2">
                        {data.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="rounded-lg bg-gray-100 px-3 py-1 text-sm text-gray-700">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 font-bold text-white">
                                {data.author.charAt(0)}
                            </div>
                            <div>
                                <div className="font-bold text-gray-900">
                                    {data.author}
                                </div>
                                <div className="text-sm text-gray-500">
                                    {data.date}
                                </div>
                            </div>
                        </div>

                        <Link
                            href={`/blog/${data.slug || data.id}`}
                            className="group/btn inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl">
                            Makaleyi Oku
                            <svg
                                className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1"
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
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
