/* eslint-disable no-console */
import { setAudioTags, audioSwitchHandlers } from "./audio";
import { controlButtons } from "./constants";
import {
  setResetHandlers,
  setSaveHandlers,
  setContinueHandlers,
} from "./menuHandlers";

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

  audioSwitchHandlers(audioSection);

  return audioSection;
}

function setHandler(key, button) {
  switch (key) {
    case "reset":
      setResetHandlers(button);
      break;
    case "save":
      setSaveHandlers(button);
      break;
    case "continue":
      setContinueHandlers(button);
      break;
    default:
      break;
  }
}

function setMenuButtons() {
  const menu = document.createElement("div");
  menu.classList.add("menu");
  const keys = Object.keys(controlButtons);

  keys.forEach((key) => {
    const button = document.createElement("button");
    const h2 = document.createElement("h2");

    button.classList.add("button", controlButtons[key].class);
    h2.innerText = controlButtons[key].text;
    button.append(h2);

    setHandler(key, button);

    menu.appendChild(button);
  });
  return menu;
}

export { setBackground, setHeader, setAudioSection, setMenuButtons };

