/**
 * @file ProductCardSkeleton.tsx
 * @description Accessible loading skeleton structure mirroring the exact layout boundaries of ProductCard to prevent layout shifts.
 */

import React from "react";

export default function ProductCardSkeleton() {
    return (
        <div className="flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm animate-pulse">
            {/* Image Skeleton Area */}
            <div className="aspect-square w-full bg-gray-200" />

            {/* Content Skeleton Area */}
            <div className="flex flex-1 flex-col p-5">
                <div className="flex-1 space-y-3">
                    {/* Title Line */}
                    <div className="h-4 w-2/3 rounded-md bg-gray-200" />
                    {/* Description Lines */}
                    <div className="space-y-1.5">
                        <div className="h-3 w-full rounded-md bg-gray-200" />
                        <div className="h-3 w-4/5 rounded-md bg-gray-200" />
                    </div>
                </div>

                {/* Footer Action Skeleton Row */}
                <div className="mt-6 flex items-center justify-between border-t border-gray-50 pt-4">
                    {/* Price Tag */}
                    <div className="h-5 w-1/4 rounded-md bg-gray-200" />
                    {/* Button */}
                    <div className="h-8 w-20 rounded-xl bg-gray-200" />
                </div>
            </div>
        </div>
    );
}