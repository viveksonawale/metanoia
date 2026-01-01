
"use client";

import React from "react";
import { ChevronDown, Download, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { Specification } from "@/lib/categoryData";
import { motion, AnimatePresence } from "framer-motion";

interface ProductSpecificationsProps {
    specifications: {
        category: string;
        items: Specification[];
    }[];
}

export const ProductSpecifications = ({ specifications }: ProductSpecificationsProps) => {
    const [openCategories, setOpenCategories] = React.useState<string[]>(
        specifications.map(s => s.category) // All open by default
    );

    const toggleCategory = (category: string) => {
        setOpenCategories(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    };

    return (
        <div className="bg-background border border-border rounded-sm overflow-hidden shadow-sm">
            <div className="p-6 border-b border-border flex items-center justify-between bg-secondary/30">
                <h3 className="text-xl font-bold text-foreground uppercase tracking-wide">Technical Specifications</h3>
                <button className="flex items-center gap-2 text-xs font-bold text-accent hover:text-accent/80 transition-colors uppercase tracking-wider">
                    <Download className="w-4 h-4" />
                    Download Spec Sheet
                </button>
            </div>

            <div className="divide-y divide-border">
                {specifications.map((section, idx) => (
                    <div key={idx} className="bg-background">
                        <button
                            onClick={() => toggleCategory(section.category)}
                            className="w-full flex items-center justify-between p-4 px-6 bg-secondary/50 hover:bg-secondary transition-colors text-left"
                        >
                            <span className="font-semibold text-foreground text-sm uppercase tracking-wider">
                                {section.category}
                            </span>
                            <ChevronDown
                                className={cn(
                                    "w-4 h-4 text-muted-foreground transition-transform duration-300",
                                    openCategories.includes(section.category) && "rotate-180"
                                )}
                            />
                        </button>

                        <AnimatePresence initial={false}>
                            {openCategories.includes(section.category) && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    <div className="divide-y divide-border/50">
                                        {section.items.map((item, itemIdx) => (
                                            <div
                                                key={itemIdx}
                                                className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6 py-4 hover:bg-secondary/20 transition-colors"
                                            >
                                                <div className="text-muted-foreground text-sm font-medium">
                                                    {item.label}
                                                </div>
                                                <div className="text-foreground text-sm">
                                                    {item.value}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    );
};
