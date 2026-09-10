"use client";
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

/**
 * LanguageSwitcher – a separate component that allows the user to select a locale.
 * It reads the currently active locale from `router.locale` and updates via `router.push`.
 */
export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const locales = ['en', 'hi', 'bn'];
  const currentLocale = pathname.split('/')[1] || 'en';

  const changeLocale = (newLocale: string) => {
    const queryString = searchParams?.toString();
    const basePath = pathname.replace(`/${currentLocale}`, '');
    const url = `/${newLocale}${basePath}${queryString ? `?${queryString}` : ''}`;
    router.push(url);
  };

  // Ensure the component re-renders when locale changes.
  useEffect(() => {}, [currentLocale]);

  return (
    <div className="ml-4">
      <select
        value={currentLocale}
        onChange={(e) => changeLocale(e.target.value)}
        className="rounded-md border border-gray-300 bg-white/30 backdrop-blur-sm p-1 focus:outline-none focus:ring-2 focus:ring-primary"
      >
        {locales?.map((loc) => (
          <option key={loc} value={loc}>
            {loc.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}
