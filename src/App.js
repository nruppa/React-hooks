import React from 'react';
import Form from './Form';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Example1 from './Example1';
import A from './A';
import Useffect from './Useffect';

function App() {
  return (
    <div>
      <Link to="Form">Form</Link><br />
      <Link to="About">Formikvalidations</Link><br />
      <Link to="A">Context</Link><br />
      <Link to="effect">Effect</Link><br />
      <Routes>
        <Route path="Form" element={<Form />}>
        </Route>
        <Route path="About" element={<Example1 />} />
        <Route path="A" element={<A />} />
        <Route path="effect" element={<Useffect />} />
      </Routes>
    </div>
  );
}
export default App;
