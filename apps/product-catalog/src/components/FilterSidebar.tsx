/**
 * @file FilterSidebar.tsx
 * @description Localized sidebar component rendering dynamic category navigation links with precise active state tracking.
 */

import React from "react";

export interface FilterSidebarProps {
    /** Array of localized categories fetched from the database ecosystem */
    categories: string[];
    /** The currently selected and active category tracking state */
    activeCategory: string;
    /** Callback trigger when a user clicks on an alternative category node */
    onCategoryChange: (category: string) => void;
    /** Active runtime locale for translation fallback layers */
    locale: string;
}

export default function FilterSidebar({
    categories,
    activeCategory,
    onCategoryChange,
    locale,
}: FilterSidebarProps) {
    return (
        <aside className="w-full lg:w-64 shrink-0">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sticky top-24">
                {/* Sidebar Localized Header Text */}
                <h2 className="text-sm font-extrabold uppercase tracking-wider text-gray-900 border-b border-gray-50 pb-4">
                    {locale === "ar" ? "التصنيفات" : "Categories"}
                </h2>

                {/* Categories Navigation Action Blueprint */}
                <nav className="mt-5 flex flex-row flex-wrap gap-2 lg:flex-col lg:space-y-1">
                    {/* Default "All" Filter Button Anchor */}
                    <button
                        onClick={() => onCategoryChange("all")}
                        className={`w-auto lg:w-full text-start flex items-center justify-between px-4 py-3 text-xs font-bold rounded-xl transition-all duration-200 ${activeCategory === "all"
                                ? "bg-gray-900 text-white shadow-sm"
                                : "bg-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                            }`}
                    >
                        <span>{locale === "ar" ? "الكل" : "All Products"}</span>
                    </button>

                    {/* Iterating Dynamically Over The Localized API Categories Matrix */}
                    {categories.map((category) => {
                        const isActive = activeCategory === category;
                        return (
                            <button
                                key={category}
                                onClick={() => onCategoryChange(category)}
                                className={`w-auto lg:w-full text-start flex items-center justify-between px-4 py-3 text-xs font-bold rounded-xl transition-all duration-200 capitalize ${isActive
                                        ? "bg-gray-900 text-white shadow-sm"
                                        : "bg-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                    }`}
                            >
                                <span>{category}</span>
                            </button>
                        );
                    })}
                </nav>
            </div>
        </aside>
    );
}