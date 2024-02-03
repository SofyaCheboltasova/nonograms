import "./sass/main.scss";

import setClues from "./scripts/setClues";
import setGameField from "./scripts/setGameField";
import { setCellsEventListeners } from "./scripts/cells";
import { setNonogram } from "./scripts/nonogram";
import { setHeader } from "./scripts/header";
import {
  setBackground,
  setAudioSection,
  setMenuButtons,
} from "./scripts/background";

const size = 5;

async function setLogic() {
  await setNonogram();
  setClues();
  setCellsEventListeners(size);
}

async function setMainTemplate() {
  const main = document.createElement("main");
  main.classList.add("main");

  const header = setHeader();
  const audioSection = setAudioSection();
  const background = setBackground();
  const menu = setMenuButtons();
  const gameField = setGameField(size);

  main.append(header, audioSection, menu, background, gameField);

  document.body.append(main);
}

setMainTemplate();
setLogic();

// last -> скидывать запоминать таймер
/*
	- адаптив
	- шрифт
	- выбор шаблона	
	- mvc
	*/

