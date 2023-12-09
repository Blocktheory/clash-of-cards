"use client";

import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { useState } from "react";
import DialogDemo from "../../ui_components/Dialog";

export default function Home() {
  const [isOpen, setIsOpen] = useState(true);
  const { isConnecting, address, isConnected } = useAccount();
  const { openConnectModal } = useConnectModal();
  const handleConnectClick = async () => {
    openConnectModal?.();
  };
  const handleOpenModal = () => {
    setIsOpen(true);
  };
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="bg-black rounded-xl p-4 cursor-pointe">
          <p className="text-white">Connect Wallet</p>
          <p className="text-white" onClick={handleOpenModal}>
            Open modal
          </p>
          <DialogDemo />
        </div>
      </main>
    </>
  );
}
