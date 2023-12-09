import { FC } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { icons } from "../utils/images";

export interface ISendForBattleModal {
  open: boolean;
  setOpen: (val: boolean) => void;
  playerData: any;
}

export const SendForBattleModal: FC<ISendForBattleModal> = ({
  open,
  setOpen,
  playerData,
}) => {
  return (
    <Dialog.Root
      open={open}
      onOpenChange={() => {
        setOpen(!open);
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent relative z-[50] font-jura text-white">
          <Image
            onClick={() => {
              setOpen(false);
            }}
            src={icons.modalClose}
            alt="arcadesFrameBg"
            className="w-[22px] h=[22px] object-cover absolute right-8 cursor-pointer"
          />
          <div className="p-10 flex items-center justify-center font-jura gap-[72px]  text-center">
            <div className="bg-[#573685] border-2 border-[#8A57D4] shadow-custom h-[300px] w-[250px]">
              <div className=" relative h-full">
                <img
                  src={playerData.image}
                  alt={"players"}
                  className="w-[100%] h-[82%] object-cover"
                />

                <div className="w-[100%] absolute bottom-0 z-0">
                  <Image
                    src={icons.arcadesFrameBg}
                    alt="arcadesFrameBg"
                    className="w-[100%] object-cover"
                  />
                </div>
                <div className="relative z-10">
                  <p className="text-[32px] text-center">{playerData.name}</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-[32px] leading-[38px] font-bold mb-10">
                Select any one
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="border border-[#A095DA] w-[240px] py-2">
                  <p className="font-bold text-[16px] leading-[18px]">Height</p>
                  <p className="font-bold text-[32px] leading-[38px]">
                    {playerData.height}
                  </p>
                </div>
                <div className="border border-[#A095DA] w-[240px] py-2">
                  <p className="font-bold text-[16px] leading-[18px]">Rank</p>
                  <p className="font-bold text-[32px] leading-[38px]">
                    {playerData.rank}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4">
                <div className="border border-[#A095DA] w-[240px] py-2">
                  <p className="font-bold text-[16px] leading-[18px]">Weight</p>
                  <p className="font-bold text-[32px] leading-[38px]">
                    {playerData.weight}
                  </p>
                </div>
                <div className="border border-[#A095DA] w-[240px] py-2">
                  <p className="font-bold text-[16px] leading-[18px]">
                    Fights won
                  </p>
                  <p className="font-bold text-[32px] leading-[38px]">
                    {"449"}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4">
                <div className="border border-[#A095DA] w-[240px] py-2">
                  <p className="font-bold text-[16px] leading-[18px]">Chest</p>
                  <p className="font-bold text-[32px] leading-[38px]">
                    {playerData.chest}
                  </p>
                </div>
                <div className="border border-[#A095DA] w-[240px] py-2">
                  <p className="font-bold text-[16px] leading-[18px]">Biceps</p>
                  <p className="font-bold text-[32px] leading-[38px]">
                    {playerData.biceps}
                  </p>
                </div>
              </div>
              <button
                className="cursor-pointer"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <Image
                  className="mt-10"
                  src={icons.sendBatleBtn}
                  alt="sendBatleBtn"
                />
              </button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
