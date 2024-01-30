/* eslint-disable no-console */
function setClues(nonogram) {
  const { metadata } = nonogram;
  const { rows, columns } = metadata;

  console.error(rows, columns);
}

export default setClues;

