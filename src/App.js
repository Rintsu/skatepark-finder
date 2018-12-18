import React, { Component } from 'react';
import logo from './logo/logo.png';
import './index.css';
import Dropdown from './Dropdown';
import AddLocationButton from './AddLocationButton';

class App extends Component {
	
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="ourlogo" />
					<p>Get the information by choosing a skatepark from the dropdown menu</p>
        </header>
				<Dropdown />
				<AddLocationButton />
      </div>
    );
  }
}

export default App;
