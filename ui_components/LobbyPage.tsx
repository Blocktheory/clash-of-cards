import { useEffect, useState } from "react";
import { icons } from "../utils/images";
import { Arcades } from "./Arcades";
import { StartGame } from "./StartGame";
import { SelectCards } from "./SelectCards";
import { PlayArena } from "./PlayArena";
import { wwePlayers } from "../constants/cards";
import { WAKU_EVENTS } from "../constants";
import protobuf from "protobufjs";
import { MintNft } from "./MintNft";

export const LobbyPage = () => {
  const [otherPlayerJoined, setOtherPlayerJoined] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [selectedArcade, setSelectedArcade] = useState();
  const [playerList, setPlayersList] = useState(wwePlayers);
  const overlayStyle: React.CSSProperties = {
    content: "''",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
    background: `url(${icons.landingBg.src}) center / cover no-repeat`,
  };

  const handleStep = () => {
    setStep(step + 1);
  };

  const handleSelectedPlayers = (card: any) => {
    const players = [...selectedPlayers, ...[card]];
    let list = playerList;

    const updatedList = list.map((player) => {
      if (player.id === card.id) {
        return { ...player, selected: !player.selected };
      }
      return player;
    });

    const unique = players.filter((obj, index) => {
      return index === players.findIndex((o) => obj.id === o.id);
    });
    //@ts-ignore
    setSelectedPlayers(unique);
    setPlayersList(updatedList);
  };

  const getUIComponent = () => {
    switch (step) {
      case 1:
        return (
          <Arcades
            setStep={setStep}
            step={step}
            setSelectedArcade={setSelectedArcade}
          />
        );
      case 2:
        return (
          <StartGame
            setStep={setStep}
            step={step}
            selectedArcade={selectedArcade}
          />
        );
      case 3:
        return (
          <SelectCards
            setStep={setStep}
            step={step}
            selectPlayers={handleSelectedPlayers}
            wwePlayers={playerList}
          />
        );
      case 4:
        return <MintNft setStep={setStep}
        step={step} />;
      default:
        return <></>;
    }
  };

  useEffect(() => {
    getUIComponent();
  }, [step]);

  return (
    <div className="h-full relative">
      <div className="" style={overlayStyle}></div>
      <div>{getUIComponent()}</div>
    </div>
  );
};
