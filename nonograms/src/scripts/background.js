/* eslint-disable no-console */
import { setAudioTags, audioSwitchHandlers } from "./audio";
import { controlButtons } from "./constants";
import {
  setResetHandlers,
  setSaveHandlers,
  setContinueHandlers,
  setNewGameHandlers,
  setTemplatesHandlers,
} from "./menuHandlers";
import setSizeButtons from "./templates";

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
    case "newgame":
      setNewGameHandlers(button);
      break;
    case "template":
      setTemplatesHandlers(button);
      break;
    default:
      break;
  }
}

function createButton(className, text) {
  const button = document.createElement("button");
  const h2 = document.createElement("h2");

  button.classList.add("button", className);
  h2.innerText = text;
  button.append(h2);

  return button;
}

function setMenuButtons() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  const control = document.createElement("div");
  control.classList.add("menu__buttons");

  const template = document.createElement("div");
  template.classList.add("menu__templates");

  const templateButton = createButton("button__templates", "Templates");
  setHandler("template", templateButton);
  const sizeButtons = setSizeButtons();

  template.append(templateButton, sizeButtons);

  const keys = Object.keys(controlButtons);
  keys.forEach((key) => {
    const button = createButton(
      controlButtons[key].class,
      controlButtons[key].text
    );
    setHandler(key, button);
    control.appendChild(button);
  });

  menu.append(control, template);
  return menu;
}

export { setBackground, setHeader, setAudioSection, setMenuButtons };

