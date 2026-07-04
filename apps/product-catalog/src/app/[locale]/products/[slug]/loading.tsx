/**
 * @file loading.tsx
 * @description Streaming skeletal wireframe mimicking the standalone single product sheet details layout.
 */

import React from "react";

export default function SingleProductLoading() {
    return (
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 min-h-screen animate-pulse space-y-8">
            <div className="h-4 w-32 bg-gray-200 rounded-md" />
            <div className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2 bg-white rounded-3xl border border-gray-100 p-6 md:p-10 shadow-sm">
                <div className="aspect-square w-full bg-gray-200 rounded-2xl" />
                <div className="flex flex-col justify-between py-2 space-y-6">
                    <div className="space-y-4">
                        <div className="h-6 w-24 bg-gray-200 rounded-md" />
                        <div className="h-10 w-3/4 bg-gray-200 rounded-md" />
                        <div className="h-6 w-20 bg-gray-200 rounded-md" />
                        <div className="space-y-2 pt-6 border-t border-gray-100">
                            <div className="h-4 w-full bg-gray-200 rounded-md" />
                            <div className="h-4 w-5/6 bg-gray-200 rounded-md" />
                        </div>
                    </div>
                    <div className="h-14 w-full bg-gray-200 rounded-2xl" />
                </div>
            </div>
        </div>
    );
}