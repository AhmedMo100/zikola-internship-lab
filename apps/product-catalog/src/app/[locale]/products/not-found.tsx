/**
 * @file not-found.tsx
 * @description Catalog fallback directory layout in case of an invalid collection parameter route.
 */

import React from "react";

export default function ProductsNotFound() {
    return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center p-4 text-center">
            <h2 className="text-2xl font-black text-gray-900">Products Catalog Not Found</h2>
            <p className="mt-2 text-xs font-semibold text-gray-400">
                The catalog pipeline cluster requested could not be extracted from our database.
            </p>
        </div>
    );
}