import { GeistSans } from "geist/font/sans";
import { type AppType } from "next/app";

import { api } from "~/utils/api";

import { ClerkProvider } from "@clerk/nextjs";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={GeistSans.className}>
      <ClerkProvider>
        <Component {...pageProps} />
      </ClerkProvider>
    </main>
  );
};

export default api.withTRPC(MyApp);
