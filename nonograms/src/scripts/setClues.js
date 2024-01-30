function setCluesForLine(cell, line) {
  for (let j = 0; j < line.length; j += 1) {
    const span = document.createElement("span");
    span.textContent = `${line[j]}`;
    cell.appendChild(span);
  }
}

function setClues(nonogram) {
  const { size, metadata } = nonogram;
  const { rows, columns } = metadata;
  const cells = document.querySelectorAll(".cell_clue");

  for (let i = 0; i < size; i += 1) {
    setCluesForLine(cells[i + 1], columns[i]);
    setCluesForLine(cells[(i + 1) * (size + 1)], rows[i]);
  }
}

export default setClues;

