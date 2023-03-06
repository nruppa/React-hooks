import React,{useState} from 'react'
import { Button } from '@material-ui/core';
// import Todos from "./Todos";

function UseMemo() {
    // const [num, setNum] = useState(0);

    // const getChildComp = useMemo();
  
    // return(
    //   <div>
    //     <h1>{num}</h1>
    //     {getChildComp}
    //     <button onClick={() => setNum(num + 1)}> Addition </button>
    //   </div>
    // );
    const [count, setCount] = useState(0);
    // const [todos, setTodos] = useState([]);
  
    const increment = () => {
      setCount((c) => c + 1);
    };
    // const addTodo = () => {
    //   setTodos((t) => [...t, "New Todo"]);
    // };
  
    return (
      <>
        {/* <p todos={todos} addTodo={addTodo} /> */}
        <hr />
        <div>
          <br/>
          <Button onClick={increment}>Add-count</Button>
          <br/>
          Count: {count}
        </div>
      </>
    )


}

export default UseMemo


// //import { React, useState } from 'react';
// import ChildComponent from './ChildComponent'

// function App() {
//   const [num, setNum] = useState(0);

//   const handleUpdateNum = () => {
//     //some code
//   };

//   const getChildComp = useMemo(
//     () => <ChildComponent handleUpdateNum={handleUpdateNum} />,
//     [handleUpdateNum]
//   );

//   return(
//     <div>
//       <h1>{num}</h1>
//       {getChildComp}
//       <button onClick={() => setNum(num + 1)}> Addition </button>
//     </div>
//   );
// }// 