import React, { Component } from 'react'

import Photo01 from "../img/bxl-github.svg";
import Photo02 from "../img/bxl-linkedin.svg";
/*******/ 
import '../assets/styles/App.css'

class App extends Component {

    render(){
        return (
            <>
              <div className='boxContent'>
                <div className='boxlink'>
                   <a href=".">Github</a>
                   <img src={Photo01} alt="Photo01" />
                 </div>
                  {/* ******** */}
                 <div className='boxlink'>
                   <a href=".">linkdir</a>
                   <img src={Photo02} alt="Photo02" />
                </div>
              </div>
            </>
        )
    }
}

export default App
