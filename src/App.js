import React from 'react';
import Form from './Form';
import { Routes, Route, Link } from "react-router-dom";
import Example1 from './Example1';
import A from './A';
import Useffect from './Useffect';
import Crud from './Crud';
import Integration1 from './Integration1';
import Forms from './Forms';
import Login from './Login';
import Test from './Test';
import Dates from './Dates';
import Date from './Date';
import Table from './Table';
import Check from './Check';

function App() {
  return (
    <div>
      <Link to="/Form">Form</Link><br />
      <Link to="/About">Example1</Link><br />
      <Link to="/A">Context</Link><br />
      <Link to="UseEffect">Effect</Link><br/>
      <Link to="Crud">Crud</Link>
      <Routes>
        <Route path="/Form" element={<Form />} >
        </Route>
        <Route path="/About" element={<Example1 />} ></Route>
        <Route path="/A" element={<A />} ></Route>
        <Route path="UseEffect" element={<Useffect />} ></Route>
        <Route path="Crud" element={<Crud />} ></Route>
      </Routes>
      {/* {<Crud />} */}
      {/* {<Integration1/>} */}
      {<Check/>}
      {/* {<Forms/>} */}
      {/* {<Login/>} */}
      {/* {<Test/>} */}
      {/* {<Dates/>} */}
      {/* {<Date/>} */}
      {/* {<Table/>} */}
    </div>
  );
}
export default App;
