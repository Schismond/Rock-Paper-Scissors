
const options = ["rock", "paper", "scissors"];
let  pcScore = 0
let  playerScore = 0

//******************** Gets player choice (doesn't accept wrong choice) ************************************/

function getPlayerChoice() {
  let playerChoice = prompt("Do you choose rock, paper or scissors?").toLowerCase();

  while (true) {
    if (playerChoice === "paper" || playerChoice === "scissors" || playerChoice === "rock") {
      break;
    }
    alert("Please pick from rock, paper, or scissors");
    playerChoice = prompt("Do you choose rock, paper or scissors?").toLowerCase();
  }
  return playerChoice;
}

//******************** Gets pc choice ************************************/

function getPcChoice(table) {
    let pcChoice = table[Math.floor(Math.random() * table.length)];
  return pcChoice;
}
function playRound(playerChoice, pcChoice) {
  if (playerChoice == pcChoice ){ 
    console.log("you both choosen",playerChoice)
    console.log("Tie")
 }
  else if (playerChoice == "rock" && pcChoice == "scissors"){
    console.log("you choose",playerChoice,"the pc choose",pcChoice)
    console.log("You win !") 
    playerScore++ 
    console.log('your score is:',playerScore, '| pc score is :',pcScore)

    }
  else if (playerChoice == "rock" && pcChoice == "paper"){
    console.log("you choose",playerChoice,"the pc choose",pcChoice)
    console.log("You lose ")
    pcScore++
    console.log('your score is:',playerScore, '| pc score is :',pcScore)
    }
  else if (playerChoice == "paper" && pcChoice == "rock"){
    console.log("you choose",playerChoice,"the pc choose",pcChoice)
    console.log("You win !") 
    playerScore++ 
    console.log('your score is:',playerScore, '| pc score is :',pcScore)
    }
  else if (playerChoice == "paper" && pcChoice == "scissors"){
    console.log("you choose",playerChoice,"the pc choose",pcChoice)
    console.log("You lose ") 
    pcScore++
    console.log('your score is:',playerScore, '| pc score is :',pcScore)
    }
  else if (playerChoice == "scissors" && pcChoice == "rock"){
    console.log("you choose",playerChoice,"the pc choose",pcChoice)
    console.log("You lose ") 
    pcScore++ 
    console.log('your score is:',playerScore, '| pc score is :',pcScore)
  }
  else if (playerChoice == "scissors" && pcChoice == "paper"){ 
    console.log("you choose",playerChoice,"the pc choose",pcChoice)
    console.log("You win !") 
    playerScore++ 
    console.log('your score is:',playerScore, '| pc score is :',pcScore)
  }
}

function game(){
  pcScore = 0
  playerScore = 0

while(playerScore<5 && pcScore <5) {
  const playerChoice = getPlayerChoice();
  const pcChoice = getPcChoice(options);
  playRound(playerChoice , pcChoice)
}
if(playerScore > pcScore){
  console.log('You win the game')
}
else if(playerScore < pcScore){
  console.log('You lose the game')
}
else if(playerScore === pcScore){
  console.log('Draw')
}
}

game()
