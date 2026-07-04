/**
 * @file api/products/[slug]/route.ts
 * @description API Route handler resolving an isolated standalone production data node matched uniquely via its SEO-friendly URL slug parameter.
 */

import { NextRequest, NextResponse } from "next/server";

interface LocalizedString {
    en: string;
    ar: string;
}

interface ProductDetailsEntity {
    slug: string;
    title: LocalizedString;
    extended_description: LocalizedString;
    price_raw: number;
    price_formatted: LocalizedString;
    category: LocalizedString;
    image: string;
}

/**
 * Granular in-memory catalog detail registries containing deeply-extended technical specifications.
 */
const MOCK_DETAILS: ProductDetailsEntity[] = [
    {
        slug: "premium-wireless-mouse",
        title: { en: "Premium Wireless Mouse", ar: "فأرة لاسلكية ممتازة" },
        price_raw: 29.99,
        price_formatted: { en: "$29.99", ar: "٢٩٫٩٩ دولار" },
        category: { en: "accessories", ar: "إكسسوارات" },
        image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=600&auto=format&fit=crop",
        extended_description: {
            en: "Engineered with an advanced 2400 DPI optical array matrix tracking perfectly across glass surfaces. Includes silent acoustic switch layouts dampening micro-clicks alongside an ultra-stable 2.4GHz low-latency wireless interface topology.",
            ar: "تم تطويرها بمستشعر بصري متطور بدقة ٢٤٠٠ نقطة في البوصة يضمن تتبعاً مثالياً على الأسطح الزجاجية. تتضمن مفاتيح صامتة تماماً لامتصاص ضوضاء النقر الدقيق، مع واجهة اتصال لاسلكية منخفضة الزوايا بتردد ٢٫٤ جيجاهرتز فائقة الاستقرار."
        }
    },
    {
        slug: "mechanical-gaming-keyboard",
        title: { en: "Mechanical Gaming Keyboard", ar: "لوحة مفاتيح ميكانيكية للألعاب" },
        price_raw: 89.99,
        price_formatted: { en: "$89.99", ar: "٨٩٫٩٩ دولار" },
        category: { en: "accessories", ar: "إكسسوارات" },
        image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=600&auto=format&fit=crop",
        extended_description: {
            en: "Pro-grade structural dynamic mechanical keyboard packing tactile response blue switches. Equipped with 100% anti-ghosting matrix layers, customizable dynamic per-key RGB backlight configurations, and double-shot injection molded PBT keys.",
            ar: "لوحة مفاتيح ميكانيكية هيكلية احترافية مجهزة بمفاتيح زرقاء ذات استجابة حسية عالية. تحتوي على طبقات عزل كاملة لتفادي تداخل النقرات بنسبة ١٠٠٪، مع إمكانية تخصيص ألوان الإضاءة الخلفية لكل مفتاح، وأغطية متينة محقونة بمادة PBT."
        }
    },
    {
        slug: "ultra-wide-monitor-34",
        title: { en: "34\" Ultra-Wide Monitor", ar: "شاشة فائقة العرض 34 بوصة" },
        price_raw: 349.99,
        price_formatted: { en: "$349.99", ar: "٣٤٩٫٩٩ دولار" },
        category: { en: "screens", ar: "شاشات" },
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=600&auto=format&fit=crop",
        extended_description: {
            en: "Panoramic 21:9 ultra-wide viewing real estate utilizing immersive curved IPS technology. Operates a fluid 144Hz screen refresh sequence synced with HDR10 processing logic pipelines to output pure color correctness specs.",
            ar: "شاشة عرض عريضة بانورامية بأبعاد ٢١:٩ تعتمد على تكنولوجيا شاشات IPS المنحنية الغامرة. تعمل بمعدل تحديث سلس يبلغ ١٤٤ هرتز متزامن بالكامل مع معالجة الألوان والظلال HDR10 لإخراج ألوان دقيقة وواقعية للغاية."
        }
    },
    {
        slug: "noise-canceling-headphones",
        title: { en: "Noise-Canceling Headphones", ar: "سماعات عازلة للضوضاء" },
        price_raw: 199.99,
        price_formatted: { en: "$199.99", ar: "١٩٩٫٩٩ دولار" },
        category: { en: "audio", ar: "صوتيات" },
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop",
        extended_description: {
            en: "Over-ear hybrid Active Noise Cancelling audio infrastructure driven by high-resolution 40mm dynamic acoustic coils. Provides uncompromised studio mixing fidelity combined with an optimized 40-hour continuous playback battery envelope.",
            ar: "بنية صوتية متكاملة فوق الأذن مدعومة بتقنيات عزل الضوضاء النشطة الهجينة ومضخمات صوتية ديناميكية بمقاس ٤٠ مم. توفر جودة هندسة استوديو نقية وغير منقوصة، بالإضافة إلى دورة بطارية محسنة تدوم حتى ٤٠ ساعة عمل متصلة."
        }
    },
    {
        slug: "ergonomic-office-chair",
        title: { en: "Ergonomic Office Chair", ar: "كرسي مكتب مريح وصحي" },
        price_raw: 149.99,
        price_formatted: { en: "$149.99", ar: "١٩٩٫٩٩ دولار" },
        category: { en: "furniture", ar: "أثاث" },
        image: "https://images.unsplash.com/photo-1505797149-43b0069ec26b?q=80&w=600&auto=format&fit=crop",
        extended_description: {
            en: "High-back orthopedic structural seating deploying adaptive responsive tension mesh material. Outfits targeted multi-dimensional lumbar adjustment nodes, customizable 3D structural armrests, and rigid gas-lift reclining safety boundaries.",
            ar: "مقعد هيكلي مريح للعمود الفقري ذو ظهر مرتفع مصنوع من خامات شبكية متكيفة لتخفيف الضغط. يتميز بنقاط ضبط متعددة الأبعاد لمنطقة أسفل الظهر، ومساند أذرع ثلاثية الأبعاد قابلة للتعديل بالكامل مع رافع غاز متين لضمان الأمان والإمالة."
        }
    },
    {
        slug: "usb-c-multi-port-hub",
        title: { en: "USB-C Multi-Port Hub", ar: "موزع منافذ USB-C متعدد" },
        price_raw: 39.99,
        price_formatted: { en: "$39.99", ar: "٣٩٫٩٩ دولار" },
        category: { en: "accessories", ar: "إكسسوارات" },
        image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?q=80&w=600&auto=format&fit=crop",
        extended_description: {
            en: "Monolithic aluminum anodized 8-in-1 layout docking module. Orchestrates ultra-crisp 4K video streams via HDMI pipelines, rapid 100W USB-C Power Delivery charging loops, and dual-slot SD flash storage distribution bridges.",
            ar: "قاعدة توزيع وتوصيل ألومنيوم صلبة ومقاومة للأكسدة ٨ في ١. تنظم بث الفيديو فائق الوضوح بدقة 4K عبر مسارات HDMI، مع توفير ممرات شحن طاقة USB-C بقدرة ١٠٠ واط، وجسور قراءة بطاقات الذاكرة الفلاشية المزدوجة."
        }
    }
];

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ slug: string }> }
) {
    try {
        const { slug } = await params;
        const { searchParams } = new URL(request.url);
        const locale = (searchParams.get("locale") || "en") as "en" | "ar";

        // Locate matching entity inside the single product metadata store
        const product = MOCK_DETAILS.find((p) => p.slug === slug);

        if (!product) {
            return NextResponse.json(
                { error: "Target single localized entity could not be verified within registry entries" },
                { status: 404 }
            );
        }

        // Refactor and pipeline isolated target property assets out to client requirements
        const localizedProduct = {
            slug: product.slug,
            title: product.title[locale],
            description: product.extended_description[locale],
            price: product.price_formatted[locale],
            priceRaw: product.price_raw,
            category: product.category[locale],
            image: product.image
        };

        return NextResponse.json({ data: localizedProduct });

    } catch {
        return NextResponse.json(
            { error: "System encountered an unexpected exception while scanning the single product slug mapping" },
            { status: 500 }
        );
    }
}