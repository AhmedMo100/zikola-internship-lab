"use client";

/**
 * @file-preview Core TanStack Query client initialization wrapper injecting global caching states.
 */

import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export interface QueryProviderProps {
    /** The localized application layout sub-tree nodes to safely wrap */
    children: React.ReactNode;
}

/**
 * Global application caching state provider boundary.
 * Contextually instantiates an isolated QueryClient instance to prevent global memory leaks across client sessions.
 * * @param {QueryProviderProps} props - The component property arguments.
 * @returns {React.JSX.Element} The underlying initialized react context provider node.
 */
export default function QueryProvider({ children }: QueryProviderProps) {
    // Creating the query client inside useState guarantees identity stability across re-renders
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        staleTime: 1000 * 60 * 5, // Data is fresh for 5 minutes before auto-refetching background checks
                        refetchOnWindowFocus: false, // Prevents aggressive network requests when shifting browser tabs
                        retry: 1, // Gracefully retries failed pipeline requests exactly once before raising errors
                    },
                },
            })
    );

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
}