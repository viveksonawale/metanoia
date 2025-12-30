"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
// We don't have radix-ui installed for label, so we'll make a simple one or check package.json. 
// Assuming no external deps for now to be safe, or just a simple label wrapper.

const Label = React.forwardRef<
    HTMLLabelElement,
    React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => (
    <label
        ref={ref}
        className={cn(
            "text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 uppercase tracking-widest text-muted-foreground mb-2 block",
            className
        )}
        {...props}
    />
))
Label.displayName = "Label"

export { Label }
