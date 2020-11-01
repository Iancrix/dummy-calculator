import React, { Component } from 'react'
import "./App.css";

import Square from "./shapes/Square/Square";
import Circle from "./shapes/Circle/Circle";
import Triangle from "./shapes/Triangle/Triangle";

class App extends Component {
  state = {
    shape: "square"
  }

  setSquare = (e) => {
    this.setState({
      shape: "square"
    })
  }

  setTriangle = (e) => {
    this.setState({
      shape: "triangle"
    })
  }

  setCircle = (e) => {
    this.setState({
      shape: "circle"
    })
  }

  getCurrentShape = () => {
    switch (this.state.shape) {
      case "square":
        return <Square />
      case "circle":
        return <Circle />
      case "triangle":
        return <Triangle />
      default:
        return <div>No shape supported</div>
    }
  }

  getBackgroundColor = () => {
    switch (this.state.shape) {
      case "square":
        return "#F4D03F"
      case "circle":
        return "#3498DB"
      case "triangle":
        return "#E74C3C"
      default:
        return "white"
    }
  }

  render() {
    return (
      <div className="app">
        <h1 className="app-title">Calculator for dummies</h1>
        <div className="shape-bundle">
          <ul className="shapes-list">
            <li id="square" onClick={this.setSquare} style={{ backgroundColor: "#F4D03F" }}><img height="25px" width="25px" src="square.png"></img></li>
            <li id="circle" onClick={this.setCircle} style={{ backgroundColor: "#3498DB" }}><img height="25px" width="25px" src="circle.png"></img></li>
            <li id="triangle" onClick={this.setTriangle} style={{ backgroundColor: "#E74C3C" }}><img height="25px" width="25px" src="triangle.png"></img></li>
          </ul>
          <div className="calculator" style={{ backgroundColor: this.getBackgroundColor() }}>
            {this.getCurrentShape()}
          </div>
        </div>
      </div>
    )
  }
}


export default App;
