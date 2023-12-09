import Image from "next/image";
import { icons } from "../utils/images";
import { FC } from "react";
import { wwePlayers } from "../constants/cards";
import { IArcades } from "./Arcades";

export const SelectCards: FC<IArcades> = ({ step, setStep }) => {
  return (
    <div className="container mx-auto w-full relative h-full flex flex-col  text-white font-jura justify-center min-h-[100vh] overflow-hidden">
      <p className="font-bold text-[48px] leading-[56px]  mb-10">
        Select cards
      </p>
      <div className="flex items-center justify-between">
        <p className="text-[40px] leading-[48px]">
          Remaining points:<span className="text-[#C1FA48]">100</span>
        </p>
        <p className="text-[40px] leading-[48px] flex gap-3">
          <Image src={icons.timerLight} alt="timer" /> 1 min
        </p>
      </div>
      <div className="relative grid grid-cols-3 gap-4 h-[70vh] overflow-y-auto py-10">
        {wwePlayers.map((player, index) => (
          <div
            key={index}
            onClick={() => {
              setStep(step + 1);
            }}
            className="relative border-2 border-[#8A57D4] shadow-custom"
          >
            {/* Adjust the styling as needed */}
            <img
              src={player.image}
              alt={player.name}
              className="w-[100%] h-full object-cover"
            />

            <div className="absolute w-[100%] bottom-[10%] z-10">
              <p className="text-[32px] leading-[38px] font-bold text-center">
                {player.name}
              </p>
              <div className="flex items-center justify-between mx-20 mt-6">
                <div className="">
                  <p className="text-[16px] leading-[18px] font-bold">
                    Height: {player.height}
                  </p>
                  <p className="text-[16px] leading-[18px] font-bold">
                    {player.name}
                  </p>
                  <p className="text-[16px] leading-[18px] font-bold">
                    {player.name}
                  </p>
                </div>
                <div className="">
                  <p className="text-[16px] leading-[18px] font-bold">
                    {player.name}
                  </p>
                  <p className="text-[16px] leading-[18px] font-bold">
                    {player.name}
                  </p>
                  <p className="text-[16px] leading-[18px] font-bold">
                    {player.name}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[100%] absolute bottom-0 z-0">
              <Image
                src={icons.selectCardBg}
                alt="playeradesFrameBg"
                className="w-[100%] object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
