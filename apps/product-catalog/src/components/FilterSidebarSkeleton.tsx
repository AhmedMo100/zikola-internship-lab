/**
 * @file FilterSidebarSkeleton.tsx
 * @description Pulse loading skeleton structure preventing layout shifts on the dynamic filter sidebar array.
 */

import React from "react";

export default function FilterSidebarSkeleton() {
    // Simulating an arbitrary count of category loading states (e.g., 4 rows)
    const rows = Array.from({ length: 4 }, (_, i) => i);

    return (
        <div className="w-full lg:w-64 shrink-0 animate-pulse">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                {/* Header Title Shimmer Line */}
                <div className="h-4 w-1/3 rounded-md bg-gray-200 border-b border-gray-50 pb-4" />

                {/* Buttons Content Matrix Shimmer */}
                <div className="mt-8 flex flex-row flex-wrap gap-2 lg:flex-col lg:space-y-3">
                    {rows.map((row) => (
                        <div
                            key={row}
                            className="h-10 w-24 lg:w-full rounded-xl bg-gray-200"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}