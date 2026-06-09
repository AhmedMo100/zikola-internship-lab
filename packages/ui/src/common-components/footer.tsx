import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../lib/utils";

export interface FooterProps extends React.ComponentPropsWithoutRef<"footer"> {
    /**
     * If true, the footer will render as its child component while merging properties.
     * @default false
     */
    asChild?: boolean;
}

/**
 * Global application footer section utilizing brand layout guidelines.
 */
export const Footer = React.forwardRef<HTMLElement, FooterProps>(
    ({ className, asChild = false, ...props }, ref) => {
        const Component = asChild ? Slot : "footer";
        return (
            <Component
                ref={ref}
                className={cn(
                    "w-full bg-brand-dark px-6 py-8 mt-auto text-center text-sm text-brand-muted",
                    className
                )}
                {...props}
            />
        );
    }
);

Footer.displayName = "Footer";