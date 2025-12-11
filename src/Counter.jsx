import React,{ useState } from "react"

function Counter(){
    const [increment, setIncrement]= useState(0);

    const incrementNumber = () => {
        setIncrement(increment+1)
    }

    const decrementNumber = () => {
        setIncrement(increment-1)
    }

    const resetNumber = () => {
        setIncrement(0)
    }

    return(
        <div className="number-container">
            <p className="number-display">{increment}</p>
            <button onClick={incrementNumber} type="button" class="btn btn-success">Increment</button>
            <button onClick={decrementNumber} type="button" class="btn btn-danger">Decrement</button>
            <button onClick={resetNumber} type="button" class="btn btn-primary">Reset</button>
        </div>
    )

}

export default Counter