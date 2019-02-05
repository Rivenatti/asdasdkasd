import React, { Component } from 'react';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';


class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Home />
      </>
      
    );
  }
}

export default App;
