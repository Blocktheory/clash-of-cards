import logoBig from "../../public/assets/images/logo_big.svg";
import connectWalletBtn from "../../public/assets/images/connect_wallet_btn.svg";
import guestBtn from "../../public/assets/images/guest_btn.svg";
import landingBg from "../../public/assets/images/landing_bg.png";
import wweBg from "../../public/assets/images/wwe_bg.svg";
import arcadesFrameBg from "../../public/assets/images/arcades_frame_bg.svg";
import newGameBtn from "../../public/assets/images/new_game_btn.svg";
import joinGameBtn from "../../public/assets/images/join_game_btn.svg";
import selectGameBg from "../../public/assets/images/select_game_bg.svg";

export type TImages =
  | "logoBig"
  | "connectWalletBtn"
  | "guestBtn"
  | "landingBg"
  | "wweBg"
  | "arcadesFrameBg"
  | "newGameBtn"
  | "joinGameBtn"
  | "selectGameBg";

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
  wweBg,
  arcadesFrameBg,
  newGameBtn,
  joinGameBtn,
  selectGameBg,
};
