import React, { Component } from 'react'
import {Menu, Icon} from 'antd'
import 'antd/dist/antd.css';
import './App.css';

class App extends Component {
  state = {
    selected: 'log'
  }

  handleMenuClick = (event) => {
    this.setState({selected: event.key})
  }

  render() {
    return (
      <Menu
        onClick={this.handleMenuClick}
        selectedKeys={[this.state.selected]}
        mode="horizontal"
        theme="dark"
      >
        <Menu.Item key="log">
          <Icon type="mail"/>LOG
        </Menu.Item>
        <Menu.Item key="">
          <Icon type="mail"/>GRAPH
        </Menu.Item>
        <Menu.Item key="settings">
          <Icon type="mail"/>SETTINGS
        </Menu.Item>
        <Menu.Item key="about">
          <a href="https://www.github.com/vbrmnd" target="_blank" rel="noopener noreferrer">PROFILE</a>
        </Menu.Item>
      </Menu>
    );
  }
}

export default App;
