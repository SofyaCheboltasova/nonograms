function setClasses(button) {
  const isDarkMode =
    document.documentElement.getAttribute("data-theme") === "dark";
  if (isDarkMode) {
    button.classList.add("button__theme_dark");
  } else {
    button.classList.remove("button__theme_dark");
  }
}

function changeTheme(button) {
  setClasses(button);

  button.addEventListener("click", () => {
    const isDarkMode =
      document.documentElement.getAttribute("data-theme") === "dark";
    if (isDarkMode) {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
    setClasses(button);
    localStorage.setItem("dark-mode", !isDarkMode);
  });
}

function setTheme() {
  const isDarkMode = localStorage.getItem("dark-mode");
  if (isDarkMode === "true") {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

export { changeTheme, setTheme };

