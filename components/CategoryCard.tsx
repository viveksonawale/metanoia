
"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categoryData } from "@/lib/categoryData";

interface CategoryCardProps {
    title: string;
    description: string;
    slug: string;
    href: string;
    delay?: number;
}

export const CategoryCard = ({ title, description, slug, href, delay = 0 }: CategoryCardProps) => {
    const category = categoryData.find(c => c.slug === slug);
    const Icon = category?.icon;

    if (!Icon) return null;
    return (
        <Link
            href={href}
            className="group relative flex flex-col h-full bg-[#0a0a0a] border border-[#222] rounded-lg p-8 overflow-hidden transition-all duration-300 hover:border-[#44d62c] hover:shadow-[0_0_20px_rgba(68,214,44,0.15)]"
            style={{ animationDelay: `${delay}ms` }}
        >
            {/* Background Icon Watermark */}
            <div className="absolute top-4 right-4 text-[#111] transition-transform duration-500 group-hover:scale-110 group-hover:text-[#161616] pointer-events-none">
                <Icon strokeWidth={1} className="w-32 h-32 opacity-50" />
            </div>

            {/* Icon */}
            <div className="relative mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded border border-[#333] bg-[#111] text-[#44d62c] transition-colors duration-300 group-hover:border-[#44d62c] group-hover:bg-[#44d62c]/10">
                    <Icon className="w-6 h-6" />
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white uppercase tracking-wide mb-3">{title}</h3>
                <p className="text-[#999] text-sm leading-relaxed mb-8 flex-1">
                    {description}
                </p>

                {/* CTA */}
                <div className="flex items-center text-[#446644] text-xs font-bold tracking-widest uppercase transition-colors duration-300 group-hover:text-[#44d62c]">
                    Explore <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
            </div>
        </Link>
    );
};
