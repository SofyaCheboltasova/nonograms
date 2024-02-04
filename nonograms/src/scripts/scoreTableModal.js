function createLine(time, name, difficulty, className) {
  const hTime = document.createElement("h1");
  const hName = document.createElement("h1");
  const hDiff = document.createElement("h1");
  hTime.innerText = time;
  hName.innerText = name;
  hDiff.innerText = difficulty;

  const tableLine = document.createElement("div");
  tableLine.classList.add(className);

  tableLine.append(hTime, hName, hDiff);
  return tableLine;
}

function fillTable(window) {
  const results = JSON.parse(localStorage.getItem("score_table"));
  const previousResult = document.querySelectorAll(".window__line");

  if (previousResult !== null) {
    previousResult.forEach((result) => {
      result.parentNode.removeChild(result);
    });
  }

  const headLine = createLine("Time", "Name", "Level", "window__line");
  window.appendChild(headLine);

  if (results === null) return;

  for (let i = 0; i < results.length; i += 1) {
    const { time, name, difficulty } = results[i];
    const line = createLine(time, name, difficulty, "window__line");
    window.appendChild(line);
  }
}

function createScoreTable() {
  const modal = document.createElement("div");
  modal.classList.add("modal");

  const overlay = document.createElement("div");
  overlay.classList.add("modal__overlay");

  overlay.addEventListener("click", () => {
    modal.classList.remove("modal_open");
    const field = document.querySelector(".gameField");
    field.classList.remove("gameField_closed");
  });

  const window = document.createElement("div");
  window.classList.add("modal__window");

  const h2 = document.createElement("h1");
  h2.innerText = "Best results";
  window.append(h2);

  fillTable(window);

  modal.append(overlay, window);

  return modal;
}

export { createScoreTable, fillTable };

