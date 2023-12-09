"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { WagmiHoc } from "../../utils/wagmi";
import { ContentPairProvider, LightNodeProvider } from "@waku/react";
import { Protocols } from "@waku/sdk";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="root">
          <WagmiHoc>
            <LightNodeProvider
              options={{ defaultBootstrap: true }}
              protocols={[Protocols.Store, Protocols.Filter, Protocols.LightPush]}
            >
              <ContentPairProvider contentTopic={"/battle-cards/"}>{children}</ContentPairProvider>
            </LightNodeProvider>
          </WagmiHoc>
        </div>
      </body>
    </html>
  );
}
