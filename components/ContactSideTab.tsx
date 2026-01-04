"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export function ContactSideTab() {
    const pathname = usePathname();

    if (pathname === "/contact-sales") return null;

    return (
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            className="fixed right-0 top-[120px] z-[100] hidden sm:block" // Hidden on mobile, shown on tablet (sm) and up
        >
            <Link
                href="/contact-sales"
                className="group relative flex items-center"
            >
                <div className="bg-accent text-accent-foreground px-3 py-7 shadow-xl flex flex-col items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:pr-5 group-hover:brightness-110 border-l border-t border-b border-white/10 uppercase font-bold tracking-[0.2em] text-sm">
                    <span
                        style={{
                            writingMode: "vertical-rl",
                            textOrientation: "mixed",
                            transform: "rotate(180deg)"
                        }}
                        className="relative z-10"
                    >
                        Contact
                    </span>
                </div>

                {/* Very subtle glow only on hover */}
                <div className="absolute inset-0 bg-accent/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </Link>
        </motion.div>
    );
}
