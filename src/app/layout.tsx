"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { WagmiHoc } from "../../utils/wagmi";
import { LightNodeProvider } from "@waku/react";
import { Protocols } from "@waku/sdk";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WagmiHoc>
          <LightNodeProvider
            options={{ defaultBootstrap: true }}
            protocols={[Protocols.Store, Protocols.Filter, Protocols.LightPush]}
          >
            {children}
          </LightNodeProvider>
        </WagmiHoc>
      </body>
    </html>
  );
}
