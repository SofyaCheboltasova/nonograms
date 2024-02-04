class Result {
  constructor(time, name, difficulty) {
    this.time = time;
    this.name = name;
    this.difficulty = difficulty;
  }
}

function getTable() {
  const results = JSON.parse(localStorage.getItem("score_table"));

  if (results === null) {
    const table = [];
    localStorage.setItem("score_table", JSON.stringify(table));
    return table;
  }
  return results;
}

function compareResult(newResult) {
  let table = getTable();

  if (table.length !== 0) {
    let inserted = false;
    for (let i = 0; i < table.length; i += 1) {
      const previousResult = table[i];
      const order = newResult.time.localeCompare(previousResult.time);

      if (order < 0) {
        table.splice(i, 0, newResult);
        inserted = true;
        break;
      }
    }
    if (!inserted) {
      table.push(newResult);
    }
  } else {
    table.push(newResult);
  }

  table = table.slice(0, 5);
  localStorage.setItem("score_table", JSON.stringify(table));
}

function saveResult() {
  const time = document.querySelector(".header__timer").textContent;
  const name = JSON.parse(localStorage.getItem("nonogramName"));
  const { difficulty } = JSON.parse(localStorage.getItem("nonogram"));

  const result = new Result(time, name, difficulty);
  compareResult(result);
}

export default saveResult;

