export function convertCmToFeetAndInches(cm: number, feetConvert = true): string {
  const inchesPerCm = 0.393701;
  const totalInches = cm * inchesPerCm;
  const feet = Math.floor(totalInches / 12);
  const inches = Math.round(totalInches % 12);

  if (!feetConvert){
    return `${Math.round(totalInches)}"`;
  }
  if (feet > 0) {
    return `${feet}' ${inches}"`;
  } else {
    return `${inches}"`;
  }
}

export const playClickSound = () => {
  const sound = new Audio("/button-click.mp3"); // Path to your sound file in the public folder
  sound.play();
};


export const playThemeSong = () => {
  const sound = new Audio("/theme_wwe.mp3"); // Path to your sound file in the public folder
  sound.loop = true;
  sound.volume = 0.1; 
  sound.play();
};