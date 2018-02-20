import React, { Component } from 'react';

export default class Index extends Component {
    onSubmit = (e) => {
       e.preventDefault();
     let text = this.refs.text.value
        if(!text){
            alert('Please enter a todo')
            return;
        }
        if(this.props.isEdit){
            var updateTodo = {
                id: this.props.isEdit,
                text: text
            }
            this.props.onTodoUpdate(updateTodo)
        } else {
            this.props.onTodoAdd(text);
        }

        this.refs.text.value='';
    }

    onChange = (e) => {
  this.props.onChangeText(e.target.value);
    }
    render() {
        return(
            <div>
                <form>
                  <input  type="text"  ref="text"  value={this.props.text} onChange={this.onChange}></input>
                <button className="btn-primary" onClick={this.onSubmit}>Add</button>
                  </form>
                  </div>
           
        )
    }
}