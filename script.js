const btns = document.querySelectorAll(".btn"); // Select all buttons
const compTurn = document.querySelector("#compTurn");
const result = document.querySelector("#result");
const yourScore = document.querySelector("#yourScore");
const compScore = document.querySelector("#compScore");

let x = 0;
let y = 0;

const gameMoves = ["rock", "paper", "scissor"];

function playGame(userChoice) {
    let compMoveIndex = Math.floor(Math.random() * 3);
    let compMove = gameMoves[compMoveIndex];

    compTurn.innerHTML = `Computer's move: ${compMove}`;

    if (userChoice === compMove) {
        result.textContent = "It's a tie!";
        result.style.color = "rgb(255, 151, 0)";
    } else if (
        (userChoice === "rock" && compMove === "scissor") ||
        (userChoice === "paper" && compMove === "rock") ||
        (userChoice === "scissor" && compMove === "paper")
    ) {
        result.textContent = `You win! ${userChoice} beats ${compMove}`;
        result.style.color = "green";
        yourScore.innerHTML = ++x;
    } else {
        result.textContent = `You lose! ${compMove} beats ${userChoice}`;
        result.style.color = "red";
        compScore.innerHTML = ++y;
    }
}

// Add event listeners dynamically
btns.forEach(btn => {
    btn.addEventListener("click", () => playGame(btn.id));
});