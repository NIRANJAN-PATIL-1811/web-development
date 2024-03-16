
let userScore = 0;
let computerScore = 0;
let tieScore = 0;


function ball(){
  computer = Math.round(Math.random() * 2);

  if (computer == 2){
    userScore = userScore + 1;
    document.querySelector('#user-score').innerText = `User : ${userScore}`;
    document.querySelector('#score-line').innerText = 'User Won!';
  }
  else if (computer == 1){
    computerScore = computerScore + 1;
    document.querySelector('#computer-score').innerText = `Computer : ${computerScore}`
    document.querySelector('#score-line').innerText = 'Computer Won!';
  }
  else{
    tieScore = tieScore + 1;
    document.querySelector('#tie-score').innerText = `Tie : ${tieScore}`
    document.querySelector('#score-line').innerText = "The match is tie!";
  }
}


function bat(){
  computer = Math.round(Math.random() * 2);

  if (computer == 0){
    userScore = userScore + 1;
    document.querySelector('#user-score').innerText = `User : ${userScore}`;
    document.querySelector('#score-line').innerText = 'User Won!';
  }
  else if (computer == 2){
    computerScore = computerScore + 1;
    document.querySelector('#computer-score').innerText = `Computer : ${computerScore}`
    document.querySelector('#score-line').innerText = 'Computer Won!';
  }
  else{
    tieScore = tieScore + 1;
    document.querySelector('#tie-score').innerText = `Tie : ${tieScore}`
    document.querySelector('#score-line').innerText = "The match is tie!";
  }
}


function stumps(){
  computer = Math.round(Math.random() * 2);

  if (computer == 1){
    userScore = userScore + 1;
    document.querySelector('#user-score').innerText = `User : ${userScore}`;
    document.querySelector('#score-line').innerText = 'User Won!';
  }
  else if (computer == 0){
    computerScore = computerScore + 1;
    document.querySelector('#computer-score').innerText = `Computer : ${computerScore}`
    document.querySelector('#score-line').innerText = 'Computer Won!';
  }
  else{
    tieScore = tieScore + 1;
    document.querySelector('#tie-score').innerText = `Tie : ${tieScore}`
    document.querySelector('#score-line').innerText = "The match is tie!";
  }
}