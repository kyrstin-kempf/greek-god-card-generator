import React, { useEffect, useState } from 'react';
import NavBar from "./NavBar";
import Home from './Home';
import AllGods from "./AllGods";
import NewGod from "./NewGod";
import '../styles.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [gods, setGods] = useState([]);

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
        <Route path="/" element={<Home />} />
        <Route path="/gods" element={<AllGods gods={gods}/>} />
        <Route path="/gods/new" element={<NewGod />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
