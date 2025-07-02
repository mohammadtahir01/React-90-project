import { useState } from "react"
import Quiz from "./quiz2.jsx"

const data=[
  {
    Question:"What is the capital of France?",
    options:["Paris","London","Berlin","Madrid"],
    answer:"Paris"
  },
  {
    Question:"What is the largest planet in our solar system?",
    options:["Earth","Mars","Jupiter","Saturn"],
    answer:"Jupiter"
  },
  {
    Question:"What is the chemical symbol for gold?",
    options:["Au","Ag","Fe","Hg"],
    answer:"Au"
  },
  {
    Question:"Who wrote 'To Kill a Mockingbird'?",
    options:["Harper Lee","Mark Twain","Ernest Hemingway","F. Scott Fitzgerald"],
    answer:"Harper Lee"
  },
  {
    Question:"What is the smallest country in the world?",
    options:["Vatican City","Monaco","San Marino","Liechtenstein"],
    answer:"Vatican City"
  }
]

const App=()=>{
  const [current,setCurrent] = useState(0);
  const [selectData,setSelectData] = useState(null);
  const [score,setScore] = useState(0);

  const hndl =(option)=>{
    setSelectData(option);
  }

  const btn=()=>{
    if(selectData === data[current].answer){
      alert("Right Answer!")
      setScore(score+1);
    }else{
      alert("Wrong Answer!")
    }

    setCurrent(current+1);
  }
  const newdata = data.length;
  return(
    <>
    {
      current < newdata ? (
        <>
        <Quiz Question={data[current].Question}
        options={data[current].options} handle={hndl}/>
        <button onClick={btn}>Next</button>
        </>
      ):(
        <>
        <p>Your Score is : {score}</p>
        </>
      )
    }
    
    </>
  )
}
export default App;