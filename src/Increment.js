
import React, { useState, useEffect } from 'react'
import { Button } from '@material-ui/core';


function Increment() {
    const [count, setCount] = useState(0);
    // const [count1, setCount1] = useState(0);
    const increment = () => {
        setCount((c) => c + 1);
    };
    const decrement = () => {
        setCount((c) => c - 1);
    };
    const [calculation, setCalculation] = useState(0);
    useEffect(() => {
        setCalculation(() => count * 2);
    }, [count]); // <- add the count variable here
    return (
        <>
            <div>
                <br />
                <Button onClick={increment}>Add-count</Button>
                <Button onClick={decrement}>sub-count</Button>
                <br />
                Count: {count}
                <center>
                    <h1>
                        <Button onClick={() => setCount((c) => c + 1)}>+</Button>
                        <p>Calculation: {calculation}</p>
                    </h1>
                </center>
            </div>
        </>
    )
}
export default Increment