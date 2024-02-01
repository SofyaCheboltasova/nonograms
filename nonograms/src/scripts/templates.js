/* eslint-disable no-console */
import { nonogramSizes } from "./constants";

function setSizeButtons() {
  const templatesWrapper = document.createElement("div");
  templatesWrapper.classList.add(
    "templates__wrapper",
    "templates__wrapper_hidden"
  );

  for (let i = 0; i < nonogramSizes.length; i += 1) {
    const button = document.createElement("button");
    button.classList.add(
      "button",
      "button__templates",
      `templates__${nonogramSizes[i]}`
    );

    const h2 = document.createElement("h2");
    h2.textContent = `${nonogramSizes[i]} x ${nonogramSizes[i]}`;
    button.appendChild(h2);

    templatesWrapper.appendChild(button);
  }

  return templatesWrapper;
}

export default setSizeButtons;

