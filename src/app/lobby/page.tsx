"use client";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import protobuf from "protobufjs";
import { useEffect, useState } from "react";
import { useContentPair, useFilterMessages, useLightPush, useStoreMessages, useWaku } from "@waku/react";
import { WAKU_EVENTS } from "../../../constants";
import { LobbyPage } from "../../../ui_components/LobbyPage";

const ChatMessage = new protobuf.Type("ChatMessage")
  .add(new protobuf.Field("sender", 1, "string"))
  .add(new protobuf.Field("message", 2, "string"));

export default function Loby() {
  const { node } = useWaku() as any;
  const [player, setPlayer] = useState("");
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [otherPlayerJoined, setOtherPlayerJoined] = useState(false);
  const [nodeStart, setNodeStart] = useState(false);
  const [showHandleJoin, setShowHandleJoin] = useState(false);
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

  useEffect(() => {
    const messages = storeMessages.concat(filterMessages);
    const decodedMessages = messages.map((message) => decodeMessage(message));
    console.log("decodedMessages", decodedMessages);
    const latestMessage = decodedMessages.pop();
    if (!latestMessage) return;
    const message = JSON.parse(latestMessage?.message as string);
    console.log("message", message);
    switch (message.type) {
      case WAKU_EVENTS.SET_JOIN_GAME:
        if (!player) {
          setOtherPlayerJoined(true);
          setShowHandleJoin(true);
          setPlayer("player2");
        }
        break;
      case WAKU_EVENTS.SET_PLAYER_JOINED:
        setOtherPlayerJoined(true);
        break;
      default:
        break;
    }
  }, [storeMessages, filterMessages]);

  useEffect(() => {
    if (node !== undefined) {
      setNodeStart(true);
    }
  }, [node]);

  const handleSendMessage = (event: string, msg: any) => {
    const message: any = {
      sender: player,
      type: event,
      payload: msg,
    };
    const msgStr = JSON.stringify(message);
    sendMessage("senderMsg", msgStr);
    setPlayer("player1");
  };

  return (
    <div className="h-full relative">
      <LobbyPage />
    </div>
    // <div className="min-h-screen p-24">
    //   {!nodeStart ? (
    //     <>Loading...</>
    //   ) : (
    //     <>
    //       <button
    //         className="btn bg-gradient-to-bl"
    //         onClick={() => {
    //           setPlayer("player1");
    //           handleSendMessage(WAKU_EVENTS.SET_JOIN_GAME, true);
    //         }}
    //       >
    //         Send Message
    //       </button>
    //       <br />
    //       {showHandleJoin && (
    //         <button
    //           className="btn bg-gradient-to-bl"
    //           onClick={() => {
    //             handleSendMessage(WAKU_EVENTS.SET_PLAYER_JOINED, true);
    //           }}
    //         >
    //           Handle Join Game
    //         </button>
    //       )}
    //     </>
    //   )}
    // </div>
  );
}
