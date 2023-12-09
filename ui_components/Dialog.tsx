import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
const DialogDemo = () => (
  <Dialog.Root open={true}>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        <div className="bg-[#8A57D4] p-10 font-jura  text-center">
          <h2 className="font-bold text-[48px] leading-[56px]  mb-6">Invite your friends</h2>
          <p>Share the invite code with your friends and wait till they join to play</p>
          <button type="button">0ACDB</button>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default DialogDemo;
