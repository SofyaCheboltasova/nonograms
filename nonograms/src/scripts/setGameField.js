function createCellsLine(size) {
  const tr = document.createElement("tr");

  for (let i = 0; i < size; i += 1) {
    const cell = document.createElement("td");
    cell.classList.add("cell");
    tr.appendChild(cell);
  }
  return tr;
}

function setGameField(size) {
  const gameField = document.createElement("div");
  gameField.classList.add("gameField");

  const cellsField = document.createElement("table");
  cellsField.classList.add("cellsField");

  for (let i = 0; i < size; i += 1) {
    const cellLine = createCellsLine(size);
    cellsField.append(cellLine);
  }
  gameField.appendChild(cellsField);
  return gameField;
}

export default setGameField;

