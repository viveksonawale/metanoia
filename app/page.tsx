import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Footer } from "@/components/Footer";
import { CategoryCard } from "@/components/CategoryCard";
import { categoryData } from "@/lib/categoryData";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white antialiased selection:bg-[#44d62c]/20 selection:text-[#44d62c]">
      <Navbar />
      <Hero />

      {/* Product Categories Section - Matches Reference Image */}
      <section id="products" className="py-20 px-4 bg-black">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="text-[#666] text-xs font-bold tracking-widest uppercase mb-2">Catalog</div>
              <h2 className="text-4xl font-bold text-white uppercase tracking-tight">
                Product <span className="text-[#44d62c]">Categories</span>
              </h2>
            </div>
            <Link href="/catalog" className="hidden md:flex items-center text-xs font-bold text-[#999] hover:text-white uppercase tracking-widest gap-2 transition-colors">
              View Full Catalog <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryData.slice(0, 6).map((category, index) => (
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
