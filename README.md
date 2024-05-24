# 🈲 RSS Nonograms 🈲

### 🈴 [Deploy](https://rolling-scopes-school.github.io/sofyacheboltasova-JSFE2023Q4/nonograms/)

What is [Nonograms](https://en.wikipedia.org/wiki/Nonogram)  
Learn [how to solve the nonogram](https://nonograms-katana.fandom.com/wiki/Tips_for_solving)

### 🈴 Game rules

Nonograms is a puzzle game to reveal a hidden picture by looking at the number clues. The clues are given at the top and left side of the grid. Each number in these clue defines a block of black cell. A number indicates an unbroken line of black cells, and they are in the same order as the lines. These puzzles are often black and white—describing a binary image—but they can also be colored.

**In the current task you have to implement only binary version of the game**

<details>
<summary>Main functional requirements</summary>

`Basic (required):`

- initially, `body` in the index.html file must be empty (only script tag is allowed), **all necessary elements are generated using JS**
- the design should be adaptive (or responsive) from _(500px <= width)_. It is acceptable to change the appearance for the mobile version (for example, hide the buttons in the burger menu)
- the default size of the frame is 5x5. The clues are given at the top and left side of the grid. The sequence of numbers must be logically arranged and help the player solve the nonogram
- for game field: every 5 cells in a rows and columns should be divided by divider (bold line). For clues: every 5 cells in a **rows** should be divided by divider (for left clues); every 5 cells in a **columns** should be divided by divider (for top clues). Clues should be divided from game field by bold line.
- a player is able to fill in a cell in the grid, using left mouse-click. On a click event, trigger the functionality of changing the color of the grid to dark (black). When player clicks on dark cell - it will change to empty (white).
- end game when players fill all **black** cells correctly according to the clues. On a successful game solution, display "Great! You have solved the nonogram!" (in case you missed stop-watch implementation)

`Advanced:`

- the game should have at least 5 templates for easy level (5x5). Players should be able to choose the picture they wish to solve, possibly through a list of items. You might implement it in two ways: either make a list of possible templates with images(solved puzzles) or using template names (without pictures), or using both images and names. User should also easy understand what is the level of image.
- a player is able to fill in a cell in the grid changing the color of the grid to crossed-cell(X) using right mouse-click. Context menu should not appear. Filling empty cells with X is not obligatory to win the game.
- the game can be restarted (reset) without reloading the page (for example, by clicking on button `Reset game`). After clicking the button the level of game and template (picture) should not be changed - it means that only filled cells will be reset. Otherwise the player can change game template or game level (for example, you could implement menu with options) without reloading the page.
- display the game duration in format XX:XX, stop-watch will start after first click on field (not on clues). "Great! You have solved the nonogram in ## seconds!" is displayed after winning.
- the game should include sound effects for events such as mark a cell as black, flagging a cell as X, flagging a cell as empty and win game.
- the staging of the game is saved (for example, using localStorage) by clicking on button "Save game", so that when player clicks on button "continue last game", he can continue playing from where he left off.

`Additional (to get extra points):`

- dark/light themes of the game. Changing the theme implies a change in the entire color scheme of the application, including the background color, cell colors, counters, buttons etc.
- implement three levels of difficulty in the game: easy (5x5), medium (10x10), and hard (15x15). Each level should vary in the size of the game board and the complexity of the main template (pictures).
- the latest 5 win results are saved in the high score table. Table is sorted by time of the game using XX:XX format (for example, using LocalStorage). Every line should include: solved puzzle (either naming, or picture, or both); difficulty; stop-watch result.
- implement button "random game". When player clicks on button - the random template appears (both template and level must be chosen randomly by algorithm).
- implement "Solution" button near the field. When player clicks the button - the field will be filled in cells with right solution. Usage of the button doesn't mean winning and will not be recorded into winning table.

Recommended usage of [eslint (eslint-config-airbnb-base)](https://eslint.org/), [webpack](https://webpack.js.org/) or any other bundler (this requirement is not checked)
</details>

### 🈴 Technical requirements

- the application is checked in the latest version of Google Chrome browser
- jQuery is not allowed
- you can not use Angular / React / Vue / Typescript
- you can use bootstrap, CSS frameworks, HTML and CSS preprocessors

### 🈴 Criteria for evaluation:

**Final score for the task: 220 / 250 points**

### Basic scope 80 / 80 points

- [x] layout, design, responsive UI: `+20`
- [x] at the beginning state of the game, the frame has size 5x5. The sequence of numbers is logically arranged and help the player solve the nonogram: `+20`
- [x] cells and clues are divided by dividers as described in Basic block: `+5`
- [x] when user clicks on cells using mouse left-click - it should be mark as dark. When user click on dark cell - it should be mark as empty (white) cell: `+15`
- [x] the game should end when the player reveals all **black** cells correctly and related message is displayed at the end of the game: `+20`

### Advanced scope 90 / 90 points

- [x] the game should have at least 5 templates for easy level (5x5) and the player is able to choose what picture he/she wants to solve. `+15`
- [x] a player is able to fill in a cell in the grid changing the color of the grid to crossed-cell(X) using right mouse-click. Context menu doesn't appear: `+20`
- [x] the game can be restarted without reloading the page: `+15`
- [x] game duration is displayed, stop-watch will start after first click on field (not on clues) and related message is displayed at the end of the game: `+10`
- [x] sound accompaniment (on/off) for every events (see **Advanced** block): `+15`
- [x] implemented saving the state of the latest game and "Continue last game" button: `+15`

### Hacker scope 50 / 80 points

- [x] option to choose different themes for the game board (dark/light themes): `+15`
- [ ] ability to change the size (5x5, 10x10, 15x15) is implemented and there are least 5 templates for each level: `+20`
- [x] implemented saving the latest 5 win results with sorting: `+15`
- [ ] "random game" button is implemented. When player clicks on button - the random template appears (both template and level must be chosen randomly by algorithm): `+15`
- [x] "Solution" button is implemented. When player clicks on button - the field is filled in cells with right solution. Such games is not recorded into winning table: `+15`
