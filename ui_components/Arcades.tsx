import Image from "next/image";
import { icons } from "../utils/images";
import { FC } from "react";
import { arc } from "../constants/cards";

export interface IArcades {
  setStep: (val: number) => void;
  step: number;
}

export const Arcades: FC<IArcades> = ({ step, setStep }) => {
  return (
    <div className="relative h-full flex flex-col items-center text-white font-jura justify-center min-h-[100vh] overflow-hidden">
      <p className="font-bold text-[56px] leading-[66px] text-center  mb-10">
        Arcades
      </p>
      <div className="relative grid grid-cols-3 gap-4 w-[70%] overflow-y-auto py-10">
        {arc.map((arc, index) => (
          <div
            key={index}
            onClick={() => {
              setStep(step + 1);
            }}
            className=" relative h-full border-2 border-[#8A57D4] shadow-custom"
          >
            <img
              src={arc.cover}
              alt={arc.title}
              className="w-[100%] h-[80%] object-cover"
            />

            <div className="w-[100%] absolute bottom-0 z-0">
              <Image
                src={icons.arcadesFrameBg}
                alt="arcadesFrameBg"
                className="w-[100%] object-cover"
              />
            </div>
            <div className="relative z-10">
              <p className="text-[32px] text-center">{arc.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
