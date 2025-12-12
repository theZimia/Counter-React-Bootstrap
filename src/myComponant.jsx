import React, { useState } from "react"

function MyComponant(){
    const [name,setName] = useState("Guest");
    const [age,setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () =>{
        setName("Zimia");
    }

    const incrementAge = ()=>{
        setAge(age+1)
    }

    const toggleEmployed = ()=>{
        setIsEmployed(!isEmployed)
    }

    return(
    <div>
    <p>Name: {name}</p>
    <button onClick={updateName}>Set Name</button>

    <p>Age: {age}</p>
    <button onClick={incrementAge}>Increment</button>

     <p>Is Employed?: {isEmployed?"Yes": "No"}</p>
    <button onClick={toggleEmployed}>Toggle Employed</button>
    </div>
    );
}
export default MyComponant