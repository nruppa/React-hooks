import React from 'react'
import C from './C'
import { useContext } from 'react'



export   const UseContext = React.createContext()

export default function A() {


  return (
    <div>
        <center>A</center>
        <UseContext.Provider value={"hjgfd"}>
            <C/>
        </UseContext.Provider>
        
        </div>
  )
}
