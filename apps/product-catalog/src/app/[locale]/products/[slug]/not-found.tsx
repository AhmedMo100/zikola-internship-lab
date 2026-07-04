/**
 * @file not-found.tsx
 * @description Targeted SEO slug 404 response dashboard configuration fallback.
 */

import React from "react";

export default function SingleProductNotFound() {
    return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center p-4 text-center">
            <h2 className="text-2xl font-black text-gray-900">Product Does Not Exist</h2>
            <p className="mt-2 text-xs font-semibold text-gray-400">
                The specific dynamic URL identifier or product item asset does not map to any database registries.
            </p>
        </div>
    );
}