import { useState } from "react";

function Greeting(){
const [name, setName]= useState('');
console.log(name);

const nameHandle = (e) => {
    setName(e.target.value); // Update state with the input value
  };

    return(
        <>
        <h1>Send en hilsen til {name}</h1>
        <input  onChange={nameHandle} type="text"  placeholder="write your name" value={name} />
        </>
    )
}

export default Greeting