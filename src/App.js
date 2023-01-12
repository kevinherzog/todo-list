import { wait } from '@testing-library/user-event/dist/utils';
import React, { Component } from 'react';
import TaskAdd from './TaskAdd';
import TaskTable from './Tasks'
import taskdata from "./Tasks.json";


class App extends Component {
  state = {
    archive: taskdata.filter((item)=> {
      if (item.checked === true) {
        item.list = "archive"
        return item.checked === true}
      }),
    daily: taskdata.filter((item)=> {
      return item.list === "Tasks"}), 
    master: taskdata.filter((item)=> {
      return item.list === "Masterlist"}),
    };

  handleSubmit = yeet => {
    this.setState({master: [...this.state.master, yeet]})
  }
  removeTask = (index, list) =>{
    console.log(this.state)
    if(list==="Masterlist"){
      this.setState({
        master: this.state.master.filter((task, i) => {
          console.log(i !== index)
          if(i == index){
            task.checked = true;
            task.list = "archive"
            this.setState({
              archive: [...this.state.archive, task]
            })
          }
          return i !== index;
        })
      });
    }else{
      this.setState({
        daily: this.state.daily.filter((task, i) => {
          console.log(i !== index)
          if(i == index){
            task.checked = true;
            task.list = "archive"
            this.setState({
              archive: [...this.state.archive, task]
            })
          }
          return i !== index;
        })
      });
    }

    console.log(this.state)
  }
  render() {
    return (
      <div>
        <h1>To-Do List</h1>
        <TaskAdd handleSubmit={this.handleSubmit} />
        <h2>Today</h2>
        <TaskTable taskData={this.state.daily} removeTask={this.removeTask}/>
        <h2>Masterlist</h2>
        <TaskTable taskData={this.state.master} removeTask={this.removeTask}/>
      </div>
    );
  }
}

export default App;