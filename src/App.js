import './App.scss';
import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/navbar/navbar.js";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <NavBar/>
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
