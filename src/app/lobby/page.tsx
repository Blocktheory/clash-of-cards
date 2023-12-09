"use client";
import { LobbyPage } from "../../../ui_components/LobbyPage";

export default function Loby() {
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
