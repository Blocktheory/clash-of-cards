import React, { FC } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { icons } from "../utils/images";
export interface IJoinGameDialog {
  open: boolean;
  setOpen: (val: boolean) => void;
  value: string;
  setValue: (val: string) => void;
}

export const JoinGameDialog: FC<IJoinGameDialog> = ({
  open,
  setOpen,
  value,
  setValue,
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
          <div className=" p-10 font-jura  text-center">
            <h2 className="font-bold text-[48px] leading-[56px]   mb-6">
              Join game
            </h2>
            <div className="flex items-center justify-center gap-5">
              <div className="border-2 border-[#BDB2F6] h-[80px] flex items-center justify-center">
                <input
                  className="text-[40px] font-bold leading-[48px]"
                  placeholder="Enter code"
                  value={value}
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                />
              </div>
              <button
                className="cursor-pointer "
                onClick={() => {
                  setOpen(false);
                }}
              >
                <Image className="" src={icons.joinBtn} alt="joinBtn" />
              </button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
