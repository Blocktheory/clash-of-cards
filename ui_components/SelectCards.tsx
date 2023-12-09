import Image from "next/image";
import { icons } from "../utils/images";
import { FC } from "react";
import { wwePlayers } from "../constants/cards";
import { IArcades } from "./Arcades";
import { convertCmToFeetAndInches, playClickSound } from "../utils";

export const SelectCards: FC<IArcades> = ({ step, setStep, selectPlayers }) => {
  return (
    <div className="container mx-auto w-full relative h-full flex flex-col  text-white font-jura justify-center min-h-[100vh] overflow-hidden">
      <p className="font-bold text-[48px] leading-[56px]  mb-2">Select Face-off Cards</p>
      <div className="flex items-center justify-between">
        <p className="text-[40px] leading-[48px]">
          Remaining points: <span className="text-[#C1FA48]">100</span>
        </p>
        {/* <p className="text-[40px] leading-[48px] flex gap-3">
          <Image src={icons.timerLight} alt="timer" /> 1 min
        </p> */}
      </div>
      <div className="relative grid grid-cols-5 gap-4 overflow-y-auto py-10">
        {wwePlayers.map((player, index) => (
          <div
            key={index}
            onClick={() => {
              playClickSound();
              selectPlayers(player);
            }}
            className="relative border-2 border-[#8A57D4] flame-border cursor-pointer card-height"
          >
            <div className="w-[100%] h-full">
              <img src={player.image} alt={player.name} className="w-[100%] h-full object-cover" />
              {/* <Image className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-20" src={icons.tickGreen} alt="tickGreen" /> */}
              <div className="absolute left-5 top-[40%] bg-white rounded-sm px-2 py-1">{/* <p className="text-[24px] leading-[28px] text-black font-black ">{player.points}</p> */}</div>
            </div>

            <div className="absolute w-[100%] bottom-[10%] z-10">
              <p className="text-[32px] leading-[38px] font-bold text-center">{player.name}</p>
              <div className="flex items-center justify-between mx-5  mt-6">
                <div className="">
                  <p className="text-[24px] leading-[18px] font-bold mb-4">Rank: {player.rank}</p>
                  <p className="text-[24px] leading-[18px] font-bold mb-4">Height: {convertCmToFeetAndInches(Number(player.height))}</p>
                  <p className="text-[24px] leading-[18px] font-bold mb-4">Weight: {player.weight} lbs</p>
                </div>
                <div className="">
                  <p className="text-[24px] leading-[18px] font-bold mb-4">Points: +{player.points}</p>
                  <p className="text-[24px] leading-[18px] font-bold mb-4">Chest: {convertCmToFeetAndInches(Number(player.chest), false)}</p>
                  <p className="text-[24px] leading-[18px] font-bold mb-4">Biceps: {convertCmToFeetAndInches(Number(player.biceps), false)}</p>
                </div>
              </div>
            </div>
            <div className="w-[100%] absolute bottom-0 z-0">
              <Image src={icons.selectCardBg} alt="playeradesFrameBg" className="w-[100%] object-cover" />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30">
        <button
          onClick={() => {
            playClickSound();
            setStep(step + 1);
          }}
        >
          <Image className="mt-10" src={icons.continueBtn} alt="connectWalletBtn" />
        </button>
      </div>
    </div>
  );
};
