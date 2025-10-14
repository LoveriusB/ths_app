'use client';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export function QueryClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  const [qc] = useState(() => new QueryClient()); // instance stable (créée une seule fois)
  return <QueryClientProvider client={qc}>{children}</QueryClientProvider>;
}
