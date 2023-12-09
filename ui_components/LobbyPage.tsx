import { useEffect, useState } from "react";
import { icons } from "../utils/images";
import { Arcades } from "./Arcades";
import { StartGame } from "./StartGame";

export const LobbyPage = () => {
  const [step, setStep] = useState(1);
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

  const getUIComponent = () => {
    switch (step) {
      case 1:
        return <Arcades setStep={setStep} step={step} />;
      case 2:
        return <StartGame />;
      case 3:
        return;
        <></>;
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