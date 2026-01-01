"use client";

import { Container } from "@/components/ui/Container";
import { Check, ShieldCheck, Trophy, BadgeCheck } from "lucide-react";

export function TrustBar() {
    return (
        <section className="relative py-12 bg-background border-b border-border/40">
            <Container className="max-w-[1400px] px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 text-center">
                    {/* Block 1 */}
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-16 h-16 rounded-full border border-border flex items-center justify-center text-[#005F9E] mb-2">
                            <Trophy className="w-7 h-7" strokeWidth={1} />
                        </div>
                        <div className="space-y-3 px-4">
                            <h3 className="text-sm font-bold tracking-widest text-foreground uppercase">
                                Manufacturing Expertise
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Over 25 years of engineering excellence, delivering precision-crafted solutions for global markets.
                            </p>
                        </div>
                    </div>

                    {/* Block 2 */}
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-16 h-16 rounded-full border border-border flex items-center justify-center text-[#005F9E] mb-2">
                            <ShieldCheck className="w-7 h-7" strokeWidth={1} />
                        </div>
                        <div className="space-y-3 px-4">
                            <h3 className="text-sm font-bold tracking-widest text-foreground uppercase">
                                Global Standards
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Fully certified to ISO and UL standards, ensuring maximum safety and reliability for every project.
                            </p>
                        </div>
                    </div>

                    {/* Block 3 */}
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-16 h-16 rounded-full border border-border flex items-center justify-center text-[#005F9E] mb-2">
                            <BadgeCheck className="w-7 h-7" strokeWidth={1} />
                        </div>
                        <div className="space-y-3 px-4">
                            <h3 className="text-sm font-bold tracking-widest text-foreground uppercase">
                                Trusted Projects
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                The preferred choice for residential and commercial developments, trusted by leading architects worldwide.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
