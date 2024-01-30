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

