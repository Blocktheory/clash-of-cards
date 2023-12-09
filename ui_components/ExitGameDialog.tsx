import React, { FC } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { icons } from "../utils/images";
export interface IExitGameDialog {
  open: boolean;
  setOpen: (val: boolean) => void;
}

export const ExitGameDialog: FC<IExitGameDialog> = ({ open, setOpen }) => {
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
          <div className="p-10 font-jura  text-center">
            <h2 className="font-bold text-[48px] leading-[56px]   mb-6">
              Exit game?
            </h2>
            <div className="flex items-center justify-center gap-5">
              <button
                // onClick={() => {
                //   setStep(step + 1);
                // }}
                className=""
              >
                <Image className="mt-10" src={icons.yesBtn} alt="yesBtn" />
              </button>
              <button
                className="cursor-pointer"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <Image
                  className="mt-10"
                  src={icons.cancelBtn}
                  alt="cancelBtn"
                />
              </button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
