import React, {Component} from 'react';
import styled from 'styled-components';

class TodoForm extends Component{
constructor(props){
super(props);
this.state = {
    taskName: ""
};
}

handleChanges = e =>{
    this.setState({ taskName: e.target.value });
};
submitTask = e =>{
    e.preventDefault();
    this.props.addTask(this.state.taskName);
    
    this.setState({ taskName: ""});
}

render(){
    return(
        <FormDiv>
            <form onSubmit={this.submitTask}>
                <input
                type="text"
                name="task"
                size="45"
                value={this.state.taskName}
                onChange={this.handleChanges}
                placeholder="What do I need to do?"/>
                <button>Add To List</button>
            </form>
        </FormDiv>
    )
}

}
const FormDiv = styled.div`
    margin-bottom:20px;
    background-color:white;
    border-radius:10px;
    padding:1%;
  

        form{
            margin:0 auto;
            display:flex;
            justify-content:space-evenly;
            flex-wrap:wrap;
            
            input{
                font-family: 'Shadows Into Light', cursive;
                font-size:1rem;

            }
            button{
                font-family:'Shadows Into Light', cursive;
                font-size:1rem;

            }
        }

`
export default TodoForm;