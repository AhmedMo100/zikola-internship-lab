"use client";

/**
 * @file page.tsx
 * @description Isolated product specifications sheet resolving dynamic route slug entities utilizing TanStack query engines.
 */

import React, { use } from "react";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import Image from "next/image";

interface SingleProductPageProps {
    params: Promise<{ locale: string; slug: string }>;
}

async function fetchSingleProductPipeline(slug: string, locale: string) {
    const response = await fetch(`/api/products/${slug}?locale=${locale}`);
    if (!response.ok) {
        throw new Error("Failed to pinpoint targeted product database record");
    }
    return response.json();
}

export default function SingleProductPage({ params }: SingleProductPageProps) {
    // Resolving multiple nested async URL parameters safely via React.use() API
    const { locale, slug } = use(params);

    const { data, isLoading, error } = useQuery({
        queryKey: ["product", slug, locale],
        queryFn: () => fetchSingleProductPipeline(slug, locale),
    });

    const product = data?.data;

    if (isLoading) {
        return (
            <div className="mx-auto max-w-4xl px-4 py-20 animate-pulse space-y-8">
                <div className="h-8 w-1/3 bg-gray-200 rounded-md" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="aspect-square bg-gray-200 rounded-2xl" />
                    <div className="space-y-4">
                        <div className="h-6 w-3/4 bg-gray-200 rounded-md" />
                        <div className="h-4 w-1/4 bg-gray-200 rounded-md" />
                        <div className="space-y-2 pt-4">
                            <div className="h-3 w-full bg-gray-200 rounded-md" />
                            <div className="h-3 w-5/6 bg-gray-200 rounded-md" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (error || !product) {
        return (
            <div className="mx-auto max-w-7xl px-4 py-20 text-center">
                <p className="text-sm font-bold text-red-500">
                    {locale === "ar" ? "عذراً، لم يتم العثور على هذا المنتج في سجلاتنا." : "Product file could not be mapped within registries."}
                </p>
                <Link href={`/${locale}/products`} className="mt-4 inline-block text-xs font-bold text-gray-900 underline">
                    {locale === "ar" ? "العودة للمتجر" : "Return to Catalog"}
                </Link>
            </div>
        );
    }

    return (
        <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 min-h-screen">
            {/* Breadcrumb Navigation Indicator */}
            <nav className="mb-8">
                <Link
                    href={`/${locale}/products`}
                    className="text-xs font-bold text-gray-500 hover:text-gray-900 transition-colors uppercase tracking-wider"
                >
                    {locale === "ar" ? "← العودة إلى قائمة المنتجات" : "← Back to all products"}
                </Link>
            </nav>

            {/* Main Split Layout Grid Wrapper */}
            <div className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2 bg-white rounded-3xl border border-gray-100 p-6 md:p-10 shadow-sm">

                {/* Frame A: High-Fidelity Responsive Image Vault */}
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-gray-50 border border-gray-50 shadow-inner">
                    <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={true} // High LCP optimization priority since this is an isolated profile page
                        className="object-cover object-center"
                    />
                </div>

                {/* Frame B: Localized Meta and Technical Specification Blocks */}
                <div className="flex flex-col justify-between py-2">
                    <div>
                        <span className="inline-flex items-center rounded-md bg-gray-50 px-2.5 py-1 text-xs font-bold text-gray-600 border border-gray-100 uppercase tracking-widest">
                            {product.category}
                        </span>
                        <h1 className="mt-4 text-2xl font-black text-gray-900 sm:text-3xl tracking-tight leading-snug">
                            {product.title}
                        </h1>
                        <p className="mt-2 text-xl font-extrabold text-gray-900">
                            {product.price}
                        </p>

                        <div className="mt-6 border-t border-gray-100 pt-6">
                            <h3 className="text-xs font-black uppercase tracking-wider text-gray-400">
                                {locale === "ar" ? "تفاصيل ومواصفات المنتج" : "Technical Description"}
                            </h3>
                            <p className="mt-3 text-sm text-gray-600 leading-relaxed font-medium">
                                {product.description}
                            </p>
                        </div>
                    </div>

                    {/* Action Trigger Interface */}
                    <div className="mt-8 border-t border-gray-50 pt-6">
                        <button className="flex w-full items-center justify-center rounded-2xl bg-gray-900 px-8 py-4 text-sm font-black text-white shadow-sm transition-all hover:bg-brand-orange hover:shadow-md">
                            {locale === "ar" ? "إضافة إلى سلة المشتريات" : "Add to Cart Asset"}
                        </button>
                    </div>
                </div>

            </div>
        </main>
    );
}