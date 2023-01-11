import React, { Component } from 'react';
import TaskAdd from './TaskAdd';
import TaskTable from './Tasks'
import taskdata from "./Tasks.json";

var highestIndex = taskdata[taskdata.length - 1].id;
console.log(highestIndex)

class App extends Component {
  state = {
    daily: taskdata.filter((item)=> {
      return item.list === "Tasks"}), 
    master: taskdata.filter((item)=> {
      return item.list === "Masterlist"})
    };

  handleSubmit = yeet => {
    this.setState({master: [...this.state.master, yeet]})
  }
  removeTask = index =>{
    
    console.log(index + " was checked")
  }
  render() {
    return (
      <div>
        <h1>To-Do List</h1>
        <TaskAdd handleSubmit={this.handleSubmit} giveId={highestIndex}/>
        <h2>Today</h2>
        <TaskTable taskData={this.state.daily} removeTask={this.removeTask}/>
        <h2>Masterlist</h2>
        <TaskTable taskData={this.state.master} removeTask={this.removeTask}/>
      </div>
    );
  }
}

export default App;