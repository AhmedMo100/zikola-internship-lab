/**
 * @file ProductGrid.tsx
 * @description Layout component establishing a fully responsive CSS grid to gracefully distribute product cards.
 */

import React from "react";
import ProductCard from "./ProductCard";

export interface GridProductItem {
    id: string;
    slug: string;
    title: string;
    description: string;
    price: string;
    category: string;
    image: string;
}

export interface ProductGridProps {
    /** Array of active localized product entities fetched from the API pipeline */
    products: GridProductItem[];
    /** Current runtime locale parameter for internal layout routing rules */
    locale: string;
}

export default function ProductGrid({ products, locale }: ProductGridProps) {
    // Graceful guard check in case the active collection chunk returns empty
    if (!products || products.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-20 text-center">
                <p className="text-sm font-medium text-gray-400">
                    {locale === "ar" ? "لا توجد منتجات مطابقة لهذا الفلتر حالياً." : "No products found matching this filter criteria."}
                </p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 w-full">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    slug={product.slug}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    category={product.category}
                    image={product.image}
                    locale={locale}
                />
            ))}
        </div>
    );
}