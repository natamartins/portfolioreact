import React, { Component } from "react";
import Button from "./components/Button";
import Profile from "./img/myphoto.jfif";
// 
import './assets/styles/App.css'
// 
class App extends Component{
  render() {
    
    return (
      <>
        <div className="box-perfil">
          <h1>Nathn Martins</h1>
          <ul>
            <li className="perfil-img">
            <img src={Profile} alt="Profile" />
            </li>
          </ul>
          <Button />
        </div>
      </> 
     );
  }
  
}

export default App;
