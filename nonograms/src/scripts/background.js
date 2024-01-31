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

  audioSection.classList.add("button", "button__audio_off");
  audioSection.appendChild(audioTags);

  switchAudio(audioSection);

  return audioSection;
}

function setResetButton() {
  const button = document.createElement("button");

  button.classList.add("button", "button__reset");
  const h2 = document.createElement("h2");
  h2.innerText = "Reset";
  button.append(h2);

  return button;
}

export { setBackground, setHeader, setAudioSection, setResetButton };

