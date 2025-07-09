import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Addtask,del,complete,edit } from "./todoSlice";

const App = () => {
  const [val, setVal] = useState("");
  const data = useSelector((state) => state.todo.Task);
  const dispatch = useDispatch();
  console.log(data);
  const [updateVal,setUpdateVal] = useState(true);
  const [idVal,setIdVal] = useState("")

  const handle=()=>{
    dispatch(Addtask({work:val,id:Date.now(),status:"incomplete"}));
    setVal("")
  }

  const update=(id,work)=>{
    setVal(work);
    setUpdateVal(false);
    setIdVal(id) 
  }
  const sub=()=>{
    setUpdateVal(true);
    dispatch(edit({id:idVal,work:val}))
    setIdVal("")
  }

  const ans = data.map((key, idx) => {
    return(
      <tr>
        <td>{idx+1}</td>
        <td>
        {
          key.status == "incomplete" ? (<>
            {key.work}
          </>):(<>
            <span style={{color:"red",textDecoration:"line-through"}}>{key.work}</span>
          </>)
        }
          </td>
        <td><button onClick={()=>dispatch(del(key.id))}>Delete</button></td>
        <td><button onClick={()=>dispatch(complete(key.id))}>Complete</button></td>
        <td><button onClick={()=>update(key.id,key.work)}>Update</button></td>
      </tr>
    );
  });
  return (
    <>
      <h1>helo</h1>
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
      {
        updateVal ? (<>
          <button onClick={handle}>SAdd here</button>
        </>):(<>
        <button onClick={sub}>Add</button>
        </>)
      }
      <table>
       <thead>
         <tr>
          <th>#</th>
          <th>Actions</th>
          <th>delete</th>
          <th>Complete</th>
        </tr>
       </thead>
        <tbody>{ans}</tbody>
      </table>
    </>
  );
};
export default App;
