import uuid from 'uuid';
import React from 'react';

class Todo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        todos:[],
        input:"",        
      };
    }
    myChangeHandler = (e) => {
        this.setState({ input: e.target.value});
      }

      add = () => {
        this.setState({
          todos : this.state.todos.concat({
            text : this.state.input , 
            complete :false ,
            id : uuid(),
          }),
          input : ""
        })
      }
      delete = (id) => {this.setState({
                        todos:this.state.todos.filter(el => el.id !== id),

      })}
    complete=(id)=>{this.setState({
      todos:this.state.todos.map(el=>el.id===id?{...el,complete:!el.complete}:el)
      

    })}
    render() {
        
      return ( <div>
        <div className="section">
            <div className="container">
            <h1 className="titre">TO-DO APP!</h1>
            <h3 className="titre1">Add new Todo</h3>

            <input type="text" 
              class="text"
              name="name"
              placeholder="Enter new task"
              onChange={this.myChangeHandler}
              value={this.state.input}/>
            <button className="button" type="button" onClick={this.add}>Add</button>
            </div>
            </div>
    <h1 className="titre2">Let's get some work done!</h1>
    <hr width="50px"/>
    <ul className="liste">
       {this.state.todos.map(el=> <li>
         {el.complete?<h4 className="h1">{el.text}</h4>:<h4>{el.text}</h4>}
       
        <button  onClick={()=>this.complete(el.id)}>{ el.complete ? "undo" : "complete"}</button>
        <button onClick={()=>this.delete(el.id)}>delete</button>
       </li>)}
        
    </ul>
    <hr/>
    </div> 
    
      );
    }
  }
 
export default Todo;