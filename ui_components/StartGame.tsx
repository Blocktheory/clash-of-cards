import Image from "next/image";
import { icons } from "../utils/images";
import { FC, useState, useEffect } from "react";
import { IArcades } from "./Arcades";
import { JoinGameDialog } from "./JoinGameDialog";
import { InviteFriendModal } from "./InviteFriendModal";
import { playClickSound, playThemeSong } from "../utils";

export const StartGame: FC<IArcades> = ({ step, setStep }) => {
  const [openInvite, setOpenInvite] = useState(false);
  const [openJoin, setOpenJoin] = useState(false);
  const [code, setCode] = useState("");
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
                playClickSound();
                setStep(step + 1);
              }}
            >
              <Image
                className="mt-10"
                src={icons.newGameBtn}
                alt="newGameBtn"
              />
            </button>
            <button
              className="cursor-pointer"
              onClick={() => {
                setOpenJoin(true);
              }}
            >
              <Image
                className="mt-10"
                src={icons.joinGameBtn}
                alt="joinGameBtn"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="w-[70%] h-[400px] border-2 border-[#5E529E] mt-12 p-8">
        <p className="text-[40px] font-bold leading-[48px]">{"Rules"}</p>
      </div>
      {openJoin && (
        <JoinGameDialog
          open={openJoin}
          setOpen={setOpenJoin}
          value={code}
          setValue={setCode}
        />
      )}
      {openInvite && (
        <InviteFriendModal open={openInvite} setOpen={setOpenInvite} />
      )}
    </div>
  );
};
