import { useState } from "react";

function Text(){

const[number, setNumber] = useState(0)
console.log(number);

function clickHandle(){
    setNumber (number+1);
}


    return(
        <>
        <h1>Du har klikket på knappen {number} antal gange</h1>
        <button onClick={() => clickHandle()} >Click me</button>
        </>
    )
}

export default Text