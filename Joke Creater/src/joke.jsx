import { useState } from "react";
import axios from "axios";


const Joke=()=>{
    const [jokee,setJokee] = useState("");

    const api=async()=>{
    let url = "https://v2.jokeapi.dev/joke/Programming?type=single";
    let res = await axios.get(url);
    setJokee(res.data.joke)

    }
    return(
        <>
        <button onClick={api}>click to generate joke</button>
        <p>{jokee}</p>
        </>
    )
}
export default Joke;