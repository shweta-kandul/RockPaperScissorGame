const buttons = document.querySelectorAll(".btn");
const displayChoices = document.getElementById("userComSelected");
const result = document.getElementById("result");
const userCount = document.querySelector("#userCount");
const compCount = document.querySelector("#compCount");
let ucount = 0;
let ccount = 0;
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const userChoice = button.textContent.trim(); // Ensure no extra space
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
      userCount.textContent = `Your Points: ${ucount}`;
    } else {
      result.textContent = "You Lose! 😞";
      ccount++;
      compCount.textContent = `Computer Points: ${ccount}`;
    }
  });
});
