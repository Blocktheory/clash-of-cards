import Image from "next/image";
import { icons } from "../utils/images";
import { FC } from "react";
import { IArcades } from "./Arcades";

export const StartGame: FC<IArcades> = ({ step, setStep }) => {
  return (
    <div className="relative h-[100%] overflow-y-auto flex flex-col items-center text-white font-jura pt-[120px] min-h-[100vh] ">
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
            <button
              onClick={() => {
                setStep(step + 1);
              }}
            >
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
      <div className="w-[70%] h-[400px] border-2 border-[#5E529E] mt-12 p-8">
        <p className="text-[40px] font-bold leading-[48px]">{"Rules"}</p>
      </div>
    </div>
  );
};
