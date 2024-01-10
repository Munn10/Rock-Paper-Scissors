const choices = document.querySelectorAll(".choice");
const player1 = document.querySelector("#Player-marks");
const comp = document.querySelector("#comp-marks");
const msg = document.querySelector(".msg");
const msgSection = document.querySelector(".msg-section");
let palyer1Marks = 0;
let computerMarks = 0;

const genCompChoice = () => {
  let options = ["rock", "paper", "scissor"];
  let index = Math.floor(Math.random() * 3);
  console.log("Computer choice is ", options[index]);
  return options[index];
};

const drawGame = () => {
  msg.innerText = "Game Draw! Please play again";
  msgSection.style.backgroundColor = "#233d4d";
};

const playGame = (userChoice) => {
  //   console.log(userChoice);
  let compChoice = genCompChoice();
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

const showWinner = (userWin, compChoice, userChoice) => {
  if (userWin) {
    // console.log("You Win!");
    palyer1Marks++;
    msg.innerText = `You Win 💐. Your ${userChoice} beats ${compChoice}`;
    msgSection.style.backgroundColor = "Green";
    player1.innerText = palyer1Marks;
  } else {
    // console.log("You lose");
    computerMarks++;
    msg.innerText = `You lose. ${compChoice} beats ${userChoice}`;
    msgSection.style.backgroundColor = "red";
    comp.innerText = computerMarks;
  }
};

choices.forEach((choice) => {
  // user choice
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
