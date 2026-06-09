import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../lib/utils";

export interface HeaderProps extends React.ComponentPropsWithoutRef<"header"> {
    /**
     * If true, the header will render as its child component while merging properties.
     * @default false
     */
    asChild?: boolean;
}

/**
 * Global application header navigation bar with centered layout and brand styling.
 * Built using React.forwardRef to support deep DOM references and custom wrappers.
 */
export const Header = React.forwardRef<HTMLElement, HeaderProps>(
    ({ className, asChild = false, ...props }, ref) => {
        // Determine the rendering element based on Polymorphic 'asChild' property
        const Component = asChild ? Slot : "header";

        return (
            <Component
                ref={ref}
                className={cn(
                    "w-full bg-white px-6 py-8 sticky top-0 z-50 border-gray-800 flex items-center justify-center transition-all",
                    className
                )}
                {...props}
            >
                {props.children}
            </Component>
        );
    }
);

Header.displayName = "Header";