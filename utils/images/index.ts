import logoBig from "../../public/assets/images/logo_big.svg";
import connectWalletBtn from "../../public/assets/images/connect_wallet_btn.svg";
import guestBtn from "../../public/assets/images/guest_btn.svg";
import landingBg from "../../public/assets/images/landing_bg.png";
import wweBg from "../../public/assets/images/wwe_bg.svg";
import arcadesFrameBg from "../../public/assets/images/arcades_frame_bg.svg";
import newGameBtn from "../../public/assets/images/new_game_btn.svg";
import joinGameBtn from "../../public/assets/images/join_game_btn.svg";
import selectGameBg from "../../public/assets/images/select_game_bg.svg";
import selectCardBg from "../../public/assets/images/select_card_bg.svg";
import timerLight from "../../public/assets/images/timer_light.svg";
import continueBtn from "../../public/assets/images/continue_btn.svg";
import tickGreen from "../../public/assets/images/tick_green.svg";
import logoPink from "../../public/assets/images/logo_pink.svg";
import battleLogo from "../../public/assets/images/battle_logo.svg";
import closeRed from "../../public/assets/images/close_red.svg";
import modalClose from "../../public/assets/images/modal-close.svg";
import copyCode from "../../public/assets/images/copy-code.svg";
import mintBtn from "../../public/assets/images/mint_btn.svg";
import cancelBtn from "../../public/assets/images/cancel_btn.svg";
import joinBtn from "../../public/assets/images/join_btn.svg";
import sendBatleBtn from "../../public/assets/images/send_battle_btn.svg";
import yesBtn from "../../public/assets/images/yes_btn.svg";

export type TImages =
  | "logoBig"
  | "connectWalletBtn"
  | "guestBtn"
  | "landingBg"
  | "wweBg"
  | "arcadesFrameBg"
  | "newGameBtn"
  | "joinGameBtn"
  | "selectGameBg"
  | "selectCardBg"
  | "timerLight"
  | "continueBtn"
  | "tickGreen"
  | "battleLogo"
  | "logoPink"
  | "closeRed"
  | "modalClose"
  | "copyCode"
  | "timerLight"
  | "mintBtn"
  | "sendBatleBtn"
  | "joinBtn"
  | "cancelBtn"
  | "yesBtn";

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
  selectCardBg,
  modalClose,
  timerLight,
  continueBtn,
  tickGreen,
  battleLogo,
  logoPink,
  closeRed,
  copyCode,
  mintBtn,
  cancelBtn,
  yesBtn,
  joinBtn,
  sendBatleBtn,
};
