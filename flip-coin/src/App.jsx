import { useState } from "react";
// import CoinFlip from "./flip";



const App = () => {
  const [coin,setCoin] = useState('');
  const [count,setCount] = useState(0);
  const [tail,setTail] = useState(0);

  const flip=()=>{
    const coins =['Head','Tail'];
    const result = Math.floor(Math.random()*2);
    let selected = (coins[result]);
    setCoin(selected);
    

    if(selected === 'Head'){
      setCount(count + 2);
      console.log('You got Head',count);
    } else if(selected === 'Tail'){
      setTail(tail + 1);
      console.log('You got Tail',tail);
    }
  }

  return(
    <>
    <h1>flip coin game</h1>
    <button onClick={flip}>click</button>
    Your result :{coin}
    <p>Head count: {count}</p>
    <p>Tail count: {tail}</p>
    <p>Click the button to flip the coin</p>
    <p>Head will increase by 2 and Tail will increase by 1</p>
    <p>Head count starts at 2 and Tail count starts at 1</p>
    </>
  )
}
export default App; 