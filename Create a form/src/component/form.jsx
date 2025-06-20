import { useState } from "react";
import "./form.css";
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  gender: "",
  language: [],
  file: "",
  url: "",
  options: "",
  about: ""
};
const Form1 = () => {
  const [show,setShow] = useState(initialState);

const val =(e)=>{
  let naam = e.target.name;
  let values = e.target.value;

  setShow((prev)=>({...prev,[naam]:values}))
 
  // console.log(show);
}

const showinp=()=>{
  console.log(show)
  setShow(initialState)
}
const reset=()=>{
  setShow(initialState)
   
}
  return (
    <>
      <div className="main">
        <h3>Form</h3>
        First Name:
        <input type="text" placeholder="Enter Name" name="firstName" value={show.firstName}  onChange={val} />
        Last Name:
        <input type="text" placeholder="Enter Name" name="lastName" value={show.lastName}  onChange={val}/>
        Enter Email:
        <input type="email" placeholder="Enter Name" name="email" value={show.email}  onChange={val}/>
        Contact:
        <input type="number" placeholder="Enter Name" name="contact" value={show.contact}  onChange={val}/>
        <label for="gender">Gender*</label>
        <div>
          <input type="radio" name="gender" value="male" id="male" onChange={val}/>
          Male
          <input type="radio" name="gender" value="female" id="female" onChange={val}/>
          Female
          <input type="radio" name="gender" value="other" id="other" onChange={val}/>
          other
        </div>
        <label for="language">Your best Subject</label>
        <div>
          <input type="checkbox" name="english" id="english" onChange={val}/>
          English
          <input type="checkbox" name="maths" id="maths" onChange={val}/>
          Math
          <input type="checkbox" name="physics" id="physics" onChange={val} />
          Physics
        </div>

        <label for="file">Upload Resume*</label>
        <input type="file" name="file" id="file" placeholder="Enter Uplaod resume" onChange={val}/>
        <label for="ur">Enter URL</label>
        <input type="url" name="url" id="url" onChange={val} />
        <select name="options" onChange={val}>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="javasript">JAVASCRIPT</option>
            <option value="node">NODE</option>
            <option value="react">REACT JS</option>
        </select>
        <label for="area">About*</label>
            <textarea  name="about" id="about" cols="30" rows="10" placeholder="About your self" onChange={val}></textarea>  
            <div>
                <button onClick={reset}>reset</button>
                <button onClick={showinp}>Submit</button>
            </div>
      </div>
    </>
  );
};
export default Form1;
