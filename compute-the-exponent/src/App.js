import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      base: "",
      exponent: "",
    };
  }
  trackValues = (event) => {
    const value = event.target.value;
    this.setState({  [event.target.name]: value, });
  };
  getExponent = () => {
    const {base,exponent} = this.state
    function getExponents(base, expo) {

      let nextNumber;

      if (nextNumber > 0) {
        getExponents(nextNumber);
      }
    }
    getExponents(Math.pow(base, exponent));
  };
  render() {
    const { base, exponent } = this.state;
    return (
      <div>
        <input
          placeholder="enter base"
          value={base}
          onChange={this.trackValues}
          name="base"
        />
        <input
          placeholder="enter exponent"
          value={exponent}
          onChange={this.trackValues}
          name="exponent"
        />
        <button onClick={() => this.getExponent()}>My exponent is?</button>
    
        
      </div>
    );
  }
}

export default App;
