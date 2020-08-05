import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './components/Todo.css';
import styled from 'styled-components';


const premadeList = [
  {
    taskName: "Make Your Bed",
    id: 123,
    completed: false
  },
  {
    taskName: "Wash Laundry",
    id: 456,
    completed: false
  },
  {
    taskName: "Water Plants",
    id: 789,
    completed: false
  },
  {
    taskName: "Call Grandparents",
    id: 101,
    completed: false
  },
  {
    taskName: "Wash Dishes",
    id: 202,
    completed: false
  },
  {
    taskName: "Complete Homework",
    id: 303,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
    constructor(){
      super();
      this.state={
        premadeList
      };
      
    }
    toggleTask = taskId => {
      console.log(taskId);
      this.setState({
        premadeList: this.state.premadeList.map(task =>{
          if (taskId === task.id){
            return{
              ...task,
              completed: !task.completed
            };
          }
          return task;
        })
      });
    };

    addTask = task => {
      const newTask = {
        taskName: task,
        id:Date.now(),
        completed:false
      };
      this.setState({
        premadeList: [...this.state.premadeList, newTask]
      });
    };
    clearCompleted = e =>{
      e.preventDefault();
      this.setState({
        premadeList: this.state.premadeList.filter(task => !task.completed)
      });
    };

   
  
  
  render() {
    return (
      <AppDiv>
        <div id="logo">
        <h2>Brittany's To-Do List!</h2>
        </div>
        <div id="form">
          <TodoForm addTask={this.addTask}/>
        </div>
        <TodoList 
          tasks={this.state.premadeList}
          toggleTask={this.toggleTask}
          clearCompleted={this.clearCompleted} />
      </AppDiv>
    );
  }
}
const AppDiv = styled.div`
  width:50vw;
  margin:0 auto;
  background-color:#fff;
  opacity:0.8;
  border-radius:40px;
  height:100%;
  border:1px solid black;

  #logo{
      h2{
        font-family: 'Sedgwick Ave Display', cursive;
        font-size:3.5rem;
        text-align:center;
        
      }
}
  
`
export default App;
