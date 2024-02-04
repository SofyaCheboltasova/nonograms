/* eslint-disable no-console */
import { setAudioTags, audioSwitchHandlers } from "./audio";
import { controlButtons } from "./constants";
import {
  setResetHandlers,
  setSaveHandlers,
  setContinueHandlers,
  setTemplatesHandlers,
  setSolutionHandlers,
  setRandomHandlers,
} from "./menuHandlers";
import { setTemplatesButtons } from "./templates";
import { changeTheme } from "./theme";

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

function setSettingsSection() {
  const settings = document.createElement("div");
  settings.classList.add("settings");

  const audioSection = document.createElement("div");
  const audioTags = setAudioTags();

  audioSection.classList.add("button", "button__audio_off");
  audioSection.appendChild(audioTags);

  audioSwitchHandlers(audioSection);

  const theme = document.createElement("div");
  theme.classList.add("button", "button__theme_light");
  changeTheme(theme);

  settings.append(theme, audioSection);

  return settings;
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
    case "template":
      setTemplatesHandlers(button);
      break;
    case "solution":
      setSolutionHandlers(button);
      break;
    case "random":
      setRandomHandlers(button);
      break;
    case "score":
      // setScoreHandlers(button);
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
  const sizeButtons = setTemplatesButtons();

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

export { setBackground, setHeader, setSettingsSection, setMenuButtons };

