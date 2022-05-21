import React from 'react';
import NavBar from "./NavBar";
import AllGods from "./AllGods";
import NewGod from "./NewGod";
import OneGod from './OneGod';
import '../styles.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<AllGods />} />
        <Route path="new" element={<NewGod />} />
        <Route path=":id" element={<OneGod />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
