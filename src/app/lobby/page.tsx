"use client";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import protobuf from "protobufjs";
import { useEffect, useState } from "react";
import { useContentPair, useFilterMessages, useLightPush, useStoreMessages, useWaku } from "@waku/react";

const ChatMessage = new protobuf.Type("ChatMessage")
  .add(new protobuf.Field("timestamp", 1, "uint64"))
  .add(new protobuf.Field("sender", 2, "string"))
  .add(new protobuf.Field("message", 3, "string"));

export default function Loby() {
  const { node } = useWaku() as any;
  const [nodeStart, setNodeStart] = useState(false);
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
        timestamp: Date.now(),
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
    const { timestamp, sender, message }: any = ChatMessage.decode(wakuMessage.payload);
    if (!timestamp || !sender || !message) return;
    const time = new Date();
    time.setTime(Number(timestamp));
    return {
      message,
      timestamp: time,
      sender,
      timestampInt: wakuMessage.timestamp,
    };
  }

  useEffect(() => {
    const messages = storeMessages.concat(filterMessages);
    const decodedMessages = messages.map((message) => decodeMessage(message));
    console.log("decodedMessages", decodedMessages);
  }, [storeMessages, filterMessages]);

  useEffect(() => {
    if (node !== undefined) {
      setNodeStart(true);
    }
  }, [node]);

  const handleSendMessage = () => {
    sendMessage("send message", "testing@123");
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      {!nodeStart ? (
        <>Loading...</>
      ) : (
        <button className="btn bg-gradient-to-bl" onClick={handleSendMessage}>
          Send Message
        </button>
      )}
    </div>
  );
}
