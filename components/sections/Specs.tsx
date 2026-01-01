"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Check } from "lucide-react";

export function Specs() {
    const specs = [
        { label: "Material", value: "304 Grade Stainless Steel" },
        { label: "Dimensions", value: "30 cm x 20 cm" },
        { label: "Thickness", value: "2.0 mm" },
        { label: "Weight", value: "1.2 Kg" },
        { label: "Finish", value: "Brushed Texture (Anti-slip)" },
        { label: "Features", value: "Etched Scale, Hanging Slot" },
        { label: "Origin", value: "Made in India" },
    ];

    return (
        <Section id="specs" className="bg-muted/30">
            <Container>
                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Technical Product Specifications</h2>
                        <p className="text-base md:text-lg text-muted-foreground mb-8">
                            Engineered to meet professional standards, suitable for home and commercial kitchens.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-muted p-1 rounded-full"><Check className="h-4 w-4 text-primary" /></div>
                                <div>
                                    <h4 className="font-semibold">Food Safe & Non-Toxic</h4>
                                    <p className="text-sm text-muted-foreground">Certified safe for direct food contact.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-muted p-1 rounded-full"><Check className="h-4 w-4 text-primary" /></div>
                                <div>
                                    <h4 className="font-semibold">Dishwasher Safe</h4>
                                    <p className="text-sm text-muted-foreground">Easy to clean and maintain without degradation.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                        className="bg-card rounded-2xl border border-border/50 shadow-sm overflow-hidden"
                    >
                        <div className="p-6 md:p-8">
                            <h3 className="text-xl font-bold mb-6 text-foreground">Data Sheet</h3>
                            <dl className="divide-y divide-border/50">
                                {specs.map((item, index) => (
                                    <div key={index} className="py-4 flex justify-between items-center hover:bg-muted/50 transition-colors duration-150 px-2 rounded-md">
                                        <dt className="text-muted-foreground font-medium">{item.label}</dt>
                                        <dd className="text-foreground font-semibold text-right">{item.value}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                        <div className="bg-muted p-4 text-center text-foreground text-sm font-medium">
                            Detailed PDF Spec Sheet Available upon Request
                        </div>
                    </motion.div>
                </div>
            </Container>
        </Section>
    );
}
