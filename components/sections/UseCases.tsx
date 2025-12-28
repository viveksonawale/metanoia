"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ChefHat, Utensils, Home } from "lucide-react";
import { Button } from "@/components/ui/Button";

const cases = [
    {
        title: "Professional Kitchens",
        description: "Built to withstand the high-volume demands of commercial culinary environments.",
        icon: ChefHat,
    },
    {
        title: "Home Chefs",
        description: "Elevate your home cooking with tools designed for precision and hygiene.",
        icon: Home,
    },
    {
        title: "Culinary Schools",
        description: "The perfect teaching tool for mastering knife skills and food safety.",
        icon: Utensils,
    },
];

export function UseCases() {
    return (
        <Section className="bg-background">
            <Container>
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                    <div className="max-w-xl">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Designed for Every Chef</h2>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            From the high-pressure environment of a Michelin-star kitchen to the heart of your home, Metanoia delivers consistency you can trust.
                        </p>
                    </div>
                    <div className="flex justify-end">
                        <Button variant="outline" size="lg">Explore Applications</Button>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {cases.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
                            className="p-8 rounded-3xl bg-muted/30 border border-border hover:border-primary/30 transition-colors duration-150 flex flex-col items-start gap-4 h-64 justify-end group cursor-default"
                        >
                            <div className="p-3 bg-background rounded-2xl shadow-sm text-muted-foreground">
                                <item.icon className="h-8 w-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                                <p className="text-muted-foreground">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
