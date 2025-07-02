import React, { useState } from 'react';
const App=()=>{
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [result, setResult] = useState('');
  const choices = ['Rock', 'Paper', 'Scissor'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  console.log('Computer choice:', computerChoice);

  const rock=()=>{
    if(computerChoice === 'Rock'){
      setResult('It\'s a tie!');
    } else if(computerChoice === 'Paper'){
      setComputerScore(computerScore + 1);
      setResult('You lose! Paper beats Rock');
    } else {
      setUserScore(userScore + 1);
      setResult('You win! Rock beats Scissor');
    }
  }

  const paper=()=>{
    if(computerChoice === 'Rock'){
      setUserScore(userScore + 1);
      setResult('You win! Paper beats Rock');
    } else if(computerChoice === 'Paper'){
      setResult('It\'s a tie!');
    } else {
      setComputerScore(computerScore + 1);
      setResult('You lose! Scissor beats Paper');
    }
  }
  const scissor=()=>{
    if(computerChoice === 'Rock'){
      setComputerScore(computerScore + 1);
      setResult('You lose! Rock beats Scissor');
    } else if(computerChoice === 'Paper'){
      setUserScore(userScore + 1);
      setResult('You win! Scissor beats Paper');
    } else {
      setResult('It\'s a tie!');
    }
  }

  return(
    <>
    <h1>Rock Paper Scissor Game</h1>
    <button onClick={rock}>Rock</button>
    <button onClick={paper}>Paper</button>
    <button onClick={scissor}>Scissor</button>
    <p>Your Score is:{userScore}</p>
    <p>Computer Score is:{computerScore}</p>
    <p>Result:{result}</p>
    <p>Click on the button to play the game</p>
    </>
  )
}
export default App;