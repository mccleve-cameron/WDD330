const board = document.querySelector('.board');
const resetButton = document.getElementById('reset');
const player1 = 'X';
const player2 = 'O';
let player = player1;

function addPiece(e) {
    console.log(e.target);
    e.target.innerHTML = player;
    if (player === player1) player = player2;
    else player = player1;
}
board.addEventListener('click', addPiece);

function resetBoard() {
    for (let i = 0; i < board.children.length; i++) {
        board.children[i].innerText = '';
    }
    const children = Array.from(board.children);
    const empty = children.filter(function (child) {
        return child.innerText == 'X' || child.innerText == 'O';
    });
}