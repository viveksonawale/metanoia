"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

export function Hero() {
    const images = [
        "/images/whitedoor.png",
        "/images/window.png",
        "/images/woodendoor.png",
        "/images/choppingboard.png",
        // Repeat simply to ensure we have enough height if needed, but duplication logic handles loop.
    ];


    const firstColumn = [...images, ...images];
    const secondColumn = [...images, ...images];

    return (
        <section className="relative pt-20 pb-20 md:pt-28 md:pb-32 overflow-hidden bg-background">
            {/* Clean Light Gradient Overlay - Simplified for industrial look */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/60 pointer-events-none" />

            <Container className="relative z-10 grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-[1400px] px-4 sm:px-6 lg:px-8">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="md:-mt-16 lg:-mt-24"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-border/60 text-muted-foreground text-[10px] xs:text-[11px] font-medium tracking-wider uppercase mb-4 md:mb-6 bg-secondary/30">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                        </span>
                        Global Industrial Solutions
                    </div>

                    <h1 className="text-4xl xs:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-4 md:mb-6 leading-[1.1] max-w-2xl">
                        Engineered for <span className="text-accent">Precision.</span>
                        <br />
                        Designed for Life.
                    </h1>

                    <p className="text-base xs:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-lg leading-relaxed font-normal">
                        High-performance architectural solutions for residential and commercial spaces.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 md:mb-10 w-full sm:w-auto">
                        <Link href="/catalog" className="w-full sm:w-auto">
                            <Button variant="accent" size="lg" className="w-full text-base md:text-lg h-12 md:h-14 transition-all rounded-sm shadow-sm hover:shadow-md">
                                EXPLORE PRODUCTS <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <Link href="/contact-sales" className="w-full sm:w-auto">
                            <Button variant="outline" size="lg" className="w-full text-base md:text-lg h-12 md:h-14 bg-background border-border/60 hover:bg-secondary text-foreground hover:text-foreground rounded-sm">
                                Consult Our Team
                            </Button>
                        </Link>
                    </div>

                    <div className="flex flex-col xs:flex-row xs:items-center gap-3 xs:gap-6 md:gap-8 text-sm md:text-lg text-muted-foreground font-medium">
                        <div className="flex items-center gap-2">
                            <Check className="text-accent h-4 w-4 md:h-5 md:w-5 flex-shrink-0" /> <span className="text-foreground">ISO 9001:2015</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Check className="text-accent h-4 w-4 md:h-5 md:w-5 flex-shrink-0" /> <span className="text-foreground">UL Fire Rated</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Check className="text-accent h-4 w-4 md:h-5 md:w-5 flex-shrink-0" /> <span className="text-foreground">High-Cycle Tested</span>
                        </div>
                    </div>
                </motion.div>

                {/* Single Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="relative h-[280px] xs:h-[350px] sm:h-[500px] md:h-[600px] w-full mt-8 md:mt-0"
                >
                    <div className="relative h-full w-full overflow-hidden">
                        <Image
                            src="/images/hero_showcase.png"
                            alt="Premium Windows and Doors Collection"
                            fill
                            className="object-contain"
                            priority
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 50vw"
                        />
                    </div>
                    {/* Decorative element behind */}
                    <div className="absolute -z-10 top-8 -right-8 w-full h-full border border-border/40 rounded-lg hidden md:block" />
                </motion.div>
            </Container>
        </section>
    );
}
