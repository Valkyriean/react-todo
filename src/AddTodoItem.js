import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col, Form, Input, Button,notification } from 'antd';
export default class AddTodoItem extends React.Component {
  constructor(props) {
    super(props)
    this.saveNewItem = this.saveNewItem.bind(this)
  }
  saveNewItem(e) {
    e.preventDefault()
    let element = ReactDOM.findDOMNode(this.refs.newItem)
    let task = element.value
    if (!task) {
      notification.open({
        description: 'You need something to do with',
    });
    } else {
      this.props.saveNewItem(task)
      element.value = ""
    }
  }
  render() {
    return (
      <div className="addtodoitem">
        <Form.Item>
          <label htmlFor="newItem"></label>
          <Input id="newItem" ref="newItem" type="text" placeholder="Add new todo here"></Input>
          <Button type="primary" className="pull-right" onClick={this.saveNewItem}>保存</Button>
        </Form.Item>
      </div>
    )
  }
}
