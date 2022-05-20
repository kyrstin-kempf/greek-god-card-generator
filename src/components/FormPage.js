import React from "react";
import '../styles.css';

function Form() {

  return (
    <div className="formpage"> 
    <h1>So You Want To Add A God?</h1>
    <p>Fill out the form to create a god card</p>
    <div className="container">
      <form>
        <div class="row">
          <div class="col-25">
            <label>God/Goddess Name</label>
          </div>
          <div class="col-75">
            <input type="text" name="name" />
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label>Power</label>
          </div>
          <div class="col-75">
            <input type="text" name="power" />
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label>Symbol</label>
          </div>
          <div class="col-75">
            <input type="text" name="symbol" />
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label>Roman Name</label>
          </div>
          <div class="col-75">
            <input type="text" name="romanname" />
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label>Image Link</label>
          </div>
          <div class="col-75">
            <input type="text" name="url" />
          </div>
        </div>
        <div>
          <input type="submit" value="Submit"/>
        </div>
      </form>
    </div>
    </div>
  );
}
export default Form;
