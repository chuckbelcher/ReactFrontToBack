import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <Contact name="Phil Bunton"
          email="pbutton@buttons.com"
          phone="444-555-6666"
        />
        <Contact name="Penny Bikel"
          email="penny@sunshine.com"
          phone="444-777-2222"
        />
      </div>
    );
  }
}

export default App;
