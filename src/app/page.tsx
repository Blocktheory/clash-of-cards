"use client";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

export default function Home() {
  const { isConnecting, address, isConnected } = useAccount();
  const { openConnectModal } = useConnectModal();
  const handleConnectClick = async () => {
    openConnectModal?.();
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div
        className="bg-black rounded-xl p-4 cursor-pointer"
        onClick={() => {
          handleConnectClick();
        }}
      >
        <p className="text-white">Connect Wallet</p>
      </div>
    </main>
  );
}
