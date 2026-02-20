let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const playgame = (userChoice) => {
    console.log("user choice =", userChoice);

    const compChoice = genCompChoice();
    console.log("comp choice =", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;

        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin,userChoice,compChoice);
    }
};

const drawGame = () => {

    msg.innerText = "Game was Draw. Play again!";
      msg.style.backgroundColor="#081b31";
};

const showWinner = (userWin,userChoice,compChoice) => {
    if (userWin) {
        userscore++;
        userScorePara.innerText=userscore;
        msg.innerText =`You win!. ${userChoice} beats comps ${compChoice}`;
        msg.style.backgroundColor="green";
    } else {
        compscore++;
        compScorePara.innerText=compscore;
        msg.innerText =`You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
});
