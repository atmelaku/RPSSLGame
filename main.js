// DOM
var High_score = document.getElementById("High_score");
var finalScoreMessage = document.getElementById("finalScoreMessage");
var btn = document.getElementById("btn");
var userScore_span = document.getElementById("user-score");
var compScore_span = document.getElementById("comp-score");
var gameResult_p = document.querySelector(".game_result");
var spock_div = document.getElementById("k");
var scissor_div = document.getElementById("s");
var lizard_div = document.getElementById("l");
var rock_div = document.getElementById("r");
var paper_div = document.getElementById("p");
// variables
var userScore = 0;
var compScore = 0;

// get the computer choices
const  getComputerChoice = () => {

  var choices = ["k", "s", "l", "r", "p"];
  var index = Math.floor(Math.random()*5);
  return choices[index];
  console.log(choices[index]);
}
// game function
const game = (userChoice) => {
// check if the user or the computer score is 10 or more than then stopped the event listner
  if  (userScore >= 10 || compScore >= 10) {
    if (userScore >= 10) {
      finalScoreMessage.innerText = "User player reaches 10 first. User wins";
    }
    else {
      finalScoreMessage.innerText =   "Computer  player reaches 10 first. Computer wins" ;
    }

    High_score.style.visibility = 'visible';


    scissor_div.removeEventListener("click", f1);

    spock_div.removeEventListener("click",  f2);

    lizard_div.removeEventListener("click",  f3);

    rock_div.removeEventListener("click",   f4);

    paper_div.removeEventListener("click",  f5);
};


  var computerChoice = getComputerChoice();
  console.log(userChoice + computerChoice);
  switch(userChoice + computerChoice){
    // winner case
    case "sp":
    case "sl":
    case "pr":
    case "pk":
    case "rl":
    case "rs":
    case "lk":
    case "lp":
    case "ks":
    case "kr":


      win(userChoice, computerChoice);
      break;
      //losser case
    case "ps":
    case "pl":
    case "ls":
    case "lr":
    case "kp":
    case "kl":
    case "sr":
    case "sk":
    case "rp":
    case "rk":
      lose(userChoice, computerChoice);
      break;
      //draw case
    case "ss":
    case "pp":
    case "rr":
    case "ll":
    case "kk":
      draw();
      break;

  }

}
//win function usind if clause
const  win = (userChoice, computerChoice) => {
  userScore++;
  userScore_span.innerHTML = userScore;

   if(userChoice == "s" && computerChoice == "p"){
    gameResult_p.innerText = "Scissor destroys Paper! You Win!";
  }
  if(userChoice == "s" && computerChoice == "l"){
    gameResult_p.innerText = "Scissor decapitates Lizard! You Win!";
  }

  if(userChoice == "p" && computerChoice == "r"){
    gameResult_p.innerText = "Paper covers Rock! You Win!";
  }
  if(userChoice == "p" && computerChoice == "k"){
    gameResult_p.innerText = "Paper disproves spock! You Win!";
  }
  if(userChoice == "r" && computerChoice == "l"){
    gameResult_p.innerText = "Rock crushes Lizard! You Win!";
  }
  if(userChoice == "r" && computerChoice == "s"){
    gameResult_p.innerText = "Rock crushes Scissor! You Win!";
  }
  if(userChoice == "l" && computerChoice == "k"){
    gameResult_p.innerText = "Lizard Poisnes Spock! You Win!";
  }
  if(userChoice == "l" && computerChoice == "p"){
    gameResult_p.innerText = "Lizard Eats Paper! You Win!";
  }
  if(userChoice == "k" && computerChoice == "s"){
    gameResult_p.innerText = "Spock smashes Scissor! You Win!";
  }
  if(userChoice == "k" && computerChoice == "r"){
    gameResult_p.innerText = "Spock vaporizes Rock! You Win!";
  }
}

// lose function using if clause
function lose(userChoice, computerChoice){
  console.log("hello");
  compScore++;
  compScore_span.innerHTML = compScore;
  if(userChoice == "p" && computerChoice == "s"){
    gameResult_p.innerText = "Scissor destroys Paper! You Lose!";
  }
  if(userChoice == "p" && computerChoice == "l"){
    gameResult_p.innerText = "Lizard eats Paper! You Lose!";
  }
  if(userChoice == "l" && computerChoice == "s"){
    gameResult_p.innerText = "Scissor decapitates Lizard! You Lose!";

  }

  if(userChoice == "l" && computerChoice == "r"){
    gameResult_p.innerText = "Rock crushes Lizard! You Lose!";
  }

  if(userChoice == "k" && computerChoice == "p"){
    gameResult_p.innerText = "paper disproves Spock! You Lose!";
  }
  if(userChoice == "k" && computerChoice == "l"){
    gameResult_p.innerText = "Lizard Poisnes Spock! You Lose!";
  }
  if(userChoice == "s" && computerChoice == "r"){
    gameResult_p.innerText = "Rock crushes Scissor! You Lose!";
  }
  if(userChoice == "s" && computerChoice == "k"){
    gameResult_p.innerText = "Spock smashes Scissor! You Lose!";
  }
  if(userChoice == "r" && computerChoice == "p"){
    gameResult_p.innerText = "Paper covers Rock! You Lose!";
  }
  if(userChoice == "r" && computerChoice == "k"){
    gameResult_p.innerText = "Spock vaporizes Rock! You Lose!";
  }
}

//draw funcition
const  draw = () => {
  gameResult_p.innerText = "This is a Draw! Play again!";
}
// add a click event listener
var f1 = ()=>{ game("s"); }

var f2 = ()=>{ game("k"); }

var f3 = ()=>{ game("l"); }

var f4 = ()=>{ game("r"); }

var f5 = ()=>{ game("p"); }

scissor_div.addEventListener("click", f1);

spock_div.addEventListener("click",  f2);

lizard_div.addEventListener("click",  f3);

rock_div.addEventListener("click",   f4);

paper_div.addEventListener("click",  f5);
