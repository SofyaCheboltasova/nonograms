/* eslint-disable no-console */
import { nonogramSizes } from "./constants";
import resetGame from "./resetGame";

async function getTemplates(size) {
  const file = `${size}x${size}.json`;
  const request = await fetch(`/assets/nonograms/${file}`);
  const nonograms = await request.json();
  return nonograms;
}

// Кнопки с названиями
function setNamesButtons(text) {
  const button = document.createElement("button");
  const h2 = document.createElement("h2");
  h2.innerText = text;
  button.classList.add("button", "button__templates");
  button.appendChild(h2);
  return button;
}

function setNamesButtonHandlers(button, nonogram, name) {
  button.addEventListener("click", () => {
    localStorage.setItem("nonogram", JSON.stringify(nonogram));
    localStorage.setItem("nonogramName", JSON.stringify(name));
    resetGame();
  });
}

// нажатие на size
function setSizesButtonHandlers(size, button) {
  button.addEventListener("click", async () => {
    const sizes = document.querySelector(".templates__sizes");
    sizes.classList.add("templates__sizes_hidden");

    const templatesNames = document.querySelector(".templates__names");
    templatesNames.classList.remove("templates__names_hidden");
    templatesNames.innerHTML = "";

    const templates = await getTemplates(size);
    const keys = Object.keys(templates);
    const values = Object.values(templates);

    for (let i = 0; i < keys.length; i += 1) {
      const templateButton = setNamesButtons(keys[i]);
      setNamesButtonHandlers(templateButton, values[i], keys[i]);
      templatesNames.appendChild(templateButton);
    }
  });
}

// Кнопки с размерами
function setSizesButtons(templatesSizes) {
  for (let i = 0; i < nonogramSizes.length; i += 1) {
    const button = document.createElement("button");
    button.classList.add(
      "button",
      "button__templates",
      `templates__sizes_${nonogramSizes[i]}`
    );

    const h2 = document.createElement("h2");
    h2.textContent = `${nonogramSizes[i]} x ${nonogramSizes[i]}`;
    button.appendChild(h2);

    setSizesButtonHandlers(nonogramSizes[i], button);

    templatesSizes.appendChild(button);
  }
  return templatesSizes;
}

// Создание блоков кнопок с размерами и названиями
function setTemplatesButtons() {
  const templatesWrapper = document.createElement("div");
  templatesWrapper.classList.add(
    "templates__wrapper",
    "templates__wrapper_hidden"
  );

  const templatesSizes = document.createElement("div");
  templatesSizes.classList.add("templates__sizes");

  const templatesNames = document.createElement("div");
  templatesNames.classList.add("templates__names", "templates__names_hidden");

  setSizesButtons(templatesSizes);
  templatesWrapper.append(templatesSizes, templatesNames);

  return templatesWrapper;
}

function showHideMenu() {
  const templatesWrapper = document.querySelector(".templates__wrapper");
  const templatesSizes = document.querySelector(".templates__sizes");
  const templatesNames = document.querySelector(".templates__names");

  if (templatesWrapper.classList.contains("templates__wrapper_hidden")) {
    templatesWrapper.classList.remove("templates__wrapper_hidden");
    templatesSizes.classList.remove("templates__sizes_hidden");
  } else {
    templatesWrapper.classList.add("templates__wrapper_hidden");
  }
  templatesNames.classList.add("templates__names_hidden");
}

export { setTemplatesButtons, showHideMenu };

