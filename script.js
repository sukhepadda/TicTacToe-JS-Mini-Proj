let currentPlayer = "X";
let arr = Array(9).fill(null);
// console.log(arr);
function replay() {
  window.location.reload(); //reload for windows
  history.go(0); // reload for codepen
}
function checkWinner() {
  if (
    (arr[0] != null && arr[0] == arr[1] && arr[1] == arr[2]) ||
    (arr[3] != null && arr[3] == arr[4] && arr[4] == arr[5]) ||
    (arr[6] != null && arr[6] == arr[7] && arr[7] == arr[8]) ||
    (arr[0] != null && arr[0] == arr[3] && arr[3] == arr[6]) ||
    (arr[1] != null && arr[1] == arr[4] && arr[4] == arr[7]) ||
    (arr[2] != null && arr[2] == arr[5] && arr[5] == arr[8]) ||
    (arr[0] != null && arr[0] == arr[4] && arr[4] == arr[8]) ||
    (arr[2] != null && arr[2] == arr[4] && arr[4] == arr[6])
  ) {
    document.querySelector("body").innerHTML = `
    <div class="container">

    <h1 class="winner">Winner! is '${currentPlayer}'</h1>
    <div><button class="btnWinner" onclick="replay();">Replay</button></div>
    </div>

    `;
    return;
  }
  if (!arr.some((e) => e === null)) {
    document.querySelector("body").innerHTML = `
    <div class="container">
        <h1 class="draw">It's a Draw</h1>
        <div><button class="btnDraw" onclick="replay();">Replay</button></div>
        </div>

        `;
  }
}
function handClicked(el) {
  //el is getting from the click event onclick="handClicked(this)"
  const id = el.id;
  if (arr[id] !== null) return;
  // console.log(id);
  arr[id] = currentPlayer;
  el.innerText = currentPlayer;
  checkWinner();
  currentPlayer = currentPlayer === "X" ? "O" : "X"; //this is the simple if else statement
  // console.log(arr);
}
