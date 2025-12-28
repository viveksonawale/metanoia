"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function Footer() {
    return (
        <footer className="bg-background border-t border-border py-12">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <div className="flex items-center gap-3">
                            <div className="relative w-8 h-8">
                                <Image
                                    src="/images/logo.png"
                                    alt="Metanoia"
                                    fill
                                    className="object-contain filter brightness-110"
                                />
                            </div>
                            <span className="text-xl font-bold tracking-tighter">METANOIA</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Engineered for Precision. Designed for Life.
                        </p>
                    </div>

                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-primary transition-colors">Contact</a>
                    </div>

                    <div className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Metanoia Kitchen. All rights reserved.
                    </div>
                </div>
            </Container>
        </footer>
    );
}
