import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import '../styles.css';

function NewGod({ handleAddGod }) {
  const [name, setName] = useState('');
  const [romanname, setRomanname] = useState('');
  const [power, setPower] = useState('');
  const [symbol, setSymbol] = useState('');
  const [image, setImage] = useState('');

  // let history = useNavigate();

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

    // function test() {
    //   return this.history.push('/gods')
    // }

    fetch(`http://localhost:3001/gods`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(godData)
    })
    .then((r) => r.json())
    .then((newGod) => handleAddGod(newGod))
    // .then(response => {
    //   let imageUrl = response.data.id +
    //   history.push(imageUrl)
    //  })
}

  return (
    <div> 
    <h1>So You Want To Add A God?</h1>
    <p className="form-space">Fill out the form to create a god card</p>
    <div>
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <label for="name">God/Goddess Name</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
          </li>
          <li>
            <label for="power">Power</label>
            <input type="text" id="power" value={power} onChange={(e) => setPower(e.target.value)}/>
          </li>
          <li>
            <label for="symbol">Symbol</label>
            <input type="text" id="symbol" value={symbol} onChange={(e) => setSymbol(e.target.value)}/>
          </li>
          <li>
            <label for="romanname">Roman Name</label>
            <input type="text" id="romanname" value={romanname} onChange={(e) => setRomanname(e.target.value)}/>
          </li>
          <li>
            <label for="image">Image Link</label>
            <input type="text" id="image" value={image} onChange={(e) => setImage(e.target.value)}/>
            <label className="link-faq">If no image is available, leave blank</label>
          </li>
        </ul>
        <input type="submit" onClick={handleAddGod}/>
      </form>
    </div>
    </div>
  );
}
export default NewGod;

