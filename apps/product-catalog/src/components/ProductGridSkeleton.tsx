/**
 * @file ProductGridSkeleton.tsx
 * @description Orchestrates a structural loading matrix grid of shimmer items matching the exact density layout.
 */

import React from "react";
import ProductCardSkeleton from "./ProductCardSkeleton";

export interface ProductGridSkeletonProps {
    /** The density or count of loading cards to safely project on screen. Defaults to 4. */
    limit?: number;
}

export default function ProductGridSkeleton({ limit = 4 }: ProductGridSkeletonProps) {
    // Contextually array mapping an empty layout length initialized by the strict item limit
    const skeletonCards = Array.from({ length: limit }, (_, index) => index);

    return (
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 w-full">
            {skeletonCards.map((id) => (
                <ProductCardSkeleton key={id} />
            ))}
        </div>
    );
}