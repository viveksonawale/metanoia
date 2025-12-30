


import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { categoryData } from "@/lib/categoryData";
import { ProductSpecifications } from "@/components/ProductSpecifications";
import { ArrowRight, ChevronRight, Download, FileText, CheckCircle2 } from "lucide-react";

interface PageProps {
    params: {
        category: string;
    }
}

// Next.js 15 expects params to be a Promise in some configurations, but usually just props for dynamic routes in app dir.
// However, to be safe and compatible with standard Next.js 14/15 app router:
export default async function CategoryDetailPage({ params }: PageProps) {
    const { category: slug } = await params;
    const category = categoryData.find((c) => c.slug === slug);

    if (!category) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-black text-white selection:bg-[#44d62c]/20 selection:text-[#44d62c]">
            <Navbar />

            {/* Breadcrumb - Industrial Style */}
            <div className="pt-24 pb-4 px-4 border-b border-[#222]">
                <div className="max-w-[1400px] mx-auto">
                    <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#666]">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight className="w-3 h-3" />
                        <Link href="/catalog" className="hover:text-white transition-colors">Catalog</Link>
                        <ChevronRight className="w-3 h-3 text-[#44d62c]" />
                        <span className="text-white">{category.title}</span>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative py-16 md:py-24 px-4 overflow-hidden">
                {/* Background Pattern/Glow */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#111] to-transparent opacity-50 z-0 pointer-events-none" />
                <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#44d62c] rounded-full blur-[150px] opacity-[0.05] z-0 pointer-events-none" />

                <div className="relative max-w-[1400px] mx-auto z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded bg-[#111] border border-[#333] text-[#44d62c]">
                                <category.icon className="w-6 h-6" />
                            </div>
                            <span className="text-[#44d62c] font-bold tracking-widest uppercase text-sm">
                                Premium Product Line
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-6 leading-none">
                            {category.title}
                        </h1>
                        <p className="text-lg md:text-xl text-[#999] leading-relaxed mb-8 max-w-xl">
                            {category.fullDescription}
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <button className="px-8 py-4 bg-[#44d62c] hover:bg-[#3cc026] text-black font-bold uppercase tracking-wider text-sm transition-colors rounded-sm">
                                Request Quote
                            </button>
                            <button className="px-8 py-4 bg-transparent border border-[#333] hover:border-white text-white font-bold uppercase tracking-wider text-sm transition-colors rounded-sm flex items-center gap-2">
                                <FileText className="w-4 h-4" />
                                Support Docs
                            </button>
                        </div>
                    </div>

                    {/* Hero Image / Graphic */}
                    <div className="relative">
                        <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-[#222] group">
                            {/* Since we don't have real images for every category in the prompt context, we'll placeholder thoughtfully 
                                 or use the path provided in data. For now, a styled placeholder if image fails loading 
                                 would be handled by Next/Image but here we assume paths are set up or will result in empty box. 
                                 Given constraints, I will create a visual placeholder style as fallback. */}
                            <div className="absolute inset-0 bg-[#111] flex items-center justify-center text-[#333]">
                                {/* Placeholder Visual for Development */}
                                <category.icon className="w-32 h-32 opacity-20" />
                            </div>
                            {/* If real images exist, this would show over the placeholder */}
                            {/* <Image 
                                src={category.heroImage} 
                                alt={category.title}
                                fill
                                className="object-cover object-center"
                             /> */}

                            {/* Technical Overlay Graphics (Decorative) */}
                            <div className="absolute inset-0 border-[1px] border-[#44d62c]/20 m-4 rounded pointer-events-none" />
                            <div className="absolute top-8 right-8 flex flex-col gap-2">
                                {category.features.slice(0, 2).map((f, i) => (
                                    <div key={i} className="bg-black/80 backdrop-blur border border-[#333] p-3 rounded text-xs">
                                        <div className="text-[#44d62c] font-bold uppercase mb-1">{f.title}</div>
                                        <div className="text-[#999]">Detailed Specification</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 px-4 bg-[#0a0a0a] border-y border-[#222]">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {category.features.map((feature, idx) => (
                            <div key={idx} className="p-6 rounded border border-[#222] bg-black hover:border-[#44d62c]/50 transition-colors group">
                                <div className="mb-4 text-[#666] group-hover:text-[#44d62c] transition-colors">
                                    <feature.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-lg font-bold text-white uppercase tracking-wide mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-[#888] text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technical Specs & Content Split */}
            <section className="py-20 px-4">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left: Specs Table */}
                    <div className="lg:col-span-2 space-y-12">
                        <ProductSpecifications specifications={category.specifications} />

                        {/* Applications Section */}
                        <div>
                            <h3 className="text-2xl font-bold text-white uppercase tracking-tight mb-8 flex items-center gap-3">
                                <span className="w-8 h-[2px] bg-[#44d62c]" /> Common Applications
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {category.applications.map((app, idx) => (
                                    <div key={idx} className="group relative aspect-video bg-[#111] rounded border border-[#222] overflow-hidden">
                                        <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-black/90 to-transparent">
                                            <div>
                                                <h4 className="text-lg font-bold text-white mb-1 group-hover:text-[#44d62c] transition-colors">{app.title}</h4>
                                                <p className="text-sm text-[#999]">{app.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: Sidebar / Certifications / CTA */}
                    <div className="lg:col-span-1 space-y-8">
                        {/* Certifications Card */}
                        <div className="bg-[#111] border border-[#222] rounded-lg p-6">
                            <h4 className="text-sm font-bold text-[#666] uppercase tracking-widest mb-6">Certifications</h4>
                            <div className="space-y-4">
                                {category.certifications.map((cert, idx) => (
                                    <div key={idx} className="flex items-start gap-4 p-4 rounded bg-black border border-[#333]">
                                        <CheckCircle2 className="w-5 h-5 text-[#44d62c] shrink-0 mt-0.5" />
                                        <div>
                                            <div className="font-bold text-white mb-1">{cert.name}</div>
                                            <div className="text-xs text-[#666] uppercase tracking-wider mb-2">{cert.code}</div>
                                            <p className="text-xs text-[#888] leading-relaxed">{cert.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Need Help Card */}
                        <div className="bg-[#44d62c] rounded-lg p-8 text-black relative overflow-hidden">
                            <div className="relative z-10">
                                <h4 className="text-xl font-bold uppercase tracking-tight mb-2">Build Your Project</h4>
                                <p className="font-medium text-black/80 mb-6 text-sm">
                                    Need custom specifications or assistance with local building codes? Our engineering team is ready to help.
                                </p>
                                <button className="w-full py-3 bg-black text-white font-bold uppercase tracking-wider text-sm rounded hover:bg-[#222] transition-colors">
                                    Contact Engineering
                                </button>
                            </div>
                            {/* Decorative Background */}
                            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/20 rounded-full blur-2xl" />
                        </div>

                        {/* Related Categories */}
                        <div>
                            <h4 className="text-sm font-bold text-[#666] uppercase tracking-widest mb-6">Related Categories</h4>
                            <div className="space-y-3">
                                {category.relatedProducts.map((slug, idx) => {
                                    const related = categoryData.find(c => c.slug === slug);
                                    if (!related) return null;
                                    return (
                                        <Link href={`/catalog/${related.slug}`} key={idx} className="flex items-center gap-3 p-3 rounded bg-[#0a0a0a] border border-[#222] hover:border-[#44d62c] transition-colors group">
                                            <div className="w-10 h-10 rounded bg-[#111] flex items-center justify-center text-[#666] group-hover:text-[#44d62c] transition-colors">
                                                <related.icon className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-white group-hover:text-[#44d62c] transition-colors">{related.title}</div>
                                            </div>
                                            <ArrowRight className="w-4 h-4 text-[#333] ml-auto group-hover:text-[#44d62c] transition-colors" />
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

// Generate static params for all categories
export function generateStaticParams() {
    return categoryData.map((category) => ({
        category: category.slug,
    }));
}
