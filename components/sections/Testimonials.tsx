"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Star, Quote } from "lucide-react";

const reviews = [
    {
        name: "Chef Arjun Kapoor",
        role: "Head Chef, The Bombay Canteen",
        content: "The precision scale is a game changer for portion control. It's the cleanest surface I've ever worked on.",
        rating: 5,
    },
    {
        name: "Sarah Jenkins",
        role: "Home Baker",
        content: "I threw away all my plastic boards after one week with Metanoia. It just feels cleaner, and it looks stunning in my kitchen.",
        rating: 5,
    },
    {
        name: "David Chen",
        role: "Food Stylist",
        content: "The brushed finish is not only practical but photographs beautifully. A must-have for any modern kitchen setup.",
        rating: 5,
    },
];

export function Testimonials() {
    return (
        <Section id="reviews" className="bg-muted/10 relative overflow-hidden">
            <Container className="relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Trusted by Professionals</h2>
                    <p className="text-muted-foreground text-lg">
                        Join thousands of satisfied chefs who have upgraded to better hygiene and precision.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
                            className="bg-card p-8 rounded-2xl border border-border shadow-lg relative"
                        >
                            <Quote className="absolute top-6 right-8 h-8 w-8 text-muted-foreground/20" />

                            <div className="flex gap-1 mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                                ))}
                            </div>

                            <p className="text-foreground/90 italic mb-6 leading-relaxed">
                                &quot;{review.content}&quot;
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-foreground font-bold">
                                    {review.name[0]}
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm">{review.name}</h4>
                                    <p className="text-xs text-muted-foreground">{review.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
