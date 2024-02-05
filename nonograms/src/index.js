import "./sass/main.scss";

import setClues from "./scripts/setClues";
import setGameField from "./scripts/setGameField";
import { setCellsEventListeners } from "./scripts/cells";
import { setNonogram } from "./scripts/nonogram";
import { setHeader } from "./scripts/header";
import {
  setBackground,
  setSettingsSection,
  setMenuButtons,
} from "./scripts/background";
import { setTheme } from "./scripts/theme";
import { createScoreTable } from "./scripts/scoreTableModal";

const size = 5;

async function setLogic() {
  await setNonogram();
  setClues();
  setCellsEventListeners(size);
}

async function setMainTemplate() {
  setTheme();

  const main = document.createElement("main");
  main.classList.add("main");
  const header = setHeader();
  const settings = setSettingsSection();
  const background = setBackground();
  const menu = setMenuButtons();
  const gameField = setGameField(size);
  const table = createScoreTable();

  main.append(header, settings, menu, background, gameField, table);
  document.body.append(main);
}

setMainTemplate();
setLogic();

/*
	- адаптив
	- mvc
	- 3 уровня сложности
	*/

