/**
 * @file-preview Core utility functions for conditional class merging supporting Tailwind CSS v4 tokens.
 */

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines dynamic class names and resolves Tailwind utility collisions safely.
 * Optimized for Tailwind CSS v4 variable-driven design tokens.
 * * @param {ClassValue[]} inputs - Array of conditional or static class definitions.
 * @returns {string} A unified, non-conflicting className string.
 */
export function cn(...inputs: ClassValue[]): string {
    return twMerge(clsx(inputs));
}