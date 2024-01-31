import { audio, setAudioOn } from "./audio";

function setEndMessage(isWinner) {
  const header = document.querySelector(".main__header");
  if (isWinner) {
    header.innerText = "Congrats! You're a winner!";
    header.classList.add("main__header_win");
  } else {
    header.innerText = "Let's solve the nonogram!";
    header.classList.remove("main__header_win");
  }
  setAudioOn(audio.win.class);
}

export default setEndMessage;

