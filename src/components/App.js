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
    const dGod = gods.filter(god => god.id.toString() !== id)
    // console.log(dGod);
    setGods(dGod);
    // setGods(gods.filter(god => god.id !== id));
  }

  const sortByAlphabet = () => {
    setGods([...gods].sort(function(a, b){
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if(nameA < nameB) {
        return -1;
      }
      if(nameA > nameB) {
        return 1;
      }
      return 0
    }));
  }

  // console.log(sortByAlphabet())

  useEffect(() => {
    const fetchGods = async () => {
      const response = await fetch('http://localhost:3001/gods')
      const data = await response.json();
      setGods(data);
    }
  
    fetchGods();
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<AllGods gods={gods} sortByAlphabet={sortByAlphabet} />} />
        <Route path="/gods/new" element={<NewGod addGod={addGod} />} />
        <Route path="/gods/:id" element={<OneGod gods={gods} deleteGod={deleteGod} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// sort alphabetical