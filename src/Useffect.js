import React, { useState, useEffect } from 'react'

export default function Useffect() {


    const [count, setcount] = useState(0);

    useEffect(() => console.log("count"), [count])
    // useEffect(() => {
    //   const a=()=>
    //   {
    //     setcount((count)=>count + 1)
    //   }
    // }, [count])
    return (
        <div>
            <center>
                <button onClick={() => setcount(count + 1)}>click me</button>
                click{count}
            </center>
        </div>
    )


}


