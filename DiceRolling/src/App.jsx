import { useState } from "react";
import { FaDiceOne,FaDiceTwo,FaDiceThree,FaDiceFour,FaDiceFive,FaDiceSix } from "react-icons/fa6";
import './App.css'
function App() {

  const dice = [<FaDiceOne />,
  <FaDiceTwo/>,
  <FaDiceThree/>,
  <FaDiceFour/>,
  <FaDiceFive/>,
  <FaDiceSix/>];

  const [die,setDie] = useState(dice[0]);
  const [die1,setDie1] = useState(dice[0]);
  
  const roll=()=>{
    setDie(dice[Math.floor(Math.random() * dice.length)])
    setDie1(dice[Math.floor(Math.random() * dice.length)])

  }

  return (
    <>
    <div className="container">
      <h2>Dice Rolling</h2>
    <div className="main">
      <div>{die}</div>
      <div>{die1}</div>
    </div>
    <div>
      <button onClick={roll}>click</button>
      </div>
      </div>
    </>
  )
}

export default App
