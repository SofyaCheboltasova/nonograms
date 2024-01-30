function createCellsLine(size, row, cellClass) {
  const tr = document.createElement("tr");

  for (let i = 0; i < size; i += 1) {
    const cell = document.createElement("td");
    cell.setAttribute("id", i);
    cell.setAttribute("data-row", row);
    cell.setAttribute("data-col", i);
    cell.classList.add(cellClass);
    tr.appendChild(cell);
  }
  return tr;
}

function createCluesBackground(size) {
  const wrapper = document.createElement("div");
  wrapper.classList.add("gameField__clues-wrapper");

  const cluesField = document.createElement("table");
  cluesField.classList.add("gameField__clues");

  for (let i = 0; i < size + 1; i += 1) {
    const cellLine = createCellsLine(size + 1, i, "cell_clue");
    cluesField.append(cellLine);
  }

  wrapper.appendChild(cluesField);
  return wrapper;
}

function setGameField(size) {
  const gameField = document.createElement("div");
  gameField.classList.add("gameField");

  const cluesField = createCluesBackground(size);

  const cellsField = document.createElement("table");
  cellsField.classList.add("gameField__cells");

  for (let i = 0; i < size; i += 1) {
    const cellLine = createCellsLine(size, i, "cell");
    cellsField.append(cellLine);
  }
  gameField.append(cluesField, cellsField);
  return gameField;
}

export default setGameField;

