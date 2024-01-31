import { setAudioOff, setAudioOn, setBackgroundAudio } from "./audio";

export function setBackground() {
  const background = document.createElement("div");
  background.classList.add("background");

  return background;
}

export function setHeader() {
  const header = document.createElement("h1");
  header.classList.add("main__header");
  header.textContent = "Let's solve the nonogram!";

  return header;
}

function setAudioClickHandler(audioIcon) {
  audioIcon.addEventListener("click", () => {
    if (audioIcon.classList.contains("main__audio_on")) {
      audioIcon.classList.remove("main__audio_on");
      setAudioOff();
    } else {
      audioIcon.classList.add("main__audio_on");
      setAudioOn();
    }
  });
}

export function setAudioIcon() {
  const audioIcon = document.createElement("div");
  const audio = setBackgroundAudio();

  audioIcon.classList.add("main__audio_off");
  audioIcon.appendChild(audio);

  setAudioClickHandler(audioIcon);

  return audioIcon;
}

