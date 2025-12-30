"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Check } from "lucide-react";

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
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-background">
            {/* Subtle stone texture overlay */}
            <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />

            <Container className="relative z-10 grid lg:grid-cols-2 gap-12 items-center max-w-[1400px] px-4 sm:px-4 lg:px-4">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-[#44d62c]/30 text-[#44d62c] text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-[22px] bg-[#44d62c]/5">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-[#44d62c] opacity-75 animate-ping"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#44d62c]"></span>
                        </span>
                        Global Industrial Solutions
                    </div>

                    <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
                        Engineered for <span className="text-primary">Precision</span>
                        <br />
                        Designed for Life.
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
                        Constructing the future with high-performance architectural materials and industrial-grade specifications.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-10">
                        <Button size="lg" className="w-full sm:w-auto text-base md:text-lg h-12 md:h-14 relative overflow-hidden after:content-[''] after:absolute after:top-0 after:left-[-100%] after:w-full after:h-full after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent after:animate-shine">
                            Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button variant="secondary" size="lg" className="w-full sm:w-auto text-base md:text-lg h-12 md:h-14">
                            View Features
                        </Button>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-lg text-muted-foreground font-medium">
                        <div className="flex items-center gap-2">
                            <Check className="text-primary h-6 w-6 flex-shrink-0" /> ISO 9001:2015
                        </div>
                        <div className="flex items-center gap-2">
                            <Check className="text-primary h-6 w-6 flex-shrink-0" /> UL Fire Rated
                        </div>
                        <div className="flex items-center gap-2">
                            <Check className="text-primary h-6 w-6 flex-shrink-0" /> High-Cycle Tested
                        </div>
                    </div>
                </motion.div>

                {/* Hero Marquee */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative h-[550px] md:h-[700px] max-h-[80vh] w-full overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] -mt-10"
                >
                    <div className="grid grid-cols-2 gap-4 h-full">
                        {/* Column 1 - Up */}
                        <motion.div
                            animate={{ y: "-50%" }}
                            transition={{
                                duration: 40,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="flex flex-col gap-4"
                        >
                            {firstColumn.map((src, idx) => {
                                // Dynamic height based on image type
                                const getImageHeight = (imageSrc: string) => {
                                    if (imageSrc.includes('window.png')) return 'h-80'; // 320px for window
                                    if (imageSrc.includes('whitedoor.png')) return 'h-[500px]'; // 500px for whitedoor
                                    if (imageSrc.includes('woodendoor.png')) return 'h-[500px]'; // 500px for woodendoor
                                    if (imageSrc.includes('choppingboard.png')) return 'h-96'; // 384px for choppingboard
                                    return 'h-80'; // Default
                                };

                                return (
                                    <div
                                        key={`col1-${idx}`}
                                        className={`relative ${getImageHeight(src)} w-full overflow-hidden bg-muted/20 flex-shrink-0`}
                                    >
                                        <Image
                                            src={src}
                                            alt="Gallery Item"
                                            fill
                                            className="object-cover hover:scale-105 transition-transform duration-500"
                                            sizes="(max-width: 768px) 50vw, 25vw"
                                        />
                                    </div>
                                );
                            })}
                        </motion.div>

                        {/* Column 2 - Down */}
                        <motion.div
                            animate={{ y: "0%" }}
                            initial={{ y: "-50%" }}
                            transition={{
                                duration: 40,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="flex flex-col gap-4"
                        >
                            {secondColumn.map((src, idx) => {
                                // Dynamic height based on image type
                                const getImageHeight = (imageSrc: string) => {
                                    if (imageSrc.includes('window.png')) return 'h-80'; // 320px for window
                                    if (imageSrc.includes('whitedoor.png')) return 'h-[500px]'; // 500px for whitedoor
                                    if (imageSrc.includes('woodendoor.png')) return 'h-[500px]'; // 500px for woodendoor
                                    if (imageSrc.includes('choppingboard.png')) return 'h-96'; // 384px for choppingboard
                                    return 'h-80'; // Default
                                };

                                return (
                                    <div
                                        key={`col2-${idx}`}
                                        className={`relative ${getImageHeight(src)} w-full overflow-hidden bg-muted/20 flex-shrink-0`}
                                    >
                                        <Image
                                            src={src}
                                            alt="Gallery Item"
                                            fill
                                            className="object-cover hover:scale-105 transition-transform duration-500"
                                            sizes="(max-width: 768px) 50vw, 25vw"
                                        />
                                    </div>
                                );
                            })}
                        </motion.div>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
