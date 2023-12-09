import Image from "next/image";
import { icons } from "../utils/images";

export const StartGame = () => {
  return (
    <div className="relative h-full flex flex-col items-center text-white font-jura pt-[120px] min-h-[100vh] overflow-hidden">
      <div className="flex gap-10">
        <div className="border-2 border-[#8A57D4] shadow-custom">
          <Image src={icons.wweBg} alt="wweBg" />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-[64px] font-bold leading-[76px]">WWE</p>
            <p className="text-[32px] font-bold leading-[38px]">
              This is a placeholder text.
            </p>
          </div>
          <div className="flex gap-5">
            <button>
              <Image
                className="mt-10"
                src={icons.newGameBtn}
                alt="connectWalletBtn"
              />
            </button>
            <button>
              <Image className="mt-10" src={icons.joinGameBtn} alt="guestBtn" />
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[20%] z-0">
        <Image src={icons.selectGameBg} alt="selectGameBg" />
      </div>
      <div className="relative z-10">
        <p className="text-[32px] text-center">{"Rules"}</p>
      </div>
    </div>
  );
};
