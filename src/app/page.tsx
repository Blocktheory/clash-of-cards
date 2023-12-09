"use client";

import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { useState } from "react";

export default function Home() {
  const { isConnecting, address, isConnected } = useAccount();
  const { openConnectModal } = useConnectModal();
  const handleConnectClick = async () => {
    openConnectModal?.();
  };
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="bg-black rounded-xl p-4 cursor-pointer">
          <p className="text-white cursor-pointer" onClick={handleConnectClick}>
            Connect Wallet
          </p>
        </div>
      </main>
    </>
  );
}
