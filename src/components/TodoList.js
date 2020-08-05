import React from 'react';
import Todo from './Todo';
import styled from 'styled-components';


const TodoList  = props => {
 console.log(props)
    return(
        <TodoListDiv>
            <div id="tasksDiv">
            {props.tasks.map(task =>(
              <Todo key={task.id} task={task} toggleTask={props.toggleTask} />  
            ))}
            </div>
            <button className="clear-btn" onClick={props.clearCompleted}>Clear Completed</button>
        </TodoListDiv>
    );
};

const TodoListDiv = styled.div`
    #tasksDiv{    
        display:flex;
        flex-wrap:wrap;
        justify-content:center;
    }
    button{
        font-family:'Shadows Into Light', cursive;
        font-size:1rem;
        margin-top:30px;
        margin-left:50px;
    }
`
export default TodoList;
