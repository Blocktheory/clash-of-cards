"use client";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { LandingPage } from "../../../ui_components/LandingPage";
import { icons } from "../../../utils/images";

export default function Landing() {
  const overlayStyle: React.CSSProperties = {
    content: "''",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
    background: `url(${icons.landingBg.src}) center / cover no-repeat`,
  };

  return (
    <div className="h-full relative">
      <div className="" style={overlayStyle}></div>
      <LandingPage />
    </div>
  );
}
