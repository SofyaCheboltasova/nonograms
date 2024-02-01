/* eslint-disable no-console */
function setCluesForLine(cell, line, cellClass = "") {
  for (let j = 0; j < line.length; j += 1) {
    const span = document.createElement("span");
    span.textContent = `${line[j]}`;

    if (cellClass !== "") {
      cell.classList.add(cellClass);
    }

    cell.appendChild(span);
  }
}

function setClues() {
  const nonogram = JSON.parse(localStorage.getItem("nonogram"));
  const { size, metadata } = nonogram;
  const { rows, columns } = metadata;
  const cells = document.querySelectorAll(".cell_clue");

  for (let i = 0; i < size; i += 1) {
    cells[i + 1].innerHTML = "";
    cells[(i + 1) * (size + 1)].innerHTML = "";

    setCluesForLine(cells[i + 1], columns[i]);
    setCluesForLine(cells[(i + 1) * (size + 1)], rows[i], "horizontal");
  }
}

export default setClues;

