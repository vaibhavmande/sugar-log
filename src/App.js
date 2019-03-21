import React, { Component } from 'react'
import logData from './dataSource.js'
import Header from './Header'
import './App.css';
// import ListContainer from './ListContainer'

class App extends Component {
  state = {
    'dbHandle': null
  }

  componentDidMount() {
    // check if dbHandle set, if not switch to settings and ask user to select the dbHandle
    // search localStorage for dbHandle before switching to Settings menu
  }

  render() {
    return (
      <React.Fragment>
        <Header selected="log" classes={{root:'root'}}/>
        {/*<ListContainer data={logData}/>*/}
      </React.Fragment>
    );
  }
}

export default App;
