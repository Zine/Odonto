"use client";

import { SessionProvider } from "next-auth/react";
import { PropsWithChildren, useState } from "react";
import { trpc } from "@/app/_trpc/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/react-query";
import { Theme } from "@radix-ui/themes";

const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient({}));
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: "http://localhost:3000/api/trpc",
        }),
      ],
    })
  );

  return (
    <>
      <SessionProvider>
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
          <QueryClientProvider client={queryClient}>
            <Theme
              accentColor="mint"
              grayColor="gray"
              panelBackground="solid"
              scaling="100%"
              radius="full"
            >
              {children}
            </Theme>
          </QueryClientProvider>
        </trpc.Provider>
      </SessionProvider>
    </>
  );
};

export default Providers;
