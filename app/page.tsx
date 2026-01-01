import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { ProjectShowcase } from "@/components/sections/ProjectShowcase";
import { TrustBar } from "@/components/sections/TrustBar";
import { Testimonials } from "@/components/sections/Testimonials";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/ui/Container";
import { CategoryCard } from "@/components/CategoryCard";
import { categoryData } from "@/lib/categoryData";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <Hero />
      <TrustBar />
      <ProjectShowcase />

      {/* Product Categories Section - Matches Reference Image */}
      <section id="products" className="py-20 bg-background">
        <Container className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="text-muted-foreground text-xs font-bold tracking-widest uppercase mb-2">Catalog</div>
              <h2 className="text-4xl font-bold text-foreground uppercase tracking-tight">
                Product <span className="text-accent font-serif italic normal-case">Categories</span>
              </h2>
            </div>
            <Link href="/catalog" className="hidden md:flex items-center text-xs font-bold text-muted-foreground hover:text-primary uppercase tracking-widest gap-2 transition-colors">
              View Full Catalog <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
        </Container>
      </section>

      <Testimonials />

      <Footer />
    </main>
  );
}
