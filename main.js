const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const result = document.getElementById("result");
const scores = document.getElementById("scores");

let compChoice = "";
let btnChoice = "";
let playerOne = 0;
let compScore = 0;

rock.addEventListener("click", () => {
  console.log("You clicked rock");
  compChoice = computerChoice();
  btnChoice = "rock";
  winOrLose(compChoice, btnChoice);
  gameOver();
});
paper.addEventListener("click", () => {
  console.log("You clicked paper");
  compChoice = computerChoice();
  btnChoice = "paper";
  winOrLose(compChoice, btnChoice);
  gameOver();
});
scissors.addEventListener("click", () => {
  console.log("You clicked scissors");
  compChoice = computerChoice();
  btnChoice = "scissors";
  winOrLose(compChoice, btnChoice);
  gameOver();
});

//Function that determines the choice of the computer

function computerChoice() {
  let numChoice = Math.floor(Math.random() * 3);

  let compChoice = "";

  if (numChoice === 0) {
    compChoice = "rock";
  } else if (numChoice === 1) {
    compChoice = "paper";
  } else if (numChoice === 2) {
    compChoice = "scissors";
  }
  return compChoice;
}

//Function that determines who gets are point with each choice

function winOrLose(compChoice, btnChoice) {
  if (compChoice === btnChoice) {
    result.innerText = `You chose ${compChoice} same as computer choice so its a tie`;
    return;
  } else {
    if (compChoice === "rock") {
      if (btnChoice === "paper") {
        result.innerText = `You chose ${btnChoice} while computer chose ${compChoice} so you won`;
        scores.innerText = `Player One: ${(playerOne += 1)} | Computer: ${compScore}`;
        return;
      }

      if (btnChoice === "scissors") {
        result.innerText = `You chose ${btnChoice} while computer chose ${compChoice} so you lost`;
        scores.innerText = `Player One: ${playerOne} | Computer: ${(compScore += 1)}`;
        return;
      }
    }

    if (compChoice === "paper") {
      if (btnChoice === "scissors") {
        result.innerText = `You chose ${btnChoice} while computer chose ${compChoice} so you won`;
        scores.innerText = `Player One: ${(playerOne += 1)} | Computer: ${compScore}`;
        return;
      }

      if (btnChoice === "rock") {
        result.innerText = `You chose ${btnChoice} while computer chose ${compChoice} so you lost`;
        scores.innerText = `Player One: ${playerOne} | Computer: ${(compScore += 1)}`;
        return;
      }
    }

    if (compChoice === "scissors") {
      if (btnChoice === "rock") {
        result.innerText = `You chose ${btnChoice} while computer chose ${compChoice} so you won`;
        scores.innerText = `Player One: ${(playerOne += 1)} | Computer: ${compScore}`;
        return;
      }

      if (btnChoice === "paper") {
        result.innerText = `You chose ${btnChoice} while computer chose ${compChoice} so you lost`;
        scores.innerText = `Player One: ${playerOne} | Computer: ${(compScore += 1)}`;
        return;
      }
    }
  }
}

//Function that determines who won the game and resets the scores
function gameOver() {
  if (playerOne === 5) {
    result.innerText = `Player One won. Let's start the game again`;
    playerOne = 0;
    compScore = 0;
    scores.innerText = `Player One: ${playerOne} | Computer: ${compScore}`;
    return;
  }

  if (compScore === 5) {
    result.innerText = `Computer won. Let's start the game again`;
    playerOne = 0;
    compScore = 0;
    scores.innerText = `Player One: ${playerOne} | Computer: ${compScore}`;
    return;
  }
}
