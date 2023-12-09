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
    <div className="flex min-h-screen flex-col items-center justify-between p-24"></div>
  );
}
