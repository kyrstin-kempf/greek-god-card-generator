import React, { useState } from "react";
import '../styles.css';
import { useNavigate } from "react-router-dom"

function NewGod({ addGod }) {
  const [name, setName] = useState('');
  const [power, setPower] = useState('');
  const [symbol, setSymbol] = useState('');
  const [romanname, setRomanname] = useState('');
  const [image, setImage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    console.log('clicked')
    
    const godData = {
      name: name,
      power: power,
      symbol: symbol,
      romanname: romanname,
      url: image === '' ? 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg' : image,
      liked: false,
    }

    fetch(`http://localhost:3001/gods`, {
      method: "POST",
      headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
      },
      body: JSON.stringify(godData)
    })
    .then(r => r.json())
    .then(data => {
      addGod(data);
    })
    .then(newGod => navigate('/'))
}

  return (
    <div> 
    <h1>So You Want To Add A God?</h1>
    <p className="form-space">Fill out the form to create a god card</p>
    <div>
      <form onSubmit={ handleSubmit }>
        <ul>
          <li>
            <label htmlFor="name">God/Goddess Name</label>
            <input type="text" id="name" value={ name } onChange={ (e) => setName(e.target.value) }/>
          </li>
          <li>
            <label htmlFor="power">Power</label>
            <input type="text" id="power" value={ power } onChange={ (e) => setPower(e.target.value) }/>
          </li>
          <li>
            <label htmlFor="symbol">Symbol</label>
            <input type="text" id="symbol" value={ symbol } onChange={ (e) => setSymbol(e.target.value) }/>
          </li>
          <li>
            <label htmlFor="romanname">Roman Name</label>
            <input type="text" id="romanname" value={ romanname } onChange={ (e) => setRomanname(e.target.value) }/>
          </li>
          <li>
            <label htmlFor="image">Image Link</label>
            <input type="text" id="image" value={ image } onChange={ (e) => setImage(e.target.value) }/>
            <label className="link-faq">If no image is available, leave blank</label>
          </li>
        </ul>
        <input type="submit" value="Add God"/>
      </form>
    </div>
    </div>
  );
}
export default NewGod;

