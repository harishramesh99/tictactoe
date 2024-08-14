// Initialize the game board with empty cells
let board = Array(9).fill('-');
let player = 'X';  // Set the initial player to 'X'
let winner = null;  // Variable to track the winner
let isTie = false;  // Flag for tie game
let mode = 'human';  // Mode: 'human' or 'computer'

// Function to print the board on each face of the cube
const printOnBoard = () => {
    const faces = ['front', 'back', 'top', 'bottom', 'left', 'right'];
    faces.forEach(face => {
        const cells = document.querySelectorAll(`#tic-tac-toe-${face} .cell`);
        cells.forEach((cell, index) => {
            cell.innerHTML = board[index] === '-' ? '' : board[index];
        });
    });
}

// Function to check if there's a winner or a tie
const checkWinner = () => {
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    // Check each winning condition
    winningConditions.forEach(condition => {
        const [a, b, c] = condition;
        if (board[a] !== '-' && board[a] === board[b] && board[b] === board[c]) {
            winner = player;
        }
    });

    // Check for tie game
    if (board.every(cell => cell !== '-') && winner === null) {
        isTie = true;
    }
}

// Function to change the current player
const changePlayer = () => {
    player = player === 'X' ? 'O' : 'X';
}

// Function to make a move
const makeMove = (index) => {
    if (board[index] === '-' && winner === null && !isTie) {
        board[index] = player;  // Update the board with the player's move
        checkWinner();  // Check if there's a winner or a tie
        printOnBoard();  // Print the updated board
        if (winner) {
            alert(`${winner} wins!`);
            resetGame();  // Reset the game if there's a winner
        } else if (isTie) {
            alert(`It's a tie!`);
            resetGame();  // Reset the game if there's a tie
        } else {
            changePlayer();  // Change the player
            if (mode === 'computer' && player === 'O') {
                setTimeout(computerMove, 1000);  // Make a computer move if in computer mode
            }
        }
    } else {
        console.log('Button is fake');
    }
}

// Function for the computer to make a move
const computerMove = () => {
    let availableMoves = board.map((val, index) => val === '-' ? index : null).filter(val => val !== null);
    let move = availableMoves[Math.floor(Math.random() * availableMoves.length)];
    makeMove(move);
}

// Function to reset the game
const resetGame = () => {
    board = Array(9).fill('-');  // Reset the board
    player = 'X';  // Reset the player to 'X'
    winner = null;  // Reset the winner
    isTie = false;  // Reset the tie flag
    printOnBoard();  // Print the reset board
}

// Function to set the game mode
const setMode = (newMode) => {
    mode = newMode;
    resetGame();
}

// Add event listeners for the game buttons
document.getElementById('resetBtn').addEventListener('click', resetGame);
document.getElementById('humanVsHuman').addEventListener('click', () => setMode('human'));
document.getElementById('humanVsComputer').addEventListener('click', () => setMode('computer'));

// Load the Tic Tac Toe components when the window loads
window.onload = () => {
    const faces = ['front', 'back', 'top', 'bottom', 'left', 'right'];
    faces.forEach(face => {
        const container = document.getElementById(`tic-tac-toe-${face}`);
        container.innerHTML = 
        `
            <table>
                <tr>
                    <td><button class="cell" data-index="0"></button></td>
                    <td><button class="cell" data-index="1"></button></td>
                    <td><button class="cell" data-index="2"></button></td>
                </tr>
                <tr>
                    <td><button class="cell" data-index="3"></button></td>
                    <td><button class="cell" data-index="4"></button></td>
                    <td><button class="cell" data-index="5"></button></td>
                </tr>
                <tr>
                    <td><button class="cell" data-index="6"></button></td>
                    <td><button class="cell" data-index="7"></button></td>
                    <td><button class="cell" data-index="8"></button></td>
                </tr>
            </table>
        `;
    });

    // Add event listeners to each cell for making moves
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.addEventListener('click', () => makeMove(cell.dataset.index));
    });

    printOnBoard();  // Print the initial board state
}
