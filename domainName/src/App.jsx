import { useState } from "react";

const extensions = [".com", ".net", ".org", ".co", ".in"];

const App=()=>{
  const [val,setVal] = useState("")

  const handle=(e)=>{
    setVal(e.target.value.toLowerCase().replace(/\s+/g, ""));

  }
  return(
    <>
    <h3>Find The Domain </h3>
    <input type="text" onChange={handle} />
    {val.length > 0 ? (
     
       extensions.map((item,idx)=>(
       <p key={idx}>{val}{item}</p>
      ))
     
    ):(
    <>
    <p style={{color:"gray"}}>Start Typing to see Suggestion...</p>
    </>
    )
    }
    </>
  )
}
export default App;