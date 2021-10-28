let turn = "x";
let symbols = [["", "", ""], ["", "", ""], ["", "", ""]];

const board = document.querySelector(".board");
const tiles = Array.from(document.querySelectorAll(".tile"));
const resetBtn = document.querySelector("button.reset");

board.addEventListener("click", ({ target }) => {
  const classes = Array.from(target.classList);
  if (classes.includes("tile") && classes.length !== 1) return;

  const idx = tiles.indexOf(target);

  target.classList.add(`tile-${turn}`);
  symbols[idx % 3][Math.floor(idx / 3)] = turn;
  turn = turn === "x" ? "o" : "x";

  displayTurn(turn);

  checkWin();
});

resetBtn.addEventListener("click", reset);

function displayTurn(turn) {
  // 1. zmień text elementu h1 z klasą "turn" zależnie od tego, czyja jest aktualnie tura
  document.querySelector("h1.turn").innerHTML = turn.toUpperCase() + " turn"
}

function checkWin() {
  // 2. sprawdź czy któryś z graczy wygrał pojedynek - jeśli tak wyświetla komunikat (możesz użyć np. funkcji "alert(...)")
  let winner = null;
  console.log(symbols)
  for (let i = 0; i < 3; i++) {
    if (symbols[i][0] != "" && symbols[i][0] == symbols[i][1] && symbols[i][1] == symbols[i][2]) winner = symbols[i][0]
  }
  for (let i = 0; i < 3; i++) {
    if (symbols[0][i] != "" && symbols[0][i] == symbols[1][i] && symbols[1][i] == symbols[2][i]) winner = symbols[0][i]
  }
  if (symbols[0][0] != "" && symbols[0][0] == symbols[1][1] && symbols[1][1] == symbols[2][2]) winner = symbols[0][0]
  if (symbols[2][0] != "" && symbols[2][0] == symbols[1][1] && symbols[1][1] == symbols[0][2]) winner = symbols[0][0]

  if (winner != null) setTimeout(() => { alert("Winner is " + winner + "!") }, 100)
}

// 3. dodaj listener pod przycisk z napisaem "reset" tak, aby po jego kliknięciu wywołać funkcję reset
function reset() {
  // 4. zresetuj stan gry
  symbols = [["", "", ""], ["", "", ""], ["", "", ""]];
  console.log(board)
  Array.from(document.querySelectorAll(".tile")).forEach(tile => {
    tile.className = "tile"
  })
}
