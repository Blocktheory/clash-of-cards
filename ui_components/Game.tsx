import {
  useWaku,
  useContentPair,
  useLightPush,
  useStoreMessages,
  useFilterMessages,
} from "@waku/react";
import protobuf from "protobufjs";

const ChatMessage = new protobuf.Type("ChatMessage")
  .add(new protobuf.Field("timestamp", 1, "uint64"))
  .add(new protobuf.Field("sender", 2, "string"))
  .add(new protobuf.Field("message", 3, "string"));

export const Game = () => {
  //   const { node } = useWaku();

  //   const { decoder, encoder } = useContentPair();

  //   const { messages: storeMessages } = useStoreMessages({
  //     node,
  //     decoder,
  //   });

  //   const { messages: filterMessages } = useFilterMessages({ node, decoder });

  //   const { push } = useLightPush({ node, encoder });
  return <div></div>;
};
