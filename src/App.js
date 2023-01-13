import React, { Component } from 'react';
import TaskAdd from './TaskAdd';
import TaskTable from './Tasks';
import Archive from './Archive';
import taskdata from "./Tasks.json";

//taskdata = localStorage.getItem('')
class App extends Component {
  state = {
    archive: taskdata.filter((item)=> {
      if (item.checked === true) {
        item.list = "archive"}
        return item.checked === true
      }),
    daily: taskdata.filter((item)=> {
      return item.list === "Tasks"}), 
    master: taskdata.filter((item)=> {
      return item.list === "Masterlist"}),
    };

  handleSubmit = yeet => {
    if (yeet.task !== '') {
      this.setState({master: [...this.state.master, yeet]})
    }
  }
  removeTask = (index, list) =>{
    if(list==="Masterlist"){
      this.setState({
        master: this.state.master.filter((task, i) => {          
          if(i === index){
            task.checked = true;
            task.list = "archive"
            this.setState({
              archive: [...this.state.archive, task]
            })
          }
          return i !== index;
        })
      });
    }else if(list === "Tasks"){
      this.setState({
        daily: this.state.daily.filter((task, i) => {          
          if(i === index){
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
        archive: this.state.archive.filter((task, i) => {
          if (i === index) {
            task.checked = false;
            task.list = "Masterlist";
            this.setState({
              master: [...this.state.master, task]
            });
          }
          return i !== index;
        })
      });
    }
  }
  moveTask = (index, list) => {
    if(list==="Masterlist"){
      this.setState({
        master: this.state.master.filter((task, i) => {          
          if(i === index){
            task.list = "Tasks"
            this.setState({
              daily: [...this.state.daily, task]
            })
          }
          return i !== index;
        })
      });
    }else{
      this.setState({
        daily: this.state.daily.filter((task, i) => {          
          if(i === index){
            task.list = "Masterlist"
            this.setState({
              master: [...this.state.master, task]
            })
          }
          return i !== index;
        })
      });
    }
  }
  render() {
    return (
      <div>
        <h1>To-Do List</h1>
        <TaskAdd handleSubmit={this.handleSubmit} />
        <h2>Today</h2>
        <TaskTable taskData={this.state.daily} removeTask={this.removeTask} moveTask={this.moveTask}/>
        <h2>Masterlist</h2>
        <TaskTable taskData={this.state.master} removeTask={this.removeTask} moveTask={this.moveTask}/>
        <h2>Archive</h2>
        <Archive taskData={this.state.archive} removeTask={this.removeTask}/>
      </div>
    );
  }
}

export default App;