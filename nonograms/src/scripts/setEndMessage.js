import { audio, setAudioOn } from "./audio";

function setEndMessage(isWinner) {
  const header = document.querySelector(".main__header");
  if (isWinner) {
    header.innerText = "Congrats! You're a winner!";
  } else {
    header.innerText = "Next time it will be better :(";
  }
  setAudioOn(audio.win.class);
  header.classList.add("main__header_win");
}

export default setEndMessage;

