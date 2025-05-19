const buttons = document.querySelectorAll(".btn");
const displayChoices = document.getElementById("userComSelected");
const result = document.getElementById("result");
const userCount = document.querySelector("#userCount");
const compCount = document.querySelector("#compCount");
const reseBtn = document.querySelector("#resetBtn");

let ucount = parseInt(localStorage.getItem("userScore")) || 0;
let ccount = parseInt(localStorage.getItem("computerScore")) || 0;
userCount.textContent = `Your Points:${ucount}`;
compCount.textContent = `Computer Points:${ccount}`;
reseBtn.addEventListener("click", () => {
  localStorage.removeItem("userScore");
  localStorage.removeItem("computerScore");
  ucount = 0;
  ccount = 0;
  userCount.textContent = `Your Points: 0`;
  compCount.textContent = `Computer Points: 0`;
  result.textContent = "";
  displayChoices.textContent = "";
});
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const userChoice = button.textContent.trim();
    const choices = ["Rock", "Paper", "Scissor"];
    const randomIndex = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomIndex];

    displayChoices.textContent = `You selected ${userChoice}, Computer selected ${computerChoice}`;

    if (userChoice === computerChoice) {
      result.textContent = "It's a Tie 😁";
    } else if (
      (userChoice === "Rock" && computerChoice === "Scissor") ||
      (userChoice === "Paper" && computerChoice === "Rock") ||
      (userChoice === "Scissor" && computerChoice === "Paper")
    ) {
      result.textContent = "You Win! 🎉";
      ucount++;
      localStorage.setItem("userScore", ucount);
      userCount.textContent = `Your Points: ${ucount}`;
    } else {
      result.textContent = "You Lose! 😞";
      ccount++;
      localStorage.setItem("computerScore", ccount);
      compCount.textContent = `Computer Points: ${ccount}`;
    }

    localStorage.setItem("userScore", ucount);
    localStorage.setItem("computerScore", ccount);
  });
});
