import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

/**
 * Paragraph Style Variants configuration using CVA
 */
const paragraphVariants = cva(
    "leading-relaxed tracking-normal antialiased selection:bg-brand-orange/20 selection:text-brand-orange",
    {
        variants: {
            // 💡 Updated: Changed default to a rich, solid deep blue-ink tone (No black, no gray)
            variant: {
                default: "text-blue-900 dark:text-blue-40", // Deep ink blue for ultra-premium look
                success: "text-emerald-800 dark:text-emerald-400 font-medium",
                warning: "text-amber-900 dark:text-amber-400 font-medium",
                error: "text-rose-800 dark:text-rose-400 font-semibold",
            },
            // Mobile-first responsive font sizes
            size: {
                sm: "text-xs md:text-sm",
                md: "text-sm md:text-base",
                lg: "text-base md:text-lg",
                xl: "text-lg md:text-xl",
                "2xl": "text-xl md:text-2xl",
            },
        },
        // Custom rule: extra weights for large errors
        compoundVariants: [
            {
                variant: "error",
                size: "lg",
                className: "font-bold tracking-tight",
            },
        ],
        // Fallback defaults
        defaultVariants: {
            variant: "default",
            size: "md",
        },
    }
);

/**
 * Component Props merging native HTML attributes, CVA tokens, and Radix Slot
 */
export interface ParagraphProps
    extends React.ComponentPropsWithoutRef<"p">,
    VariantProps<typeof paragraphVariants> {
    asChild?: boolean;
}

/**
 * Reusable Polymorphic Paragraph Component with Ref Forwarding
 */
const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        // Switch element type if asChild is true
        const Comp = asChild ? Slot : "p";

        return (
            <Comp
                ref={ref}
                // Merge design tokens with external className safely via twMerge
                className={cn(paragraphVariants({ variant, size }), className)}
                // HTML5 data attributes for easier debugging and DOM testing
                data-slot="paragraph"
                data-variant={variant || "default"}
                data-size={size || "md"}
                {...props}
            />
        );
    }
);

// Component descriptor for React DevTools
Paragraph.displayName = "Paragraph";

export { Paragraph };