import Image from "next/image";
import { icons } from "../utils/images";
import { FC, useState, useEffect } from "react";
import { IArcades } from "./Arcades";
import { JoinGameDialog } from "./JoinGameDialog";
import { InviteFriendModal } from "./InviteFriendModal";
import { playClickSound, playThemeSong } from "../utils";
export interface IStartGame {
  setStep: (val: number) => void;
  step: number;
  selectedArcade: any;
}

export const StartGame: FC<IStartGame> = ({
  step,
  setStep,
  selectedArcade,
}) => {
  const [openInvite, setOpenInvite] = useState(false);
  const [openJoin, setOpenJoin] = useState(false);
  const [code, setCode] = useState("");
  return (
    <div className="relative h-[100%] overflow-y-auto flex flex-col items-center text-white font-jura pt-[120px] min-h-[100vh] ">
      <div className="flex gap-10 w-[70%]">
        <div className="border-2 border-[#8A57D4] shadow-custom">
          <img
            className="object-cover w-full h-full"
            src={selectedArcade.cover}
            alt="wweBg"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-[44px] font-bold leading-[46px]">
              {selectedArcade.title}
            </p>
            <p className="text-[22px] font-bold leading-[28px]">
              {selectedArcade.description}
            </p>
          </div>
          <div className="flex gap-5">
            <button
              className=""
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
              className="cursor-pointer "
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
      <div className="w-[70%] h-[250px] border-2 border-[#5E529E] mt-12 p-8">
        <p className="text-[30px] font-bold leading-[48px]">
          {selectedArcade.rules}
        </p>
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
