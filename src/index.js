import React from 'react';
import ReactDOM from 'react-dom';
import TodoBox from './TodoBox';
import * as serviceWorker from './serviceWorker';


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

ReactDOM.render(<Index/>,document.getElementById("example"))
+serviceWorker.unregister();
