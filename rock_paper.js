/*
The possible outcomes are:

Rock destroys scissors.
Scissors cut paper.
Paper covers rock.
If there's a tie, then the game ends in a draw.
Our code will break the game into four parts:

Get the user's choice.
Get the computer's choice.
Compare the two choices and determine a winner.
Start the program and display the results.*/

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock') {
    return userInput;
  } else if (userInput === 'scissors') {
    return userInput;
  } else if (userInput === 'paper') {
    return userInput;
  } else {
    console.log('Error!');
  }
};

function getComputerChoice() {
 switch(Math.floor(Math.random()*3)) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'scissors';
      break;
    case 2:
      return 'paper';
      break;
  };
}


function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'The game was a tie.';
  }
  
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer won.';
    } else {
    return 'You won.';
    }  
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
     return 'The computer won.';
    } else {
    return 'You won.';
    }  
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
     return 'The computer won.';
    } else {
    return 'You won.';
    }  
  }
};

function playGame() {
  const userChoice = getUserChoice('scissors');
  const computerChoice = getComputerChoice();
  console.log('You threw ' + userChoice);
  console.log('The computer threw ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();



