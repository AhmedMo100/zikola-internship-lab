"use client";

/**
 * @file error.tsx
 * @description Global error boundary safety net for the products collection catalog.
 */

import React, { useEffect } from "react";

export default function ProductsError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error("Products Segment Runtime Error Logged:", error);
    }, [error]);

    return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center p-4 text-center">
            <div className="rounded-2xl border border-red-100 bg-red-50/50 p-8 max-w-md shadow-sm">
                <h2 className="text-lg font-black text-red-600">Something went wrong!</h2>
                <p className="mt-2 text-xs font-semibold text-gray-500 leading-relaxed">
                    The system failed to compile or stream the dynamic products matrix pipeline safely.
                </p>
                <button
                    onClick={() => reset()}
                    className="mt-6 inline-flex items-center justify-center rounded-xl bg-gray-900 px-4 py-2.5 text-xs font-bold text-white transition-all hover:bg-brand-orange shadow-sm"
                >
                    Try Again
                </button>
            </div>
        </div>
    );
}