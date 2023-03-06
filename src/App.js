import React from 'react';
import Form from './Form';
import { Routes, Route, Link } from "react-router-dom";
// import { Button } from '@material-ui/core';
import Example1 from './Example1';
import A from './A';
import Useffect from './Useffect';
import Crud from './Crud';
// import Integration1 from './Integration1';
// import Forms from './Forms';
// import Login from './Login';
// import Test from './Test';
// import Dates from './Dates';
// import Date from './Date';
import Table from './Table';
import Check from './Check';
// import UseMemo from './UseMemo';
import Increment from './Increment';
import Table1 from './Table1';
import { useNavigate } from 'react-router';
import Patch from './Patch';
import Patchtable from './Patch-table';
import Map from './Map';


function App() {
  const nav = useNavigate()
  const click = () => {
    nav("Table1")
  }
  return (
    <div>
      <Link to="/Form">Form</Link>------
      <Link to="/About">Example1</Link>------
      <Link to="/A">Context</Link>------
      <Link to="UseEffect">Effect</Link>------
      <Link to="Crud">Crud</Link>------
      <Link to="Increment">Increment</Link>------
      <Link to="Check">Check</Link>------
      <Link to="Table">Table</Link>------
      <Link to="Table1">Table1</Link>------
      <Link to="Patch">patch</Link>------
      <Link to="Map">Map</Link>------

      <br />
      <br />
      <br />
      <br />
      <hr />
      <br />
      <br />
      <Routes>
        <Route path="/Form" element={<Form />} >
        </Route>
        <Route path="/About" element={<Example1 />}></Route>
        <Route path="/A" element={<A />} ></Route>
        <Route path="UseEffect" element={<Useffect />} ></Route>
        <Route path="Crud" element={<Crud />} ></Route>
        <Route path="Increment" element={<Increment />} ></Route>
        <Route path="Check" element={<Check />} ></Route>
        <Route path="Table" element={<Table />} ></Route>
        <Route path="Patch" element={<Patch />} ></Route>
        <Route path="Table1" element={<Table1 />} ></Route>
        <Route path="Patchtable" element={<Patchtable />} ></Route>
        <Route path="Map" element={<Map />} ></Route>
      </Routes>
      {/* {<Crud />} */}
      {/* {<Integration1/>} */}
      {/* {<Check/>} */}
      {/* {<Forms/>} */}
      {/* {<Login/>} */}
      {/* {<Test/>} */}
      {/* {<Dates/>} */}
      {/* {<Date/>} */}
      {/* {<Table/>} */}
      {/* {<UseMemo />} */}

      {/* <button onClick={click}>Table1</button> */}

    </div>
  );
}
export default App;
