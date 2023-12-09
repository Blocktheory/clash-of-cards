import Image from "next/image";
import { icons } from "../utils/images";
import { wwePlayers } from "../constants/cards";
import { useState } from "react";
import { ExitGameDialog } from "./ExitGameDialog";
import { SendForBattleModal } from "./SendForBattleModal";
import { playClickSound } from "../utils";

export const PlayArena = () => {
  const [cardSelected, setCardSelected] = useState({ image: "", name: "" });
  const cards = [
    wwePlayers[0],
    wwePlayers[1],
    wwePlayers[2],
    wwePlayers[3],
    wwePlayers[4],
  ];
  const [openExit, setOpenExit] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);

  const handleCardSelect = (card: any) => {
    setCardSelected(card);
  };

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
        <div
          className="bg-[#573685] border-2 border-[#8A57D4] shadow-custom  w-[100%] h-[400px] flex justify-center items-center gap-8 mb-14"
          onClick={() => {
            setOpenConfirm(true);
          }}
        >
          <div className="bg-[#573685] border-2 border-[#8A57D4] shadow-custom h-[260px] w-[200px]">
            <div className=" relative h-full">
              {/* <img src={icons.wweBg.src} alt={"players"} className="w-[100%] h-[80%] object-cover" /> */}
              <div className="w-[100%] absolute bottom-0 z-0">
                {cardSelected.image ? (
                  <>
                    <img
                      src={cardSelected.image}
                      alt={cardSelected.name}
                      className="w-[100%] h-full object-cover"
                    />
                    <Image
                      src={icons.arcadesFrameBg}
                      alt="arcadesFrameBg"
                      className="w-[100%] object-cover"
                    />
                  </>
                ) : null}
              </div>
              <div className="relative z-10">
                <p className="text-[32px] text-center">{cardSelected.name}</p>
              </div>
            </div>
          </div>
          <Image src={icons.battleLogo} alt="battleLogo" />
          <div className="bg-[#573685] border-2 border-[#8A57D4] shadow-custom h-[260px] w-[200px]">
            <div className=" relative h-full">
              <div className="w-[100%] absolute bottom-0 z-0">
                {cardSelected.image ? (
                  <>
                    <img
                      src={cardSelected.image}
                      alt={cardSelected.name}
                      className="w-[100%] h-full object-cover"
                    />
                    <Image
                      src={icons.arcadesFrameBg}
                      alt="arcadesFrameBg"
                      className="w-[100%] object-cover"
                    />
                  </>
                ) : null}{" "}
              </div>
              <div className="relative z-10">
                <p className="text-[32px] text-center">{cardSelected.name}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-5 cursor-pointer">
          {cards.map((card, key) => (
            <div
              onClick={() => {
                playClickSound();
                handleCardSelect(card);
              }}
              key={key}
              className="bg-[#573685] border-2 border-[#8A57D4] shadow-custom h-[300px] w-[200px]"
            >
              <img
                src={card.image}
                alt={card.name}
                className="w-[100%] h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div
        className="absolute top-0 left-0"
        onClick={() => {
          setOpenExit(true);
        }}
      >
        <Image src={icons.closeRed} alt="closeRed" />
      </div>
      {openExit && <ExitGameDialog open={openExit} setOpen={setOpenExit} />}
      {openConfirm && (
        <SendForBattleModal
          open={openConfirm}
          setOpen={setOpenConfirm}
          playerData={{
            id: 25,
            name: "AJ Styles",
            rank: 25,
            height: "180",
            weight: 218,
            chest: "118",
            biceps: "48",
            gender: "male",
            image:
              "https://ds-storage.sgp1.cdn.digitaloceanspaces.com/ethindia/cards/aj.png",
            audio: "",
            arcade_id: 1,
            points: 5,
          }}
        />
      )}
    </>
  );
};
