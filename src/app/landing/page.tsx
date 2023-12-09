"use client";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { LandingPage } from "../../../ui_components/LandingPage";

export default function Home() {
  const { isConnecting, address, isConnected } = useAccount();
  const { openConnectModal } = useConnectModal();
  const handleConnectClick = async () => {
    openConnectModal?.();
  };
  return (
    <div className="h-full relative">
      <LandingPage />
    </div>
  );
}
