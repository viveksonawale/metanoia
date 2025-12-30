"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={scrollToTop}
                    className={cn(
                        "fixed bottom-8 right-8 z-50 p-3",
                        "bg-zinc-900 border border-zinc-800",
                        "rounded-full shadow-lg",
                        "text-[#44d62c] hover:text-[#5aff3d]", // Razer green colors
                        "hover:border-[#44d62c]/50 hover:shadow-[#44d62c]/20 hover:shadow-[0_0_15px_rgba(68,214,44,0.2)]",
                        "transition-colors duration-300",
                        "group"
                    )}
                    aria-label="Scroll to top"
                >
                    <ChevronUp className="w-6 h-6 stroke-[3px]" />
                </motion.button>
            )}
        </AnimatePresence>
    );
}
