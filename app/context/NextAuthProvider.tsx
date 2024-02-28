'use client';

import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

export default function NextAuthProvider({
  children,
}: {
  children: ReactNode;
}) {
  return <SessionProvider refetchInterval={10 * 60}>{children}</SessionProvider>;
}