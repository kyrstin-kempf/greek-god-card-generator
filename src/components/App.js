import React, { useEffect, useState } from 'react';
import NavBar from "./NavBar";
import AllGods from "./AllGods";
import NewGod from "./NewGod";
import OneGod from './OneGod';
import '../styles.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [gods, setGods] = useState([]);

  useEffect(() => {
    document.title = "Greek Gods Card Generator";
  }, []);

  const addGod = (god) => {
    setGods([...gods, god])
  }

  function deleteGod(id) {
    setGods(gods.filter(god => god.id !== id));
  }

  useEffect(() => {
    const fetchGods = async () => {
      const response = await fetch('http://localhost:3001/gods')
      const data = await response.json();
      setGods(data);
    }
  
    fetchGods();
  }, [gods]);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<AllGods gods={gods} />} />
        <Route path="/gods/new" element={<NewGod addGod={addGod} />} />
        <Route path="/gods/:id" element={<OneGod gods={gods} deleteGod={deleteGod} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
