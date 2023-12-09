import Image from "next/image";
import { icons } from "../utils/images";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { playClickSound } from "../utils";

export const LandingPage = () => {
  const { isConnecting, address, isConnected } = useAccount();
  const { openConnectModal } = useConnectModal();
  const handleConnectClick = async () => {
    openConnectModal?.();
  };
  const router = useRouter();

  useEffect(() => {
    if (isConnected) {
      router.push("/lobby");
    }
  }, [isConnected]);

  return (
    <div className="relative h-full flex items-center justify-center min-h-[100vh] overflow-hidden">
      <div className="flex flex-col text-center relative z-10">
        <Image className="" src={icons.logoBig} alt="logoBig" />
        <button
          className=""
          onClick={() => {
            playClickSound();
            handleConnectClick();
          }}
        >
          <Image
            className="mt-10"
            src={icons.connectWalletBtn}
            alt="connectWalletBtn"
          />
        </button>
        <button
          className=""
          onClick={() => {
            playClickSound();
            router.push("/lobby");
          }}
        >
          <Image className="mt-10" src={icons.guestBtn} alt="guestBtn" />
        </button>
      </div>
    </div>
  );
};
