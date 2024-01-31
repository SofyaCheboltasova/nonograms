import { setAudioTags, switchAudio } from "./audio";

function setBackground() {
  const background = document.createElement("div");
  background.classList.add("background");

  return background;
}

function setHeader() {
  const header = document.createElement("h1");
  header.classList.add("main__header");
  header.textContent = "Let's solve the nonogram!";

  return header;
}

function setAudioSection() {
  const audioSection = document.createElement("div");
  const audioTags = setAudioTags();

  audioSection.classList.add("main__audio_off");
  audioSection.appendChild(audioTags);

  switchAudio(audioSection);

  return audioSection;
}

export { setBackground, setHeader, setAudioSection };

