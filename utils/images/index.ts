import logoBig from "../../public/assets/images/logo_big.svg";
import connectWalletBtn from "../../public/assets/images/connect_wallet_btn.svg";
import guestBtn from "../../public/assets/images/guest_btn.svg";
import landingBg from "../../public/assets/images/landing_bg.png";

export type TImages = "logoBig" | "connectWalletBtn" | "guestBtn" | "landingBg";

export type TNextImage = {
  src: string;
  height: number;
  width: number;
};

export const icons: Record<TImages, TNextImage> = {
  logoBig,
  connectWalletBtn,
  guestBtn,
  landingBg,
};
