
"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categoryData } from "@/lib/categoryData";

import Image from "next/image";

interface CategoryCardProps {
    title: string;
    description: string;
    slug: string;
    href: string;
    delay?: number;
}

export const CategoryCard = ({ title, description, slug, href, delay = 0 }: CategoryCardProps) => {
    const category = categoryData.find(c => c.slug === slug);
    const imageSrc = category?.image;

    if (!imageSrc) return null;

    return (
        <Link
            href={href}
            className="group relative flex flex-col h-[300px] sm:h-[400px] w-full overflow-hidden rounded-sm shadow-md transition-all duration-300 hover:shadow-xl"
            style={{ animationDelay: `${delay}ms` }}
        >
            {/* Background Image with Zoom Effect */}
            <div className="absolute inset-0 h-full w-full">
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Dark Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col justify-end p-8 text-white">
                <h3 className="mb-2 text-2xl font-bold leading-tight tracking-tight text-white transition-transform duration-300 group-hover:-translate-y-1">
                    {title}
                </h3>
                <p className="mb-6 line-clamp-2 text-sm text-gray-200 opacity-90 transition-transform duration-300 group-hover:-translate-y-1">
                    {description}
                </p>

                {/* Animated Explore Button */}
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/90 opacity-0 transition-all duration-500 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 text-accent-foreground">
                    Explore <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
            </div>
        </Link>
    );
};
