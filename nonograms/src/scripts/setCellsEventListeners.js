function setCellsEventListeners() {
  const cells = document.querySelectorAll(".cell");

  for (let i = 0; i < cells.length; i += 1) {
    cells[i].addEventListener("click", () => {
      if (cells[i].classList.contains("cell_pressed")) {
        cells[i].classList.remove("cell_pressed");
      } else {
        cells[i].classList.add("cell_pressed");
      }
    });
  }
}

export default setCellsEventListeners;

