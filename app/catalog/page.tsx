
"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CategoryCard } from "@/components/CategoryCard";
import { categoryData } from "@/lib/categoryData";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CatalogPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Header Section */}
            <section className="pt-32 pb-12 px-4 border-b border-border/40">
                <div className="max-w-[1400px] mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <div className="text-muted-foreground text-xs font-bold tracking-widest uppercase mb-4">
                                Catalog
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
                                Product <span className="text-accent italic font-serif">Categories</span>
                            </h1>
                        </div>
                        <div className="md:pb-2">
                            {/* Optional: Add a subtle link or description here if needed, keeping it clean for now as per reference */}
                            <Link href="/contact-sales" className="hidden md:flex items-center text-sm font-bold text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider">
                                View Full Catalog <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Grid Section */}
            <section className="py-12 md:py-20 px-4">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categoryData.map((category, index) => (
                            <CategoryCard
                                key={category.id}
                                title={category.title}
                                description={category.shortDescription}
                                slug={category.slug}
                                href={`/catalog/${category.slug}`}
                                delay={index * 100}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
