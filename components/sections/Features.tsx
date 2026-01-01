"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Move, Hammer, Ruler, Leaf, HeartPulse } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const features = [
    {
        title: "Hygienic Surface",
        description: "Non-porous, bacteria-resistant brushed surface engineered to enhance kitchen hygiene and reduce contamination risks.",
        icon: ShieldCheck,
    },
    {
        title: "Anti-Slip Grip",
        description: "Engineered subtle texture ensures your food stays in place while cutting, without compromising the knife edge.",
        icon: Move,
    },
    {
        title: "304 Stainless Steel Durability",
        description: "Crafted using premium-grade stainless steel. No warping, no cracking — made for heavy, everyday use.",
        icon: Hammer,
    },
    {
        title: "Eco-Friendly & Sustainable",
        description: "Fully recyclable and built to last a lifetime. Better for your home, better for the planet.",
        icon: Leaf,
    },
    {
        title: "Precision Etched Scale",
        description: "Integrated measurements for precise cutting and portion control, etched directly into the steel.",
        icon: Ruler,
    },
    {
        title: "Health First",
        description: "Food-safe material that doesn't harbor odors or bacteria like traditional wood or plastic boards.",
        icon: HeartPulse,
    },
];

export function Features() {
    return (
        <Section id="features" className="bg-background relative overflow-hidden">
            <Container>
                <div className="mb-12 md:mb-16 text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
                        Precision in Every Detail
                    </h2>
                    <p className="text-muted-foreground text-base md:text-lg">
                        Why Metanoia Kitchen standards are the new benchmark for culinary excellence.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
                            className="group relative p-8 rounded-2xl bg-card border border-border/50 hover:border-border transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 cursor-default"
                        >
                            <feature.icon className="h-12 w-12 mb-6 text-muted-foreground group-hover:text-primary transition-colors duration-200" />

                            <h3 className="text-xl font-bold mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
