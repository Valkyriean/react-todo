import React from 'react';
import ReactDOM from 'react-dom';
import TodoBox from './TodoBox';


export default class Index extends React.Component {
  constructor(){
    super();
  };
  render() {
    return (
        <TodoBox />
    );
  }
}

ReactDOM.render(<Index/ >,document.getElementById("root"));
