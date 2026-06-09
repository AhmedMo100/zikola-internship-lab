import React from "react";
import { cn } from "../lib/utils";

/**
 * Flexible layout container for high-impact landing page sections.
 */
export const Hero = React.forwardRef<HTMLOptionElement, React.ComponentPropsWithoutRef<"section">>(
    ({ className, ...props }, ref) => {
        return (
            <section
                ref={ref}
                className={cn(
                    "w-full bg-brand-bg-light px-6 py-20 text-center flex flex-col items-center justify-center gap-6",
                    className
                )}
                {...props}
            />
        );
    }
);
Hero.displayName = "Hero";

/**
 * Main title for the Hero component with built-in brand gradient support.
 */
const HeroTitle = React.forwardRef<HTMLHeadingElement, React.ComponentPropsWithoutRef<"h1">>(
    ({ className, ...props }, ref) => (
        <h1
            ref={ref}
            className={cn(
                "text-4xl font-extrabold text-brand-dark tracking-tight sm:text-5xl max-w-3xl",
                className
            )}
            {...props}
        />
    )
);
HeroTitle.displayName = "Hero.Title";

/**
 * Supporting description text for the Hero component.
 */
const HeroDescription = React.forwardRef<HTMLParagraphElement, React.ComponentPropsWithoutRef<"p">>(
    ({ className, ...props }, ref) => (
        <p
            ref={ref}
            className={cn("text-lg text-brand-muted sm:text-xl", className)}
            {...props}
        />
    )
);
HeroDescription.displayName = "Hero.Description";

/**
 * Action buttons container inside the Hero component.
 */
const HeroActions = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<"div">>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn("flex flex-wrap items-center justify-center gap-4 mt-2", className)}
            {...props}
        />
    )
);
HeroActions.displayName = "Hero.Actions";

export const HeroSystem = Object.assign(Hero, {
    Title: HeroTitle,
    Description: HeroDescription,
    Actions: HeroActions,
});