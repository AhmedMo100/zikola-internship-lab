/**
 * @file ProductCard.tsx
 * @description Production-grade localized product card component leveraging Next.js optimized Image components.
 */

import Link from "next/link";
import Image from "next/image"; // 1. IMPORT THE NEXT IMAGE ENTITY

export interface ProductCardProps {
    slug: string;
    title: string;
    description: string;
    price: string;
    category: string;
    image: string;
    locale: string;
}

export default function ProductCard({
    slug,
    title,
    description,
    price,
    category,
    image,
    locale,
}: ProductCardProps) {
    return (
        <article className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            {/* Product Image Wrapper - Absolute core layout boundary */}
            <div className="relative aspect-square w-full overflow-hidden bg-gray-50">
                <Image
                    src={image}
                    alt={title}
                    fill // Tells Next.js to fill the aspect-square container dynamically
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Responsive breakdown for bandwidth optimization
                    priority={false} // Keeps lazy loading enabled by default
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                {/* Localized Category Badge */}
                <span className="absolute top-3 inset-s-3 z-10 rounded-md bg-white/95 backdrop-blur-sm px-2.5 py-1 text-xs font-semibold text-gray-700 shadow-sm border border-gray-100 uppercase tracking-wider">
                    {category}
                </span>
            </div>

            {/* Product Content Meta */}
            <div className="flex flex-1 flex-col p-5">
                <div className="flex-1">
                    <h3 className="text-base font-bold text-gray-900 line-clamp-1 group-hover:text-brand-orange transition-colors">
                        {title}
                    </h3>
                    <p className="mt-2 text-xs text-gray-500 line-clamp-2 leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Pricing and Action Boundary */}
                <div className="mt-4 flex items-center justify-between border-t border-gray-50 pt-4">
                    <span className="text-base font-extrabold text-brand-dark">
                        {price}
                    </span>

                    <Link
                        href={`/${locale}/products/${slug}`}
                        className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-3.5 py-2 text-xs font-bold text-white transition-all hover:bg-brand-orange shadow-sm hover:shadow"
                    >
                        {locale === "ar" ? "التفاصيل ←" : "Details →"}
                    </Link>
                </div>
            </div>
        </article>
    );
}