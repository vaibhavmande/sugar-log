import React, { Component } from 'react'
import TabBar from './TabBar'
import './App.css';

class App extends Component {
  render() {
    return (
      <TabBar selected={0}/>
    );
  }
}

export default App;
