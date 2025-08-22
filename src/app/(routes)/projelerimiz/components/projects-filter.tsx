'use client';

import Link from 'next/link';
import { useState } from 'react';

interface Project {
    id: number;
    slug: string;
    title: string;
    category: string;
    description: string;
    image: string;
    technologies: string[];
    year: string;
    status: string;
    gradient: string;
}

interface ProjectsFilterProps {
    projects: Project[];
}

export default function ProjectsFilter({ projects }: ProjectsFilterProps) {
    const [selectedCategory, setSelectedCategory] = useState('Tümü');

    const categories = [
        'Tümü',
        'Web Tasarım',
        'E-Ticaret',
        'Mobil Uygulama',
        'Web Uygulama',
    ];

    const filteredProjects =
        selectedCategory === 'Tümü'
            ? projects
            : projects.filter(
                  (project) => project.category === selectedCategory
              );

    return (
        <section className="relative bg-gradient-to-br from-gray-50 to-indigo-50/30 py-32">
            <div className="container mx-auto px-6 lg:px-8">
                {/* Category Filter */}
                <div className="mb-16 flex flex-wrap justify-center gap-4">
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedCategory(category)}
                            className={`group rounded-2xl border-2 px-8 py-4 font-bold transition-all duration-300 ${
                                selectedCategory === category
                                    ? 'border-indigo-600 bg-indigo-600 text-white shadow-lg'
                                    : 'border-gray-200 bg-white text-gray-600 hover:border-indigo-600 hover:text-indigo-600'
                            }`}>
                            {category}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className="group relative overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl"
                            style={{ animationDelay: `${index * 100}ms` }}>
                            {/* Project Image */}
                            <div className="relative aspect-video overflow-hidden">
                                <div
                                    className={`h-full w-full bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                                    <div className="text-center text-white">
                                        <svg
                                            className="mx-auto mb-4 h-16 w-16 opacity-60"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                            />
                                        </svg>
                                        <p className="text-lg opacity-80">
                                            {project.title}
                                        </p>
                                    </div>
                                </div>

                                {/* Status Badge */}
                                <div
                                    className={`absolute top-4 right-4 rounded-full px-3 py-1 text-xs font-bold ${
                                        project.status === 'Tamamlandı'
                                            ? 'bg-green-500 text-white'
                                            : 'bg-yellow-500 text-white'
                                    }`}>
                                    {project.status}
                                </div>

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/20"></div>
                            </div>

                            {/* Project Info */}
                            <div className="p-8">
                                <div className="mb-3 flex items-center justify-between">
                                    <span
                                        className={`rounded-full bg-gradient-to-r ${project.gradient} px-3 py-1 text-sm font-bold text-white`}>
                                        {project.category}
                                    </span>
                                    <span className="text-sm text-gray-500">
                                        {project.year}
                                    </span>
                                </div>

                                <h3 className="mb-4 text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-indigo-600">
                                    {project.title}
                                </h3>

                                <p className="mb-6 leading-relaxed text-gray-600">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="mb-6 flex flex-wrap gap-2">
                                    {project.technologies.map(
                                        (tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="rounded-lg bg-gray-100 px-3 py-1 text-sm text-gray-700">
                                                {tech}
                                            </span>
                                        )
                                    )}
                                </div>

                                {/* View Project Button */}
                                <Link
                                    href={`/projelerimiz/${project.slug}`}
                                    className={`group/btn flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r ${project.gradient} px-6 py-4 font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl`}>
                                    Projeyi Görüntüle
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
                    ))}
                </div>

                {/* Load More */}
                <div className="mt-16 text-center">
                    <button className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 px-12 py-6 text-xl font-bold text-white shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-indigo-500/50">
                        <span className="relative z-10 flex items-center justify-center">
                            Daha Fazla Proje Yükle
                            <svg
                                className="ml-3 h-6 w-6 transition-transform duration-300 group-hover:translate-y-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                                />
                            </svg>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                    </button>
                </div>
            </div>
        </section>
    );
}
