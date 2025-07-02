
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <App />
)


// import { useState } from "react";

// const App=()=>{
//   const [yourScore,setYourScore] = useState(0);
//   const [ComScore, setComScore] = useState(0);
//   const [result,setResult] = useState('')
//   const choice = ["rock","paper","scissor"];
//   const comChoice = choice[Math.floor(Math.random() * choice.length)];
//   console.log(comChoice);

//   const rock =()=>{
//     if(comChoice === "rock"){
//       setResult("Game has Tie!");
//     }else if(comChoice == "paper"){
//       setYourScore(yourScore+1);
//       setComScore("You win !");
//     }else if(comChoice == "scissor"){
//       setComScore(ComScore+1);
//       setResult("Com win !");
//     }
//   }

//    const paper =()=>{
//     if(comChoice === "rock"){
//       setYourScore(yourScore+1);
//       setResult("You win !");
//     }else if(comChoice == "paper"){
//       setResult("Game has Tie!");
//     }else if(comChoice == "scissor"){
//       setComScore(ComScore+1);
//       setResult("Com win !");
//     }
//   }

//    const scissor =()=>{
//     if(comChoice === "rock"){
//       setComScore(ComScore+1)
//       setResult("com win !");
//     }else if(comChoice == "paper"){
//       setYourScore(ComScore+1);
//       setComScore("com win !");
//     }else if(comChoice == "scissor"){
//       setResult("Game has Tie!");
//     }
//   }
//   return(
//     <>
//     <h1>Roack Paper Scissor</h1>
//     <button onClick={rock}>Rock</button>
//     <button onClick={paper}>Paper</button>
//     <button onClick={scissor}>Scissor</button>
//     <p>Your Score is:{yourScore}</p>
//     <p>Computer Score is:{ComScore}</p>
//     <p>result:{result}</p>
//     </>
//   )
// }
// export default App;