import React, { FC } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { icons } from "../utils/images";
import Image from "next/image";

const InviteFriendModal = (props: any) => {
  const { isOpen, setIsOpen } = props;
  return (
    <Dialog.Root open={isOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent inviteFriendModal relative">
          <Image
            src={icons.modalClose}
            alt="arcadesFrameBg"
            className="w-[22px] h=[22px] object-cover absolute right-8 cursor-pointer"
          />
          <div className="p-10 font-jura  text-center">
            <h2 className="font-bold text-[48px] leading-[56px]  mb-6">Invite your friends</h2>
            <p className="text-[32px] leading-[38px] mb-4">
              Share the invite code with your friends and wait till they join to play
            </p>
            <button type="button" className="buttonSecondary px-20">
              <span className="text-[56px]">0ACDB</span>
              <Image
                src={icons.copyCode}
                alt="arcadesFrameBg"
                className="w-[22px] h=[22px] object-cover inline-block relative left-3 bottom-3 cursor-pointer"
              />
            </button>
          </div>
          <Dialog.Close asChild></Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
export default InviteFriendModal;
