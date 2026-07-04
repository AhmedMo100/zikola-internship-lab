/**
 * @file loading.tsx
 * @description Root products directory global streaming layout loader.
 */

import React from "react";
import FilterSidebarSkeleton from "@/components/FilterSidebarSkeleton";
import ProductGridSkeleton from "@/components/ProductGridSkeleton";

export default function ProductsLoading() {
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
            <div className="mb-10 space-y-3 animate-pulse">
                <div className="h-8 w-48 bg-gray-200 rounded-md" />
                <div className="h-4 w-96 bg-gray-200 rounded-md" />
            </div>
            <div className="flex flex-col gap-8 lg:flex-row items-start">
                <FilterSidebarSkeleton />
                <div className="flex-1 w-full">
                    <ProductGridSkeleton limit={4} />
                </div>
            </div>
        </div>
    );
}