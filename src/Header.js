import React, {Component} from 'react'
import {Menu, Icon} from 'antd'
import 'antd/dist/antd.css';

export default class Header extends Component {
  state = {
    selected: this.props.selected
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
          <Icon type="table"/>LOG
        </Menu.Item>
        <Menu.Item key="">
          <Icon type="line-chart"/>GRAPH
        </Menu.Item>
        <Menu.Item key="settings">
          <Icon type="setting"/>SETTINGS
        </Menu.Item>
        <Menu.Item key="about">
          <Icon type="github" />
        </Menu.Item>
      </Menu>
    );
  }
}