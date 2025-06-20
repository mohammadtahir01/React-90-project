import { useState } from "react";
import validator from "validator"

const App=()=>{
  const [valid,setValid] = useState("");

 const checkValue=(e)=>{
  let val = e.target.value;

  const isStrong = validator.isStrongPassword(val,{
    minLength:8,
    minLowercase:1,
    minUppercase:1,
    minSymbols:1,
    minNumbers:1,
  })

  if(isStrong){
    setValid("Strong Password");
  }else{
    setValid("Not Strong Password");
  }
 }

 let showMessage = null;

  if (valid !== "") {
    showMessage = (
      <span style={{ fontWeight: "bold", color: "red" }}>
        {valid}
      </span>
    );
  }
  return(
    <>
    enter password:<input type="text" onChange={checkValue}/>
    <p>{showMessage}</p>
    </>
  )
}
export default App;