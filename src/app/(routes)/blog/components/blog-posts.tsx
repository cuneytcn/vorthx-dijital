import Link from 'next/link';

interface BlogPostsProps {
    data: {
        id: number;
        title: string;
        description: string;
        excerpt: string;
        category: string;
        author: string;
        date: string;
        readTime: string;
        image: string;
        tags: string[];
        gradient: string;
        slug: string;
    }[];
}

export default function BlogPosts({ data }: BlogPostsProps) {
    return (
        <>
            {data?.map((post, index) => (
                <article
                    key={post.id}
                    className="group relative overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl"
                    style={{
                        animationDelay: `${index * 100}ms`,
                    }}>
                    {/* Post Image */}
                    <div className="relative aspect-video overflow-hidden">
                        <div
                            className={`h-full w-full bg-gradient-to-br ${post.gradient} flex items-center justify-center`}>
                            <div className="text-center text-white">
                                <svg
                                    className="mx-auto mb-2 h-12 w-12 opacity-60"
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
                                <p className="text-sm opacity-80">
                                    {post.category}
                                </p>
                            </div>
                        </div>

                        {/* Category Badge */}
                        <div
                            className={`absolute top-4 left-4 rounded-full bg-gradient-to-r ${post.gradient} px-3 py-1 text-xs font-bold text-white`}>
                            {post.category}
                        </div>

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/10"></div>
                    </div>

                    {/* Post Content */}
                    <div className="p-6">
                        <div className="mb-3 flex items-center gap-4 text-sm text-gray-500">
                            <span>{post.date}</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                        </div>

                        <h3 className="mb-4 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-indigo-600">
                            <Link href={`/blog/${post.slug}`}>
                                {post.title}
                            </Link>
                        </h3>

                        <p className="mb-4 leading-relaxed text-gray-600">
                            {post.excerpt}
                        </p>

                        <div className="mb-4 flex flex-wrap gap-1">
                            {post.tags.slice(0, 2).map((tag, tagIndex) => (
                                <span
                                    key={tagIndex}
                                    className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-700">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div
                                    className={`h-8 w-8 rounded-full bg-gradient-to-r ${post.gradient} flex items-center justify-center text-sm font-bold text-white`}>
                                    {post.author.charAt(0)}
                                </div>
                                <span className="text-sm font-medium text-gray-700">
                                    {post.author}
                                </span>
                            </div>

                            <Link
                                href={`/blog/${post.slug}`}
                                className="group/link flex items-center gap-2 text-sm font-medium text-indigo-600 transition-colors duration-300 hover:text-indigo-700">
                                Devamı
                                <svg
                                    className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1"
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
                </article>
            ))}
        </>
    );
}
