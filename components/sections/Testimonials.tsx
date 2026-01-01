"use client";

import { Container } from "@/components/ui/Container";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
    {
        quote: "Metanoia's fire-rated systems didn't just meet our safety compliance needs—they exceeded them. The precision engineering is evident in every detail.",
        author: "David Chen",
        role: "Senior Lead Architect",
        company: "Global Infrastructure Partners",
    },
    {
        quote: "We needed a partner who could deliver custom industrial fabrication at scale without compromising quality. Metanoia delivered on time, every time.",
        author: "Sarah Miller",
        role: "Director of Operations",
        company: "Apex Manufacturing Solutions",
    },
    {
        quote: "The acoustic performance of their glazing systems transformed our corporate headquarters. A perfect blend of aesthetic appeal and technical functionality.",
        author: "James Peterson",
        role: "Chief Facility Officer",
        company: "NextGen Tech Park",
    }
];

export function Testimonials() {
    return (
        <section className="py-16 md:py-24 bg-muted/30 border-t border-border/40">
            <Container className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <div className="text-muted-foreground text-xs font-bold tracking-widest uppercase mb-2">Trusted By Industry Leaders</div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground uppercase tracking-tight">
                        Client <span className="text-accent font-serif italic normal-case">Perspectives</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0, 95, 158, 0.15)" }}
                            className="group relative bg-background p-8 border border-border/50 rounded-sm shadow-sm transition-colors duration-300"
                        >
                            <Quote className="w-10 h-10 text-accent/20 mb-6 group-hover:text-accent transition-colors duration-500" />

                            <p className="text-foreground/80 leading-relaxed mb-8 italic text-lg decoration-border/30">
                                &ldquo;{item.quote}&rdquo;
                            </p>

                            <div className="flex flex-col border-t border-border/40 pt-6">
                                <span className="text-foreground font-bold tracking-tight text-base">{item.author}</span>
                                <span className="text-sm text-muted-foreground font-medium mb-1">{item.role}</span>
                                <span className="text-xs text-accent font-bold uppercase tracking-wider">{item.company}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
