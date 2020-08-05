import React, {Component} from 'react';
import styled from 'styled-components';

class Todo extends Component{
    constructor(props){
        super(props);
        console.log(props);
    }
    
    render(){
        return(
        <TaskDiv className={`task${this.props.task.completed ? " completed" : ""}`} onClick={() => this.props.toggleTask(this.props.task.id)}>
            <div>
                     <p>{this.props.task.taskName}</p>
                 </div>
        </TaskDiv>
        )
    }
}

const TaskDiv = styled.div`
    width:120px;
    border:1px solid black;
    margin:10px;
    height:120px;
    padding:1%;
    text-align:center;
    border-radius:3px;
    box-shadow:4px 4px 10px rgba(0,0,0,.4);
    background-color:#ccf;
    &:hover{
        background-color:limegreen;
    }

    p{
        margin-top:40%;
    }
`

export default Todo;