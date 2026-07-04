/**
 * @file PaginationControls.tsx
 * @description Localized pagination control panel enabling responsive multi-page collection indexing with auto-disabled edge states.
 */

import React from "react";

export interface PaginationControlsProps {
    /** The active page number currently being served to the client interface */
    currentPage: number;
    /** Binary assertion flagging if a subsequent data chunk page exists in the backend scope */
    hasNextPage: boolean;
    /** Binary assertion flagging if a preceding data chunk page exists in the backend scope */
    hasPreviousPage: boolean;
    /** Trigger callback when the user clicks to jump into a new index page boundary */
    onPageChange: (newPage: number) => void;
    /** Active tracking locale parameter to structure fallback string translation models */
    locale: string;
}

export default function PaginationControls({
    currentPage,
    hasNextPage,
    hasPreviousPage,
    onPageChange,
    locale,
}: PaginationControlsProps) {
    return (
        <div className="flex items-center justify-between border-t border-gray-100 bg-white px-4 py-6 sm:px-6 w-full rounded-2xl shadow-sm">
            {/* Mobile Single Layout View Control Row */}
            <div className="flex flex-1 justify-between sm:hidden">
                <button
                    onClick={() => hasPreviousPage && onPageChange(currentPage - 1)}
                    disabled={!hasPreviousPage}
                    className={`relative inline-flex items-center rounded-xl px-4 py-2.5 text-xs font-bold transition-all shadow-sm ${hasPreviousPage
                            ? "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                            : "bg-gray-50 text-gray-300 border border-gray-100 cursor-not-allowed"
                        }`}
                >
                    {locale === "ar" ? "السابق" : "Previous"}
                </button>
                <button
                    onClick={() => hasNextPage && onPageChange(currentPage + 1)}
                    disabled={!hasNextPage}
                    className={`relative ml-3 inline-flex items-center rounded-xl px-4 py-2.5 text-xs font-bold transition-all shadow-sm ${hasNextPage
                            ? "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                            : "bg-gray-50 text-gray-300 border border-gray-100 cursor-not-allowed"
                        }`}
                >
                    {locale === "ar" ? "التالي" : "Next"}
                </button>
            </div>

            {/* Desktop Responsive Layout View Control Cluster */}
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                {/* Meta Context Label Reporting Active Counter Status */}
                <div>
                    <p className="text-xs font-medium text-gray-500">
                        {locale === "ar" ? (
                            <>
                                أنت في الصفحة <span className="font-extrabold text-gray-900">{currentPage}</span>
                            </>
                        ) : (
                            <>
                                Showing page <span className="font-extrabold text-gray-900">{currentPage}</span>
                            </>
                        )}
                    </p>
                </div>

                {/* Desktop Navigation Action Vector Buttons Layout */}
                <div>
                    <nav className="isolate inline-flex gap-2 rounded-md" aria-label="Pagination">
                        {/* Previous Page Button */}
                        <button
                            onClick={() => hasPreviousPage && onPageChange(currentPage - 1)}
                            disabled={!hasPreviousPage}
                            className={`relative inline-flex items-center rounded-xl px-4 py-2.5 text-xs font-bold transition-all ${hasPreviousPage
                                    ? "bg-gray-900 text-white hover:bg-brand-orange shadow-sm"
                                    : "bg-gray-50 text-gray-300 border border-gray-100 cursor-not-allowed"
                                }`}
                        >
                            {locale === "ar" ? "← السابق" : "← Previous"}
                        </button>

                        {/* Next Page Button */}
                        <button
                            onClick={() => hasNextPage && onPageChange(currentPage + 1)}
                            disabled={!hasNextPage}
                            className={`relative inline-flex items-center rounded-xl px-4 py-2.5 text-xs font-bold transition-all ${hasNextPage
                                    ? "bg-gray-900 text-white hover:bg-brand-orange shadow-sm"
                                    : "bg-gray-50 text-gray-300 border border-gray-100 cursor-not-allowed"
                                }`}
                        >
                            {locale === "ar" ? "التالي →" : "Next →"}
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    );
}