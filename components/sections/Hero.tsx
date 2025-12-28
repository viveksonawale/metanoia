"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
            {/* Subtle stone texture overlay */}
            <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />

            <Container className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm font-medium mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        New Release 2026
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
                        Engineered for <span className="text-primary">Precision</span>
                        <br />
                        Designed for Life.
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
                        Experience the perfect blend of precision engineering and hygienic stainless-steel design to elevate your cooking experience.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-10">
                        <Button size="lg" className="w-full sm:w-auto text-base md:text-lg h-12 md:h-14">
                            Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button variant="secondary" size="lg" className="w-full sm:w-auto text-base md:text-lg h-12 md:h-14">
                            View Features
                        </Button>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="text-primary h-4 w-4 flex-shrink-0" /> 304 Grade Stainless Steel
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="text-primary h-4 w-4 flex-shrink-0" /> Antibacterial Surface
                        </div>
                    </div>
                </motion.div>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                    className="relative"
                >
                    <div className="relative aspect-square md:aspect-[4/5] lg:aspect-square w-full max-w-2xl mx-auto">
                        <Image
                            src="/images/product-hero-v2.png"
                            alt="Metanoia Stainless Steel Cutting Board"
                            fill
                            className="object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                            priority
                        />
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
