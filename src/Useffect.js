import React, { useState, useEffect } from 'react'

export default function Useffect() {


    const [count, setcount] = useState(0);
    const [count1, setCount1] = useState(0);

    useEffect(() => console.log("count"), [count])
    // useEffect(() => {
    //   const a=()=>
    //   {
    //     setcount((count)=>count + 1)
    //   }
    // }, [count])

    

    useEffect(() => {
        setTimeout(() => {
          setCount1((count1) => count1 + 1);
        }, 1000);
      });

    return (
        <div>
            <center>
                <button onClick={() => setcount(count + 1)}>click me</button>
                click{count}
            </center>
            <br></br>
            <center>
            <h1>I have rendered seconds {count1} times!</h1>;
            </center>
        </div>
    )
}


