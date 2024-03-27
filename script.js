let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = false;
let humanPlayer1 = 'X';
let humanPlayer2 = 'O';

const winningConditions = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6]              // Diagonals
];

function startGame(mode) {
  if (mode === 'human') {
    gameActive = true;
    currentPlayer = 'X';
    humanPlayer1 = 'X';
    humanPlayer2 = 'O';
  } else if (mode === 'ai') {
    gameActive = true;
    currentPlayer = 'X';
    humanPlayer1 = 'X';
    humanPlayer2 = 'O';
    aiMove();
  }

  document.getElementById('mode-selection').style.display = 'none';
  document.getElementById('board').style.display = 'grid';
}

function handleClick(index) {
  if (gameActive && board[index] === '') {
    board[index] = currentPlayer;
    document.getElementById('board').children[index].innerText = currentPlayer;
    if (checkWin(currentPlayer)) {
      gameActive = false;
      alert(`${currentPlayer} wins!`);
    } else if (board.every(cell => cell !== '')) {
      gameActive = false;
      alert("It's a draw!");
    } else {
      currentPlayer = currentPlayer === humanPlayer1 ? humanPlayer2 : humanPlayer1;
    }
  }
}

function checkWin(player) {
  return winningConditions.some(condition => {
    return condition.every(index => {
      return board[index] === player;
    });
  });
}
