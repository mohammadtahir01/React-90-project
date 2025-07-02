
const Quiz=({Question,options,handle})=>{
  return(
    <>
    <h3>{Question}</h3>
    <ul>
      {
        options.map((item)=>(
          <li onClick={()=>handle(item)}>{item}</li>
        ))
      }
    </ul>
    </>
  )
}
export default Quiz;