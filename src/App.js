import React, { Component } from 'react';
import Header from './Header.js';
import HeaderMobile from './HeaderMobile.js';
import UserInput from './UserInput.js';
import BentoDisplay from './BentoDisplay.js';
import './App.css';



class App extends Component {
  render() {
    return(
      <div className="wrapper">
        {/* header component */}
        <Header />

        <HeaderMobile />

        <main>
          {/* inputForm component */}
          {/* input text component for chef name */}
          {/* input text component for bento title */}
          {/* input radio component for ingredient 1 */}
          {/* input radio component for ingredient 2 */}
          {/* input radio component for ingredient 3 */}
          {/* input radio component for ingredient 4 */}
          {/* input submit button */}
          <UserInput />


          {/* display component */}
          <BentoDisplay />
        </main>
      </div>
    )
  }
}
export default App;