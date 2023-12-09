import Image from "next/image";
import { icons } from "../utils/images";
import { wwePlayers } from "../constants/cards";
import { ExitGameDialog } from "./ExitGameDialog";
import { SendForBattleModal } from "./SendForBattleModal";
import { playClickSound } from "../utils";
import { useEffect, useState } from "react";
import { WAKU_EVENTS } from "../constants";
import { useContentPair, useFilterMessages, useLightPush, useStoreMessages, useWaku } from "@waku/react";
import protobuf from "protobufjs";

const ChatMessage = new protobuf.Type("ChatMessage").add(new protobuf.Field("sender", 1, "string")).add(new protobuf.Field("message", 2, "string"));

export const PlayArena = ({ otherPlayerJoined }: any) => {
  const { node } = useWaku() as any;
  const [cards, setCards] = useState([wwePlayers[0], wwePlayers[1], wwePlayers[2], wwePlayers[3], wwePlayers[4]]);
  const [player, setPlayer] = useState("");
  const [cardSelected, setCardSelected] = useState({ image: "", name: "" });
  const [openExit, setOpenExit] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [p2cardSelected, setP2CardSelected] = useState({ image: "", name: "" });
  const { decoder, encoder } = useContentPair();
  const { messages: storeMessages } = useStoreMessages({
    node,
    decoder,
    options: {
      pageDirection: undefined,
      pageSize: undefined,
      timeFilter: undefined,
      cursor: undefined,
    },
  });

  useEffect(() => {
    const player = sessionStorage.getItem("player") as string;
    setPlayer(player);
  }, []);

  const handleCardSelect = (selectedCard: any) => {
    // if (cardSelected.name && !p2cardSelected.name) {
    //   return;
    // }
    let _card = cards.filter((__card) => __card.id !== selectedCard.id);
    setCards(_card);
    setCardSelected(selectedCard);
    if (player === "x") {
      handleSendMessage(WAKU_EVENTS.SET_SELECTED_CARD1, selectedCard);
    }
    if (player === "y") {
      handleSendMessage(WAKU_EVENTS.SET_SELECTED_CARD2, selectedCard);
    }
  };

  const { messages: filterMessages } = useFilterMessages({ node, decoder });

  const { push } = useLightPush({ node, encoder });

  async function sendMessage(sender: string, message: string) {
    try {
      const protoMessage = ChatMessage.create({
        sender,
        message,
      });
      const serialisedMessage = ChatMessage.encode(protoMessage).finish();
      const timestamp = new Date();
      await push?.({
        payload: serialisedMessage,
        timestamp,
      });
      console.log("MESSAGE PUSHED");
    } catch (e) {
      console.log("error", e);
    }
  }

  function decodeMessage(wakuMessage: any) {
    if (!wakuMessage.payload) return;
    const { sender, message }: any = ChatMessage.decode(wakuMessage.payload);
    if (!sender || !message) return;
    return {
      message,
      sender,
    };
  }

  const handleSendMessage = (event: string, msg: any) => {
    const message: any = {
      sender: player,
      type: event,
      payload: msg,
    };
    const msgStr = JSON.stringify(message);
    sendMessage("senderMsg", msgStr);
  };

  useEffect(() => {
    const messages = storeMessages.concat(filterMessages);
    const decodedMessages = messages.map((message) => decodeMessage(message));
    console.log("decodedMessages", decodedMessages);
    const latestMessage = decodedMessages.pop();
    if (!latestMessage) return;
    const message = JSON.parse(latestMessage?.message as string);
    console.log("message", message);
    handleEvents(message);
  }, [storeMessages, filterMessages]);

  const handleEvents = (message: any) => {
    switch (message.type) {
      case WAKU_EVENTS.SET_SELECTED_CARD1:
        if (player === "y") {
          setP2CardSelected(message.payload);
        }
        break;
      case WAKU_EVENTS.SET_SELECTED_CARD2:
        if (player === "x") {
          setP2CardSelected(message.payload);
        }
        break;
      default:
        break;
    }
  };

  return (
    <>
      {!node ? (
        <p>Loading...</p>
      ) : (
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
                  {/* <img src={icons.wweBg.src} alt={"players"} className="w-[100%] h-[80%] object-cover" /> */}
                  {cardSelected.image && <img src={cardSelected.image} alt={cardSelected.name} className="w-[100%] h-[80%] object-cover" />}
                  <div className="w-[100%] absolute bottom-0 z-0">
                    {cardSelected.image ? (
                      <>
                        <Image src={icons.arcadesFrameBg} alt="arcadesFrameBg" className="w-[100%] object-cover" />
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
                  {p2cardSelected.image ? <img src={p2cardSelected.image} alt={p2cardSelected.name} className="w-[100%] h-[80%] object-cover" /> : cardSelected.name && !p2cardSelected.name ? "Wait for other player" : null}
                  <div className="w-[100%] absolute bottom-0 z-0">
                    {p2cardSelected.image ? (
                      <>
                        <Image src={icons.arcadesFrameBg} alt="arcadesFrameBg" className="w-[100%] object-cover" />
                      </>
                    ) : null}
                  </div>
                  <div className="relative z-10">
                    <p className="text-[32px] text-center">{p2cardSelected.name}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-5 cursor-pointer">
              {cards.map((card, key) => (
                <div onClick={() => {}} key={key} className="bg-[#573685] border-2 border-[#8A57D4] shadow-custom h-[300px] w-[200px]">
                  <img src={card.image} alt={card.name} className="w-[100%] h-full object-cover" />
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
                image: "https://ds-storage.sgp1.cdn.digitaloceanspaces.com/ethindia/cards/aj.png",
                audio: "",
                arcade_id: 1,
                points: 5,
              }}
            />
          )}
        </>
      )}
    </>
  );
};
