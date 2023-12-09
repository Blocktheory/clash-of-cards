import Image from "next/image";
import { icons } from "../utils/images";
import { FC, useEffect, useState } from "react";
import { mint } from "../constants/cards";
import { IArcades } from "./Arcades";

export const MintNft: FC<IArcades> = ({ step, setStep }) => {

    const [selectedNft, setSelectedNft] = useState({id:"",url:""});
    
    function generateRandom(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    useEffect(() => {
        const randomNum = generateRandom(0, 5);
        setSelectedNft(mint[randomNum]);
      }, []);
  return (
    <div className="relative h-full overflow-y-auto flex flex-col items-center justify-center text-white font-jura pt-[120px] min-h-[100vh] ">
      <div className="flex gap-10">
        <div className="flex flex-col justify-between items-center">
          <div>
            <p className="text-[64px] font-bold leading-[76px]">Congragulations Winner!</p>
            <p className="text-[32px] font-bold leading-[38px] text-center">Mint free NFT.</p>
          </div>
          <div className="bg-[#573685] border-2 border-[#8A57D4] shadow-custom h-[260px] w-[200px] mt-10">
           { selectedNft.url && <div className=" relative h-full">
              <img
                src={selectedNft.url}
                alt={"players"}
                className="w-[100%] h-[100%] object-cover"
              />
            </div>}
          </div>
          <div className="flex ">
            <button
              onClick={() => {
                setStep(step + 1);
              }}
            >
              <Image className="mt-10" src={icons.mintBtn} alt="connectWalletBtn" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
