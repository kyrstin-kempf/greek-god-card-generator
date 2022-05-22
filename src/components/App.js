import React, { useEffect, useState } from 'react';
import NavBar from "./NavBar";
import AllGods from "./AllGods";
import NewGod from "./NewGod";
import Favorites from './Favorites';
import '../styles.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [gods, setGods] = useState([]);

  const addGod = god => {
    setGods([...gods, god])
  }

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
        <Route path="/gods" element={<AllGods gods={gods}/>} />
        <Route path="/gods/new" element={<NewGod addGod={addGod} />} />
        <Route path="/gods/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
