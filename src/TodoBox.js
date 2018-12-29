import React from 'react';
import TodoList from './TodoList';
import AddTodoItem from './AddTodoItem';
import {Button, Icon, Row, Col} from 'antd';


var counter = 3;


export default class TodoBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
          "id": "1",
          "task": "Familiarize with reactjs",
          "complete": "true"
        }, {
          "id": "2",
          "task": "Familiarize  with WIT.ai",
          "complete": "false"
        }, {
          "id": "3",
          "task": "Familiarize with redux",
          "complete": "false"
        }
      ]
    }
    this.handleToggleComplete = this.handleToggleComplete.bind(this);
    this.handleTaskDelete = this.handleTaskDelete.bind(this);
    this.handleAddTodoItem = this.handleAddTodoItem.bind(this);
  }




  // generateGUID() {
  //   return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
  //     var r = Math.random() * 16 | 0,
  //       v = c == 'x' ? r : (r & 0x3 | 0x8)
  //     return v.toString(16)
  //   })
  // }
  handleToggleComplete(taskId) {
    let data = this.state.data;
    for (let item of data) {
      if (item.id === taskId) {
        item.complete = item.complete === "true" ? "false" : "true"
      }
    }
    this.setState({data})
  }
  handleTaskDelete(taskId) {
    let data = this.state.data
    data = data.filter(task => task.id !== taskId)
    this.setState({data})
  }
  handleAddTodoItem(task) {
    counter+=1;

    let newItem = {
      id: counter,
      task,
      complete: "false"
    }
    console.log(newItem.id);
    let data = this.state.data
    data = data.concat([newItem])
    this.setState({data})
  }
  render() {
    return (
      <div>
        <div className="well">
          <h1 className="text-center">React TodoList</h1>
          <TodoList data={this.state.data} toggleComplete={this.handleToggleComplete} deleteTask={this.handleTaskDelete}/>
          <AddTodoItem saveNewItem={this.handleAddTodoItem}/>
        </div>
        <Row>
          <Col span={12}></Col>
          <Col span={12}>
            <Button className="pull-left"><Icon type="github"/>
              <a href="http://github.com/WilliamMaa">WilliamMaa</a>
            </Button>
            <Button className="pull-right"><Icon type="github"/>
              <a href="https://github.com/Valkyriean">Valkyriean</a>
            </Button>
          </Col>
        </Row>
      </div>
    )
  }
}
