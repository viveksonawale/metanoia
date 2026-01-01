


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
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Breadcrumb - Industrial Style */}
            <div className="pt-24 pb-4 px-4 border-b border-border/40">
                <div className="max-w-[1400px] mx-auto">
                    <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-muted-foreground">
                        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
                        <ChevronRight className="w-3 h-3" />
                        <Link href="/catalog" className="hover:text-foreground transition-colors">Catalog</Link>
                        <ChevronRight className="w-3 h-3 text-accent" />
                        <span className="text-foreground">{category.title}</span>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative py-16 md:py-24 px-4 overflow-hidden">
                {/* Background Pattern/Glow - Subtle Blue/Gray */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/50 to-transparent opacity-50 z-0 pointer-events-none" />
                <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] z-0 pointer-events-none" />

                <div className="relative max-w-[1400px] mx-auto z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded bg-secondary border border-border text-accent">
                                <category.icon className="w-6 h-6" />
                            </div>
                            <span className="text-accent font-bold tracking-widest uppercase text-sm">
                                Premium Product Line
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-6 leading-none">
                            {category.title}
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl">
                            {category.fullDescription}
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <button className="px-8 py-4 bg-accent hover:bg-accent/90 text-white font-bold uppercase tracking-wider text-sm transition-colors rounded-sm shadow-md">
                                Request Quote
                            </button>
                            <button className="px-8 py-4 bg-transparent border border-border hover:bg-secondary text-foreground font-bold uppercase tracking-wider text-sm transition-colors rounded-sm flex items-center gap-2">
                                <FileText className="w-4 h-4" />
                                Support Docs
                            </button>
                        </div>
                    </div>

                    {/* Hero Image / Graphic */}
                    <div className="relative">
                        <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-border group shadow-lg">
                            <div className="absolute inset-0 bg-secondary flex items-center justify-center text-muted-foreground/20">
                                {/* Placeholder Visual for Development */}
                                <category.icon className="w-32 h-32" />
                            </div>

                            {/* Technical Overlay Graphics (Decorative) */}
                            <div className="absolute inset-0 border-[1px] border-accent/10 m-4 rounded pointer-events-none" />
                            <div className="absolute top-8 right-8 flex flex-col gap-2">
                                {category.features.slice(0, 2).map((f, i) => (
                                    <div key={i} className="bg-background/90 backdrop-blur border border-border p-3 rounded-sm text-xs shadow-sm">
                                        <div className="text-accent font-bold uppercase mb-1">{f.title}</div>
                                        <div className="text-muted-foreground">Detailed Specification</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 px-4 bg-secondary/30 border-y border-border/40">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {category.features.map((feature, idx) => (
                            <div key={idx} className="p-6 rounded-sm border border-border bg-background hover:border-accent/50 transition-colors group shadow-sm hover:shadow-md">
                                <div className="mb-4 text-muted-foreground group-hover:text-accent transition-colors">
                                    <feature.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-lg font-bold text-foreground uppercase tracking-wide mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
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
                            <h3 className="text-2xl font-bold text-foreground uppercase tracking-tight mb-8 flex items-center gap-3">
                                <span className="w-8 h-[2px] bg-accent" /> Common Applications
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {category.applications.map((app, idx) => (
                                    <div key={idx} className="group relative aspect-video bg-secondary rounded-sm border border-border overflow-hidden">
                                        <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-black/60 to-transparent">
                                            <div>
                                                <h4 className="text-lg font-bold text-white mb-1 group-hover:text-accent transition-colors shadow-sm">{app.title}</h4>
                                                <p className="text-sm text-gray-200">{app.description}</p>
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
                        <div className="bg-background border border-border rounded-sm p-6 shadow-sm">
                            <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-6">Certifications</h4>
                            <div className="space-y-4">
                                {category.certifications.map((cert, idx) => (
                                    <div key={idx} className="flex items-start gap-4 p-4 rounded-sm bg-secondary/50 border border-border">
                                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                        <div>
                                            <div className="font-bold text-foreground mb-1">{cert.name}</div>
                                            <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">{cert.code}</div>
                                            <p className="text-xs text-muted-foreground leading-relaxed">{cert.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Need Help Card */}
                        <div className="bg-accent rounded-sm p-8 text-white relative overflow-hidden shadow-lg">
                            <div className="relative z-10">
                                <h4 className="text-xl font-bold uppercase tracking-tight mb-2">Build Your Project</h4>
                                <p className="font-medium text-blue-100 mb-6 text-sm">
                                    Need custom specifications or assistance with local building codes? Our engineering team is ready to help.
                                </p>
                                <button className="w-full py-3 bg-white text-accent font-bold uppercase tracking-wider text-sm rounded-sm hover:bg-gray-100 transition-colors">
                                    Contact Engineering
                                </button>
                            </div>
                            {/* Decorative Background */}
                            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                        </div>

                        {/* Related Categories */}
                        <div>
                            <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-6">Related Categories</h4>
                            <div className="space-y-3">
                                {category.relatedProducts.map((slug, idx) => {
                                    const related = categoryData.find(c => c.slug === slug);
                                    if (!related) return null;
                                    return (
                                        <Link href={`/catalog/${related.slug}`} key={idx} className="flex items-center gap-3 p-3 rounded-sm bg-background border border-border hover:border-accent transition-colors group shadow-sm">
                                            <div className="w-10 h-10 rounded-sm bg-secondary flex items-center justify-center text-muted-foreground group-hover:text-accent transition-colors">
                                                <related.icon className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-foreground group-hover:text-accent transition-colors">{related.title}</div>
                                            </div>
                                            <ArrowRight className="w-4 h-4 text-muted-foreground ml-auto group-hover:text-accent transition-colors" />
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
