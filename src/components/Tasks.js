/* eslint-disable no-unused-expressions */
import React from 'react'
import RenderTask from './RenderTask';

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.inputTask = React.createRef();
    this.state = {
      tasks: []
    }
  }

  addTask = () => {
    const newState = [...this.state.tasks];
    newState.push(this.inputTask.current.value);

    console.log(newState);

    newState.forEach(element => {
      console.log(element);
      if (newState.includes(element)) {
        console.log('il est la');
        this.setState({
          tasks: newState
        })
        alert('là');
      } else {
        console.log('pas la');
      }
      // if (newState.includes(newState[i])) {
      //   alert("Ya un bail");
      // } else {
      //   this.setState({
      //     tasks: newState
      //   })
      // }
    });

    // for (let i = 1; i < newState.length; i++) {
    //   console.log(i);
    //   console.log(newState[i]);
    //   if (newState.includes(newState[i])) {
    //     alert("Ya un bail");
    //   } else {
    //     this.setState({
    //       tasks: newState
    //     })
    //   }
    // }


    this.inputTask.current.value = '';
  }

  handleClick = (e) => {
    const deleteTaskState = [...this.state.tasks]
    const taskId = deleteTaskState.indexOf(e.target.name)

    deleteTaskState.splice(taskId, 1);

    this.setState({
      tasks: deleteTaskState
    })
  }

  // handleKeyPress = (e) => {
  //   if (e.key === "13") {
  //     this.addTask();
  //   }
  // }

  render() {
    return(
      <div>
        <div className="start--task">
          <h3>Todo:</h3>
          <input className="start--task--input" ref={this.inputTask}></input>
          <div className="start-task--btn-add">
            <button className="btn btn-secondary mt-2" onClick={this.addTask}>Add your task</button>
          </div>
        </div>
        <div className="display--tasks" ref="displayTasks">
          <RenderTask tasks={this.state.tasks} handleClick={this.handleClick} />
        </div>
      </div>
    )
  }
}

export default Task