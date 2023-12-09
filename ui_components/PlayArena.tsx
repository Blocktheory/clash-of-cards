import Image from "next/image";
import { icons } from "../utils/images";

export const PlayArena = () => {
  return (
    <>
      <div className="container mx-auto w-full relative h-full flex flex-col py-20 text-white font-jura justify-center min-h-[100vh] overflow-hidden">
        <div className="flex items-center justify-center gap-5 mb-14">
          <div className="bg-[#573685] border-2 border-[#8A57D4] shadow-custom py-[60px] px-6">
            <Image src={icons.logoPink} alt="logoPink" />
          </div>
          <div className="bg-[#573685] border-2 border-[#8A57D4] shadow-custom py-[60px] px-6">
            <Image src={icons.logoPink} alt="logoPink" />
          </div>
          <div className="bg-[#573685] border-2 border-[#8A57D4] shadow-custom py-[60px] px-6">
            <Image src={icons.logoPink} alt="logoPink" />
          </div>
          <div className="bg-[#573685] border-2 border-[#8A57D4] shadow-custom py-[60px] px-6">
            <Image src={icons.logoPink} alt="logoPink" />
          </div>
          <div className="bg-[#573685] border-2 border-[#8A57D4] shadow-custom py-[60px] px-6">
            <Image src={icons.logoPink} alt="logoPink" />
          </div>
        </div>
        <div className="bg-[#573685] border-2 border-[#8A57D4] shadow-custom  w-[100%] h-[400px] flex justify-center items-center gap-8 mb-14">
          <div className="bg-[#573685] border-2 border-[#8A57D4] shadow-custom h-[260px] w-[200px]">
            <div className=" relative h-full">
              <img
                src={icons.wweBg.src}
                alt={"players"}
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
                <p className="text-[32px] text-center">{"The Rock"}</p>
              </div>
            </div>
          </div>
          <Image src={icons.battleLogo} alt="battleLogo" />
          <div className="bg-[#573685] border-2 border-[#8A57D4] shadow-custom h-[260px] w-[200px]">
            <div className=" relative h-full">
              <img
                src={icons.wweBg.src}
                alt={"players"}
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
                <p className="text-[32px] text-center">{"The Rock"}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-5">
          <div className="bg-[#573685] border-2 border-[#8A57D4] shadow-custom h-[300px] w-[200px]"></div>
          <div className="bg-[#573685] border-2 border-[#8A57D4] shadow-custom h-[300px] w-[200px]"></div>
          <div className="bg-[#573685] border-2 border-[#8A57D4] shadow-custom h-[300px] w-[200px]"></div>
          <div className="bg-[#573685] border-2 border-[#8A57D4] shadow-custom h-[300px] w-[200px]"></div>
          <div className="bg-[#573685] border-2 border-[#8A57D4] shadow-custom h-[300px] w-[200px]"></div>
        </div>
      </div>
      <div className="absolute top-0 left-0">
        <Image src={icons.closeRed} alt="closeRed" />
      </div>
    </>
  );
};
