import React, {Component} from 'react'
import { Card, Col, Row } from "antd";
import './ListContainer.css'

export default class ListContainer extends Component {
  state = {
      data: this.props.data
  }

  render() {
    return (
      <div className="list-parent">
        <Row className="list-row">
          {this.state.data.map(row => {
            return (
              <Col>
                <Card style={{ "text-align": "center" }} title={row.date}>
                  {row.fasting} / {row.meal}
                </Card>
              </Col>
            )
          })}
        </Row>
      </div>
    )
  }
}