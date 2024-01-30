function createCellsLine(size, row) {
  const tr = document.createElement("tr");

  for (let i = 0; i < size; i += 1) {
    const cell = document.createElement("td");
    cell.setAttribute("id", i);
    cell.setAttribute("data-row", row);
    cell.setAttribute("data-col", i);
    cell.classList.add("cell");
    tr.appendChild(cell);
  }
  return tr;
}

function setClues(size) {
  const cluesField = document.createElement("div");
  cluesField.classList.add("gameField__clues");

  const cluesTop = document.createElement("div");
  cluesTop.classList.add("gameField__clues_top");

  const cluesLeft = document.createElement("div");
  cluesLeft.classList.add("gameField__clues_left");

  for (let i = 0; i < size + 1; i += 1) {
    const divider = document.createElement("div");
    divider.classList.add("divider-vertical");
    cluesTop.appendChild(divider);
  }

  for (let i = 0; i < size + 1; i += 1) {
    const divider = document.createElement("div");
    divider.classList.add("divider-horizontal");
    cluesLeft.appendChild(divider);
  }

  cluesField.append(cluesTop, cluesLeft);

  return cluesField;
}

function setGameField(size) {
  const gameField = document.createElement("div");
  gameField.classList.add("gameField");

  const cluesField = setClues(size);

  const cellsField = document.createElement("table");
  cellsField.classList.add("gameField__cells");

  for (let i = 0; i < size; i += 1) {
    const cellLine = createCellsLine(size, i);
    cellsField.append(cellLine);
  }
  gameField.append(cluesField, cellsField);
  return gameField;
}

export default setGameField;

