import React, { Component } from 'react';
import TaskAdd from './TaskAdd';
import TaskTable from './Tasks';
import Archive from './Archive';
import taskdata from "./Tasks.json";

//taskdata = localStorage.getItem('')
//const[item, setItem] = React.useState([]);
class App extends Component {
  state = {
    archive: loadArchive(),
    daily: loadDaily(), 
    master: loadMaster(),
    };
  
  
  handleSubmit = item => {
    if (item.task !== '') {
      this.setState({master: [...this.state.master, item]}, () => {setMaster(this.state.master)})
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
            }, () => {setArchive(this.state.archive)})
          }
          return i !== index;
        })
      }, () => {setMaster(this.state.master)});
    }else if(list === "Tasks"){
      this.setState({
        daily: this.state.daily.filter((task, i) => {          
          if(i === index){
            task.checked = true;
            task.list = "archive"
            this.setState({
              archive: [...this.state.archive, task]
            }, () => {setArchive(this.state.archive)})
          }
          return i !== index;
        })
      }, () => {setDaily(this.state.daily)});
    }else{
      this.setState({
        archive: this.state.archive.filter((task, i) => {
          if (i === index) {
            task.checked = false;
            task.list = "Masterlist";
            this.setState({
              master: [...this.state.master, task]
            }, () => {setMaster(this.state.master)});
          }
          return i !== index;
        })
      }, () => {setArchive(this.state.archive)});
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
            }, () => {setDaily(this.state.daily)})
          }
          return i !== index;
        })
      }, () => {setMaster(this.state.master)});
    }else{
      this.setState({
        daily: this.state.daily.filter((task, i) => {          
          if(i === index){
            task.list = "Masterlist"
            this.setState({
              master: [...this.state.master, task]
            }, () => {setMaster(this.state.master)})
          }
          return i !== index;
        })
      }, () => {setDaily(this.state.daily)});
    }
  }
  clearArchive = () =>{
    this.setState({
      archive: []
    }, () => {setArchive(this.state.archive)})
  }
  render() {
    
    return (
      <div className='bg-slate-900 text-white'>
        <head>
          <style>{'body { background-color: rgb(15 23 42);}'}</style>
        </head>
        <div className='container mx-auto dark'>
          <div className='p-4'>
            <h1 className='text-3xl font-bold '>To-Do List</h1>
          </div>
          <div className='p-4'>            
            <TaskAdd handleSubmit={this.handleSubmit} init={this.init} />
          </div>
          <div className='xl:grid grid-cols-2 grid-flow-col'>
            <div className='p-4'>
              <h2 className="text-2xl font-bold  pb-4 pl-2">Today</h2>
              <TaskTable taskData={this.state.daily} removeTask={this.removeTask} moveTask={this.moveTask}/>
            </div>
            <div className='p-4'>
              <h2 className="text-2xl font-bold  pb-4 pl-2">Masterlist</h2>
              <TaskTable taskData={this.state.master} removeTask={this.removeTask} moveTask={this.moveTask}/>
            </div>
          </div>
          <div className='p-4'>
            <h2 className="text-2xl font-bold pb-4 pl-2">Archive</h2>
            <Archive taskData={this.state.archive} removeTask={this.removeTask} clearArchive={this.clearArchive}/>
          </div>
        </div>
      </div>
    );
  }
}

function loadArchive() {
  //localStorage.clear('archive')
  //localStorage.clear('master')
  //localStorage.clear('daily')
  if (localStorage.getItem('archive') !== 'undefined' && localStorage.getItem('archive') !== null) {
    return JSON.parse(localStorage.getItem('archive'));
  }else{
    return taskdata.filter((item)=> {
      if (item.checked === true) {
        item.list = "archive"}
        return item.checked === true
      })
  }  
}
function loadDaily() {
  if (localStorage.getItem('daily') !== 'undefined' && localStorage.getItem('daily') !== null) {
    return JSON.parse(localStorage.getItem('daily'));
  }else{
    return taskdata.filter((item)=> {
        return item.list === 'Tasks'
      })
  }  
}
function loadMaster() {
  if (localStorage.getItem('master') !== 'undefined' && localStorage.getItem('master') !== null) {
    return JSON.parse(localStorage.getItem('master'));
  }else{
    return taskdata.filter((item)=> {
        return item.list === 'Masterlist'
      })
  }  
}
function setArchive(state){
  localStorage.setItem('archive', JSON.stringify(state));
}
function setDaily(state){
  localStorage.setItem('daily', JSON.stringify(state));
}
function setMaster(state){
  localStorage.setItem('master', JSON.stringify(state));
}
export default App;