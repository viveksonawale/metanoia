"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function ProjectShowcase() {
    const images = [
        "/images/whitedoor.png",
        "/images/window.png",
        "/images/woodendoor.png",
        "/images/choppingboard.png",
    ];

    const firstColumn = [...images, ...images];
    const secondColumn = [...images, ...images];

    return (
        <section className="py-20 bg-background overflow-hidden border-t border-border/40">
            <Container className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <div className="text-muted-foreground text-xs font-bold tracking-widest uppercase mb-2">Project Gallery</div>
                    <h2 className="text-4xl font-bold text-foreground uppercase tracking-tight">
                        Featured <span className="text-accent font-serif italic normal-case">Applications</span>
                    </h2>
                </div>

                <div className="relative h-[600px] w-full overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 h-full">
                        {/* Column 1 - Up */}
                        <motion.div
                            animate={{ y: "-50%" }}
                            transition={{
                                duration: 60,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="flex flex-col gap-4"
                        >
                            {firstColumn.map((src, idx) => (
                                <div key={`col1-${idx}`} className="relative h-64 w-full overflow-hidden bg-secondary rounded-sm flex-shrink-0 border border-border/50 grayscale-[0.15] contrast-[0.95]">
                                    <Image src={src} alt="Project Application" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                                </div>
                            ))}
                        </motion.div>

                        {/* Column 2 - Down */}
                        <motion.div
                            animate={{ y: "0%" }}
                            initial={{ y: "-50%" }}
                            transition={{
                                duration: 50,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="flex flex-col gap-4"
                        >
                            {secondColumn.map((src, idx) => (
                                <div key={`col2-${idx}`} className="relative h-80 w-full overflow-hidden bg-secondary rounded-sm flex-shrink-0 border border-border/50 grayscale-[0.15] contrast-[0.95]">
                                    <Image src={src} alt="Project Application" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                                </div>
                            ))}
                        </motion.div>

                        {/* Column 3 - Up (Desktop only) */}
                        <motion.div
                            animate={{ y: "-50%" }}
                            transition={{
                                duration: 70,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="hidden md:flex flex-col gap-4"
                        >
                            {firstColumn.map((src, idx) => (
                                <div key={`col3-${idx}`} className="relative h-72 w-full overflow-hidden bg-secondary rounded-sm flex-shrink-0 border border-border/50 grayscale-[0.15] contrast-[0.95]">
                                    <Image src={src} alt="Project Application" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                                </div>
                            ))}
                        </motion.div>

                        {/* Column 4 - Down (Desktop only) */}
                        <motion.div
                            animate={{ y: "0%" }}
                            initial={{ y: "-50%" }}
                            transition={{
                                duration: 55,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="hidden md:flex flex-col gap-4"
                        >
                            {secondColumn.map((src, idx) => (
                                <div key={`col4-${idx}`} className="relative h-64 w-full overflow-hidden bg-secondary rounded-sm flex-shrink-0 border border-border/50 grayscale-[0.15] contrast-[0.95]">
                                    <Image src={src} alt="Project Application" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
