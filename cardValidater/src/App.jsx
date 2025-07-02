import { useState } from "react"
import validator from 'validator'

function App() {
  const [val,setVal] = useState("");

  const handle=(e)=>{
    let values = e.target.value;

    if(validator.isCreditCard(values)){
      setVal("Valid Credit card !")
    }else{
      setVal("Enter Valid Card Number !")
    }
  }
  return (
    <>
     Enter Card No:<input type="text" onChange={handle}/>
     <p style={{ fontWeight:'bold',color:'red',}}>{val}</p>
    </>
  )
}

export default App
