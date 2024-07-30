"use client";

import { Loader } from "@/components/Loader";
import { ClientSideSuspense, LiveblocksProvider } from "@liveblocks/react";

interface ProviderProps {
  children: React.ReactNode;
}

export const Provider = ({ children }: ProviderProps) => {
  return (
    <LiveblocksProvider authEndpoint="/api/liveblocks-auth">
      <ClientSideSuspense fallback={<Loader />}>{children}</ClientSideSuspense>
    </LiveblocksProvider>
  );
};
// publicApiKey={
//     "pk_prod_7_SU29-yPhp0De9sVD1YiE8_7ksAuR_5uaDP1M5LMrDlwPl4FdQuDN5V7pBk5mX0"
//   }
