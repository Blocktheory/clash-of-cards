import Image from "next/image";
import { icons } from "../utils/images";

export const LandingPage = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="h-full relative overflow-hidden">
        <div className="flex flex-col items-center justify-center">
          <Image className="" src={icons.logoBig} alt="logoBig" />
          <Image
            className=""
            src={icons.connectWalletBtn}
            alt="connectWalletBtn"
          />
          <Image className="" src={icons.guestBtn} alt="guestBtn" />
        </div>
      </div>
      <div className="absolute max-h-full left-0 top-0 overflow-hidden z-0">
        <Image className="h-full" src={icons.landingBg} alt="landingBg" />
      </div>
    </div>
  );
};
