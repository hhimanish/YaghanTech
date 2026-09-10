"use client";
import React, { createContext, useContext, useMemo } from 'react';

/**
 * Simple A/B test provider. Determines the variant ("A" or "B") based on the
 * environment variable `NEXT_PUBLIC_AB_TEST`. If the variable is not set, it
 * randomly picks a variant – useful for a hard test.
 */
const ABTestContext = createContext<'A' | 'B'>('A');

export const ABTestProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const variant = useMemo(() => {
    const env = process.env.NEXT_PUBLIC_AB_TEST;
    if (env === 'A' || env === 'B') return env as 'A' | 'B';
    // Random assignment for a hard test
    return Math.random() < 0.5 ? 'A' : 'B';
  }, []);

  return (
    <ABTestContext.Provider value={variant}>
      {children}
    </ABTestContext.Provider>
  );
};

export const useABTest = () => useContext(ABTestContext);
