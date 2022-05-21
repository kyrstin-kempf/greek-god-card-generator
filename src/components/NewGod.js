import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles.css';

function NewGod({ handleAddGod }) {
  const [name, setName] = useState('');
  const [romanname, setRomanname] = useState('');
  const [power, setPower] = useState('');
  const [symbol, setSymbol] = useState('');
  const [image, setImage] = useState('');

  let history = useNavigate();

  function handleSubmit(e) {
    console.log('clicked')
    e.preventDefault();

    const godData = {
      name: name,
      romanname: romanname,
      power: power,
      symbol: symbol,
      url: image === '' ? 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg' : image,
      liked: false,
    }

    function test() {
      return this.history.push('/gods')
    }

    fetch(`http://localhost:3001/gods`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(godData)
    })
    .then((r) => r.json())
    .then((newGod) => handleAddGod(newGod))
    .then(response => {
      let imageUrl = response.data.id +
      history.push(imageUrl)
     })
}

  return (
    <div className="formpage"> 
    <h1>So You Want To Add A God?</h1>
    <p>Fill out the form to create a god card</p>
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-25">
            <label>God/Goddess Name</label>
          </div>
          <div className="col-75">
            <input 
            type="text" 
            name="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label>Power</label>
          </div>
          <div className="col-75">
            <input 
            type="text" 
            name="power" 
            value={power}
            onChange={(e) => setPower(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label>Symbol</label>
          </div>
          <div className="col-75">
            <input 
            type="text" 
            name="symbol" 
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label>Roman Name</label>
          </div>
          <div className="col-75">
            <input 
            type="text" 
            name="romanname" 
            value={romanname}
            onChange={(e) => setRomanname(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label>Image Link</label>
          </div>
          <div className="col-75">
            <input 
            type="text" 
            name="url" 
            value={image}
            onChange={(e) => setImage(e.target.value)}
            />
          <label className="link-faq">If no image is available, leave blank</label>
          </div>
        </div>
        <div>
          <input type="submit" value="Submit" onClick={handleAddGod}/>
        </div>
      </form>
    </div>
    </div>
  );
}
export default NewGod;
