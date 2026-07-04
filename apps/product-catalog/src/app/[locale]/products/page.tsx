"use client";

/**
 * @file page.tsx
 * @description Products catalog dashboard orchestrating dynamic filtering, client-side caching, and synchronized pagination controls.
 */

import React, { useState, use } from "react";
import { useQuery } from "@tanstack/react-query";
import FilterSidebar from "@/components/FilterSidebar";
import FilterSidebarSkeleton from "@/components/FilterSidebarSkeleton";
import ProductGrid from "@/components/ProductGrid";
import ProductGridSkeleton from "@/components/ProductGridSkeleton";
import PaginationControls from "@/components/PaginationControls";

// Dynamic metadata fallback or layout parameter types
interface ProductsPageProps {
    params: Promise<{ locale: string }>;
}

/**
 * Fetcher function interacting directly with our localized localized chunk API route
 */
async function fetchProductsPipeline(page: number, category: string, locale: string) {
    const response = await fetch(
        `/api/products?page=${page}&limit=4&category=${category}&locale=${locale}`
    );
    if (!response.ok) {
        throw new Error("Network response was not stable");
    }
    return response.json();
}

export default function ProductsPage({ params }: ProductsPageProps) {
    // Resolving the async route params using React.use() hook configuration
    const { locale } = use(params);

    // Syncing state tracking layouts for runtime UI actions
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [activeCategory, setActiveCategory] = useState<string>("all");

    // Orchestrating data synchronization via TanStack Query client cache engine
    const { data, isLoading, isFetching, error } = useQuery({
        queryKey: ["products", currentPage, activeCategory, locale],
        queryFn: () => fetchProductsPipeline(currentPage, activeCategory, locale),
        placeholderData: (previousData) => previousData, // Keeps old data visible while fetching new pages (prevents flashing)
        staleTime: 5000,
    });

    // Extracting uniquely mapped categories from our data to pass into the sidebar dynamically
    // In a real system, you might have a dedicated API route for this, or extract it from total counts
    const staticCategoriesPool = locale === "ar"
        ? ["إكسسوارات", "شاشات", "صوتيات", "أثاث"]
        : ["accessories", "screens", "audio", "furniture"];

    const handleCategoryChange = (category: string) => {
        setActiveCategory(category);
        setCurrentPage(1); // Reset back to first page when changing filters
    };

    return (
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
            {/* Upper Context Branding Block */}
            <div className="mb-10">
                <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                    {locale === "ar" ? "متجر المنتجات الذكي" : "Smart Products Store"}
                </h1>
                <p className="mt-2 text-sm text-gray-500">
                    {locale === "ar"
                        ? "تصفح أحدث الأجهزة والمستلزمات المكتبية المجهزة بعناية فائقة."
                        : "Explore premium hardware and office ergonomics engineered for performance."}
                </p>
            </div>

            {/* Structural Adaptive Sidebar + Grid Assembly Route */}
            <div className="flex flex-col gap-8 lg:flex-row items-start">

                {/* Left Section: Filter Sidebar State Controllers */}
                {isLoading ? (
                    <FilterSidebarSkeleton />
                ) : (
                    <FilterSidebar
                        categories={staticCategoriesPool}
                        activeCategory={activeCategory}
                        onCategoryChange={handleCategoryChange}
                        locale={locale}
                    />
                )}

                {/* Right Section: Core Dynamic Catalog Grid Pipeline */}
                <div className="flex-1 w-full space-y-8">
                    {isLoading || (isFetching && !data) ? (
                        <ProductGridSkeleton limit={4} />
                    ) : error ? (
                        <div className="rounded-xl bg-red-50 p-4 text-center text-sm font-semibold text-red-600">
                            {locale === "ar" ? "عذراً، فشل جلب البيانات الحية." : "Error mapping telemetry data stream requests."}
                        </div>
                    ) : (
                        <>
                            {/* Actual Live Products Layer */}
                            <ProductGrid products={data?.data || []} locale={locale} />

                            {/* Data Layout Navigation Control Strips */}
                            {data?.pagination && (
                                <PaginationControls
                                    currentPage={currentPage}
                                    hasNextPage={data.pagination.hasNextPage}
                                    hasPreviousPage={data.pagination.hasPreviousPage}
                                    onPageChange={(targetPage) => setCurrentPage(targetPage)}
                                    locale={locale}
                                />
                            )}
                        </>
                    )}
                </div>

            </div>
        </main>
    );
}