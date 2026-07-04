/**
 * @file api/products/route.ts
 * @description API Route handler leveraging declarative query parameters to serve paginated, localized, and categorized product collection chunks.
 */

import { NextRequest, NextResponse } from "next/server";

interface LocalizedString {
    en: string;
    ar: string;
}

interface ProductEntity {
    id: string;
    slug: string;
    title: LocalizedString;
    description: LocalizedString;
    price_raw: number;
    price_formatted: LocalizedString;
    category: LocalizedString;
    image: string;
}

/**
 * In-memory enterprise mock product database containing highly-descriptive localized text properties.
 */
const MOCK_PRODUCTS: ProductEntity[] = [
    {
        id: "1",
        slug: "premium-wireless-mouse",
        title: { en: "Premium Wireless Mouse", ar: "فأرة لاسلكية ممتازة" },
        description: { en: "High precision 2400 DPI silent wireless productivity mouse.", ar: "فأرة لاسلكية عالية الدقة بسرعة ٢٤٠٠ نقطة في البوصة بنقرات صامتة للمهام الإنتاجية." },
        price_raw: 29.99,
        price_formatted: { en: "$29.99", ar: "٢٩٫٩٩ دولار" },
        category: { en: "accessories", ar: "إكسسوارات" },
        image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=400&auto=format&fit=crop"
    },
    {
        id: "2",
        slug: "mechanical-gaming-keyboard",
        title: { en: "Mechanical Gaming Keyboard", ar: "لوحة مفاتيح ميكانيكية للألعاب" },
        description: { en: "Tactile mechanical gaming keyboard packing multi-zone responsive RGB mechanics.", ar: "لوحة مفاتيح ميكانيكية مخصصة للألعاب مجهزة بنظام إضاءة RGB ديناميكي سريع الاستجابة." },
        price_raw: 89.99,
        price_formatted: { en: "$89.99", ar: "٨٩٫٩٩ دولار" },
        category: { en: "accessories", ar: "إكسسوارات" },
        image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=400&auto=format&fit=crop"
    },
    {
        id: "3",
        slug: "ultra-wide-monitor-34",
        title: { en: "34\" Ultra-Wide Monitor", ar: "شاشة فائقة العرض 34 بوصة" },
        description: { en: "Immersive 34-inch panoramic IPS panel with cinematic WQHD resolution layouts.", ar: "شاشة بانورامية غامرة مقاس ٣٤ بوصة بلوحة IPS توفر دقة WQHD السينمائية المتقدمة." },
        price_raw: 349.99,
        price_formatted: { en: "$349.99", ar: "٣٤٩٫٩٩ دولار" },
        category: { en: "screens", ar: "شاشات" },
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=400&auto=format&fit=crop"
    },
    {
        id: "4",
        slug: "noise-canceling-headphones",
        title: { en: "Noise-Canceling Headphones", ar: "سماعات عازلة للضوضاء" },
        description: { en: "Hybrid active noise cancellation studio headphones with deep acoustic architecture.", ar: "سماعات استوديو هجينة لعزل الضوضاء النشطة تعتمد على معمارية صوتية عميقة النقاء." },
        price_raw: 199.99,
        price_formatted: { en: "$199.99", ar: "١٩٩٫٩٩ دولار" },
        category: { en: "audio", ar: "صوتيات" },
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400&auto=format&fit=crop"
    },
    {
        id: "5",
        slug: "ergonomic-office-chair",
        title: { en: "Ergonomic Office Chair", ar: "كرسي مكتب مريح وصحي" },
        description: { en: "Adaptive mesh orthopedic office chair presenting synchronized adaptive lumbar support structures.", ar: "كرسي مكتب طبي ذو ظهر شبكي مرن يوفر دعامات متزامنة لراحة وتأمين مسار الفقرات." },
        price_raw: 149.99,
        price_formatted: { en: "$149.99", ar: "١٤٩٫٩٩ دولار" },
        category: { en: "furniture", ar: "أثاث" },
        image: "https://images.unsplash.com/photo-1505797149-43b0069ec26b?q=80&w=400&auto=format&fit=crop"
    },
    {
        id: "6",
        slug: "usb-c-multi-port-hub",
        title: { en: "USB-C Multi-Port Hub", ar: "موزع منافذ USB-C متعدد" },
        description: { en: "Aluminum 8-in-1 deployment module pipeline syncing high-speed data streams.", ar: "قاعدة توزيع ألومنيوم متكاملة ٨ في ١ لمزامنة تدفق البيانات فائقة السرعة وعروض الفيديو." },
        price_raw: 39.99,
        price_formatted: { en: "$39.99", ar: "٣٩٫٩٩ دولار" },
        category: { en: "accessories", ar: "إكسسوارات" },
        image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?q=80&w=400&auto=format&fit=crop"
    }
];

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);

        // Extrapolate and normalize querying segments with default fallback anchors
        const page = parseInt(searchParams.get("page") || "1", 10);
        const limit = parseInt(searchParams.get("limit") || "4", 10);
        const locale = (searchParams.get("locale") || "en") as "en" | "ar";
        const category = searchParams.get("category") || "all";

        // Enforce declarative array filtering based on active category parameters
        let filteredProducts = MOCK_PRODUCTS;
        if (category !== "all") {
            filteredProducts = MOCK_PRODUCTS.filter(p => p.category[locale] === category || p.category.en === category);
        }

        // Compute arithmetic boundaries to isolate the target data chunk slice
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        const slicedChunk = filteredProducts.slice(startIndex, endIndex);

        // Transform structural data schema by dynamic runtime language criteria evaluation
        const localizedProducts = slicedChunk.map((product) => ({
            id: product.id,
            slug: product.slug,
            title: product.title[locale],
            description: product.description[locale],
            price: product.price_formatted[locale],
            priceRaw: product.price_raw,
            category: product.category[locale],
            image: product.image
        }));

        // Calculate metadata pagination states for dynamic layout controls
        const hasNextPage = endIndex < filteredProducts.length;
        const hasPreviousPage = page > 1;

        return NextResponse.json({
            data: localizedProducts,
            pagination: {
                currentPage: page,
                hasNextPage,
                hasPreviousPage,
                nextPage: hasNextPage ? page + 1 : null,
                prevPage: hasPreviousPage ? page - 1 : null,
                totalItems: filteredProducts.length
            }
        });

    } catch {
        return NextResponse.json({ error: "Failed to fulfill paginated localized data requirements" }, { status: 500 });
    }
}