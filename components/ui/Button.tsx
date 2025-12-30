"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
    size?: "default" | "sm" | "lg" | "icon";
    isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "default", isLoading, children, ...props }, ref) => {

        const variants = {
            primary: "bg-primary text-black hover:brightness-110 border border-transparent font-bold tracking-widest uppercase",
            secondary: "bg-transparent border border-primary text-primary hover:bg-primary/10 font-bold tracking-widest uppercase",
            outline: "border border-border bg-transparent hover:border-primary hover:text-primary font-bold tracking-widest uppercase",
            ghost: "hover:bg-muted hover:text-foreground font-bold tracking-widest uppercase",
            link: "text-primary underline-offset-4 hover:underline hover:brightness-110 uppercase tracking-widest",
        };

        const sizes = {
            default: "h-11 px-8 py-2",
            sm: "h-9 px-4 text-xs",
            lg: "h-14 px-10 text-lg",
            icon: "h-10 w-10",
        };

        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center whitespace-nowrap text-sm transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                    variants[variant],
                    sizes[size],
                    className
                )}
                disabled={isLoading || props.disabled}
                {...props}
            >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {children}
            </button>
        );
    }
);
Button.displayName = "Button";

export { Button };
