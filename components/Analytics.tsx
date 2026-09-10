"use client";
import { useEffect } from 'react';

/**
 * Simple analytics helper that wraps the global `gtag` function.
 * All events are sent to Google Analytics (GA4) via `gtag('event', ...)`.
 * The function is safe‑guarded – it will no‑op if `gtag` is not available.
 */
export function trackEvent(category: string, action: string, label?: string, value?: number) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value,
    });
  }
}

/**
 * Hook to automatically send a page‑view event on mount.
 */
export function usePageView(pagePath: string) {
  useEffect(() => {
    trackEvent('page_view', pagePath);
  }, [pagePath]);
}
