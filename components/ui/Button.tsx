"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "link" | "accent";
    size?: "default" | "sm" | "lg" | "icon";
    isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "default", isLoading, children, ...props }, ref) => {

        const variants = {
            primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm font-medium",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 font-medium",
            accent: "bg-accent text-accent-foreground hover:bg-accent/90 shadow-sm font-medium",
            outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground font-medium",
            ghost: "hover:bg-accent hover:text-accent-foreground font-medium",
            link: "text-primary underline-offset-4 hover:underline",
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
